import DestinationCard from '@/components/cards/DestinationCard';
import { getAllDestinations } from '@/lib/data/destinations';

export const metadata = {
  title: 'Destinations - BudgetYatra',
  description: 'Explore budget-friendly travel destinations across India',
};

export default function DestinationsPage() {
  const destinations = getAllDestinations();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Destinations
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing budget-friendly destinations across India
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>
      </div>
    </div>
  );
}
