import Hero from '@/components/home/Hero';
import BlogCard from '@/components/cards/BlogCard';
import DestinationCard from '@/components/cards/DestinationCard';
import Newsletter from '@/components/forms/Newsletter';
import { getLatestBlogs } from '@/lib/data/blogs';
import { getFeaturedDestinations } from '@/lib/data/destinations';

export default function Home() {
  const latestBlogs = getLatestBlogs(8);
  const featuredDestinations = getFeaturedDestinations(6);

  return (
    <>
      <Hero />

      {/* Popular Destinations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore India's most beautiful and budget-friendly travel destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Travel Guides
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read our latest blog posts and travel guides for budget-friendly adventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestBlogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>
    </>
  );
}
