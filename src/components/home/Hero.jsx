import Link from 'next/link';
import HeroSearchLoader from './HeroSearchLoader';

// Server component — plain <img> so preload URL matches exactly (no /_next/image wrapper)
export default function Hero() {
  return (
    <section className="relative h-[520px] md:h-[650px] flex items-center justify-center overflow-hidden">
      {/* LCP Image — plain img tag, preload in layout.js matches this exact URL */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=828&h=600&fit=crop&q=55&fm=webp"
          srcSet="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=828&h=600&fit=crop&q=55&fm=webp 828w, https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=800&fit=crop&q=55&fm=webp 1200w"
          sizes="(max-width: 768px) 100vw, 1200px"
          alt="Beautiful India landscape"
          fetchPriority="high"
          decoding="async"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/35 to-black/65"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-5 border border-white/20">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
          </svg>
          Travel Smart, Spend Less
        </div>

        {/* H1 — server rendered, no delay */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight">
          Discover India on a Budget
        </h1>

        <p className="text-lg md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
          Explore breathtaking destinations across India without breaking the bank.
        </p>

        {/* Search — dynamically loaded after LCP, doesn't block render */}
        <HeroSearchLoader />

        {/* CTA Buttons — server rendered links, no JS needed */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/destinations"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Explore Destinations
          </Link>
          <Link
            href="/guide"
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary-600 transition-colors backdrop-blur-sm"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Plan Your Trip
          </Link>
        </div>

        {/* Quick Stats */}
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
