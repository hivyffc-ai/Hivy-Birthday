'use client';

import React from 'react';
import { Utensils, Wine, Clock, Gift, Music, Camera, Heart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { menuItems, siteConfig } from '@/lib/ffc-config';

const menuFaqs = [
  { question: "What is included in the birthday dinner menu at HIVY?", answer: "Our birthday menu includes welcome drinks, starters (veg/non-veg options), main course with paneer/chicken dishes, dal, rice, naan, and a celebratory dessert. Customizations available on request." },
  { question: "Can I customize the birthday dinner menu?", answer: "Yes! All menu items can be customized based on preferences. We accommodate vegetarian, non-vegetarian, Jain food requirements, and dietary restrictions with advance notice." },
  { question: "Is birthday cake included in the menu?", answer: "Yes, all birthday packages include a complimentary celebration cake. Premium custom cakes with names, themes, or larger sizes are available as upgrades." },
  { question: "What food options are available for kids' birthdays?", answer: "We offer kid-friendly menu options including pasta, pizza-style starters, mild curries, and fun desserts. Let us know the age group and we'll customize accordingly." },
  { question: "Can I bring my own birthday cake?", answer: "Yes, you're welcome to bring a custom cake from your preferred bakery. Our complimentary cake can be adjusted from the package accordingly." },
  { question: "Do you have vegetarian options for birthday dinners?", answer: "Absolutely! We have extensive vegetarian options including paneer dishes, mixed vegetables, dal preparations, and vegetarian starters. Full Jain meal options are also available." },
  { question: "What drinks are included in birthday packages?", answer: "Welcome drinks (mocktails/soft drinks) are included. Non-alcoholic champagne can be added for ₹500 for toasting the birthday celebration." },
  { question: "Can I see the menu before booking my birthday celebration?", answer: "Yes, contact us on WhatsApp and we'll share our complete menu with pricing details. You can also discuss custom menu requirements during consultation." },
  { question: "Are there options for guests with food allergies?", answer: "Yes, we accommodate food allergies and intolerances. Inform us during booking about any allergies (nuts, dairy, gluten) and we'll prepare accordingly." },
  { question: "What desserts are available besides birthday cake?", answer: "Our menu includes chocolate brownie with ice cream, gulab jamun, and seasonal dessert options. We can also arrange custom desserts with advance notice." }
];

export default function FFCMenuPage() {
  const menuFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": menuFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      {/* FAQ Schema for AI & SEO visibility */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuFaqJsonLd) }} />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://birthdaysurprisesurat.com" },
              { "@type": "ListItem", "position": 2, "name": "Menu", "item": "https://birthdaysurprisesurat.com/menu" }
            ]
          })
        }}
      />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-rose-900/20 text-rose-300 border-rose-900/30">
            <Utensils className="h-4 w-4 mr-2" /> Dining Experience
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            LUNCH / DINNER MENU
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Curated Café-Style Delicacies Crafted for Romantic Dates & Private Celebrations
          </p>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Starters Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-serif mb-2">🍽️ Main Course</h2>
              <p className="text-gray-600">Delicious dishes crafted to complement the romantic ambiance</p>
            </div>
            
            <div className="space-y-6">
              {menuItems.starters.map((item, index) => (
                <Card key={index} className="border-rose-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{item.emoji}</span>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Desserts Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-serif mb-2">🍫 Desserts</h2>
              <p className="text-gray-600">Sweet endings for your romantic evening</p>
            </div>
            
            <div className="space-y-6">
              {menuItems.desserts.map((item, index) => (
                <Card key={index} className="border-rose-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{item.emoji}</span>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Add-ons Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-serif mb-2">🎁 What You Will Get</h2>
              <p className="text-gray-600">Cake & Champagne included</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {menuItems.addOns.map((item, index) => (
                <Card key={index} className="border-rose-200 bg-rose-50">
                  <CardContent className="p-6 text-center">
                    <span className="text-5xl mb-4 block">{item.emoji}</span>
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <p className="text-rose-700 font-bold text-lg">{item.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gradient-to-br from-rose-100 to-rose-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-2">✨ The Complete Experience</h2>
            <p className="text-gray-600">What makes your celebration special</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 3 Hours */}
            <Card className="border-rose-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-rose-700" />
                  </div>
                  <h3 className="text-xl font-bold">3 Mesmerizing Hours</h3>
                </div>
                <p className="text-gray-600">
                  Three magical hours designed to create unforgettable memories, where every moment feels like a brushstroke on the canvas of your love story.
                </p>
              </CardContent>
            </Card>

            {/* Tent Decoration */}
            <Card className="border-rose-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-rose-700" />
                  </div>
                  <h3 className="text-xl font-bold">Romantic Tent Decoration</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-rose-700" />
                    Trending Tent Setup for romantic evenings
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-rose-700" />
                    Curtains, Flowers & Twinkling Lights
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-rose-700" />
                    Unique Props & Lower Seating
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-rose-700" />
                    Soft Candle Glow Ambiance
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Dining Experience */}
            <Card className="border-rose-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                    <Utensils className="h-6 w-6 text-rose-700" />
                  </div>
                  <h3 className="text-xl font-bold">Dining Experience</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-rose-700" />
                    Mouth-Watering Dishes
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-rose-700" />
                    Romantic Background Music
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-rose-700" />
                    Perfect mood setting
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cancellation Policy */}
            <Card className="border-rose-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                    <Gift className="h-6 w-6 text-rose-700" />
                  </div>
                  <h3 className="text-xl font-bold">Cancellation Policy</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Rescheduling must be informed at least one day prior. Event can be rescheduled within one month, subject to availability.
                </p>
                <p className="text-rose-700 font-semibold">
                  * No Refund Policy Applicable
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rich SEO Content Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-gray-900">
                Birthday Dining Experience at HIVY
              </h2>
              <p>
                A birthday celebration is only as memorable as its finest details, and at <strong>HIVY – Place for Celebrations</strong> in Surat, the dining experience sits at the heart of every birthday package we offer. Our carefully curated birthday dinner menu transforms a simple meal into a multi-sensory experience that guests remember long after the candles have been blown out and the last slice of cake has been savoured.
              </p>
              <p>
                From the moment you step into your private celebration space, adorned with romantic tent decorations, twinkling fairy lights, and personalized birthday décor, the culinary journey begins with our signature <strong>welcome drinks</strong>. Our refreshing mocktails set the tone for the evening, offering both classic and innovative flavour combinations that delight the palate and prepare your taste buds for the feast ahead.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Starters That Set the Celebration Mood
              </h3>
              <p>
                Our birthday starters are designed to be shared, creating moments of connection as birthday guests sample each dish together. Whether you prefer <strong>vegetarian delights</strong> like crispy paneer tikka, loaded nachos with cheese fondue, or tangy vegetable spring rolls, or <strong>non-vegetarian options</strong> such as succulent chicken wings and spiced kebabs, every starter is prepared fresh and served hot to your private celebration tent.
              </p>
              <p>
                For children's birthday parties, we offer specially curated kid-friendly starters including mini pizzas, cheesy garlic bread, pasta bites, and finger-friendly options that little ones can enjoy without any fuss. We understand that keeping young guests happy is essential to a successful birthday celebration, which is why our kitchen team pays special attention to preparing mild, appealing flavours that children genuinely love.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Main Course Excellence
              </h3>
              <p>
                The main course at HIVY birthday celebrations represents the pinnacle of our culinary offering. Our menu features a thoughtfully balanced selection of dishes that cater to diverse tastes and dietary preferences. <strong>Vegetarian guests</strong> can indulge in creamy paneer butter masala, aromatic dal makhani, seasonal mixed vegetable preparations, and perfectly cooked biryani. Each dish is prepared using fresh ingredients and traditional recipes that have been refined through feedback from hundreds of birthday celebrations.
              </p>
              <p>
                For those preferring <strong>non-vegetarian options</strong>, our kitchen excels in preparing butter chicken, mutton curry, and grilled chicken preparations that balance spice and flavour perfectly. Accompaniments include soft naan bread fresh from the tandoor, fragrant jeera rice, and cooling raita to complement the rich gravies.
              </p>
              <p>
                We also accommodate <strong>Jain dietary requirements</strong> with specialized preparations that exclude onion and garlic while maintaining full flavour profiles. Simply inform us during booking, and our chefs will ensure every dish meets your specific needs without any additional charges.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                The Birthday Cake and Dessert Celebration
              </h3>
              <p>
                No birthday is complete without the iconic cake-cutting moment, and HIVY ensures this tradition is honoured beautifully. Every birthday package includes a <strong>complimentary celebration cake</strong> available in chocolate, butterscotch, vanilla, or red velvet flavours. For those wanting something extra special, we offer premium custom cakes featuring personalized messages, photo prints, themed decorations, and multi-tier designs that become the centrepiece of your celebration photographs.
              </p>
              <p>
                Beyond the birthday cake, our dessert selection includes <strong>warm chocolate brownie</strong> served with vanilla ice cream, traditional gulab jamun, and seasonal fruit options. The dessert course is timed to coincide with the emotional peak of your celebration, ensuring that sweet moments are accompanied by sweet flavours.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Beverages and Refreshments
              </h3>
              <p>
                Throughout your three-hour birthday celebration, beverages flow freely. Welcome mocktails greet guests upon arrival, while <strong>soft drinks, fresh juices, and signature drinks</strong> remain available throughout the event. For those special toasting moments, non-alcoholic champagne can be added for just ₹500, creating a sophisticated celebration atmosphere perfect for photography and video.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Menu Customization and Dietary Accommodations
              </h3>
              <p>
                At HIVY, we recognize that every birthday celebrant has unique preferences. Our <strong>fully customizable menu</strong> allows you to discuss specific dishes, spice levels, portion sizes, and presentation styles during the booking consultation. Whether you need gluten-free alternatives, nut-free preparations for allergy safety, or extra-spicy dishes for adventurous palates, our kitchen team adapts seamlessly.
              </p>
              <p>
                Contact us via WhatsApp to receive our complete menu with pricing details. Our team is happy to suggest combinations, recommend crowd-pleasers, and help you design the perfect birthday feast that matches both your preferences and budget.
              </p>

              <div className="mt-10 p-6 bg-rose-50 border border-rose-200 rounded-xl text-center">
                <p className="text-lg font-semibold text-rose-900 mb-2">
                  Ready to plan your birthday menu?
                </p>
                <p className="text-gray-600">
                  Call <a href={`tel:${siteConfig.phone}`} className="text-rose-700 font-bold hover:underline">{siteConfig.phone}</a> to discuss menu customizations for your celebration.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-rose-50/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Birthday Menu FAQs
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {menuFaqs.map((faq, index) => (
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
      <section className="py-16 bg-gradient-to-r from-rose-700 to-rose-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Ready to Book Your Romantic Dining Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Reserve your table and let us create magical moments for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FFCBookNowButton pageTitle="Menu Page" className="text-lg px-8 py-6 bg-white text-rose-700 hover:bg-rose-100" />
            <a href={`tel:${siteConfig.phone}`}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
                Call {siteConfig.phone}
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
