import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "../../../config/site"
import { 
  BookOpen, 
  Users, 
  Heart, 
  ShieldCheck, 
  Star, 
  Lightbulb, 
  MousePointerClick, 
  Search, 
  ShoppingBag, 
  Linkedin, 
  Twitter, 
  Github,
  ArrowRight
} from "lucide-react"

export const metadata: Metadata = {
  title: `About Us - Discover Books That Shape Great Minds | ${siteConfig.name}`,
  description: siteConfig.seo.defaultDesc,
  keywords: [
    `about ${siteConfig.name}`,
    "book recommendation mission",
    "reading community",
    "book discovery platform",
    "trusted book recommendations",
  ],
  openGraph: {
    title: `About ${siteConfig.name}`,
    description: siteConfig.seo.defaultDesc,
    type: "website",
    images: [{ url: "/placeholder.svg?height=630&width=1200" }],
  },
}

export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    foundingDate: "2023",
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.title,
    },
    sameAs: [
      siteConfig.social.twitter,
      siteConfig.social.linkedin,
    ].filter(Boolean),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
        
        {/* 1. Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
            <div className="w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight text-balance">
              Discover Books That <br className="hidden sm:block" />
              <span className="text-emerald-600 relative whitespace-nowrap">
                Shape Great Minds
                <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-emerald-300/40" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332 l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259-8.133-3.625-26.504-9.81-23.239-7.825-27.934-10.149-28.304-14.005-.412-4.288 8.441-7.072 26.658-8.412 45.424-3.34 92.515-5.322 138.86-5.83 23.32-.255 46.853.483 69.231 2.18l.066.005c1.218.09 1.583-1.42.399-1.928-1.503-.647-41.972-5.748-111.97-6.525Z"></path></svg>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10 text-balance">
              Cut through the noise. Find the perfect book by exploring recommendations from the world's most successful leaders, creators, and thinkers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/books"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-semibold text-lg"
              >
                Explore Recommendations
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Trust Section */}
        <section className="py-12 bg-white relative z-20 -mt-10 sm:-mt-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 sm:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4 text-emerald-600">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">1000+</h3>
                  <p className="text-gray-500 font-medium">Books Curated</p>
                </div>
                <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4 text-emerald-600">
                    <Star size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">100+</h3>
                  <p className="text-gray-500 font-medium">Influential People</p>
                </div>
                <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4 text-emerald-600">
                    <Users size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">10K+</h3>
                  <p className="text-gray-500 font-medium">Happy Readers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Why Choose Us */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Why Choose BookDiscover</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We believe in quality over quantity. Our platform is designed to give you the highest value recommendations possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: ShieldCheck, title: "Trusted Recommendations", desc: "Every book is backed by someone whose success you admire." },
                { icon: Star, title: "Curated Quality", desc: "No more endless scrolling. Only the absolute best books make the cut." },
                { icon: Heart, title: "Reader-Centric", desc: "Designed purely to help you learn, grow, and enjoy the journey." },
                { icon: Lightbulb, title: "Real Insights", desc: "Understand exactly why an influencer loved the book." }
              ].map((feature, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 shadow-[0_2px_20px_rgb(0,0,0,0.02)] border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <feature.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm lg:text-base">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How It Works */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">How It Works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Finding your next life-changing book is as easy as 1-2-3.
              </p>
            </div>

            <div className="relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-white shadow-lg rounded-full flex items-center justify-center mb-6 border-4 border-emerald-50 relative">
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold border-4 border-white">1</div>
                    <Search className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Choose a Category</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Start by picking a person you admire or a category you're interested in learning about.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-white shadow-lg rounded-full flex items-center justify-center mb-6 border-4 border-emerald-50 relative">
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold border-4 border-white">2</div>
                    <MousePointerClick className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Explore Books</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Browse the curated list of books and read insights on why they were recommended.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-white shadow-lg rounded-full flex items-center justify-center mb-6 border-4 border-emerald-50 relative">
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold border-4 border-white">3</div>
                    <ShoppingBag className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Buy & Learn</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Get the book right away and embark on your journey to expand your mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Meet the Founder */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-emerald-900 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-emerald-800 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-emerald-800 rounded-full blur-3xl opacity-50" />
          </div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Meet the Founder</h2>
              <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/10">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl relative mb-6 bg-emerald-800">
                    {/* Placeholder image for Founder */}
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt={siteConfig.founder.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex space-x-4">
                    {siteConfig.social.linkedin && (
                      <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:text-emerald-300 transition-colors">
                        <Linkedin size={18} />
                      </a>
                    )}
                    {siteConfig.social.twitter && (
                      <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:text-emerald-300 transition-colors">
                        <Twitter size={18} />
                      </a>
                    )}
                    {siteConfig.social.github && (
                      <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:text-emerald-300 transition-colors">
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-bold mb-1">{siteConfig.founder.name}</h3>
                  <p className="text-emerald-300 font-medium mb-6 text-lg tracking-wide">{siteConfig.founder.title}</p>

                  <div className="space-y-4 text-emerald-50/90 leading-relaxed text-lg">
                    {siteConfig.founder.bio.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    {siteConfig.social.twitter && (
                      <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white font-medium hover:text-emerald-300 transition-colors group">
                        Follow the journey 
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Social Proof Section */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">What Readers Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join thousands of readers who have discovered their next favorite book through our platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Sarah Jenkins", role: "Product Manager", quote: "I've always struggled to find business books that actually deliver. Finding what Bill Gates and Elon Musk read was an absolute game-changer." },
                { name: "Michael Chang", role: "Software Engineer", quote: "BookDiscover cuts through the noise. I found 3 amazing books in 10 minutes that have completely reshaped how I think about system design." },
                { name: "Emma Robertson", role: "Entrepreneur", quote: "The curated lists save me so much time. It's like having a team of mentors recommending what I should read next to grow my business." }
              ].map((testimonial, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 shadow-[0_2px_20px_rgb(0,0,0,0.02)] border border-gray-100 flex flex-col h-full">
                  <div className="flex space-x-1 mb-6 text-amber-400">
                    {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-8 flex-1 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold uppercase">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-emerald-600 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight">Start Your Reading Journey Today</h2>
            <p className="text-emerald-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
              Join our community and dive into the books that have shaped history, built empires, and sparked revolutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/books"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 rounded-full hover:bg-gray-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-bold text-lg"
              >
                Explore Books
              </Link>
              <Link
                href="/categories"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-400 text-white rounded-full hover:bg-emerald-500 hover:border-emerald-500 hover:shadow-lg transition-all duration-300 font-bold text-lg"
              >
                Browse Categories
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
