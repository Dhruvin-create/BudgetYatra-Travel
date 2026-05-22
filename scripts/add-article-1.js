const fs = require('fs');
let c = fs.readFileSync('src/lib/data/blogs.js', 'utf8');
const entry = {
  slug: 'budget-goa-trip-under-10000',
  title: 'Budget Goa Trip Under \u20b910,000 \u2014 Complete Travel Guide 2026',
  excerpt: 'Plan a complete budget Goa trip for under \u20b910,000 with hotels, food, transport, and sightseeing. Smart guide for backpackers in 2026.',
  published: true,
  content: '<div class="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg mb-8"><h2 class="text-xl font-bold text-blue-800 mb-2">Quick Answer: Budget Goa Trip Under \u20b910,000</h2><p class="text-blue-900">A 3\u20134 day budget Goa trip costs <strong>\u20b97,500\u2013\u20b910,000 per person</strong>. Train/bus \u20b91,500\u2013\u20b92,500, hostel \u20b91,200\u2013\u20b92,500, food \u20b91,000\u2013\u20b91,800, transport \u20b9800\u2013\u20b91,500, activities \u20b91,000\u2013\u20b91,500.</p></div><h2>How Much Does a Goa Trip Cost?</h2><p>A budget Goa trip for 3 to 4 days usually costs between \u20b97,500 and \u20b910,000 per person.</p><h2>Best Time for a Cheap Goa Trip</h2><p>Best budget months: July to September (Monsoon), February to April (Off-season), Early November. Hotel prices drop 30\u201350% in off-season.</p><h2>Best Cheap Goa Hotels</h2><p>Hostels \u20b9400\u2013\u20b9800/night. Guest Houses \u20b9700\u2013\u20b91,200/night. Budget Hotels \u20b91,200\u2013\u20b92,000/night. Best areas: Calangute, Anjuna, Vagator, Baga.</p><h2>Food Cost in Goa on a Budget</h2><p>Breakfast \u20b980\u2013\u20b9150, Lunch \u20b9150\u2013\u20b9250, Dinner \u20b9200\u2013\u20b9350. Full day food under \u20b9500 at local thali places.</p><h2>3-Day Goa Budget Itinerary</h2><ol><li>Day 1: Arrival, hostel check-in, Calangute Beach, Baga Beach evening</li><li>Day 2: Scooter rental, Anjuna, Vagator, Chapora Fort, Candolim sunset</li><li>Day 3: Local shopping, beach breakfast, return journey</li></ol>',
  featuredImage: { url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&h=600&fit=crop&auto=format', alt: 'Budget Goa beach trip under 10000', width: 1200, height: 600 },
  category: 'Beach',
  tags: ['goa', 'budget travel', 'beach', 'goa trip under 10000', 'cheap goa'],
  author: { name: 'Priya Sharma', bio: 'Budget travel expert.', avatar: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=0ea5e9&color=fff&size=120', social: { instagram: '@priya_travels', twitter: '@priyasharma' } },
  publishDate: '2026-04-01', updatedDate: '2026-04-01', readingTime: 8,
  budgetRange: { min: 1500, max: 3000 }, season: ['July','August','September','February','March','April'], destination: 'goa',
  seo: { metaTitle: 'Budget Goa Trip Under \u20b910,000 \u2014 Complete Travel Guide 2026', metaDescription: 'Plan a budget Goa trip for under \u20b910,000 with hotel, food, transport, and sightseeing. Complete cheap Goa travel guide for 2026.', keywords: ['budget goa trip','goa trip under 10000','cheap goa travel','budget goa hotels'], ogImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&h=600&fit=crop&auto=format' },
  tableOfContents: [{ id: 'quick-answer', title: 'Quick Answer', level: 2 }],
  faq: [{ question: 'Can I visit Goa under \u20b910,000?', answer: 'Yes, a 3\u20134 day Goa trip can easily be completed under \u20b910,000 with budget hotels and smart planning.' },{ question: 'Which is the cheapest area to stay in Goa?', answer: 'Anjuna, Calangute, Vagator, and Mapusa offer the best budget stays.' }]
};
const str = '  ' + JSON.stringify(entry, null, 2).split('\n').join('\n  ') + ',\n';
const idx = c.indexOf('export function getAllBlogs');
c = c.slice(0, idx) + str + '\n' + c.slice(idx);
fs.writeFileSync('src/lib/data/blogs.js', c, 'utf8');
console.log('Done. Total slugs:', (c.match(/slug:/g)||[]).length);
