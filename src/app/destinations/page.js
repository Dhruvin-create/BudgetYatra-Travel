import { Suspense } from 'react';
import DestinationsContent from './DestinationsContent';
import Breadcrumbs from '@/components/links/Breadcrumbs';
import { getParamSEO } from '@/lib/utils/seoParams';

const BASE_META = {
  title: 'Budget Destinations India — Affordable Places to Visit | BudgetYatra',
  description: 'Discover the best budget travel destinations in India. From cheap hill stations near Mumbai to affordable coastal destinations — find your perfect trip under ₹2000/day.',
  keywords: 'budget travel destinations India, affordable places to visit in India, cheap hill stations near Mumbai, cheap coastal destinations India',
  alternates: { canonical: 'https://budgetyatra.online/destinations' },
  openGraph: {
    title: 'Budget Destinations India — Affordable Places to Visit | BudgetYatra',
    description: 'Explore affordable places to visit in India. Cheap coastal destinations, hill stations, heritage cities — all with real budget breakdowns.',
    type: 'website',
  },
};

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;

  if (!params?.category) return BASE_META;

  const seo = getParamSEO('/destinations', params);

  if (!seo.index) {
    return {
      ...BASE_META,
      alternates: { canonical: 'https://budgetyatra.online/destinations' },
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

export default function DestinationsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Destinations', href: '/destinations' },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>
      <Suspense fallback={<DestinationsLoading />}>
        <DestinationsContent />
      </Suspense>
    </>
  );
}

function DestinationsLoading() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Explore Destinations</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover amazing budget-friendly destinations across India</p>
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
