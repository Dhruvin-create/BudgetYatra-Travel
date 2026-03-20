import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getClusterById, getClusterContent, getAllContentClusters, generatePillarPageMetadata } from '@/lib/utils/contentClusters';
import { generateMetadata as generateSEOMetadata } from '@/lib/utils/seo';
import BlogCard from '@/components/cards/BlogCard';
import DestinationCard from '@/components/cards/DestinationCard';
import Breadcrumbs from '@/components/links/Breadcrumbs';

export async function generateStaticParams() {
  const clusters = getAllContentClusters();
  return clusters.map(cluster => ({
    clusterId: cluster.id,
  }));
}

export async function generateMetadata({ params }) {
  const { clusterId } = await params;
  const cluster = getClusterById(clusterId);
  
  if (!cluster) return {};

  const pillarMetadata = generatePillarPageMetadata(clusterId);
  
  return generateSEOMetadata({
    title: pillarMetadata.title,
    description: pillarMetadata.description,
    keywords: pillarMetadata.keywords,
    url: `https://budgetyatra.onlineclusters/${clusterId}`,
    type: 'website',
  });
}

export default async function ClusterPage({ params }) {
  const { clusterId } = await params;
  const cluster = getClusterById(clusterId);

  if (!cluster) {
    notFound();
  }

  const { blogs, destinations } = getClusterContent(clusterId);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Clusters', href: '/clusters' },
    { label: cluster.name, href: `/clusters/${clusterId}` },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="mt-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{cluster.icon}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {cluster.name}
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-2xl">
              {cluster.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
          <div className="bg-gray-50 rounded-xl p-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Explore our comprehensive collection of {cluster.name.toLowerCase()} travel guides and destination information. 
              Whether you're planning your first trip or looking for hidden gems, we have everything you need to make the most 
              of your budget travel experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary-600">{blogs.length}</div>
                <div className="text-gray-600">Travel Guides</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary-600">{destinations.length}</div>
                <div className="text-gray-600">Destinations</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary-600">
                  {blogs.length + destinations.length}
                </div>
                <div className="text-gray-600">Total Resources</div>
              </div>
            </div>
          </div>
        </section>

        {/* Travel Guides */}
        {blogs.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Travel Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map(blog => (
                <BlogCard key={blog.slug} blog={blog} showBudget={true} />
              ))}
            </div>
          </section>
        )}

        {/* Destinations */}
        {destinations.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map(dest => (
                <DestinationCard key={dest.slug} destination={dest} />
              ))}
            </div>
          </section>
        )}

        {/* Related Clusters */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore More Clusters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getAllContentClusters()
              .filter(c => c.id !== clusterId)
              .slice(0, 3)
              .map(relatedCluster => (
                <Link key={relatedCluster.id} href={`/clusters/${relatedCluster.id}`}>
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 h-full">
                    <div className="text-4xl mb-3">{relatedCluster.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {relatedCluster.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {relatedCluster.description}
                    </p>
                    <div className="flex items-center text-primary-600 font-semibold">
                      Explore
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Trip?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Use our budget calculator to estimate your trip costs and find the perfect destination for your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calculator"
              className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Calculate Budget
            </Link>
            <Link
              href="/guide"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Explore Guide
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
