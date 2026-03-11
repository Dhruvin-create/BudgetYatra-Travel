# BudgetYatra Reusable Components Documentation

This document provides comprehensive documentation for all reusable components in the BudgetYatra travel blog application.

## Table of Contents

1. [Layout Components](#layout-components)
2. [Card Components](#card-components)
3. [Form Components](#form-components)
4. [Search Components](#search-components)
5. [Calculator Components](#calculator-components)
6. [Home Components](#home-components)

---

## Layout Components

### Navbar

**Location:** `src/components/layout/Navbar.jsx`

**Purpose:** Main navigation bar with responsive mobile menu, categories dropdown, and expandable search functionality.

**Features:**
- Responsive mobile hamburger menu
- Categories dropdown with travel categories
- Expandable search bar that expands from right
- Logo and branding
- Navigation links to main pages

**Props:**
- None (uses internal state for menu and search)

**Usage:**
```jsx
import Navbar from '@/components/layout/Navbar';

export default function Layout() {
  return (
    <>
      <Navbar />
      {/* Page content */}
    </>
  );
}
```

**Styling:**
- Uses Tailwind CSS with responsive breakpoints
- Mobile-first approach with `sm:`, `md:`, `lg:` breakpoints
- Primary color scheme from theme configuration

---

### Footer

**Location:** `src/components/layout/Footer.jsx`

**Purpose:** Comprehensive footer with links, social media, legal sections, and newsletter signup.

**Features:**
- Multiple footer sections (Quick Links, Resources, Legal, Social)
- Newsletter subscription form
- Social media links
- Copyright information
- Responsive grid layout

**Props:**
- None (uses configuration from constants)

**Usage:**
```jsx
import Footer from '@/components/layout/Footer';

export default function Layout() {
  return (
    <>
      {/* Page content */}
      <Footer />
    </>
  );
}
```

**Styling:**
- Dark background with white text
- Responsive grid: 1 column on mobile, 2-4 columns on desktop
- Proper spacing and typography hierarchy

---

## Card Components

### BlogCard

**Location:** `src/components/cards/BlogCard.jsx`

**Purpose:** Reusable card component for displaying blog posts in grid layouts.

**Features:**
- Featured image with hover zoom effect
- Category badge
- Blog title with line clamping
- Excerpt text
- Reading time indicator
- Optional budget range display
- Hover shadow effects

**Props:**
```javascript
{
  blog: {
    slug: string,
    title: string,
    excerpt: string,
    category: string,
    readingTime: number,
    featuredImage: {
      url: string,
      alt: string
    },
    budgetRange: {
      min: number,
      max: number
    }
  },
  showBudget: boolean (default: false)
}
```

**Usage:**
```jsx
import BlogCard from '@/components/cards/BlogCard';

export default function BlogsPage({ blogs }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map(blog => (
        <BlogCard key={blog.slug} blog={blog} showBudget={true} />
      ))}
    </div>
  );
}
```

**Styling:**
- White background with rounded corners
- Shadow effects with hover enhancement
- Responsive image height (h-48)
- Flexbox layout for proper content distribution

---

### DestinationCard

**Location:** `src/components/cards/DestinationCard.jsx`

**Purpose:** Reusable card component for displaying travel destinations.

**Features:**
- Featured destination image
- Destination name and description
- Budget range display
- Best seasons to visit
- Hover effects with image zoom
- Link to destination detail page

**Props:**
```javascript
{
  destination: {
    slug: string,
    name: string,
    description: string,
    image: string,
    budgetRange: {
      min: number,
      max: number
    },
    seasons: string[]
  }
}
```

**Usage:**
```jsx
import DestinationCard from '@/components/cards/DestinationCard';

export default function DestinationsPage({ destinations }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {destinations.map(dest => (
        <DestinationCard key={dest.slug} destination={dest} />
      ))}
    </div>
  );
}
```

**Styling:**
- Consistent with BlogCard for visual harmony
- Gradient overlay on images
- Responsive grid layout

---

### RelatedPosts

**Location:** `src/components/cards/RelatedPosts.jsx`

**Purpose:** Section component for displaying related blog posts at the end of articles.

**Features:**
- Customizable title and subtitle
- Responsive grid layout (2, 3, or 4 columns)
- "View All" link for desktop and mobile
- Featured images with hover effects
- Category badges
- Reading time indicators
- Graceful handling of empty blog arrays

**Props:**
```javascript
{
  blogs: Array (required),
  title: string (default: "Related Travel Guides"),
  subtitle: string (default: "Discover more destinations and travel tips"),
  columns: number (default: 4, options: 2, 3, 4),
  showViewAll: boolean (default: true),
  viewAllHref: string (default: "/blogs")
}
```

**Usage:**
```jsx
import RelatedPosts from '@/components/cards/RelatedPosts';

export default function BlogPage({ blog, relatedBlogs }) {
  return (
    <>
      {/* Blog content */}
      <RelatedPosts 
        blogs={relatedBlogs}
        title="More Travel Guides"
        columns={4}
      />
    </>
  );
}
```

**Styling:**
- Light gray background section
- Responsive grid with proper gaps
- Mobile-optimized "View All" link
- Consistent with other card components

---

## Form Components

### Newsletter

**Location:** `src/components/forms/Newsletter.jsx`

**Purpose:** Newsletter subscription form component for email capture.

**Features:**
- Email input field with validation
- Subscribe button
- Success/error message handling
- Loading state during submission
- Responsive design

**Props:**
- None (uses internal state)

**Usage:**
```jsx
import Newsletter from '@/components/forms/Newsletter';

export default function HomePage() {
  return (
    <section>
      <h2>Subscribe to Our Newsletter</h2>
      <Newsletter />
    </section>
  );
}
```

**Styling:**
- Clean, minimal design
- Responsive input and button
- Clear visual feedback for interactions

---

## Search Components

### SearchBar

**Location:** `src/components/search/SearchBar.jsx`

**Purpose:** Reusable search component with autocomplete suggestions and keyboard navigation.

**Features:**
- Text input with search icon
- Autocomplete suggestions from blogs and destinations
- Keyboard navigation (arrow keys, Enter)
- Click outside to close suggestions
- Responsive design
- Mobile-friendly

**Props:**
```javascript
{
  placeholder: string (default: "Search destinations, guides..."),
  onSearch: function (optional),
  className: string (optional)
}
```

**Usage:**
```jsx
import SearchBar from '@/components/search/SearchBar';

export default function Page() {
  const handleSearch = (query) => {
    console.log('Search:', query);
  };

  return (
    <SearchBar 
      placeholder="Find your next destination..."
      onSearch={handleSearch}
    />
  );
}
```

**Styling:**
- White border with backdrop blur
- Responsive width and padding
- Dropdown suggestions with hover effects
- Keyboard-accessible

---

## Calculator Components

### BudgetCalculator

**Location:** `src/components/calculator/BudgetCalculator.jsx`

**Purpose:** Interactive budget calculator for trip planning.

**Features:**
- Input fields for trip duration and daily budget
- Real-time calculation
- Breakdown by expense categories
- Responsive layout
- Clear visual presentation

**Props:**
- None (uses internal state)

**Usage:**
```jsx
import BudgetCalculator from '@/components/calculator/BudgetCalculator';

export default function CalculatorPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1>Trip Budget Calculator</h1>
      <BudgetCalculator />
    </div>
  );
}
```

**Styling:**
- Clean, organized layout
- Input fields with labels
- Results display with clear formatting
- Responsive design

---

## Home Components

### Hero

**Location:** `src/components/home/Hero.jsx`

**Purpose:** Hero section for the homepage with background image and search functionality.

**Features:**
- Full-width hero image
- Gradient overlay for text readability
- Headline and subheadline
- Integrated search bar
- Call-to-action button
- Responsive design

**Props:**
- None (uses internal state for search)

**Usage:**
```jsx
import Hero from '@/components/home/Hero';

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Other sections */}
    </>
  );
}
```

**Styling:**
- Full viewport height on desktop
- Responsive height on mobile
- Proper text contrast with overlay
- Search bar with white border and text

---

## Component Architecture

### Naming Conventions

- **Layout Components:** `src/components/layout/ComponentName.jsx`
- **Card Components:** `src/components/cards/ComponentName.jsx`
- **Form Components:** `src/components/forms/ComponentName.jsx`
- **Search Components:** `src/components/search/ComponentName.jsx`
- **Calculator Components:** `src/components/calculator/ComponentName.jsx`
- **Home Components:** `src/components/home/ComponentName.jsx`

### Styling Approach

All components use:
- **Tailwind CSS** for styling
- **CSS Modules** for component-specific styles (when needed)
- **Responsive Design** with mobile-first approach
- **Consistent Color Scheme** from theme configuration

### Props Pattern

Components follow these patterns:
- Required props are clearly documented
- Default values are provided for optional props
- Props are validated where necessary
- Complex props are documented with TypeScript-like comments

### Reusability Best Practices

1. **Single Responsibility:** Each component has one primary purpose
2. **Composability:** Components can be combined to create complex UIs
3. **Flexibility:** Props allow customization without modifying component code
4. **Consistency:** Visual and behavioral consistency across components
5. **Documentation:** Clear usage examples and prop documentation

---

## Integration Guide

### Using Components in Pages

```jsx
import BlogCard from '@/components/cards/BlogCard';
import RelatedPosts from '@/components/cards/RelatedPosts';
import Newsletter from '@/components/forms/Newsletter';

export default function BlogsPage({ blogs, relatedBlogs }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
      
      <RelatedPosts blogs={relatedBlogs} />
      
      <Newsletter />
    </>
  );
}
```

### Using Components in Layouts

```jsx
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

---

## Performance Considerations

- Components use `Next.js Image` component for optimized image loading
- Lazy loading for images with proper `fill` and `object-cover`
- Responsive images with proper aspect ratios
- Minimal re-renders through proper prop memoization
- CSS is scoped to components to avoid conflicts

---

## Accessibility

All components follow accessibility best practices:
- Semantic HTML elements
- Proper heading hierarchy
- ARIA labels where necessary
- Keyboard navigation support
- Color contrast compliance
- Focus indicators for interactive elements

---

## Future Enhancements

- Add TypeScript prop validation
- Create Storybook documentation
- Add unit tests for components
- Implement component variants system
- Add animation transitions
- Create dark mode support

---

## Support

For questions or issues with components, refer to:
- Component source code comments
- Usage examples in this documentation
- Related page implementations
- Project README.md
