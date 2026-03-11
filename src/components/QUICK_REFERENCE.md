# Components Quick Reference Guide

Quick lookup for commonly used components in BudgetYatra.

## Layout

| Component | Path | Purpose |
|-----------|------|---------|
| Navbar | `layout/Navbar.jsx` | Main navigation with search & categories |
| Footer | `layout/Footer.jsx` | Footer with links, social, newsletter |

## Cards

| Component | Path | Purpose | Key Props |
|-----------|------|---------|-----------|
| BlogCard | `cards/BlogCard.jsx` | Blog post display | `blog`, `showBudget` |
| DestinationCard | `cards/DestinationCard.jsx` | Destination display | `destination` |
| RelatedPosts | `cards/RelatedPosts.jsx` | Related articles section | `blogs`, `title`, `columns` |

## Forms

| Component | Path | Purpose |
|-----------|------|---------|
| Newsletter | `forms/Newsletter.jsx` | Email subscription |

## Search

| Component | Path | Purpose | Key Props |
|-----------|------|---------|-----------|
| SearchBar | `search/SearchBar.jsx` | Search with autocomplete | `placeholder`, `onSearch` |

## Calculators

| Component | Path | Purpose |
|-----------|------|---------|
| BudgetCalculator | `calculator/BudgetCalculator.jsx` | Trip budget calculator |

## Home

| Component | Path | Purpose |
|-----------|------|---------|
| Hero | `home/Hero.jsx` | Homepage hero section |

---

## Common Usage Patterns

### Display Blog Grid
```jsx
import BlogCard from '@/components/cards/BlogCard';

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {blogs.map(blog => (
    <BlogCard key={blog.slug} blog={blog} showBudget={true} />
  ))}
</div>
```

### Show Related Posts
```jsx
import RelatedPosts from '@/components/cards/RelatedPosts';

<RelatedPosts blogs={relatedBlogs} columns={4} />
```

### Display Destinations
```jsx
import DestinationCard from '@/components/cards/DestinationCard';

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {destinations.map(dest => (
    <DestinationCard key={dest.slug} destination={dest} />
  ))}
</div>
```

### Add Newsletter
```jsx
import Newsletter from '@/components/forms/Newsletter';

<Newsletter />
```

### Add Search
```jsx
import SearchBar from '@/components/search/SearchBar';

<SearchBar placeholder="Search..." />
```

---

## Component Data Structures

### Blog Object
```javascript
{
  slug: "goa-travel-guide",
  title: "Complete Goa Travel Guide",
  excerpt: "Discover the beaches...",
  category: "Beach Destinations",
  readingTime: 8,
  featuredImage: {
    url: "/images/goa.jpg",
    alt: "Goa Beach"
  },
  budgetRange: {
    min: 1500,
    max: 3000
  }
}
```

### Destination Object
```javascript
{
  slug: "goa",
  name: "Goa",
  description: "Beautiful beach destination...",
  image: "/images/goa.jpg",
  budgetRange: {
    min: 1500,
    max: 3000
  },
  seasons: ["October", "November", "December"]
}
```

---

## Styling Classes Used

### Responsive Breakpoints
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

### Common Patterns
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Padding: `px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20`
- Text: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl`
- Buttons: `px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-lg`

---

## Tips & Best Practices

1. **Always use `key` prop** when mapping components in lists
2. **Use `showBudget` prop** on BlogCard when displaying budget information
3. **Customize RelatedPosts** with `title` and `columns` props
4. **Mobile-first approach** - design for mobile, enhance for desktop
5. **Use semantic HTML** - components already follow this
6. **Optimize images** - use Next.js Image component
7. **Test responsiveness** - check all breakpoints

---

## Troubleshooting

### Component not rendering?
- Check if all required props are passed
- Verify data structure matches expected format
- Check browser console for errors

### Styling looks wrong?
- Ensure Tailwind CSS is properly configured
- Check for conflicting CSS classes
- Verify responsive breakpoints

### Images not loading?
- Check image paths are correct
- Verify images exist in public folder
- Check Next.js Image component props

---

## See Also

- Full documentation: `COMPONENTS.md`
- Project structure: `PROJECT_SUMMARY.md`
- Theme guide: `THEME_GUIDE.md`
