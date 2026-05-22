import { getAllBlogs } from '@/lib/data/blogs';
import { getAllDestinations } from '@/lib/data/destinations';

const SITE_URL = 'https://budgetyatra.online';

// High-intent category/season pages to include in sitemap
const INDEXABLE_CATEGORY_PAGES = [
  { path: '/blogs?category=Beach', changefreq: 'weekly', priority: '0.7' },
  { path: '/blogs?category=Mountains', changefreq: 'weekly', priority: '0.7' },
  { path: '/blogs?category=Heritage', changefreq: 'weekly', priority: '0.7' },
  { path: '/blogs?category=Adventure', changefreq: 'weekly', priority: '0.7' },
  { path: '/blogs?category=Nature', changefreq: 'weekly', priority: '0.7' },
  { path: '/destinations?category=Beach', changefreq: 'weekly', priority: '0.7' },
  { path: '/destinations?category=Mountains', changefreq: 'weekly', priority: '0.7' },
  { path: '/destinations?category=Heritage', changefreq: 'weekly', priority: '0.7' },
  { path: '/destinations?category=Adventure', changefreq: 'weekly', priority: '0.7' },
  { path: '/destinations?category=Nature', changefreq: 'weekly', priority: '0.7' },
  { path: '/guide?season=Winter', changefreq: 'monthly', priority: '0.6' },
  { path: '/guide?season=Summer', changefreq: 'monthly', priority: '0.6' },
  { path: '/guide?season=Spring', changefreq: 'monthly', priority: '0.6' },
  { path: '/guide?season=Autumn', changefreq: 'monthly', priority: '0.6' },
  { path: '/guide?q=goa', changefreq: 'monthly', priority: '0.6' },
  { path: '/guide?q=rishikesh', changefreq: 'monthly', priority: '0.6' },
  { path: '/guide?q=jaipur', changefreq: 'monthly', priority: '0.6' },
  { path: '/guide?q=manali', changefreq: 'monthly', priority: '0.6' },
  { path: '/guide?q=kerala', changefreq: 'monthly', priority: '0.6' },
  { path: '/guide?q=varanasi', changefreq: 'monthly', priority: '0.6' },
  { path: '/guide?q=ladakh', changefreq: 'monthly', priority: '0.6' },
  { path: '/guide?q=hampi', changefreq: 'monthly', priority: '0.6' },
];

export async function GET() {
  const blogs = getAllBlogs();
  const destinations = getAllDestinations();

  const staticPages = [
    { url: '/', changefreq: 'weekly', priority: '1.0' },
    { url: '/blogs', changefreq: 'daily', priority: '0.9' },
    { url: '/destinations', changefreq: 'daily', priority: '0.9' },
    { url: '/guide', changefreq: 'weekly', priority: '0.9' },
    { url: '/calculator', changefreq: 'monthly', priority: '0.8' },
    { url: '/about', changefreq: 'monthly', priority: '0.7' },
    { url: '/contact', changefreq: 'monthly', priority: '0.6' },
    { url: '/privacy', changefreq: 'yearly', priority: '0.4' },
    { url: '/terms', changefreq: 'yearly', priority: '0.4' },
    { url: '/affiliate-disclosure', changefreq: 'yearly', priority: '0.4' },
  ];

  const blogPages = blogs.map(blog => ({
    url: `/blogs/${blog.slug}`,
    lastmod: formatDate(blog.updatedDate || blog.publishDate),
    changefreq: 'monthly',
    priority: '0.8',
  }));

  const destinationPages = destinations.map(dest => ({
    url: `/destinations/${dest.slug}`,
    lastmod: formatDate(new Date()),
    changefreq: 'weekly',
    priority: '0.8',
  }));

  const categoryPages = INDEXABLE_CATEGORY_PAGES.map(p => ({
    url: p.path,
    changefreq: p.changefreq,
    priority: p.priority,
  }));

  const allPages = [...staticPages, ...blogPages, ...destinationPages, ...categoryPages];

  const urlEntries = allPages.map(page => {
    const loc = `${SITE_URL}${page.url}`;
    const lastmod = page.lastmod ? `\n    <lastmod>${page.lastmod}</lastmod>` : '';
    return `  <url>\n    <loc>${loc}</loc>${lastmod}\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

function formatDate(date) {
  try {
    return new Date(date).toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}
