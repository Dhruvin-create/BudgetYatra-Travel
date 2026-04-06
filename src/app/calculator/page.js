import BudgetCalculator from '@/components/calculator/BudgetCalculator';

export const metadata = {
  title: 'Budget Calculator India — Plan Your Trip Cost | BudgetYatra',
  description: 'Use our free budget travel calculator India to estimate your trip cost. Plan trip budget India with per-day breakdowns for accommodation, food, transport & activities.',
  keywords: 'budget travel calculator India, plan trip budget India, India budget travel tips, what to pack for India budget trip',
  alternates: { canonical: 'https://budgetyatra.online/calculator' },
  openGraph: {
    title: 'Budget Calculator India — Plan Your Trip Cost | BudgetYatra',
    description: 'Calculate your India trip budget in 3 steps. Get per-day cost estimates for any destination with our free travel budget planner.',
    type: 'website',
  },
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 text-white py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            SMART TRAVEL PLANNING
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Budget Travel Calculator India
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed">
            Plan trip budget India in just 3 steps — get accurate per-day cost estimates for any destination
          </p>
        </div>
      </div>

      {/* Main Calculator - Elevated Card */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 pb-20">
        <BudgetCalculator />
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Use Our Calculator?</h2>
            <p className="text-lg text-gray-600">Everything you need for smarter travel planning</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-4xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accurate Estimates</h3>
              <p className="text-gray-600 leading-relaxed">Based on real travel data, current market prices, and verified traveler experiences</p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick & Easy</h3>
              <p className="text-gray-600 leading-relaxed">Get your complete budget breakdown in just 3 simple steps with no complicated forms</p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Save Money</h3>
              <p className="text-gray-600 leading-relaxed">Get personalized money-saving tips and discover budget-friendly options</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Three simple steps to your perfect budget</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full font-bold text-2xl mb-6 shadow-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Destination</h3>
              <p className="text-gray-600 leading-relaxed">Select your destination and specify your trip duration and number of travelers</p>
              
              {/* Connector line */}
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary-300 to-transparent"></div>
            </div>

            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary-600 to-secondary-700 text-white rounded-full font-bold text-2xl mb-6 shadow-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Set Preferences</h3>
              <p className="text-gray-600 leading-relaxed">Choose your accommodation style, food preferences, transport mode, and activities</p>
              
              {/* Connector line */}
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-secondary-300 to-transparent"></div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-full font-bold text-2xl mb-6 shadow-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Your Budget</h3>
              <p className="text-gray-600 leading-relaxed">Receive detailed breakdown with money-saving tips and recommendations</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Plan Trip Budget India — FAQ</h2>
            <p className="text-lg text-gray-600">Common questions about budget travel planning in India</p>
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  { "@type": "Question", "name": "How to plan trip budget India?", "acceptedAnswer": { "@type": "Answer", "text": "Choose your destination, estimate per-day costs (accommodation ₹800–₹1,500, food ₹300–₹600, transport ₹200–₹500), add activities and a 10–15% buffer. Use our Budget Travel Calculator India above for an instant estimate." } },
                  { "@type": "Question", "name": "What is the minimum budget for a trip in India?", "acceptedAnswer": { "@type": "Answer", "text": "A minimum budget trip in India costs ₹800–₹1,200 per day per person — covering a dorm bed or budget guesthouse, local meals, and basic transport. Varanasi, Hampi, and Rishikesh are among the cheapest destinations." } },
                  { "@type": "Question", "name": "What to pack for India budget trip?", "acceptedAnswer": { "@type": "Answer", "text": "Pack lightweight clothes, a reusable water bottle, basic first-aid kit, power bank, universal adapter, and a rain jacket for June–September travel. Laundry services are cheap (₹50–₹100/kg) so avoid overpacking." } },
                  { "@type": "Question", "name": "Which is the cheapest destination in India for budget travel?", "acceptedAnswer": { "@type": "Answer", "text": "Cheapest destinations: Hampi (₹700–₹1,000/day), Varanasi (₹800–₹1,200/day), Rishikesh (₹900–₹1,400/day), Pushkar (₹700–₹1,100/day). Gokarna is cheaper than Goa at ₹1,000–₹1,500/day." } },
                  { "@type": "Question", "name": "How many days is enough for a budget India trip?", "acceptedAnswer": { "@type": "Answer", "text": "7 days is ideal for one region (e.g., Golden Triangle or Kerala). For multi-region trips, plan 14–21 days. Budget ₹15,000–₹25,000 for a 7-day trip including intercity travel." } },
                  { "@type": "Question", "name": "What are India budget travel tips to save money?", "acceptedAnswer": { "@type": "Answer", "text": "Travel by sleeper-class trains, eat at local dhabas (₹60–₹120/meal), book hostels (save 50–70% vs hotels), travel in shoulder season (March–April, September–October), and use our budget calculator to plan ahead." } }
                ]
              })
            }}
          />

          <div className="space-y-4">
            {[
              {
                q: "How to plan trip budget India?",
                a: "Choose your destination, estimate per-day costs — accommodation ₹800–₹1,500, food ₹300–₹600, local transport ₹200–₹500 — then add activities and a 10–15% buffer. Use our Budget Travel Calculator India above to get an instant breakdown."
              },
              {
                q: "What is the minimum budget for a trip in India?",
                a: "A minimum budget trip in India costs around ₹800–₹1,200 per day per person. This covers a dorm bed or budget guesthouse (₹300–₹600), local meals (₹200–₹400), and basic transport. Destinations like Varanasi, Hampi, and Rishikesh are among the cheapest in India."
              },
              {
                q: "What to pack for India budget trip?",
                a: "Pack lightweight clothes (cotton for summer, layers for mountains), a reusable water bottle, basic first-aid kit, power bank, universal adapter, and a rain jacket for June–September travel. Laundry services are cheap (₹50–₹100/kg) across India, so avoid overpacking."
              },
              {
                q: "Which is the cheapest destination in India for budget travel?",
                a: "Cheapest destinations: Hampi (₹700–₹1,000/day), Varanasi (₹800–₹1,200/day), Rishikesh (₹900–₹1,400/day), and Pushkar (₹700–₹1,100/day). Beach-wise, Gokarna is cheaper than Goa at ₹1,000–₹1,500/day. See our destinations page for full breakdowns."
              },
              {
                q: "How many days is enough for a budget India trip?",
                a: "A 7-day budget India itinerary works well for one region — e.g., Delhi–Agra–Jaipur (Golden Triangle) or Kerala backwaters. For multi-region trips covering North + South India, plan 14–21 days. Budget roughly ₹15,000–₹25,000 for 7 days including intercity travel."
              },
              {
                q: "Is India budget travel safe for solo travelers?",
                a: "Yes, India is generally safe for budget solo travelers. Stick to well-reviewed hostels, use app-based cabs (Ola/Uber) in cities, and keep digital copies of your documents. Rishikesh, Goa, and Manali have large solo traveler communities with good infrastructure."
              },
              {
                q: "What are India budget travel tips to save money?",
                a: "Top tips: (1) Travel by sleeper-class trains — cheapest long-distance option. (2) Eat at local dhabas — full meal for ₹60–₹120. (3) Book hostels instead of hotels — save 50–70%. (4) Travel in shoulder season (March–April, September–October) for lower prices. (5) Use our budget calculator to plan ahead."
              }
            ].map((item, i) => (
              <details key={i} className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-100 transition-colors list-none">
                  <span>{item.q}</span>
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0 ml-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-gray-200 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
