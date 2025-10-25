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

interface JournalEditorProps {
  initialData?: OutputData;
  onChange?: (data: OutputData) => void;
  onReady?: () => void;
}

export const JournalEditor = ({ initialData, onChange, onReady }: JournalEditorProps) => {
  const editorRef = useRef<EditorJS | null>(null);
  const holderRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

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
                // Placeholder - will implement file upload later
                return {
                  success: 0,
                  file: {
                    url: URL.createObjectURL(file),
                  },
                };
              },
              uploadByUrl: async (url: string) => {
                return {
                  success: 1,
                  file: {
                    url: url,
                  },
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

  return (
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
  );
};
