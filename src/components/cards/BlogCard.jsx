import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ blog, showBudget = false }) {
  return (
    <Link href={`/blogs/${blog.slug}`} className="group">
      <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
        {/* Featured Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={blog.featuredImage.url.replace(/w=\d+&h=\d+/, 'w=800&h=450')}
            alt={blog.featuredImage.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            quality={60}
            sizes="(max-width: 768px) 92vw, (max-width: 1024px) 46vw, 33vw"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
              {blog.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
            {blog.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
            {blog.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{blog.readingTime} min read</span>
            </div>
            {showBudget && (
              <div className="flex items-center space-x-1">
                <span className="text-accent-600 font-semibold">
                  ₹{blog.budgetRange.min.toLocaleString()} - ₹{blog.budgetRange.max.toLocaleString()}
                </span>
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
