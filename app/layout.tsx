import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SPARK - Igniting Innovation, Securing the Future',
  description: 'SPARK is a student-driven technical community at Reva University, Bangalore, focused on software development, open source innovation, and cybersecurity.',
  keywords: 'SPARK, Reva University, technical community, software development, cybersecurity, open source, student club, Bangalore',
  authors: [{ name: 'SPARK Community' }],
  creator: 'SPARK Community',
  publisher: 'SPARK Community',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sparkreva.vercel.app'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SPARK - Igniting Innovation, Securing the Future',
    description: 'SPARK is a student-driven technical community at Reva University, Bangalore, focused on software development, open source innovation, and cybersecurity.',
    url: 'https://sparkreva.vercel.app', // Replace with your actual domain
    siteName: 'SPARK Reva University',
    images: [
      {
        url: '/images/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'SPARK Reva University Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SPARK - Igniting Innovation, Securing the Future',
    description: 'SPARK is a student-driven technical community at Reva University, Bangalore',
    images: ['/images/android-chrome-512x512.png'], 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/images/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/images/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/images/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/images/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'android-chrome',
        url: '/images/android-chrome-192x192.png',
        sizes: '192x192',
      },
      {
        rel: 'android-chrome',
        url: '/images/android-chrome-512x512.png',
        sizes: '512x512',
      },
    ],
  },
  manifest: '/manifest.json', // the a web app manifest
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="theme-color" content="#0a0a14" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/*
          Dev-time safeguard: guard removeChild to avoid HMR edge-case where
          a stylesheet <link> is removed twice causing "parentNode is null".
          This is a small, non-destructive runtime guard active only in dev.
        */}
        {process.env.NODE_ENV === 'development' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(){try{var orig=Node.prototype.removeChild;Node.prototype.removeChild=function(child){if(!child) return orig.call(this,child); if(child.parentNode!==this){/* already removed - ignore */ return child; } return orig.call(this,child)} }catch(e){console.warn('safeRemoveChild patch failed',e)} })()`
            }}
          />
        )}
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}