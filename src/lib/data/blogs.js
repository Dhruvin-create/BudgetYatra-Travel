// Blog data and utility functions for BudgetYatra

const blogs = [
  {
    slug: 'goa-budget-travel-guide',
    title: 'Complete Goa Budget Travel Guide 2024',
    excerpt: 'Discover the best of Goa without breaking the bank. Complete guide with budget breakdown, hidden gems, and money-saving tips.',
    content: `<h2 id="introduction">Introduction to Budget Travel in Goa</h2><p>Goa, India's smallest state, is a paradise for budget travelers.</p>`,
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&h=600&fit=crop',
      alt: 'Beautiful Goa beach with palm trees'
    },
    category: 'Beach',
    tags: ['goa', 'beach', 'budget travel', 'backpacking', 'india'],
    author: {
      name: 'Priya Sharma',
      bio: 'Travel blogger and budget travel expert with 5+ years of exploring India',
      avatar: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=0ea5e9&color=fff&size=120',
      social: { instagram: '@priya_travels', twitter: '@priyasharma' }
    },
    publishDate: '2024-01-15',
    updatedDate: '2024-03-01',
    readingTime: 8,
    budgetRange: { min: 1500, max: 3000 },
    season: ['October', 'November', 'December', 'January', 'February'],
    destination: 'goa',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction to Budget Travel in Goa', level: 2 }
    ],
    faq: [
      {
        question: 'What is the best time to visit Goa on a budget?',
        answer: 'The monsoon season (June-September) offers the cheapest rates, but October-February is ideal for weather.'
      }
    ]
  }
];

export function getAllBlogs() {
  return blogs;
}

export function getLatestBlogs(limit = 10) {
  return blogs.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate)).slice(0, limit);
}

export function getBlogsByCategory(category, limit = 10) {
  return blogs.filter(blog => blog.category.toLowerCase() === category.toLowerCase()).slice(0, limit);
}

export function getBlogBySlug(slug) {
  return blogs.find(blog => blog.slug === slug);
}

export function getRelatedBlogs(currentSlug, limit = 4) {
  const currentBlog = getBlogBySlug(currentSlug);
  if (!currentBlog) return [];
  return blogs.filter(blog => blog.slug !== currentSlug && blog.category === currentBlog.category).slice(0, limit);
}

export function getBlogsByDestination(destination, limit = 10) {
  return blogs.filter(blog => blog.destination && blog.destination.toLowerCase() === destination.toLowerCase()).slice(0, limit);
}
// Add more comprehensive blog data
blogs.push(
  {
    slug: 'ladakh-budget-adventure-guide',
    title: 'Ladakh Budget Adventure Guide: Complete Travel Plan',
    excerpt: 'Experience the magic of Ladakh without spending a fortune. Detailed guide with budget breakdown, best routes, and essential tips.',
    content: `<h2 id="introduction">Introduction to Budget Travel in Ladakh</h2><p>Ladakh, the "Land of High Passes," offers some of the most spectacular landscapes in India.</p><h2 id="budget-breakdown">Detailed Budget Breakdown</h2><p>Plan your Ladakh trip with these budget estimates.</p>`,
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
      alt: 'Ladakh mountain landscape with prayer flags'
    },
    category: 'Adventure',
    tags: ['ladakh', 'mountains', 'adventure', 'buddhism', 'himalayas'],
    author: {
      name: 'Rahul Verma',
      bio: 'Adventure travel enthusiast and mountain lover with extensive Himalayan experience',
      avatar: 'https://ui-avatars.com/api/?name=Rahul+Verma&background=10b981&color=fff&size=120',
      social: { instagram: '@rahul_adventures', twitter: '@rahulverma' }
    },
    publishDate: '2024-02-01',
    updatedDate: '2024-03-05',
    readingTime: 10,
    budgetRange: { min: 2000, max: 4000 },
    season: ['May', 'June', 'July', 'August', 'September'],
    destination: 'ladakh',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction to Budget Travel in Ladakh', level: 2 },
      { id: 'budget-breakdown', title: 'Detailed Budget Breakdown', level: 2 }
    ],
    faq: [
      {
        question: 'When is the best time to visit Ladakh?',
        answer: 'May to September is the best time when roads are open and weather is favorable.'
      }
    ]
  },
  {
    slug: 'rajasthan-heritage-budget-tour',
    title: 'Rajasthan Heritage Tour on a Budget: Royal Experience for Less',
    excerpt: 'Explore the royal heritage of Rajasthan without the royal price tag. Complete guide to budget travel in the land of kings.',
    content: `<h2 id="introduction">Introduction to Budget Heritage Travel in Rajasthan</h2><p>Rajasthan, the "Land of Kings," is a treasure trove of magnificent palaces, ancient forts, and vibrant culture.</p>`,
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&h=600&fit=crop',
      alt: 'Rajasthan palace architecture with intricate details'
    },
    category: 'Heritage',
    tags: ['rajasthan', 'heritage', 'palaces', 'forts', 'culture'],
    author: {
      name: 'Anjali Mehta',
      bio: 'Heritage travel specialist and cultural enthusiast exploring India\'s royal past',
      avatar: 'https://ui-avatars.com/api/?name=Anjali+Mehta&background=f59e0b&color=fff&size=120',
      social: { instagram: '@anjali_heritage', twitter: '@anjalimehta' }
    },
    publishDate: '2024-01-20',
    updatedDate: '2024-02-28',
    readingTime: 9,
    budgetRange: { min: 1800, max: 3500 },
    season: ['October', 'November', 'December', 'January', 'February', 'March'],
    destination: 'rajasthan',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction to Budget Heritage Travel in Rajasthan', level: 2 }
    ],
    faq: [
      {
        question: 'What is the best time to visit Rajasthan?',
        answer: 'October to March is ideal with pleasant weather. Avoid summer months due to extreme heat.'
      }
    ]
  },
  {
    slug: 'kerala-backwaters-budget-guide',
    title: 'Kerala Backwaters Budget Guide: God\'s Own Country for Less',
    excerpt: 'Experience Kerala\'s serene backwaters, lush landscapes, and rich culture without overspending. Complete budget travel guide.',
    content: `<h2 id="introduction">Introduction to Budget Travel in Kerala</h2><p>Kerala, known as "God's Own Country," offers a perfect blend of backwaters, beaches, hill stations, and cultural experiences.</p>`,
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&h=600&fit=crop',
      alt: 'Kerala backwaters with traditional houseboat'
    },
    category: 'Nature',
    tags: ['kerala', 'backwaters', 'nature', 'culture', 'ayurveda'],
    author: {
      name: 'Suresh Kumar',
      bio: 'Kerala native and sustainable tourism advocate sharing local insights',
      avatar: 'https://ui-avatars.com/api/?name=Suresh+Kumar&background=16a34a&color=fff&size=120',
      social: { instagram: '@suresh_kerala', twitter: '@sureshkumar' }
    },
    publishDate: '2024-02-10',
    updatedDate: '2024-03-08',
    readingTime: 7,
    budgetRange: { min: 1600, max: 3200 },
    season: ['October', 'November', 'December', 'January', 'February'],
    destination: 'kerala',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction to Budget Travel in Kerala', level: 2 }
    ],
    faq: [
      {
        question: 'What is the best time to visit Kerala?',
        answer: 'October to March offers pleasant weather. Monsoon season is cheaper but expect heavy rains.'
      }
    ]
  }
);
// Add more diverse destinations
blogs.push(
  {
    slug: 'manali-budget-adventure-complete-guide',
    title: 'Manali Budget Adventure: Complete Guide to Himalayan Paradise',
    excerpt: 'Discover Manali\'s snow-capped peaks, adventure sports, and mountain culture without breaking the bank.',
    content: `<h2 id="introduction">Introduction to Budget Travel in Manali</h2><p>Manali, nestled in the Himalayas, is a perfect destination for budget travelers seeking adventure.</p>`,
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&h=600&fit=crop',
      alt: 'Manali mountain landscape with snow peaks'
    },
    category: 'Adventure',
    tags: ['manali', 'himalayas', 'adventure', 'trekking', 'mountains'],
    author: {
      name: 'Vikram Singh',
      bio: 'Mountain guide and adventure enthusiast with 8+ years in Himachal Pradesh',
      avatar: 'https://ui-avatars.com/api/?name=Vikram+Singh&background=dc2626&color=fff&size=120',
      social: { instagram: '@vikram_mountains', twitter: '@vikramsingh' }
    },
    publishDate: '2024-01-25',
    updatedDate: '2024-03-02',
    readingTime: 8,
    budgetRange: { min: 1400, max: 2800 },
    season: ['March', 'April', 'May', 'September', 'October', 'November'],
    destination: 'manali',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction to Budget Travel in Manali', level: 2 }
    ],
    faq: [
      {
        question: 'When is the best time to visit Manali?',
        answer: 'March-June for pleasant weather, December-February for snow. Avoid monsoon season.'
      }
    ]
  },
  {
    slug: 'rishikesh-yoga-budget-guide',
    title: 'Rishikesh Yoga & Adventure Budget Guide: Spiritual Journey for Less',
    excerpt: 'Experience the yoga capital of the world and adventure sports hub without overspending.',
    content: `<h2 id="introduction">Introduction to Budget Travel in Rishikesh</h2><p>Rishikesh, the "Yoga Capital of the World," offers spiritual experiences and adventure sports.</p>`,
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&h=600&fit=crop',
      alt: 'Rishikesh Ganges river with suspension bridge'
    },
    category: 'Spiritual',
    tags: ['rishikesh', 'yoga', 'spirituality', 'adventure', 'ganges'],
    author: {
      name: 'Maya Patel',
      bio: 'Certified yoga instructor and spiritual travel guide with deep knowledge of Rishikesh',
      avatar: 'https://ui-avatars.com/api/?name=Maya+Patel&background=7c3aed&color=fff&size=120',
      social: { instagram: '@maya_yoga', twitter: '@mayapatel' }
    },
    publishDate: '2024-02-05',
    updatedDate: '2024-03-10',
    readingTime: 6,
    budgetRange: { min: 1200, max: 2400 },
    season: ['September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'],
    destination: 'rishikesh',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction to Budget Travel in Rishikesh', level: 2 }
    ],
    faq: [
      {
        question: 'Can I learn yoga in Rishikesh as a beginner?',
        answer: 'Absolutely! Rishikesh offers classes for all levels. Many ashrams provide beginner-friendly courses.'
      }
    ]
  },
  {
    slug: 'hampi-budget-heritage-guide',
    title: 'Hampi Budget Heritage Guide: Ancient Ruins and Royal History',
    excerpt: 'Explore the magnificent ruins of Vijayanagara Empire in Hampi without spending a fortune.',
    content: `<h2 id="introduction">Introduction to Budget Travel in Hampi</h2><p>Hampi, a UNESCO World Heritage Site, is home to the ruins of the magnificent Vijayanagara Empire.</p>`,
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&h=600&fit=crop',
      alt: 'Hampi stone chariot and ancient temple ruins'
    },
    category: 'Heritage',
    tags: ['hampi', 'heritage', 'unesco', 'temples', 'history'],
    author: {
      name: 'Dr. Ravi Krishnan',
      bio: 'Archaeologist and heritage tourism expert specializing in South Indian history',
      avatar: 'https://ui-avatars.com/api/?name=Ravi+Krishnan&background=ea580c&color=fff&size=120',
      social: { instagram: '@ravi_heritage', twitter: '@ravikrishnan' }
    },
    publishDate: '2024-01-30',
    updatedDate: '2024-03-05',
    readingTime: 7,
    budgetRange: { min: 1000, max: 2000 },
    season: ['October', 'November', 'December', 'January', 'February'],
    destination: 'hampi',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction to Budget Travel in Hampi', level: 2 }
    ],
    faq: [
      {
        question: 'How many days are needed to explore Hampi?',
        answer: '2-3 days are sufficient to see major sites. History enthusiasts might want 4-5 days.'
      }
    ]
  }
);