import { Geist } from "next/font/google";
import Script from "next/script";
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
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PGB2DCXQ');`,
          }}
        />
        
        {/* Preconnect to Unsplash — reduces connection time for LCP image */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        {/* Preload LCP hero image — URL matches <img> src exactly, no /_next/image wrapper */}
        <link
          rel="preload"
          as="image"
          href="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=828&h=600&fit=crop&q=40&fm=webp"
          imageSrcSet="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=640&h=460&fit=crop&q=40&fm=webp 640w, https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=828&h=600&fit=crop&q=35&fm=webp 828w, https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1080&h=720&fit=crop&q=30&fm=webp 1080w"
          imageSizes="(max-width: 640px) 640px, (max-width: 828px) 828px, 1080px"
          crossOrigin="anonymous"
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PGB2DCXQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
