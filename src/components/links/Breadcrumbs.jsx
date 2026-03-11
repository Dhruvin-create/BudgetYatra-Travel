import Link from 'next/link';

/**
 * Breadcrumbs Component
 * 
 * Displays navigation breadcrumbs for better site navigation and SEO.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Array} props.items - Array of breadcrumb items
 * @param {string} props.items[].label - Breadcrumb label
 * @param {string} props.items[].href - Breadcrumb link (optional for last item)
 * 
 * @example
 * <Breadcrumbs items={[
 *   { label: 'Home', href: '/' },
 *   { label: 'Blogs', href: '/blogs' },
 *   { label: 'Goa Travel Guide' }
 * ]} />
 */
export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          {index > 0 && (
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
          {item.href ? (
            <Link
              href={item.href}
              className="text-primary-600 hover:text-primary-700 hover:underline transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
