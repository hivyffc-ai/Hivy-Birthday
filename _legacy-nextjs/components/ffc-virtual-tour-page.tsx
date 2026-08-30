'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, Play, Pause, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { getVisiblePackages } from '@/lib/ffc-config';

const virtualTourFaqs = [
  { question: "What is HIVY's virtual tour?", answer: "Our 360-degree virtual tour lets you explore HIVY's birthday celebration venue from anywhere. Experience the romantic ambiance, decor options, and setup spaces before booking your birthday celebration." },
  { question: "How do I access the virtual tour?", answer: "The virtual tour is available on this page. Simply click to start and use your mouse or finger to navigate around the venue in 360 degrees." },
  { question: "Can I see birthday decoration setups in the virtual tour?", answer: "The virtual tour shows our venue spaces where birthday decorations are set up. Contact us to see photos and videos of specific birthday package setups." },
  { question: "Is the virtual tour exactly like the actual venue?", answer: "Yes, the virtual tour accurately represents our venue. The actual experience is even better with personalized birthday decorations, lighting, and ambiance tailored to your celebration." },
  { question: "Can I visit HIVY in person after viewing the virtual tour?", answer: "Absolutely! We encourage in-person visits. Contact us to schedule a venue tour where you can see the space and discuss your birthday celebration plans." },
  { question: "What should I look for in the virtual tour?", answer: "Explore the main celebration area, seating arrangements, decoration possibilities, and ambiance. Notice how spaces can be transformed for intimate birthday celebrations." },
  { question: "How does the virtual tour help with planning?", answer: "It helps visualize your birthday celebration in our space. You can plan decoration placement, seating arrangements, and understand the romantic atmosphere you'll experience." },
  { question: "Can I share the virtual tour with others?", answer: "Yes, share this page with friends and family to show them where you're planning your birthday celebration. It helps them understand the exclusive experience." },
  { question: "Is the venue available for midnight birthday celebrations?", answer: "Yes! Our venue hosts midnight birthday surprises too. The romantic ambiance you see in the virtual tour looks even more magical with evening lighting." },
  { question: "After viewing the virtual tour, how do I book?", answer: "Contact us via WhatsApp at 9727027278 or fill the booking form. Share your birthday date, preferred package, and any customizations. We'll confirm availability and guide you." }
];

const virtualTourFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": virtualTourFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
};

export default function FFCVirtualTourPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(virtualTourFaqJsonLd) }} />
      <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-700 via-rose-500 to-rose-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Camera className="h-4 w-4 mr-2" /> Explore Our Spaces
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Virtual Tour
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Take a sneak peek into our birthday celebration spaces before you book
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xs mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold font-serif mb-4">Watch Our Space</h2>
              <p className="text-gray-600">Experience the magic of HIVY - Birthday Surprise Planners</p>
            </div>
            
            {/* Vertical Video */}
            <div 
              className="aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl relative group"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(isPlaying ? false : true)}
            >
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/videos/virtual-tour.mp4" type="video/mp4" />
                <source src="/videos/InShot_20250111_162317353.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Custom Controls Overlay */}
              <div 
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${
                  showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Play/Pause Button */}
                <button
                  onClick={handlePlayPause}
                  className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
                >
                  {isPlaying ? (
                    <Pause className="w-10 h-10 text-rose-700" fill="currentColor" />
                  ) : (
                    <Play className="w-10 h-10 text-rose-700 ml-1" fill="currentColor" />
                  )}
                </button>
                
                {!isPlaying && (
                  <p className="text-white text-sm mt-4 font-medium drop-shadow-lg">Tap to play</p>
                )}
              </div>

              {/* Mute Button - Bottom Right */}
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all z-20"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">Our Setups Gallery</h2>
            <p className="text-gray-600">Explore our 5 unique celebration spaces</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
            {getVisiblePackages().map((pkg) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group">
                  <div className="aspect-square bg-gradient-to-br from-rose-100 to-rose-50 relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-semibold">View Details</span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-sm line-clamp-1 group-hover:text-rose-700 transition-colors">
                      {pkg.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance Features */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">The Ambiance</h2>
            <p className="text-gray-400">Every detail crafted for romance</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { emoji: "🕯️", title: "Candles" },
              { emoji: "💡", title: "Fairy Lights" },
              { emoji: "🌹", title: "Flowers" },
              { emoji: "🎈", title: "Balloons" },
              { emoji: "🎶", title: "Music" },
              { emoji: "✨", title: "Décor" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <span className="text-5xl mb-3 block">{item.emoji}</span>
                <p className="font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif">
            Ready to Experience It In Person?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            The real magic is best experienced in person. Book your celebration today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages">
              <Button size="lg" className="bg-gradient-to-r from-rose-700 to-rose-700 hover:from-rose-800 hover:to-rose-700 text-white">
                View All Packages <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <FFCBookNowButton pageTitle="Virtual Tour" className="text-lg px-8 py-6" />
          </div>
        </div>
      </section>

      {/* Rich SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-center mb-8 font-serif text-rose-800">Experience HIVY's Birthday Venue Virtually</h2>
            
            <p className="text-gray-700 leading-relaxed">
              Planning a birthday celebration in Surat becomes effortless when you can explore the venue before booking. HIVY's 360-degree virtual tour offers couples and families an immersive preview of our exclusive birthday celebration spaces. Whether you're organizing a surprise birthday party, milestone celebration, or intimate gathering, our virtual tour helps you visualize exactly how your special day will unfold in our beautifully decorated venue.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-rose-700">Benefits of Virtual Tour Before Booking Your Birthday Celebration</h3>
            <p className="text-gray-700 leading-relaxed">
              Our virtual tour eliminates guesswork from birthday planning. You can explore every corner of HIVY's celebration venue from the comfort of your home, understanding the layout, ambiance, and decoration possibilities. This preview helps you make informed decisions about package selection, seating arrangements, and customization options. Couples planning surprise birthdays find immense value in secretly exploring the venue without bringing their partner along.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-rose-700">What to Explore in Our 360-Degree Virtual Tour</h3>
            <p className="text-gray-700 leading-relaxed">
              Navigate through our venue to discover the main celebration area where your birthday setup will be arranged. Notice the elegant lighting fixtures that create romantic ambiance, the spacious seating arrangements perfect for intimate gatherings, and the versatile spaces that transform beautifully with balloon decorations, flower arrangements, and fairy lights. Pay attention to how natural light enters during daytime celebrations and how the space transforms into a magical setting for evening and midnight birthday surprises.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-rose-700">Understanding the Romantic Ambiance at HIVY</h3>
            <p className="text-gray-700 leading-relaxed">
              The virtual tour captures the essence of HIVY's signature romantic atmosphere. Our venue features thoughtfully designed interiors with warm color palettes, elegant furnishings, and architectural details that photograph beautifully for your celebration memories. The ambiance you experience virtually translates perfectly to your actual birthday celebration, enhanced further with personalized decorations, candles, and your chosen theme elements.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-rose-700">Planning Decorations and Setup Through Virtual Preview</h3>
            <p className="text-gray-700 leading-relaxed">
              Use the virtual tour strategically to plan your birthday decorations. Identify wall spaces perfect for birthday banners, corners ideal for balloon arrangements, and table areas suitable for cake presentations. Understanding the spatial layout helps you communicate your vision clearly to our decoration team, ensuring the final setup exceeds your expectations. Many guests use screenshots from the virtual tour during planning discussions.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-rose-700">Privacy and Exclusivity of Our Birthday Venue</h3>
            <p className="text-gray-700 leading-relaxed">
              The virtual tour showcases our commitment to private celebrations. Unlike restaurants or shared venues, HIVY offers exclusive access during your birthday booking. The intimate spaces you explore virtually are reserved entirely for your celebration, ensuring privacy for surprise reveals, personal moments, and uninterrupted celebrations with your loved ones.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-rose-700">How Virtual Tour Helps Surprise Birthday Planning</h3>
            <p className="text-gray-700 leading-relaxed">
              Planning a surprise birthday becomes seamless with our virtual tour. The birthday planner can explore venues, select preferred setups, and coordinate with our team entirely through virtual preview and WhatsApp communication. No need to bring the birthday person for venue visits. Every detail from decoration placement to seating can be planned secretly, ensuring the ultimate surprise reveal when they finally experience HIVY firsthand.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-rose-700">Venue Transformation for Birthday Celebrations</h3>
            <p className="text-gray-700 leading-relaxed">
              While the virtual tour shows our base venue, imagine the transformation possible with each birthday package. Our team decorates the space with colorful balloons, fresh flowers, fairy lights, birthday banners, and themed elements based on your chosen package. The elegant venue you see virtually becomes a personalized celebration space reflecting the birthday person's preferences and your vision.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-rose-700">Why Couples and Families Love Online Venue Preview</h3>
            <p className="text-gray-700 leading-relaxed">
              HIVY's virtual tour saves time and provides convenience for busy individuals planning birthday celebrations. Families coordinating from different locations can share the virtual tour link, allowing everyone to contribute to planning decisions. Long-distance couples can explore the venue together through video calls while viewing the virtual tour, making collaborative birthday planning enjoyable despite geographical distances.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-rose-700">Scheduling In-Person Visits After Virtual Exploration</h3>
            <p className="text-gray-700 leading-relaxed">
              After exploring our virtual tour, many guests prefer scheduling an in-person visit. Contact us to arrange a venue walkthrough where you can experience the ambiance firsthand, feel the space dimensions, and discuss your birthday celebration requirements with our team. In-person visits complement the virtual tour experience, helping finalize decoration details and package customizations.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-rose-700">Booking Process After Virtual Tour Exploration</h3>
            <p className="text-gray-700 leading-relaxed">
              Once you've explored our virtual tour and are ready to book, the process is simple. Contact us via WhatsApp at 9727027278 or submit an inquiry through our booking form. Share your preferred birthday date, time slot (we offer afternoon, evening, and midnight slots), chosen package, and any customization requests. Our team will confirm availability, provide a detailed quote, and guide you through securing your booking. The virtual tour experience continues helping even after booking, as you can reference it while finalizing decoration and arrangement preferences with our team.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about our virtual tour</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {virtualTourFaqs.map((faq, index) => (
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
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
    </>
  );
}
