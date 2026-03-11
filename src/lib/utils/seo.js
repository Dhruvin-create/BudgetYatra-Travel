// SEO utility functions for BudgetYatra

const SITE_URL = 'https://budgetyatra.com';
const DEFAULT_OG_IMAGE = '/images/og-default.jpg';

/**
 * Generate comprehensive metadata for any page
 * Includes OpenGraph, Twitter cards, and canonical tags
 */
export function generateMetadata({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  type = 'website',
  author = 'BudgetYatra',
  publishedDate,
  modifiedDate
}) {
  const fullUrl = url || SITE_URL;
  const ogImage = image || DEFAULT_OG_IMAGE;
  const keywordArray = Array.isArray(keywords) ? keywords : [keywords];

  return {
    title: title || 'BudgetYatra - Budget Travel in India',
    description: description || 'Discover budget-friendly travel destinations across India. Complete guides, tips, and itineraries for affordable adventures.',
    keywords: keywordArray,
    authors: [{ name: author }],
    canonical: fullUrl,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title: title || 'BudgetYatra - Budget Travel in India',
      description: description || 'Discover budget-friendly travel destinations across India',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || 'BudgetYatra',
          type: 'image/jpeg',
        }
      ],
      url: fullUrl,
      type: type,
      siteName: 'BudgetYatra',
      locale: 'en_IN',
      ...(publishedDate && { publishedTime: publishedDate }),
      ...(modifiedDate && { modifiedTime: modifiedDate }),
    },
    twitter: {
      card: 'summary_large_image',
      title: title || 'BudgetYatra - Budget Travel in India',
      description: description || 'Discover budget-friendly travel destinations across India',
      images: [ogImage],
      creator: '@budgetyatra',
      site: '@budgetyatra',
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

/**
 * Generate metadata for blog posts
 * Includes article-specific metadata
 */
export function generateBlogMetadata(blog) {
  return generateMetadata({
    title: blog.seo?.metaTitle || `${blog.title} | BudgetYatra`,
    description: blog.seo?.metaDescription || blog.excerpt,
    keywords: blog.seo?.keywords || blog.tags,
    image: blog.seo?.ogImage || blog.featuredImage?.url,
    url: `${SITE_URL}/blogs/${blog.slug}`,
    type: 'article',
    author: blog.author?.name || 'BudgetYatra',
    publishedDate: blog.publishDate,
    modifiedDate: blog.updatedDate,
  });
}

/**
 * Generate metadata for destination pages
 * Includes location-specific metadata
 */
export function generateDestinationMetadata(destination) {
  return generateMetadata({
    title: destination.seo?.metaTitle || `${destination.name} Travel Guide | BudgetYatra`,
    description: destination.seo?.metaDescription || destination.description,
    keywords: destination.seo?.keywords || [
      destination.name,
      destination.state,
      'travel guide',
      'budget travel',
      'things to do'
    ],
    image: destination.seo?.ogImage || destination.images[0]?.url,
    url: `${SITE_URL}/destinations/${destination.slug}`,
    type: 'website',
  });
}

/**
 * Generate Article schema for structured data
 */
export function generateArticleSchema(blog) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: blog.excerpt,
    image: blog.featuredImage?.url,
    datePublished: blog.publishDate,
    dateModified: blog.updatedDate,
    author: {
      '@type': 'Person',
      name: blog.author?.name,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'BudgetYatra',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
        width: 250,
        height: 60,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blogs/${blog.slug}`,
    },
  };
}

/**
 * Generate Breadcrumb schema for structured data
 */
export function generateBreadcrumbSchema(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

/**
 * Generate Organization schema for structured data
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BudgetYatra',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: 'Budget travel guides and destination information for India',
    sameAs: [
      'https://twitter.com/budgetyatra',
      'https://instagram.com/budgetyatra',
      'https://facebook.com/budgetyatra',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'hello@budgetyatra.com',
    },
  };
}

/**
 * Generate FAQ schema for structured data
 */
export function generateFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate LocalBusiness schema for destination pages
 */
export function generateLocalBusinessSchema(destination) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: destination.name,
    description: destination.description,
    image: destination.images[0]?.url,
    address: {
      '@type': 'PostalAddress',
      addressLocality: destination.name,
      addressRegion: destination.state,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: destination.coordinates?.lat || 0,
      longitude: destination.coordinates?.lng || 0,
    },
  };
}
