// Destination data — AEO + Featured Snippet optimized for BudgetYatra

const destinations = [
  {
    slug: "goa",
    name: "Goa",
    description: "India's beach paradise with vibrant nightlife, Portuguese heritage, and 100 km of stunning coastline",
    longDescription: `<div id="quick-answer" class="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg mb-8"><h2 class="text-xl font-bold text-blue-800 mb-2">Quick Answer: Goa Budget Travel</h2><p class="text-blue-900">A budget trip to Goa costs <strong>₹1,500–₹3,000 per person per day</strong>, covering a hostel dorm (₹400–₹700), local meals (₹150–₹300), scooter rental (₹300–₹400/day), and beach activities. A 5-day Goa trip can be done comfortably for <strong>₹8,000–₹15,000 total</strong>. Best time to visit is November to February.</p></div><h2>Why Goa is India's Best Budget Beach Destination</h2><p>Goa is the crown jewel of Indian beach travel — and you don't need a fat wallet to enjoy it. With 100 km of coastline, Portuguese-era architecture, vibrant nightlife, and some of the freshest seafood in the country, Goa delivers extraordinary value for budget travellers.</p>`,
    state: "Goa",
    region: "West",
    category: "Beach",
    images: [{ url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&h=800&fit=crop", alt: "Goa beach", caption: "Goa coastline" }],
    budgetRange: { min: 1500, max: 3000 },
    budgetBreakdown: { accommodation: { min: 400, max: 1000 }, food: { min: 150, max: 500 }, transport: { min: 300, max: 500 }, activities: { min: 200, max: 500 } },
    bestSeasons: ["Winter", "Autumn"],
    attractions: ["Baga Beach", "Calangute Beach", "Fort Aguada", "Chapora Fort", "Basilica of Bom Jesus", "Palolem Beach"],
    travelTips: ["Rent a scooter for freedom", "Visit during shoulder season", "Eat at local thali joints"],
    howToReach: { byAir: "Dabolim Airport", byTrain: "Madgaon railway station", byRoad: "Overnight Volvo buses" },
    relatedBlogs: ["goa-budget-travel-guide"],
    seo: { metaTitle: "Goa Travel Guide 2024", metaDescription: "Complete Goa travel guide", keywords: ["goa travel"], ogImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&h=800&fit=crop" },
    featured: true,
    published: true
  },
  {
    slug: "rishikesh",
    name: "Rishikesh",
    description: "Yoga capital of the world and adventure hub nestled in the Himalayan foothills",
    longDescription: `<div id="quick-answer" class="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg mb-8"><h2 class="text-xl font-bold text-blue-800 mb-2">Quick Answer: Rishikesh Budget Travel</h2><p class="text-blue-900">A budget trip to Rishikesh costs <strong>₹1,200–₹2,500 per person per day</strong>. A 4-day trip costs <strong>₹6,000–₹12,000 total</strong>. Best time: September to November and February to May.</p></div><h2>Why Rishikesh is India's Ultimate Budget Adventure Destination</h2><p>Rishikesh sits at the confluence of the Ganges and Chandrabhaga rivers, known as the Yoga Capital of the World. It offers world-class white-water rafting, bungee jumping, yoga retreats, and meditation centres — all at budget-friendly prices.</p>`,
    state: "Uttarakhand",
    region: "North",
    category: "Adventure",
    images: [{ url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&h=800&fit=crop", alt: "Rishikesh Laxman Jhula", caption: "Laxman Jhula bridge" }],
    budgetRange: { min: 1200, max: 2500 },
    budgetBreakdown: { accommodation: { min: 400, max: 800 }, food: { min: 200, max: 400 }, transport: { min: 100, max: 300 }, activities: { min: 500, max: 1500 } },
    bestSeasons: ["Spring", "Autumn", "Winter"],
    attractions: ["Laxman Jhula", "Ram Jhula", "Beatles Ashram", "Triveni Ghat", "Neer Garh Waterfall"],
    travelTips: ["Stay at an ashram", "Book rafting directly", "Attend free Ganga Aarti"],
    howToReach: { byAir: "Jolly Grant Airport", byTrain: "Haridwar Junction", byRoad: "Direct buses from Delhi" },
    relatedBlogs: ["rishikesh-yoga-budget-guide"],
    seo: { metaTitle: "Rishikesh Travel Guide 2024", metaDescription: "Complete Rishikesh budget guide", keywords: ["rishikesh travel"], ogImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&h=800&fit=crop" },
    featured: true,
    published: true
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    description: "The Pink City — magnificent forts, royal palaces, vibrant bazaars, and rich Rajput heritage",
    longDescription: `<div id="quick-answer" class="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg mb-8"><h2 class="text-xl font-bold text-blue-800 mb-2">Quick Answer: Jaipur Budget Travel</h2><p class="text-blue-900">A budget trip to Jaipur costs <strong>₹1,500–₹2,500 per person per day</strong>. A 3-day trip costs <strong>₹5,000–₹10,000 total</strong>. Best time: October to March.</p></div><h2>Why Jaipur is India's Most Spectacular Heritage City</h2><p>Jaipur, the Pink City, packs an extraordinary density of forts, palaces, temples, and bazaars into a compact area. It's the anchor of India's Golden Triangle, making it essential for any North India itinerary.</p>`,
    state: "Rajasthan",
    region: "North",
    category: "Heritage",
    images: [{ url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&h=800&fit=crop", alt: "Jaipur Hawa Mahal", caption: "Hawa Mahal Palace" }],
    budgetRange: { min: 1500, max: 2500 },
    budgetBreakdown: { accommodation: { min: 500, max: 1000 }, food: { min: 200, max: 400 }, transport: { min: 200, max: 400 }, activities: { min: 200, max: 500 } },
    bestSeasons: ["Winter", "Autumn", "Spring"],
    attractions: ["Amber Fort", "City Palace", "Hawa Mahal", "Jantar Mantar", "Nahargarh Fort"],
    travelTips: ["Buy composite ticket", "Bargain in bazaars", "Start early", "Use app-based autos"],
    howToReach: { byAir: "Jaipur International Airport", byTrain: "Jaipur Junction", byRoad: "RSRTC Volvo buses from Delhi" },
    relatedBlogs: ["rajasthan-heritage-budget-tour"],
    seo: { metaTitle: "Jaipur Travel Guide 2024", metaDescription: "Complete Jaipur budget guide", keywords: ["jaipur travel"], ogImage: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&h=800&fit=crop" },
    featured: true,
    published: true
  }
];

export function getAllDestinations() {
  return destinations.filter(dest => dest.published);
}

export function getDestinationBySlug(slug) {
  return destinations.find(dest => dest.slug === slug && dest.published);
}

export function getFeaturedDestinations(limit = 6) {
  return destinations.filter(dest => dest.published && dest.featured).slice(0, limit);
}

export function getDestinationsByBudget(min, max) {
  return destinations.filter(dest =>
    dest.published && dest.budgetRange.min <= max && dest.budgetRange.max >= min
  );
}

export function getDestinationsBySeason(season) {
  return destinations.filter(dest =>
    dest.published && dest.bestSeasons.some(s => s.toLowerCase() === season.toLowerCase())
  );
}

export function searchDestinations(query, filters = {}) {
  let results = destinations.filter(dest => dest.published);

  if (query) {
    const lowerQuery = query.toLowerCase();
    results = results.filter(dest =>
      dest.name.toLowerCase().includes(lowerQuery) ||
      dest.description.toLowerCase().includes(lowerQuery) ||
      dest.state.toLowerCase().includes(lowerQuery) ||
      dest.attractions.some(attr => attr.toLowerCase().includes(lowerQuery))
    );
  }

  if (filters.budgetMin !== undefined && filters.budgetMax !== undefined) {
    results = results.filter(dest =>
      dest.budgetRange.min <= filters.budgetMax &&
      dest.budgetRange.max >= filters.budgetMin
    );
  }

  if (filters.season) {
    results = results.filter(dest =>
      dest.bestSeasons.some(s => s.toLowerCase() === filters.season.toLowerCase())
    );
  }

  return results;
}