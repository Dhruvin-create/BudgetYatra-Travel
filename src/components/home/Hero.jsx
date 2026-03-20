'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { getAllDestinations } from '@/lib/data/destinations';
import { getAllBlogs } from '@/lib/data/blogs';

export default function Hero() {
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

  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=675&fit=crop"
          alt="Beautiful India landscape"
          fill
          className="object-cover"
          priority
          quality={45}
          sizes="(max-width: 768px) 100vw, 1200px"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/20">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
          </svg>
          Travel Smart, Spend Less
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Discover India on a Budget
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Explore breathtaking destinations across India without breaking the bank. Your adventure starts here.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
          <div className="relative" ref={searchRef}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => searchQuery.length >= 2 && suggestions.length > 0 && setShowSuggestions(true)}
              placeholder="Search destinations, beaches, mountains, heritage sites..."
              className="w-full px-6 py-5 pr-32 rounded-full bg-white/10 backdrop-blur-md border-2 border-white text-white placeholder-white/70 text-lg focus:outline-none focus:ring-4 focus:ring-white/30 focus:bg-white/20 shadow-2xl"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-colors"
            >
              Search
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

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => router.push('/destinations')}
            className="group inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Explore Destinations
          </button>
          
          <button
            onClick={() => router.push('/guide')}
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary-600 transition-all duration-200 backdrop-blur-sm"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Plan Your Trip
          </button>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
            <div className="text-white/80 text-sm">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">100+</div>
            <div className="text-white/80 text-sm">Travel Guides</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">₹2K+</div>
            <div className="text-white/80 text-sm">Budget Trips</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
