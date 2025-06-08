import type { Metadata } from "next"
import { BookOpen, Users, Target, Heart, Award, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Our Mission to Connect Readers with Great Books",
  description:
    "Learn about BookDiscover's mission to help readers find their next great read through trusted recommendations from influential people, authors, and thought leaders.",
  keywords: [
    "about BookDiscover",
    "book recommendation mission",
    "reading community",
    "book discovery platform",
    "trusted book recommendations",
    "reading culture",
  ],
  openGraph: {
    title: "About BookDiscover - Our Mission to Connect Readers with Great Books",
    description:
      "Learn about our mission to help readers find their next great read through trusted recommendations from influential people and thought leaders.",
    type: "website",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "About BookDiscover - Book Recommendation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About BookDiscover - Our Mission to Connect Readers with Great Books",
    description: "Learn about our mission to help readers find their next great read through trusted recommendations.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function AboutPage() {
  // Schema.org structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BookDiscover",
    description:
      "A book recommendation platform that helps readers discover great books through trusted recommendations from influential people and thought leaders.",
    url: "https://bookdiscover.com",
    logo: "https://bookdiscover.com/logo.png",
    foundingDate: "2023",
    founder: {
      "@type": "Person",
      name: "Sarah Mitchell",
      jobTitle: "Founder & CEO",
    },
    sameAs: [
      "https://twitter.com/bookdiscover",
      "https://facebook.com/bookdiscover",
      "https://instagram.com/bookdiscover",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-234-567-890",
      contactType: "customer service",
      email: "hello@bookdiscover.com",
    },
  }

  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      <div className="min-h-screen bg-white">
        {/* Hero Header Section */}
        <header className="bg-gradient-to-br from-slate-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">About Us</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Connecting readers with life-changing books through trusted recommendations from the world's most
              influential minds.
            </p>
          </div>
        </header>

        {/* Mission Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <article>
              <header className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
              </header>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-8 text-center font-medium text-gray-800">
                  We believe that the right book at the right time can transform lives, spark innovation, and create
                  lasting change.
                </p>

                <p className="mb-6">
                  At BookDiscover, our mission is to bridge the gap between readers and the books that will truly impact
                  their lives. In a world overflowing with content, we recognize that finding genuinely valuable reading
                  material has become increasingly challenging. That's why we've created a platform that curates book
                  recommendations from people whose judgment we trust—influential leaders, innovative thinkers, and
                  accomplished individuals across various fields.
                </p>

                <p className="mb-6">
                  We understand that a book recommendation carries more weight when it comes from someone whose
                  expertise and experience you respect. Whether it's a CEO sharing the business book that shaped their
                  strategy, a scientist recommending a work that influenced their research, or an artist highlighting a
                  novel that sparked their creativity, these personal endorsements provide invaluable guidance for
                  readers seeking their next meaningful read.
                </p>

                <p className="mb-6">
                  Our platform goes beyond simple book listings. We provide context, insights, and the stories behind
                  why influential people recommend specific books. This approach helps readers not just find books, but
                  understand the potential impact these works might have on their own lives and careers.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do at BookDiscover
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Over Quantity</h3>
                <p className="text-gray-600 leading-relaxed">
                  We carefully curate recommendations rather than overwhelming users with endless options. Every book on
                  our platform has been thoughtfully recommended by someone whose opinion matters.
                </p>
              </article>

              <article className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Trusted Sources</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our recommendations come from verified influential people—leaders, innovators, and experts who have
                  demonstrated excellence in their respective fields.
                </p>
              </article>

              <article className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Reader-Centric</h3>
                <p className="text-gray-600 leading-relaxed">
                  Everything we build is designed with readers in mind. We focus on creating meaningful connections
                  between people and books that will genuinely enrich their lives.
                </p>
              </article>

              <article className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Diverse Perspectives</h3>
                <p className="text-gray-600 leading-relaxed">
                  We celebrate diverse voices and perspectives, featuring recommendations from people across different
                  industries, cultures, and backgrounds.
                </p>
              </article>

              <article className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <Award className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We strive for excellence in every aspect of our platform, from the quality of our recommendations to
                  the user experience we provide.
                </p>
              </article>

              <article className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lifelong Learning</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe in the transformative power of reading and are committed to fostering a culture of
                  continuous learning and intellectual curiosity.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <article>
              <header className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
              </header>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-8 text-center font-medium text-gray-800">
                  To create a world where every reader can easily discover books that will profoundly impact their
                  personal and professional growth.
                </p>

                <p className="mb-6">
                  We envision a future where book discovery is no longer a matter of chance or overwhelming choice, but
                  a guided journey informed by the wisdom and experience of those who have walked similar paths. Our
                  platform aims to become the definitive resource for readers seeking books that will challenge their
                  thinking, expand their horizons, and accelerate their growth.
                </p>

                <p className="mb-6">
                  By connecting readers with carefully curated recommendations from influential figures across diverse
                  fields, we're building a global community of learners who understand that the right book can be a
                  catalyst for extraordinary change. We believe that when people read better books, they make better
                  decisions, create better solutions, and ultimately build a better world.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Founder</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The vision behind BookDiscover started with one person's passion for connecting readers with
                life-changing books.
              </p>
            </header>

            <article className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-200">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                {/* Founder Image */}
                <div className="flex-shrink-0">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Sarah Mitchell, Founder and CEO of BookDiscover"
                    className="w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover shadow-lg border-4 border-white"
                  />
                </div>

                {/* Founder Bio */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Sarah Mitchell</h3>
                  <p className="text-emerald-600 font-semibold mb-6 text-lg">Founder & CEO</p>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <p className="mb-4">
                      Sarah Mitchell founded BookDiscover after spending over a decade in the publishing industry, where
                      she witnessed firsthand the challenge readers face in discovering truly impactful books. With a
                      background in both technology and literature, Sarah recognized the opportunity to leverage digital
                      platforms to create more meaningful connections between readers and books.
                    </p>

                    <p className="mb-4">
                      Before starting BookDiscover, Sarah worked as a literary agent and later as a product manager at a
                      major tech company, where she led initiatives focused on content discovery and recommendation
                      systems. Her unique combination of literary expertise and technical knowledge positioned her
                      perfectly to tackle the book discovery problem.
                    </p>

                    <p className="mb-4">
                      Sarah holds a Master's degree in Comparative Literature from Stanford University and an MBA from
                      Wharton. She's an avid reader herself, consuming over 100 books per year across diverse genres and
                      topics. Her personal reading journey and the transformative impact of certain books on her own
                      life inspired her to create a platform that could facilitate similar discoveries for others.
                    </p>

                    <p>
                      When she's not working on BookDiscover, Sarah enjoys hiking, traveling to literary festivals
                      around the world, and mentoring young entrepreneurs in the publishing and tech industries.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Community of Readers</h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
              Start discovering books that will transform your thinking and accelerate your growth. Explore
              recommendations from the world's most influential minds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/categories"
                className="inline-flex items-center px-8 py-3 bg-white text-emerald-600 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
              >
                Explore Book Categories
              </a>
              <a
                href="/people"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-emerald-600 transition-colors font-semibold"
              >
                Browse Influential People
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
