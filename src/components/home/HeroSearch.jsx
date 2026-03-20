'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { getAllDestinations } from '@/lib/data/destinations';
import { getAllBlogs } from '@/lib/data/blogs';

export default function HeroSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const router = useRouter();
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    const query = searchQuery.toLowerCase();
    const destinations = getAllDestinations();
    const blogs = getAllBlogs();

    const destMatches = destinations
      .filter(d =>
        d.name.toLowerCase().includes(query) ||
        d.state.toLowerCase().includes(query) ||
        d.category.toLowerCase().includes(query) ||
        d.attractions.some(a => a.toLowerCase().includes(query))
      )
      .slice(0, 3)
      .map(d => ({ type: 'destination', title: d.name, subtitle: d.state, slug: d.slug, icon: '📍' }));

    const blogMatches = blogs
      .filter(b =>
        b.title.toLowerCase().includes(query) ||
        b.category.toLowerCase().includes(query) ||
        b.tags.some(t => t.toLowerCase().includes(query))
      )
      .slice(0, 3)
      .map(b => ({ type: 'blog', title: b.title, subtitle: b.category, slug: b.slug, icon: '📝' }));

    const popularTerms = [
      { term: 'Goa', icon: '🏖️' }, { term: 'Manali', icon: '⛰️' },
      { term: 'Backpacking', icon: '🎒' }, { term: 'Beach', icon: '🌊' },
      { term: 'Mountains', icon: '🏔️' }, { term: 'Heritage', icon: '🏛️' },
    ].filter(i => i.term.toLowerCase().includes(query))
     .slice(0, 2)
     .map(i => ({ type: 'term', title: i.term, subtitle: 'Search for', icon: i.icon }));

    const all = [...destMatches, ...blogMatches, ...popularTerms].slice(0, 6);
    setSuggestions(all);
    setShowSuggestions(all.length > 0);
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/guide?q=${encodeURIComponent(searchQuery)}`);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (s) => {
    if (s.type === 'destination') router.push(`/destinations/${s.slug}`);
    else if (s.type === 'blog') router.push(`/blogs/${s.slug}`);
    else { setSearchQuery(s.title); router.push(`/guide?q=${encodeURIComponent(s.title)}`); }
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions || !suggestions.length) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelectedIndex(p => p < suggestions.length - 1 ? p + 1 : p); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSelectedIndex(p => p > 0 ? p - 1 : -1); }
    else if (e.key === 'Enter' && selectedIndex >= 0) { e.preventDefault(); handleSuggestionClick(suggestions[selectedIndex]); }
    else if (e.key === 'Escape') setShowSuggestions(false);
  };

  return (
    <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
      <div className="relative" ref={searchRef}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => searchQuery.length >= 2 && suggestions.length > 0 && setShowSuggestions(true)}
          placeholder="Search destinations, beaches, mountains..."
          className="w-full px-6 py-4 pr-28 rounded-full bg-white/10 backdrop-blur-md border-2 border-white text-white placeholder-white/90 text-base focus:outline-none focus:ring-4 focus:ring-white/30 focus:bg-white/20 shadow-2xl"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-colors text-sm"
        >
          Search
        </button>
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-100">
            {suggestions.map((s, i) => (
              <button
                key={`${s.type}-${s.slug || s.title}-${i}`}
                type="button"
                onClick={() => handleSuggestionClick(s)}
                className={`w-full px-5 py-3 flex items-center gap-3 hover:bg-primary-50 transition-colors text-left ${i === selectedIndex ? 'bg-primary-50' : ''}`}
              >
                <span className="text-xl">{s.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-gray-900 font-semibold text-sm truncate">{s.title}</div>
                  <div className="text-xs text-gray-500">{s.subtitle}</div>
                </div>
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        )}
      </div>
    </form>
  );
}
