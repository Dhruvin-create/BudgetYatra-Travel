import Link from 'next/link';
import HeroSearchLoader from './HeroSearchLoader';
import Icon from '@/components/shared/Icon';
import { getAllDestinations } from '@/lib/data/destinations';
import { getAllBlogs } from '@/lib/data/blogs';

export default function Hero() {
  const destinations = getAllDestinations().map(d => ({
    slug: d.slug, name: d.name, state: d.state, category: d.category,
    attractions: d.attractions,
  }));
  const blogs = getAllBlogs().map(b => ({
    slug: b.slug, title: b.title, category: b.category, tags: b.tags,
  }));

  return (
    <section className="relative h-[520px] md:h-[650px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=828&h=600&fit=crop&q=40&fm=webp"
          srcSet="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=640&h=460&fit=crop&q=40&fm=webp 640w, https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=828&h=600&fit=crop&q=35&fm=webp 828w, https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1080&h=720&fit=crop&q=30&fm=webp 1080w"
          sizes="(max-width: 640px) 640px, (max-width: 828px) 828px, 1080px"
          alt="Beautiful India landscape"
          fetchPriority="high"
          decoding="sync"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/35 to-black/65"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-5 border border-white/20">
          <Icon id="badge" className="w-4 h-4 mr-2" />
          Travel Smart, Spend Less
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight">
          Discover India on a Budget
        </h1>

        <p className="text-lg md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
          Explore breathtaking destinations across India without breaking the bank.
        </p>

        <HeroSearchLoader destinations={destinations} blogs={blogs} />

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/destinations" className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-xl">
            <Icon id="map-pin" className="w-5 h-5 mr-2" />
            Explore Destinations
          </Link>
          <Link href="/guide" className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary-600 transition-colors backdrop-blur-sm">
            <Icon id="guide" className="w-5 h-5 mr-2" />
            Plan Your Trip
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
            <div className="text-white text-sm">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">100+</div>
            <div className="text-white text-sm">Travel Guides</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">₹2K+</div>
            <div className="text-white text-sm">Budget Trips</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <Icon id="chevron-down" className="w-6 h-6 text-white" />
      </div>
    </section>
  );
}
