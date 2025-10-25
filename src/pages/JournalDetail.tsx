import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { JournalRenderer } from "@/components/journal/JournalRenderer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { calculateReadTime } from "@/lib/readTime";
import { format } from "date-fns";

interface JournalPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  cover_image: string | null;
  published: boolean;
  created_at: string;
}

export default function JournalDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<JournalPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    if (!slug) return;

    setLoading(true);
    const { data, error } = await supabase
      .from("journal_posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single();

    if (error || !data) {
      navigate("/journal");
      return;
    }

    setPost(data);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading post...</p>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  const readTime = calculateReadTime(post.content);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-br from-primary/20 via-background to-secondary/20">
        {post.cover_image && (
          <img
            src={post.cover_image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <Button
            variant="ghost"
            onClick={() => navigate("/journal")}
            className="mb-8 w-fit"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Journal
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{format(new Date(post.created_at), "MMMM d, yyyy")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{readTime} min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <JournalRenderer content={post.content} />
        </article>

        {/* Back to Journal */}
        <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-border">
          <Button
            variant="outline"
            onClick={() => navigate("/journal")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            View All Posts
          </Button>
        </div>
      </div>
    </div>
  );
}
