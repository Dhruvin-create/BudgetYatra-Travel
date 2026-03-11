import InternalLinkCard from './InternalLinkCard';

/**
 * InternalLinksSection Component
 * 
 * Displays a section of internal links with a title and grid layout.
 * Used to show related content and navigation options.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Array} props.links - Array of link objects
 * @param {string} props.title - Section title
 * @param {string} props.subtitle - Section subtitle
 * @param {number} props.columns - Number of columns (default: 3)
 * 
 * @example
 * <InternalLinksSection
 *   title="Explore More"
 *   links={[
 *     { href: '/blogs', title: 'Travel Guides', icon: '📖' },
 *     { href: '/destinations', title: 'Destinations', icon: '📍' }
 *   ]}
 *   columns={2}
 * />
 */
export default function InternalLinksSection({
  links = [],
  title = 'Related Content',
  subtitle = '',
  columns = 3
}) {
  if (!links || links.length === 0) {
    return null;
  }

  const gridColsClass = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }[columns] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="py-12 border-t border-gray-200">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        {subtitle && <p className="text-gray-600">{subtitle}</p>}
      </div>

      <div className={`grid ${gridColsClass} gap-4`}>
        {links.map((link, index) => (
          <InternalLinkCard
            key={index}
            href={link.href}
            title={link.title}
            description={link.description}
            icon={link.icon}
            color={link.color}
          />
        ))}
      </div>
    </section>
  );
}
