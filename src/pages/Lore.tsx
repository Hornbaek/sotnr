import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { sanitizeError } from '@/lib/sanitizeError';

interface LoreArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image: string | null;
  topics: string[];
  tags: string[];
  created_at: string;
}

const Lore = () => {
  const [articles, setArticles] = useState<LoreArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const { data, error } = await supabase
        .from('lore_articles')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setArticles(data || []);
    } catch (error: any) {
      console.error('Error loading lore articles:', error);
      toast.error(sanitizeError(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display text-primary mb-4">Lore</h1>
          <p className="text-muted-foreground text-lg">
            Explore the Norse mythology that shapes the Nine Realms
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12 text-muted-foreground">
            Loading articles...
          </div>
        ) : articles.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-muted-foreground mb-2">No lore articles published yet</p>
              <p className="text-sm text-muted-foreground">Check back soon for Norse mythology content</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                {article.cover_image && (
                  <div className="overflow-hidden rounded-t-lg">
                    <img
                      src={article.cover_image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {article.excerpt || 'Discover the lore of the Nine Realms...'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {article.topics && article.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {article.topics.slice(0, 3).map((topic, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  )}
                  {article.tags && article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {article.tags.slice(0, 3).map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <p className="text-xs text-muted-foreground mt-2">
                    {new Date(article.created_at).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lore;
