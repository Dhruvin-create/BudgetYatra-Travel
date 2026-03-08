// Application configuration constants

export const SITE_CONFIG = {
  name: 'BudgetYatra',
  description: 'Budget-friendly travel destinations across India',
  url: 'https://budgetyatra.com',
  author: 'BudgetYatra Team',
  social: {
    facebook: 'https://facebook.com/budgetyatra',
    twitter: 'https://twitter.com/budgetyatra',
    instagram: 'https://instagram.com/budgetyatra',
    pinterest: 'https://pinterest.com/budgetyatra'
  }
};

export const SEASONS = ['Summer', 'Monsoon', 'Winter', 'Spring'];

export const BUDGET_RANGES = [
  { label: 'Under ₹2,000', min: 0, max: 2000 },
  { label: '₹2,000 - ₹5,000', min: 2000, max: 5000 },
  { label: '₹5,000 - ₹10,000', min: 5000, max: 10000 },
  { label: 'Above ₹10,000', min: 10000, max: 100000 }
];

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'Guide', href: '/guide' },
  { name: 'Calculator', href: '/calculator' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];
