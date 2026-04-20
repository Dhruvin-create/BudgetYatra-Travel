import { Suspense } from 'react';
import GuideContent from './GuideContent';
import Breadcrumbs from '@/components/links/Breadcrumbs';

const BASE_META = {
  title: 'India Budget Travel Itineraries & Road Trip Planner | BudgetYatra',
  description: 'Plan your India budget road trip with our destination finder. 7-day budget India itineraries, region-wise guides, and how to plan India road trip on budget under ₹15,000.',
  keywords: 'budget travel India itineraries, 7-day budget India itinerary, India budget road trip planner, how to plan India road trip on budget',
  alternates: { canonical: 'https://budgetyatra.online/guide' },
  openGraph: {
    title: 'India Budget Travel Itineraries & Road Trip Planner | BudgetYatra',
    description: 'Find destinations by budget and season. Plan 7-day India itineraries, road trips, and more with our interactive guide tool.',
    type: 'website',
  },
};

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  // Search/filter URLs (?q= or ?season=) — canonical points to base page
  if (params?.q || params?.season || params?.budget) {
    return {
      ...BASE_META,
      alternates: { canonical: 'https://budgetyatra.online/guide' },
      robots: { index: true, follow: true },
    };
  }
  return BASE_META;
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How to plan India road trip on budget?", "acceptedAnswer": { "@type": "Answer", "text": "Choose a route with good connectivity, rent a bike (₹500–₹800/day) or share a car, stay at budget guesthouses (₹400–₹800/night), and eat at dhabas. Total budget: ₹1,500–₹2,500/day per person." } },
    { "@type": "Question", "name": "What is the best 7-day budget India itinerary?", "acceptedAnswer": { "@type": "Answer", "text": "Top options: Golden Triangle Delhi–Agra–Jaipur (₹12,000–₹18,000), Kerala Backwaters Kochi–Alleppey–Munnar (₹10,000–₹15,000), or Himachal Delhi–Manali–Kasol (₹13,000–₹19,000). All include transport, accommodation, and food." } },
    { "@type": "Question", "name": "What is the per-day budget for India road trip?", "acceptedAnswer": { "@type": "Answer", "text": "Budget traveler: ₹1,200–₹1,800/day (bike + dhaba food + budget guesthouse). Mid-range: ₹2,500–₹4,000/day. Fuel costs ₹3–₹5/km for bikes and ₹6–₹10/km for cars." } }
  ]
};

export default function GuidePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Travel Guide', href: '/guide' }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>
      <Suspense fallback={<GuideLoading />}>
        <GuideContent />
      </Suspense>
    </>
  );
}

function GuideLoading() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            India Budget Road Trip Planner
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Search destinations based on your budget and preferred travel season
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 animate-pulse">
          <div className="space-y-6">
            <div className="h-12 bg-gray-200 rounded-lg"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-12 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-10 w-24 bg-gray-200 rounded-full"></div>
              ))}
            </div>
            <div className="h-14 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
