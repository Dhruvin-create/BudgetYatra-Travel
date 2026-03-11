# Internal Links Components - Visual Guide

## Component Hierarchy

```
InternalLinksSection
├── Title & Subtitle
├── Grid Container (2, 3, or 4 columns)
│   ├── InternalLinkCard
│   │   ├── Icon
│   │   ├── Title
│   │   ├── Description
│   │   └── Arrow Icon
│   ├── InternalLinkCard
│   └── InternalLinkCard
└── Mobile View All Link
```

---

## Breadcrumbs Component

### Visual Layout
```
Home > Travel Guides > Goa Budget Travel Guide
```

### HTML Structure
```html
<nav aria-label="Breadcrumb">
  <div>
    <a href="/">Home</a>
  </div>
  <svg>→</svg>
  <div>
    <a href="/blogs">Travel Guides</a>
  </div>
  <svg>→</svg>
  <div>
    <span>Goa Budget Travel Guide</span>
  </div>
</nav>
```

### Props
```javascript
items={[
  { label: 'Home', href: '/' },
  { label: 'Travel Guides', href: '/blogs' },
  { label: 'Goa Budget Travel Guide' } // No href for last item
]}
```

### Styling
- Text color: Gray-600
- Hover color: Primary-700
- Separator: Gray-400 arrow icon
- Last item: Bold, no link

---

## InternalLinksSection Component

### Visual Layout
```
┌─────────────────────────────────────────────────┐
│ Explore More Destinations                       │
│ Find similar destinations and travel guides     │
│                                                 │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────┐ │
│ │ 🗺️ Explore  │ │ 💰 Budget    │ │ 🌤️ Season│ │
│ │ Beach        │ │ ₹1500-3000   │ │ October  │ │
│ │ Destinations │ │ Range        │ │ Guides   │ │
│ └──────────────┘ └──────────────┘ └──────────┘ │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Props
```javascript
{
  links: [
    {
      href: '/guide?category=Beach',
      title: 'Explore Beach Destinations',
      description: 'Find more beach travel guides',
      icon: '🗺️',
      color: 'primary'
    },
    // ... more links
  ],
  title: 'Explore More Destinations',
  subtitle: 'Find similar destinations and travel guides',
  columns: 3 // 2, 3, or 4
}
```

### Responsive Behavior
- **Mobile (< 768px):** 1 column
- **Tablet (768px - 1024px):** 2 columns
- **Desktop (> 1024px):** 3 or 4 columns

### Styling
- Background: Light gray (bg-gray-50)
- Border: Top border (border-t border-gray-200)
- Padding: py-12
- Title: text-2xl font-bold
- Subtitle: text-gray-600

---

## InternalLinkCard Component

### Visual Layout
```
┌─────────────────────────────────────┐
│ 🗺️ Explore Beach Destinations    → │
│    Find more beach travel guides    │
└─────────────────────────────────────┘
```

### Props
```javascript
{
  href: '/guide?category=Beach',
  title: 'Explore Beach Destinations',
  description: 'Find more beach travel guides',
  icon: '🗺️',
  color: 'primary' // primary, secondary, or accent
}
```

### Color Schemes

#### Primary (Blue)
```
Border: border-primary-200
Hover: hover:bg-primary-50
```

#### Secondary (Fuchsia)
```
Border: border-secondary-200
Hover: hover:bg-secondary-50
```

#### Accent (Orange)
```
Border: border-accent-200
Hover: hover:bg-accent-50
```

### Styling
- Padding: p-4
- Border: rounded-lg with color-based border
- Hover: Background color change
- Transition: Smooth color transition
- Icon: text-2xl
- Title: font-semibold, line-clamp-2
- Description: text-xs, line-clamp-2
- Arrow: text-gray-400, flex-shrink-0

---

## Integration Examples

### Blog Page Integration

```jsx
import InternalLinksSection from '@/components/links/InternalLinksSection';
import { getBlogInternalLinks } from '@/lib/utils/internalLinks';

export default async function BlogPage({ blog }) {
  const internalLinks = getBlogInternalLinks(blog.slug);

  return (
    <>
      {/* Main content */}
      
      {/* Internal Links Section */}
      {internalLinks.guideLinks && internalLinks.guideLinks.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <InternalLinksSection
            title="Explore More Destinations"
            subtitle="Find similar destinations and travel guides"
            links={internalLinks.guideLinks}
            columns={3}
          />
        </div>
      )}
    </>
  );
}
```

### Destination Page Integration

```jsx
import InternalLinksSection from '@/components/links/InternalLinksSection';
import { getDestinationInternalLinks } from '@/lib/utils/internalLinks';

export default async function DestinationPage({ destination }) {
  const internalLinks = getDestinationInternalLinks(destination.slug);

  return (
    <>
      {/* Main content */}
      
      {/* Internal Links Section */}
      {internalLinks.guideLinks && internalLinks.guideLinks.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <InternalLinksSection
            title="Explore Similar Destinations"
            subtitle="Find destinations with similar characteristics"
            links={internalLinks.guideLinks}
            columns={3}
          />
        </div>
      )}
    </>
  );
}
```

---

## Link Types & Icons

### Category Links
```
Icon: 🗺️
Title: Explore [Category] Destinations
Description: Find more [category] travel guides
Color: Primary (Blue)
Example: /guide?category=Beach
```

### Budget Links
```
Icon: 💰
Title: Destinations in ₹[min]-[max] Range
Description: Find destinations within your budget
Color: Secondary (Fuchsia)
Example: /guide?budgetMin=1500&budgetMax=3000
```

### Season Links
```
Icon: 🌤️
Title: [Season] Travel Guides
Description: Explore destinations perfect for [season]
Color: Accent (Orange)
Example: /guide?season=October
```

### Destination Links
```
Icon: 📍
Title: View [Destination] Destination
Description: Complete travel guide
Color: Primary (Blue)
Example: /destinations/goa
```

### Blog Links
```
Icon: 📖
Title: Read Travel Guides
Description: Explore related blog posts
Color: Primary (Blue)
Example: /blogs
```

### Calculator Links
```
Icon: 🧮
Title: Calculate Your Trip Budget
Description: Estimate your trip cost
Color: Secondary (Fuchsia)
Example: /calculator
```

---

## Responsive Design

### Mobile (< 768px)
```
┌─────────────────────┐
│ 🗺️ Explore Beach   │
│    Destinations     │
│    Find more...     │
└─────────────────────┘
┌─────────────────────┐
│ 💰 Budget Range     │
│    ₹1500-3000       │
│    Find within...   │
└─────────────────────┘
```

### Tablet (768px - 1024px)
```
┌──────────────────┐ ┌──────────────────┐
│ 🗺️ Explore Beach │ │ 💰 Budget Range  │
│    Destinations  │ │    ₹1500-3000    │
│    Find more...  │ │    Find within.. │
└──────────────────┘ └──────────────────┘
```

### Desktop (> 1024px)
```
┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐
│ 🗺️ Explore Beach │ │ 💰 Budget Range  │ │ 🌤️ October      │
│    Destinations  │ │    ₹1500-3000    │ │    Travel Guides │
│    Find more...  │ │    Find within.. │ │    Explore...    │
└──────────────────┘ └──────────────────┘ └──────────────────┘
```

---

## Accessibility Features

### Breadcrumbs
- ✅ `aria-label="Breadcrumb"` on nav
- ✅ Semantic HTML structure
- ✅ Keyboard navigable
- ✅ Screen reader friendly

### Internal Links Section
- ✅ Semantic `<section>` tag
- ✅ Proper heading hierarchy
- ✅ Keyboard navigable links
- ✅ Color not only indicator

### Link Cards
- ✅ Proper link semantics
- ✅ Descriptive link text
- ✅ Hover and focus states
- ✅ Sufficient color contrast

---

## Styling Classes

### Breadcrumbs
```css
nav.flex.items-center.space-x-2.text-sm.text-gray-600
a.text-primary-600.hover:text-primary-700.hover:underline
span.text-gray-900.font-medium
```

### InternalLinksSection
```css
section.py-12.border-t.border-gray-200
h2.text-2xl.font-bold.text-gray-900
p.text-gray-600
div.grid.gap-4
```

### InternalLinkCard
```css
div.p-4.border.rounded-lg.transition-colors.cursor-pointer
span.text-2xl.flex-shrink-0
h4.font-semibold.text-gray-900.text-sm.line-clamp-2
p.text-xs.text-gray-600.line-clamp-2
```

---

## Performance Optimization

### Lazy Loading
```jsx
// Load internal links after main content
<Suspense fallback={<LoadingPlaceholder />}>
  <InternalLinksSection {...props} />
</Suspense>
```

### Memoization
```jsx
// Memoize component to prevent unnecessary re-renders
export default memo(InternalLinkCard);
```

### Image Optimization
- Use emoji icons (no image loading)
- Minimal CSS for styling
- No external dependencies

---

## Common Patterns

### Pattern 1: Blog with Guide Links
```jsx
<InternalLinksSection
  title="Explore More Destinations"
  links={internalLinks.guideLinks}
  columns={3}
/>
```

### Pattern 2: Destination with Blog Links
```jsx
<InternalLinksSection
  title="Related Travel Guides"
  links={internalLinks.relatedBlogs.map(blog => ({
    href: `/blogs/${blog.slug}`,
    title: blog.title,
    description: blog.excerpt,
    icon: '📖'
  }))}
  columns={4}
/>
```

### Pattern 3: Multiple Link Types
```jsx
<>
  <InternalLinksSection
    title="Explore Destinations"
    links={destinationLinks}
    columns={3}
  />
  <InternalLinksSection
    title="Read Travel Guides"
    links={blogLinks}
    columns={4}
  />
</>
```

---

## Troubleshooting

### Links Not Showing
1. Check `links` array is not empty
2. Verify each link has required props
3. Check component is properly imported
4. Verify parent container has proper width

### Styling Issues
1. Check Tailwind CSS is configured
2. Verify color classes are correct
3. Check responsive breakpoints
4. Test in different browsers

### Responsive Issues
1. Check grid column classes
2. Verify breakpoint values
3. Test on actual devices
4. Check viewport meta tag

---

## Best Practices

### 1. Link Placement
- Place after main content
- Before related content sections
- Use consistent positioning

### 2. Link Quantity
- Show 3-4 links per section
- Avoid overwhelming users
- Use multiple sections if needed

### 3. Link Relevance
- Only show truly related content
- Use descriptive titles
- Provide helpful descriptions

### 4. Visual Hierarchy
- Use consistent styling
- Maintain color scheme
- Use icons effectively

### 5. Mobile Optimization
- Stack links vertically on mobile
- Use full width on small screens
- Ensure touch targets are 44px+

---

## Future Enhancements

### Planned Features
- [ ] Animated transitions
- [ ] Hover preview tooltips
- [ ] Link analytics tracking
- [ ] A/B testing support
- [ ] Dynamic link ordering
- [ ] Personalized recommendations

### Potential Improvements
- [ ] Add link icons as images
- [ ] Support for custom colors
- [ ] Link grouping by type
- [ ] Advanced filtering options
- [ ] Link performance metrics

---

## Support & Resources

### Documentation
- `INTERNAL_LINKING_GUIDE.md` - Complete system guide
- `COMPONENTS.md` - Component reference
- `QUICK_REFERENCE.md` - Quick lookup

### Code Examples
- Blog page integration
- Destination page integration
- Custom implementations

### Testing
- Manual testing checklist
- Responsive design testing
- Accessibility testing

---

*Last Updated: March 11, 2026*
