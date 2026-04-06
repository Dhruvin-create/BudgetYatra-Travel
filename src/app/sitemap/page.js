import Link from 'next/link';
import { getAllBlogs } from '@/lib/data/blogs';
import { getAllDestinations } from '@/lib/data/destinations';

export const metadata = {
  title: 'Sitemap - BudgetYatra',
  description: 'Complete sitemap of BudgetYatra website',
  alternates: { canonical: 'https://budgetyatra.online/sitemap' },
};

export default function SitemapPage() {
  const blogs = getAllBlogs();
  const destinations = getAllDestinations();

  const mainPages = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Budget Calculator', href: '/calculator' },
    { name: 'Travel Guide', href: '/guide' }
  ];

  const categories = [
    { name: 'Beach', href: '/blogs?category=Beach' },
    { name: 'Mountains', href: '/blogs?category=Mountains' },
    { name: 'Heritage', href: '/blogs?category=Heritage' },
    { name: 'Adventure', href: '/blogs?category=Adventure' },
    { name: 'Nature', href: '/blogs?category=Nature' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sitemap
          </h1>
          <p className="text-lg text-gray-600">
            Complete overview of all pages on BudgetYatra
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>🏠</span>
              Main Pages
            </h2>
            <ul className="space-y-2">
              {mainPages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-primary-600 hover:text-primary-700 hover:underline"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>📚</span>
              Categories
            </h2>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.href}>
                  <Link
                    href={category.href}
                    className="text-primary-600 hover:text-primary-700 hover:underline"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Pages */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>⚖️</span>
              Legal
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-primary-600 hover:text-primary-700 hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-primary-600 hover:text-primary-700 hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="text-primary-600 hover:text-primary-700 hover:underline">
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>📍</span>
              Destinations ({destinations.length})
            </h2>
            <ul className="space-y-2 max-h-64 overflow-y-auto">
              {destinations.map((dest) => (
                <li key={dest.slug}>
                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="text-primary-600 hover:text-primary-700 hover:underline"
                  >
                    {dest.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blogs */}
          <div className="bg-white rounded-xl shadow-md p-6 md:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>📝</span>
              Travel Guides ({blogs.length})
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-64 overflow-y-auto">
              {blogs.map((blog) => (
                <li key={blog.slug}>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="text-primary-600 hover:text-primary-700 hover:underline text-sm"
                  >
                    {blog.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
