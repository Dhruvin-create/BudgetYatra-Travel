import Hero from '@/components/home/Hero';
import BlogCard from '@/components/cards/BlogCard';
import DestinationCard from '@/components/cards/DestinationCard';
import Newsletter from '@/components/forms/Newsletter';
import { getLatestBlogs, getBlogsByCategory } from '@/lib/data/blogs';
import { getFeaturedDestinations } from '@/lib/data/destinations';
import Link from 'next/link';

export default function Home() {
  const latestBlogs = getLatestBlogs(6);
  const featuredDestinations = getFeaturedDestinations(6);
  const adventureBlogs = getBlogsByCategory('Adventure').slice(0, 3);
  const heritageBlogs = getBlogsByCategory('Heritage').slice(0, 3);

  return (
    <>
      <Hero />

      {/* Popular Destinations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-4">
              POPULAR DESTINATIONS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore Budget-Friendly Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover India's most beautiful places without breaking the bank
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/destinations"
              className="inline-flex items-center px-8 py-4 bg-blue-600 !text-white hover:!text-white font-semibold rounded-full shadow-lg"
            >
              View All Destinations
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Explore by Category */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white text-primary-600 rounded-full text-sm font-semibold mb-4">
              EXPLORE BY CATEGORY
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find Your Perfect Adventure
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Beach', icon: '🏖️', color: 'from-blue-500 to-cyan-500' },
              { name: 'Mountains', icon: '⛰️', color: 'from-green-500 to-emerald-500' },
              { name: 'Heritage', icon: '🏛️', color: 'from-amber-500 to-orange-500' },
              { name: 'Adventure', icon: '🎒', color: 'from-red-500 to-pink-500' },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/blogs?category=${category.name}`}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Travel Guides */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-4">
              LATEST GUIDES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Fresh Travel Stories & Tips
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get inspired by our latest budget travel guides and insider tips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestBlogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} showBudget={false} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blogs"
              className="inline-flex items-center px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full transition-colors shadow-lg hover:shadow-xl"
            >
              Read All Guides
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Budget Trip Planner CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🧮</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Calculate Your Trip Budget
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Use our smart budget calculator to get accurate cost estimates for your dream destination
          </p>
          <Link
            href="/calculator"
            className="inline-flex items-center px-10 py-5 bg-white text-primary-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105 text-lg"
          >
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Try Budget Calculator
          </Link>
        </div>
      </section>

      {/* Why BudgetYatra */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Travel with BudgetYatra?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '💰',
                title: 'Budget-Friendly',
                description: 'Discover amazing destinations without breaking the bank. All our guides focus on affordable travel options.'
              },
              {
                icon: '🧮',
                title: 'Smart Calculator',
                description: 'Use our interactive budget calculator to get accurate trip cost estimates based on your preferences.',
                link: '/calculator',
                linkText: 'Try Calculator'
              },
              {
                icon: '✅',
                title: 'Verified Information',
                description: 'Real experiences from real travelers. Every guide is based on actual trips and updated regularly.'
              },
              {
                icon: '🎯',
                title: 'Personalized Planning',
                description: 'Filter by budget, season, and interests to find destinations perfect for your travel style.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                {feature.link && (
                  <Link href={feature.link} className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold">
                    {feature.linkText}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: '50K+', label: 'Happy Travelers', icon: '😊' },
              { number: '100+', label: 'Destinations Covered', icon: '📍' },
              { number: '500+', label: 'Travel Guides', icon: '📝' },
              { number: '4.8/5', label: 'User Rating', icon: '⭐' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-4">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Travelers Say About Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from real travelers who explored India on a budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                location: 'Mumbai',
                avatar: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=0ea5e9&color=fff&size=80',
                rating: 5,
                text: 'BudgetYatra helped me plan an amazing Goa trip for just ₹15,000! The budget calculator was spot-on and saved me from overspending.',
                trip: 'Goa Beach Trip'
              },
              {
                name: 'Rahul Verma',
                location: 'Delhi',
                avatar: 'https://ui-avatars.com/api/?name=Rahul+Verma&background=10b981&color=fff&size=80',
                rating: 5,
                text: 'The detailed guides and budget breakdowns made planning so easy. Visited Manali with my family and stayed within budget!',
                trip: 'Manali Family Trip'
              },
              {
                name: 'Anjali Mehta',
                location: 'Bangalore',
                avatar: 'https://ui-avatars.com/api/?name=Anjali+Mehta&background=f59e0b&color=fff&size=80',
                rating: 5,
                text: 'Love the search feature! Found hidden gems in Rajasthan that fit my budget perfectly. Highly recommend BudgetYatra!',
                trip: 'Rajasthan Heritage Tour'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="text-sm text-primary-600 font-semibold">✈️ {testimonial.trip}</div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: '🔒', text: 'Secure & Safe' },
                { icon: '✓', text: 'Verified Reviews' },
                { icon: '📱', text: 'Mobile Friendly' },
                { icon: '🌟', text: 'Award Winning' }
              ].map((badge, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-3">{badge.icon}</div>
                  <div className="font-semibold text-gray-900">{badge.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>
    </>
  );
}
