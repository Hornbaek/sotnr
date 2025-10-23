export const norseBlocks = {
  // Hero Section
  'norse-hero': {
    label: 'Norse Hero Section',
    category: 'Sections',
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="3" width="20" height="8" fill="#d4a259"/><rect x="2" y="13" width="20" height="2" fill="#8b6f47"/></svg>',
    content: `
      <section class="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1711426632939-27e7c36246bb?w=1920');">
        <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        <div class="relative z-10 text-center px-4">
          <h1 class="text-5xl md:text-7xl text-[#d4a259] mb-6 font-['Cinzel']">Epic Title Here</h1>
          <p class="text-xl md:text-2xl text-[#a89274] mb-8 max-w-2xl mx-auto">Your description text goes here</p>
          <a href="#" class="inline-block px-8 py-4 bg-gradient-to-r from-[#d4a259] to-[#8b6f47] text-[#1a1410] rounded-lg">Call to Action</a>
        </div>
      </section>
    `,
  },

  // Text + Image
  'norse-text-image': {
    label: 'Text + Image',
    category: 'Content',
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="4" width="9" height="16" fill="#d4a259"/><rect x="13" y="4" width="9" height="6" fill="#8b6f47"/><rect x="13" y="12" width="9" height="3" fill="#8b6f47"/></svg>',
    content: `
      <section class="py-20 px-4 bg-[#1a1410]">
        <div class="container mx-auto max-w-6xl">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-4xl text-[#d4a259] mb-6 font-['Cinzel']">Section Title</h2>
              <p class="text-[#a89274] mb-4 leading-relaxed">Your content text goes here. Edit this to add your own narrative about the Nine Realms, your game mechanics, or lore details.</p>
              <p class="text-[#a89274] leading-relaxed">Add multiple paragraphs as needed to tell your story.</p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1711426632939-27e7c36246bb?w=800" alt="Image" class="rounded-lg border-2 border-[#d4a259]/30 w-full" />
            </div>
          </div>
        </div>
      </section>
    `,
  },

  // Two Column Layout
  'norse-two-columns': {
    label: 'Two Columns',
    category: 'Layout',
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="4" width="9" height="16" fill="#d4a259"/><rect x="13" y="4" width="9" height="16" fill="#d4a259"/></svg>',
    content: `
      <section class="py-20 px-4 bg-[#1a1410]">
        <div class="container mx-auto max-w-6xl">
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-[#2a2218] border border-[#d4a259]/30 rounded-lg p-8">
              <h3 class="text-2xl text-[#d4a259] mb-4 font-['Cinzel']">Column 1</h3>
              <p class="text-[#a89274]">Add your content here.</p>
            </div>
            <div class="bg-[#2a2218] border border-[#d4a259]/30 rounded-lg p-8">
              <h3 class="text-2xl text-[#d4a259] mb-4 font-['Cinzel']">Column 2</h3>
              <p class="text-[#a89274]">Add your content here.</p>
            </div>
          </div>
        </div>
      </section>
    `,
  },

  // Three Column Layout
  'norse-three-columns': {
    label: 'Three Columns',
    category: 'Layout',
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="4" width="5" height="16" fill="#d4a259"/><rect x="9" y="4" width="6" height="16" fill="#d4a259"/><rect x="17" y="4" width="5" height="16" fill="#d4a259"/></svg>',
    content: `
      <section class="py-20 px-4 bg-[#1a1410]">
        <div class="container mx-auto max-w-6xl">
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-[#2a2218] border border-[#d4a259]/30 rounded-lg p-6 text-center">
              <div class="w-16 h-16 rounded-full bg-[#d4a259]/10 border border-[#d4a259] flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">⚔️</span>
              </div>
              <h3 class="text-xl text-[#d4a259] mb-3 font-['Cinzel']">Feature 1</h3>
              <p class="text-[#a89274] text-sm">Description goes here</p>
            </div>
            <div class="bg-[#2a2218] border border-[#d4a259]/30 rounded-lg p-6 text-center">
              <div class="w-16 h-16 rounded-full bg-[#d4a259]/10 border border-[#d4a259] flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🛡️</span>
              </div>
              <h3 class="text-xl text-[#d4a259] mb-3 font-['Cinzel']">Feature 2</h3>
              <p class="text-[#a89274] text-sm">Description goes here</p>
            </div>
            <div class="bg-[#2a2218] border border-[#d4a259]/30 rounded-lg p-6 text-center">
              <div class="w-16 h-16 rounded-full bg-[#d4a259]/10 border border-[#d4a259] flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">⚡</span>
              </div>
              <h3 class="text-xl text-[#d4a259] mb-3 font-['Cinzel']">Feature 3</h3>
              <p class="text-[#a89274] text-sm">Description goes here</p>
            </div>
          </div>
        </div>
      </section>
    `,
  },

  // Card Grid
  'norse-card-grid': {
    label: 'Card Grid',
    category: 'Content',
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="9" height="10" fill="#d4a259"/><rect x="13" y="2" width="9" height="10" fill="#d4a259"/><rect x="2" y="14" width="9" height="8" fill="#8b6f47"/><rect x="13" y="14" width="9" height="8" fill="#8b6f47"/></svg>',
    content: `
      <section class="py-20 px-4 bg-[#1a1410]">
        <div class="container mx-auto max-w-6xl">
          <h2 class="text-4xl text-[#d4a259] mb-12 text-center font-['Cinzel']">Card Grid Title</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-[#2a2218] border border-[#d4a259]/30 rounded-lg overflow-hidden hover:border-[#d4a259] transition-all">
              <img src="https://images.unsplash.com/photo-1711426632939-27e7c36246bb?w=400" alt="Card" class="w-full h-48 object-cover" />
              <div class="p-6">
                <h3 class="text-xl text-[#d4a259] mb-2 font-['Cinzel']">Card Title</h3>
                <p class="text-[#a89274] text-sm">Card description goes here</p>
              </div>
            </div>
            <div class="bg-[#2a2218] border border-[#d4a259]/30 rounded-lg overflow-hidden hover:border-[#d4a259] transition-all">
              <img src="https://images.unsplash.com/photo-1711426632939-27e7c36246bb?w=400" alt="Card" class="w-full h-48 object-cover" />
              <div class="p-6">
                <h3 class="text-xl text-[#d4a259] mb-2 font-['Cinzel']">Card Title</h3>
                <p class="text-[#a89274] text-sm">Card description goes here</p>
              </div>
            </div>
            <div class="bg-[#2a2218] border border-[#d4a259]/30 rounded-lg overflow-hidden hover:border-[#d4a259] transition-all">
              <img src="https://images.unsplash.com/photo-1711426632939-27e7c36246bb?w=400" alt="Card" class="w-full h-48 object-cover" />
              <div class="p-6">
                <h3 class="text-xl text-[#d4a259] mb-2 font-['Cinzel']">Card Title</h3>
                <p class="text-[#a89274] text-sm">Card description goes here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
  },

  // CTA Section
  'norse-cta': {
    label: 'Call to Action',
    category: 'Sections',
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="8" width="20" height="8" fill="#d4a259"/><rect x="7" y="11" width="10" height="2" fill="#1a1410"/></svg>',
    content: `
      <section class="py-20 px-4 bg-gradient-to-r from-[#2a2218] to-[#3a2f1f]">
        <div class="container mx-auto max-w-4xl text-center">
          <h2 class="text-4xl md:text-5xl text-[#d4a259] mb-6 font-['Cinzel']">Ready to Begin Your Journey?</h2>
          <p class="text-xl text-[#a89274] mb-8">Join the adventure through the Nine Realms</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" class="px-8 py-4 bg-gradient-to-r from-[#d4a259] to-[#8b6f47] text-[#1a1410] rounded-lg hover:shadow-2xl transition-all inline-block">Primary Action</a>
            <a href="#" class="px-8 py-4 border-2 border-[#d4a259] text-[#d4a259] rounded-lg hover:bg-[#d4a259]/10 transition-all inline-block">Secondary Action</a>
          </div>
        </div>
      </section>
    `,
  },

  // Devlog Article
  'norse-devlog': {
    label: 'Devlog Article',
    category: 'Content',
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="3" fill="#d4a259"/><rect x="4" y="9" width="16" height="2" fill="#8b6f47"/><rect x="4" y="13" width="12" height="2" fill="#8b6f47"/><rect x="4" y="17" width="14" height="2" fill="#8b6f47"/></svg>',
    content: `
      <article class="py-20 px-4 bg-[#1a1410]">
        <div class="container mx-auto max-w-4xl">
          <div class="mb-8">
            <div class="text-[#d4a259] text-sm mb-2">October 22, 2025</div>
            <h1 class="text-5xl text-[#d4a259] mb-4 font-['Cinzel']">Developer Journal Entry</h1>
            <div class="h-1 w-24 bg-gradient-to-r from-[#d4a259] to-transparent mb-6"></div>
          </div>
          
          <div class="prose prose-invert max-w-none">
            <p class="text-[#a89274] text-lg mb-6 leading-relaxed">Introduction paragraph goes here. Share your development insights, progress updates, or behind-the-scenes stories.</p>
            
            <img src="https://images.unsplash.com/photo-1711426632939-27e7c36246bb?w=1200" alt="Featured" class="w-full rounded-lg border-2 border-[#d4a259]/30 mb-8" />
            
            <h2 class="text-3xl text-[#d4a259] mb-4 mt-12 font-['Cinzel']">Section Heading</h2>
            <p class="text-[#a89274] mb-6 leading-relaxed">Your detailed content goes here. Explain your development process, design decisions, or technical challenges.</p>
            
            <h3 class="text-2xl text-[#d4a259] mb-3 mt-8 font-['Cinzel']">Subsection</h3>
            <p class="text-[#a89274] mb-6 leading-relaxed">More details and insights for your readers.</p>
          </div>
        </div>
      </article>
    `,
  },

  // Lore Entry
  'norse-lore-entry': {
    label: 'Lore Entry',
    category: 'Content',
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="2" width="12" height="20" fill="#d4a259"/><rect x="8" y="6" width="8" height="2" fill="#1a1410"/><rect x="8" y="10" width="8" height="1" fill="#1a1410"/></svg>',
    content: `
      <article class="py-20 px-4 bg-[#1a1410]">
        <div class="container mx-auto max-w-4xl">
          <div class="bg-[#2a2218] border-2 border-[#d4a259] rounded-lg p-8 md:p-12">
            <div class="flex items-start gap-6 mb-8">
              <img src="https://images.unsplash.com/photo-1711426632939-27e7c36246bb?w=300" alt="Creature" class="w-32 h-32 rounded-lg border-2 border-[#d4a259]/50 object-cover" />
              <div class="flex-1">
                <h1 class="text-4xl text-[#d4a259] mb-2 font-['Cinzel']">Creature Name</h1>
                <div class="text-[#a89274] italic mb-4">Classification • Realm Location</div>
                <div class="flex gap-4 text-sm">
                  <span class="px-3 py-1 bg-[#d4a259]/20 border border-[#d4a259] rounded-full text-[#d4a259]">Hostile</span>
                  <span class="px-3 py-1 bg-[#8b6f47]/20 border border-[#8b6f47] rounded-full text-[#8b6f47]">Level 5</span>
                </div>
              </div>
            </div>
            
            <div class="border-t border-[#d4a259]/30 pt-6 mb-6">
              <h2 class="text-2xl text-[#d4a259] mb-4 font-['Cinzel']">Description</h2>
              <p class="text-[#a89274] leading-relaxed mb-4">Write your lore description here. Detail the creature's appearance, behavior, and role in Norse mythology.</p>
            </div>
            
            <div class="border-t border-[#d4a259]/30 pt-6">
              <h2 class="text-2xl text-[#d4a259] mb-4 font-['Cinzel']">Abilities</h2>
              <ul class="space-y-2 text-[#a89274]">
                <li>• Ability 1: Description</li>
                <li>• Ability 2: Description</li>
                <li>• Ability 3: Description</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    `,
  },
};
