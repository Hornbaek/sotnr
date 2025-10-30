import { useEffect, useRef, useState } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import Image from "@editorjs/image";
import Quote from "@editorjs/quote";
import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import Warning from "@editorjs/warning";
import Checklist from "@editorjs/checklist";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MediaPicker } from "@/components/media/MediaPicker";
import { ImageIcon, FileText } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { markdownToEditorJS } from "@/lib/markdownToEditorJS";
import { toast } from "sonner";

interface JournalEditorProps {
  initialData?: OutputData;
  onChange?: (data: OutputData) => void;
  onReady?: () => void;
}

export const JournalEditor = ({ initialData, onChange, onReady }: JournalEditorProps) => {
  const editorRef = useRef<EditorJS | null>(null);
  const holderRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [showMediaPicker, setShowMediaPicker] = useState(false);
  const [showImportConfirm, setShowImportConfirm] = useState(false);
  const [pendingMarkdownFile, setPendingMarkdownFile] = useState<File | null>(null);

  useEffect(() => {
    if (!holderRef.current) return;

    const editor = new EditorJS({
      holder: holderRef.current,
      data: initialData,
      placeholder: "Start writing your dev journal entry...",
      minHeight: 300,
      tools: {
        header: {
          class: Header,
          config: {
            levels: [1, 2, 3, 4],
            defaultLevel: 2,
          },
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        image: {
          class: Image,
          config: {
            uploader: {
              uploadByFile: async (file: File) => {
                try {
                  const { uploadToSupabaseStorage } = await import('@/lib/uploadToStorage');
                  const url = await uploadToSupabaseStorage(file);
                  return {
                    success: 1,
                    file: { url },
                  };
                } catch (error) {
                  console.error('Upload failed:', error);
                  return {
                    success: 0,
                    file: { url: '' },
                  };
                }
              },
              uploadByUrl: async (url: string) => {
                return {
                  success: 1,
                  file: { url },
                };
              },
            },
          },
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
        },
        code: Code,
        delimiter: Delimiter,
        warning: {
          class: Warning,
          inlineToolbar: true,
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
      },
      onChange: async () => {
        if (editorRef.current && onChange) {
          const data = await editorRef.current.save();
          onChange(data);
        }
      },
      onReady: () => {
        setIsReady(true);
        onReady?.();
      },
    });

    editorRef.current = editor;

    return () => {
      if (editorRef.current && typeof editorRef.current.destroy === 'function') {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  const handleMediaSelect = async (url: string) => {
    if (!editorRef.current || !isReady) return;
    
    try {
      await editorRef.current.blocks.insert('image', {
        file: {
          url: url
        },
        caption: '',
        withBorder: false,
        stretched: false,
        withBackground: false,
      });
      setShowMediaPicker(false);
    } catch (error) {
      console.error('Failed to insert image:', error);
    }
  };

  const handleMarkdownImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleMarkdownFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.name.endsWith('.md') && !file.name.endsWith('.markdown')) {
      toast.error('Please select a Markdown file (.md or .markdown)');
      return;
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB');
      return;
    }

    // Check if editor has content
    if (editorRef.current && isReady) {
      const currentData = await editorRef.current.save();
      if (currentData.blocks && currentData.blocks.length > 0) {
        // Show confirmation dialog
        setPendingMarkdownFile(file);
        setShowImportConfirm(true);
        return;
      }
    }

    // No existing content, import directly
    await importMarkdownFile(file);
  };

  const importMarkdownFile = async (file: File) => {
    if (!editorRef.current || !isReady) {
      toast.error('Editor is not ready');
      return;
    }

    try {
      // Read file content
      const text = await file.text();

      if (!text.trim()) {
        toast.error('Markdown file is empty');
        return;
      }

      // Convert Markdown to Editor.js format
      const editorJSData = await markdownToEditorJS(text);

      if (!editorJSData.blocks || editorJSData.blocks.length === 0) {
        toast.error('No content could be imported from the Markdown file');
        return;
      }

      // Clear existing content and render new content
      await editorRef.current.blocks.clear();
      await editorRef.current.render(editorJSData);

      toast.success(`Successfully imported ${editorJSData.blocks.length} block${editorJSData.blocks.length === 1 ? '' : 's'}`);
    } catch (error) {
      console.error('Failed to import Markdown:', error);
      toast.error('Failed to import Markdown file. Please check the file format.');
    }
  };

  const handleConfirmImport = async () => {
    if (pendingMarkdownFile) {
      await importMarkdownFile(pendingMarkdownFile);
      setPendingMarkdownFile(null);
    }
    setShowImportConfirm(false);
  };

  const handleCancelImport = () => {
    setPendingMarkdownFile(null);
    setShowImportConfirm(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={handleMarkdownImportClick}
          disabled={!isReady}
        >
          <FileText className="w-4 h-4 mr-2" />
          Import Markdown
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => setShowMediaPicker(true)}
          disabled={!isReady}
        >
          <ImageIcon className="w-4 h-4 mr-2" />
          Choose from Media Library
        </Button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".md,.markdown"
        className="hidden"
        onChange={handleMarkdownFileSelect}
      />

      <Card className="p-6">
        <div 
          ref={holderRef} 
          id="editorjs"
          className="prose prose-lg dark:prose-invert max-w-none min-h-[300px]"
        />
        {!isReady && (
          <div className="flex items-center justify-center h-[300px]">
            <p className="text-muted-foreground">Loading editor...</p>
          </div>
        )}
      </Card>

      <MediaPicker
        open={showMediaPicker}
        onClose={() => setShowMediaPicker(false)}
        onSelect={handleMediaSelect}
      />

      <AlertDialog open={showImportConfirm} onOpenChange={setShowImportConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Replace existing content?</AlertDialogTitle>
            <AlertDialogDescription>
              Importing a Markdown file will replace all current content in the editor. 
              This action cannot be undone. Are you sure you want to continue?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancelImport}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmImport}>Import</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
