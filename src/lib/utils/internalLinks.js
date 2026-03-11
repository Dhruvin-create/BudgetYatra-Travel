/**
 * Internal Linking System for BudgetYatra
 * 
 * This utility provides functions to generate contextual internal links
 * between blogs, destinations, and guides based on content relationships.
 */

import { getAllBlogs, getBlogsByDestination, getBlogsByCategory } from '@/lib/data/blogs';
import { getAllDestinations, getDestinationBySlug } from '@/lib/data/destinations';

/**
 * Get related destinations for a blog post
 * @param {string} blogSlug - The blog slug
 * @param {number} limit - Maximum number of destinations to return
 * @returns {Array} Array of related destination objects
 */
export function getRelatedDestinationsForBlog(blogSlug, limit = 3) {
  const blogs = getAllBlogs();
  const blog = blogs.find(b => b.slug === blogSlug);
  
  if (!blog || !blog.destination) return [];
  
  const destinations = getAllDestinations();
  const relatedDests = destinations.filter(dest => 
    dest.slug === blog.destination
  );
  
  return relatedDests.slice(0, limit);
}

/**
 * Get related blogs for a destination
 * @param {string} destinationSlug - The destination slug
 * @param {number} limit - Maximum number of blogs to return
 * @returns {Array} Array of related blog objects
 */
export function getRelatedBlogsForDestination(destinationSlug, limit = 4) {
  const blogs = getAllBlogs();
  const relatedBlogs = blogs.filter(blog => 
    blog.destination && blog.destination.toLowerCase() === destinationSlug.toLowerCase()
  );
  
  return relatedBlogs.slice(0, limit);
}

/**
 * Get related blogs by category
 * @param {string} category - The blog category
 * @param {string} excludeSlug - Blog slug to exclude from results
 * @param {number} limit - Maximum number of blogs to return
 * @returns {Array} Array of related blog objects
 */
export function getRelatedBlogsByCategory(category, excludeSlug = '', limit = 3) {
  const blogs = getAllBlogs();
  const relatedBlogs = blogs.filter(blog => 
    blog.category.toLowerCase() === category.toLowerCase() && 
    blog.slug !== excludeSlug
  );
  
  return relatedBlogs.slice(0, limit);
}

/**
 * Get guide links (search/filter page links) for a blog
 * @param {string} blogSlug - The blog slug
 * @returns {Array} Array of guide link objects with query parameters
 */
export function getGuideLinksForBlog(blogSlug) {
  const blogs = getAllBlogs();
  const blog = blogs.find(b => b.slug === blogSlug);
  
  if (!blog) return [];
  
  const links = [];
  
  // Add category-based guide link
  if (blog.category) {
    links.push({
      title: `Explore ${blog.category} Destinations`,
      href: `/guide?category=${encodeURIComponent(blog.category)}`,
      icon: '🗺️',
      description: `Find more ${blog.category.toLowerCase()} travel guides`
    });
  }
  
  // Add budget-based guide link
  if (blog.budgetRange) {
    const budgetLabel = `₹${blog.budgetRange.min}-${blog.budgetRange.max}`;
    links.push({
      title: `Destinations in ${budgetLabel} Range`,
      href: `/guide?budgetMin=${blog.budgetRange.min}&budgetMax=${blog.budgetRange.max}`,
      icon: '💰',
      description: `Find destinations within your budget`
    });
  }
  
  // Add season-based guide links
  if (blog.season && blog.season.length > 0) {
    blog.season.forEach(season => {
      links.push({
        title: `${season} Travel Guides`,
        href: `/guide?season=${encodeURIComponent(season)}`,
        icon: '🌤️',
        description: `Explore destinations perfect for ${season}`
      });
    });
  }
  
  return links;
}

/**
 * Get guide links for a destination
 * @param {string} destinationSlug - The destination slug
 * @returns {Array} Array of guide link objects
 */
export function getGuideLinksForDestination(destinationSlug) {
  const destinations = getAllDestinations();
  const destination = destinations.find(d => d.slug === destinationSlug);
  
  if (!destination) return [];
  
  const links = [];
  
  // Add category-based guide link
  if (destination.category) {
    links.push({
      title: `More ${destination.category} Destinations`,
      href: `/guide?category=${encodeURIComponent(destination.category)}`,
      icon: '🗺️',
      description: `Explore other ${destination.category.toLowerCase()} destinations`
    });
  }
  
  // Add budget-based guide link
  if (destination.budgetRange) {
    const budgetLabel = `₹${destination.budgetRange.min}-${destination.budgetRange.max}`;
    links.push({
      title: `Destinations in ${budgetLabel} Range`,
      href: `/guide?budgetMin=${destination.budgetRange.min}&budgetMax=${destination.budgetRange.max}`,
      icon: '💰',
      description: `Find destinations within your budget`
    });
  }
  
  // Add season-based guide links
  if (destination.bestSeasons && destination.bestSeasons.length > 0) {
    destination.bestSeasons.forEach(season => {
      links.push({
        title: `${season} Travel Guides`,
        href: `/guide?season=${encodeURIComponent(season)}`,
        icon: '🌤️',
        description: `Explore destinations perfect for ${season}`
      });
    });
  }
  
  return links;
}

/**
 * Get contextual internal links for a blog post
 * Returns destinations, related blogs, and guide links
 * @param {string} blogSlug - The blog slug
 * @returns {Object} Object containing related content and links
 */
export function getBlogInternalLinks(blogSlug) {
  return {
    relatedDestinations: getRelatedDestinationsForBlog(blogSlug, 2),
    relatedBlogs: getRelatedBlogsByCategory(
      getAllBlogs().find(b => b.slug === blogSlug)?.category || '',
      blogSlug,
      3
    ),
    guideLinks: getGuideLinksForBlog(blogSlug)
  };
}

/**
 * Get contextual internal links for a destination
 * Returns related blogs and guide links
 * @param {string} destinationSlug - The destination slug
 * @returns {Object} Object containing related content and links
 */
export function getDestinationInternalLinks(destinationSlug) {
  return {
    relatedBlogs: getRelatedBlogsForDestination(destinationSlug, 4),
    guideLinks: getGuideLinksForDestination(destinationSlug)
  };
}

/**
 * Get breadcrumb links for navigation
 * @param {string} type - Type of page ('blog', 'destination', 'guide')
 * @param {string} slug - The page slug
 * @param {string} title - The page title
 * @returns {Array} Array of breadcrumb objects
 */
export function getBreadcrumbs(type, slug, title) {
  const breadcrumbs = [
    { label: 'Home', href: '/' }
  ];
  
  switch (type) {
    case 'blog':
      breadcrumbs.push(
        { label: 'Travel Guides', href: '/blogs' },
        { label: title, href: `/blogs/${slug}` }
      );
      break;
    case 'destination':
      breadcrumbs.push(
        { label: 'Destinations', href: '/destinations' },
        { label: title, href: `/destinations/${slug}` }
      );
      break;
    case 'guide':
      breadcrumbs.push(
        { label: 'Travel Guide', href: '/guide' }
      );
      break;
    default:
      break;
  }
  
  return breadcrumbs;
}

/**
 * Get contextual CTA links based on content type
 * @param {string} type - Type of content ('blog', 'destination')
 * @param {string} slug - The content slug
 * @returns {Array} Array of CTA link objects
 */
export function getContextualCTAs(type, slug) {
  const ctas = [];
  
  if (type === 'blog') {
    const blog = getAllBlogs().find(b => b.slug === slug);
    if (blog) {
      // Link to destination
      if (blog.destination) {
        ctas.push({
          text: 'View Full Destination Guide',
          href: `/destinations/${blog.destination}`,
          icon: '📍',
          color: 'primary'
        });
      }
      
      // Link to calculator
      ctas.push({
        text: 'Calculate Your Trip Budget',
        href: '/calculator',
        icon: '🧮',
        color: 'secondary'
      });
      
      // Link to guide
      ctas.push({
        text: 'Explore Similar Destinations',
        href: `/guide?category=${encodeURIComponent(blog.category)}`,
        icon: '🗺️',
        color: 'accent'
      });
    }
  } else if (type === 'destination') {
    const destination = getAllDestinations().find(d => d.slug === slug);
    if (destination) {
      // Link to related blogs
      ctas.push({
        text: 'Read Travel Guides',
        href: `/blogs?destination=${slug}`,
        icon: '📖',
        color: 'primary'
      });
      
      // Link to calculator
      ctas.push({
        text: 'Plan Your Budget',
        href: '/calculator',
        icon: '🧮',
        color: 'secondary'
      });
      
      // Link to guide
      ctas.push({
        text: 'Find Similar Destinations',
        href: `/guide?category=${encodeURIComponent(destination.category)}`,
        icon: '🗺️',
        color: 'accent'
      });
    }
  }
  
  return ctas;
}

/**
 * Generate internal link suggestions for content
 * Useful for content creators to understand linking opportunities
 * @param {string} type - Type of content ('blog', 'destination')
 * @param {string} slug - The content slug
 * @returns {Object} Object with linking suggestions
 */
export function getLinkingSuggestions(type, slug) {
  const suggestions = {
    outgoing: [],
    incoming: [],
    opportunities: []
  };
  
  if (type === 'blog') {
    const blog = getAllBlogs().find(b => b.slug === slug);
    if (blog) {
      // Outgoing links
      if (blog.destination) {
        suggestions.outgoing.push({
          type: 'destination',
          title: `Link to ${blog.destination} destination page`,
          href: `/destinations/${blog.destination}`
        });
      }
      
      // Incoming links
      const relatedBlogs = getRelatedBlogsByCategory(blog.category, slug, 5);
      suggestions.incoming = relatedBlogs.map(b => ({
        type: 'blog',
        title: b.title,
        href: `/blogs/${b.slug}`
      }));
      
      // Opportunities
      suggestions.opportunities = [
        {
          title: 'Link to Budget Calculator',
          description: 'Help readers calculate their trip budget',
          href: '/calculator'
        },
        {
          title: 'Link to Travel Guide',
          description: 'Direct readers to explore similar destinations',
          href: '/guide'
        }
      ];
    }
  } else if (type === 'destination') {
    const destination = getAllDestinations().find(d => d.slug === slug);
    if (destination) {
      // Outgoing links
      const relatedBlogs = getRelatedBlogsForDestination(slug, 5);
      suggestions.outgoing = relatedBlogs.map(b => ({
        type: 'blog',
        title: b.title,
        href: `/blogs/${b.slug}`
      }));
      
      // Opportunities
      suggestions.opportunities = [
        {
          title: 'Link to Budget Calculator',
          description: 'Help readers plan their budget',
          href: '/calculator'
        },
        {
          title: 'Link to Travel Guide',
          description: 'Help readers find similar destinations',
          href: '/guide'
        }
      ];
    }
  }
  
  return suggestions;
}
