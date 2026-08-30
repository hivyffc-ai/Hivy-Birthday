'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import { siteConfig, getAllBlogPosts, BlogPost } from '@/lib/ffc-config';

const blogFaqs = [
  { question: "What topics does HIVY's birthday blog cover?", answer: "Our blog covers birthday celebration ideas, surprise planning tips, decoration inspirations, cake trends, romantic birthday gestures, gift pairing suggestions, and real celebration stories from couples in Surat." },
  { question: "How often is the birthday blog updated?", answer: "We publish new articles regularly covering seasonal birthday trends, fresh celebration ideas, and timely tips for planning memorable birthday surprises." },
  { question: "Can I get birthday surprise ideas from the blog?", answer: "Absolutely! Our blog features detailed guides on planning birthday surprises, from midnight celebrations to romantic dinner setups. Each article provides actionable tips you can use." },
  { question: "Are the blog articles specific to Surat?", answer: "Yes, many articles focus on celebrating birthdays in Surat, including local recommendations, venue insights, and tips specific to our city's celebration culture." },
  { question: "Can I suggest a birthday topic for the blog?", answer: "Yes! We welcome topic suggestions from our readers. Contact us with your ideas and we may feature your question or topic in upcoming articles." },
  { question: "Does the blog feature real birthday celebration stories?", answer: "Yes, with the consent of our guests, we share real stories of memorable birthday celebrations at HIVY. These offer inspiration and give you an idea of what to expect." },
  { question: "Are there decoration ideas in the blog?", answer: "Definitely! We share balloon arrangement ideas, color theme suggestions, romantic décor tips, and DIY elements you can request for your birthday celebration." },
  { question: "Does the blog have birthday cake ideas?", answer: "Yes, we feature articles on trending birthday cake designs, flavor combinations, and how to choose the perfect cake for your celebration." },
  { question: "Can couples find relationship birthday content?", answer: "Absolutely! Many articles focus on celebrating your partner's birthday romantically, including gift ideas, surprise gestures, and planning the perfect romantic birthday dinner." },
  { question: "How can the blog help me plan a birthday at HIVY?", answer: "Our articles guide you through package selection, customization ideas, timing suggestions, and help you create a celebration that matches your vision perfectly." }
];

export default function FFCBlogPage() {
  const posts = getAllBlogPosts();
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1);

  const categories = Array.from(new Set(posts.map(p => p.category)));

  const blogFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": blogFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogFaqJsonLd) }} />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://birthdaysurprisesurat.com" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://birthdaysurprisesurat.com/blog" }
            ]
          })
        }}
      />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-rose-100 via-rose-50 to-rose-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-rose-100 text-rose-900 mb-4">
              Our Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Celebration Ideas & Inspiration
            </h1>
            <p className="text-lg text-gray-600">
              Discover tips, guides, and ideas for planning the perfect celebration in Surat. 
              From birthday surprises to romantic proposals, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="cursor-pointer hover:bg-rose-100 px-4 py-2">
              All Posts
            </Badge>
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="cursor-pointer hover:bg-rose-100 px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Rich SEO Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-gray-900">
                Birthday Celebration Inspiration & Ideas
              </h2>
              <p>
                Planning the perfect birthday celebration for someone you love is an art form, and the HIVY Birthday blog is your ultimate guide to mastering it. Whether you're searching for <strong>birthday surprise ideas for your boyfriend in Surat</strong>, looking for <strong>romantic birthday celebration venues</strong>, or gathering inspiration for a <strong>midnight birthday surprise</strong>, our collection of articles is designed to spark your creativity and guide your planning journey. Every piece of content is crafted by our celebration team — the same experts who have orchestrated hundreds of unforgettable birthday moments at Surat's most trusted private celebration venue.
              </p>
              <p>
                What sets our birthday blog apart from generic party planning websites? <strong>Real, tested experience.</strong> Every tip and idea you'll discover here has been implemented in actual birthday celebrations at HIVY. When we recommend a specific balloon arrangement or suggest the ideal timing for a surprise reveal, it's because we've witnessed the joy it creates firsthand. Our articles draw from countless successful celebrations, giving you insights that simply cannot be found in theoretical planning guides.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                What You'll Discover in Our Birthday Articles
              </h3>
              <p>
                The HIVY Birthday blog covers a comprehensive range of birthday celebration topics tailored specifically for <strong>couples and loved ones in Surat</strong>. Here's a glimpse of the content categories you can explore:
              </p>
              <ul className="space-y-2 my-4">
                <li><strong>Birthday Surprise Planning Guides</strong> — Step-by-step instructions for orchestrating the perfect surprise, from keeping secrets to planning the dramatic reveal moment that your partner or loved one will never forget.</li>
                <li><strong>Romantic Birthday Ideas</strong> — Creative concepts for celebrating your partner's special day, including candlelight birthday dinners, surprise gifts, and intimate celebration setups that strengthen your bond.</li>
                <li><strong>Decoration Inspiration</strong> — Detailed ideas for balloon arrangements, color schemes, fairy light setups, and themed décor that transform any birthday into a visually stunning celebration.</li>
                <li><strong>Birthday Cake Trends</strong> — Guides on selecting the perfect cake design, flavor combinations popular in Surat, and how to coordinate your cake with your overall celebration theme.</li>
                <li><strong>Gift Pairing Suggestions</strong> — Ideas for combining experiences with physical gifts to create multi-layered birthday surprises that show thoughtfulness and care.</li>
                <li><strong>Real Celebration Stories</strong> — Inspiring accounts of actual birthday celebrations at HIVY, showcasing creative ideas that fellow Surat couples have implemented successfully.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Why We Share Birthday Celebration Wisdom
              </h3>
              <p>
                Not every birthday celebration happens at HIVY, and we embrace that reality wholeheartedly. Sometimes you simply need a spark of inspiration — a creative idea that helps you surprise your partner at home, at a restaurant, or at any location meaningful to your relationship. Our blog exists to serve that need generously. We share our celebration expertise freely because we believe that when birthday celebrations across Surat become more thoughtful and creative, everyone benefits.
              </p>
              <p>
                Of course, if you read an idea that excites you and realize it would look absolutely spectacular in one of our professionally decorated private celebration spaces, we're always just a <a href={`tel:${siteConfig.phone}`} className="text-rose-700 font-bold hover:underline">phone call</a> or <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold hover:underline">WhatsApp message</a> away. Many of our most memorable birthday celebrations began with a partner reading our blog at night and thinking, "This is exactly how I want to celebrate their special day."
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Trending Birthday Celebration Ideas in Surat
              </h3>
              <p>
                Based on recent celebrations at HIVY and the questions couples ask us most frequently, here are the birthday celebration trends dominating Surat right now:
              </p>
              <ol className="space-y-2 my-4 list-decimal list-inside">
                <li><strong>Midnight Birthday Surprises</strong> — Booking a late-evening slot so the clock strikes midnight during the celebration, allowing partners to be the first to wish their loved one on their actual birthday.</li>
                <li><strong>Blindfold Reveal Entries</strong> — Partners are led blindfolded into a fully decorated birthday setup, with the reveal moment captured on video for lasting memories.</li>
                <li><strong>Personalized Photo Walls</strong> — Custom displays featuring relationship milestones, inside jokes, and cherished memories that make the birthday person feel truly celebrated.</li>
                <li><strong>Surprise Guest Coordination</strong> — Secretly arranging for friends or family members to appear during the celebration, adding an emotional layer to the birthday experience.</li>
                <li><strong>Themed Birthday Experiences</strong> — From elegant noir aesthetics to colorful balloon gardens, customized themes that reflect the birthday person's personality and preferences.</li>
              </ol>
              <p>
                Explore our articles below for detailed guides on implementing these trends and discovering countless more birthday celebration ideas. Every article is designed to give you practical, actionable insights you can use immediately — whether you're planning a celebration at HIVY or anywhere else in Surat.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Link href={`/blog/${featuredPost.slug}`}>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-rose-900">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-rose-700 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime} read
                    </span>
                  </div>
                  <Button className="w-fit bg-gradient-to-r from-rose-700 to-rose-600 hover:from-rose-800 hover:to-rose-700">
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Birthday Blog FAQs
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {blogFaqs.map((faq, index) => (
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-700 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Plan Your Celebration?
          </h2>
          <p className="text-rose-100 mb-8 max-w-2xl mx-auto">
            Turn your special birthday moments into unforgettable memories at HIVY - Birthday Surprise Planners, 
            Surat's premier private birthday celebration venue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-rose-700 hover:bg-rose-100"
              asChild
            >
              <Link href="/packages">View Packages</Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white"
              asChild
            >
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                Book on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}

// Blog Card Component
function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 group">
        <div className="relative h-48">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <Badge className="absolute top-3 left-3 bg-rose-900">
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
  );
}
