import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { JournalEditor } from "@/components/journal/JournalEditor";
import { MediaPicker } from "@/components/media/MediaPicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { OutputData } from "@editorjs/editorjs";
import { slugify } from "@/lib/slugify";
import { sanitizeError } from "@/lib/sanitizeError";
import { ArrowLeft, Save, Eye, Upload, ImageIcon, FileText, X } from "lucide-react";
import { markdownToEditorJS } from "@/lib/markdownToEditorJS";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { JournalRenderer } from "@/components/journal/JournalRenderer";
import { uploadToSupabaseStorage } from "@/lib/uploadToStorage";

export default function LoreEditorPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [topics, setTopics] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [topicInput, setTopicInput] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [content, setContent] = useState<OutputData>({ blocks: [] });
  const [showPreview, setShowPreview] = useState(false);
  const [showMediaPicker, setShowMediaPicker] = useState(false);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const markdownInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (id) {
      fetchArticle();
    }
  }, [id]);

  useEffect(() => {
    if (!id && title && !slug) {
      setSlug(slugify(title));
    }
  }, [title, id, slug]);

  const fetchArticle = async () => {
    if (!id) return;
    
    setLoading(true);
    const { data, error } = await supabase
      .from("lore_articles")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      toast.error("Failed to load article");
      navigate("/admin/lore");
      return;
    }

    if (data) {
      setTitle(data.title);
      setSlug(data.slug);
      setExcerpt(data.excerpt || "");
      setCoverImage(data.cover_image || "");
      setTopics(data.topics || []);
      setTags(data.tags || []);
      
      try {
        const parsedContent = JSON.parse(data.content);
        setContent(parsedContent);
      } catch (e) {
        setContent({ blocks: [] });
      }
    }
    
    setLoading(false);
  };

  const handleAddTopic = () => {
    const trimmed = topicInput.trim();
    if (trimmed && !topics.includes(trimmed)) {
      setTopics([...topics, trimmed]);
      setTopicInput("");
    }
  };

  const handleRemoveTopic = (topic: string) => {
    setTopics(topics.filter(t => t !== topic));
  };

  const handleAddTag = () => {
    const trimmed = tagInput.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
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

    const articleData = {
      title: title.trim(),
      slug: slug.trim(),
      excerpt: excerpt.trim() || null,
      cover_image: coverImage.trim() || null,
      topics,
      tags,
      content: JSON.stringify(content),
      published: publish,
    };

    try {
      if (id) {
        const { error } = await supabase
          .from("lore_articles")
          .update(articleData)
          .eq("id", id);

        if (error) throw error;
        
        toast.success(publish ? "Article published!" : "Draft saved!");
      } else {
        const { error } = await supabase
          .from("lore_articles")
          .insert([articleData]);

        if (error) {
          if (error.message.includes("duplicate key")) {
            toast.error("An article with this slug already exists");
            return;
          }
          throw error;
        }
        
        toast.success(publish ? "Article published!" : "Draft created!");
        navigate("/admin/lore");
      }
      
      setLastSaved(new Date());
    } catch (error: any) {
      console.error('Error saving article:', error);
      toast.error(sanitizeError(error));
    } finally {
      setSaving(false);
    }
  };

  const handleCoverImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingCover(true);
    try {
      const url = await uploadToSupabaseStorage(file);
      setCoverImage(url);
      toast.success("Cover image uploaded!");
    } catch (error: any) {
      console.error('Error uploading cover image:', error);
      toast.error(sanitizeError(error));
    } finally {
      setUploadingCover(false);
    }
  };

  const handleCoverImageSelect = (url: string) => {
    setCoverImage(url);
    setShowMediaPicker(false);
    toast.success("Cover image selected!");
  };

  const handleMarkdownImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.md') && !file.name.endsWith('.markdown')) {
      toast.error('Please select a Markdown file (.md or .markdown)');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB');
      return;
    }

    try {
      const text = await file.text();
      
      if (!text.trim()) {
        toast.error('Markdown file is empty');
        return;
      }

      const editorJSData = await markdownToEditorJS(text);
      
      if (!editorJSData.blocks || editorJSData.blocks.length === 0) {
        toast.error('No content could be imported from the Markdown file');
        return;
      }

      setContent(editorJSData);
      toast.success(`Successfully imported ${editorJSData.blocks.length} block${editorJSData.blocks.length === 1 ? '' : 's'}`);
    } catch (error) {
      console.error('Failed to import Markdown:', error);
      toast.error('Failed to import Markdown file. Please check the file format.');
    }

    if (markdownInputRef.current) {
      markdownInputRef.current.value = '';
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
            onClick={() => navigate("/admin/lore")}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-3xl font-bold">
            {id ? "Edit Article" : "New Article"}
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
            onClick={() => markdownInputRef.current?.click()}
          >
            <FileText className="w-4 h-4 mr-2" />
            Import Markdown
          </Button>
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
        <input
          ref={markdownInputRef}
          type="file"
          accept=".md,.markdown"
          className="hidden"
          onChange={handleMarkdownImport}
        />
      </div>

      <Card className="p-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title *</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter article title"
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
            URL: /lore/{slug || "your-slug"}
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

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="topics">Topics</Label>
            <div className="flex gap-2">
              <Input
                id="topics"
                value={topicInput}
                onChange={(e) => setTopicInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTopic())}
                placeholder="Add topic and press Enter"
              />
              <Button type="button" variant="outline" onClick={handleAddTopic}>Add</Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {topics.map((topic, i) => (
                <Badge key={i} variant="outline" className="gap-1">
                  {topic}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => handleRemoveTopic(topic)} />
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags</Label>
            <div className="flex gap-2">
              <Input
                id="tags"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                placeholder="Add tag and press Enter"
              />
              <Button type="button" variant="outline" onClick={handleAddTag}>Add</Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="gap-1">
                  {tag}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => handleRemoveTag(tag)} />
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="coverImage">Cover Image</Label>
          <div className="flex gap-2">
            <Input
              id="coverImage"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              placeholder="Image URL or use buttons below"
              className="flex-1"
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => document.getElementById('cover-upload')?.click()}
              disabled={uploadingCover}
            >
              <Upload className="w-4 h-4 mr-2" />
              {uploadingCover ? 'Uploading...' : 'Upload'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowMediaPicker(true)}
            >
              <ImageIcon className="w-4 h-4 mr-2" />
              Library
            </Button>
            <input
              id="cover-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleCoverImageUpload}
            />
          </div>
          {coverImage && (
            <div className="mt-2">
              <img
                src={coverImage}
                alt="Cover preview"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          )}
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
            <DialogTitle>{title || "Untitled Article"}</DialogTitle>
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

      <MediaPicker
        open={showMediaPicker}
        onClose={() => setShowMediaPicker(false)}
        onSelect={handleCoverImageSelect}
      />
    </div>
  );
}
