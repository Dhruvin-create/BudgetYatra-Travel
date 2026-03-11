import Link from 'next/link';
import { getAllContentClusters, getClusterStatistics } from '@/lib/utils/contentClusters';
import Breadcrumbs from '@/components/links/Breadcrumbs';

export const metadata = {
  title: 'Content Clusters - BudgetYatra',
  description: 'Explore our organized content clusters covering different aspects of budget travel in India.',
  keywords: ['content clusters', 'travel guides', 'destination guides', 'budget travel'],
};

export default function ClustersPage() {
  const clusters = getAllContentClusters();
  const stats = getClusterStatistics();

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Clusters', href: '/clusters' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Content Clusters
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Explore our organized collection of travel guides, destination information, and budget travel tips.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Statistics */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {stats.totalClusters}
              </div>
              <div className="text-gray-700 font-semibold">Content Clusters</div>
              <p className="text-sm text-gray-600 mt-2">
                Organized topic areas covering different aspects of travel
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl p-8">
              <div className="text-4xl font-bold text-secondary-600 mb-2">
                {stats.totalBlogs}
              </div>
              <div className="text-gray-700 font-semibold">Travel Guides</div>
              <p className="text-sm text-gray-600 mt-2">
                Comprehensive guides to destinations and travel tips
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-8">
              <div className="text-4xl font-bold text-accent-600 mb-2">
                {stats.totalDestinations}
              </div>
              <div className="text-gray-700 font-semibold">Destinations</div>
              <p className="text-sm text-gray-600 mt-2">
                Featured destinations with complete information
              </p>
            </div>
          </div>
        </section>

        {/* Clusters Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Clusters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clusters.map(cluster => {
              const clusterStats = stats.clusterBreakdown.find(c => c.id === cluster.id);
              return (
                <Link key={cluster.id} href={`/clusters/${cluster.id}`}>
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden h-full group">
                    {/* Icon Background */}
                    <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 text-center">
                      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                        {cluster.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {cluster.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {cluster.description}
                      </p>

                      {/* Stats */}
                      <div className="flex gap-4 mb-4 text-sm">
                        <div>
                          <div className="font-semibold text-gray-900">
                            {clusterStats?.blogCount || 0}
                          </div>
                          <div className="text-gray-500">Guides</div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {clusterStats?.destinationCount || 0}
                          </div>
                          <div className="text-gray-500">Destinations</div>
                        </div>
                      </div>

                      {/* Link */}
                      <div className="flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                        Explore
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-gray-50 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How Content Clusters Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pillar Content</h3>
              <p className="text-gray-600">
                Comprehensive guides covering broad topics like beach destinations or adventure travel.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cluster Content</h3>
              <p className="text-gray-600">
                Specific guides and destinations that support and expand on the pillar content.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Internal Linking</h3>
              <p className="text-gray-600">
                Strategic links between pillar and cluster content establish topical authority.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Journey</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Explore our content clusters to find the perfect destination and travel guide for your next adventure.
          </p>
          <Link
            href="/guide"
            className="inline-block px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Explore Travel Guide
          </Link>
        </section>
      </div>
    </div>
  );
}
