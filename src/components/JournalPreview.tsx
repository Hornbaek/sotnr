import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

export const JournalPreview = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['journal-posts-preview'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('journal_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(3);
      
      if (error) throw error;
      return data;
    }
  });

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-card-brown to-background relative overflow-hidden">
      {/* Parchment texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuNCIvPjwvc3ZnPg==')]" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
              From the Forge
            </h2>
          </div>
          
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Chronicles of development, design insights, and tales from the creation of the Nine Realms
          </p>
          
          {/* Decorative separator */}
          <div className="flex items-center justify-center gap-2 mt-6 text-primary/40">
            <span>◆</span>
            <span>◆</span>
            <span>◆</span>
          </div>
        </motion.div>

        {/* Journal Posts Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card-brown border border-border rounded-lg p-6 animate-pulse">
                <div className="h-4 bg-primary/20 rounded w-1/3 mb-4" />
                <div className="h-6 bg-primary/20 rounded w-full mb-3" />
                <div className="h-4 bg-primary/20 rounded w-full mb-2" />
                <div className="h-4 bg-primary/20 rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : posts && posts.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link to={`/journal/${post.slug}`}>
                  <div className="bg-card-brown border border-border hover:border-primary/50 rounded-lg p-6 h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-xs text-primary/70 mb-3">
                      <Calendar className="w-3 h-3" />
                      <span>{format(new Date(post.created_at), 'MMM dd, yyyy')}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-sm text-foreground/70 line-clamp-3 mb-4">
                      {post.excerpt || post.content.substring(0, 150) + '...'}
                    </p>
                    
                    {/* Read more */}
                    <div className="flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                      <span>Read more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12 text-foreground/60">
            <p className="italic">The first entries are being inscribed... Check back soon.</p>
          </div>
        )}

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link to="/journal">
            <Button size="lg" variant="outline" className="group">
              View All Entries
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
