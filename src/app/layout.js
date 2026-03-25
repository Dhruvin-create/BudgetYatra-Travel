import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { generateOrganizationSchema } from "@/lib/utils/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata = {
  metadataBase: new URL('https://budgetyatra.online'),
  title: {
    default: 'BudgetYatra - Budget Travel in India',
    template: '%s | BudgetYatra',
  },
  description: 'Discover budget-friendly travel destinations across India. Complete guides, tips, and itineraries for affordable adventures.',
  keywords: ['budget travel india', 'cheap travel india', 'budget destinations', 'travel guide india', 'backpacking india'],
  authors: [{ name: 'BudgetYatra' }],
  creator: 'BudgetYatra',
  publisher: 'BudgetYatra',
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
    type: 'website',
    locale: 'en_IN',
    url: 'https://budgetyatra.online',
    siteName: 'BudgetYatra',
    title: 'BudgetYatra - Budget Travel in India',
    description: 'Discover budget-friendly travel destinations across India. Complete guides, tips, and itineraries for affordable adventures.',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'BudgetYatra - Budget Travel in India',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BudgetYatra - Budget Travel in India',
    description: 'Discover budget-friendly travel destinations across India',
    images: ['/images/og-default.jpg'],
    creator: '@budgetyatra',
    site: '@budgetyatra',
  },
  alternates: {
    canonical: 'https://budgetyatra.online',
  },
  verification: {
    google: 'google-site-verification-code', // Add your actual verification code
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en">
      <head>
        {/* Preconnect to Unsplash — reduces connection time for LCP image */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        {/* Preload LCP hero image — URL matches <img> src exactly, no /_next/image wrapper */}
        <link
          rel="preload"
          as="image"
          href="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=828&h=600&fit=crop&q=40&fm=webp"
          imageSrcSet="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=640&h=460&fit=crop&q=40&fm=webp 640w, https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=828&h=600&fit=crop&q=40&fm=webp 828w, https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=800&fit=crop&q=35&fm=avif 1200w"
          imageSizes="(max-width: 640px) 640px, (max-width: 828px) 828px, 1200px"
          crossOrigin="anonymous"
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
