/**
 * Unit tests for blog data access layer
 * Tests Requirements 3 and 16
 */

import {
  getAllBlogs,
  getBlogBySlug,
  getLatestBlogs,
  getBlogsByCategory,
  getBlogsByDestination
} from '@/lib/data/blogs';

describe('Blog Data Access Layer', () => {
  describe('getAllBlogs', () => {
    test('returns all published blogs', () => {
      const blogs = getAllBlogs();
      expect(blogs).toBeInstanceOf(Array);
      expect(blogs.length).toBeGreaterThan(0);
      expect(blogs.every(blog => blog.published)).toBe(true);
    });

    test('each blog has required fields', () => {
      const blogs = getAllBlogs();
      blogs.forEach(blog => {
        expect(blog).toHaveProperty('slug');
        expect(blog).toHaveProperty('title');
        expect(blog).toHaveProperty('excerpt');
        expect(blog).toHaveProperty('content');
        expect(blog).toHaveProperty('featuredImage');
        expect(blog).toHaveProperty('author');
        expect(blog).toHaveProperty('publishDate');
        expect(blog).toHaveProperty('readingTime');
        expect(blog).toHaveProperty('category');
        expect(blog).toHaveProperty('tags');
        expect(blog).toHaveProperty('destination');
        expect(blog).toHaveProperty('budgetRange');
        expect(blog).toHaveProperty('season');
        expect(blog).toHaveProperty('seo');
      });
    });
  });

  describe('getBlogBySlug', () => {
    test('returns correct blog for valid slug', () => {
      const blog = getBlogBySlug('goa-budget-travel-guide');
      expect(blog).toBeDefined();
      expect(blog.slug).toBe('goa-budget-travel-guide');
      expect(blog.title).toBe('Goa on a Budget: Complete Travel Guide for 2024');
    });

    test('returns undefined for non-existent slug', () => {
      const blog = getBlogBySlug('non-existent-blog');
      expect(blog).toBeUndefined();
    });

    test('returns only published blogs', () => {
      const blog = getBlogBySlug('goa-budget-travel-guide');
      expect(blog?.published).toBe(true);
    });
  });

  describe('getLatestBlogs', () => {
    test('returns blogs sorted by publish date (newest first)', () => {
      const blogs = getLatestBlogs(3);
      expect(blogs.length).toBeLessThanOrEqual(3);
      
      for (let i = 0; i < blogs.length - 1; i++) {
        const currentDate = new Date(blogs[i].publishDate);
        const nextDate = new Date(blogs[i + 1].publishDate);
        expect(currentDate.getTime()).toBeGreaterThanOrEqual(nextDate.getTime());
      }
    });

    test('respects the limit parameter', () => {
      const blogs = getLatestBlogs(2);
      expect(blogs.length).toBe(2);
    });

    test('returns all blogs when limit exceeds total', () => {
      const allBlogs = getAllBlogs();
      const latestBlogs = getLatestBlogs(100);
      expect(latestBlogs.length).toBe(allBlogs.length);
    });

    test('defaults to 8 blogs when no limit specified', () => {
      const blogs = getLatestBlogs();
      expect(blogs.length).toBeLessThanOrEqual(8);
    });
  });

  describe('getBlogsByCategory', () => {
    test('returns blogs matching the specified category', () => {
      const adventureBlogs = getBlogsByCategory('Adventure');
      expect(adventureBlogs.length).toBeGreaterThan(0);
      expect(adventureBlogs.every(blog => blog.category === 'Adventure')).toBe(true);
    });

    test('is case-insensitive', () => {
      const lowerCase = getBlogsByCategory('adventure');
      const upperCase = getBlogsByCategory('ADVENTURE');
      expect(lowerCase.length).toBe(upperCase.length);
    });

    test('returns empty array for non-existent category', () => {
      const blogs = getBlogsByCategory('NonExistentCategory');
      expect(blogs).toEqual([]);
    });

    test('returns only published blogs', () => {
      const blogs = getBlogsByCategory('Adventure');
      expect(blogs.every(blog => blog.published)).toBe(true);
    });
  });

  describe('getBlogsByDestination', () => {
    test('returns blogs for the specified destination', () => {
      const goaBlogs = getBlogsByDestination('goa');
      expect(goaBlogs.length).toBeGreaterThan(0);
      expect(goaBlogs.every(blog => blog.destination === 'goa')).toBe(true);
    });

    test('returns empty array for destination with no blogs', () => {
      const blogs = getBlogsByDestination('non-existent-destination');
      expect(blogs).toEqual([]);
    });

    test('returns only published blogs', () => {
      const blogs = getBlogsByDestination('goa');
      expect(blogs.every(blog => blog.published)).toBe(true);
    });
  });

  describe('Blog Data Model Validation', () => {
    test('all blogs have valid budget ranges', () => {
      const blogs = getAllBlogs();
      blogs.forEach(blog => {
        expect(blog.budgetRange).toHaveProperty('min');
        expect(blog.budgetRange).toHaveProperty('max');
        expect(blog.budgetRange.min).toBeGreaterThan(0);
        expect(blog.budgetRange.max).toBeGreaterThanOrEqual(blog.budgetRange.min);
      });
    });

    test('all blogs have valid featured images', () => {
      const blogs = getAllBlogs();
      blogs.forEach(blog => {
        expect(blog.featuredImage).toHaveProperty('url');
        expect(blog.featuredImage).toHaveProperty('alt');
        expect(blog.featuredImage).toHaveProperty('width');
        expect(blog.featuredImage).toHaveProperty('height');
      });
    });

    test('all blogs have valid author information', () => {
      const blogs = getAllBlogs();
      blogs.forEach(blog => {
        expect(blog.author).toHaveProperty('name');
        expect(blog.author).toHaveProperty('avatar');
        expect(blog.author.name).toBeTruthy();
      });
    });

    test('all blogs have valid SEO metadata', () => {
      const blogs = getAllBlogs();
      blogs.forEach(blog => {
        expect(blog.seo).toHaveProperty('metaTitle');
        expect(blog.seo).toHaveProperty('metaDescription');
        expect(blog.seo).toHaveProperty('keywords');
        expect(blog.seo).toHaveProperty('ogImage');
        expect(Array.isArray(blog.seo.keywords)).toBe(true);
      });
    });

    test('all blogs have valid dates', () => {
      const blogs = getAllBlogs();
      blogs.forEach(blog => {
        expect(() => new Date(blog.publishDate)).not.toThrow();
        expect(() => new Date(blog.updatedDate)).not.toThrow();
        expect(new Date(blog.publishDate).toString()).not.toBe('Invalid Date');
      });
    });

    test('all blogs have at least one season', () => {
      const blogs = getAllBlogs();
      blogs.forEach(blog => {
        expect(Array.isArray(blog.season)).toBe(true);
        expect(blog.season.length).toBeGreaterThan(0);
      });
    });

    test('all blogs have at least one tag', () => {
      const blogs = getAllBlogs();
      blogs.forEach(blog => {
        expect(Array.isArray(blog.tags)).toBe(true);
        expect(blog.tags.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Sample Data Coverage', () => {
    test('has at least 3 sample blogs', () => {
      const blogs = getAllBlogs();
      expect(blogs.length).toBeGreaterThanOrEqual(3);
    });

    test('has blogs in multiple categories', () => {
      const blogs = getAllBlogs();
      const categories = [...new Set(blogs.map(blog => blog.category))];
      expect(categories.length).toBeGreaterThan(1);
    });

    test('has blogs for multiple destinations', () => {
      const blogs = getAllBlogs();
      const destinations = [...new Set(blogs.map(blog => blog.destination))];
      expect(destinations.length).toBeGreaterThan(1);
    });

    test('has blogs for different seasons', () => {
      const blogs = getAllBlogs();
      const allSeasons = blogs.flatMap(blog => blog.season);
      const uniqueSeasons = [...new Set(allSeasons)];
      expect(uniqueSeasons.length).toBeGreaterThan(1);
    });
  });
});
