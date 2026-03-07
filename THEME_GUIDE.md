# BudgetYatra Travel Blog - Theme Guide

## Overview

The BudgetYatra travel blog uses a custom Tailwind CSS 4 theme configured using the `@theme inline` directive in `src/app/globals.css`. This theme provides a cohesive, travel-inspired design system.

## Brand Colors

### Primary (Sky Blue)
Represents travel, adventure, and open skies.
- `primary-500`: #0ea5e9 (Main brand color)
- `primary-600`: #0284c7 (Hover states)
- Full scale: 50-950

**Usage**: Primary buttons, links, navigation highlights, CTAs

### Secondary (Fuchsia)
Adds vibrancy and energy to the design.
- `secondary-500`: #d946ef
- `secondary-600`: #c026d3
- Full scale: 50-950

**Usage**: Accent elements, badges, special highlights

### Accent (Orange)
Warm, inviting color for emphasis.
- `accent-500`: #f97316
- `accent-600`: #ea580c
- Full scale: 50-950

**Usage**: Budget indicators, featured content, call-outs

### Semantic Colors

- **Success** (Green): Confirmations, success messages
- **Warning** (Amber): Warnings, important notices
- **Error** (Red): Error messages, validation errors
- **Gray**: Neutral backgrounds, borders, text

## Typography

### Font Families

```css
font-sans  /* Geist Sans - Primary UI font */
font-serif /* Georgia, Times - Article content */
font-mono  /* Geist Mono - Code snippets */
```

### Font Sizes

| Class | Size | Use Case |
|-------|------|----------|
| `text-xs` | 12px | Small labels, captions |
| `text-sm` | 14px | Secondary text |
| `text-base` | 16px | Body text (default) |
| `text-lg` | 18px | Emphasized text |
| `text-xl` | 20px | Subheadings |
| `text-2xl` | 24px | Section titles |
| `text-3xl` | 30px | Page subtitles |
| `text-4xl` | 36px | H1 (mobile) |
| `text-5xl` | 48px | H1 (tablet) |
| `text-6xl` | 60px | H1 (desktop) |
| `text-7xl-9xl` | 72px-128px | Hero text |

### Line Heights

- `leading-none`: 1 (Tight headings)
- `leading-tight`: 1.25 (Headings)
- `leading-snug`: 1.375 (Subheadings)
- `leading-normal`: 1.5 (Body text - default)
- `leading-relaxed`: 1.625 (Long-form content)
- `leading-loose`: 2 (Spacious text)

### Letter Spacing

- `tracking-tighter`: -0.05em
- `tracking-tight`: -0.025em (Headings)
- `tracking-normal`: 0em (Default)
- `tracking-wide`: 0.025em
- `tracking-wider`: 0.05em
- `tracking-widest`: 0.1em

## Custom Spacing

Extended spacing scale for travel blog layouts:

| Variable | Value | Use Case |
|----------|-------|----------|
| `spacing-18` | 72px | Section spacing |
| `spacing-22` | 88px | Large gaps |
| `spacing-26` | 104px | Hero padding |
| `spacing-30` | 120px | Page sections |
| `spacing-34` | 136px | Extra large spacing |
| `spacing-38` | 152px | Hero sections |
| `spacing-42` | 168px | Feature sections |
| `spacing-46` | 184px | Landing sections |
| `spacing-50` | 200px | Maximum spacing |

## Border Radius

- `rounded-sm`: 2px (Subtle rounding)
- `rounded`: 4px (Default)
- `rounded-md`: 6px (Cards)
- `rounded-lg`: 8px (Buttons, inputs)
- `rounded-xl`: 12px (Large cards)
- `rounded-2xl`: 16px (Feature cards)
- `rounded-3xl`: 24px (Hero elements)
- `rounded-full`: 9999px (Circles, pills)

## Shadows

- `shadow-sm`: Subtle elevation
- `shadow`: Default card shadow
- `shadow-md`: Elevated cards
- `shadow-lg`: Prominent elements
- `shadow-xl`: Modals, overlays
- `shadow-2xl`: Maximum elevation

## Container Widths

- `container-sm`: 640px
- `container-md`: 768px
- `container-lg`: 1024px
- `container-xl`: 1280px
- `container-2xl`: 1536px

## Z-Index Scale

- `z-0`: 0 (Base layer)
- `z-10`: 10 (Elevated content)
- `z-20`: 20 (Dropdowns)
- `z-30`: 30 (Sticky headers)
- `z-40`: 40 (Overlays)
- `z-50`: 50 (Modals, toasts)

## Transition Durations

- `duration-75`: 75ms (Instant)
- `duration-100`: 100ms (Very fast)
- `duration-150`: 150ms (Fast)
- `duration-200`: 200ms (Default)
- `duration-300`: 300ms (Moderate)
- `duration-500`: 500ms (Slow)
- `duration-700`: 700ms (Very slow)
- `duration-1000`: 1000ms (Animations)

## Usage Examples

### Primary Button
```jsx
<button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors duration-200">
  Explore Destinations
</button>
```

### Card Component
```jsx
<div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
  <h3 className="text-2xl font-bold text-gray-900 mb-2">Destination Name</h3>
  <p className="text-gray-600 leading-relaxed">Description...</p>
</div>
```

### Hero Section
```jsx
<section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-30 px-6">
  <h1 className="text-6xl font-bold text-white mb-4">Discover India</h1>
  <p className="text-xl text-white/90 leading-relaxed">Budget-friendly travel adventures</p>
</section>
```

### Budget Badge
```jsx
<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent-100 text-accent-800">
  ₹5,000 - ₹10,000
</span>
```

## Responsive Design

The theme includes responsive typography that automatically scales:

- **Mobile** (< 768px): Smaller font sizes, compact spacing
- **Tablet** (768px - 1024px): Medium font sizes
- **Desktop** (> 1024px): Full-size typography

## Accessibility

The theme includes built-in accessibility features:

- **Focus indicators**: 2px solid primary-500 outline with 2px offset
- **Color contrast**: All text colors meet WCAG AA standards (4.5:1 minimum)
- **Font smoothing**: Antialiased for better readability
- **Smooth scrolling**: Enabled for better UX

## Best Practices

1. **Use semantic colors**: Choose colors based on meaning (primary for actions, success for confirmations)
2. **Maintain consistency**: Stick to the defined spacing and typography scales
3. **Test responsiveness**: Verify designs work across all breakpoints
4. **Check accessibility**: Ensure sufficient color contrast and keyboard navigation
5. **Use transitions**: Add smooth transitions for interactive elements (200ms default)

## Customization

To modify the theme, edit `src/app/globals.css` within the `@theme inline` block. All custom CSS variables follow the pattern:

```css
--color-{name}-{shade}
--font-{property}
--spacing-{size}
--radius-{size}
--shadow-{size}
```

## Resources

- [Tailwind CSS 4 Documentation](https://tailwindcss.com/docs)
- [Next.js Styling Guide](https://nextjs.org/docs/app/building-your-application/styling)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
