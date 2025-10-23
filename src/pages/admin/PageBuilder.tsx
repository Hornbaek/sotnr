import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Save, Eye, Upload, ArrowLeft, Check } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { GrapesJSEditor } from '../../components/admin/GrapesJSEditor';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { projectId } from '../../utils/supabase/info';
import { toast } from 'sonner@2.0.3';

export const PageBuilder = () => {
  const { pageName } = useParams<{ pageName: string }>();
  const { accessToken } = useAuth();
  const navigate = useNavigate();
  
  const [pageTitle, setPageTitle] = useState('');
  const [pageSlug, setPageSlug] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [initialData, setInitialData] = useState<any>(null);
  const [currentData, setCurrentData] = useState<any>(null);
  const [isNewPage, setIsNewPage] = useState(false);

  useEffect(() => {
    if (pageName && pageName !== 'new') {
      loadPage();
    } else {
      setIsNewPage(true);
      setIsLoading(false);
    }
  }, [pageName]);

  const loadPage = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-b973ed60/admin/pages/${pageName}`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setPageTitle(data.title || '');
        setPageSlug(data.page_name || '');
        setInitialData({
          html: data.html_content || '',
          css: data.css_content || '',
          components: data.json_schema ? JSON.parse(data.json_schema) : null,
        });
      }
    } catch (error) {
      console.error('Failed to load page:', error);
      toast.error('Failed to load page');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async (html: string, css: string, components: any) => {
    if (!pageTitle || !pageSlug) {
      toast.error('Please enter a page title and slug');
      return;
    }

    setIsSaving(true);
    setCurrentData({ html, css, components });

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-b973ed60/admin/pages`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            page_name: pageSlug,
            title: pageTitle,
            html_content: html,
            css_content: css,
            json_schema: JSON.stringify(components),
            published: false,
          }),
        }
      );

      if (response.ok) {
        toast.success('Page saved as draft');
        if (isNewPage) {
          navigate(`/admin/builder/${pageSlug}`);
          setIsNewPage(false);
        }
      } else {
        const error = await response.json();
        throw new Error(error.error || 'Save failed');
      }
    } catch (error) {
      console.error('Save error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to save page');
    } finally {
      setIsSaving(false);
    }
  };

  const handlePublish = async () => {
    if (!currentData) {
      toast.error('Please save the page first');
      return;
    }

    setIsPublishing(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-b973ed60/admin/pages/publish`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            page_name: pageSlug,
          }),
        }
      );

      if (response.ok) {
        toast.success('Page published successfully!');
      } else {
        throw new Error('Publish failed');
      }
    } catch (error) {
      console.error('Publish error:', error);
      toast.error('Failed to publish page');
    } finally {
      setIsPublishing(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#1a1410]">
        <div className="text-[#d4a259]">Loading editor...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1410] flex flex-col">
      {/* Top Toolbar */}
      <div className="bg-[#2a2218] border-b border-[#d4a259]/30 px-6 py-3 flex items-center justify-between stone-texture">
        <div className="flex items-center gap-6">
          <Link to="/admin/dashboard">
            <Button
              variant="ghost"
              size="sm"
              className="text-[#d4a259] hover:bg-[#d4a259]/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Dashboard
            </Button>
          </Link>
          
          <div className="flex items-center gap-4">
            <div>
              <Label htmlFor="page-title" className="text-xs text-[#a89274]">Page Title</Label>
              <Input
                id="page-title"
                value={pageTitle}
                onChange={(e) => setPageTitle(e.target.value)}
                placeholder="Enter page title"
                className="bg-[#3a2f1f] border-[#d4a259]/30 text-[#e8dcc4] h-8"
              />
            </div>
            <div>
              <Label htmlFor="page-slug" className="text-xs text-[#a89274]">URL Slug</Label>
              <Input
                id="page-slug"
                value={pageSlug}
                onChange={(e) => setPageSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'))}
                placeholder="page-slug"
                disabled={!isNewPage}
                className="bg-[#3a2f1f] border-[#d4a259]/30 text-[#e8dcc4] h-8"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="panel__basic-actions flex gap-1 mr-4"></div>
          <div className="panel__devices flex gap-1 mr-4"></div>
          
          <Button
            onClick={handlePublish}
            disabled={isPublishing || !pageSlug}
            className="bg-green-600 hover:bg-green-700 text-white"
            size="sm"
          >
            {isPublishing ? (
              'Publishing...'
            ) : (
              <>
                <Upload className="w-4 h-4 mr-2" />
                Publish
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Editor Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Blocks */}
        <div className="w-64 bg-[#2a2218] border-r border-[#d4a259]/30 overflow-y-auto">
          <div className="p-4">
            <h3 className="text-[#d4a259] mb-4">Blocks</h3>
            <div className="blocks-container"></div>
          </div>
        </div>

        {/* Main Editor */}
        <div className="flex-1 overflow-hidden">
          <GrapesJSEditor
            onSave={handleSave}
            initialData={initialData}
          />
        </div>

        {/* Right Sidebar - Layers & Styles */}
        <div className="w-80 bg-[#2a2218] border-l border-[#d4a259]/30 overflow-y-auto">
          <div className="border-b border-[#d4a259]/30">
            <div className="p-4">
              <h3 className="text-[#d4a259] mb-4">Layers</h3>
              <div className="layers-container"></div>
            </div>
          </div>
          <div className="border-b border-[#d4a259]/30">
            <div className="p-4">
              <h3 className="text-[#d4a259] mb-4">Traits</h3>
              <div className="traits-container"></div>
            </div>
          </div>
          <div>
            <div className="p-4">
              <h3 className="text-[#d4a259] mb-4">Styles</h3>
              <div className="styles-container"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
