import Hero from '@/components/home/Hero';
import BlogCard from '@/components/cards/BlogCard';
import DestinationCard from '@/components/cards/DestinationCard';
import Newsletter from '@/components/forms/Newsletter';
import Icon from '@/components/shared/Icon';
import { getLatestBlogs } from '@/lib/data/blogs';
import { getFeaturedDestinations } from '@/lib/data/destinations';
import Link from 'next/link';

export const metadata = {
  title: 'Budget Travel in India — Complete Guide 2026 | BudgetYatra',
  description: 'Your #1 budget travel guide for India. Discover affordable destinations, budget travel tips, itineraries, and cost breakdowns for every Indian city. Travel smart, spend less.',
  keywords: ['budget travel in India', 'budget travel guide India', 'budget travel destinations India', 'India budget travel tips', 'affordable travel India'],
  alternates: { canonical: 'https://budgetyatra.online' },
};

const FAQ_ITEMS = [
  {
    q: 'What is budget travel in India?',
    a: 'Budget travel in India means exploring the country on ₹1,500–₹3,000 per person per day, covering a hostel or guesthouse, local meals, public transport, and sightseeing. India is one of the most affordable travel destinations in the world — you can eat a full thali for ₹80, stay in a clean hostel dorm for ₹400, and visit most monuments for under ₹100.',
  },
  {
    q: 'How to pick budget travel destinations in India?',
    a: 'Choose based on your daily budget: Under ₹2,000/day — Hampi, Varanasi, Rishikesh, Pushkar. ₹2,000–₹3,500/day — Goa, Jaipur, Manali, Coorg. ₹3,500+/day — Ladakh, Kerala backwaters, Andaman. Traveling in shoulder season (Oct–Nov, Feb–Mar) cuts costs by 30–50%.',
    link: '/destinations', linkText: 'See all destinations →',
  },
  {
    q: 'What are the best India budget travel tips for students?',
    a: 'Top tips: (1) Book train tickets 60 days ahead on IRCTC — sleeper class from ₹200. (2) Stay in hostels — dorms from ₹350/night. (3) Eat at dhabas and thali joints — meals from ₹60. (4) Use student discounts at monuments (50% off with ID). (5) Travel in groups to split costs. (6) Use RedBus for overnight buses — saves one night of accommodation.',
  },
  {
    q: 'How much does a 7-day budget India trip cost?',
    a: 'A 7-day budget India trip costs approximately ₹12,000–₹20,000 per person, including: travel (₹1,500–₹3,000), accommodation (₹3,500–₹6,000), food (₹2,500–₹4,000), sightseeing (₹1,000–₹2,500), and miscellaneous (₹1,000–₹2,000).',
    link: '/calculator', linkText: 'Calculate your trip cost →',
  },
  {
    q: 'Is India budget travel good for couples?',
    a: 'Yes — sharing a private room (₹600–₹1,200/night) is often cheaper per person than a hostel dorm. Romantic budget destinations include Goa (beach sunsets), Jaipur (heritage walks), Coorg (coffee estates), and Rishikesh (riverside cafes). A couple can travel comfortably for ₹2,500–₹4,000/day combined.',
    link: '/destinations', linkText: 'Explore romantic budget destinations →',
  },
];

const CATEGORIES = [
  { name: 'Beach', icon: '🏖️', color: 'from-blue-500 to-cyan-500', desc: 'Cheap coastal destinations India' },
  { name: 'Mountains', icon: '⛰️', color: 'from-green-500 to-emerald-500', desc: 'Cheap hill stations near Mumbai & Delhi' },
  { name: 'Heritage', icon: '🏛️', color: 'from-amber-500 to-orange-500', desc: 'Affordable heritage sites India' },
  { name: 'Adventure', icon: '🎒', color: 'from-red-500 to-pink-500', desc: 'Budget adventure travel India' },
];

const FEATURES = [
  { icon: '💰', title: 'Real Budget Breakdowns', description: 'Every guide includes exact costs for accommodation, food, transport, and activities — no guesswork.' },
  { icon: '🧮', title: 'Budget Travel Calculator', description: 'Use our interactive budget travel calculator India to plan trip costs for any destination in minutes.', link: '/calculator', linkText: 'Try Calculator' },
  { icon: '✅', title: 'Verified by Real Travelers', description: 'Every guide is based on actual trips. We update prices regularly so you always get accurate information.' },
  { icon: '🎯', title: 'For Every Type of Traveler', description: 'Budget travel India for students, couples, solo travelers, and families — we have guides for everyone.' },
];

const TESTIMONIALS = [
  { name: 'Priya Sharma', location: 'Mumbai', avatar: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=0ea5e9&color=fff&size=80', text: 'BudgetYatra helped me plan an amazing Goa trip for just ₹15,000! The budget calculator was spot-on.', trip: 'Goa Beach Trip' },
  { name: 'Rahul Verma', location: 'Delhi', avatar: 'https://ui-avatars.com/api/?name=Rahul+Verma&background=10b981&color=fff&size=80', text: 'The detailed guides and budget breakdowns made planning so easy. Visited Manali with my family and stayed within budget!', trip: 'Manali Family Trip' },
  { name: 'Anjali Mehta', location: 'Bangalore', avatar: 'https://ui-avatars.com/api/?name=Anjali+Mehta&background=f59e0b&color=fff&size=80', text: 'Love the search feature! Found hidden gems in Rajasthan that fit my budget perfectly.', trip: 'Rajasthan Heritage Tour' },
];

export default function Home() {
  const latestBlogs = getLatestBlogs(6);
  const featuredDestinations = getFeaturedDestinations(6);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Hero />

      {/* Popular Budget Travel Destinations */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-4">POPULAR DESTINATIONS</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Budget Travel Destinations in India</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Affordable places to visit in India — handpicked for every budget, from ₹1,500/day
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/destinations" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg">
              View All Budget Destinations
              <Icon id="arrow-right" className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Explore by Category */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-white text-primary-600 rounded-full text-sm font-semibold mb-4">EXPLORE BY CATEGORY</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">India Budget Travel Tips by Category</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you love beaches, mountains, heritage, or adventure — we have budget guides for every type
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {CATEGORIES.map((category) => (
              <Link key={category.name} href={`/blogs?category=${category.name}`}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="text-4xl md:text-5xl mb-3">{category.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-xs text-gray-500 hidden sm:block">{category.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Budget Travel Guides */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-4">LATEST GUIDES</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">India Budget Travel Blog — Fresh Guides</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              India budget travel tips for students, couples, solo travelers, and families — updated for 2026
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {latestBlogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} showBudget={false} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/blogs" className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full shadow-lg">
              Read All Budget Travel Guides
              <Icon id="arrow-right" className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Budget Calculator CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl md:text-6xl mb-6">🧮</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Plan Trip Budget India — Free Calculator</h2>
          <p className="text-base md:text-lg text-white mb-8 max-w-2xl mx-auto">
            Use our budget travel calculator India to get accurate per-day cost estimates for Goa, Manali, Jaipur, Kerala, and 50+ destinations
          </p>
          <Link href="/calculator" className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-white text-primary-600 font-bold rounded-full hover:bg-gray-100 shadow-2xl text-base md:text-lg">
            <Icon id="calculator" className="w-6 h-6 mr-3" />
            Try Budget Calculator — Free
          </Link>
        </div>
      </section>

      {/* Why BudgetYatra */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-4">WHY CHOOSE US</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">India's Most Trusted Budget Travel Guide</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">Helping 50,000+ travelers explore India on a budget since 2023</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {FEATURES.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl md:text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                {feature.link && (
                  <Link href={feature.link} className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm">
                    {feature.linkText}
                    <Icon id="chevron-right" className="w-4 h-4 ml-1" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Budget Travel in India — Common Questions</h2>
            <p className="text-gray-600">Everything you need to know before planning your trip</p>
          </div>
          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, i) => (
              <details key={i} className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 text-base sm:text-lg list-none">
                  {faq.q}
                  <Icon id="chevron-down" className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform shrink-0 ml-3" />
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-14">
            {[
              { number: '50K+', label: 'Happy Travelers', icon: '😊' },
              { number: '100+', label: 'Destinations Covered', icon: '📍' },
              { number: '500+', label: 'Travel Guides', icon: '📝' },
              { number: '4.8/5', label: 'User Rating', icon: '⭐' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-5xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <img src={t.avatar} alt={t.name} width={64} height={64} className="w-14 h-14 rounded-full" />
                  <div>
                    <div className="font-bold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-600">{t.location}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4" aria-label="5 stars">
                  {'★★★★★'.split('').map((s, j) => <span key={j} className="text-yellow-400">{s}</span>)}
                </div>
                <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">"{t.text}"</p>
                <div className="text-sm text-primary-600 font-semibold">✈️ {t.trip}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
