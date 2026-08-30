'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star, Users, Award, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import FFCReviewsSlider from '@/components/ffc-reviews-slider';
import { siteConfig } from '@/lib/ffc-config';

// About page FAQs
const aboutFaqs = [
  {
    question: "What makes HIVY the best birthday surprise venue in Surat?",
    answer: "HIVY is Surat's premier birthday surprise venue with 4.9★ Google rating, offering completely private celebrations, premium decorations with balloon arrangements and fairy lights, complimentary birthday cake, and personalized setups. Our venue at The Boulevard, Adajan provides an exclusive experience for couples celebrating birthdays."
  },
  {
    question: "Can I plan a midnight birthday surprise at HIVY?",
    answer: "Yes! Midnight birthday surprises are our specialty. We coordinate the entire setup secretly, ensuring everything is ready for a 12 AM celebration. Our team handles decorations, cake, and ambiance so your partner walks into a magical birthday surprise."
  },
  {
    question: "What birthday decoration options are available at HIVY?",
    answer: "HIVY offers extensive birthday decoration options including balloon arrangements, fairy lights, rose petal designs, personalized banners, LED candles, and themed backdrops. Each birthday package can be customized to match your vision and color preferences."
  },
  {
    question: "How far in advance should I book HIVY for a birthday surprise?",
    answer: "We recommend booking at least 3-5 days in advance for birthday surprises, especially for weekends and special dates. Last-minute bookings may be accommodated based on availability. Contact us on WhatsApp for real-time slot availability."
  },
  {
    question: "Is birthday cake included in HIVY's packages?",
    answer: "Yes, most of our birthday packages include a complimentary celebration cake. Premium cake upgrades and custom cake designs are also available at additional cost. We ensure the cake perfectly matches your birthday celebration theme."
  },
  {
    question: "Can I customize the birthday setup at HIVY?",
    answer: "Absolutely! Every birthday celebration at HIVY is fully customizable. You can choose specific decoration colors, add personalized messages with rose petals, select your preferred music playlist, and even bring personal items like photos or gifts for the setup."
  },
  {
    question: "Is HIVY suitable for planning a surprise birthday party?",
    answer: "HIVY is perfect for surprise birthday parties for couples. Our team coordinates secretly with you to plan every detail. We handle the venue transformation while keeping your partner completely unaware until the big reveal moment."
  },
  {
    question: "What is the duration of a birthday celebration at HIVY?",
    answer: "Standard birthday celebrations at HIVY are 3 hours, giving you ample time for the surprise reveal, photography, cake cutting, dining, and creating beautiful memories. Extended time slots can be arranged based on availability."
  },
  {
    question: "Does HIVY offer photography services for birthdays?",
    answer: "Yes, HIVY offers professional photography packages starting at ₹2700 for birthday celebrations. This includes 10-15 edited photos, a 30-45 second reel, and same-day delivery. Our photographers capture the surprise moment and all celebration highlights."
  },
  {
    question: "How do I book a birthday surprise at HIVY?",
    answer: "Booking is simple! WhatsApp us at +91 9727027278 with your preferred date, time slot, and celebration details. Our team will confirm availability, discuss customization options, and guide you through the booking process. Advance payment secures your slot."
  }
];

export default function FFCAboutPage() {
  // FAQ Schema for About page
  const aboutFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": aboutFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutFaqJsonLd) }}
      />
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://birthdaysurprisesurat.com" },
              { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://birthdaysurprisesurat.com/about" }
            ]
          })
        }}
      />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-700 via-rose-500 to-rose-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Heart className="h-4 w-4 mr-2" /> About Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            About HIVY - Birthday Surprise Planners
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Surat's Premier Destination for Birthday Surprises & Birthday Celebrations
          </p>
        </div>
      </section>

      {/* Our Story - Left Content, Right Image */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-rose-100 text-rose-900 border-rose-200">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Where Birthday Memories Are Created
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At <strong>HIVY - Birthday Surprise Planners</strong> in Surat's Gotri area, we understand how special birthdays are. Couples want to create magical birthday moments for their loved ones, but finding the right venue—a place blending privacy, beautiful décor, and celebratory magic—remains elusive.
                </p>
                <p>
                  That's why we transformed a stunning <strong>private space into Surat's premier destination for birthday surprises</strong>, complete with balloon decorations, fairy lights, and personalized birthday setups. Our private birthday venue offers the perfect escape for couples seeking a memorable birthday celebration in Surat.
                </p>
                <p>
                  From heartfelt <strong>midnight birthday surprises</strong> and <strong>surprise birthday parties for boyfriend/girlfriend</strong> to unforgettable <strong>birthday celebrations for husband/wife</strong>, romantic birthday dinners, and <strong>birthday room decorations</strong>, we've hosted <strong>500+ magical birthday celebrations</strong>.
                </p>
                <p className="font-medium text-rose-900">
                  Our mission: Create unforgettable birthday memories for couples.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-rose-700 to-rose-600 hover:from-rose-800 hover:to-rose-700 text-white">
                    Book Your Moment - Call {siteConfig.phone}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] bg-gradient-to-br from-rose-100 to-rose-50 rounded-2xl overflow-hidden relative shadow-xl">
                <Image
                  src="/hivy-images/5100/4.webp"
                  alt="HIVY - Birthday Surprise Planners Surat - Birthday Celebration Setup"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-semibold">500+ Birthday Celebrations</p>
                  <p className="text-sm opacity-90">Creating birthday memories since 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Users, number: "500+", label: "Magical Evenings" },
              { icon: Star, number: "4.9", label: "Google Rating" },
              { icon: Award, number: "8", label: "Unique Setups" },
              { icon: Clock, number: "5+", label: "Years of Love" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-7 w-7 md:h-8 md:w-8 text-rose-700" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-rose-700">{stat.number}</p>
                <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team - Right Content, Left Image */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-rose-100 to-rose-50 rounded-2xl overflow-hidden relative shadow-xl">
                <Image
                  src="/hivy-images/5100/9.webp"
                  alt="HIVY - Birthday Surprise Planners Team - Birthday Setup Surat"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-semibold">Behind Every Birthday Celebration</p>
                  <p className="text-sm opacity-90">Our passionate birthday planning team</p>
                </div>
              </div>
            </div>
            <div className="order-2">
              <Badge className="mb-4 bg-rose-100 text-rose-900 border-rose-200">
                Our Team
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Behind Every Birthday Celebration
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Meet the passionate team behind the magic at <strong>HIVY - Birthday Surprise Planners</strong>. Committed to crafting unforgettable birthday experiences, our dedicated staff is here to ensure that every detail of your birthday celebration is perfect.
                </p>
                <p>
                  From our talented decoration team who create stunning birthday setups, to our attentive staff who anticipate your every need, each member of our team is dedicated to creating moments of joy and celebration for you and your loved one.
                </p>
                <p>
                  Whether you're planning a <strong>midnight birthday surprise in Surat</strong>, a <strong>birthday surprise for your boyfriend/girlfriend</strong>, a <strong>birthday celebration for husband/wife</strong>, or a <strong>romantic birthday dinner</strong>, our team handles everything from setup to cleanup so you can focus on celebrating.
                </p>
                <p className="font-medium text-rose-900">
                  Join us and let us make your birthday truly extraordinary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Left Content, Right Image */}
      <section className="py-16 md:py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-rose-100 text-rose-900 border-rose-200">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                What Sets Us Apart in Surat
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-rose-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Prime Gotri Private Location</h3>
                    <p className="text-gray-600">Beautiful birthday celebration ambiance, private setups away from crowds on Sevasi-Canal Road. The best private birthday venue in Surat for couples.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-rose-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Custom Birthday Packages</h3>
                    <p className="text-gray-600">Starting ₹4700, including mocktails, birthday cakes, photographer, and themed birthday décor for surprise birthdays, midnight celebrations, and more.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-rose-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Surat's Best Birthday Venue</h3>
                    <p className="text-gray-600">Serving Surat couples with Instagram-famous birthday setups, balloon decorations, and unforgettable birthday experiences.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <Star className="h-5 w-5 text-rose-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">5-Star Birthday Experience</h3>
                    <p className="text-gray-600">From birthday décor setup to cleanup, our team handles everything so you focus on celebrating. Couple-friendly birthday venue with complete privacy.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] bg-gradient-to-br from-rose-100 to-rose-50 rounded-2xl overflow-hidden relative shadow-xl">
                <Image
                  src="/hivy-images/5100/10.webp"
                  alt="Why Choose HIVY - Birthday Surprise Setup Surat"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-semibold">5-Star Birthday Experience</p>
                  <p className="text-sm opacity-90">Trusted by 500+ couples for birthdays</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Birthday Philosophy Section */}
      <section className="py-16 bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-rose-700">Our Philosophy: Making Every Birthday Unforgettable</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>At HIVY, birthdays aren't just dates on a calendar – they're opportunities to celebrate the people we love most. Our birthday surprise venue was born from a simple belief: everyone deserves to feel special on their birthday. Whether it's a midnight surprise, a romantic birthday dinner, or a celebration with unique decorations, we pour our hearts into making every birthday moment magical.</p>
            
            <h3 className="text-2xl font-semibold text-rose-600">The Art of Birthday Surprises</h3>
            <p>Planning a surprise birthday requires careful coordination, creativity, and secrecy. Our experienced team has orchestrated hundreds of successful birthday surprises across Surat. We understand the anticipation of planning, the nervousness of keeping secrets, and the pure joy of watching your loved one's face light up when they walk into a transformed celebration space. Every balloon placement, every fairy light arrangement, every rose petal pattern is designed to create that perfect "wow" moment.</p>
            <p>The art of surprise lies in the details – the timing of arrival, the first glimpse of the transformed space, the crescendo of emotion as realization dawns. We've refined this art through years of experience, learning what creates the most impactful reveals and what touches hearts most deeply. Our team coordinates with military precision while maintaining the warmth and personal touch that makes each surprise feel intimate and special.</p>
            
            <h3 className="text-2xl font-semibold text-rose-600">Midnight Magic</h3>
            <p>There's something incredibly special about celebrating at the stroke of midnight. The first moments of a new birthday, marked by candlelight, cake, and love – these become core memories that last forever. HIVY specializes in midnight birthday celebrations, handling all the logistics so you can focus on the celebration. Our team coordinates timing, prepares the venue, and ensures everything is perfect for that 12 AM magical moment.</p>
            <p>Midnight celebrations at HIVY have become legendary in Surat. Couples arrive in the quiet hours, stepping into spaces transformed by soft lighting and thoughtful decorations. The privacy of the late hour adds intimacy to the experience, and the novelty of celebrating at midnight creates memories that stand apart from every other birthday. We've seen tears of joy, speechless wonder, and overwhelming gratitude in these midnight moments – and each reaction inspires us to make the next celebration even more perfect.</p>
            
            <h3 className="text-2xl font-semibold text-rose-600">Personalization at Heart</h3>
            <p>No two birthdays at HIVY are alike because no two people are alike. We take pride in customizing every celebration to reflect the birthday person's personality and preferences. Love purple? We'll create a violet wonderland. Obsessed with sunflowers? We'll incorporate them beautifully. Want a specific song playing during the cake-cutting? Consider it done. Your birthday vision becomes our creative mission.</p>
            <p>Personalization extends beyond colors and themes. We incorporate meaningful elements – photos from your journey together, inside jokes expressed through decorations, favorite foods featured prominently in the menu. This attention to personal detail transforms a beautiful celebration into something deeply meaningful. When your partner sees elements that reflect your shared history, they understand the thought and love behind every choice.</p>
            
            <h3 className="text-2xl font-semibold text-rose-600">Creating Birthday Traditions</h3>
            <p>Many couples return to HIVY year after year, making us part of their birthday tradition. There's no greater honor than being chosen repeatedly to celebrate life's milestones. These returning couples inspire us to continuously improve, to surprise them with new elements, and to make each visit better than the last. At HIVY, we're not just hosting birthdays – we're becoming part of your love story's special moments.</p>
            <p>Birthday traditions at HIVY often evolve over years – couples who started with modest celebrations now trust us with elaborate surprises, and some have even returned to celebrate milestones like milestone birthdays with their growing families in our group setups. We cherish these long-term relationships and the trust they represent, working always to honor that trust with celebrations that exceed expectations year after year.</p>
          </div>
        </div>
      </section>

      {/* Google Reviews Slider Section */}
      <FFCReviewsSlider />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Ready to Create Birthday Memories?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Book your birthday surprise package today and surprise your partner with birthday memories that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteConfig.phone}`}>
              <Button size="lg" className="bg-gradient-to-r from-rose-700 to-rose-600 hover:from-rose-800 hover:to-rose-700 text-white w-full sm:w-auto">
                <Phone className="h-5 w-5 mr-2" />
                Call {siteConfig.phone}
              </Button>
            </a>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">
              Visit Us
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-rose-200">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-rose-700 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-gray-600 text-sm">{siteConfig.address}</p>
                </CardContent>
              </Card>
              
              <Card className="border-rose-200">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-rose-700 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a href={`tel:${siteConfig.phone}`} className="text-rose-700 hover:text-rose-800 font-medium">
                    {siteConfig.phone}
                  </a>
                </CardContent>
              </Card>
              
              <Card className="border-rose-200">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-rose-700 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href={`mailto:${siteConfig.email}`} className="text-rose-700 hover:text-rose-800">
                    {siteConfig.email}
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Page FAQs */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-rose-700">
            Frequently Asked Questions About Birthday Celebrations
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {aboutFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg border border-rose-200">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-800 hover:text-rose-700">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
    </>
  );
}
