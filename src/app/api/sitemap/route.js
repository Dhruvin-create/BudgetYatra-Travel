import { getAllBlogs } from '@/lib/data/blogs';
import { getAllDestinations } from '@/lib/data/destinations';

const SITE_URL = 'https://budgetyatra.online';

/**
 * Generate XML sitemap for search engines
 * Includes all blogs, destinations, and main pages
 */
export async function GET() {
  const blogs = getAllBlogs();
  const destinations = getAllDestinations();

  // Main pages
  const mainPages = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 },
    { url: '/calculator', changefreq: 'monthly', priority: 0.8 },
    { url: '/guide', changefreq: 'weekly', priority: 0.9 },
    { url: '/blogs', changefreq: 'daily', priority: 0.9 },
    { url: '/destinations', changefreq: 'daily', priority: 0.9 },
    { url: '/privacy', changefreq: 'yearly', priority: 0.5 },
    { url: '/terms', changefreq: 'yearly', priority: 0.5 },
    { url: '/affiliate-disclosure', changefreq: 'yearly', priority: 0.5 },
    { url: '/sitemap', changefreq: 'monthly', priority: 0.7 },
  ];

  // Blog pages
  const blogPages = blogs.map(blog => ({
    url: `/blogs/${blog.slug}`,
    lastmod: blog.updatedDate || blog.publishDate,
    changefreq: 'monthly',
    priority: 0.8,
  }));

  // Destination pages
  const destinationPages = destinations.map(dest => ({
    url: `/destinations/${dest.slug}`,
    lastmod: dest.updatedDate || new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.8,
  }));

  // Combine all pages
  const allPages = [
    ...mainPages,
    ...blogPages,
    ...destinationPages,
  ];

  // Generate XML
  const xml = generateSitemapXML(allPages);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

/**
 * Generate XML sitemap content
 */
function generateSitemapXML(pages) {
  const urlEntries = pages
    .map(page => {
      const lastmod = page.lastmod ? `<lastmod>${formatDate(page.lastmod)}</lastmod>` : '';
      return `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    ${lastmod}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
${urlEntries}
</urlset>`;
}

/**
 * Format date to ISO 8601 format
 */
function formatDate(date) {
  if (typeof date === 'string') {
    return new Date(date).toISOString().split('T')[0];
  }
  return date.toISOString().split('T')[0];
}
