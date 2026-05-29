/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [],

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },

  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [35, 45, 75],
  },

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['next/image', 'next/link', 'next/navigation', 'react', 'react-dom'],
  },

  compress: true,
  productionBrowserSourceMaps: false,
  trailingSlash: false,

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
        ],
      },
      { source: '/static/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
      { source: '/images/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
      { source: '/:path*.(woff|woff2|ttf|otf)', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
    ];
  },

  async redirects() {
    const thinGuide = ["packing","safety","students","food","scooter","yoga","forts","seafood","snow","ruins","ghats","sarnath"];
    const thinBlogs = ["packing","safety"];
    const budgetMins = ["1100","1200","1400","1500","2800"];
    const guideR = thinGuide.map(q => ({ source: "/guide", has: [{ type: "query", key: "q", value: q }], destination: "/guide", permanent: true }));
    const blogR = thinBlogs.map(q => ({ source: "/blogs", has: [{ type: "query", key: "q", value: q }], destination: "/blogs", permanent: true }));
    const budgetR = budgetMins.map(min => ({ source: "/guide", has: [{ type: "query", key: "budgetMin", value: min }], destination: "/guide", permanent: true }));
    return [
      { source: "/:path*", has: [{ type: "host", value: "www.budgetyatra.online" }], destination: "https://budgetyatra.online/:path*", permanent: true },
      { source: "/:path+/", destination: "/:path+", permanent: true },
      ...guideR, ...blogR, ...budgetR,
    ];
  },
    async rewrites() {
    return { beforeFiles: [] };
  },

  env: { NEXT_PUBLIC_SITE_URL: 'https://budgetyatra.online' },
  logging: { fetches: { fullUrl: true } },
};

export default nextConfig;