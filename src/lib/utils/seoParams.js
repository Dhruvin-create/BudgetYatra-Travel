// SEO utility for query parameter pages
// Determines canonical, robots, and metadata for filtered/search URLs

const SITE_URL = 'https://budgetyatra.online';

// High-intent destination queries — index + self-canonical
const HIGH_INTENT_QUERIES = new Set([
  'goa', 'rishikesh', 'jaipur', 'manali', 'kerala', 'varanasi',
  'ladakh', 'hampi', 'uttarakhand', 'himachal', 'rajasthan',
  'mountains', 'beach', 'heritage', 'adventure', 'nature',
  'backwaters', 'kochi', 'nubra', 'pangong', 'leh',
  'india', 'budget travel', 'itinerary',
]);

// High-intent seasons — index + self-canonical
const HIGH_INTENT_SEASONS = new Set([
  'Winter', 'Summer', 'Spring', 'Autumn',
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]);

// High-intent categories — always index
const HIGH_INTENT_CATEGORIES = new Set([
  'Beach', 'Mountains', 'Heritage', 'Adventure', 'Nature',
]);

/**
 * Determine SEO treatment for a parameterized URL
 * Returns: { index: bool, canonical: string, title?: string, description?: string }
 */
export function getParamSEO(pathname, params) {
  const q = params?.q?.toLowerCase()?.trim();
  const season = params?.season;
  const category = params?.category;
  const budgetMin = params?.budgetMin;
  const budgetMax = params?.budgetMax;

  // Category pages — always index, self-canonical
  if (category && HIGH_INTENT_CATEGORIES.has(category)) {
    const url = `${SITE_URL}${pathname}?category=${category}`;
    return {
      index: true,
      canonical: url,
      title: getCategoryTitle(pathname, category),
      description: getCategoryDescription(pathname, category),
    };
  }

  // Season pages — index, self-canonical
  if (season && HIGH_INTENT_SEASONS.has(season) && !q && !budgetMin) {
    const url = `${SITE_URL}${pathname}?season=${season}`;
    return {
      index: true,
      canonical: url,
      title: getSeasonTitle(season),
      description: getSeasonDescription(season),
    };
  }

  // High-intent destination queries — index, self-canonical
  if (q && HIGH_INTENT_QUERIES.has(q)) {
    const url = `${SITE_URL}${pathname}?q=${encodeURIComponent(q)}`;
    return {
      index: true,
      canonical: url,
      title: getQueryTitle(q),
      description: getQueryDescription(q),
    };
  }

  // Budget-only filters — noindex, canonical to base
  if (budgetMin && !q && !season && !category) {
    return {
      index: false,
      canonical: `${SITE_URL}${pathname}`,
    };
  }

  // Low-intent or random queries — noindex, canonical to base
  return {
    index: false,
    canonical: `${SITE_URL}${pathname}`,
  };
}

function getCategoryTitle(pathname, category) {
  const page = pathname.includes('blogs') ? 'Travel Guides' : pathname.includes('destinations') ? 'Destinations' : 'Guide';
  const map = {
    Beach: 'Budget Beach Travel India',
    Mountains: 'Budget Mountain Destinations India',
    Heritage: 'Budget Heritage Travel India',
    Adventure: 'Budget Adventure Travel India',
    Nature: 'Budget Nature Destinations India',
  };
  return `${map[category] || category} ${page} | BudgetYatra`;
}

function getCategoryDescription(pathname, category) {
  const map = {
    Beach: 'Explore the best budget beach destinations in India with real cost breakdowns, travel tips, and itineraries.',
    Mountains: 'Discover affordable mountain destinations in India — Manali, Ladakh, Rishikesh and more with budget guides.',
    Heritage: 'Plan budget heritage trips in India — Jaipur, Hampi, Varanasi with complete cost guides.',
    Adventure: 'Best budget adventure travel in India — rafting, trekking, and more with affordable itineraries.',
    Nature: 'Budget nature destinations in India — Kerala backwaters, hill stations, and wildlife with real costs.',
  };
  return map[category] || `Budget travel guides for ${category} destinations in India.`;
}

function getSeasonTitle(season) {
  return `Best Budget Travel Destinations in ${season} India | BudgetYatra`;
}

function getSeasonDescription(season) {
  return `Discover the best budget travel destinations to visit in ${season} in India. Real costs, itineraries, and money-saving tips.`;
}

function getQueryTitle(q) {
  const map = {
    goa: 'Budget Travel Guide to Goa — Cheap Trips & Hotels | BudgetYatra',
    rishikesh: 'Budget Travel Guide to Rishikesh — Rafting & Adventure | BudgetYatra',
    jaipur: 'Budget Travel Guide to Jaipur — Forts & Heritage | BudgetYatra',
    manali: 'Budget Travel Guide to Manali — Mountains & Snow | BudgetYatra',
    kerala: 'Budget Travel Guide to Kerala — Backwaters & Beaches | BudgetYatra',
    varanasi: 'Budget Travel Guide to Varanasi — Ghats & Temples | BudgetYatra',
    ladakh: 'Budget Travel Guide to Ladakh — Bike Trip & Road Trip | BudgetYatra',
    hampi: 'Budget Travel Guide to Hampi — Ruins & Heritage | BudgetYatra',
    mountains: 'Budget Mountain Travel India — Hill Stations & Treks | BudgetYatra',
    beach: 'Budget Beach Travel India — Coastal Destinations | BudgetYatra',
    heritage: 'Budget Heritage Travel India — Forts, Temples & Culture | BudgetYatra',
    adventure: 'Budget Adventure Travel India — Rafting, Trekking & More | BudgetYatra',
  };
  const title = map[q];
  if (title) return title;
  const cap = q.charAt(0).toUpperCase() + q.slice(1);
  return `Budget Travel Guide: ${cap} in India | BudgetYatra`;
}

function getQueryDescription(q) {
  const map = {
    goa: 'Complete budget travel guide to Goa with cheap hotels, food costs, transport tips, and a 3-day itinerary under ₹10,000.',
    rishikesh: 'Budget travel guide to Rishikesh with rafting costs, ashram stays, Haridwar day trip, and Uttarakhand budget tips.',
    jaipur: 'Budget Jaipur travel guide with 3-day itinerary, fort entry costs, cheap hotels, and family trip tips.',
    manali: 'Budget Manali travel guide with trip cost under ₹15,000, best time to visit, cheap hotels, and 4-day itinerary.',
    kerala: 'Budget Kerala travel guide with cheap backwater trips, best time to visit, and 5-day Kochi–Alleppey–Varkala route.',
    varanasi: 'Budget Varanasi travel guide with 3-day itinerary, boat ride costs, ghat tips, and India budget travel tips.',
    ladakh: 'Budget Ladakh travel guide with bike trip budget, 7-day itinerary, Nubra–Pangong costs, and road trip planner.',
    hampi: 'Budget Hampi travel guide with 2-day itinerary, cheap cultural destinations India, and real cost breakdown.',
    mountains: 'Best budget mountain destinations in India — Manali, Ladakh, Rishikesh with real costs and itineraries.',
    beach: 'Best budget beach destinations in India — Goa, Kerala, Varkala with cheap hotels and travel tips.',
  };
  return map[q] || `Budget travel guide for ${q} in India with real costs, itineraries, and money-saving tips.`;
}
