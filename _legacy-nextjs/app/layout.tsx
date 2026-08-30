import type React from "react";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#BE123C", // Romantic Rose for HIVY
};

export const metadata: Metadata = {
  metadataBase: new URL("https://birthdaysurprisesurat.com"),
  title: {
    default: "HIVY - Birthday Surprise Planners Surat | Best Birthday Celebration Venue | Romantic Birthday Surprises",
    template: "%s | HIVY - Birthday Surprise Surat",
  },
  description:
    "Best birthday surprise venue in Surat, Gujarat. Romantic birthday celebrations, surprise birthday parties, midnight birthday surprises for couples. Premium private experiences. Call now.",
  keywords: [
    "hivy surat",
    "birthday surprise surat",
    "birthday surprise for boyfriend surat",
    "birthday surprise for girlfriend surat",
    "birthday surprise for husband surat",
    "birthday surprise for wife surat",
    "midnight birthday surprise surat",
    "birthday room decoration surat",
    "birthday balloon decoration surat",
    "birthday party places surat",
    "birthday party venues surat",
    "surprise birthday party surat",
    "romantic birthday surat",
    "birthday celebration for couples surat",
    "best birthday surprise surat",
    "birthday surprise planners surat",
    "unique birthday celebration surat"
  ],
  authors: [{ name: "HIVY - Birthday Surprise Planners", url: "https://birthdaysurprisesurat.com" }],
  creator: "HIVY - Birthday Surprise Planners",
  publisher: "HIVY - Birthday Surprise Planners",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://birthdaysurprisesurat.com",
  },
  category: "Birthday Surprise Venue",
  classification: "Birthday Surprise Planners",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://birthdaysurprisesurat.com",
    siteName: "HIVY - Birthday Surprise Planners",
    title: "HIVY - Birthday Surprise Planners Surat | Best Birthday Celebration Venue",
    description: "Best birthday surprise venue in Surat. Romantic birthday celebrations, surprise parties, midnight surprises for couples. Premium private experiences.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HIVY - Birthday Surprise Planners - Best Birthday Celebrations in Surat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HIVY - Birthday Surprise Planners Surat | Best Birthday Celebration Venue",
    description: "Best birthday surprise venue in Surat. Romantic birthday celebrations, surprise parties & more!",
    images: ["/images/twitter-image.jpg"],
    creator: "@hivysurat",
    site: "@hivysurat",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "c1b155cb6acd07f9", // From googlec1b155cb6acd07f9.html
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.svg",
  },
  manifest: "/manifest.json",
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Surat",
    "geo.position": "21.1702;72.8311",
    "ICBM": "21.1702, 72.8311",
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://birthdaysurprisesurat.com/#business",
      "name": "HIVY - Place for Celebrations",
      "alternateName": "HIVY Surat",
      "description": "Best romantic celebration venue in Surat, Gujarat. Birthday surprises, candlelight dinners, anniversary celebrations, proposals, pre-wedding shoots. Premium private experiences.",
      "url": "https://birthdaysurprisesurat.com",
      "telephone": "+91 9727027278",
      "email": "hello@birthdaysurprisesurat.com",
      "priceRange": "₹₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Credit Card, UPI, GPay, PhonePe",
      "image": [
        "https://birthdaysurprisesurat.com/images/og-image.jpg"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "252/253, 2nd Floor, The Boulevard, Near Pratham Circle, Galleria Street, Green City Road",
        "addressLocality": "Adajan, Pal Gam, Surat",
        "addressRegion": "Gujarat",
        "postalCode": "394510",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "21.1702",
        "longitude": "72.8311"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "11:00",
          "closes": "23:00"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/hivy_placeforcelebration/",
        "https://www.facebook.com/p/Hivy-placeforcelebration-61553052747625/"
      ],
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Priya S."
          },
          "reviewBody": "Amazing experience! The romantic setup was perfect for our anniversary celebration. Highly recommend HIVY for couples."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Rahul M."
          },
          "reviewBody": "Best place in Surat for birthday surprises. The team went above and beyond to make my wife's birthday special."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Neha P."
          },
          "reviewBody": "Perfect candlelight dinner experience. The ambiance, food, and service were all top-notch."
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Romantic Celebration Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Birthday Surprise Package",
              "description": "Private birthday celebration with decorations, cake, and romantic setup"
            },
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Candlelight Dinner",
              "description": "Romantic candlelight dinner for couples with private setting"
            },
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Anniversary Celebration",
              "description": "Special anniversary celebration with decorations and intimate dining"
            },
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Midnight Birthday Surprise",
              "description": "Special midnight birthday celebration with decorations, cake cutting, and romantic setup"
            },
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Birthday Room Decoration",
              "description": "Premium balloon decorations, fairy lights, and personalized birthday setup"
            },
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Boyfriend Birthday Surprise",
              "description": "Romantic birthday surprise planning for boyfriend with photo decorations and personalized touches"
            },
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Girlfriend Birthday Surprise",
              "description": "Magical birthday surprise for girlfriend with roses, balloons, and private celebration"
            },
            "priceCurrency": "INR"
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://birthdaysurprisesurat.com/#website",
      "url": "https://birthdaysurprisesurat.com",
      "name": "HIVY - Place for Celebrations",
      "description": "Best romantic celebration venue in Surat",
      "publisher": {
        "@id": "https://birthdaysurprisesurat.com/#business"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://birthdaysurprisesurat.com/services?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://birthdaysurprisesurat.com/#organization",
      "name": "HIVY - Place for Celebrations",
      "url": "https://birthdaysurprisesurat.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://birthdaysurprisesurat.com/icon.svg",
        "width": "512",
        "height": "512"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 9727027278",
        "contactType": "reservations",
        "areaServed": "Surat",
        "availableLanguage": ["English", "Hindi", "Gujarati"]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://birthdaysurprisesurat.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://birthdaysurprisesurat.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://birthdaysurprisesurat.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Packages",
          "item": "https://birthdaysurprisesurat.com/packages"
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PSXMHLQF');
          `}
        </Script>
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GT-PHWHQV4L"
          strategy="afterInteractive"
        />
        <Script id="google-tags" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GT-PHWHQV4L');
            gtag('config', 'AW-11390931743');
            gtag('event', 'conversion', {
              'send_to': 'AW-11390931743/O21FCL-_9-0bEJ-mz7cq',
              'value': 1.0,
              'currency': 'INR'
            });
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PSXMHLQF"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
