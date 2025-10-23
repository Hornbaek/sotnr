import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Scroll, 
  BookOpen, 
  Newspaper, 
  Hammer, 
  Home,
  Plus,
  Edit,
  Trash2,
  LogOut,
  Shield
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../../components/ui/button';
import { projectId } from '../../utils/supabase/info';
import { toast } from 'sonner@2.0.3';

interface Page {
  page_name: string;
  title: string;
  last_modified: string;
  published: boolean;
}

export const AdminDashboard = () => {
  const { user, logout, accessToken } = useAuth();
  const [pages, setPages] = useState<Page[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadPages();
  }, []);

  const loadPages = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-b973ed60/admin/pages`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setPages(data.pages || []);
      }
    } catch (error) {
      console.error('Failed to load pages:', error);
      toast.error('Failed to load pages');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeletePage = async (pageName: string) => {
    if (!confirm('Are you sure you want to delete this page?')) return;

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-b973ed60/admin/pages/${pageName}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok) {
        toast.success('Page deleted successfully');
        loadPages();
      } else {
        throw new Error('Delete failed');
      }
    } catch (error) {
      console.error('Failed to delete page:', error);
      toast.error('Failed to delete page');
    }
  };

  const quickAccessPages = [
    { name: 'lore-codex', title: 'Lore Codex', icon: BookOpen, color: '#d4a259' },
    { name: 'developer-journal', title: "Developer's Journal", icon: Newspaper, color: '#8b6f47' },
    { name: 'workshop', title: 'Workshop', icon: Hammer, color: '#f5a623' },
    { name: 'home-hero', title: 'Home Page', icon: Home, color: '#c9e4f5' },
  ];

  return (
    <div className="min-h-screen bg-[#1a1410] py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-12"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#d4a259]/10 border border-[#d4a259] flex items-center justify-center torch-glow">
              <Shield className="w-6 h-6 text-[#d4a259]" />
            </div>
            <div>
              <h1 className="text-4xl text-[#d4a259]">Content Sanctum</h1>
              <p className="text-[#a89274]">Welcome, {user?.email}</p>
            </div>
          </div>
          <Button
            onClick={() => logout()}
            variant="outline"
            className="border-[#d4a259]/30 text-[#d4a259] hover:bg-[#d4a259]/10"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </motion.div>

        {/* Quick Access */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl text-[#d4a259] mb-6 flex items-center gap-2">
            <Scroll className="w-6 h-6" />
            Quick Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAccessPages.map((page, index) => (
              <motion.div
                key={page.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Link
                  to={`/admin/builder/${page.name}`}
                  className="block bg-[#2a2218] border border-[#d4a259]/30 rounded-lg p-6 stone-texture hover:border-[#d4a259] transition-all group"
                >
                  <page.icon className="w-10 h-10 mb-4 transition-transform group-hover:scale-110" style={{ color: page.color }} />
                  <h3 className="text-xl mb-2">{page.title}</h3>
                  <p className="text-sm text-[#a89274]">Click to edit</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Pages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-[#d4a259] flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              All Pages
            </h2>
            <Link to="/admin/builder/new">
              <Button className="bg-gradient-to-r from-[#d4a259] to-[#8b6f47] text-[#1a1410] torch-glow">
                <Plus className="w-4 h-4 mr-2" />
                Create New Page
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="text-center py-12 text-[#a89274]">Loading pages...</div>
          ) : pages.length === 0 ? (
            <div className="bg-[#2a2218] border border-[#d4a259]/30 rounded-lg p-12 text-center stone-texture">
              <Scroll className="w-16 h-16 mx-auto mb-4 text-[#d4a259]/50" />
              <p className="text-[#a89274] mb-4">No pages created yet</p>
              <Link to="/admin/builder/new">
                <Button className="bg-gradient-to-r from-[#d4a259] to-[#8b6f47] text-[#1a1410]">
                  Create Your First Page
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {pages.map((page) => (
                <div
                  key={page.page_name}
                  className="bg-[#2a2218] border border-[#d4a259]/30 rounded-lg p-6 stone-texture flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-xl mb-1">{page.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-[#a89274]">
                      <span>/{page.page_name}</span>
                      <span>•</span>
                      <span>Modified: {new Date(page.last_modified).toLocaleDateString()}</span>
                      <span>•</span>
                      <span className={page.published ? 'text-green-400' : 'text-yellow-400'}>
                        {page.published ? 'Published' : 'Draft'}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link to={`/admin/builder/${page.page_name}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#d4a259]/30 text-[#d4a259] hover:bg-[#d4a259]/10"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeletePage(page.page_name)}
                      className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
