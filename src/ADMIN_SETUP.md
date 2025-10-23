# Admin Page Builder Setup Guide

## 🎯 Overview

Your Norse-themed website now includes a powerful **GrapesJS-based Page Builder** system that allows you to create and manage content visually through an admin interface.

---

## 🔐 Creating Your First Admin User

To access the admin panel, you need to create an admin user in Supabase:

### Option 1: Using Supabase Dashboard (Recommended)

1. **Go to your Supabase Project Dashboard**
   - Navigate to: https://supabase.com/dashboard

2. **Open Authentication Section**
   - Click on "Authentication" in the left sidebar
   - Click on "Users" tab

3. **Create New User**
   - Click "Add User" → "Create New User"
   - Enter email (e.g., `admin@yourdomain.com`)
   - Enter a secure password
   - Click "Create User"

4. **Confirm Email**
   - The user is automatically confirmed since you haven't set up an email server yet

### Option 2: Using Server Route (For Development)

You can create a temporary signup route in the server, but **remove it after creating your admin account**.

---

## 🚀 Accessing the Admin Panel

1. **Navigate to the login page:**
   ```
   https://your-site.com/admin/login
   ```

2. **Login with your credentials:**
   - Enter the email and password you created
   - Click "Enter Sanctum"

3. **You'll be redirected to the Admin Dashboard**

---

## 📝 Creating and Managing Pages

### Dashboard Overview

From the admin dashboard, you can:
- **Quick Access**: Edit predefined pages (Lore Codex, Developer's Journal, Workshop, Home)
- **Create New Pages**: Click "Create New Page" to start from scratch
- **Manage All Pages**: View, edit, or delete existing pages

### Creating a New Page

1. Click "Create New Page" or one of the Quick Access cards
2. Enter a **Page Title** (e.g., "Epic Battle Guide")
3. Enter a **URL Slug** (e.g., "epic-battle-guide")
4. The GrapesJS editor will load with:
   - **Left Sidebar**: Drag-and-drop blocks
   - **Center**: Live canvas for editing
   - **Right Sidebar**: Layers, traits, and styles

### Using the Page Builder

#### Available Norse-Themed Blocks:

1. **Norse Hero Section** - Full-screen hero with background image
2. **Text + Image** - Two-column content layout
3. **Two Columns** - Side-by-side content cards
4. **Three Columns** - Feature grid layout
5. **Card Grid** - Image cards in a grid
6. **Call to Action** - CTA section with buttons
7. **Devlog Article** - Blog/journal post layout
8. **Lore Entry** - Codex/bestiary entry template

#### Editing Content:

- **Text**: Click any text to edit inline
- **Images**: Click images to change URL or upload
- **Styles**: Select element → use right sidebar to adjust colors, spacing, typography
- **Layout**: Drag elements to reposition
- **Responsive**: Use device switcher (Desktop/Tablet/Mobile) in top toolbar

#### Toolbar Controls:

- 👁️ **Toggle Borders**: Show/hide element outlines
- 🖼️ **Preview**: View without editor UI
- ⛶ **Fullscreen**: Maximize canvas
- ↶ **Undo**: Revert changes
- ↷ **Redo**: Reapply changes
- 💾 **Export**: Save as draft (click the export icon)

### Saving and Publishing

1. **Save Draft**:
   - Click the export/save icon in the toolbar
   - Your changes are saved but not public

2. **Publish**:
   - Click the green "Publish" button in top-right
   - Page becomes publicly accessible

### Viewing Published Pages

Published pages are accessible at:
```
https://your-site.com/p/{page-slug}
```

For example:
- `/p/lore-codex`
- `/p/developer-journal`
- `/p/epic-battle-guide`

---

## 🎨 Customization

### Adding Custom CSS

In the GrapesJS editor, you can:
1. Select any element
2. Use the Style Manager (right sidebar)
3. Or add custom CSS classes

The Norse theme colors are already integrated:
- Primary Gold: `#d4a259`
- Dark Wood: `#2a2218`
- Parchment: `#e8dcc4`
- Amber: `#f5a623`

### Custom Fonts

The editor uses the same Norse-inspired fonts:
- **Headings**: Cinzel (serif)
- **Body**: Philosopher (sans-serif)

---

## 🔒 Security Notes

1. **Keep your admin credentials secure**
2. **Use a strong password**
3. **Don't share your access token**
4. **Consider adding 2FA in Supabase settings**
5. **Limit admin access to trusted users only**

---

## 🛠️ Technical Details

### Database Structure

Pages are stored in the KV store with the key format:
```
page:{slug}
```

Each page contains:
- `page_name`: URL slug
- `title`: Display title
- `html_content`: Rendered HTML
- `css_content`: Page-specific CSS
- `json_schema`: GrapesJS component structure
- `published`: Boolean (draft/published)
- `last_modified`: Timestamp
- `modified_by`: User ID

### API Endpoints

**Admin (Protected)**:
- `POST /admin/login` - Login
- `GET /admin/verify` - Verify session
- `GET /admin/pages` - List all pages
- `GET /admin/pages/:pageName` - Get page for editing
- `POST /admin/pages` - Save/update page
- `POST /admin/pages/publish` - Publish page
- `DELETE /admin/pages/:pageName` - Delete page

**Public**:
- `GET /pages/:slug` - Get published page

---

## 📚 Next Steps

1. **Create your first page** using the quick access cards
2. **Experiment with blocks** to understand the layout system
3. **Customize styles** to match your content needs
4. **Publish when ready** to make content live
5. **Link to pages** from your main navigation if desired

---

## 🎭 Tips for Best Results

1. **Use high-quality images** from Unsplash or your own assets
2. **Keep text readable** with good contrast
3. **Test responsive layouts** using device switcher
4. **Save frequently** to avoid losing work
5. **Preview before publishing** to ensure everything looks right

---

## 🆘 Troubleshooting

**Can't login?**
- Verify user was created in Supabase
- Check email/password are correct
- Clear browser cache and try again

**Page not saving?**
- Check browser console for errors
- Ensure you filled in title and slug
- Verify you're still logged in

**Page not displaying?**
- Ensure it's published (not just saved)
- Check the URL is correct: `/p/{slug}`
- Verify no browser console errors

---

## 🌟 Enjoy Your Content Management System!

You now have a professional-grade page builder integrated seamlessly into your Norse-themed website. Create epic content worthy of the Nine Realms!
