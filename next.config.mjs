/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Enable image optimization
    unoptimized: false,
    // Image formats for better compression
    formats: ['image/avif', 'image/webp'],
    // Cache optimized images
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    // Responsive image sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // CSS optimization
  experimental: {
    optimizeCss: true,
  },

  // Compression
  compress: true,

  // Production source maps
  productionBrowserSourceMaps: false,

  // Trailing slashes
  trailingSlash: false,

  // Security and performance headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Security headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          // Performance headers
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400'
          },
        ],
      },
      // Cache static assets for 1 year
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
      // Cache images for 1 year
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
      // Cache fonts for 1 year
      {
        source: '/:path*.(woff|woff2|ttf|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
    ]
  },

  // Redirects for SEO
  async redirects() {
    return [
      // Redirect old URLs if needed
    ]
  },

  // Rewrites for clean URLs
  async rewrites() {
    return {
      beforeFiles: [
        // Rewrite sitemap
        {
          source: '/sitemap.xml',
          destination: '/api/sitemap',
        },
      ],
    }
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://budgetyatra.online',
  },

  // Logging
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
