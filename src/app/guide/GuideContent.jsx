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
            Find Your Perfect Destination
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Search destinations based on your budget and preferred travel season
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
      </div>
    </div>
  );
}
