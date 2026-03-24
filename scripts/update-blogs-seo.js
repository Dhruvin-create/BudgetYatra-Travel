const fs = require('fs');
let content = fs.readFileSync('src/lib/data/blogs.js', 'utf8');

// ---- LADAKH: title ----
content = content.replace(
  "title: 'Leh-Ladakh Budget Trip: 7-Day Plan + Costs (2024)'",
  "title: 'Ladakh Budget Trip 2026 \u2014 Ladakh Bike Trip Budget & India Road Trip Planner'"
);

// ---- LADAKH: excerpt ----
content = content.replace(
  "excerpt: 'A minimal Ladakh budget guide with a safe acclimatization-first itinerary and realistic daily costs.'",
  "excerpt: 'Complete Ladakh budget trip 2026 guide \u2014 Ladakh bike trip budget breakdown, India budget road trip planner tips, 7-day Leh\u2013Nubra\u2013Pangong itinerary with real costs.'"
);

// ---- LADAKH: content ----
const oldLadakhContent = "content: `<div id=\"quick-answer\" class=\"bg-slate-50 border-l-4 border-slate-500 p-5 rounded-lg mb-8\"><h2 class=\"text-xl font-bold text-slate-800 mb-2\">Quick Answer: Ladakh Budget</h2><p class=\"text-slate-900\">Ladakh costs <strong>\u20b92,800\u2013\u20b96,500/day</strong> mainly due to transport. A 7-day Ladakh trip typically costs <strong>\u20b920,000\u2013\u20b945,000 total</strong>. Best time: June\u2013September.</p></div><h2 id=\"rule\">Budget rule that saves money</h2><p><strong>Don't rush.</strong> Keep 1\u20132 acclimatization days in Leh so you don't lose money to illness or last-minute changes.</p><h2 id=\"7-day-plan\">Simple 7-day plan</h2><ol><li><strong>Day 1\u20132:</strong> Leh acclimatization</li><li><strong>Day 3:</strong> Nubra Valley</li><li><strong>Day 4:</strong> Nubra \u2192 Pangong</li><li><strong>Day 5:</strong> Pangong \u2192 Leh</li><li><strong>Day 6:</strong> Monasteries / local sightseeing</li><li><strong>Day 7:</strong> Buffer + depart</li></ol>`";

const newLadakhContent = "content: `<div id=\"quick-answer\" class=\"bg-slate-50 border-l-4 border-slate-500 p-5 rounded-lg mb-8\"><h2 class=\"text-xl font-bold text-slate-800 mb-2\">Quick Answer: Ladakh Budget Trip 2026</h2><p class=\"text-slate-900\">A Ladakh budget trip costs <strong>\u20b92,800\u2013\u20b96,500/day</strong> mainly due to transport. A 7-day trip costs <strong>\u20b920,000\u2013\u20b945,000 total</strong>. Ladakh bike trip budget: \u20b925,000\u2013\u20b950,000 for 7\u201310 days including bike rental (\u20b91,200\u2013\u20b92,500/day). Best time: June\u2013September.</p></div><h2>Ladakh Bike Trip Budget: Complete Cost Breakdown</h2><p>A Ladakh bike trip is the most iconic India road trip \u2014 and with smart planning, it is manageable on a budget. Here is a realistic Ladakh bike trip budget for 7 days:</p><ul><li><strong>Bike rental (Royal Enfield 350):</strong> \u20b91,200\u2013\u20b92,000/day = \u20b98,400\u2013\u20b914,000 for 7 days</li><li><strong>Fuel (Manali\u2013Leh route, ~500 km):</strong> \u20b92,500\u2013\u20b94,000 total</li><li><strong>Accommodation (guesthouses):</strong> \u20b9600\u2013\u20b91,500/night</li><li><strong>Food:</strong> \u20b9350\u2013\u20b9700/day</li><li><strong>Permits (ILP for non-Ladakhi):</strong> \u20b9400\u2013\u20b9600 total</li><li><strong>Total Ladakh bike trip budget (7 days):</strong> \u20b925,000\u2013\u20b945,000 per person</li></ul><h2>India Budget Road Trip Planner: 7-Day Ladakh Itinerary</h2><p>This India budget road trip planner covers the classic Leh\u2013Nubra\u2013Pangong circuit \u2014 the most popular Ladakh route for both bikers and shared taxi travellers.</p><ol><li><strong>Day 1\u20132 \u2014 Leh Acclimatization:</strong> Do NOT rush. Walk Leh market, Shanti Stupa, Leh Palace. Altitude sickness can ruin your trip and cost money. Guesthouse \u20b9700\u2013\u20b91,200/night.</li><li><strong>Day 3 \u2014 Leh to Nubra Valley:</strong> Cross Khardung La. Hunder sand dunes + double-hump camel ride (\u20b9300). Guesthouse in Hunder \u20b9800\u2013\u20b91,500.</li><li><strong>Day 4 \u2014 Nubra to Pangong Lake:</strong> Shyok Valley route (5\u20136 hrs). Pangong campsite \u20b91,000\u2013\u20b92,000/night. Sunset at the lake \u2014 free.</li><li><strong>Day 5 \u2014 Pangong to Leh:</strong> Morning at the lake. Return via Chang La pass. Monastery visit en route.</li><li><strong>Day 6 \u2014 Monasteries Day:</strong> Thiksey, Hemis, Shey monasteries (\u20b950\u2013\u20b9100 entry each). Magnetic Hill (free).</li><li><strong>Day 7 \u2014 Buffer + Depart:</strong> Always keep a buffer day \u2014 weather and road conditions can change plans.</li></ol><h2 id=\"rule\">Budget rule that saves money</h2><p><strong>Don't rush.</strong> Keep 1\u20132 acclimatization days in Leh. Shared taxis (\u20b9400\u2013\u20b9800/seat) are 60\u201370% cheaper than private cabs for Nubra and Pangong.</p>`";

if (content.includes("content: `<div id=\"quick-answer\" class=\"bg-slate-50 border-l-4 border-slate-500 p-5 rounded-lg mb-8\"><h2 class=\"text-xl font-bold text-slate-800 mb-2\">Quick Answer: Ladakh Budget</h2>")) {
  content = content.replace(
    "content: `<div id=\"quick-answer\" class=\"bg-slate-50 border-l-4 border-slate-500 p-5 rounded-lg mb-8\"><h2 class=\"text-xl font-bold text-slate-800 mb-2\">Quick Answer: Ladakh Budget</h2><p class=\"text-slate-900\">Ladakh costs <strong>\u20b92,800\u2013\u20b96,500/day</strong> mainly due to transport. A 7-day Ladakh trip typically costs <strong>\u20b920,000\u2013\u20b945,000 total</strong>. Best time: June\u2013September.</p></div><h2 id=\"rule\">Budget rule that saves money</h2><p><strong>Don't rush.</strong> Keep 1\u20132 acclimatization days in Leh so you don't lose money to illness or last-minute changes.</p><h2 id=\"7-day-plan\">Simple 7-day plan</h2><ol><li><strong>Day 1\u20132:</strong> Leh acclimatization</li><li><strong>Day 3:</strong> Nubra Valley</li><li><strong>Day 4:</strong> Nubra \u2192 Pangong</li><li><strong>Day 5:</strong> Pangong \u2192 Leh</li><li><strong>Day 6:</strong> Monasteries / local sightseeing</li><li><strong>Day 7:</strong> Buffer + depart</li></ol>`",
    newLadakhContent
  );
  console.log('Ladakh content replaced');
} else {
  console.log('Ladakh content NOT found - checking raw...');
}

// ---- LADAKH: seo ----
content = content.replace(
  "metaTitle: 'Leh Ladakh Budget Trip 2024: 7-Day Itinerary + Costs'",
  "metaTitle: 'Ladakh Budget Trip 2026 \u2014 Ladakh Bike Trip Budget & India Road Trip Planner'"
);
content = content.replace(
  "metaDescription: 'Ladakh budget guide with daily costs, a safe 7-day itinerary, and transport tips for Leh, Nubra, and Pangong.'",
  "metaDescription: 'Complete Ladakh budget trip 2026 with Ladakh bike trip budget, India budget road trip planner 7-day itinerary, Leh\u2013Nubra\u2013Pangong costs and tips.'"
);
content = content.replace(
  "keywords: ['ladakh budget trip', 'leh ladakh itinerary 7 days', 'pangong nubra costs', 'ladakh shared taxi']",
  "keywords: ['ladakh budget trip', 'ladakh bike trip budget', 'india budget road trip planner', 'how to plan india road trip on budget']"
);

// ---- LADAKH: faq ----
content = content.replace(
  "faq: [\n      { question: 'Why is Ladakh expensive compared to other destinations?', answer: 'Transport (shared taxis/bike rentals) and remote logistics increase costs more than food or stays.' }\n    ]",
  "faq: [\n      { question: 'What is the total Ladakh bike trip budget for 7 days?', answer: 'A Ladakh bike trip budget for 7 days is \u20b925,000\u2013\u20b945,000 per person. This includes Royal Enfield rental (\u20b91,200\u2013\u20b92,000/day), fuel (\u20b92,500\u2013\u20b94,000), guesthouses (\u20b9600\u2013\u20b91,500/night), food (\u20b9350\u2013\u20b9700/day), and permits (\u20b9400\u2013\u20b9600). Shared taxi travellers can do the same trip for \u20b920,000\u2013\u20b935,000.' },\n      { question: 'How to plan an India budget road trip to Ladakh?', answer: 'For an India budget road trip to Ladakh: (1) Fly to Leh (cheapest flights from Delhi \u20b93,000\u2013\u20b96,000 if booked 6 weeks ahead), (2) Acclimatize 2 days in Leh, (3) Use shared taxis for Nubra (\u20b9400\u2013\u20b9600/seat) and Pangong (\u20b9500\u2013\u20b9800/seat), (4) Stay in guesthouses not hotels, (5) Carry cash \u2014 ATMs are unreliable beyond Leh.' },\n      { question: 'What is the best time for a Ladakh budget trip?', answer: 'June\u2013September is the only viable window for a Ladakh budget trip \u2014 roads are open, weather is stable, and all attractions are accessible. July\u2013August is peak season with slightly higher prices. June and September offer the best value with fewer crowds and 10\u201320% lower accommodation rates.' },\n      { question: 'Is Ladakh safe for solo bike trips on a budget?', answer: 'Yes, but preparation is key. Rent a well-maintained Royal Enfield from a reputable Leh shop (\u20b91,200\u2013\u20b92,000/day with insurance). Carry a basic toolkit, extra fuel for remote stretches, and travel with at least one other biker. Solo bikers should share their itinerary with their guesthouse daily.' }\n    ]"
);

// ---- HAMPI: title ----
content = content.replace(
  "title: 'Hampi Budget Travel: 2-Day Itinerary + Costs (2024)'",
  "title: 'Hampi Budget Travel Itineraries \u2014 India Budget Travel Tips & Cheap Cultural Destinations India (2026)'"
);

// ---- HAMPI: excerpt ----
content = content.replace(
  "excerpt: 'Cover Hampi\u2019s top ruins with a simple 2-day plan, budget stays, and scooter/bicycle tips.'",
  "excerpt: 'Hampi budget travel itineraries with India budget travel tips, cheap cultural destinations India guide, and a 2-day Virupaksha\u2013Vittala plan with real costs.'"
);

// ---- HAMPI: content ----
const oldHampiContent = "content: `<div id=\"quick-answer\" class=\"bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-lg mb-8\"><h2 class=\"text-xl font-bold text-indigo-800 mb-2\">Quick Answer: Hampi Budget</h2><p class=\"text-indigo-900\">Hampi costs <strong>\u20b91,100\u2013\u20b92,400/day</strong>. A 2-day Hampi trip can be done for <strong>\u20b92,800\u2013\u20b96,000 total</strong>. Best time: October\u2013February.</p></div><h2 id=\"plan\">Simple 2-day plan</h2><ol><li><strong>Day 1:</strong> Virupaksha area + Hemakuta sunset</li><li><strong>Day 2:</strong> Vittala Temple + Stone Chariot + river crossing</li></ol><h2 id=\"tips\">Budget tips</h2><ul><li>Rent a scooter or bicycle</li><li>Start early to avoid heat and crowds</li><li>Stay near the main bazaar for walkability</li></ul>`";
const newHampiContent = "content: `<div id=\"quick-answer\" class=\"bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-lg mb-8\"><h2 class=\"text-xl font-bold text-indigo-800 mb-2\">Quick Answer: Hampi Budget Travel</h2><p class=\"text-indigo-900\">Hampi costs <strong>\u20b91,100\u2013\u20b92,400/day</strong>. A 2-day Hampi trip can be done for <strong>\u20b92,800\u2013\u20b96,000 total</strong>. Hampi is one of the best cheap cultural destinations India has \u2014 UNESCO World Heritage ruins, boulder landscapes, and sunrise viewpoints all for under \u20b9200 in entry fees. Best time: October\u2013February.</p></div><h2>Cheap Cultural Destinations India: Why Hampi Tops the List</h2><p>Hampi is arguably the best cheap cultural destination in India. The entire UNESCO World Heritage site costs just \u20b940\u2013\u20b9100 to enter. Compare this to Agra (\u20b91,100 for Taj Mahal) or Jaipur (\u20b9200+ per fort) \u2014 Hampi gives you more ruins per rupee than anywhere else in India. A 2-day Hampi trip covers 3 major temple zones, 2 viewpoints, and a river crossing for under \u20b96,000 total.</p><h2>Budget Travel India Itineraries: Hampi 2-Day Plan</h2><ol><li><strong>Day 1 \u2014 Virupaksha Zone:</strong> Virupaksha Temple (free entry, \u20b910 camera fee), Hemakuta Hill temples (free), Matanga Hill sunrise (\u20b90). Lunch at local dhaba near bazaar (\u20b980\u2013\u20b9150). Evening: Hemakuta sunset. Guesthouse near bazaar \u20b9400\u2013\u20b9900/night.</li><li><strong>Day 2 \u2014 Vittala Zone:</strong> Vittala Temple + Stone Chariot (\u20b940 Indian entry). Hazara Rama Temple (free). River crossing by coracle (\u20b930\u2013\u20b950). Anjaneya Hill for sunset views. Depart evening or next morning.</li></ol><h2 id=\"tips\">India Budget Travel Tips for Hampi</h2><ul><li>Rent a scooter (\u20b9300\u2013\u20b9400/day) or bicycle (\u20b9100\u2013\u20b9150/day) \u2014 sites are spread over 26 sq km</li><li>Start by 7 AM to beat the heat and get best light for photos</li><li>Stay near Virupaksha Bazaar (main side) or Virupapur Gadde (hippie island, quieter)</li><li>Carry water and snacks \u2014 food stalls near Vittala are limited and overpriced</li></ul>`";

content = content.replace(oldHampiContent, newHampiContent);

// ---- HAMPI: seo ----
content = content.replace(
  "metaTitle: 'Hampi Budget Trip 2024: 2-Day Itinerary + Costs'",
  "metaTitle: 'Hampi Budget Travel 2026 \u2014 Cheap Cultural Destinations India & Budget Travel Itineraries'"
);
content = content.replace(
  "metaDescription: 'Hampi budget guide with a simple 2-day itinerary, must-see ruins, and daily cost breakdown.'",
  "metaDescription: 'Hampi budget travel guide 2026 \u2014 cheap cultural destinations India, budget travel India itineraries, 2-day Virupaksha\u2013Vittala plan with real costs.'"
);
content = content.replace(
  "keywords: ['hampi itinerary 2 days', 'hampi budget trip', 'hampi ruins guide', 'hospet to hampi']",
  "keywords: ['cheap cultural destinations india', 'budget travel india itineraries', 'india budget travel tips', 'hampi budget trip']"
);

// ---- HAMPI: faq ----
content = content.replace(
  "faq: [\n      { question: 'Can you cover Hampi in 2 days?', answer: 'Yes\u2014Hampi\u2019s highlights are clustered, so a focused 2-day plan covers the main temple zones and viewpoints.' }\n    ]",
  "faq: [\n      { question: 'Is Hampi one of the cheapest cultural destinations in India?', answer: 'Yes \u2014 Hampi is one of the best cheap cultural destinations India offers. The entire UNESCO World Heritage site costs \u20b940\u2013\u20b9100 to enter. A full 2-day trip including accommodation, food, transport, and entry fees costs just \u20b92,800\u2013\u20b96,000 per person \u2014 far cheaper than Agra, Jaipur, or Khajuraho.' },\n      { question: 'What are the best budget travel India itineraries that include Hampi?', answer: 'Hampi fits perfectly into South India budget travel itineraries. Popular routes: (1) Bengaluru\u2013Hampi\u2013Goa (7\u201310 days, \u20b912,000\u2013\u20b920,000), (2) Hyderabad\u2013Hampi\u2013Mysore (7 days, \u20b910,000\u2013\u20b918,000), (3) Hampi solo weekend trip from Bengaluru (2 days, \u20b93,500\u2013\u20b96,000). Overnight buses from Bengaluru cost \u20b9400\u2013\u20b9700.' },\n      { question: 'Can you cover Hampi in 2 days?', answer: 'Yes \u2014 Hampi highlights are clustered into 3 zones: Virupaksha area (Day 1 morning), Hemakuta Hill (Day 1 evening), and Vittala Temple zone (Day 2). A focused 2-day plan with a scooter or bicycle covers all major ruins, 2 viewpoints, and the river crossing comfortably.' },\n      { question: 'What are the top India budget travel tips for visiting Hampi?', answer: 'Key India budget travel tips for Hampi: (1) Take an overnight bus from Bengaluru (\u20b9400\u2013\u20b9700) to save a hotel night, (2) Rent a bicycle (\u20b9100\u2013\u20b9150/day) for short distances, (3) Eat at local dhabas near Virupaksha Bazaar (\u20b980\u2013\u20b9150/meal), (4) Stay on the hippie island (Virupapur Gadde) for cheaper guesthouses (\u20b9350\u2013\u20b9700/night), (5) Visit Vittala Temple early morning to avoid crowds and heat.' }\n    ]"
);

fs.writeFileSync('src/lib/data/blogs.js', content, 'utf8');
console.log('All updates applied. Checking...');
console.log('Ladakh title:', content.includes('Ladakh Budget Trip 2026'));
console.log('Ladakh bike trip budget:', content.includes('Ladakh bike trip budget breakdown'));
console.log('Hampi title:', content.includes('Hampi Budget Travel Itineraries'));
console.log('Hampi cheap cultural:', content.includes('Cheap Cultural Destinations India'));
