const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

function updateFile(relPath, replacements) {
  const filePath = path.join(root, relPath);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = 0;
  for (const [oldStr, newStr] of replacements) {
    if (content.includes(oldStr)) {
      content = content.split(oldStr).join(newStr);
      changed++;
      console.log(`  [OK] Replaced in ${relPath}: "${oldStr.substring(0, 60)}..."`);
    } else {
      console.log(`  [MISS] Not found in ${relPath}: "${oldStr.substring(0, 60)}..."`);
    }
  }
  if (changed > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  Saved ${relPath} (${changed} replacements)`);
  }
}

// 1. about/page.js
updateFile('src/app/about/page.js', [
  [
    "About BudgetYatra \u2014 India Budget Travel Blog & Guide",
    "About BudgetYatra \u2013 India Budget Travel Guides"
  ]
]);

// 2. blogs/page.js BASE_META title
updateFile('src/app/blogs/page.js', [
  [
    "India Budget Travel Blog \u2014 Tips & Guides | BudgetYatra",
    "India Budget Travel Blog & Guides | BudgetYatra"
  ]
]);

// 3. calculator/page.js
updateFile('src/app/calculator/page.js', [
  [
    "Budget Calculator India \u2014 Plan Your Trip Cost | BudgetYatra",
    "India Trip Budget Calculator | BudgetYatra"
  ]
]);

// 4. destinations/page.js BASE_META title
updateFile('src/app/destinations/page.js', [
  [
    "Budget Destinations India \u2014 Affordable Places to Visit | BudgetYatra",
    "Affordable Travel Destinations in India | BudgetYatra"
  ]
]);

// 5-12. blogs.js seo.metaTitle updates
updateFile('src/lib/data/blogs.js', [
  // jaipur
  [
    "Budget Jaipur Itinerary 3 Days 2026 \u2014 Family Trip & Romantic Destinations India",
    "Jaipur Budget Itinerary (3 Days) 2026 | BudgetYatra"
  ],
  // kerala
  [
    "Cheap Kerala Backwater Trip 2026 \u2014 Best Time to Visit Kerala on Budget",
    "Kerala Backwaters Budget Trip Guide 2026 | BudgetYatra"
  ],
  // manali
  [
    "Budget Manali Tour 2026 \u2014 Manali Shimla Budget Tour & Himachal Pradesh Trip",
    "Manali Budget Trip Guide 2026 | BudgetYatra"
  ],
  // varanasi
  [
    "Varanasi Budget Trip 2026: 3-Day Itinerary + India Budget Travel Tips",
    "Varanasi Budget Itinerary (3 Days) 2026 | BudgetYatra"
  ],
  // ladakh
  [
    "Ladakh Budget Trip 2026 \u2014 Ladakh Bike Trip Budget & India Road Trip Planner",
    "Ladakh Budget Road Trip Guide 2026 | BudgetYatra"
  ],
  // hampi
  [
    "Hampi Budget Travel 2026 \u2014 Cheap Cultural Destinations India & Budget Travel Itineraries",
    "Hampi Budget Travel Guide (2 Days) 2026 | BudgetYatra"
  ],
  // goa
  [
    "Goa Budget Travel Guide 2024: Complete Trip Under \u20b95,000/Day",
    "Goa Budget Travel Guide Under \u20b95000/Day | BudgetYatra"
  ],
  // rishikesh
  [
    "Cheap Rishikesh Travel Guide 2026 \u2014 Rishikesh Haridwar Budget Itinerary",
    "Rishikesh Budget Adventure Guide 2026 | BudgetYatra"
  ]
]);

// 13-20. destinations.js seo.metaTitle updates
updateFile('src/lib/data/destinations.js', [
  // goa
  [
    "Goa Trip Under 5000 Per Day 2026 \u2014 Best Time to Visit Goa on Budget",
    "Goa Budget Trip Under \u20b95000/Day 2026 | BudgetYatra"
  ],
  // rishikesh
  [
    "Cheap Rishikesh Travel Guide 2026 \u2014 Rishikesh Haridwar Budget Itinerary",
    "Rishikesh Budget Travel Guide 2026 | BudgetYatra"
  ],
  // jaipur
  [
    "Budget Jaipur Itinerary 3 Days 2026 \u2014 Family Trip & Romantic Destinations India",
    "Jaipur Budget Itinerary & Travel Guide 2026 | BudgetYatra"
  ],
  // manali
  [
    "Budget Manali Tour 2026 \u2014 Manali Shimla Budget Tour & Himachal Pradesh Trip",
    "Manali Budget Trip Guide 2026 | BudgetYatra"
  ],
  // kerala
  [
    "Cheap Kerala Backwater Trip 2026 \u2014 Best Time to Visit Kerala on Budget",
    "Kerala Budget Travel Guide 2026 | BudgetYatra"
  ],
  // varanasi
  [
    "Varanasi Budget Trip 2026 \u2014 3-Day Itinerary & India Budget Travel Tips",
    "Varanasi Budget Trip Guide 2026 | BudgetYatra"
  ],
  // ladakh
  [
    "Ladakh Budget Trip 2026 \u2014 Ladakh Bike Trip Budget & India Road Trip Planner",
    "Ladakh Budget Bike Trip Guide 2026 | BudgetYatra"
  ],
  // hampi
  [
    "Hampi Budget Travel 2026 \u2014 Cheap Cultural Destinations India & Budget Itineraries",
    "Hampi Budget Travel Guide 2026 | BudgetYatra"
  ]
]);

// 21. seoParams.js - getCategoryTitle and getQueryTitle and getSeasonTitle
updateFile('src/lib/utils/seoParams.js', [
  // getCategoryTitle - replace the entire function body
  [
    `function getCategoryTitle(pathname, category) {
  const map = {
    Beach: 'Budget Beach Travel India',
    Mountains: 'Budget Mountain Destinations India',
    Heritage: 'Budget Heritage Travel India',
    Adventure: 'Budget Adventure Travel India',
    Nature: 'Budget Nature Destinations India',
  };
  const page = pathname.includes('blogs') ? 'Guides' : pathname.includes('destinations') ? 'Destinations' : 'Guide';
  return \`\${map[category] || category} \${page} | BudgetYatra\`;
}`,
    `function getCategoryTitle(pathname, category) {
  if (pathname.includes('blogs')) {
    const map = {
      Heritage: 'Heritage Budget Travel Guides in India | BudgetYatra',
      Beach: 'Budget Beach Destinations in India | BudgetYatra',
      Mountains: 'Budget Mountain Destinations in India | BudgetYatra',
      Adventure: 'Adventure Budget Travel Guides India | BudgetYatra',
      Nature: 'Budget Nature Destinations in India | BudgetYatra',
    };
    return map[category] || \`Budget \${category} Travel Guides India | BudgetYatra\`;
  }
  const map = {
    Heritage: 'Heritage Budget Travel Guides in India | BudgetYatra',
    Beach: 'Budget Beach Destinations in India | BudgetYatra',
    Mountains: 'Budget Mountain Destinations in India | BudgetYatra',
    Adventure: 'Adventure Budget Travel Guides India | BudgetYatra',
    Nature: 'Budget Nature Destinations in India | BudgetYatra',
  };
  return map[category] || \`Budget \${category} Destinations India | BudgetYatra\`;
}`
  ],
  // getSeasonTitle
  [
    `function getSeasonTitle(season) {
  return \`Best Budget Travel Destinations in \${season} India | BudgetYatra\`;
}`,
    `function getSeasonTitle(season) {
  const map = {
    Winter: 'Best Winter Budget Destinations in India | BudgetYatra',
    June: 'Best Budget Destinations in India for June | BudgetYatra',
  };
  return map[season] || \`Best Budget Travel Destinations in \${season} India | BudgetYatra\`;
}`
  ],
  // getQueryTitle map entries - replace the map object
  [
    `    goa: 'Budget Travel Guide to Goa -- Cheap Trips & Hotels | BudgetYatra',
    rishikesh: 'Budget Travel Guide to Rishikesh -- Rafting & Adventure | BudgetYatra',
    jaipur: 'Budget Travel Guide to Jaipur -- Forts & Heritage | BudgetYatra',
    manali: 'Budget Travel Guide to Manali -- Mountains & Snow | BudgetYatra',
    kerala: 'Budget Travel Guide to Kerala -- Backwaters & Beaches | BudgetYatra',
    varanasi: 'Budget Travel Guide to Varanasi -- Ghats & Temples | BudgetYatra',
    ladakh: 'Budget Travel Guide to Ladakh -- Bike Trip & Road Trip | BudgetYatra',
    hampi: 'Budget Travel Guide to Hampi -- Ruins & Heritage | BudgetYatra',`,
    `    goa: 'Goa Budget Travel Guide & Cheap Hotels | BudgetYatra',
    rishikesh: 'Rishikesh Budget Adventure Guide | BudgetYatra',
    jaipur: 'Jaipur Budget Travel Guide & Forts | BudgetYatra',
    manali: 'Budget Travel Guide to Manali -- Mountains & Snow | BudgetYatra',
    kerala: 'Kerala Budget Travel Guide & Backwaters | BudgetYatra',
    varanasi: 'Varanasi Budget Travel Guide & Itinerary | BudgetYatra',
    ladakh: 'Ladakh Budget Travel Guide & Bike Trip | BudgetYatra',
    hampi: 'Hampi Budget Travel Guide | BudgetYatra',`
  ],
  // mountains, beach, heritage, adventure in getQueryTitle
  [
    `    mountains: 'Budget Mountain Travel India -- Hill Stations & Treks | BudgetYatra',
    beach: 'Budget Beach Travel India -- Coastal Destinations | BudgetYatra',
    heritage: 'Budget Heritage Travel India -- Forts, Temples & Culture | BudgetYatra',
    adventure: 'Budget Adventure Travel India -- Rafting, Trekking & More | BudgetYatra',`,
    `    mountains: 'Budget Mountain Travel Destinations India | BudgetYatra',
    beach: 'Budget Beach Destinations in India | BudgetYatra',
    heritage: 'Heritage Budget Travel Destinations India | BudgetYatra',
    adventure: 'Adventure Budget Travel in India | BudgetYatra',`
  ]
]);

console.log('\nAll updates complete!');