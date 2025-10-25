interface EditorJSBlock {
  type: string;
  data: any;
}

interface EditorJSContent {
  blocks: EditorJSBlock[];
}

export function extractPlainText(content: string | EditorJSContent, maxLength?: number): string {
  let text = '';
  
  try {
    const parsed = typeof content === 'string' ? JSON.parse(content) : content;
    
    if (parsed.blocks) {
      parsed.blocks.forEach((block: EditorJSBlock) => {
        switch (block.type) {
          case 'paragraph':
          case 'header':
            // Remove HTML tags if any
            const cleanText = block.data.text.replace(/<[^>]*>/g, '');
            text += cleanText + ' ';
            break;
          case 'list':
            if (block.data.items) {
              text += block.data.items.join(' ') + ' ';
            }
            break;
          case 'quote':
            text += block.data.text + ' ';
            break;
          case 'realmSpotlight':
            text += block.data.description + ' ';
            break;
          case 'characterCard':
            text += block.data.name + ': ' + (block.data.quote || '') + ' ';
            break;
          case 'runicQuote':
            text += block.data.quote + ' ';
            break;
        }
      });
    }
  } catch (error) {
    text = typeof content === 'string' ? content : '';
  }
  
  text = text.trim();
  
  if (maxLength && text.length > maxLength) {
    text = text.substring(0, maxLength).trim() + '...';
  }
  
  return text;
}
