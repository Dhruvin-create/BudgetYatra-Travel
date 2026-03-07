// Search and filter utility functions

export function filterByBudget(items, min, max) {
  if (min === undefined || max === undefined) return items;
  
  return items.filter(item => {
    if (!item.budgetRange) return false;
    return item.budgetRange.min <= max && item.budgetRange.max >= min;
  });
}

export function filterBySeason(items, seasons) {
  if (!seasons || seasons.length === 0) return items;
  
  const seasonArray = Array.isArray(seasons) ? seasons : [seasons];
  
  return items.filter(item => {
    if (!item.season && !item.bestSeasons) return false;
    const itemSeasons = item.season || item.bestSeasons || [];
    return seasonArray.some(s => 
      itemSeasons.some(is => is.toLowerCase() === s.toLowerCase())
    );
  });
}

export function filterByKeyword(items, query) {
  if (!query || query.trim() === '') return items;
  
  const lowerQuery = query.toLowerCase();
  
  return items.filter(item => {
    const searchableFields = [
      item.title || item.name || '',
      item.description || '',
      item.excerpt || '',
      item.category || '',
      ...(item.tags || []),
      ...(item.attractions || [])
    ];
    
    return searchableFields.some(field => 
      field.toLowerCase().includes(lowerQuery)
    );
  });
}

export function combineFilters(items, filters = {}) {
  let results = [...items];
  
  if (filters.query) {
    results = filterByKeyword(results, filters.query);
  }
  
  if (filters.budgetMin !== undefined && filters.budgetMax !== undefined) {
    results = filterByBudget(results, filters.budgetMin, filters.budgetMax);
  }
  
  if (filters.season) {
    results = filterBySeason(results, filters.season);
  }
  
  return results;
}

export function calculateRelevance(item, query) {
  if (!query) return 0;
  
  const lowerQuery = query.toLowerCase();
  let score = 0;
  
  // Exact match in title/name (highest weight)
  const title = (item.title || item.name || '').toLowerCase();
  if (title === lowerQuery) score += 100;
  else if (title.includes(lowerQuery)) score += 50;
  
  // Match in description
  const description = (item.description || item.excerpt || '').toLowerCase();
  if (description.includes(lowerQuery)) score += 20;
  
  // Match in tags/attractions
  const tags = [...(item.tags || []), ...(item.attractions || [])];
  if (tags.some(tag => tag.toLowerCase().includes(lowerQuery))) score += 10;
  
  return score;
}
