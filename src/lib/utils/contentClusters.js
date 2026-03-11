/**
 * Content Cluster System for BudgetYatra
 * 
 * Manages content clusters and programmatic SEO page generation
 * Enables scalable content organization and cross-linking
 */

import { getAllBlogs, getBlogsByCategory, getBlogsByDestination } from '@/lib/data/blogs';
import { getAllDestinations } from '@/lib/data/destinations';

/**
 * Define content clusters
 * Each cluster represents a topic area with pillar and cluster content
 */
export const CONTENT_CLUSTERS = {
  // Beach Destinations Cluster
  beach_destinations: {
    id: 'beach_destinations',
    name: 'Beach Destinations',
    description: 'Complete guides to India\'s best beach destinations',
    pillarPage: {
      title: 'Best Beach Destinations in India - Budget Travel Guide',
      slug: 'beach-destinations-guide',
      description: 'Discover the best budget-friendly beach destinations in India with complete travel guides, tips, and itineraries.',
      keywords: ['beach destinations india', 'best beaches india', 'budget beach travel', 'coastal destinations'],
    },
    clusterContent: ['goa', 'kerala'],
    category: 'Beach',
    icon: '🏖️',
  },

  // Mountain Destinations Cluster
  mountain_destinations: {
    id: 'mountain_destinations',
    name: 'Mountain Destinations',
    description: 'Complete guides to India\'s best mountain destinations',
    pillarPage: {
      title: 'Best Mountain Destinations in India - Budget Travel Guide',
      slug: 'mountain-destinations-guide',
      description: 'Explore India\'s best budget-friendly mountain destinations with complete travel guides and tips.',
      keywords: ['mountain destinations india', 'hill stations india', 'budget mountain travel', 'himalayan destinations'],
    },
    clusterContent: ['manali', 'ladakh'],
    category: 'Mountains',
    icon: '⛰️',
  },

  // Adventure Travel Cluster
  adventure_travel: {
    id: 'adventure_travel',
    name: 'Adventure Travel',
    description: 'Adventure travel guides and experiences',
    pillarPage: {
      title: 'Adventure Travel in India - Budget Guide',
      slug: 'adventure-travel-guide',
      description: 'Discover thrilling adventure travel experiences in India on a budget.',
      keywords: ['adventure travel india', 'adventure activities', 'budget adventure', 'extreme sports india'],
    },
    clusterContent: ['ladakh', 'rishikesh'],
    category: 'Adventure',
    icon: '🎯',
  },

  // Cultural & Heritage Cluster
  cultural_heritage: {
    id: 'cultural_heritage',
    name: 'Cultural & Heritage',
    description: 'Cultural and heritage travel guides',
    pillarPage: {
      title: 'Cultural & Heritage Travel in India - Budget Guide',
      slug: 'cultural-heritage-guide',
      description: 'Explore India\'s rich cultural and heritage sites on a budget.',
      keywords: ['cultural travel india', 'heritage sites india', 'historical destinations', 'cultural tourism'],
    },
    clusterContent: ['jaipur', 'hampi'],
    category: 'Heritage',
    icon: '🏛️',
  },

  // Budget Travel Cluster
  budget_travel: {
    id: 'budget_travel',
    name: 'Budget Travel Tips',
    description: 'Budget travel tips and strategies',
    pillarPage: {
      title: 'Budget Travel in India - Complete Guide',
      slug: 'budget-travel-guide',
      description: 'Master budget travel in India with our comprehensive guide to saving money while traveling.',
      keywords: ['budget travel india', 'cheap travel india', 'travel on a budget', 'budget travel tips'],
    },
    clusterContent: [],
    category: 'Budget',
    icon: '💰',
  },

  // Seasonal Travel Cluster
  seasonal_travel: {
    id: 'seasonal_travel',
    name: 'Seasonal Travel',
    description: 'Seasonal travel guides and recommendations',
    pillarPage: {
      title: 'Seasonal Travel in India - Best Times to Visit',
      slug: 'seasonal-travel-guide',
      description: 'Plan your India trip with our seasonal travel guide. Find the best times to visit different destinations.',
      keywords: ['seasonal travel india', 'best time to visit india', 'monsoon travel', 'winter travel india'],
    },
    clusterContent: [],
    category: 'Seasonal',
    icon: '🌤️',
  },
};

/**
 * Get all content clusters
 */
export function getAllContentClusters() {
  return Object.values(CONTENT_CLUSTERS);
}

/**
 * Get cluster by ID
 */
export function getClusterById(clusterId) {
  return CONTENT_CLUSTERS[clusterId];
}

/**
 * Get cluster content (blogs and destinations)
 */
export function getClusterContent(clusterId) {
  const cluster = getClusterById(clusterId);
  if (!cluster) return { blogs: [], destinations: [] };

  const blogs = getAllBlogs().filter(blog => 
    blog.category === cluster.category
  );

  const destinations = getAllDestinations().filter(dest =>
    cluster.clusterContent.includes(dest.slug)
  );

  return { blogs, destinations };
}

/**
 * Get related clusters for a blog
 */
export function getRelatedClusters(blogSlug) {
  const blog = getAllBlogs().find(b => b.slug === blogSlug);
  if (!blog) return [];

  return Object.values(CONTENT_CLUSTERS).filter(cluster =>
    cluster.category === blog.category
  );
}

/**
 * Get related clusters for a destination
 */
export function getRelatedClustersForDestination(destinationSlug) {
  const destination = getAllDestinations().find(d => d.slug === destinationSlug);
  if (!destination) return [];

  return Object.values(CONTENT_CLUSTERS).filter(cluster =>
    cluster.clusterContent.includes(destinationSlug)
  );
}

/**
 * Generate pillar page metadata
 */
export function generatePillarPageMetadata(clusterId) {
  const cluster = getClusterById(clusterId);
  if (!cluster) return null;

  const { pillarPage } = cluster;
  return {
    title: pillarPage.title,
    description: pillarPage.description,
    keywords: pillarPage.keywords,
    slug: pillarPage.slug,
    clusterId,
  };
}

/**
 * Get programmatic page templates
 * These are templates for generating pages programmatically
 */
export const PROGRAMMATIC_PAGE_TEMPLATES = {
  // Category pages
  category_page: {
    type: 'category',
    pattern: '/categories/[category]',
    description: 'Category landing pages for blog categories',
    example: '/categories/beach',
  },

  // Budget range pages
  budget_range_page: {
    type: 'budget_range',
    pattern: '/budget/[min]-[max]',
    description: 'Pages for specific budget ranges',
    example: '/budget/1000-2000',
  },

  // Season pages
  season_page: {
    type: 'season',
    pattern: '/seasons/[season]',
    description: 'Pages for specific travel seasons',
    example: '/seasons/october',
  },

  // Region pages
  region_page: {
    type: 'region',
    pattern: '/regions/[region]',
    description: 'Pages for specific regions',
    example: '/regions/north-india',
  },

  // Duration pages
  duration_page: {
    type: 'duration',
    pattern: '/trips/[duration]',
    description: 'Pages for specific trip durations',
    example: '/trips/3-days',
  },

  // Combination pages
  combination_page: {
    type: 'combination',
    pattern: '/trips/[duration]/[season]/[budget]',
    description: 'Combination pages for specific criteria',
    example: '/trips/3-days/october/1000-2000',
  },
};

/**
 * Get all programmatic page templates
 */
export function getAllProgrammaticTemplates() {
  return Object.values(PROGRAMMATIC_PAGE_TEMPLATES);
}

/**
 * Generate programmatic page data
 */
export function generateProgrammaticPageData(type, params) {
  const blogs = getAllBlogs();
  const destinations = getAllDestinations();

  let filteredBlogs = blogs;
  let filteredDestinations = destinations;

  // Filter by category
  if (params.category) {
    filteredBlogs = filteredBlogs.filter(b => 
      b.category.toLowerCase() === params.category.toLowerCase()
    );
  }

  // Filter by season
  if (params.season) {
    filteredBlogs = filteredBlogs.filter(b =>
      b.season && b.season.some(s => s.toLowerCase() === params.season.toLowerCase())
    );
    filteredDestinations = filteredDestinations.filter(d =>
      d.bestSeasons && d.bestSeasons.some(s => s.toLowerCase() === params.season.toLowerCase())
    );
  }

  // Filter by budget range
  if (params.minBudget && params.maxBudget) {
    const min = parseInt(params.minBudget);
    const max = parseInt(params.maxBudget);
    
    filteredBlogs = filteredBlogs.filter(b =>
      b.budgetRange && b.budgetRange.min >= min && b.budgetRange.max <= max
    );
    
    filteredDestinations = filteredDestinations.filter(d =>
      d.budgetRange && d.budgetRange.min >= min && d.budgetRange.max <= max
    );
  }

  // Filter by region
  if (params.region) {
    filteredDestinations = filteredDestinations.filter(d =>
      d.region && d.region.toLowerCase() === params.region.toLowerCase()
    );
  }

  // Filter by duration
  if (params.duration) {
    const durationDays = parseInt(params.duration);
    filteredBlogs = filteredBlogs.filter(b =>
      b.recommendedDays && b.recommendedDays >= durationDays - 1 && b.recommendedDays <= durationDays + 1
    );
  }

  return {
    blogs: filteredBlogs,
    destinations: filteredDestinations,
    totalResults: filteredBlogs.length + filteredDestinations.length,
  };
}

/**
 * Get content cluster statistics
 */
export function getClusterStatistics() {
  const clusters = getAllContentClusters();
  const blogs = getAllBlogs();
  const destinations = getAllDestinations();

  return {
    totalClusters: clusters.length,
    totalBlogs: blogs.length,
    totalDestinations: destinations.length,
    clusterBreakdown: clusters.map(cluster => ({
      id: cluster.id,
      name: cluster.name,
      blogCount: blogs.filter(b => b.category === cluster.category).length,
      destinationCount: cluster.clusterContent.length,
    })),
  };
}

/**
 * Generate cluster sitemap
 */
export function generateClusterSitemap() {
  const clusters = getAllContentClusters();
  
  return clusters.map(cluster => ({
    url: `/clusters/${cluster.id}`,
    title: cluster.name,
    description: cluster.description,
    priority: 0.7,
    changefreq: 'weekly',
  }));
}

/**
 * Get content gap analysis
 * Identifies areas where more content is needed
 */
export function getContentGapAnalysis() {
  const clusters = getAllContentClusters();
  const blogs = getAllBlogs();
  const destinations = getAllDestinations();

  const gaps = [];

  clusters.forEach(cluster => {
    const clusterBlogs = blogs.filter(b => b.category === cluster.category);
    const clusterDestinations = destinations.filter(d => 
      cluster.clusterContent.includes(d.slug)
    );

    // Check if cluster has pillar page content
    if (clusterBlogs.length === 0) {
      gaps.push({
        type: 'missing_pillar_content',
        cluster: cluster.name,
        message: `No blog content for ${cluster.name} cluster`,
        priority: 'high',
      });
    }

    // Check if cluster has enough cluster content
    if (clusterDestinations.length < 2) {
      gaps.push({
        type: 'insufficient_cluster_content',
        cluster: cluster.name,
        message: `Only ${clusterDestinations.length} destination(s) in ${cluster.name} cluster`,
        priority: 'medium',
      });
    }

    // Check for missing related content
    if (clusterBlogs.length < 3) {
      gaps.push({
        type: 'insufficient_blog_content',
        cluster: cluster.name,
        message: `Only ${clusterBlogs.length} blog(s) in ${cluster.name} cluster`,
        priority: 'medium',
      });
    }
  });

  return gaps;
}

/**
 * Get content cluster recommendations
 */
export function getContentRecommendations() {
  const gaps = getContentGapAnalysis();
  const stats = getClusterStatistics();

  return {
    statistics: stats,
    gaps,
    recommendations: [
      {
        title: 'Create Pillar Pages',
        description: 'Create comprehensive pillar pages for each content cluster',
        priority: 'high',
        impact: 'Establishes topical authority and improves SEO',
      },
      {
        title: 'Expand Cluster Content',
        description: 'Add more blog posts and destinations to each cluster',
        priority: 'high',
        impact: 'Increases content depth and user engagement',
      },
      {
        title: 'Create Programmatic Pages',
        description: 'Generate programmatic pages for combinations of filters',
        priority: 'medium',
        impact: 'Captures long-tail keywords and improves user experience',
      },
      {
        title: 'Implement Internal Linking',
        description: 'Link cluster content together strategically',
        priority: 'high',
        impact: 'Improves crawlability and distributes link equity',
      },
      {
        title: 'Create Cluster Landing Pages',
        description: 'Create dedicated landing pages for each cluster',
        priority: 'medium',
        impact: 'Improves navigation and user experience',
      },
    ],
  };
}
