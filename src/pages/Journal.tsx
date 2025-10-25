import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search } from "lucide-react";
import { format } from "date-fns";
import { calculateReadTime } from "@/lib/readTime";
import { extractPlainText } from "@/lib/extractText";

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

const Journal = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<JournalPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<JournalPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  }, [searchQuery, posts]);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("journal_posts")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
      setFilteredPosts(data || []);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const getExcerpt = (post: JournalPost): string => {
    if (post.excerpt) return post.excerpt;
    return extractPlainText(post.content, 150);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/20 via-background to-secondary/20 py-20">
        <div className="absolute inset-0 bg-[url('/src/assets/game-board.jpg')] opacity-5 bg-cover bg-center" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Chronicles from the Forge
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Journey through the development of Shadows of the Nine Realms
          </p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Posts Grid */}
        {loading ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Loading posts...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">
              {searchQuery ? "No posts found matching your search." : "No posts yet. Check back soon!"}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
            {filteredPosts.map((post) => {
              const readTime = calculateReadTime(post.content);
              const excerpt = getExcerpt(post);

              return (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:border-primary/50 transition-all cursor-pointer group"
                  onClick={() => navigate(`/journal/${post.slug}`)}
                >
                  {post.cover_image && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.cover_image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {format(new Date(post.created_at), "MMM d, yyyy")}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {readTime} min
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {excerpt}
                    </p>

                    <div className="pt-2">
                      <Badge variant="secondary">Development Update</Badge>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Journal;
