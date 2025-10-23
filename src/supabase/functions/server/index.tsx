import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from 'jsr:@supabase/supabase-js@2';
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-b973ed60/health", (c) => {
  return c.json({ status: "ok" });
});

// Newsletter subscription endpoint
app.post("/make-server-b973ed60/newsletter", async (c) => {
  try {
    const body = await c.req.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return c.json({ error: "Valid email is required" }, 400);
    }

    // Check if email already exists
    const existing = await kv.get(`newsletter:${email}`);
    if (existing) {
      return c.json({ error: "Email already subscribed" }, 409);
    }

    // Store newsletter subscription
    await kv.set(`newsletter:${email}`, {
      email,
      signupDate: new Date().toISOString(),
    });

    console.log(`Newsletter subscription added: ${email}`);
    return c.json({ success: true, message: "Successfully subscribed to newsletter" });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return c.json({ error: "Failed to subscribe to newsletter" }, 500);
  }
});

// Waitlist signup endpoint
app.post("/make-server-b973ed60/waitlist", async (c) => {
  try {
    const body = await c.req.json();
    const { email, productInterest } = body;

    if (!email || !email.includes("@")) {
      return c.json({ error: "Valid email is required" }, 400);
    }

    const timestamp = new Date().toISOString();
    const key = `waitlist:${email}:${productInterest || 'general'}`;

    // Check if already on waitlist for this product
    const existing = await kv.get(key);
    if (existing) {
      return c.json({ error: "Already on waitlist for this product" }, 409);
    }

    await kv.set(key, {
      email,
      productInterest: productInterest || 'general',
      timestamp,
    });

    console.log(`Waitlist signup added: ${email} for ${productInterest || 'general'}`);
    return c.json({ success: true, message: "Successfully joined waitlist" });
  } catch (error) {
    console.error("Waitlist signup error:", error);
    return c.json({ error: "Failed to join waitlist" }, 500);
  }
});

// Community submission endpoint (hero designs and stories)
app.post("/make-server-b973ed60/community-submit", async (c) => {
  try {
    const body = await c.req.json();
    const { type, content, image, title, authorName } = body;

    if (!type || !content) {
      return c.json({ error: "Type and content are required" }, 400);
    }

    const timestamp = new Date().toISOString();
    const id = `${type}:${Date.now()}`;

    await kv.set(`community:${id}`, {
      id,
      type,
      content,
      image: image || null,
      title: title || 'Untitled',
      authorName: authorName || 'Anonymous',
      date: timestamp,
    });

    console.log(`Community submission added: ${type} - ${title || 'Untitled'}`);
    return c.json({ success: true, message: "Submission received successfully", id });
  } catch (error) {
    console.error("Community submission error:", error);
    return c.json({ error: "Failed to submit content" }, 500);
  }
});

// Get community submissions
app.get("/make-server-b973ed60/community-submissions", async (c) => {
  try {
    const type = c.req.query("type");
    const prefix = type ? `community:${type}:` : "community:";
    
    const submissions = await kv.getByPrefix(prefix);
    
    // Sort by date, newest first
    const sorted = submissions.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return c.json({ submissions: sorted });
  } catch (error) {
    console.error("Error fetching community submissions:", error);
    return c.json({ error: "Failed to fetch submissions" }, 500);
  }
});

// ============================================
// ADMIN ROUTES
// ============================================

// Helper function to verify admin access
async function verifyAdmin(authHeader: string | null) {
  if (!authHeader?.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.split(' ')[1];
  
  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    );

    const { data: { user }, error } = await supabase.auth.getUser(token);
    
    if (error || !user) {
      console.error('Admin auth error:', error);
      return null;
    }

    return user;
  } catch (error) {
    console.error('Admin verification error:', error);
    return null;
  }
}

// Admin login
app.post("/make-server-b973ed60/admin/login", async (c) => {
  try {
    const { email, password } = await c.req.json();

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    );

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data.session) {
      console.error('Login error:', error);
      return c.json({ error: 'Invalid credentials' }, 401);
    }

    return c.json({
      access_token: data.session.access_token,
      user: {
        id: data.user.id,
        email: data.user.email,
        name: data.user.user_metadata?.name,
      },
    });
  } catch (error) {
    console.error('Admin login error:', error);
    return c.json({ error: 'Login failed' }, 500);
  }
});

// Verify admin session
app.get("/make-server-b973ed60/admin/verify", async (c) => {
  const user = await verifyAdmin(c.req.header('Authorization'));
  
  if (!user) {
    return c.json({ error: 'Unauthorized' }, 401);
  }

  return c.json({
    user: {
      id: user.id,
      email: user.email,
      name: user.user_metadata?.name,
    },
  });
});

// Get all pages (admin only)
app.get("/make-server-b973ed60/admin/pages", async (c) => {
  const user = await verifyAdmin(c.req.header('Authorization'));
  
  if (!user) {
    return c.json({ error: 'Unauthorized' }, 401);
  }

  try {
    const pages = await kv.getByPrefix('page:');
    
    const pageList = pages.map((p: any) => ({
      page_name: p.page_name,
      title: p.title,
      last_modified: p.last_modified,
      published: p.published || false,
    }));

    return c.json({ pages: pageList });
  } catch (error) {
    console.error('Error fetching pages:', error);
    return c.json({ error: 'Failed to fetch pages' }, 500);
  }
});

// Get single page for editing (admin only)
app.get("/make-server-b973ed60/admin/pages/:pageName", async (c) => {
  const user = await verifyAdmin(c.req.header('Authorization'));
  
  if (!user) {
    return c.json({ error: 'Unauthorized' }, 401);
  }

  try {
    const pageName = c.req.param('pageName');
    const page = await kv.get(`page:${pageName}`);

    if (!page) {
      return c.json({ error: 'Page not found' }, 404);
    }

    return c.json(page);
  } catch (error) {
    console.error('Error fetching page:', error);
    return c.json({ error: 'Failed to fetch page' }, 500);
  }
});

// Save/update page (admin only)
app.post("/make-server-b973ed60/admin/pages", async (c) => {
  const user = await verifyAdmin(c.req.header('Authorization'));
  
  if (!user) {
    return c.json({ error: 'Unauthorized' }, 401);
  }

  try {
    const { page_name, title, html_content, css_content, json_schema, published } = await c.req.json();

    if (!page_name || !title) {
      return c.json({ error: 'page_name and title are required' }, 400);
    }

    const pageData = {
      page_name,
      title,
      html_content: html_content || '',
      css_content: css_content || '',
      json_schema: json_schema || '',
      published: published || false,
      last_modified: new Date().toISOString(),
      modified_by: user.id,
    };

    await kv.set(`page:${page_name}`, pageData);

    console.log(`Page saved: ${page_name} by ${user.email}`);
    return c.json({ success: true, message: 'Page saved successfully' });
  } catch (error) {
    console.error('Error saving page:', error);
    return c.json({ error: 'Failed to save page' }, 500);
  }
});

// Publish page (admin only)
app.post("/make-server-b973ed60/admin/pages/publish", async (c) => {
  const user = await verifyAdmin(c.req.header('Authorization'));
  
  if (!user) {
    return c.json({ error: 'Unauthorized' }, 401);
  }

  try {
    const { page_name } = await c.req.json();

    if (!page_name) {
      return c.json({ error: 'page_name is required' }, 400);
    }

    const page = await kv.get(`page:${page_name}`);

    if (!page) {
      return c.json({ error: 'Page not found' }, 404);
    }

    page.published = true;
    page.published_at = new Date().toISOString();
    page.published_by = user.id;

    await kv.set(`page:${page_name}`, page);

    console.log(`Page published: ${page_name} by ${user.email}`);
    return c.json({ success: true, message: 'Page published successfully' });
  } catch (error) {
    console.error('Error publishing page:', error);
    return c.json({ error: 'Failed to publish page' }, 500);
  }
});

// Delete page (admin only)
app.delete("/make-server-b973ed60/admin/pages/:pageName", async (c) => {
  const user = await verifyAdmin(c.req.header('Authorization'));
  
  if (!user) {
    return c.json({ error: 'Unauthorized' }, 401);
  }

  try {
    const pageName = c.req.param('pageName');
    await kv.del(`page:${pageName}`);

    console.log(`Page deleted: ${pageName} by ${user.email}`);
    return c.json({ success: true, message: 'Page deleted successfully' });
  } catch (error) {
    console.error('Error deleting page:', error);
    return c.json({ error: 'Failed to delete page' }, 500);
  }
});

// ============================================
// PUBLIC ROUTES
// ============================================

// Get published page (public)
app.get("/make-server-b973ed60/pages/:slug", async (c) => {
  try {
    const slug = c.req.param('slug');
    const page = await kv.get(`page:${slug}`);

    if (!page || !page.published) {
      return c.json({ error: 'Page not found' }, 404);
    }

    return c.json({
      title: page.title,
      html_content: page.html_content,
      css_content: page.css_content,
    });
  } catch (error) {
    console.error('Error fetching public page:', error);
    return c.json({ error: 'Failed to fetch page' }, 500);
  }
});

Deno.serve(app.fetch);