import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { LoadingScreen } from '../components/LoadingScreen';

export const DynamicPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [pageContent, setPageContent] = useState<{ html: string; css: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadPage();
  }, [slug]);

  const loadPage = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-b973ed60/pages/${slug}`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setPageContent({
          html: data.html_content || '',
          css: data.css_content || '',
        });
      } else if (response.status === 404) {
        setError('Page not found');
      } else {
        setError('Failed to load page');
      }
    } catch (err) {
      console.error('Error loading page:', err);
      setError('Failed to load page');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1a1410] px-4">
        <div className="text-center">
          <h1 className="text-4xl text-[#d4a259] mb-4">Page Not Found</h1>
          <p className="text-[#a89274] mb-8">{error}</p>
          <a href="/" className="inline-block px-8 py-4 bg-gradient-to-r from-[#d4a259] to-[#8b6f47] text-[#1a1410] rounded-lg">
            Return Home
          </a>
        </div>
      </div>
    );
  }

  if (!pageContent) {
    return null;
  }

  return (
    <>
      {/* Inject page-specific CSS */}
      {pageContent.css && (
        <style dangerouslySetInnerHTML={{ __html: pageContent.css }} />
      )}
      
      {/* Render page HTML */}
      <div 
        className="dynamic-page-content"
        dangerouslySetInnerHTML={{ __html: pageContent.html }}
      />
    </>
  );
};
