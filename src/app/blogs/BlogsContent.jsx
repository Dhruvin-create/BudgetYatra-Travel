'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import BlogCard from '@/components/cards/BlogCard';
import { getAllBlogs, getBlogsByCategory } from '@/lib/data/blogs';

const CATEGORIES = [
  { name: 'All', icon: '🌍', color: 'from-gray-500 to-gray-600' },
  { name: 'Beach', icon: '🏖️', color: 'from-blue-500 to-cyan-500' },
  { name: 'Mountains', icon: '⛰️', color: 'from-green-500 to-emerald-500' },
  { name: 'Heritage', icon: '🏛️', color: 'from-amber-500 to-orange-500' },
  { name: 'Adventure', icon: '🎒', color: 'from-red-500 to-pink-500' },
  { name: 'Nature', icon: '🌿', color: 'from-teal-500 to-green-500' },
];

export default function BlogsContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setBlogs(getAllBlogs());
    } else {
      setBlogs(getBlogsByCategory(selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            India Budget Travel Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            India budget travel tips for students, couples, and solo explorers — real itineraries, money-saving hacks, and destination guides from across India
          </p>
        </div>

        {/* SEO Subheadings */}
        <div className="mb-10 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">India Budget Travel Tips You Must Know</h2>
          <p className="text-gray-600">
            From cheap hill stations to coastal escapes — our guides cover every type of budget traveler. 
            Whether you're planning an <a href="/blogs?category=Mountains" className="text-primary-600 hover:underline">India budget road trip</a> through the mountains or a 
            <a href="/blogs?category=Beach" className="text-primary-600 hover:underline"> budget beach trip India</a>, we've got you covered.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {CATEGORIES.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`group relative overflow-hidden px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:shadow-md hover:scale-105'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-xl">{category.icon}</span>
                  <span>{category.name}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 text-center">
            Showing <span className="font-semibold text-gray-900">{blogs.length}</span> {blogs.length === 1 ? 'blog' : 'blogs'}
            {selectedCategory !== 'All' && (
              <span> in <span className="font-semibold text-primary-600">{selectedCategory}</span></span>
            )}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} showBudget={true} />
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No blogs found in this category</h3>
            <p className="text-gray-600 mb-4">Try selecting a different category</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              View All Blogs
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
