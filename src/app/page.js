import Hero from '@/components/home/Hero';
import BlogCard from '@/components/cards/BlogCard';
import DestinationCard from '@/components/cards/DestinationCard';
import Newsletter from '@/components/forms/Newsletter';
import { getLatestBlogs, getBlogsByCategory } from '@/lib/data/blogs';
import { getFeaturedDestinations } from '@/lib/data/destinations';
import Link from 'next/link';

export const metadata = {
  title: 'Budget Travel in India — Complete Guide 2026 | BudgetYatra',
  description: 'Your #1 budget travel guide for India. Discover affordable destinations, budget travel tips, itineraries, and cost breakdowns for every Indian city. Travel smart, spend less.',
  keywords: ['budget travel in India', 'budget travel guide India', 'budget travel destinations India', 'India budget travel tips', 'affordable travel India'],
  alternates: { canonical: 'https://budgetyatra.online' },
};

export default function Home() {
  const latestBlogs = getLatestBlogs(6);
  const featuredDestinations = getFeaturedDestinations(6);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is budget travel in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Budget travel in India means exploring the country on ₹1,500–₹3,000 per person per day, covering accommodation, food, local transport, and activities. India is one of the most affordable travel destinations in the world, with hostels from ₹400/night, meals from ₹80, and free or low-cost attractions across every state.',
        },
      },
      {
        '@type': 'Question',
        name: 'How to pick budget travel destinations in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Choose destinations based on your budget tier: under ₹2,000/day — Hampi, Varanasi, Rishikesh; ₹2,000–₹3,500/day — Goa, Jaipur, Manali; ₹3,500+/day — Ladakh, Kerala backwaters. Off-season travel (April–June, September–October) cuts costs by 30–50%. Browse our budget travel destinations in India for full breakdowns.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the best India budget travel tips?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Top India budget travel tips: (1) Book trains on IRCTC 60 days ahead for sleeper class. (2) Stay in hostels or dharamshalas — ₹300–₹700/night. (3) Eat at local dhabas and thali joints — full meals under ₹150. (4) Travel overnight by train to save on accommodation. (5) Visit free monuments and temples. (6) Use state buses instead of private taxis.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does a budget trip to India cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A budget trip to India costs ₹1,500–₹2,500 per person per day on a shoestring, or ₹2,500–₹4,000/day for a comfortable mid-range experience. A 7-day budget India trip costs approximately ₹12,000–₹20,000 including transport, accommodation, food, and sightseeing.',
        },
      },
    ],
  };

  return (
    <>
      <Hero />

      {/* Popular Budget Travel Destinations */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-50 text-primary-600 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              POPULAR DESTINATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight">
              Budget Travel Destinations in India
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Affordable places to visit in India — handpicked for every budget, from ₹1,500/day
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Link
              href="/destinations"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 !text-white hover:!text-white font-semibold rounded-full shadow-lg text-sm sm:text-base w-full sm:w-auto"
            >
              View All Budget Destinations
              <svg className="w-4 sm:w-5 h-4 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Explore by Category */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-primary-600 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              EXPLORE BY CATEGORY
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight">
              India Budget Travel Tips by Category
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Whether you love beaches, mountains, heritage, or adventure — we have budget guides for every type
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              { name: 'Beach', icon: '🏖️', color: 'from-blue-500 to-cyan-500', desc: 'Cheap coastal destinations India' },
              { name: 'Mountains', icon: '⛰️', color: 'from-green-500 to-emerald-500', desc: 'Cheap hill stations near Mumbai & Delhi' },
              { name: 'Heritage', icon: '🏛️', color: 'from-amber-500 to-orange-500', desc: 'Affordable heritage sites India' },
              { name: 'Adventure', icon: '🎒', color: 'from-red-500 to-pink-500', desc: 'Budget adventure travel India' },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/blogs?category=${category.name}`}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 md:mb-4">{category.icon}</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-xs text-gray-500 hidden sm:block">{category.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Budget Travel Guides */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-50 text-primary-600 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              LATEST GUIDES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight">
              India Budget Travel Blog — Fresh Guides
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              India budget travel tips for students, couples, solo travelers, and families — updated for 2026
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {latestBlogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} showBudget={false} />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Link
              href="/blogs"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto"
            >
              Read All Budget Travel Guides
              <svg className="w-4 sm:w-5 h-4 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Budget Calculator CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">🧮</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
            Plan Trip Budget India — Free Calculator
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Use our budget travel calculator India to get accurate per-day cost estimates for Goa, Manali, Jaipur, Kerala, and 50+ destinations
          </p>
          <Link
            href="/calculator"
            className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white text-primary-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-200 shadow-2xl text-sm sm:text-base md:text-lg w-full sm:w-auto"
          >
            <svg className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Try Budget Calculator — Free
          </Link>
        </div>
      </section>

      {/* Why BudgetYatra */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-50 text-primary-600 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight">
              India's Most Trusted Budget Travel Guide
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Helping 50,000+ travelers explore India on a budget since 2023
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { icon: '💰', title: 'Real Budget Breakdowns', description: 'Every guide includes exact costs for accommodation, food, transport, and activities — no guesswork.' },
              { icon: '🧮', title: 'Budget Travel Calculator', description: 'Use our interactive budget travel calculator India to plan trip costs for any destination in minutes.', link: '/calculator', linkText: 'Try Calculator' },
              { icon: '✅', title: 'Verified by Real Travelers', description: 'Every guide is based on actual trips. We update prices regularly so you always get accurate information.' },
              { icon: '🎯', title: 'For Every Type of Traveler', description: 'Budget travel India for students, couples, solo travelers, and families — we have guides for everyone.' }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">{feature.description}</p>
                {feature.link && (
                  <Link href={feature.link} className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm">
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

      {/* FAQ Section — AEO Optimized */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-50 text-primary-600 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Budget Travel in India — Common Questions
            </h2>
            <p className="text-gray-600">Everything you need to know before planning your trip</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What is budget travel in India?',
                a: 'Budget travel in India means exploring the country on ₹1,500–₹3,000 per person per day, covering a hostel or guesthouse, local meals, public transport, and sightseeing. India is one of the most affordable travel destinations in the world — you can eat a full thali for ₹80, stay in a clean hostel dorm for ₹400, and visit most monuments for under ₹100.',
              },
              {
                q: 'How to pick budget travel destinations in India?',
                a: 'Choose based on your daily budget: Under ₹2,000/day — Hampi, Varanasi, Rishikesh, Pushkar. ₹2,000–₹3,500/day — Goa, Jaipur, Manali, Coorg. ₹3,500+/day — Ladakh, Kerala backwaters, Andaman. Traveling in shoulder season (Oct–Nov, Feb–Mar) cuts costs by 30–50%. Browse our full list of budget travel destinations in India.',
                link: '/destinations',
                linkText: 'See all destinations →',
              },
              {
                q: 'What are the best India budget travel tips for students?',
                a: 'Top tips for student budget travel in India: (1) Book train tickets 60 days ahead on IRCTC — sleeper class from ₹200. (2) Stay in hostels — dorms from ₹350/night. (3) Eat at college canteens, dhabas, and thali joints — meals from ₹60. (4) Use student discounts at monuments (50% off with ID). (5) Travel in groups to split accommodation and taxi costs. (6) Use RedBus for overnight buses — saves one night of accommodation.',
              },
              {
                q: 'How much does a 7-day budget India trip cost?',
                a: 'A 7-day budget India trip costs approximately ₹12,000–₹20,000 per person, including: train/bus travel (₹1,500–₹3,000), accommodation (₹3,500–₹6,000), food (₹2,500–₹4,000), sightseeing (₹1,000–₹2,500), and miscellaneous (₹1,000–₹2,000). Use our budget travel calculator India for a personalized estimate.',
                link: '/calculator',
                linkText: 'Calculate your trip cost →',
              },
              {
                q: 'Is India budget travel good for couples?',
                a: 'Yes — India budget travel for couples is excellent value. Sharing a private room (₹600–₹1,200/night) is often cheaper per person than a hostel dorm. Romantic budget destinations include Goa (beach sunsets), Jaipur (heritage walks), Coorg (coffee estates), and Rishikesh (riverside cafes). A couple can travel comfortably for ₹2,500–₹4,000/day combined.',
                link: '/destinations',
                linkText: 'Explore romantic budget destinations →',
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 text-base sm:text-lg list-none">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-gray-700 leading-relaxed text-sm sm:text-base border-t border-gray-200 pt-4">
                  <p>{faq.a}</p>
                  {faq.link && (
                    <Link href={faq.link} className="inline-flex items-center mt-3 text-primary-600 hover:text-primary-700 font-semibold text-sm">
                      {faq.linkText}
                    </Link>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Social Proof */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
            {[
              { number: '50K+', label: 'Happy Travelers', icon: '😊' },
              { number: '100+', label: 'Destinations Covered', icon: '📍' },
              { number: '500+', label: 'Travel Guides', icon: '📝' },
              { number: '4.8/5', label: 'User Rating', icon: '⭐' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { name: 'Priya Sharma', location: 'Mumbai', avatar: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=0ea5e9&color=fff&size=80', rating: 5, text: 'BudgetYatra helped me plan an amazing Goa trip for just ₹15,000! The budget calculator was spot-on and saved me from overspending.', trip: 'Goa Beach Trip' },
              { name: 'Rahul Verma', location: 'Delhi', avatar: 'https://ui-avatars.com/api/?name=Rahul+Verma&background=10b981&color=fff&size=80', rating: 5, text: 'The detailed guides and budget breakdowns made planning so easy. Visited Manali with my family and stayed within budget!', trip: 'Manali Family Trip' },
              { name: 'Anjali Mehta', location: 'Bangalore', avatar: 'https://ui-avatars.com/api/?name=Anjali+Mehta&background=f59e0b&color=fff&size=80', rating: 5, text: 'Love the search feature! Found hidden gems in Rajasthan that fit my budget perfectly. Highly recommend BudgetYatra!', trip: 'Rajasthan Heritage Tour' }
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <img src={t.avatar} alt={t.name} className="w-12 sm:w-16 h-12 sm:h-16 rounded-full" />
                  <div className="min-w-0">
                    <div className="font-bold text-gray-900 text-sm sm:text-base truncate">{t.name}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{t.location}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-3 sm:mb-4 italic text-xs sm:text-sm leading-relaxed">"{t.text}"</p>
                <div className="text-xs sm:text-sm text-primary-600 font-semibold">✈️ {t.trip}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
