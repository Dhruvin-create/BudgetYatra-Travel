'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import DestinationCard from '@/components/cards/DestinationCard';
import { searchDestinations } from '@/lib/data/destinations';
import { SEASONS, BUDGET_RANGES } from '@/lib/constants/config';

export default function GuideContent() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');
  const [budgetRange, setBudgetRange] = useState({ min: 0, max: 100000 });
  const [selectedSeasons, setSelectedSeasons] = useState([]);
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  // Auto-search when URL has query parameter
  useEffect(() => {
    const urlQuery = searchParams.get('q');
    if (urlQuery) {
      setQuery(urlQuery);
      // Trigger search automatically
      setTimeout(() => {
        const filters = {
          budgetMin: 0,
          budgetMax: 100000,
        };
        const searchResults = searchDestinations(urlQuery, filters);
        setResults(searchResults);
        setHasSearched(true);
      }, 100);
    }
  }, [searchParams]);

  const handleSearch = () => {
    const filters = {
      budgetMin: budgetRange.min,
      budgetMax: budgetRange.max,
    };

    if (selectedSeasons.length > 0) {
      filters.season = selectedSeasons[0];
    }

    const searchResults = searchDestinations(query, filters);
    setResults(searchResults);
    setHasSearched(true);
  };

  const toggleSeason = (season) => {
    setSelectedSeasons(prev =>
      prev.includes(season)
        ? prev.filter(s => s !== season)
        : [season]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            India Budget Road Trip Planner
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Plan your 7-day budget India itinerary — search destinations by budget and season, and get a personalized travel plan
          </p>
        </div>

        {/* Search Interface */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          {/* Keyword Search */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Search Destination
            </label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter destination name, state, or attraction..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* Budget Range */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Budget Range (per day)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {BUDGET_RANGES.map((range) => (
                <button
                  key={range.label}
                  onClick={() => setBudgetRange({ min: range.min, max: range.max })}
                  className={`px-4 py-3 rounded-lg border-2 font-medium transition-all ${
                    budgetRange.min === range.min && budgetRange.max === range.max
                      ? 'border-primary-600 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>

          {/* Season Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Preferred Season
            </label>
            <div className="flex flex-wrap gap-3">
              {SEASONS.map((season) => (
                <button
                  key={season}
                  onClick={() => toggleSeason(season)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedSeasons.includes(season)
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {season}
                </button>
              ))}
            </div>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-lg transition-colors"
          >
            Search Destinations
          </button>
        </div>

        {/* Results */}
        {hasSearched && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {results.length} {results.length === 1 ? 'Destination' : 'Destinations'} Found
              </h2>
            </div>

            {results.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {results.map((destination) => (
                  <DestinationCard key={destination.slug} destination={destination} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No destinations found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria</p>
                <button
                  onClick={() => {
                    setQuery('');
                    setBudgetRange({ min: 0, max: 100000 });
                    setSelectedSeasons([]);
                    setHasSearched(false);
                  }}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Budget Travel India Itineraries — FAQ</h2>
            <p className="text-gray-600">Everything you need to know about planning a budget road trip in India</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "How to plan India road trip on budget?",
                a: "Plan your India road trip on budget by: (1) Choosing a route with good road connectivity — NH44 (Manali–Leh), NH66 (coastal Karnataka–Kerala), or the Golden Quadrilateral. (2) Renting a bike (₹500–₹800/day) or sharing a car with co-travelers. (3) Staying at dhabas and budget guesthouses (₹400–₹800/night). (4) Carrying a tent for remote stretches like Spiti or Ladakh. Total road trip budget: ₹1,500–₹2,500/day per person."
              },
              {
                q: "What is the best 7-day budget India itinerary?",
                a: "Top 7-day budget India itineraries: (1) Golden Triangle — Delhi → Agra → Jaipur → Delhi (₹12,000–₹18,000 total). (2) Kerala Backwaters — Kochi → Alleppey → Munnar → Kochi (₹10,000–₹15,000). (3) Rajasthan Heritage — Jaipur → Jodhpur → Jaisalmer (₹14,000–₹20,000). (4) Himachal Mountains — Delhi → Manali → Kasol → Delhi (₹13,000–₹19,000). All estimates include transport, accommodation, and food."
              },
              {
                q: "Which regions are best for India budget road trip planner?",
                a: "Best regions for India budget road trips: (1) Himachal Pradesh — Manali–Spiti–Kinnaur circuit (May–October). (2) Rajasthan — Jaipur–Jodhpur–Jaisalmer (October–March). (3) Kerala — coastal NH66 route (November–February). (4) Northeast India — Meghalaya–Assam circuit (October–April). Budget: ₹1,500–₹2,500/day including fuel, food, and accommodation."
              },
              {
                q: "How many days for a complete India budget travel itinerary?",
                a: "For a complete India budget travel itinerary covering major regions: North India (7–10 days), South India (7–10 days), Rajasthan (5–7 days), Northeast (7–10 days). A full India circuit takes 30–45 days. Budget travelers typically spend ₹1,000–₹1,800/day on average across all regions."
              },
              {
                q: "What is the best season for budget travel India itineraries?",
                a: "Best seasons for budget travel India: (1) October–March — ideal for Rajasthan, South India, and coastal destinations. Prices are higher in peak season (December–January). (2) April–June — best for Himachal Pradesh and Ladakh; lower prices before peak summer. (3) July–September — monsoon season; cheapest prices but limited access to mountain roads. Shoulder season (March–April, September–October) offers the best balance of weather and budget."
              },
              {
                q: "How to plan India road trip on budget for first-timers?",
                a: "First-timer India road trip tips: (1) Start with a well-connected route like Delhi–Agra–Jaipur or Bangalore–Mysore–Coorg. (2) Book accommodation in advance for peak season. (3) Use Google Maps offline for remote areas. (4) Carry cash — many toll booths and small towns don't accept cards. (5) Join travel groups on Facebook/Reddit to find co-travelers and split costs. Use our destination guide above to find routes matching your budget."
              },
              {
                q: "What is the per-day budget for India road trip?",
                a: "Per-day budget for India road trip: Budget traveler ₹1,200–₹1,800 (bike rental/shared car + dhaba food + budget guesthouse). Mid-range ₹2,500–₹4,000 (own car + restaurant meals + decent hotel). Luxury ₹6,000+ (resort stays + fine dining). Fuel costs average ₹3–₹5/km for bikes and ₹6–₹10/km for cars depending on the vehicle."
              }
            ].map((item, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none">
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
