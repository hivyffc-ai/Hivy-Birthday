'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Gift, ChevronRight, Star, Clock, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { getVisiblePackages, formatPrice } from '@/lib/ffc-config';

const packagesFaqs = [
  { question: "What birthday packages does HIVY offer?", answer: "HIVY offers 5 birthday celebration packages: Tent of Romance (₹6500), Fairy Tale (₹6300), BoHo Chic (₹5700), Swing of LOVE (₹5100), and Elite Group Setup (₹5400). Each includes birthday decorations, cake, and 3 hours private venue." },
  { question: "Which package is best for midnight birthday surprises?", answer: "All packages work perfectly for midnight celebrations. Tent of Romance and Fairy Tale are especially popular for midnight birthday surprises due to their cozy, intimate settings." },
  { question: "Is birthday cake included in packages?", answer: "Yes! All birthday packages include a complimentary birthday cake. You can upgrade to premium custom cakes with names, themes, or larger sizes for additional cost." },
  { question: "Can I add birthday balloons to any package?", answer: "Absolutely! Birthday balloon arrangements can be added to any package. We offer colorful balloon bouquets, number balloons for age, and custom balloon arches." },
  { question: "Which package is best for surprising my girlfriend/boyfriend?", answer: "Tent of Romance is most popular for romantic birthday surprises. For a whimsical touch, Fairy Tale works beautifully. Swing of LOVE adds a playful element that many couples love." },
  { question: "Can I customize the birthday decorations?", answer: "Yes! Every birthday setup is fully customizable. Choose specific colors, add personalized banners, incorporate photos, or request specific birthday themes." },
  { question: "Is the Elite Group Setup good for couples?", answer: "While Elite Group Setup can accommodate more guests, it's equally perfect for couples who want more space. The setup is adjusted to create an intimate ambiance for two." },
  { question: "How do birthday packages differ from regular packages?", answer: "Birthday packages come with standard birthday elements like birthday banners, balloon arrangements, and birthday cake. Additional birthday touches can be added based on your preferences." },
  { question: "Can I bring my own birthday cake?", answer: "Yes, you're welcome to bring your own cake. Our complimentary cake can be removed from the package with a small adjustment. Many choose this for custom bakery cakes." },
  { question: "What's included in the birthday photography package?", answer: "Birthday photography (₹2700) includes capturing the surprise reveal, cake cutting, couple photos, and celebration moments. You receive 10-15 edited photos and a reel with same-day delivery." }
];

export default function FFCPackagesPage() {
  const visiblePackages = getVisiblePackages();

  const packagesFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": packagesFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };
  
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(packagesFaqJsonLd) }} />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://birthdaysurprisesurat.com" },
              { "@type": "ListItem", "position": 2, "name": "Birthday Packages", "item": "https://birthdaysurprisesurat.com/packages" }
            ]
          })
        }}
      />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-700 via-rose-500 to-rose-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Gift className="h-4 w-4 mr-2" /> 5 Unique Setups
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Our Packages
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Choose from 5 stunning romantic setups designed to make your celebration unforgettable
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-6">
            {visiblePackages.map((pkg, index) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="overflow-hidden border-rose-200 hover:shadow-xl transition-all group h-full">
                  {/* Image */}
                  <div className="aspect-square bg-gradient-to-br from-rose-100 to-rose-50 relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 md:top-4 md:left-4 bg-rose-700 text-white text-xs">
                      Setup {index + 1}
                    </Badge>
                  </div>
                  
                  {/* Content */}
                  <CardContent className="p-2.5 sm:p-3 md:p-4">
                    <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1 group-hover:text-rose-700 transition-colors leading-tight">
                      {pkg.name} {pkg.emoji}
                    </h2>
                    <p className="text-gray-600 text-xs md:text-sm mb-2 line-clamp-2 hidden md:block">
                      {pkg.shortDescription}
                    </p>
                    
                    {/* Price */}
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
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">What's Included in Every Package</h2>
            <p className="text-gray-600">All our packages come with these essential elements</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🕐", title: "3 Hours Private Time", desc: "Exclusive private celebration" },
              { icon: "🥂", title: "Welcome Drink", desc: "Refreshing start to your evening" },
              { icon: "🍰", title: "Celebration Cake", desc: "Complimentary cake included" },
              { icon: "🎶", title: "Romantic Music", desc: "Soft melodies throughout" },
              { icon: "🕯️", title: "Candle Setup", desc: "Warm candlelight ambiance" },
              { icon: "🎈", title: "Decorations", desc: "Beautiful thematic decor" },
              { icon: "🛋️", title: "Comfortable Seating", desc: "Cozy seating arrangements" },
              { icon: "📸", title: "Photo-Ready Setup", desc: "Instagram-worthy backdrops" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-rose-50/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 font-serif">Your Complete Birthday Celebration Package Guide</h2>
          <div className="prose prose-lg prose-rose max-w-none text-gray-700">
            <h3 className="text-xl font-bold text-rose-800 mt-6">Why Private Birthday Venues Beat Traditional Parties</h3>
            <p>
              Traditional birthday celebrations at restaurants come with inherent challenges: crowded spaces, limited decoration options, rushed service, and the awkwardness of celebrating personal moments surrounded by strangers. Private birthday venues like HIVY transform this experience completely. Your birthday celebration unfolds in an exclusively booked space where every decoration is set up fresh for your special day, where no strangers watch your cake cutting, and where you control the entire atmosphere. In Surat, couples and families increasingly choose private venues for birthday celebrations because they offer something restaurants simply cannot—complete privacy to laugh, celebrate, and create memories without self-consciousness.
            </p>

            <h3 className="text-xl font-bold text-rose-800 mt-8">Perfect Birthday Package for Every Age Group and Occasion</h3>
            <p>
              Birthday celebrations vary dramatically based on who's celebrating. For romantic partner birthdays in your twenties and thirties, Swing of LOVE creates playful yet intimate energy perfect for couples who want fun-filled celebrations. Fairy Tale settings transport twenty-something birthday girls into magical moments they'll treasure forever. For milestone birthdays like 30th, 40th, or 50th celebrations, Tent of Romance offers the luxurious intimacy that mature celebrations deserve. BoHo Chic appeals to those with contemporary tastes who appreciate Instagram-worthy aesthetics. Elite Group Setup opens possibilities for celebrating with close friends or family members who you want to include in your special day.
            </p>

            <h3 className="text-xl font-bold text-rose-800 mt-8">Birthday-Specific Customizations Available at HIVY</h3>
            <p>
              Every HIVY package transforms for birthday celebrations through thoughtful customization. We add birthday banners featuring the celebrant's name, number balloons representing their age or milestone, colorful balloon bouquets in their favorite colors, and birthday-themed decorations throughout the setup. Photo walls can display relationship memories or childhood photos. LED lights can spell "Happy Birthday" or the person's name. The standard elegant decorations gain birthday energy while maintaining the romantic, sophisticated atmosphere HIVY is known for. Our team discusses customization preferences during booking to ensure every birthday detail is perfect.
            </p>

            <h3 className="text-xl font-bold text-rose-800 mt-8">How Midnight Birthday Surprises Work at HIVY</h3>
            <p>
              Midnight birthday surprises have become increasingly popular at HIVY, and we've perfected the execution. The person planning the surprise books a late evening slot that spans midnight. They coordinate with our team about arrival timing—typically bringing their partner to HIVY around 11:30 PM for what seems like a regular romantic evening. As the clock approaches midnight, our team ensures everything is ready for the birthday moment: cake positioned perfectly, birthday decorations revealed or enhanced, and perhaps background music transitioning to birthday songs. The countdown happens in a private, beautifully decorated space where the new birthday year begins with celebration rather than sleep. Many midnight surprises include proposals or special gifts revealed at the stroke of twelve.
            </p>

            <h3 className="text-xl font-bold text-rose-800 mt-8">Birthday Balloons, Banners, and Decorations</h3>
            <p>
              Balloons transform any celebration into a festive occasion, and HIVY birthday packages include generous balloon arrangements. Beyond standard packages, you can add helium balloon bouquets that float throughout the space, custom number balloons representing the celebrant's new age, balloon arches framing perfect photo opportunities, and balloon garlands that create Instagram-worthy backdrops. Birthday banners range from elegant script designs to fun colorful options depending on your preference. Wall decorations, hanging elements, and table decor all coordinate to create a cohesive birthday celebration aesthetic. The result is a space that clearly announces "birthday celebration" while maintaining HIVY's signature romantic elegance.
            </p>

            <h3 className="text-xl font-bold text-rose-800 mt-8">Birthday Cake Options and Customization</h3>
            <p>
              Every birthday package includes a complimentary celebration cake sufficient for two people. However, most birthday celebrations benefit from cake customization. You can upgrade to larger cakes for sharing, request specific flavors beyond our standard options, order custom designed cakes featuring names, ages, photos, or themed decorations. Many couples bring cakes from favorite bakeries—we accommodate this by adjusting the package accordingly. Our team ensures candles are ready, cake cutting service is prepared, and birthday singing coordination happens perfectly. The cake cutting moment becomes a highlight, captured beautifully against HIVY's romantic backdrop.
            </p>

            <h3 className="text-xl font-bold text-rose-800 mt-8">Planning Surprise Birthday Celebrations at HIVY</h3>
            <p>
              Surprise birthdays require careful coordination, and our team excels at keeping secrets. All planning happens through private WhatsApp conversations with the person organizing the surprise. Payments and bookings are processed discreetly without any notifications going to the birthday person. On the celebration day, we set up the entire space before arrival, coordinate timing so the birthday person walks into a fully decorated space, and position elements for maximum visual impact upon entry. Many customers create elaborate surprise scenarios—blindfolding partners during the drive, inventing cover stories for the outing, or coordinating with friends for group surprise reveals. Our team adapts to each surprise plan's unique requirements.
            </p>

            <h3 className="text-xl font-bold text-rose-800 mt-8">Making Birthday Packages Instagram-Worthy</h3>
            <p>
              Social media has changed how we document celebrations, and HIVY embraces this by creating spaces designed for photography. Every package includes photo-ready backdrops with careful attention to lighting, color coordination, and visual composition. Birthday celebrations gain dedicated photo walls with themed decorations, balloon arrangements positioned for optimal photography, and lighting that flatters every couple. Many birthday celebrants spend significant time capturing the setup, posing for couple photos, recording reels of the decorated space, and documenting every celebration moment. These photographs become lasting memories shared with friends, family, and social media followers.
            </p>

            <h3 className="text-xl font-bold text-rose-800 mt-8">Adding Photography to Birthday Packages</h3>
            <p>
              While every HIVY setup photographs beautifully with smartphone cameras, professional photography elevates birthday documentation significantly. Our photography add-on (₹2700) includes a professional photographer who captures the birthday celebration comprehensively: decoration details, couple portraits, candid celebration moments, cake cutting rituals, and the overall ambiance. For surprise birthdays, the photographer captures the genuine surprise reaction—an expression impossible to recreate. The package delivers 10-15 professionally edited photographs plus a 30-45 second celebration reel, all provided same-day for immediate sharing. Birthday celebrations become professionally documented memories lasting far beyond the three-hour celebration.
            </p>

            <h3 className="text-xl font-bold text-rose-800 mt-8">Why Couples Love Celebrating Birthdays at HIVY</h3>
            <p>
              Birthdays in relationships represent more than age milestones—they're opportunities to demonstrate love and appreciation. HIVY provides the setting for these demonstrations in ways ordinary venues cannot. Couples celebrate partner birthdays here because the private setting allows genuine emotional expression without public observation. The romantic decorations communicate care and effort without requiring the stress of personal setup. The comprehensive package means everything is handled—decorations, dining, cake, ambiance—leaving couples free to simply enjoy each other's company. Many couples establish HIVY birthday traditions, returning annually to celebrate each other's birthdays in spaces that have witnessed their relationship milestones. The consistency of quality combined with the variety of package options keeps birthday celebrations feeling special year after year.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700 border-rose-300">
              <HelpCircle className="h-4 w-4 mr-2" /> Package FAQs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Frequently Asked Questions About Our Birthday Packages
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {packagesFaqs.map((faq, index) => (
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

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
