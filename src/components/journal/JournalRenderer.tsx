import DOMPurify from 'dompurify';
import { RealmSpotlight } from "./blocks/RealmSpotlight";
import { CharacterCard } from "./blocks/CharacterCard";
import { RunicQuote } from "./blocks/RunicQuote";
import { ProgressUpdate } from "./blocks/ProgressUpdate";
import { ImageGallery } from "./blocks/ImageGallery";

interface EditorJSBlock {
  type: string;
  data: any;
}

interface EditorJSContent {
  blocks: EditorJSBlock[];
}

interface JournalRendererProps {
  content: string | EditorJSContent;
}

export const JournalRenderer = ({ content }: JournalRendererProps) => {
  let parsed: EditorJSContent;
  
  try {
    parsed = typeof content === 'string' ? JSON.parse(content) : content;
  } catch (error) {
    return <p className="text-muted-foreground">Invalid content format</p>;
  }

  if (!parsed.blocks || parsed.blocks.length === 0) {
    return <p className="text-muted-foreground">No content available</p>;
  }

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      {parsed.blocks.map((block, index) => {
        switch (block.type) {
          case 'header':
            const HeaderTag = `h${block.data.level}` as keyof JSX.IntrinsicElements;
            return (
              <HeaderTag key={index} className="font-bold text-foreground">
                {block.data.text}
              </HeaderTag>
            );

          case 'paragraph':
            return (
              <p key={index} className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(block.data.text) }} />
            );

          case 'list':
            const ListTag = block.data.style === 'ordered' ? 'ol' : 'ul';
            return (
              <ListTag key={index} className="text-foreground">
                {block.data.items.map((item: string, i: number) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }} />
                ))}
              </ListTag>
            );

          case 'quote':
            return (
              <blockquote key={index} className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(block.data.text) }} />
                {block.data.caption && (
                  <cite className="block text-sm mt-2">— {block.data.caption}</cite>
                )}
              </blockquote>
            );

          case 'code':
            return (
              <pre key={index} className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">{block.data.code}</code>
              </pre>
            );

          case 'delimiter':
            return (
              <div key={index} className="text-center text-2xl text-primary my-8">
                * * *
              </div>
            );

          case 'warning':
            return (
              <div key={index} className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 my-4">
                {block.data.title && (
                  <p className="font-bold text-yellow-600 dark:text-yellow-400 mb-2">{block.data.title}</p>
                )}
                <p className="text-foreground">{block.data.message}</p>
              </div>
            );

          case 'checklist':
            return (
              <ul key={index} className="space-y-2 list-none">
                {block.data.items.map((item: any, i: number) => (
                  <li key={i} className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      checked={item.checked} 
                      readOnly 
                      className="w-4 h-4"
                    />
                    <span className={item.checked ? 'line-through text-muted-foreground' : 'text-foreground'}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            );

          case 'image':
            return (
              <figure key={index} className="my-8">
                <img 
                  src={block.data.file?.url || block.data.url} 
                  alt={block.data.caption || 'Image'}
                  className="w-full rounded-lg border-2 border-border"
                />
                {block.data.caption && (
                  <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
                    {block.data.caption}
                  </figcaption>
                )}
              </figure>
            );

          // Custom Norse blocks
          case 'realmSpotlight':
            return <RealmSpotlight key={index} data={block.data} />;

          case 'characterCard':
            return <CharacterCard key={index} data={block.data} />;

          case 'runicQuote':
            return <RunicQuote key={index} data={block.data} />;

          case 'progressUpdate':
            return <ProgressUpdate key={index} data={block.data} />;

          case 'imageGallery':
            return <ImageGallery key={index} data={block.data} />;

          default:
            return null;
        }
      })}
    </div>
  );
};
