// SEO utility functions

export function generateMetadata({ title, description, keywords, image, url }) {
  return {
    title: title || 'BudgetYatra - Budget Travel in India',
    description: description || 'Discover budget-friendly travel destinations across India. Complete guides, tips, and itineraries for affordable adventures.',
    keywords: keywords || ['budget travel india', 'cheap travel india', 'budget destinations', 'travel guide india'],
    openGraph: {
      title: title || 'BudgetYatra - Budget Travel in India',
      description: description || 'Discover budget-friendly travel destinations across India',
      images: [image || '/images/og-default.jpg'],
      url: url || 'https://budgetyatra.com',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title || 'BudgetYatra - Budget Travel in India',
      description: description || 'Discover budget-friendly travel destinations across India',
      images: [image || '/images/og-default.jpg'],
    },
  };
}

export function generateBlogMetadata(blog) {
  return generateMetadata({
    title: blog.seo?.metaTitle || blog.title,
    description: blog.seo?.metaDescription || blog.excerpt,
    keywords: blog.seo?.keywords || blog.tags,
    image: blog.seo?.ogImage || blog.featuredImage?.url,
    url: `https://budgetyatra.com/blogs/${blog.slug}`
  });
}

export function generateDestinationMetadata(destination) {
  return generateMetadata({
    title: destination.seo?.metaTitle || `${destination.name} Travel Guide`,
    description: destination.seo?.metaDescription || destination.description,
    keywords: destination.seo?.keywords || [destination.name, destination.state, 'travel guide'],
    image: destination.seo?.ogImage || destination.images[0]?.url,
    url: `https://budgetyatra.com/destinations/${destination.slug}`
  });
}
