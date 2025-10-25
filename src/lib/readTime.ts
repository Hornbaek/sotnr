interface EditorJSBlock {
  type: string;
  data: any;
}

interface EditorJSContent {
  blocks: EditorJSBlock[];
}

export function calculateReadTime(content: string | EditorJSContent): number {
  const WORDS_PER_MINUTE = 200;
  
  let text = '';
  
  try {
    const parsed = typeof content === 'string' ? JSON.parse(content) : content;
    
    if (parsed.blocks) {
      parsed.blocks.forEach((block: EditorJSBlock) => {
        switch (block.type) {
          case 'paragraph':
          case 'header':
            text += block.data.text + ' ';
            break;
          case 'list':
            if (block.data.items) {
              text += block.data.items.join(' ') + ' ';
            }
            break;
          case 'quote':
            text += block.data.text + ' ' + (block.data.caption || '') + ' ';
            break;
          case 'checklist':
            if (block.data.items) {
              text += block.data.items.map((item: any) => item.text).join(' ') + ' ';
            }
            break;
          case 'realmSpotlight':
            text += block.data.title + ' ' + block.data.description + ' ';
            if (block.data.features) {
              text += block.data.features.join(' ') + ' ';
            }
            break;
          case 'characterCard':
            text += block.data.name + ' ' + block.data.title + ' ' + (block.data.quote || '') + ' ';
            break;
          case 'runicQuote':
            text += block.data.quote + ' ' + (block.data.author || '') + ' ';
            break;
          case 'progressUpdate':
            text += block.data.milestone + ' ';
            if (block.data.tasks) {
              text += block.data.tasks.map((task: any) => task.text).join(' ') + ' ';
            }
            break;
        }
      });
    }
  } catch (error) {
    // If parsing fails, treat as plain text
    text = typeof content === 'string' ? content : '';
  }
  
  const wordCount = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / WORDS_PER_MINUTE);
  
  return Math.max(1, minutes); // At least 1 minute
}
