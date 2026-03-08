'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { getAllDestinations } from '@/lib/data/destinations';
import { getAllBlogs } from '@/lib/data/blogs';

export default function SearchBar({ variant = 'default' }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const router = useRouter();
  const searchRef = useRef(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Generate suggestions based on search query
  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const query = searchQuery.toLowerCase();
    const destinations = getAllDestinations();
    const blogs = getAllBlogs();

    // Search in destinations
    const destinationMatches = destinations
      .filter(dest => 
        dest.name.toLowerCase().includes(query) ||
        dest.state.toLowerCase().includes(query) ||
        dest.category.toLowerCase().includes(query) ||
        dest.attractions.some(attr => attr.toLowerCase().includes(query))
      )
      .slice(0, 3)
      .map(dest => ({
        type: 'destination',
        title: dest.name,
        subtitle: dest.state,
        slug: dest.slug,
        icon: '📍'
      }));

    // Search in blogs
    const blogMatches = blogs
      .filter(blog => 
        blog.title.toLowerCase().includes(query) ||
        blog.category.toLowerCase().includes(query) ||
        blog.tags.some(tag => tag.toLowerCase().includes(query))
      )
      .slice(0, 3)
      .map(blog => ({
        type: 'blog',
        title: blog.title,
        subtitle: blog.category,
        slug: blog.slug,
        icon: '📝'
      }));

    // Popular search terms
    const popularTerms = [
      { term: 'Goa', icon: '🏖️' },
      { term: 'Manali', icon: '⛰️' },
      { term: 'Backpacking', icon: '🎒' },
      { term: 'Cheap hotels', icon: '🏨' },
      { term: 'Beach', icon: '🌊' },
      { term: 'Mountains', icon: '🏔️' },
      { term: 'Heritage', icon: '🏛️' },
      { term: 'Adventure', icon: '🧗' }
    ].filter(item => item.term.toLowerCase().includes(query))
     .slice(0, 2)
     .map(item => ({
       type: 'term',
       title: item.term,
       subtitle: 'Search for',
       icon: item.icon
     }));

    const allSuggestions = [...destinationMatches, ...blogMatches, ...popularTerms];
    setSuggestions(allSuggestions.slice(0, 6));
    setShowSuggestions(allSuggestions.length > 0);
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/guide?q=${encodeURIComponent(searchQuery)}`);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    if (suggestion.type === 'destination') {
      router.push(`/destinations/${suggestion.slug}`);
    } else if (suggestion.type === 'blog') {
      router.push(`/blogs/${suggestion.slug}`);
    } else if (suggestion.type === 'term') {
      setSearchQuery(suggestion.title);
      router.push(`/guide?q=${encodeURIComponent(suggestion.title)}`);
    }
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      handleSuggestionClick(suggestions[selectedIndex]);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const inputClasses = variant === 'navbar' 
    ? 'w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm'
    : 'w-full px-6 py-5 pr-32 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/30 shadow-2xl';

  const buttonClasses = variant === 'navbar'
    ? 'absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-500 hover:text-primary-600 transition-colors'
    : 'absolute right-2 top-1/2 -translate-y-1/2 px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-colors';

  return (
    <form onSubmit={handleSearch} className="relative w-full">
      <div className="relative" ref={searchRef}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => searchQuery.length >= 2 && suggestions.length > 0 && setShowSuggestions(true)}
          placeholder={variant === 'navbar' ? 'Search...' : 'Search destinations, beaches, mountains, heritage sites...'}
          className={inputClasses}
        />
        <button type="submit" className={buttonClasses}>
          {variant === 'navbar' ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          ) : (
            'Search'
          )}
        </button>

        {/* Autocomplete Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-100">
            {suggestions.map((suggestion, index) => (
              <button
                key={`${suggestion.type}-${suggestion.slug || suggestion.title}-${index}`}
                type="button"
                onClick={() => handleSuggestionClick(suggestion)}
                className={`w-full px-6 py-4 flex items-center gap-4 hover:bg-primary-50 transition-colors text-left ${
                  index === selectedIndex ? 'bg-primary-50' : ''
                }`}
              >
                <span className="text-2xl">{suggestion.icon}</span>
                <div className="flex-1">
                  <div className="text-gray-900 font-semibold">{suggestion.title}</div>
                  <div className="text-sm text-gray-500">{suggestion.subtitle}</div>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
