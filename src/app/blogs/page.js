import { Suspense } from 'react';
import BlogsContent from './BlogsContent';

export default function BlogsPage() {
  return (
    <Suspense fallback={<BlogsLoading />}>
      <BlogsContent />
    </Suspense>
  );
}

function BlogsLoading() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Travel Blogs & Guides
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover budget-friendly travel tips, destination guides, and adventure stories from across India
          </p>
        </div>
        <div className="animate-pulse space-y-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-12 w-32 bg-gray-200 rounded-full"></div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-96 bg-gray-200 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
