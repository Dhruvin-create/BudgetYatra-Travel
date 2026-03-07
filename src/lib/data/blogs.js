// Blog data access layer for BudgetYatra Travel Blog

const blogs = [
  {
    slug: "goa-budget-travel-guide",
    title: "Goa on a Budget: Complete Travel Guide for 2024",
    excerpt: "Discover how to explore Goa's beaches, nightlife, and culture without breaking the bank.",
    content: `Goa is one of India's most popular tourist destinations. With proper planning, you can enjoy a fantastic Goa vacation for ₹2000-3000 per day.`,
    featuredImage: {
      url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&h=800&fit=crop",
      alt: "Beautiful beach in Goa",
      width: 1200,
      height: 800
    },
    author: { name: "Priya Sharma", avatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=0ea5e9&color=fff" },
    publishDate: "2024-01-15T10:00:00Z",
    updatedDate: "2024-01-15T10:00:00Z",
    readingTime: 8,
    category: "Beach",
    tags: ["goa", "beach", "budget travel"],
    destination: "goa",
    budgetRange: { min: 2000, max: 3000 },
    season: ["Winter", "Monsoon"],
    seo: {
      metaTitle: "Goa Budget Travel Guide 2024",
      metaDescription: "Complete guide to exploring Goa on a budget",
      keywords: ["goa budget travel"],
      ogImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&h=800&fit=crop"
    },
    relatedArticles: ["rishikesh-adventure-guide"],
    views: 1250,
    published: true
  },
  {
    slug: "rishikesh-adventure-guide",
    title: "Rishikesh: The Ultimate Adventure Destination",
    excerpt: "From white-water rafting to bungee jumping, discover why Rishikesh is India's adventure capital.",
    content: `Rishikesh offers the best rafting experiences in India. Budget: ₹1500-4000 per day.`,
    featuredImage: {
      url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&h=800&fit=crop",
      alt: "Rishikesh adventure",
      width: 1200,
      height: 800
    },
    author: { name: "Rahul Verma", avatar: "https://ui-avatars.com/api/?name=Rahul+Verma&background=0ea5e9&color=fff" },
    publishDate: "2024-01-20T09:30:00Z",
    updatedDate: "2024-01-20T09:30:00Z",
    readingTime: 6,
    category: "Adventure",
    tags: ["rishikesh", "adventure", "rafting"],
    destination: "rishikesh",
    budgetRange: { min: 1500, max: 4000 },
    season: ["Spring", "Winter"],
    seo: {
      metaTitle: "Rishikesh Adventure Guide",
      metaDescription: "Complete guide to adventure activities in Rishikesh",
      keywords: ["rishikesh adventure"],
      ogImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&h=800&fit=crop"
    },
    relatedArticles: ["goa-budget-travel-guide"],
    views: 980,
    published: true
  },
  {
    slug: "jaipur-heritage-walk",
    title: "Walking Through History: A Heritage Tour of Jaipur",
    excerpt: "Explore the Pink City's magnificent forts, palaces, and bazaars on foot.",
    content: `Jaipur offers a perfect blend of royal heritage and vibrant culture. Budget: ₹1500-2500 per day.`,
    featuredImage: {
      url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&h=800&fit=crop",
      alt: "Jaipur palace",
      width: 1200,
      height: 800
    },
    author: { name: "Anjali Mehta", avatar: "https://ui-avatars.com/api/?name=Anjali+Mehta&background=0ea5e9&color=fff" },
    publishDate: "2024-02-01T11:00:00Z",
    updatedDate: "2024-02-01T11:00:00Z",
    readingTime: 7,
    category: "Heritage",
    tags: ["jaipur", "heritage", "rajasthan"],
    destination: "jaipur",
    budgetRange: { min: 1500, max: 2500 },
    season: ["Winter", "Spring"],
    seo: {
      metaTitle: "Jaipur Heritage Walk",
      metaDescription: "Explore Jaipur's forts and palaces",
      keywords: ["jaipur heritage"],
      ogImage: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&h=800&fit=crop"
    },
    relatedArticles: [],
    views: 1100,
    published: true
  },
  {
    slug: "manali-winter-wonderland",
    title: "Manali in Winter: A Snow Lover's Paradise",
    excerpt: "Experience the magic of snowfall in Manali.",
    content: `Manali transforms into a winter wonderland. Budget: ₹3000-5000 per day.`,
    featuredImage: {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
      alt: "Snow mountains",
      width: 1200,
      height: 800
    },
    author: { name: "Vikram Singh", avatar: "https://ui-avatars.com/api/?name=Vikram+Singh&background=0ea5e9&color=fff" },
    publishDate: "2024-02-10T08:00:00Z",
    updatedDate: "2024-02-10T08:00:00Z",
    readingTime: 6,
    category: "Adventure",
    tags: ["manali", "winter", "snow"],
    destination: "manali",
    budgetRange: { min: 3000, max: 5000 },
    season: ["Winter"],
    seo: {
      metaTitle: "Manali Winter Guide",
      metaDescription: "Complete guide to visiting Manali in winter",
      keywords: ["manali winter"],
      ogImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop"
    },
    relatedArticles: [],
    views: 1450,
    published: true
  },
  {
    slug: "kerala-backwaters-experience",
    title: "Cruising Kerala's Backwaters: A Budget Guide",
    excerpt: "Experience the serene beauty of Kerala's backwaters without spending a fortune.",
    content: `Kerala's backwaters offer a unique travel experience. Budget: ₹2000-4500 per day.`,
    featuredImage: {
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&h=800&fit=crop",
      alt: "Kerala backwaters",
      width: 1200,
      height: 800
    },
    author: { name: "Meera Nair", avatar: "https://ui-avatars.com/api/?name=Meera+Nair&background=0ea5e9&color=fff" },
    publishDate: "2024-02-15T10:30:00Z",
    updatedDate: "2024-02-15T10:30:00Z",
    readingTime: 7,
    category: "Nature",
    tags: ["kerala", "backwaters", "nature"],
    destination: "kerala",
    budgetRange: { min: 2000, max: 4500 },
    season: ["Winter", "Monsoon"],
    seo: {
      metaTitle: "Kerala Backwaters Budget Guide",
      metaDescription: "Explore Kerala's backwaters on a budget",
      keywords: ["kerala backwaters"],
      ogImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&h=800&fit=crop"
    },
    relatedArticles: [],
    views: 890,
    published: true
  }
];

export function getAllBlogs() {
  return blogs.filter(blog => blog.published);
}

export function getBlogBySlug(slug) {
  return blogs.find(blog => blog.slug === slug && blog.published);
}

export function getLatestBlogs(limit = 8) {
  return blogs
    .filter(blog => blog.published)
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
    .slice(0, limit);
}

export function getBlogsByCategory(category) {
  return blogs.filter(
    blog => blog.published && blog.category.toLowerCase() === category.toLowerCase()
  );
}

export function getBlogsByDestination(destinationSlug) {
  return blogs.filter(
    blog => blog.published && blog.destination === destinationSlug
  );
}
