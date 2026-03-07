import BlogCard from '@/components/cards/BlogCard';
import { getAllBlogs } from '@/lib/data/blogs';

export const metadata = {
  title: 'Travel Blogs - BudgetYatra',
  description: 'Read our latest travel blogs and guides for budget-friendly adventures across India',
};

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Travel Blogs & Guides
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover budget-friendly travel tips, destination guides, and adventure stories from across India
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No blogs found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
