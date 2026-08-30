'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import FFCReviewsSlider from '@/components/ffc-reviews-slider';
import { siteConfig } from '@/lib/ffc-config';

const contactFaqs = [
  { question: "How do I book a birthday celebration at HIVY?", answer: "Simply WhatsApp us at 9727027278 or fill our online booking form. Share your preferred date, package, and any customization needs. We confirm availability and guide you through the booking process." },
  { question: "What is the best way to contact HIVY for birthday bookings?", answer: "WhatsApp is our fastest communication channel. Send your query to 9727027278 and receive responses within minutes. We're available from 10 AM to 12 midnight daily." },
  { question: "How far in advance should I book a birthday celebration?", answer: "We recommend booking 5-7 days in advance, especially for weekends. However, last-minute bookings may be available based on schedule. Contact us to check current availability." },
  { question: "Can I visit HIVY before booking?", answer: "Yes! Venue visits are welcome and help you visualize your birthday celebration. Contact us to schedule a visit and our team will show you the setup options and ambiance." },
  { question: "What payment methods do you accept for birthday bookings?", answer: "We accept UPI, bank transfers, credit/debit cards, and cash. A 50% advance confirms your booking, with the remaining balance due before the celebration." },
  { question: "Can I book HIVY for a midnight birthday surprise?", answer: "Absolutely! Midnight bookings (11 PM - 2 AM) are popular for birthday surprises. Select midnight timing while booking and we'll ensure everything is ready for the special moment." },
  { question: "How do I reschedule or cancel my birthday booking?", answer: "Contact us on WhatsApp at least 48 hours before your booking. We offer rescheduling with no additional charges. Cancellation policies vary based on advance notice." },
  { question: "Where is HIVY located in Surat?", answer: "HIVY is located near VR Mall, Dumas Road, Surat. The exact address is shared after booking confirmation. Ample parking is available nearby." },
  { question: "Can I discuss custom birthday requirements before booking?", answer: "Yes! We encourage discussing your vision before booking. WhatsApp us your ideas, preferred decorations, color themes, and any special requests. We'll create a customized plan." },
  { question: "Is there a customer support team for birthday booking queries?", answer: "Yes, our dedicated team is available 7 days a week from 10 AM to midnight. Reach us via WhatsApp (9727027278) or the contact form for any birthday booking assistance." }
];

export default function FFCContactPage() {
  const contactFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": contactFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFaqJsonLd) }} />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://birthdaysurprisesurat.com" },
              { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://birthdaysurprisesurat.com/contact" }
            ]
          })
        }}
      />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-700 via-rose-500 to-rose-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <MessageCircle className="h-4 w-4 mr-2" /> Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We'd love to hear from you! Book your celebration or ask us anything.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 font-serif">
                Let's Connect
              </h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <Card className="border-rose-100">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-rose-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                        <p className="text-gray-600 mb-2">We're available for calls and booking inquiries</p>
                        <a 
                          href={`tel:${siteConfig.phone}`}
                          className="text-xl font-bold text-rose-700 hover:text-rose-800"
                        >
                          {siteConfig.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* WhatsApp */}
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                        <p className="text-gray-600 mb-2">Quick responses via WhatsApp</p>
                        <a 
                          href={`https://wa.me/${siteConfig.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                        >
                          <MessageCircle className="h-5 w-5" />
                          Chat on WhatsApp
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="border-rose-100">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-rose-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                        <p className="text-gray-600 mb-2">For detailed inquiries and partnerships</p>
                        <a 
                          href={`mailto:${siteConfig.email}`}
                          className="text-rose-700 hover:text-rose-800"
                        >
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card className="border-rose-100">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-rose-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                        <p className="text-gray-600">
                          {siteConfig.address}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Operating Hours */}
                <Card className="border-rose-100">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-rose-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Available Time Slots</h3>
                        <div className="text-gray-600 space-y-2 text-sm">
                          <div>
                            <p className="font-semibold text-rose-800 mb-1">🍽️ Lunch (Indoor)</p>
                            <p>12 PM - 3 PM | 1 PM - 4 PM | 2 PM - 5 PM</p>
                          </div>
                          <div>
                            <p className="font-semibold text-rose-800 mb-1">🌅 Evening (Indoor)</p>
                            <p>4 PM - 7 PM | 5 PM - 8 PM | 6 PM - 9 PM</p>
                          </div>
                          <div>
                            <p className="font-semibold text-rose-800 mb-1">🌙 Dinner (Indoor/Private)</p>
                            <p>7 PM - 10 PM | 7:30 PM - 10:30 PM | 8 PM - 11 PM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <div className="flex gap-4">
                  <a
                    href={siteConfig.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-900 to-pink-500 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href={siteConfig.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 font-serif">
                Book Your Celebration
              </h2>
              <FFCBookingForm pageTitle="Contact Page" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info SEO Section */}
      <section className="py-16 bg-rose-50/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Book Your Birthday Celebration Today</h2>
          <div className="prose prose-lg prose-rose max-w-none text-gray-700">
            <h3 className="text-xl font-bold text-rose-900 mt-6">How to Inquire About Birthday Packages</h3>
            <p>
              Planning a birthday celebration at HIVY is as simple as sending a quick message. Whether you want to surprise your partner with a romantic birthday dinner, celebrate your child's special milestone, or throw an unforgettable party for yourself, our team is ready to help you choose the perfect birthday package. You can reach us through WhatsApp, phone, or by filling out the booking form on this page. When you contact us, share the date you have in mind, the number of guests, the age or theme preference, and any customization ideas you might have. Our birthday specialists will respond with package recommendations tailored specifically to your celebration vision.
            </p>

            <h3 className="text-xl font-bold text-rose-900 mt-8">Fast WhatsApp Response for Birthday Bookings</h3>
            <p>
              WhatsApp is our preferred communication channel for birthday bookings because it allows us to share package images, decoration samples, and menu options instantly. When you message us on WhatsApp, expect a response within five to ten minutes during our operating hours of 10 AM to midnight. Our team can send you photos of past birthday setups, answer any questions about customization, and even share video walkthroughs of our themed birthday tents. For those who prefer voice calls, you can dial our booking number directly and speak with a birthday coordinator who will guide you through every detail.
            </p>

            <h3 className="text-xl font-bold text-rose-900 mt-8">Birthday Booking Timeline — When to Book</h3>
            <p>
              The ideal time to book your birthday celebration at HIVY depends on how elaborate your plans are. For standard birthday packages with our existing themes and decorations, booking five to seven days in advance is usually sufficient. However, if you want extensive customizations like personalized photo walls, specific color themes, custom cakes, or particular decoration elements, we recommend booking at least ten days ahead. Weekend slots, especially Saturday evenings, fill up the fastest, so securing your date early ensures you get your preferred time. For birthdays falling on holidays or special occasions like Valentine's week or New Year's period, two weeks advance booking is advisable.
            </p>

            <h3 className="text-xl font-bold text-rose-900 mt-8">What Information to Share for Birthday Bookings</h3>
            <p>
              To help us create the perfect birthday celebration, please share the following details when you contact us: the birthday person's name and age, your relationship to them, the exact date and preferred time slot, the number of guests attending, any specific theme or color preferences, dietary requirements for the meal, and whether this is a surprise birthday. If you have photos you want incorporated into the decoration, share those as well. The more information you provide upfront, the better we can customize every element of the celebration to exceed your expectations.
            </p>

            <h3 className="text-xl font-bold text-rose-900 mt-8">Coordinating Midnight Birthday Surprises</h3>
            <p>
              Midnight birthdays are among our most requested celebrations. If you want to welcome someone's new age at the stroke of midnight, our team coordinates every detail with precision. We offer special midnight slots from 11 PM to 2 AM specifically for these celebrations. When booking a midnight surprise, let us know your arrival plan and how you want the reveal to happen. Our staff will ensure the cake is positioned perfectly, the candles are lit at the right moment, and the entire ambiance is set for that magical midnight reveal. We have successfully executed hundreds of midnight surprises and know exactly how to make these moments unforgettable.
            </p>

            <h3 className="text-xl font-bold text-rose-900 mt-8">Same-Day Booking Possibilities</h3>
            <p>
              While advance booking is recommended, we understand that spontaneous celebrations are sometimes the most memorable. If you wake up wanting to celebrate a birthday tonight, reach out to us as early as possible. Send a WhatsApp message or call directly to check real-time availability. Same-day bookings depend on slot availability and may have limited customization options, but our standard birthday packages are always ready to deliver a wonderful experience. The earlier you contact us on the same day, the better your chances of securing a slot.
            </p>

            <h3 className="text-xl font-bold text-rose-900 mt-8">Location and Parking Information</h3>
            <p>
              HIVY is located near VR Mall on Dumas Road in Surat's Adajan area, making it easily accessible from all parts of the city. Whether you're coming from Vesu, City Light, Althan, Pal, Varachha, or any other neighborhood, you can reach us within 15 to 30 minutes. Ample free parking is available at our venue for both cars and two-wheelers, so you never have to worry about where to park. Our exact location is shared after booking confirmation, and you can use Google Maps to navigate directly to HIVY Place for Celebrations.
            </p>

            <h3 className="text-xl font-bold text-rose-900 mt-8">Payment Flexibility for Birthday Celebrations</h3>
            <p>
              We offer multiple payment options to make your birthday booking convenient. A 50% advance payment confirms your reservation, and the remaining balance is due before your celebration begins. We accept UPI payments through Google Pay, PhonePe, and Paytm, as well as bank transfers, credit cards, debit cards, and cash. For surprise birthday bookings, we recommend completing the full payment in advance so there are no transactions needed when you arrive with the birthday person.
            </p>

            <h3 className="text-xl font-bold text-rose-900 mt-8">Our Customer Service Commitment for Birthdays</h3>
            <p>
              Birthday celebrations are emotional and meaningful occasions, and our customer service reflects that understanding. From your first inquiry to the final goodbye at your celebration, our team is dedicated to making every interaction smooth and pleasant. We listen carefully to your requirements, offer creative suggestions, provide honest recommendations on packages that fit your budget, and execute every detail with care. If any questions arise before, during, or after your celebration, our team is always available to assist.
            </p>

            <h3 className="text-xl font-bold text-rose-900 mt-8">Why Early Booking Ensures the Best Experience</h3>
            <p>
              Booking your birthday celebration early gives our team the time needed to perfect every detail. Early bookings allow us to source specific decorations, coordinate custom cake designs, prepare personalized photo displays, and ensure every element of your chosen package is executed flawlessly. You also get greater flexibility in choosing your preferred time slot and can make adjustments if your plans change. Couples and families who book early consistently report higher satisfaction because their celebrations receive our fullest attention and preparation.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-serif">Find Us</h2>
            <p className="text-gray-600 mt-2">Visit HIVY - Birthday Surprise Planners in Surat</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0665549872024!2d72.78282829999999!3d21.1895149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d4fc7b5dbb9%3A0xb1aa92785a2443b8!2sHIVY%20-%20Place%20For%20Celebration!5e0!3m2!1sen!2sin!4v1769339702912!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="HIVY - Birthday Surprise Planners Location"
              />
            </div>
            <div className="text-center mt-6">
              <a 
                href="https://maps.app.goo.gl/HIVY-Place-For-Celebration"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-rose-700 hover:bg-rose-800">
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Contact & Birthday Booking FAQs
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {contactFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-rose-50 rounded-lg border border-rose-200 px-6">
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

      {/* Google Reviews Section */}
      <FFCReviewsSlider />

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
