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
    images: [{ url: "https://images.unsplash.com/photo-1646748019039-e908f7e41282?w=1200&h=800&fit=crop&auto=format", alt: "Anjuna Beach, Goa", caption: "Anjuna Beach, Goa" }],
    budgetRange: { min: 1500, max: 3000 },
    budgetBreakdown: { accommodation: { min: 400, max: 1000 }, food: { min: 150, max: 500 }, transport: { min: 300, max: 500 }, activities: { min: 200, max: 500 } },
    bestSeasons: ["Winter", "Autumn"],
    attractions: ["Baga Beach", "Calangute Beach", "Fort Aguada", "Chapora Fort", "Basilica of Bom Jesus", "Palolem Beach"],
    travelTips: ["Rent a scooter for freedom", "Visit during shoulder season", "Eat at local thali joints"],
    howToReach: { byAir: "Dabolim Airport", byTrain: "Madgaon railway station", byRoad: "Overnight Volvo buses" },
    relatedBlogs: ["goa-budget-travel-guide"],
    seo: { metaTitle: "Goa Travel Guide 2024", metaDescription: "Complete Goa travel guide", keywords: ["goa travel"], ogImage: "https://images.unsplash.com/photo-1646748019039-e908f7e41282?w=1200&h=800&fit=crop&auto=format" },
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
    images: [{ url: "https://images.unsplash.com/photo-1678788166239-b28733f56956?w=1200&h=800&fit=crop&auto=format", alt: "Rishikesh Laxman Jhula", caption: "Lakshman Jhula, Rishikesh" }],
    budgetRange: { min: 1200, max: 2500 },
    budgetBreakdown: { accommodation: { min: 400, max: 800 }, food: { min: 200, max: 400 }, transport: { min: 100, max: 300 }, activities: { min: 500, max: 1500 } },
    bestSeasons: ["Spring", "Autumn", "Winter"],
    attractions: ["Laxman Jhula", "Ram Jhula", "Beatles Ashram", "Triveni Ghat", "Neer Garh Waterfall"],
    travelTips: ["Stay at an ashram", "Book rafting directly", "Attend free Ganga Aarti"],
    howToReach: { byAir: "Jolly Grant Airport", byTrain: "Haridwar Junction", byRoad: "Direct buses from Delhi" },
    relatedBlogs: ["rishikesh-budget-adventure-guide"],
    seo: { metaTitle: "Rishikesh Travel Guide 2024", metaDescription: "Complete Rishikesh budget guide", keywords: ["rishikesh travel"], ogImage: "https://images.unsplash.com/photo-1678788166239-b28733f56956?w=1200&h=800&fit=crop&auto=format" },
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
    images: [{ url: "https://images.unsplash.com/photo-1772533254933-ee692487aba2?w=1200&h=800&fit=crop&auto=format", alt: "Hawa Mahal in Jaipur", caption: "Hawa Mahal, Jaipur" }],
    budgetRange: { min: 1500, max: 2500 },
    budgetBreakdown: { accommodation: { min: 500, max: 1000 }, food: { min: 200, max: 400 }, transport: { min: 200, max: 400 }, activities: { min: 200, max: 500 } },
    bestSeasons: ["Winter", "Autumn", "Spring"],
    attractions: ["Amber Fort", "City Palace", "Hawa Mahal", "Jantar Mantar", "Nahargarh Fort"],
    travelTips: ["Buy composite ticket", "Bargain in bazaars", "Start early", "Use app-based autos"],
    howToReach: { byAir: "Jaipur International Airport", byTrain: "Jaipur Junction", byRoad: "RSRTC Volvo buses from Delhi" },
    relatedBlogs: ["jaipur-budget-heritage-walk"],
    seo: { metaTitle: "Jaipur Travel Guide 2024", metaDescription: "Complete Jaipur budget guide", keywords: ["jaipur travel"], ogImage: "https://images.unsplash.com/photo-1772533254933-ee692487aba2?w=1200&h=800&fit=crop&auto=format" },
    featured: true,
    published: true
  },
  {
    slug: "manali",
    name: "Manali",
    description: "Budget Himalayan hill station for snow views, cafes, and easy day trips in Himachal",
    longDescription: `<div id="quick-answer" class="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg mb-8"><h2 class="text-xl font-bold text-blue-800 mb-2">Quick Answer: Manali Budget Travel</h2><p class="text-blue-900">A budget trip to Manali costs <strong>₹1,400–₹3,000 per person per day</strong>. A 4-day trip costs <strong>₹7,000–₹15,000 total</strong>. Best time: March–June for mild weather, and December–February for snow (higher prices).</p></div><h2>Why Manali works for budget mountain travel</h2><p>Manali gives you mountains, riverside walks, viewpoints, and café culture with plenty of hostels and shared cabs—so you can keep costs under control.</p>`,
    state: "Himachal Pradesh",
    region: "North",
    category: "Mountains",
    images: [{ url: "https://images.unsplash.com/photo-1677821243506-0fa5cd8abdcb?w=1200&h=800&fit=crop&auto=format", alt: "Solang Valley snow in Manali", caption: "Solang Valley, Manali" }],
    budgetRange: { min: 1400, max: 3000 },
    budgetBreakdown: { accommodation: { min: 450, max: 1200 }, food: { min: 250, max: 600 }, transport: { min: 200, max: 600 }, activities: { min: 200, max: 800 } },
    bestSeasons: ["Spring", "Summer", "Winter"],
    attractions: ["Old Manali", "Hadimba Temple", "Solang Valley", "Atal Tunnel (day trip)", "Vashisht Hot Springs"],
    travelTips: ["Stay in Old Manali for budget hostels", "Share cabs for Solang/Atal Tunnel", "Carry layers—nights are cold"],
    howToReach: { byAir: "Bhuntar Airport (Kullu) + taxi/bus to Manali", byTrain: "Nearest major rail: Chandigarh (connect by bus)", byRoad: "Overnight Volvo buses from Delhi/Chandigarh" },
    relatedBlogs: ["manali-budget-trip-guide"],
    seo: { metaTitle: "Manali Budget Travel Guide 2024", metaDescription: "Manali budget guide with daily costs, best time, stays, food, and itinerary.", keywords: ["manali budget trip", "manali trip cost", "manali itinerary"], ogImage: "https://images.unsplash.com/photo-1677821243506-0fa5cd8abdcb?w=1200&h=800&fit=crop&auto=format" },
    featured: false,
    published: true
  },
  {
    slug: "kerala",
    name: "Kerala",
    description: "Backwaters, beaches, and hill stations—Kerala is ideal for slow, budget-friendly travel",
    longDescription: `<div id="quick-answer" class="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg mb-8"><h2 class="text-xl font-bold text-blue-800 mb-2">Quick Answer: Kerala Budget Travel</h2><p class="text-blue-900">A budget trip to Kerala costs <strong>₹1,500–₹3,500 per person per day</strong> depending on backwater stays and transfers. A 5-day trip costs <strong>₹9,000–₹20,000 total</strong>. Best time: October–March for pleasant weather.</p></div><h2>Why Kerala is great for AEO-friendly itineraries</h2><p>Kerala is easy to plan with clear clusters: Kochi (heritage), Alleppey (backwaters), Munnar (tea hills), and Varkala (beach). You can mix 2–3 bases and keep the schedule simple.</p>`,
    state: "Kerala",
    region: "South",
    category: "Nature",
    images: [{ url: "https://images.unsplash.com/photo-1720250581812-b6bbf0c05cd2?w=1200&h=800&fit=crop&auto=format", alt: "Alleppey houseboat in Kerala backwaters", caption: "Alleppey backwaters, Kerala" }],
    budgetRange: { min: 1500, max: 3500 },
    budgetBreakdown: { accommodation: { min: 500, max: 1400 }, food: { min: 250, max: 700 }, transport: { min: 300, max: 900 }, activities: { min: 200, max: 600 } },
    bestSeasons: ["Winter", "Autumn"],
    attractions: ["Fort Kochi", "Alleppey Backwaters", "Munnar Tea Gardens", "Varkala Cliff Beach", "Periyar (Thekkady)"],
    travelTips: ["Use trains for intercity travel", "Book backwater day cruise for budget option", "Stay 2 nights per base to reduce transfers"],
    howToReach: { byAir: "Kochi (COK) or Trivandrum (TRV) airports", byTrain: "Well-connected rail network across Kerala", byRoad: "Intercity buses + cabs for hill areas" },
    relatedBlogs: ["kerala-budget-backwaters-guide"],
    seo: { metaTitle: "Kerala Budget Travel Guide 2024 (Backwaters + Beaches)", metaDescription: "Kerala budget guide with daily costs, best time, routes, and a simple 5-day plan.", keywords: ["kerala budget trip", "kerala trip cost", "kerala itinerary 5 days"], ogImage: "https://images.unsplash.com/photo-1720250581812-b6bbf0c05cd2?w=1200&h=800&fit=crop&auto=format" },
    featured: false,
    published: true
  },
  {
    slug: "varanasi",
    name: "Varanasi",
    description: "India’s spiritual capital on the Ganga—ghats, temples, and sunrise boat rides",
    longDescription: `<div id="quick-answer" class="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg mb-8"><h2 class="text-xl font-bold text-blue-800 mb-2">Quick Answer: Varanasi Budget Travel</h2><p class="text-blue-900">A budget trip to Varanasi costs <strong>₹1,200–₹2,600 per person per day</strong>. A 3-day trip costs <strong>₹4,500–₹9,000 total</strong>. Best time: October–March.</p></div><h2>Why Varanasi is a high-intent travel search</h2><p>Most visitors search for clear answers: best ghats, Ganga Aarti timing, boat ride costs, and a short 2–3 day plan—perfect for AEO-style content.</p>`,
    state: "Uttar Pradesh",
    region: "North",
    category: "Heritage",
    images: [{ url: "https://images.unsplash.com/photo-1752733904669-8a2af6d349f3?w=1200&h=800&fit=crop&auto=format", alt: "Varanasi ghats on the Ganga", caption: "Varanasi ghats, Ganga riverfront" }],
    budgetRange: { min: 1200, max: 2600 },
    budgetBreakdown: { accommodation: { min: 400, max: 900 }, food: { min: 200, max: 450 }, transport: { min: 150, max: 400 }, activities: { min: 200, max: 600 } },
    bestSeasons: ["Winter", "Autumn"],
    attractions: ["Dashashwamedh Ghat", "Assi Ghat", "Sunrise Boat Ride", "Kashi Vishwanath Corridor", "Sarnath (day trip)"],
    travelTips: ["Book a shared boat at Assi for sunrise", "Walk the ghats early morning", "Stay near Assi for easy access"],
    howToReach: { byAir: "Lal Bahadur Shastri Airport (VNS)", byTrain: "Varanasi Junction / Manduadih", byRoad: "Buses and cabs from major UP cities" },
    relatedBlogs: ["varanasi-3-day-budget-itinerary"],
    seo: { metaTitle: "Varanasi Budget Travel Guide 2024 (2–3 Day Plan)", metaDescription: "Varanasi budget guide with costs, best ghats, boat rides, and a simple 3-day itinerary.", keywords: ["varanasi budget trip", "varanasi itinerary 3 days", "ganga aarti timing"], ogImage: "https://images.unsplash.com/photo-1752733904669-8a2af6d349f3?w=1200&h=800&fit=crop&auto=format" },
    featured: false,
    published: true
  },
  {
    slug: "ladakh",
    name: "Ladakh",
    description: "High-altitude deserts, monasteries, and epic road trips—best planned with a clear budget",
    longDescription: `<div id="quick-answer" class="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg mb-8"><h2 class="text-xl font-bold text-blue-800 mb-2">Quick Answer: Ladakh Budget Travel</h2><p class="text-blue-900">A budget trip to Ladakh costs <strong>₹2,800–₹6,500 per person per day</strong> depending on transport (shared taxis vs bike) and acclimatization days. A 7-day trip costs <strong>₹20,000–₹45,000 total</strong>. Best time: June–September.</p></div><h2>How to keep Ladakh affordable</h2><p>Use shared taxis for Nubra/Pangong, stay in guesthouses, and keep 1–2 acclimatization days in Leh to avoid costly health issues.</p>`,
    state: "Ladakh",
    region: "North",
    category: "Adventure",
    images: [{ url: "https://images.unsplash.com/photo-1606857090627-27ca46667290?w=1200&h=800&fit=crop&auto=format", alt: "Pangong Lake in Ladakh", caption: "Pangong Lake, Ladakh" }],
    budgetRange: { min: 2800, max: 6500 },
    budgetBreakdown: { accommodation: { min: 700, max: 1800 }, food: { min: 350, max: 900 }, transport: { min: 1200, max: 3200 }, activities: { min: 200, max: 600 } },
    bestSeasons: ["Summer"],
    attractions: ["Leh Market", "Shanti Stupa", "Nubra Valley", "Pangong Lake", "Magnetic Hill"],
    travelTips: ["Acclimatize 24–48 hours in Leh", "Prefer shared taxis for budget", "Carry basic medicines and layers"],
    howToReach: { byAir: "Leh Kushok Bakula Rimpochee Airport", byTrain: "Nearest railheads: Jammu/Chandigarh (then road)", byRoad: "Manali–Leh or Srinagar–Leh highways (seasonal)" },
    relatedBlogs: ["ladakh-budget-roadtrip-guide"],
    seo: { metaTitle: "Ladakh Budget Travel Guide 2024 (Leh, Nubra, Pangong)", metaDescription: "Ladakh budget guide with costs, itinerary, permits, and money-saving transport tips.", keywords: ["ladakh budget trip", "leh ladakh itinerary", "pangong nubra costs"], ogImage: "https://images.unsplash.com/photo-1606857090627-27ca46667290?w=1200&h=800&fit=crop&auto=format" },
    featured: false,
    published: true
  },
  {
    slug: "hampi",
    name: "Hampi",
    description: "UNESCO ruins, boulder landscapes, and sunrise viewpoints—best explored slowly on a budget",
    longDescription: `<div id="quick-answer" class="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg mb-8"><h2 class="text-xl font-bold text-blue-800 mb-2">Quick Answer: Hampi Budget Travel</h2><p class="text-blue-900">A budget trip to Hampi costs <strong>₹1,100–₹2,400 per person per day</strong>. A 2-day trip costs <strong>₹2,800–₹6,000 total</strong>. Best time: October–February.</p></div><h2>Why Hampi is perfect for short itineraries</h2><p>Hampi’s sites are clustered—Virupaksha area, Vittala Temple zone, and Hemakuta Hill—so you can cover highlights in 1–2 days with a simple plan.</p>`,
    state: "Karnataka",
    region: "South",
    category: "Heritage",
    images: [{ url: "https://images.unsplash.com/photo-1651569213711-b29d1fc3f995?w=1200&h=800&fit=crop&auto=format", alt: "Stone Chariot, Hampi", caption: "Stone Chariot, Hampi" }],
    budgetRange: { min: 1100, max: 2400 },
    budgetBreakdown: { accommodation: { min: 350, max: 900 }, food: { min: 200, max: 450 }, transport: { min: 150, max: 400 }, activities: { min: 150, max: 400 } },
    bestSeasons: ["Winter", "Autumn"],
    attractions: ["Virupaksha Temple", "Vittala Temple", "Stone Chariot", "Hemakuta Hill", "Anjaneya Hill (sunrise)"],
    travelTips: ["Rent a scooter/bicycle locally", "Start early for temples", "Carry water—midday heat is strong"],
    howToReach: { byAir: "Nearest major airport: Hubli / Bengaluru (then train/bus)", byTrain: "Hospet Junction (closest)", byRoad: "Buses from Bengaluru/Goa/Hyderabad" },
    relatedBlogs: ["hampi-2-day-budget-guide"],
    seo: { metaTitle: "Hampi Budget Travel Guide 2024 (2-Day Itinerary)", metaDescription: "Hampi budget guide with costs, must-see ruins, and an easy 2-day plan.", keywords: ["hampi budget trip", "hampi itinerary 2 days", "hampi ruins guide"], ogImage: "https://images.unsplash.com/photo-1651569213711-b29d1fc3f995?w=1200&h=800&fit=crop&auto=format" },
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