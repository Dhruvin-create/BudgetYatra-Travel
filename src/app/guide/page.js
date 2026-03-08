import { Suspense } from 'react';
import GuideContent from './GuideContent';

export default function GuidePage() {
  return (
    <Suspense fallback={<GuideLoading />}>
      <GuideContent />
    </Suspense>
  );
}

function GuideLoading() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Your Perfect Destination
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
