# 📖 Page Builder Quick Reference

## 🎯 Accessing the Admin Panel

1. **Login**: Navigate to `/admin/login`
2. **Dashboard**: After login, you'll see the dashboard at `/admin/dashboard`
3. **Create/Edit**: Click any page card or "Create New Page"

---

## 🧱 Available Norse-Themed Blocks

### 1. **Norse Hero Section**
Full-screen hero section with:
- Background image
- Large title (Cinzel font)
- Subtitle text
- Call-to-action button
- Gradient overlay

**Best for**: Landing pages, major section headers

---

### 2. **Text + Image**
Two-column layout with:
- Text content on one side
- Image on the other
- Responsive (stacks on mobile)

**Best for**: Feature descriptions, story content

---

### 3. **Two Columns**
Side-by-side content cards:
- Equal-width columns
- Card-style backgrounds
- Border accents

**Best for**: Comparing features, dual content

---

### 4. **Three Columns**
Feature grid with:
- Icon placeholders
- Titles
- Descriptions
- Card backgrounds

**Best for**: Feature lists, benefits, stats

---

### 5. **Card Grid**
Image cards in responsive grid:
- Image thumbnails
- Titles and descriptions
- Hover effects
- 2-3 column responsive layout

**Best for**: Gallery, portfolio, creature showcase

---

### 6. **Call to Action**
Prominent CTA section with:
- Large headline
- Supporting text
- Primary and secondary buttons
- Gradient background

**Best for**: Newsletter signup, game downloads, waitlist

---

### 7. **Devlog Article**
Blog post layout with:
- Date stamp
- Large title
- Featured image
- Multiple paragraphs
- Section headings

**Best for**: Developer journals, news, updates

---

### 8. **Lore Entry**
Codex-style entry with:
- Creature/character image
- Name and classification
- Tags (hostile/level)
- Description sections
- Abilities list

**Best for**: Bestiary, character profiles, item descriptions

---

## 🎨 Editing Content

### Text Editing
1. **Click** any text element
2. Type to replace or edit
3. **Double-click** for more options

### Image Editing
1. **Click** the image
2. In the right sidebar (Traits):
   - Change `src` URL
   - Update `alt` text
3. Or use the Style Manager for sizing

### Styling Elements
1. **Select** the element
2. Use **Style Manager** (right sidebar):
   - **Dimension**: Width, height, padding, margin
   - **Typography**: Font size, color, alignment
   - **Decorations**: Background, borders, shadows
   - **Extra**: Opacity, transforms

### Moving Elements
1. **Drag** elements in the canvas
2. Or use **Layers** panel (right sidebar) to reorder

---

## 📱 Responsive Design

### Device Modes (Top Toolbar)
- 🖥️ **Desktop**: Default view (full width)
- 📱 **Tablet**: 768px width
- 📱 **Mobile**: 375px width

### Tips:
- Test each breakpoint before publishing
- Text might need different sizes on mobile
- Images may need to stack instead of side-by-side
- Buttons should be full-width on mobile for better UX

---

## 💾 Saving & Publishing Workflow

### 1. Save Draft
- Click the **💾 Export icon** in the top toolbar
- This saves your work but doesn't make it public
- You can continue editing later

### 2. Publish
- Click the **🚀 Publish** button (green, top-right)
- Page becomes immediately available at `/p/{your-slug}`
- Published pages can still be edited

### 3. View Published Page
- Published pages are at: `https://yoursite.com/p/{page-slug}`
- They render exactly as designed in the editor
- No navigation/footer unless you add them

---

## 🎨 Norse Theme Color Palette

Use these colors for consistency:

| Color | Hex Code | Usage |
|-------|----------|-------|
| Norse Gold | `#d4a259` | Primary accent, headings, borders |
| Dark Wood | `#2a2218` | Card backgrounds, panels |
| Parchment | `#e8dcc4` | Body text, light text |
| Muted Text | `#a89274` | Secondary text, descriptions |
| Amber | `#f5a623` | Highlights, special accents |
| Iron | `#5a5a5a` | Dark accents |
| Frost | `#c9e4f5` | Light accents, ice themes |

---

## 🖼️ Image Guidelines

### Sources
- **Unsplash**: High-quality free images
- **Your uploads**: Custom artwork/screenshots
- **Placeholder**: Use while designing

### Recommended Sizes
- **Hero backgrounds**: 1920x1080px or larger
- **Feature images**: 800x600px
- **Card thumbnails**: 400x300px
- **Portraits**: 300x300px square

### URLs
- Use `https://` URLs only
- Compress images for web (under 500KB if possible)
- Use descriptive alt text for accessibility

---

## ⌨️ Keyboard Shortcuts (GrapesJS)

| Action | Shortcut |
|--------|----------|
| Undo | `Ctrl+Z` / `Cmd+Z` |
| Redo | `Ctrl+Shift+Z` / `Cmd+Shift+Z` |
| Copy | `Ctrl+C` / `Cmd+C` |
| Paste | `Ctrl+V` / `Cmd+V` |
| Delete | `Del` / `Backspace` |
| Select All | `Ctrl+A` / `Cmd+A` |

---

## 🔧 Advanced Tips

### Custom CSS Classes
1. Select element
2. In Traits panel, add class name
3. Use Style Manager to style it

### Linking Pages
- Use `<a href="/p/other-page">Link Text</a>` in HTML
- Or use the link trait on buttons

### Embedding HTML
- Use the **Code** block (if needed)
- Paste custom HTML
- Useful for forms, embeds, custom components

### Duplicating Elements
1. Right-click element in Layers
2. Select "Duplicate"
3. Or copy/paste with keyboard shortcuts

---

## 🚨 Common Issues & Solutions

### Page Not Saving
**Problem**: Export button doesn't work
**Solution**: 
- Check page title and slug are filled
- Check browser console for errors
- Try refreshing and re-entering content

### Images Not Loading
**Problem**: Images show broken icon
**Solution**:
- Verify image URL is correct and public
- Use `https://` not `http://`
- Check image hasn't been deleted from source

### Layout Breaks on Mobile
**Problem**: Content overlaps or doesn't fit
**Solution**:
- Switch to mobile view in editor
- Adjust padding/margins
- Consider hiding some elements on mobile
- Use responsive width (% instead of px)

### Styles Not Applying
**Problem**: Colors/fonts don't change
**Solution**:
- Make sure element is selected
- Check if parent element overrides styles
- Use !important if needed (in custom CSS)

---

## 📋 Best Practices

1. **Plan Before Building**
   - Sketch layout on paper first
   - Gather all images/content beforehand

2. **Keep It Simple**
   - Don't overcrowd pages
   - Use whitespace effectively
   - Limit fonts to 2-3 types

3. **Stay Consistent**
   - Use the theme colors
   - Keep spacing uniform
   - Match button styles across pages

4. **Test Everything**
   - Check all three device sizes
   - Click all links to verify
   - Preview before publishing

5. **Save Often**
   - Save drafts every 10-15 minutes
   - Don't lose hours of work!

---

## 🎭 Content Ideas

### Pages You Can Create:

- **Game Guide**: Rules, mechanics, how-to-play
- **Character Profiles**: Heroes, villains, NPCs
- **Bestiary**: Creatures from each realm
- **World Building**: Maps, locations, history
- **News/Updates**: Development progress
- **Patch Notes**: Game updates and changes
- **FAQ**: Common questions
- **Store/Merch**: Product showcases
- **Events**: Tournaments, campaigns, community events

---

## 🌟 Pro Tips

1. **Use Blocks as Templates**
   - Start with a block, then customize
   - Faster than building from scratch

2. **Preview Often**
   - Use preview mode to see real result
   - Check how it feels without editor UI

3. **Mobile-First Design**
   - Design for mobile first
   - Then enhance for desktop
   - Most users are on mobile

4. **Optimize Performance**
   - Compress images
   - Limit animations
   - Don't use too many fonts

5. **Backup Important Pages**
   - Copy HTML before major changes
   - Save versions if needed
   - Draft → Edit → Publish workflow

---

**Happy Building! May your pages be as epic as the Nine Realms themselves! ⚔️**
