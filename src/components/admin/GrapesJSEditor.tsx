import { useEffect, useRef } from 'react';
import { norseBlocks } from './CustomBlocks';

interface GrapesJSEditorProps {
  onSave: (html: string, css: string, components: any) => void;
  initialData?: {
    html: string;
    css: string;
    components: any;
  };
}

declare global {
  interface Window {
    grapesjs: any;
  }
}

export const GrapesJSEditor = ({ onSave, initialData }: GrapesJSEditorProps) => {
  const editorRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Load GrapesJS dynamically
    const loadGrapesJS = async () => {
      // Load CSS
      const cssLink = document.createElement('link');
      cssLink.rel = 'stylesheet';
      cssLink.href = 'https://unpkg.com/grapesjs/dist/css/grapes.min.css';
      document.head.appendChild(cssLink);

      // Load JS
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/grapesjs';
      script.onload = () => initEditor();
      document.body.appendChild(script);
    };

    const initEditor = () => {
      if (!window.grapesjs || editorRef.current) return;

      const editor = window.grapesjs.init({
        container: containerRef.current,
        height: 'calc(100vh - 120px)',
        width: 'auto',
        storageManager: false,
        canvas: {
          styles: [
            'https://cdn.jsdelivr.net/npm/tailwindcss@3.4.0/dist/tailwind.min.css',
            'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Philosopher:wght@400;700&display=swap',
          ],
          scripts: [],
        },
        panels: {
          defaults: [
            {
              id: 'basic-actions',
              el: '.panel__basic-actions',
              buttons: [
                {
                  id: 'visibility',
                  active: true,
                  className: 'btn-toggle-borders',
                  label: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>',
                  command: 'sw-visibility',
                },
                {
                  id: 'preview',
                  className: 'btn-preview',
                  label: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/></svg>',
                  command: 'preview',
                  context: 'preview',
                },
                {
                  id: 'fullscreen',
                  className: 'btn-fullscreen',
                  label: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>',
                  command: 'fullscreen',
                  context: 'fullscreen',
                },
                {
                  id: 'undo',
                  className: 'btn-undo',
                  label: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></svg>',
                  command: 'undo',
                },
                {
                  id: 'redo',
                  className: 'btn-redo',
                  label: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></svg>',
                  command: 'redo',
                },
                {
                  id: 'export',
                  className: 'btn-export',
                  label: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"/></svg>',
                  command: () => {
                    const html = editor.getHtml();
                    const css = editor.getCss();
                    const components = editor.getComponents();
                    onSave(html, css, components);
                  },
                },
              ],
            },
            {
              id: 'panel-devices',
              el: '.panel__devices',
              buttons: [
                {
                  id: 'device-desktop',
                  label: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/></svg>',
                  command: 'set-device-desktop',
                  active: true,
                  togglable: false,
                },
                {
                  id: 'device-tablet',
                  label: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.5 0h-14C3.12 0 2 1.12 2 2.5v19C2 22.88 3.12 24 4.5 24h14c1.38 0 2.5-1.12 2.5-2.5v-19C21 1.12 19.88 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z"/></svg>',
                  command: 'set-device-tablet',
                  togglable: false,
                },
                {
                  id: 'device-mobile',
                  label: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"/></svg>',
                  command: 'set-device-mobile',
                  togglable: false,
                },
              ],
            },
          ],
        },
        blockManager: {
          appendTo: '.blocks-container',
          blocks: Object.entries(norseBlocks).map(([id, block]) => ({
            id,
            ...block,
          })),
        },
        layerManager: {
          appendTo: '.layers-container',
        },
        styleManager: {
          appendTo: '.styles-container',
          sectors: [
            {
              name: 'Dimension',
              open: false,
              properties: [
                'width',
                'height',
                'max-width',
                'min-height',
                'margin',
                'padding',
              ],
            },
            {
              name: 'Typography',
              open: false,
              properties: [
                'font-family',
                'font-size',
                'font-weight',
                'letter-spacing',
                'color',
                'line-height',
                'text-align',
                'text-decoration',
                'text-shadow',
              ],
            },
            {
              name: 'Decorations',
              open: false,
              properties: [
                'background-color',
                'border-radius',
                'border',
                'box-shadow',
                'background',
              ],
            },
            {
              name: 'Extra',
              open: false,
              properties: ['opacity', 'transition', 'perspective', 'transform'],
            },
          ],
        },
        traitManager: {
          appendTo: '.traits-container',
        },
        selectorManager: {
          appendTo: '.styles-container',
        },
        deviceManager: {
          devices: [
            {
              name: 'Desktop',
              width: '',
            },
            {
              name: 'Tablet',
              width: '768px',
              widthMedia: '992px',
            },
            {
              name: 'Mobile',
              width: '375px',
              widthMedia: '480px',
            },
          ],
        },
      });

      // Load initial data if provided
      if (initialData?.components) {
        editor.setComponents(initialData.components);
      } else if (initialData?.html) {
        editor.setComponents(initialData.html);
      }
      
      if (initialData?.css) {
        editor.setStyle(initialData.css);
      }

      // Custom commands
      editor.Commands.add('set-device-desktop', {
        run: (editor: any) => editor.setDevice('Desktop'),
      });
      editor.Commands.add('set-device-tablet', {
        run: (editor: any) => editor.setDevice('Tablet'),
      });
      editor.Commands.add('set-device-mobile', {
        run: (editor: any) => editor.setDevice('Mobile'),
      });

      editorRef.current = editor;
    };

    loadGrapesJS();

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  return (
    <div className="grapesjs-editor-wrapper" style={{ background: '#1a1410' }}>
      <div ref={containerRef} id="grapesjs-editor"></div>
      
      <style>{`
        .grapesjs-editor-wrapper {
          position: relative;
        }
        
        /* Norse-themed GrapesJS Customization */
        .gjs-one-bg {
          background-color: #2a2218 !important;
        }
        
        .gjs-two-color {
          color: #d4a259 !important;
        }
        
        .gjs-three-bg {
          background-color: #3a2f1f !important;
          color: #e8dcc4 !important;
        }
        
        .gjs-four-color, 
        .gjs-four-color-h:hover {
          color: #a89274 !important;
        }
        
        .gjs-btn-prim {
          background-color: #d4a259 !important;
          color: #1a1410 !important;
          border-color: #d4a259 !important;
        }
        
        .gjs-toolbar {
          background-color: #2a2218 !important;
          border: 1px solid rgba(212, 162, 89, 0.3) !important;
        }
        
        .gjs-toolbar-item {
          color: #d4a259 !important;
        }
        
        .gjs-block {
          background-color: #3a2f1f !important;
          border: 1px solid rgba(212, 162, 89, 0.2) !important;
          color: #e8dcc4 !important;
        }
        
        .gjs-block:hover {
          border-color: #d4a259 !important;
        }
        
        .gjs-category-title {
          background-color: #2a2218 !important;
          color: #d4a259 !important;
          border-bottom: 1px solid rgba(212, 162, 89, 0.3) !important;
        }
        
        .gjs-field {
          background-color: #3a2f1f !important;
          color: #e8dcc4 !important;
          border: 1px solid rgba(212, 162, 89, 0.2) !important;
        }
        
        .gjs-input {
          background-color: #3a2f1f !important;
          color: #e8dcc4 !important;
        }
        
        .gjs-sm-sector-title {
          background-color: #2a2218 !important;
          color: #d4a259 !important;
        }
        
        .gjs-layer {
          color: #e8dcc4 !important;
        }
        
        .gjs-layer.gjs-selected {
          background-color: rgba(212, 162, 89, 0.2) !important;
        }
        
        .gjs-pn-panel {
          background-color: #2a2218 !important;
        }
        
        .gjs-pn-btn {
          color: #d4a259 !important;
        }
        
        .gjs-pn-btn.gjs-pn-active {
          background-color: rgba(212, 162, 89, 0.2) !important;
          box-shadow: 0 0 5px rgba(212, 162, 89, 0.5) !important;
        }
        
        /* Scrollbar */
        .gjs-blocks-c::-webkit-scrollbar,
        .gjs-sm-properties::-webkit-scrollbar,
        .gjs-layers::-webkit-scrollbar {
          width: 8px;
        }
        
        .gjs-blocks-c::-webkit-scrollbar-track,
        .gjs-sm-properties::-webkit-scrollbar-track,
        .gjs-layers::-webkit-scrollbar-track {
          background: #2a2218;
        }
        
        .gjs-blocks-c::-webkit-scrollbar-thumb,
        .gjs-sm-properties::-webkit-scrollbar-thumb,
        .gjs-layers::-webkit-scrollbar-thumb {
          background: #d4a259;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};
