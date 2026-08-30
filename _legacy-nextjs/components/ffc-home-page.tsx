'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, MessageCircle, MapPin, Clock, Star, Check, ChevronRight, ChevronLeft,
  Heart, Users, Shield, Award, Calendar, Gift, Sparkles, 
  ArrowRight, Camera, Music, Utensils, Wine, Play, ImageIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import FFCReviewsSlider from '@/components/ffc-reviews-slider';
import { siteConfig, getVisiblePackages, serviceCategories, suratAreas, formatPrice, getAllBlogPosts, BlogPost } from '@/lib/ffc-config';

// Experience features
const experienceFeatures = [
  {
    icon: Clock,
    title: "3-Hour Private Birthday Booking",
    description: "Enjoy three exclusive hours at our private birthday venue for your special celebration"
  },
  {
    icon: Gift,
    title: "Birthday Cake Included",
    description: "Complimentary birthday cake & non-alcoholic champagne with every birthday package"
  },
  {
    icon: Camera,
    title: "Instagram-Worthy Birthday Décor",
    description: "Professional balloon decorations, fairy lights & birthday-themed photo-ready setups"
  },
  {
    icon: Music,
    title: "Birthday Party Ambiance",
    description: "Celebratory music, beautiful lighting & complete privacy for your birthday celebration"
  }
];

// FAQ items
const faqs = [
  {
    question: "What is HIVY and where is it located in Surat?",
    answer: "HIVY is Surat's premier birthday surprise venue—the best spot for romantic birthday celebrations, surprise birthday parties, and private birthday dinners for couples in Surat, Gujarat."
  },
  {
    question: "How do I book a birthday surprise at HIVY?",
    answer: `Simply WhatsApp ${siteConfig.phone} or call directly. Share your birthday celebration details, preferred date, and number of guests. We'll confirm your booking instantly with a custom quote for your birthday surprise.`
  },
  {
    question: "What are the prices for birthday surprise packages in Surat?",
    answer: "Our birthday surprise packages start from affordable rates and include premium venue setup, welcome drinks, decorations, and birthday cake. Contact us for current pricing on birthday surprise setups, midnight birthday celebrations, and couple birthday packages."
  },
  {
    question: "Can I book HIVY for a midnight birthday surprise?",
    answer: "Absolutely! HIVY is Surat's most popular midnight birthday surprise venue. Our midnight birthday setups feature stunning decorations, fairy lights, rose petals, and cake-cutting at 12 AM—perfect for creating unforgettable birthday memories."
  },
  {
    question: "What types of birthday celebrations can I plan at HIVY Surat?",
    answer: "We specialize in birthday surprises for boyfriend, girlfriend, husband, wife, romantic birthday dinners, midnight birthday celebrations, surprise birthday parties, birthday room decorations, and unique birthday setups for couples."
  },
  {
    question: "What are the time slots available for birthday surprise booking?",
    answer: "Our birthday celebration time slots are from 12 PM to 11 PM. Weekend slots for birthday surprises book fast—we recommend advance booking to secure your preferred date at Surat's best birthday surprise venue."
  },
  {
    question: "Can I customize the decorations for my birthday surprise?",
    answer: "Yes! All our birthday packages are fully customizable. Choose from balloon decorations, flower arrangements, themed backdrops, personalized messages, custom cakes, and more for your birthday room decoration and surprise setup."
  },
  {
    question: "Is HIVY a private venue for couples only?",
    answer: "Yes, HIVY is 100% private and exclusively for couples. You'll have complete privacy during your birthday celebration—no other guests. It's the safest, most romantic, and couple-friendly birthday venue in Surat with a 4.9★ rating."
  },
  {
    question: "What areas in Surat does HIVY serve for birthday celebrations?",
    answer: "We welcome couples from all Surat areas including Vesu, Adajan, Athwa, Piplod, City Light, Althan, Varachha, Pal, Dumas Road, and more. HIVY is centrally located as the best birthday surprise venue serving all of Surat."
  },
  {
    question: "What is the cancellation and rescheduling policy?",
    answer: "Rescheduling must be informed at least one day prior. Your birthday surprise booking can be rescheduled within one month, subject to availability. Please note: No Refund Policy Applicable."
  }
];

// Gallery items data - Optimized for faster loading (reduced to 16 items)
const galleryItems = [
  // Featured Images from packages
  { type: 'image', src: '/hivy-images/5100/2.webp', alt: 'Swing of Love Setup Surat', title: 'Swing of LOVE', subtitle: 'Premium Package', featured: true },
  { type: 'image', src: '/hivy-images/5700/2.webp', alt: 'BoHo Chic Setup Surat', title: 'BoHo Chic', featured: false },
  { type: 'image', src: '/hivy-images/6300/2.webp', alt: 'Birthday Setup Surat', title: 'Magical Birthday Setup', featured: false },
  { type: 'video', src: '/videos/InShot_20250111_162317353.mp4', alt: 'Birthday celebration video Surat', title: 'Celebration Moments', featured: false },
  { type: 'image', src: '/hivy-images/6500/2.webp', alt: 'Tent of Romance Setup Surat', title: 'Tent of Romance', featured: false },
  { type: 'image', src: '/hivy-images/5100/3.webp', alt: 'Swing setup Surat', title: 'Swing Décor', featured: false },
  { type: 'video', src: '/videos/InShot_20250217_151234749.mp4', alt: 'Birthday celebration video Surat', title: 'Birthday Video', featured: false },
  { type: 'image', src: '/hivy-images/5700/3.webp', alt: 'Bohemian ambiance cafe Surat', title: 'Boho Ambiance', featured: false },
  { type: 'image', src: '/hivy-images/6300/3.webp', alt: 'Birthday decoration Surat', title: 'Magical Setup', featured: false },
  { type: 'image', src: '/hivy-images/6500/3.webp', alt: 'Romantic tent decoration Surat', title: 'Romantic Décor', featured: false },
  { type: 'video', src: '/videos/VID_20251027_181020858.mp4', alt: 'Birthday celebration reel Surat', title: 'Party Vibes', featured: false },
  { type: 'image', src: '/hivy-images/5100/4.webp', alt: 'Romantic swing setup Surat', title: 'Love Swing', featured: false },
  { type: 'image', src: '/hivy-images/5700/4.webp', alt: 'Night romantic setup Surat', title: 'Night Setup', featured: false },
  { type: 'image', src: '/hivy-images/6300/4.webp', alt: 'Evening birthday celebration Surat', title: 'Evening Magic', featured: false },
  { type: 'video', src: '/videos/VID_20251120_191425995.mp4', alt: 'Birthday reel Surat', title: 'Birthday Reel', featured: false },
  { type: 'image', src: '/hivy-images/6500/4.webp', alt: 'Birthday surprise setup Surat', title: 'Birthday Surprise Setup', featured: false },
];

// Gallery Section Component
function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'photos' | 'videos'>('all');
  
  const filteredItems = galleryItems.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'photos') return item.type === 'image';
    if (activeFilter === 'videos') return item.type === 'video';
    return true;
  });

  const photoCount = galleryItems.filter(item => item.type === 'image').length;
  const videoCount = galleryItems.filter(item => item.type === 'video').length;

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 via-white to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-rose-100 text-rose-900 border-rose-200">
            <ImageIcon className="h-4 w-4 mr-2" /> Birthday Celebration Gallery
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Birthday Celebrations at HIVY Surat
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real moments from birthday surprises, midnight birthdays & romantic birthday celebrations at Surat's best couples-only birthday venue.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          <Button
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('all')}
            className={activeFilter === 'all' 
              ? 'bg-rose-700 hover:bg-rose-800 text-white' 
              : 'border-rose-200 text-rose-700 hover:bg-rose-50'}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            All ({galleryItems.length})
          </Button>
          <Button
            variant={activeFilter === 'photos' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('photos')}
            className={activeFilter === 'photos' 
              ? 'bg-rose-700 hover:bg-rose-800 text-white' 
              : 'border-rose-200 text-rose-700 hover:bg-rose-50'}
          >
            <ImageIcon className="h-4 w-4 mr-2" />
            Photos ({photoCount})
          </Button>
          <Button
            variant={activeFilter === 'videos' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('videos')}
            className={activeFilter === 'videos' 
              ? 'bg-rose-700 hover:bg-rose-800 text-white' 
              : 'border-rose-200 text-rose-700 hover:bg-rose-50'}
          >
            <Play className="h-4 w-4 mr-2" />
            Videos ({videoCount})
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div 
              key={`${item.src}-${index}`}
              className={`relative group overflow-hidden rounded-2xl ${
                item.featured && activeFilter === 'all' ? 'col-span-2 row-span-2' : 'aspect-square'
              }`}
            >
              {item.type === 'image' ? (
                <>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.featured ? 600 : 300}
                    height={item.featured ? 600 : 300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`absolute ${item.featured ? 'bottom-4 left-4' : 'bottom-3 left-3'} text-white`}>
                      <p className={`font-${item.featured ? 'semibold' : 'medium'} ${item.featured ? '' : 'text-sm'}`}>{item.title}</p>
                      {item.subtitle && <p className="text-sm text-white/80">{item.subtitle}</p>}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover bg-rose-100"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                    onLoadedData={(e) => { e.currentTarget.currentTime = 0.5; }}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-5 w-5 text-rose-700 ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <Link href="/virtual-tour">
            <Button className="bg-gradient-to-r from-rose-700 to-rose-600 hover:from-rose-800 hover:to-rose-700 text-white px-8 py-6 text-lg">
              <Camera className="h-5 w-5 mr-2" />
              View Virtual Tour
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Blog Section Component
function BlogSection() {
  const posts = getAllBlogPosts().slice(0, 6); // Show latest 6 posts

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-rose-100 text-rose-900 border-rose-200">
            Birthday Surprise Blog
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Birthday Surprise Ideas in Surat
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tips, guides, and romantic ideas to help you plan the perfect birthday surprise or midnight birthday celebration in Surat
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 group border-rose-200">
                <div className="relative h-48">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 left-3 bg-rose-700 text-white">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-rose-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'short' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link href="/blog">
            <Button className="bg-gradient-to-r from-rose-700 to-rose-600 hover:from-rose-800 hover:to-rose-700 text-white px-8 py-6 text-lg">
              View More Articles
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function FFCHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Hero slider images
  const heroSlides = [
    { src: '/images/hero/slider2.png', alt: 'Birthday Celebration Setup with Fairy Lights Surat' },
    { src: '/images/hero/slider1.png', alt: 'Romantic Birthday Surprise Setup at HIVY - Birthday Surprise Planners Surat' },
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // FAQ Schema (FAQPage structured data)
  const homeFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Speakable schema for voice assistants (Google Assistant, Siri, Alexa)
  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "HIVY - Birthday Surprise Planners | Best Birthday Venue in Surat",
    "url": "https://birthdaysurprisesurat.com",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".hero-description", ".faq-section", ".services-heading"]
    },
    "mainEntity": {
      "@type": "LocalBusiness",
      "@id": "https://birthdaysurprisesurat.com/#business"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />
      {/* Speakable Schema for Voice Assistants & AI */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-700 via-rose-600 to-rose-800 text-white overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm px-4 py-1">
                <Sparkles className="h-4 w-4 mr-2" /> Couples Only Experience in Surat
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-serif">
                HIVY - Birthday Surprise Planners
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-2xl">
                {siteConfig.tagline}
              </p>
              <p className="text-lg mb-8 text-white/80 max-w-xl">
                Surat's premier private venue for romantic birthday surprises, midnight birthday celebrations & surprise birthday parties. 100% private, couples-only experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/packages">
                  <Button size="lg" className="bg-white text-rose-700 hover:bg-rose-50 text-lg px-8 py-6 w-full sm:w-auto">
                    <Gift className="h-5 w-5 mr-2" />
                    View Packages
                  </Button>
                </Link>
                <a href={`tel:${siteConfig.phone}`}>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    {siteConfig.phone}
                  </Button>
                </a>
              </div>
              
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 text-sm md:text-base">
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Shield className="h-4 w-4" /> 100% Private
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="h-4 w-4" /> 4.9★ Rated
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Users className="h-4 w-4" /> 3000+ Couples
                </span>
              </div>
            </div>
            
            {/* Hero Booking Form */}
            <div className="hidden lg:block">
              <FFCBookingForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Booking Form */}
      <section className="lg:hidden bg-rose-50 py-8">
        <div className="container mx-auto px-4">
          <FFCBookingForm />
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <Badge className="mb-4 bg-rose-100 text-rose-900 border-rose-200">
              Birthday Surprise Packages
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-serif">
              Birthday Celebration Packages in Surat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              5 unique private setups for birthday surprises, midnight birthdays & romantic birthday celebrations in Surat
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-6">
            {getVisiblePackages().map((pkg, index) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 border-rose-200 group overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-rose-100 to-rose-50 relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <Badge className="absolute top-2 left-2 bg-rose-700 text-white text-xs">
                      Setup {index + 1}
                    </Badge>
                  </div>
                  <CardContent className="p-2.5 sm:p-3 md:p-4">
                    <h3 className="font-semibold text-xs sm:text-sm md:text-lg mb-1 group-hover:text-rose-700 transition-colors leading-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm line-clamp-2 mb-2 hidden md:block">
                      {pkg.shortDescription}
                    </p>
                    <p className="text-base sm:text-lg md:text-xl font-bold text-rose-700">
                      {formatPrice(pkg.price)}
                    </p>
                    {/* View Details */}
                    <div className="flex justify-end mt-2">
                      <span className="text-[10px] sm:text-xs text-rose-600 font-medium flex items-center gap-1 hover:text-rose-800">
                        View Details <ChevronRight className="h-3 w-3" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-6 md:mt-10">
            <Link href="/packages">
              <Button size="lg" className="bg-gradient-to-r from-rose-700 to-rose-600 hover:from-rose-800 hover:to-rose-700 text-white">
                View All Packages <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-rose-100 text-rose-900 border-rose-200">
              Birthday Celebration Services in Surat
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Perfect For Every Birthday Celebration in Surat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From intimate birthday dinners to surprise birthday parties, midnight birthday celebrations to romantic couple birthdays—we create magical birthday moments for couples at our private celebration venue in Surat.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {serviceCategories.map((service) => (
              <Card key={service.slug} className="h-full border-rose-200 group">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">{service.emoji}</div>
                  <h3 className="font-semibold text-sm md:text-lg mb-1 md:mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm line-clamp-3 hidden md:block">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-rose-100 text-rose-900 border-rose-200">
              Why Couples Choose HIVY Surat
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              The Complete Birthday Celebration Experience
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every couple deserves a private birthday celebration. Our packages include everything for an unforgettable birthday surprise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experienceFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-rose-700" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-rose-700/20 text-rose-300 border-rose-700/30">
                Birthday Special Menu
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Gourmet Cuisine for Birthday Celebrations
              </h2>
              <p className="text-gray-300 mb-8">
                Curated café-style delicacies crafted for birthday celebrations & special occasions in Surat
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-rose-700/20 flex items-center justify-center flex-shrink-0">
                    <Wine className="h-5 w-5 text-rose-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Welcome Drink</h4>
                    <p className="text-gray-400 text-sm">A refreshing welcome to begin your romantic experience</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-rose-700/20 flex items-center justify-center flex-shrink-0">
                    <Utensils className="h-5 w-5 text-rose-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Cheese Fondue</h4>
                    <p className="text-gray-400 text-sm">Rich, velvety cheese fondue with cheese balls, wedges & nachos</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-rose-700/20 flex items-center justify-center flex-shrink-0">
                    <Gift className="h-5 w-5 text-rose-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Dessert with Chocolate Bite</h4>
                    <p className="text-gray-400 text-sm">A sweet ending with rich chocolate indulgence</p>
                  </div>
                </div>
              </div>
              
              <Link href="/menu" className="inline-block mt-8">
                <Button size="lg" className="bg-rose-700 hover:bg-rose-800 text-white">
                  View Full Menu <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image 
                  src="/images/Food hivy.webp" 
                  alt="HIVY - Birthday Surprise Planners Menu - Birthday Celebration Dining" 
                  width={600} 
                  height={600} 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-rose-100 text-rose-900 border-rose-200">
              <MapPin className="h-4 w-4 mr-2" /> Birthday Celebrations Near You
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Best Birthday Surprise Venue Serving All Areas in Surat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you're looking for a birthday surprise venue near Vesu, birthday celebration in Adajan, or birthday party in Athwa—we serve couples from all areas of Surat
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {suratAreas.map((area) => (
              <Link 
                key={area.slug}
                href={`/${area.slug}`}
                className="px-4 py-2 bg-white rounded-full text-gray-700 hover:bg-rose-700 hover:text-white transition-colors border border-rose-200"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Slider */}
      <FFCReviewsSlider />

      {/* Gallery Section */}
      <GallerySection />

      {/* Blog Section */}
      <BlogSection />

      {/* Extended SEO Content Section */}
      <section className="py-16 bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-rose-700">
            Why HIVY is Surat's Best Birthday Surprise Venue
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="hero-description">
              When it comes to planning an unforgettable birthday surprise in Surat, HIVY stands out as the premier destination for couples seeking privacy, romance, and magical celebrations. As the city's most sought-after birthday surprise venue, we have redefined how people celebrate birthdays by creating an exclusive, intimate space where every detail is thoughtfully curated to make your special day truly extraordinary. Whether you're planning a midnight birthday surprise for your girlfriend, organizing a romantic birthday dinner for your husband, or creating a memorable birthday experience for your wife, HIVY offers the perfect private setting that transforms ordinary birthdays into cherished memories that last a lifetime.
            </p>
            <p className="hero-description">
              What sets HIVY apart from other birthday celebration venues in Surat is our unwavering commitment to providing a completely private, couple-friendly environment where you can celebrate without interruptions. Unlike restaurants or cafes where your birthday celebration competes for attention with other diners, HIVY is exclusively yours for the entire duration of your booking. This exclusivity ensures that every moment—from the surprise reveal to the cake cutting to the heartfelt conversations—happens in complete privacy, allowing you to be fully present and authentic with your partner during this special occasion.
            </p>

            <h3 className="text-2xl font-semibold text-rose-600">The Ultimate Birthday Surprise Experience</h3>
            <p className="hero-description">
              At HIVY, we believe that a birthday celebration should be more than just cutting a cake—it should be a complete sensory experience that touches the heart and creates lasting impressions. Our birthday surprise packages are meticulously designed to deliver exactly that. From the moment your partner walks through our doors, they're greeted by a breathtaking setup featuring stunning balloon decorations, twinkling fairy lights, fragrant rose petals, and Instagram-worthy backdrops that set the perfect mood for celebration. Every element is carefully arranged by our experienced team to create that jaw-dropping "wow" moment that makes birthdays truly special.
            </p>
            <p className="hero-description">
              Our birthday packages include everything you need for a perfect celebration: a delicious birthday cake, complimentary non-alcoholic champagne for toasting, premium decorations tailored to your chosen theme, ambient music that sets the perfect mood, and three full hours of private access to our beautifully designed venue. We also provide dedicated setup before your arrival, ensuring that when you and your partner step inside, everything is already picture-perfect and ready for the celebration to begin. The attention to detail in our birthday setups—from the placement of candles to the arrangement of flower petals—reflects our passion for creating extraordinary experiences.
            </p>

            <h3 className="text-2xl font-semibold text-rose-600">Midnight Birthday Celebrations in Surat</h3>
            <p className="hero-description">
              There's something undeniably magical about celebrating a birthday at the stroke of midnight, and HIVY has become Surat's most popular destination for midnight birthday surprises. The excitement of counting down to 12 AM, watching your loved one's face light up as they realize they're celebrating their special day in such a romantic setting, and sharing that first piece of cake as the clock strikes midnight—these are the moments that become cherished memories forever. Our midnight birthday packages are specifically designed to maximize this magical experience, with dramatic lighting effects, surprise elements, and a celebration atmosphere that perfectly captures the excitement of welcoming a new year of life.
            </p>
            <p className="hero-description">
              Planning a midnight birthday surprise requires careful coordination, and our experienced team handles every aspect flawlessly. We work with you to understand your vision, coordinate the timing of your arrival, prepare the venue with all decorations and surprises in place, and ensure that the 12 AM moment is absolutely perfect. Many couples choose to add special touches like personalized messages, photo slideshows, or custom music playlists to make the midnight celebration even more meaningful. Whether you're surprising your boyfriend with his first birthday celebration as a couple or marking a milestone birthday for your girlfriend, our midnight birthday experiences create the kind of memories that become legendary in your relationship story.
            </p>

            <h3 className="text-2xl font-semibold text-rose-600">Birthday Decorations & Themes</h3>
            <p className="hero-description">
              The visual impact of a birthday celebration matters enormously, and HIVY offers a variety of stunning decoration themes that transform our venue into your dream birthday setting. Our balloon decoration options range from elegant color schemes to playful, vibrant arrangements, all created with premium-quality balloons that photograph beautifully and create an immersive celebration environment. Fairy lights add a warm, magical glow that makes the space feel intimate and romantic, while rose petals scattered throughout create a sense of luxury and celebration that elevates the entire experience.
            </p>
            <p className="hero-description">
              Popular birthday decoration themes at HIVY include our romantic rose gold arrangement featuring blush pinks and metallic accents, the classic red and gold setup that exudes elegance and passion, the bohemian-inspired boho chic theme with natural textures and whimsical elements, and our dramatic tent of romance setup that creates a cozy, intimate cocoon within our space. Each theme can be customized to match your partner's preferences, favorite colors, or special memories you share together. Our decoration team takes pride in creating setups that look even better in person than in photos—though rest assured, every angle is Instagram-ready for capturing those precious moments.
            </p>

            <h3 className="text-2xl font-semibold text-rose-600">Creating Lifelong Birthday Memories</h3>
            <p className="hero-description">
              Beyond the decorations and the cake, what truly makes a birthday celebration at HIVY special is the emotional impact it creates. The surprise reveal moment when your partner first sees the beautiful setup, the tears of joy, the tight embrace, the heartfelt "I can't believe you did this"—these are the priceless moments that our venue is designed to facilitate. We've witnessed countless birthday surprises at HIVY, and each one reminds us why we are passionate about what we do. Seeing couples create beautiful memories together, watching the genuine surprise and happiness on faces, and knowing that we played a part in making someone's birthday truly special—this is what drives every decision we make about our venue and services.
            </p>
            <p className="hero-description">
              The privacy of HIVY allows couples to fully express their emotions without feeling self-conscious about public displays of affection or worried about strangers watching their intimate moments. Whether it's a boyfriend surprising his girlfriend with her dream birthday celebration, a husband creating a romantic birthday evening for his wife, or a wife planning an unforgettable midnight surprise for her husband, HIVY provides the perfect canvas for expressing love and appreciation through a thoughtfully planned birthday experience. Our team understands that birthdays are about celebrating not just the person but also the relationship, and we design every aspect of our service to honor both. Book your birthday surprise at HIVY today and discover why couples across Surat choose us as their preferred venue for creating magical birthday memories that last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-rose-100 text-rose-900 border-rose-200">
              FAQ - Birthday Celebrations
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Common Questions About Birthday Celebrations in Surat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about booking birthday surprises & midnight birthday celebrations at HIVY
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg border border-rose-200 px-6">
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-700 to-rose-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Book Your Birthday Surprise Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Create unforgettable birthday memories at Surat's best private celebration venue. Perfect for birthdays, midnight surprises & special occasions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
            <a href={`tel:${siteConfig.phone}`}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
                <Phone className="h-5 w-5 mr-2" />
                {siteConfig.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
