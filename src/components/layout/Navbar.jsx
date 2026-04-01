'use client';

import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import Link from 'next/link';
import Icon from '@/components/shared/Icon';
import { NAVIGATION_LINKS } from '@/lib/constants/config';

// Lazy load SearchBar — only needed when user clicks search icon
const SearchBar = lazy(() => import('@/components/search/SearchBar'));

const CATEGORIES = [
  { name: 'Beach', icon: '🏖️', href: '/blogs?category=Beach' },
  { name: 'Mountains', icon: '⛰️', href: '/blogs?category=Mountains' },
  { name: 'Heritage', icon: '🏛️', href: '/blogs?category=Heritage' },
  { name: 'Adventure', icon: '🎒', href: '/blogs?category=Adventure' },
  { name: 'Nature', icon: '🌿', href: '/blogs?category=Nature' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              BudgetYatra
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                onMouseEnter={() => setCategoriesOpen(true)}
                className="flex items-center text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                Categories
                <Icon id="chevron-down" className={`w-4 h-4 ml-1 transition-transform ${categoriesOpen ? 'rotate-180' : ''}`} />
              </button>

              {mounted && categoriesOpen && (
                <div 
                  className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2"
                  onMouseLeave={() => setCategoriesOpen(false)}
                >
                  {CATEGORIES.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-primary-50 transition-colors"
                      onClick={() => setCategoriesOpen(false)}
                    >
                      <span className="text-2xl">{category.icon}</span>
                      <span className="text-gray-700 font-medium">{category.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Search - Expandable from right */}
            <div className="flex items-center gap-2">
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${searchOpen ? 'w-64' : 'w-0'}`}>
                {mounted && searchOpen && (
                  <div className="w-64">
                    <Suspense fallback={<div className="w-64 h-9 bg-gray-100 rounded-full animate-pulse" />}>
                      <SearchBar variant="navbar" />
                    </Suspense>
                  </div>
                )}
              </div>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-700 hover:text-primary-600 transition-colors shrink-0"
                aria-label="Search"
              >
                <Icon id={searchOpen ? 'close' : 'search'} className="w-5 h-5" />
              </button>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <Icon id={mobileMenuOpen ? 'close' : 'menu'} className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mounted && mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            {/* Mobile Search */}
            <div className="pb-3">
              <Suspense fallback={<div className="w-full h-9 bg-gray-100 rounded-full animate-pulse" />}>
                <SearchBar variant="navbar" />
              </Suspense>
            </div>

            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Categories */}
            <div className="pt-3 border-t border-gray-200">
              <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Categories</div>
              {CATEGORIES.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="flex items-center gap-3 py-2 text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-xl">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
