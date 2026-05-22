import { Suspense } from 'react';
import BlogsContent from './BlogsContent';
import Breadcrumbs from '@/components/links/Breadcrumbs';
import { getParamSEO } from '@/lib/utils/seoParams';

const BASE_META = {
  title: 'India Budget Travel Blog — Tips & Guides | BudgetYatra',
  description: 'Explore India budget travel tips, guides for students, couples, and solo travelers. Real itineraries, money-saving hacks, and destination-wise budget breakdowns.',
  keywords: 'India budget travel tips, India budget travel blog, India budget travel for students, India budget travel for couples',
  alternates: { canonical: 'https://budgetyatra.online/blogs' },
  openGraph: {
    title: 'India Budget Travel Blog — Tips & Guides | BudgetYatra',
    description: 'Real budget travel guides for India — from Kerala backwaters to Ladakh road trips. Practical tips for every type of traveler.',
    type: 'website',
  },
};

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;

  if (!params?.category && !params?.q) return BASE_META;

  const seo = getParamSEO('/blogs', params);

  if (!seo.index) {
    return {
      ...BASE_META,
      alternates: { canonical: 'https://budgetyatra.online/blogs' },
      robots: { index: false, follow: true },
    };
  }

  return {
    title: seo.title || BASE_META.title,
    description: seo.description || BASE_META.description,
    alternates: { canonical: seo.canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title: seo.title || BASE_META.title,
      description: seo.description || BASE_META.description,
      type: 'website',
    },
  };
}

export default function BlogsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Travel Guides', href: '/blogs' },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>
      <Suspense fallback={<BlogsLoading />}>
        <BlogsContent />
      </Suspense>
    </>
  );
}

function BlogsLoading() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Travel Blogs & Guides</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover budget-friendly travel tips, destination guides, and adventure stories from across India</p>
        </div>
        <div className="animate-pulse space-y-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[...Array(6)].map((_, i) => <div key={i} className="h-12 w-32 bg-gray-200 rounded-full"></div>)}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => <div key={i} className="h-96 bg-gray-200 rounded-xl"></div>)}
          </div>
        </div>
      </div>
    </div>
  );
}
