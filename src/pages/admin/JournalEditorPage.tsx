import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { JournalEditor } from "@/components/journal/JournalEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { OutputData } from "@editorjs/editorjs";
import { slugify } from "@/lib/slugify";
import { ArrowLeft, Save, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { JournalRenderer } from "@/components/journal/JournalRenderer";

export default function JournalEditorPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [content, setContent] = useState<OutputData>({ blocks: [] });
  const [showPreview, setShowPreview] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  useEffect(() => {
    if (id) {
      fetchPost();
    }
  }, [id]);

  // Auto-generate slug from title
  useEffect(() => {
    if (!id && title && !slug) {
      setSlug(slugify(title));
    }
  }, [title, id, slug]);

  const fetchPost = async () => {
    if (!id) return;
    
    setLoading(true);
    const { data, error } = await supabase
      .from("journal_posts")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      toast.error("Failed to load post");
      navigate("/admin/dev-journal");
      return;
    }

    if (data) {
      setTitle(data.title);
      setSlug(data.slug);
      setExcerpt(data.excerpt || "");
      setCoverImage(data.cover_image || "");
      
      try {
        const parsedContent = JSON.parse(data.content);
        setContent(parsedContent);
      } catch (e) {
        setContent({ blocks: [] });
      }
    }
    
    setLoading(false);
  };

  const handleSave = async (publish: boolean) => {
    if (!title.trim()) {
      toast.error("Title is required");
      return;
    }

    if (!slug.trim()) {
      toast.error("Slug is required");
      return;
    }

    if (!content.blocks || content.blocks.length === 0) {
      toast.error("Content cannot be empty");
      return;
    }

    setSaving(true);

    const postData = {
      title: title.trim(),
      slug: slug.trim(),
      excerpt: excerpt.trim() || null,
      cover_image: coverImage.trim() || null,
      content: JSON.stringify(content),
      published: publish,
    };

    try {
      if (id) {
        const { error } = await supabase
          .from("journal_posts")
          .update(postData)
          .eq("id", id);

        if (error) throw error;
        
        toast.success(publish ? "Post published!" : "Draft saved!");
      } else {
        const { error } = await supabase
          .from("journal_posts")
          .insert([postData]);

        if (error) {
          if (error.message.includes("duplicate key")) {
            toast.error("A post with this slug already exists");
            return;
          }
          throw error;
        }
        
        toast.success(publish ? "Post published!" : "Draft created!");
        navigate("/admin/dev-journal");
      }
      
      setLastSaved(new Date());
    } catch (error: any) {
      toast.error(error.message || "Failed to save post");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/admin/dev-journal")}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-3xl font-bold">
            {id ? "Edit Post" : "New Post"}
          </h1>
        </div>
        
        <div className="flex items-center gap-2">
          {lastSaved && (
            <span className="text-sm text-muted-foreground">
              Last saved: {lastSaved.toLocaleTimeString()}
            </span>
          )}
          <Button
            variant="outline"
            onClick={() => setShowPreview(true)}
            disabled={!content.blocks.length}
          >
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button
            variant="outline"
            onClick={() => handleSave(false)}
            disabled={saving}
          >
            <Save className="w-4 h-4 mr-2" />
            Save Draft
          </Button>
          <Button
            onClick={() => handleSave(true)}
            disabled={saving}
          >
            Publish
          </Button>
        </div>
      </div>

      <Card className="p-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title *</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            maxLength={200}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="slug">Slug *</Label>
          <Input
            id="slug"
            value={slug}
            onChange={(e) => setSlug(slugify(e.target.value))}
            placeholder="url-friendly-slug"
            maxLength={200}
          />
          <p className="text-xs text-muted-foreground">
            URL: /journal/{slug || "your-slug"}
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="Brief description for preview cards (optional)"
            maxLength={300}
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="coverImage">Cover Image URL</Label>
          <Input
            id="coverImage"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            placeholder="https://example.com/image.jpg (optional)"
          />
        </div>
      </Card>

      <div className="space-y-2">
        <Label>Content *</Label>
        <JournalEditor
          initialData={content}
          onChange={setContent}
        />
      </div>

      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{title || "Untitled Post"}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {coverImage && (
              <img
                src={coverImage}
                alt={title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            )}
            <JournalRenderer content={content} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
