import { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Mail, CheckCircle, Calendar, User } from 'lucide-react';
import { RunicDivider } from '../components/RunicDivider';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export const Journal = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const blogPosts = [
    {
      title: 'The Birth of Shadows: How It All Began',
      author: 'Game Designer',
      date: 'October 20, 2025',
      category: 'Development',
      excerpt: 'The journey of creating Shadows of the Nine Realms started with a simple question: What if we could bring the epic scale of Norse mythology to the tabletop?',
      image: 'https://images.unsplash.com/photo-1710976483742-6b25af703c9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3JzZSUyMG15dGhvbG9neXxlbnwxfHx8fDE3NjEwMjkwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Crafting the Nine Realms: World Building',
      author: 'Lead Artist',
      date: 'October 15, 2025',
      category: 'Design',
      excerpt: 'Each realm needed to feel distinct yet connected. Here\'s how we approached designing the interconnected world of Yggdrasil.',
      image: 'https://images.unsplash.com/photo-1748545564125-0fe06be7f2e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWtpbmclMjBydW5lcyUyMHN0b25lfGVufDF8fHx8MTc2MTAyOTAyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'From Mythology to Mechanics',
      author: 'Game Designer',
      date: 'October 10, 2025',
      category: 'Mechanics',
      excerpt: 'How do you translate ancient myths into engaging game mechanics? We dive deep into our design philosophy.',
      image: 'https://images.unsplash.com/photo-1597764894730-daae2cc2288d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXRvcCUyMGdhbWluZyUyMGRpY2V8ZW58MXx8fHwxNzYxMDI5MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'The Art of CNC Carving',
      author: 'Craftsman',
      date: 'October 5, 2025',
      category: 'Workshop',
      excerpt: 'A behind-the-scenes look at how we create our handcrafted wooden game boards using CNC technology.',
      image: 'https://images.unsplash.com/photo-1497223830540-5c1202d4f260?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdGVkJTIwd29vZCUyMGNhcnZpbmd8ZW58MXx8fHwxNzYxMDI5MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Playtesting Chronicles: Lessons Learned',
      author: 'Game Designer',
      date: 'September 28, 2025',
      category: 'Development',
      excerpt: 'Our playtesting sessions revealed surprising insights about balance, pacing, and player engagement.',
      image: 'https://images.unsplash.com/photo-1716817276116-7c11b842f8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZCUyMGdhbWUlMjBjb21wb25lbnRzfGVufDF8fHx8MTc2MDk0NTY0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Lore Deep Dive: The Story of Yggdrasil',
      author: 'Lore Master',
      date: 'September 20, 2025',
      category: 'Lore',
      excerpt: 'Exploring the World Tree and how it connects all nine realms in Norse mythology and our game.',
      image: 'https://images.unsplash.com/photo-1618385418700-35dc948cdeec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwbWFwJTIwcGFyY2htZW50fGVufDF8fHx8MTc2MTAyOTAyNHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const categories = ['All', 'Development', 'Design', 'Mechanics', 'Workshop', 'Lore'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-b973ed60/newsletter`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setSubmitSuccess(true);
        setEmail('');
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        const error = await response.json();
        alert(error.error || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl text-[#d4a259] mb-6 flex items-center justify-center gap-4">
              <BookOpen className="w-12 h-12" />
              Developer's Journal
            </h1>
            <p className="text-xl text-[#a89274] max-w-3xl mx-auto">
              Follow our journey as we bring the Nine Realms to life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#2a2218] to-[#3a2f1f] rounded-lg border-2 border-[#d4a259]/30 p-8 stone-texture"
          >
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-8 h-8 text-[#d4a259]" />
              <h2 className="text-2xl text-[#d4a259]">
                Subscribe to Updates
              </h2>
            </div>
            <p className="text-[#a89274] mb-6">
              Get the latest devlogs, announcements, and exclusive content delivered to your inbox.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[#1a1410] border border-[#d4a259]/30 rounded-lg focus:outline-none focus:border-[#d4a259] transition-colors"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-gradient-to-r from-[#d4a259] to-[#8b6f47] text-[#1a1410] rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>

            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 mt-4 p-3 bg-[#d4a259]/20 border border-[#d4a259] rounded-lg text-[#d4a259]"
              >
                <CheckCircle className="w-5 h-5" />
                Successfully subscribed to newsletter!
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <RunicDivider />

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? 'bg-[#d4a259] text-[#1a1410]'
                    : 'bg-[#2a2218] border border-[#d4a259]/30 hover:border-[#d4a259]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="bg-[#2a2218] rounded-lg border border-[#d4a259]/30 overflow-hidden stone-texture hover:border-[#d4a259] transition-all cursor-pointer"
              >
                {/* Featured Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-[#d4a259] text-[#1a1410] rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-[#a89274] mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>

                  <p className="text-[#a89274] text-sm line-clamp-3">
                    {post.excerpt}
                  </p>

                  <button className="mt-4 text-[#d4a259] hover:text-[#f5a623] text-sm inline-flex items-center gap-1">
                    Read more →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-20 px-4 bg-[#2a2218]/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#2a2218] rounded-lg border-2 border-[#d4a259]/30 p-8 stone-texture"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-[#d4a259]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-4xl">🪓</span>
              </div>
              <div>
                <h3 className="text-2xl text-[#d4a259] mb-2">
                  About the Team
                </h3>
                <p className="text-[#a89274] mb-4">
                  We're a passionate team of game designers, artists, and craftspeople dedicated to 
                  creating immersive tabletop experiences. Our love for Norse mythology and cooperative 
                  gameplay drives every decision we make.
                </p>
                <p className="text-[#a89274]">
                  Follow our journey as we bring Shadows of the Nine Realms from concept to reality.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
