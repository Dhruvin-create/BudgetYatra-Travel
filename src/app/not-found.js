import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            href="/destinations"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors"
          >
            Explore Destinations
          </Link>
        </div>
      </div>
    </div>
  );
}
