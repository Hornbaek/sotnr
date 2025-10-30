import { unified } from 'unified';
import remarkParse from 'remark-parse';
import type { Root, Heading, Paragraph, List, Code, Blockquote, ThematicBreak, Image, ListItem, Text, Strong, Emphasis, InlineCode, Link } from 'mdast';
import type { OutputData } from '@editorjs/editorjs';

interface EditorJSBlock {
  type: string;
  data: Record<string, any>;
}

/**
 * Convert Markdown text to Editor.js JSON format
 */
export async function markdownToEditorJS(markdown: string): Promise<OutputData> {
  const processor = unified().use(remarkParse);
  const tree = processor.parse(markdown) as Root;
  
  const blocks: EditorJSBlock[] = [];
  
  for (const node of tree.children) {
    const block = await convertNode(node);
    if (block) {
      blocks.push(block);
    }
  }
  
  return {
    time: Date.now(),
    blocks,
    version: '2.28.0',
  };
}

/**
 * Convert a single MDAST node to an Editor.js block
 */
async function convertNode(node: any): Promise<EditorJSBlock | null> {
  switch (node.type) {
    case 'heading':
      return convertHeading(node as Heading);
    
    case 'paragraph':
      return convertParagraph(node as Paragraph);
    
    case 'list':
      return convertList(node as List);
    
    case 'code':
      return convertCode(node as Code);
    
    case 'blockquote':
      return convertBlockquote(node as Blockquote);
    
    case 'thematicBreak':
      return convertDelimiter();
    
    case 'image':
      return convertImage(node as Image);
    
    default:
      return null;
  }
}

/**
 * Convert heading node
 */
function convertHeading(node: Heading): EditorJSBlock {
  return {
    type: 'header',
    data: {
      text: extractText(node),
      level: Math.min(node.depth, 4), // Editor.js supports levels 1-4
    },
  };
}

/**
 * Convert paragraph node
 */
function convertParagraph(node: Paragraph): EditorJSBlock {
  return {
    type: 'paragraph',
    data: {
      text: extractFormattedText(node),
    },
  };
}

/**
 * Convert list node
 */
function convertList(node: List): EditorJSBlock {
  const items = node.children.map((item: ListItem) => {
    // Check if it's a task list item
    if (item.checked !== null && item.checked !== undefined) {
      return null; // Will be handled separately for checklist
    }
    return extractFormattedText(item);
  }).filter(Boolean);
  
  // Check if this is a checklist
  const hasCheckboxes = node.children.some((item: ListItem) => 
    item.checked !== null && item.checked !== undefined
  );
  
  if (hasCheckboxes) {
    return {
      type: 'checklist',
      data: {
        items: node.children.map((item: ListItem) => ({
          text: extractFormattedText(item),
          checked: item.checked || false,
        })),
      },
    };
  }
  
  return {
    type: 'list',
    data: {
      style: node.ordered ? 'ordered' : 'unordered',
      items,
    },
  };
}

/**
 * Convert code node
 */
function convertCode(node: Code): EditorJSBlock {
  return {
    type: 'code',
    data: {
      code: node.value,
    },
  };
}

/**
 * Convert blockquote node
 */
function convertBlockquote(node: Blockquote): EditorJSBlock {
  const text = node.children
    .map((child: any) => extractFormattedText(child))
    .join('\n');
  
  return {
    type: 'quote',
    data: {
      text,
      caption: '',
    },
  };
}

/**
 * Convert thematic break to delimiter
 */
function convertDelimiter(): EditorJSBlock {
  return {
    type: 'delimiter',
    data: {},
  };
}

/**
 * Convert image node
 */
function convertImage(node: Image): EditorJSBlock {
  return {
    type: 'image',
    data: {
      file: {
        url: node.url,
      },
      caption: node.alt || '',
      withBorder: false,
      stretched: false,
      withBackground: false,
    },
  };
}

/**
 * Extract plain text from a node
 */
function extractText(node: any): string {
  if (node.type === 'text') {
    return node.value;
  }
  
  if (node.children) {
    return node.children.map((child: any) => extractText(child)).join('');
  }
  
  return '';
}

/**
 * Extract formatted text with HTML tags for bold, italic, code, and links
 */
function extractFormattedText(node: any): string {
  if (!node) return '';
  
  if (node.type === 'text') {
    return (node as Text).value;
  }
  
  if (node.type === 'strong') {
    const text = node.children.map((child: any) => extractFormattedText(child)).join('');
    return `<b>${text}</b>`;
  }
  
  if (node.type === 'emphasis') {
    const text = node.children.map((child: any) => extractFormattedText(child)).join('');
    return `<i>${text}</i>`;
  }
  
  if (node.type === 'inlineCode') {
    return `<code>${(node as InlineCode).value}</code>`;
  }
  
  if (node.type === 'link') {
    const text = node.children.map((child: any) => extractFormattedText(child)).join('');
    return `<a href="${(node as Link).url}">${text}</a>`;
  }
  
  if (node.children) {
    return node.children.map((child: any) => extractFormattedText(child)).join('');
  }
  
  return '';
}
