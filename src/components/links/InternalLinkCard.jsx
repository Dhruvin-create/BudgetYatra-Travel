import Link from 'next/link';

/**
 * InternalLinkCard Component
 * 
 * Displays a single internal link with icon, title, and description.
 * Used for contextual navigation between related content.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.href - Link destination
 * @param {string} props.title - Link title
 * @param {string} props.description - Link description
 * @param {string} props.icon - Icon emoji or text
 * @param {string} props.color - Color scheme (primary, secondary, accent)
 * 
 * @example
 * <InternalLinkCard
 *   href="/destinations/goa"
 *   title="View Goa Destination"
 *   description="Complete travel guide"
 *   icon="📍"
 *   color="primary"
 * />
 */
export default function InternalLinkCard({
  href,
  title,
  description,
  icon = '🔗',
  color = 'primary'
}) {
  const colorClasses = {
    primary: 'hover:bg-primary-50 border-primary-200',
    secondary: 'hover:bg-secondary-50 border-secondary-200',
    accent: 'hover:bg-accent-50 border-accent-200'
  };

  const colorClass = colorClasses[color] || colorClasses.primary;

  return (
    <Link href={href}>
      <div className={`p-4 border rounded-lg transition-colors cursor-pointer ${colorClass}`}>
        <div className="flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">{icon}</span>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
              {title}
            </h4>
            {description && (
              <p className="text-xs text-gray-600 line-clamp-2">
                {description}
              </p>
            )}
          </div>
          <svg className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
