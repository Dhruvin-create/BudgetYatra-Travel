import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Discover India on a Budget
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
          Explore amazing destinations, read travel guides, and plan your perfect budget-friendly adventure across India
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/destinations"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Explore Destinations
          </Link>
          <Link
            href="/guide"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200"
          >
            Find Your Budget Guide
          </Link>
        </div>
      </div>
    </section>
  );
}
