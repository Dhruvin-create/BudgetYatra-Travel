import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogBySlug, getAllBlogs } from '@/lib/data/blogs';
import { generateBlogMetadata } from '@/lib/utils/seo';

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const blog = getBlogBySlug(params.slug);
  if (!blog) return {};
  return generateBlogMetadata(blog);
}

export default function BlogPage({ params }) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blog.relatedArticles
    .map(slug => getBlogBySlug(slug))
    .filter(Boolean)
    .slice(0, 4);

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-96 w-full">
        <Image
          src={blog.featuredImage.url}
          alt={blog.featuredImage.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full mb-4">
              {blog.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {blog.title}
            </h1>
            <div className="flex items-center space-x-4 text-white/90">
              <span>{blog.author.name}</span>
              <span>•</span>
              <span>{new Date(blog.publishDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>•</span>
              <span>{blog.readingTime} min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Budget Info */}
        <div className="bg-accent-50 border-l-4 border-accent-500 p-6 mb-8 rounded-r-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Budget Range</h3>
              <p className="text-2xl font-bold text-accent-600">
                ₹{blog.budgetRange.min.toLocaleString()} - ₹{blog.budgetRange.max.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 mt-1">per day</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Best Seasons</h3>
              <div className="flex flex-wrap gap-2">
                {blog.season.map((s) => (
                  <span key={s} className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br/>') }} />
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <Link key={relatedBlog.slug} href={`/blogs/${relatedBlog.slug}`} className="group">
                  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                    <div className="relative h-40">
                      <Image
                        src={relatedBlog.featuredImage.url}
                        alt={relatedBlog.featuredImage.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {relatedBlog.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
