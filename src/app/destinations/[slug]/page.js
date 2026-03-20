import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDestinationBySlug, getAllDestinations } from '@/lib/data/destinations';
import { getBlogsByDestination } from '@/lib/data/blogs';
import { generateDestinationMetadata } from '@/lib/utils/seo';
import BlogCard from '@/components/cards/BlogCard';
import Breadcrumbs from '@/components/links/Breadcrumbs';
import InternalLinksSection from '@/components/links/InternalLinksSection';
import { getDestinationInternalLinks, getBreadcrumbs } from '@/lib/utils/internalLinks';

export async function generateStaticParams() {
  const destinations = getAllDestinations();
  return destinations.map((dest) => ({
    slug: dest.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) return {};
  return generateDestinationMetadata(destination);
}

export default async function DestinationPage({ params }) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const relatedBlogs = getBlogsByDestination(destination.slug);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <Image
          src={destination.images[0].url}
          alt={destination.images[0].alt}
          fill
          className="object-cover"
          priority
          quality={60}
          sizes="100vw"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
              {destination.name}
            </h1>
            <p className="text-xl text-white/90">{destination.state}, {destination.region} India</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <Breadcrumbs items={getBreadcrumbs('destination', destination.slug, destination.name)} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div 
              className="text-lg text-gray-700 mb-8 leading-relaxed prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: destination.longDescription }}
            />

            {/* Attractions */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Attractions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.attractions.map((attraction) => (
                  <div key={attraction} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <svg className="w-6 h-6 text-primary-600 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700">{attraction}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Travel Tips */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Travel Tips</h2>
              <ul className="space-y-3">
                {destination.travelTips.map((tip, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-success-600 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* How to Reach */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Reach</h2>
              <div className="space-y-4">
                <div className="p-6 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    By Air
                  </h3>
                  <p className="text-gray-700">{destination.howToReach.byAir}</p>
                </div>
                <div className="p-6 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    By Train
                  </h3>
                  <p className="text-gray-700">{destination.howToReach.byTrain}</p>
                </div>
                <div className="p-6 bg-yellow-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    By Road
                  </h3>
                  <p className="text-gray-700">{destination.howToReach.byRoad}</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Budget Breakdown */}
            <div className="bg-linear-to-br from-accent-50 to-accent-100 rounded-xl p-6 mb-8 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Budget Breakdown</h3>
              
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Total per day</p>
                <p className="text-3xl font-bold text-accent-600">
                  ₹{destination.budgetRange.min.toLocaleString()} - ₹{destination.budgetRange.max.toLocaleString()}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-accent-200">
                  <span className="text-gray-700">Accommodation</span>
                  <span className="font-semibold text-gray-900">
                    ₹{destination.budgetBreakdown.accommodation.min} - ₹{destination.budgetBreakdown.accommodation.max}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-accent-200">
                  <span className="text-gray-700">Food</span>
                  <span className="font-semibold text-gray-900">
                    ₹{destination.budgetBreakdown.food.min} - ₹{destination.budgetBreakdown.food.max}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-accent-200">
                  <span className="text-gray-700">Transport</span>
                  <span className="font-semibold text-gray-900">
                    ₹{destination.budgetBreakdown.transport.min} - ₹{destination.budgetBreakdown.transport.max}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Activities</span>
                  <span className="font-semibold text-gray-900">
                    ₹{destination.budgetBreakdown.activities.min} - ₹{destination.budgetBreakdown.activities.max}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-accent-200">
                <h4 className="font-semibold text-gray-900 mb-3">Best Time to Visit</h4>
                <div className="flex flex-wrap gap-2">
                  {destination.bestSeasons.map((season) => (
                    <span key={season} className="px-3 py-1 bg-white text-accent-700 text-sm font-medium rounded-full">
                      {season}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Internal Links Section */}
        {(() => {
          const internalLinks = getDestinationInternalLinks(destination.slug);
          return internalLinks.guideLinks && internalLinks.guideLinks.length > 0 ? (
            <div className="mt-16 pt-16 border-t border-gray-200">
              <InternalLinksSection
                title="Explore Similar Destinations"
                subtitle="Find destinations with similar characteristics"
                links={internalLinks.guideLinks}
                columns={3}
              />
            </div>
          ) : null;
        })()}

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <section className="mt-16 pt-16 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Travel Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedBlogs.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
