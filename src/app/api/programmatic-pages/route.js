/**
 * Programmatic Pages API
 * 
 * Generates metadata and content for programmatic SEO pages
 * Supports dynamic page generation based on filters and combinations
 */

import { generateProgrammaticPageData, PROGRAMMATIC_PAGE_TEMPLATES } from '@/lib/utils/contentClusters';

/**
 * GET /api/programmatic-pages
 * Returns available programmatic page templates
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const category = searchParams.get('category');
  const season = searchParams.get('season');
  const minBudget = searchParams.get('minBudget');
  const maxBudget = searchParams.get('maxBudget');
  const region = searchParams.get('region');
  const duration = searchParams.get('duration');

  try {
    // If no filters, return available templates
    if (!type && !category && !season && !minBudget && !maxBudget && !region && !duration) {
      return Response.json({
        success: true,
        templates: Object.values(PROGRAMMATIC_PAGE_TEMPLATES),
        message: 'Available programmatic page templates',
      });
    }

    // Generate page data based on filters
    const pageData = generateProgrammaticPageData(type, {
      category,
      season,
      minBudget,
      maxBudget,
      region,
      duration,
    });

    // Generate page metadata
    const metadata = generatePageMetadata({
      category,
      season,
      minBudget,
      maxBudget,
      region,
      duration,
    });

    return Response.json({
      success: true,
      metadata,
      content: pageData,
      totalResults: pageData.totalResults,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
    }, { status: 500 });
  }
}

/**
 * Generate page metadata based on filters
 */
function generatePageMetadata(filters) {
  const parts = [];
  const keywords = [];

  if (filters.category) {
    parts.push(`${filters.category} Destinations`);
    keywords.push(`${filters.category.toLowerCase()} travel`, `${filters.category.toLowerCase()} destinations`);
  }

  if (filters.season) {
    parts.push(`${filters.season} Travel`);
    keywords.push(`${filters.season.toLowerCase()} travel`, `travel in ${filters.season.toLowerCase()}`);
  }

  if (filters.minBudget && filters.maxBudget) {
    parts.push(`₹${filters.minBudget}-${filters.maxBudget}`);
    keywords.push(`budget travel ₹${filters.minBudget}-${filters.maxBudget}`, `travel under ₹${filters.maxBudget}`);
  }

  if (filters.region) {
    parts.push(`${filters.region}`);
    keywords.push(`${filters.region.toLowerCase()} travel`, `${filters.region.toLowerCase()} destinations`);
  }

  if (filters.duration) {
    parts.push(`${filters.duration} Days`);
    keywords.push(`${filters.duration} day trip`, `${filters.duration} day itinerary`);
  }

  const title = `${parts.join(' - ')} | BudgetYatra`;
  const description = `Discover the best ${parts.join(' and ').toLowerCase()} in India. Complete travel guides, tips, and itineraries.`;

  return {
    title,
    description,
    keywords: [...new Set(keywords)],
    filters,
  };
}
