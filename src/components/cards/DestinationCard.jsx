import Link from 'next/link';
import Image from 'next/image';

export default function DestinationCard({ destination }) {
  return (
    <Link href={`/destinations/${destination.slug}`} className="group">
      <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={destination.images[0].url}
            alt={destination.images[0].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            quality={45}
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 33vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-bold text-white mb-1">
              {destination.name}
            </h3>
            <p className="text-white/90 text-sm">{destination.state}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <p className="text-gray-600 mb-4 line-clamp-2 flex-1">
            {destination.description}
          </p>

          {/* Budget & Seasons */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Budget per day:</span>
              <span className="font-semibold text-accent-600">
                ₹{destination.budgetRange.min.toLocaleString()} - ₹{destination.budgetRange.max.toLocaleString()}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {destination.bestSeasons.map((season) => (
                <span
                  key={season}
                  className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full"
                >
                  {season}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
