'use client';

import React from 'react';
import Image from 'next/image';
import { ImageIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Gallery item type
export interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  featured?: boolean;
}

// SEO-friendly gallery items using actual images from /Gallery/ folder
export const galleryItems: GalleryItem[] = [
  // Featured Images
  { type: 'image', src: '/Gallery/Copy%20of%20IMG_20251030_123944870.jpg', alt: 'Romantic birthday setup in Surat', title: 'Romantic Setup', subtitle: 'Birthday Setup', featured: true },
  { type: 'image', src: '/Gallery/Copy%20of%20IMG_20251027_192642940.jpg', alt: 'Birthday candlelight dinner Surat', title: 'Candlelight Dinner', featured: false },
  { type: 'image', src: '/Gallery/Copy%20of%20IMG_20251030_121457885.jpg', alt: 'Romantic birthday dinner setup Surat', title: 'Evening Romance', featured: false },
  { type: 'image', src: '/Gallery/Copy%20of%20IMG_20251104_193044089.jpg', alt: 'Birthday surprise decoration Surat', title: 'Birthday Surprise', featured: false },
  { type: 'image', src: '/Gallery/Copy%20of%20IMG_20251104_193049667.jpg', alt: 'Birthday celebration Surat', title: 'Birthday Special', featured: false },
  { type: 'image', src: '/Gallery/Copy%20of%20IMG_20251113_193712005.jpg', alt: 'Romantic table decoration Surat', title: 'Table Decor', featured: false },
  { type: 'image', src: '/Gallery/Copy%20of%20IMG_20251113_193757799.jpg', alt: 'Birthday balloon decoration Surat', title: 'Balloon Decoration', featured: false },
  { type: 'image', src: '/Gallery/Copy%20of%20IMG_20251120_191226173.jpg', alt: 'Birthday dinner setup Surat', title: 'Birthday Dinner', featured: false },
  { type: 'image', src: '/Gallery/Copy%20of%20IMG_20251120_191315017.jpg', alt: 'Romantic ambiance birthday Surat', title: 'Romantic Ambiance', featured: false },
  { type: 'image', src: '/Gallery/Copy%20of%20IMG_20251120_191342337.jpg', alt: 'Couple birthday celebration Surat', title: 'Couple Moment', featured: false },
  { type: 'image', src: '/Gallery/Copy%20of%20IMG_20251120_191650625.jpg', alt: 'Evening romantic birthday Surat', title: 'Evening Magic', featured: false },
  { type: 'image', src: '/Gallery/Copy%20of%20IMG_20251120_191727679.jpg', alt: 'Birthday glass house dinner Surat', title: 'Glass House', featured: false },
  { type: 'image', src: '/Gallery/Copy%20of%20IMG_20251120_192050195.jpg', alt: 'Night romantic birthday setup Surat', title: 'Night Setup', featured: false },
  { type: 'image', src: '/Gallery/Copy%20of%20IMG_20251121_211602488.jpg', alt: 'Birthday proposal setup Surat', title: 'Proposal Setup', featured: false },
  { type: 'image', src: '/Gallery/Copy%20of%20IMG_20251121_212632270.jpg', alt: 'Day birthday celebration Surat', title: 'Day Celebration', featured: false },
  { type: 'image', src: '/Gallery/Copy%20of%20IMG_20251121_214238583.jpg', alt: 'Surprise birthday party Surat', title: 'Surprise Party', featured: false },
  { type: 'image', src: '/Gallery/IMG_20251027_192600267.jpg', alt: 'Romantic birthday dinner date Surat', title: 'Dinner Date', featured: false },
  { type: 'image', src: '/Gallery/IMG_20251027_192606315.jpg', alt: 'Birthday celebration setup Surat', title: 'Birthday Setup', featured: false },
  { type: 'image', src: '/Gallery/IMG_20251027_192642940.jpg', alt: 'Birthday surprise for girlfriend Surat', title: 'Girlfriend Surprise', featured: false },
  { type: 'image', src: '/Gallery/IMG_20251027_192851527.jpg', alt: 'Birthday surprise for boyfriend Surat', title: 'Boyfriend Surprise', featured: false },
  { type: 'image', src: '/Gallery/IMG_20251030_122405786.jpg', alt: 'Birthday room decoration Surat', title: 'Room Decoration', featured: false },
  { type: 'image', src: '/Gallery/IMG_20251030_123036608.jpg', alt: 'Couple birthday party Surat', title: 'Birthday Party', featured: false },
  { type: 'image', src: '/Gallery/IMG_20251030_123334888.jpg', alt: 'Surprise birthday date Surat', title: 'Surprise Date', featured: false },
  { type: 'image', src: '/Gallery/IMG_20251113_193442540.jpg', alt: 'Couple birthday moment Surat', title: 'Couple Moment', featured: false },
  { type: 'image', src: '/Gallery/IMG_20251113_193453131.jpg', alt: 'Birthday photoshoot Surat', title: 'Birthday Photo', featured: false },
  { type: 'image', src: '/Gallery/IMG_20251121_211454591.jpg', alt: 'Birthday photo shoot Surat', title: 'Photo Shoot', featured: false },
  { type: 'image', src: '/Gallery/IMG_20251121_211547289.jpg', alt: 'Birthday celebration decoration Surat', title: 'Birthday Decor', featured: false },
  { type: 'image', src: '/Gallery/IMG_20251121_211601011.jpg', alt: 'Birthday moments Surat', title: 'Birthday Moments', featured: false },
  { type: 'image', src: '/Gallery/20240606_115610_83c3a646-4519-42ae-963f-ac9559192a48.JPG', alt: 'Candlelight birthday dinner Surat', title: 'Couple Dinner', featured: false },
  { type: 'image', src: '/Gallery/20240606_115611_2ac66f83-ed91-4852-9a56-e20e310f3825.JPG', alt: 'Romantic birthday dinner Surat', title: 'Romantic Dinner', featured: false },
  { type: 'image', src: '/Gallery/20240606_115611_3f21729e-a7a9-4735-83dd-6e1e0a2a9cda.JPG', alt: 'Private birthday dining Surat', title: 'Private Dining', featured: false },
  { type: 'image', src: '/Gallery/20240820_192632_6a3b8062-9f1f-400d-a614-edd1a7829df4.JPG', alt: 'Romantic birthday venue Surat', title: 'Romantic Venue', featured: false },
  { type: 'image', src: '/Gallery/20240830_213839_1C3E1D35-D0E1-4453-B49D-369681BC9A80.JPG', alt: 'Birthday celebration venue Surat', title: 'Celebration Venue', featured: false },
  { type: 'image', src: '/Gallery/20240830_213844_C9D717AD-7E76-4786-B5FF-E3C649D0780C.JPG', alt: 'Birthday romantic setup Surat', title: 'Romantic Setup', featured: false },
  { type: 'image', src: '/Gallery/20240830_213850_49F6A3C9-BEC1-4413-A2C0-CF9E91DDECFB.JPG', alt: 'Birthday decoration Surat', title: 'Birthday Decor', featured: false },
  { type: 'image', src: '/Gallery/20240830_213901_BD8B1477-15EB-47C3-BBCF-5FA1177E1272.JPG', alt: 'Birthday party venue Surat', title: 'Party Venue', featured: false },
  { type: 'image', src: '/Gallery/Copy%20of%20IMG_20251027_192839773.jpg', alt: 'Birthday celebration area Surat', title: 'Celebration Area', featured: false },
  { type: 'image', src: '/Gallery/Copy%20of%20IMG_20251030_122913893.jpg', alt: 'Private birthday party Surat', title: 'Private Party', featured: false },
  { type: 'image', src: '/Gallery/Copy%20of%20IMG_20251030_123033373.jpg', alt: 'Birthday surprise decoration Surat', title: 'Surprise Decor', featured: false },
  { type: 'image', src: '/Gallery/Copy%20of%20IMG_20251030_123334888.jpg', alt: 'Amazing birthday setup Surat', title: 'Amazing Setup', featured: false },
  { type: 'image', src: '/Gallery/Copy%20of%20IMG_20251030_123507143.jpg', alt: 'Beautiful birthday venue Surat', title: 'Beautiful Venue', featured: false },
];

interface FFCGalleryProps {
  title?: string;
  subtitle?: string;
  maxItems?: number;
  showFilters?: boolean;
  className?: string;
}

export function FFCGallery({ 
  title = "Our Gallery", 
  subtitle = "Real celebrations, real memories",
  maxItems = 12,
  showFilters = false,
  className = ""
}: FFCGalleryProps) {
  const filteredItems = galleryItems.slice(0, maxItems);
  const photoCount = galleryItems.length;

  return (
    <section className={`py-12 md:py-16 bg-gradient-to-br from-rose-100 via-white to-rose-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-rose-100 text-rose-900 border-rose-200">
            <ImageIcon className="h-4 w-4 mr-2" /> {title}
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 font-serif">
            {subtitle}
          </h2>
          <p className="text-gray-600">
            Browse our collection of birthday celebrations in Surat
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredItems.map((item, index) => (
            <div 
              key={`${item.src}-${index}`}
              className={`relative group overflow-hidden rounded-xl ${
                item.featured ? 'col-span-2 row-span-2' : 'aspect-square'
              }`}
            >
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Compact gallery for keyword/area pages
export function FFCGalleryCompact({ 
  title = "Gallery",
  maxItems = 8 
}: { title?: string; maxItems?: number }) {
  return (
    <FFCGallery 
      title={title}
      subtitle="See Our Celebrations"
      maxItems={maxItems}
      showFilters={false}
    />
  );
}

export default FFCGallery;
