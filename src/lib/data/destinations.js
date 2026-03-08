// Destination data access layer

const destinations = [
  {
    slug: "goa",
    name: "Goa",
    description: "India's beach paradise with vibrant nightlife and Portuguese heritage",
    longDescription: "Goa is India's smallest state but one of its most popular tourist destinations.",
    state: "Goa",
    region: "West",
    category: "Beach",
    images: [
      { url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&h=800&fit=crop", alt: "Goa beach", caption: "Beautiful beach" }
    ],
    budgetRange: { min: 2000, max: 3000 },
    budgetBreakdown: {
      accommodation: { min: 500, max: 1000 },
      food: { min: 300, max: 500 },
      transport: { min: 300, max: 500 },
      activities: { min: 500, max: 1000 }
    },
    bestSeasons: ["Winter", "Monsoon"],
    attractions: ["Baga Beach", "Calangute Beach", "Fort Aguada"],
    travelTips: ["Rent a scooter", "Visit during off-season"],
    howToReach: {
      byAir: "Goa International Airport is well connected",
      byTrain: "Madgaon railway station",
      byRoad: "Well-connected by NH66"
    },
    relatedBlogs: ["goa-budget-travel-guide"],
    seo: {
      metaTitle: "Goa Travel Guide",
      metaDescription: "Complete guide to visiting Goa",
      keywords: ["goa travel"],
      ogImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&h=800&fit=crop"
    },
    featured: true,
    published: true
  },
  {
    slug: "rishikesh",
    name: "Rishikesh",
    description: "Yoga capital and adventure hub in the Himalayan foothills",
    longDescription: "Rishikesh is known as the Yoga Capital of the World.",
    state: "Uttarakhand",
    region: "North",
    category: "Adventure",
    images: [
      { url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&h=800&fit=crop", alt: "Rishikesh", caption: "Adventure hub" }
    ],
    budgetRange: { min: 1500, max: 4000 },
    budgetBreakdown: {
      accommodation: { min: 400, max: 1200 },
      food: { min: 300, max: 600 },
      transport: { min: 200, max: 400 },
      activities: { min: 600, max: 1800 }
    },
    bestSeasons: ["Spring", "Winter"],
    attractions: ["Laxman Jhula", "Ram Jhula", "Beatles Ashram"],
    travelTips: ["Book rafting in advance", "Stay near Laxman Jhula"],
    howToReach: {
      byAir: "Jolly Grant Airport in Dehradun",
      byTrain: "Rishikesh Railway Station",
      byRoad: "Well-connected from Delhi"
    },
    relatedBlogs: ["rishikesh-adventure-guide"],
    seo: {
      metaTitle: "Rishikesh Travel Guide",
      metaDescription: "Explore Rishikesh",
      keywords: ["rishikesh travel"],
      ogImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&h=800&fit=crop"
    },
    featured: true,
    published: true
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    description: "The Pink City with magnificent forts and palaces",
    longDescription: "Jaipur is known as the Pink City.",
    state: "Rajasthan",
    region: "North",
    category: "Heritage",
    images: [
      { url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&h=800&fit=crop", alt: "Jaipur", caption: "Pink City" }
    ],
    budgetRange: { min: 1500, max: 2500 },
    budgetBreakdown: {
      accommodation: { min: 500, max: 1000 },
      food: { min: 300, max: 500 },
      transport: { min: 200, max: 400 },
      activities: { min: 500, max: 600 }
    },
    bestSeasons: ["Winter", "Spring"],
    attractions: ["Amber Fort", "City Palace", "Hawa Mahal"],
    travelTips: ["Start early", "Bargain at markets"],
    howToReach: {
      byAir: "Jaipur International Airport",
      byTrain: "Jaipur Junction",
      byRoad: "280 km from Delhi"
    },
    relatedBlogs: ["jaipur-heritage-walk"],
    seo: {
      metaTitle: "Jaipur Travel Guide",
      metaDescription: "Explore the Pink City",
      keywords: ["jaipur travel"],
      ogImage: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&h=800&fit=crop"
    },
    featured: true,
    published: true
  },
  {
    slug: "manali",
    name: "Manali",
    description: "Himalayan hill station perfect for adventure",
    longDescription: "Manali is a high-altitude Himalayan resort town.",
    state: "Himachal Pradesh",
    region: "North",
    category: "Mountains",
    images: [
      { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop", alt: "Manali", caption: "Snow mountains" }
    ],
    budgetRange: { min: 3000, max: 5000 },
    budgetBreakdown: {
      accommodation: { min: 1000, max: 1500 },
      food: { min: 400, max: 600 },
      transport: { min: 500, max: 1000 },
      activities: { min: 1000, max: 2000 }
    },
    bestSeasons: ["Winter"],
    attractions: ["Solang Valley", "Rohtang Pass", "Hadimba Temple"],
    travelTips: ["Carry woolens", "Book permits in advance"],
    howToReach: {
      byAir: "Bhuntar Airport",
      byTrain: "Chandigarh railway station",
      byRoad: "540 km from Delhi"
    },
    relatedBlogs: ["manali-winter-wonderland"],
    seo: {
      metaTitle: "Manali Travel Guide",
      metaDescription: "Visit Manali",
      keywords: ["manali travel"],
      ogImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop"
    },
    featured: true,
    published: true
  },
  {
    slug: "kerala",
    name: "Kerala Backwaters",
    description: "Serene network of lagoons and canals",
    longDescription: "Kerala's backwaters are a unique ecosystem.",
    state: "Kerala",
    region: "South",
    category: "Nature",
    images: [
      { url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&h=800&fit=crop", alt: "Kerala", caption: "Backwaters" }
    ],
    budgetRange: { min: 2000, max: 4500 },
    budgetBreakdown: {
      accommodation: { min: 800, max: 1500 },
      food: { min: 400, max: 600 },
      transport: { min: 200, max: 400 },
      activities: { min: 600, max: 2000 }
    },
    bestSeasons: ["Winter", "Monsoon"],
    attractions: ["Alleppey Backwaters", "Kumarakom", "Vembanad Lake"],
    travelTips: ["Book shared houseboats", "Try homestays"],
    howToReach: {
      byAir: "Cochin International Airport",
      byTrain: "Alleppey railway station",
      byRoad: "Well-connected by NH66"
    },
    relatedBlogs: ["kerala-backwaters-experience"],
    seo: {
      metaTitle: "Kerala Backwaters Guide",
      metaDescription: "Explore Kerala backwaters",
      keywords: ["kerala backwaters"],
      ogImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&h=800&fit=crop"
    },
    featured: true,
    published: true
  },
  {
    slug: "udaipur",
    name: "Udaipur",
    description: "City of Lakes with romantic palaces",
    longDescription: "Udaipur is known as the Venice of the East.",
    state: "Rajasthan",
    region: "West",
    category: "Heritage",
    images: [
      { url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&h=800&fit=crop", alt: "Udaipur", caption: "Lake Palace" }
    ],
    budgetRange: { min: 2000, max: 3500 },
    budgetBreakdown: {
      accommodation: { min: 600, max: 1200 },
      food: { min: 400, max: 600 },
      transport: { min: 300, max: 500 },
      activities: { min: 700, max: 1200 }
    },
    bestSeasons: ["Winter", "Spring"],
    attractions: ["City Palace", "Lake Pichola", "Jag Mandir"],
    travelTips: ["Take boat rides", "Visit rooftop restaurants"],
    howToReach: {
      byAir: "Maharana Pratap Airport",
      byTrain: "Udaipur City Railway Station",
      byRoad: "400 km from Jaipur"
    },
    relatedBlogs: [],
    seo: {
      metaTitle: "Udaipur Travel Guide",
      metaDescription: "Discover Udaipur",
      keywords: ["udaipur travel"],
      ogImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&h=800&fit=crop"
    },
    featured: false,
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
