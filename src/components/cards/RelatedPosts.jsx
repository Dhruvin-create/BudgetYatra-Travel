import Link from 'next/link';
import Image from 'next/image';

/**
 * RelatedPosts Component
 * 
 * Displays a grid of related blog posts with featured images, titles, and reading time.
 * Typically used at the end of blog articles to encourage further reading.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Array} props.blogs - Array of blog objects to display
 * @param {string} props.title - Section title (default: "Related Travel Guides")
 * @param {string} props.subtitle - Section subtitle (default: "Discover more destinations and travel tips")
 * @param {number} props.columns - Number of columns (default: 4, responsive)
 * @param {boolean} props.showViewAll - Show "View All" link (default: true)
 * @param {string} props.viewAllHref - Link for "View All" button (default: "/blogs")
 * 
 * @example
 * // Basic usage
 * <RelatedPosts blogs={relatedBlogs} />
 * 
 * @example
 * // Custom title and columns
 * <RelatedPosts 
 *   blogs={relatedBlogs} 
 *   title="More Destinations"
 *   columns={3}
 * />
 */
export default function RelatedPosts({
  blogs = [],
  title = 'Related Travel Guides',
  subtitle = 'Discover more destinations and travel tips',
  columns = 4,
  showViewAll = true,
  viewAllHref = '/blogs'
}) {
  if (!blogs || blogs.length === 0) {
    return null;
  }

  const gridColsClass = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-600">{subtitle}</p>
          </div>
          {showViewAll && (
            <Link
              href={viewAllHref}
              className="hidden md:inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
            >
              View All
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>

        {/* Grid of Related Posts */}
        <div className={`grid ${gridColsClass} gap-6`}>
          {blogs.map((blog) => (
            <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                {/* Featured Image */}
                <div className="relative h-48">
                  <Image
                    src={blog.featuredImage.url}
                    alt={blog.featuredImage.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    quality={45}
                    sizes="(max-width: 768px) 92vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">
                    {blog.title}
                  </h3>
                  <div className="flex items-center text-xs text-gray-500">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {blog.readingTime} min read
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Link */}
        {showViewAll && (
          <div className="md:hidden mt-8 text-center">
            <Link
              href={viewAllHref}
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
            >
              View All Articles
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
