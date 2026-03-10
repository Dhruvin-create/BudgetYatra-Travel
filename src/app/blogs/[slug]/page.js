import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogBySlug, getAllBlogs, getRelatedBlogs } from '@/lib/data/blogs';
import { generateBlogMetadata } from '@/lib/utils/seo';

// Table of Contents Component
function TableOfContents({ toc }) {
  if (!toc || toc.length === 0) return null;

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
        <span>📋</span>
        Table of Contents
      </h3>
      <ul className="space-y-2">
        {toc.map((item, index) => (
          <li key={index} className={`${item.level === 3 ? 'ml-4' : ''}`}>
            <a
              href={`#${item.id}`}
              className="text-primary-600 hover:text-primary-700 hover:underline text-sm"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Author Box Component
function AuthorBox({ author }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
      <div className="flex items-start gap-4">
        <Image
          src={author.avatar}
          alt={author.name}
          width={80}
          height={80}
          className="rounded-full"
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{author.name}</h3>
          <p className="text-gray-600 text-sm mb-3">{author.bio}</p>
          {author.social && (
            <div className="flex gap-3">
              {author.social.instagram && (
                <a
                  href={`https://instagram.com/${author.social.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 text-sm"
                >
                  📷 Instagram
                </a>
              )}
              {author.social.twitter && (
                <a
                  href={`https://twitter.com/${author.social.twitter.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm"
                >
                  🐦 Twitter
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// FAQ Schema Component
function FAQSection({ faq }) {
  if (!faq || faq.length === 0) return null;

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <span>❓</span>
        Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        {faq.map((item, index) => (
          <div key={index} className="border-b border-blue-200 last:border-b-0 pb-4 last:pb-0">
            <h4 className="font-semibold text-gray-900 mb-2">{item.question}</h4>
            <p className="text-gray-700 text-sm">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};
  return generateBlogMetadata(blog);
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = getRelatedBlogs ? getRelatedBlogs(slug, 4) : [];

  // Generate FAQ Schema for SEO
  const faqSchema = blog.faq ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": blog.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  // Generate Article Schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blog.title,
    "description": blog.excerpt,
    "image": blog.featuredImage.url,
    "author": {
      "@type": "Person",
      "name": blog.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "BudgetYatra",
      "logo": {
        "@type": "ImageObject",
        "url": "/logo.png"
      }
    },
    "datePublished": blog.publishDate,
    "dateModified": blog.updatedDate
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article className="min-h-screen bg-white">
        {/* Hero Section with Featured Image */}
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
              {/* H1 Title */}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Table of Contents */}
              <TableOfContents toc={blog.tableOfContents} />

              {/* Budget Info Card */}
              <div className="bg-gradient-to-br from-accent-50 to-primary-50 border-2 border-accent-200 p-8 mb-8 rounded-2xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">💰</span>
                      <h3 className="font-bold text-gray-900 text-lg">Budget Range</h3>
                    </div>
                    <p className="text-3xl font-bold text-accent-600 mb-1">
                      ₹{blog.budgetRange.min.toLocaleString()} - ₹{blog.budgetRange.max.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">per day per person</p>
                    <Link 
                      href="/calculator" 
                      className="inline-flex items-center mt-3 text-primary-600 hover:text-primary-700 font-semibold text-sm"
                    >
                      Calculate your trip budget
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🌤️</span>
                      <h3 className="font-bold text-gray-900 text-lg">Best Time to Visit</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {blog.season.map((s) => (
                        <span key={s} className="px-4 py-2 bg-white text-primary-700 text-sm font-semibold rounded-full shadow-sm">
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      Plan your visit during these seasons for the best experience
                    </p>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="blog-content prose prose-lg max-w-none mb-12">
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              </div>

              {/* FAQ Section */}
              <FAQSection faq={blog.faq} />

              {/* Author Box */}
              <AuthorBox author={blog.author} />

              {/* Tags */}
              <div className="pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Explore More</h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/guide?q=${encodeURIComponent(tag)}`}
                      className="px-4 py-2 bg-gray-100 hover:bg-primary-50 text-gray-700 hover:text-primary-600 rounded-full text-sm font-medium transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quick Links Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span>🔗</span>
                    Quick Links
                  </h3>
                  <div className="space-y-3">
                    <Link
                      href={`/destinations/${blog.destination}`}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors group"
                    >
                      <span className="text-2xl">📍</span>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 group-hover:text-primary-600">View Destination</div>
                        <div className="text-xs text-gray-500">Complete travel guide</div>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>

                    <Link
                      href="/calculator"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors group"
                    >
                      <span className="text-2xl">🧮</span>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 group-hover:text-primary-600">Budget Calculator</div>
                        <div className="text-xs text-gray-500">Estimate your trip cost</div>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Budget Breakdown Card */}
                <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl shadow-lg p-6 text-white">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span>💵</span>
                    Estimated Daily Costs
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-white/20">
                      <span className="flex items-center gap-2">
                        <span>🏨</span>
                        <span className="text-sm">Accommodation</span>
                      </span>
                      <span className="font-bold">₹500-1000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/20">
                      <span className="flex items-center gap-2">
                        <span>🍽️</span>
                        <span className="text-sm">Food</span>
                      </span>
                      <span className="font-bold">₹300-600</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/20">
                      <span className="flex items-center gap-2">
                        <span>🚗</span>
                        <span className="text-sm">Transport</span>
                      </span>
                      <span className="font-bold">₹200-500</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-2">
                        <span>🎯</span>
                        <span className="text-sm">Activities</span>
                      </span>
                      <span className="font-bold">₹500-1500</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/30">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total per day</span>
                      <span className="text-2xl font-bold">₹{blog.budgetRange.min.toLocaleString()}-{blog.budgetRange.max.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Travel Tips Card */}
                <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span>💡</span>
                    Pro Tips
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Book 2-3 months in advance for best deals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Travel during weekdays to save money</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Use local transport instead of taxis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Try street food for authentic experience</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-gray-900 rounded-2xl p-6 text-white text-center">
                  <div className="text-4xl mb-3">📧</div>
                  <h3 className="text-lg font-bold mb-2">Get Travel Updates</h3>
                  <p className="text-sm text-gray-300 mb-4">Subscribe for weekly travel tips and destination guides</p>
                  <Link
                    href="/contact"
                    className="inline-block w-full py-3 bg-primary-600 hover:bg-primary-700 font-semibold rounded-xl transition-colors"
                  >
                    Subscribe Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Related Travel Guides</h2>
                  <p className="text-gray-600">Discover more destinations and travel tips</p>
                </div>
                <Link
                  href="/blogs"
                  className="hidden md:inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                >
                  View All
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedBlogs.map((relatedBlog) => (
                  <Link key={relatedBlog.slug} href={`/blogs/${relatedBlog.slug}`} className="group">
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                      <div className="relative h-48">
                        <Image
                          src={relatedBlog.featuredImage.url}
                          alt={relatedBlog.featuredImage.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                            {relatedBlog.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">
                          {relatedBlog.title}
                        </h3>
                        <div className="flex items-center text-xs text-gray-500">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {relatedBlog.readingTime} min read
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}