const fs = require('fs');
let content = fs.readFileSync('src/lib/data/destinations.js', 'utf8');

// ---- GOA ----
content = content.replace(
  "seo: { metaTitle: 'Goa Travel Guide 2024', metaDescription: 'Complete Goa travel guide', keywords: ['goa travel'],",
  "seo: { metaTitle: 'Goa Trip Under 5000 Per Day 2026 \u2014 Best Time to Visit Goa on Budget', metaDescription: 'Complete Goa budget travel guide \u2014 Goa trip under 5000 per day, cheapest month to visit Goa, best time to visit Goa on budget, and 5-day itinerary.', keywords: ['goa trip under 5000 per day', 'best time to visit goa on budget', 'cheapest month to visit goa', 'goa budget travel 2026'],"
);

// ---- RISHIKESH ----
content = content.replace(
  "seo: { metaTitle: 'Rishikesh Travel Guide 2024', metaDescription: 'Complete Rishikesh budget guide', keywords: ['rishikesh travel'],",
  "seo: { metaTitle: 'Cheap Rishikesh Travel Guide 2026 \u2014 Rishikesh Haridwar Budget Itinerary', metaDescription: 'Complete cheap Rishikesh travel guide with Rishikesh Haridwar budget itinerary, Uttarakhand budget trip costs, and rafting prices. Updated 2026.', keywords: ['cheap rishikesh travel guide', 'rishikesh haridwar budget itinerary', 'uttarakhand budget trip', 'rishikesh rafting cost'],"
);

// ---- JAIPUR ----
content = content.replace(
  "seo: { metaTitle: 'Jaipur Travel Guide 2024', metaDescription: 'Complete Jaipur budget guide', keywords: ['jaipur travel'],",
  "seo: { metaTitle: 'Budget Jaipur Itinerary 3 Days 2026 \u2014 Family Trip & Romantic Destinations India', metaDescription: 'Complete budget Jaipur itinerary 3 days with costs, forts, food, and tips for budget family trip India and affordable family vacation India.', keywords: ['budget jaipur itinerary 3 days', 'budget family trip india', 'romantic destinations on a budget india', 'affordable family vacation india'],"
);

// ---- MANALI ----
content = content.replace(
  "seo: { metaTitle: 'Manali Budget Travel Guide 2024', metaDescription: 'Manali budget guide with daily costs, best time, stays, food, and itinerary.', keywords: ['manali budget trip', 'manali trip cost', 'manali itinerary'],",
  "seo: { metaTitle: 'Budget Manali Tour 2026 \u2014 Manali Shimla Budget Tour & Himachal Pradesh Trip', metaDescription: 'Complete budget Manali tour 2026 with Manali Shimla budget tour itinerary, Himachal Pradesh budget trip costs, and 4-day plan.', keywords: ['budget manali tour 2026', 'manali shimla budget tour', 'himachal pradesh budget trip', 'manali trip cost'],"
);

// ---- KERALA ----
content = content.replace(
  "seo: { metaTitle: 'Kerala Budget Travel Guide 2024 (Backwaters + Beaches)', metaDescription: 'Kerala budget guide with daily costs, best time, routes, and a simple 5-day plan.', keywords: ['kerala budget trip', 'kerala trip cost', 'kerala itinerary 5 days'],",
  "seo: { metaTitle: 'Cheap Kerala Backwater Trip 2026 \u2014 Best Time to Visit Kerala on Budget', metaDescription: 'Complete cheap Kerala backwater trip guide with best time to visit Kerala on budget, low season tips, and 5-day Kochi\u2013Alleppey\u2013Varkala route.', keywords: ['cheap kerala backwater trip', 'kerala trip in low season', 'best time to visit kerala on budget', 'kerala budget itinerary'],"
);

// ---- VARANASI ----
content = content.replace(
  "seo: { metaTitle: 'Varanasi Budget Travel Guide 2024 (2\u20133 Day Plan)', metaDescription: 'Varanasi budget guide with costs, best ghats, boat rides, and a simple 3-day itinerary.', keywords: ['varanasi budget trip', 'varanasi itinerary 3 days', 'ganga aarti timing'],",
  "seo: { metaTitle: 'Varanasi Budget Trip 2026 \u2014 3-Day Itinerary & India Budget Travel Tips', metaDescription: 'Varanasi 3-day budget itinerary with boat ride costs, ghat tips, and India budget travel tips for students. One of India\u2019s cheapest spiritual destinations.', keywords: ['varanasi 3 day budget itinerary', 'india budget travel tips', 'india budget travel for students', 'varanasi budget trip'],"
);

// ---- LADAKH ----
content = content.replace(
  "seo: { metaTitle: 'Ladakh Budget Travel Guide 2024 (Leh, Nubra, Pangong)', metaDescription: 'Ladakh budget guide with costs, itinerary, permits, and money-saving transport tips.', keywords: ['ladakh budget trip', 'leh ladakh itinerary', 'pangong nubra costs'],",
  "seo: { metaTitle: 'Ladakh Budget Trip 2026 \u2014 Ladakh Bike Trip Budget & India Road Trip Planner', metaDescription: 'Complete Ladakh budget trip 2026 with Ladakh bike trip budget, India budget road trip planner 7-day itinerary, Leh\u2013Nubra\u2013Pangong costs and tips.', keywords: ['ladakh budget trip', 'ladakh bike trip budget', 'india budget road trip planner', 'how to plan india road trip on budget'],"
);

// ---- HAMPI ----
content = content.replace(
  "seo: { metaTitle: 'Hampi Budget Travel Guide 2024 (2-Day Itinerary)', metaDescription: 'Hampi budget guide with costs, must-see ruins, and an easy 2-day plan.', keywords: ['hampi budget trip', 'hampi itinerary 2 days', 'hampi ruins guide'],",
  "seo: { metaTitle: 'Hampi Budget Travel 2026 \u2014 Cheap Cultural Destinations India & Budget Itineraries', metaDescription: 'Hampi budget travel guide 2026 \u2014 cheap cultural destinations India, budget travel India itineraries, 2-day Virupaksha\u2013Vittala plan with real costs.', keywords: ['cheap cultural destinations india', 'budget travel india itineraries', 'india budget travel tips', 'hampi budget trip'],"
);

fs.writeFileSync('src/lib/data/destinations.js', content, 'utf8');
console.log('Destinations SEO updated. Checking...');
console.log('Goa:', content.includes('goa trip under 5000 per day'));
console.log('Rishikesh:', content.includes('cheap rishikesh travel guide'));
console.log('Jaipur:', content.includes('budget jaipur itinerary 3 days'));
console.log('Manali:', content.includes('budget manali tour 2026'));
console.log('Kerala:', content.includes('cheap kerala backwater trip'));
console.log('Varanasi:', content.includes('varanasi 3 day budget itinerary'));
console.log('Ladakh:', content.includes('ladakh bike trip budget'));
console.log('Hampi:', content.includes('cheap cultural destinations india'));
