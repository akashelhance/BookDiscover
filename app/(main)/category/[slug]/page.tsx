import type { Metadata } from "next"
import { Star, BookOpen, Calendar, ArrowRight, BookMarked, ShoppingCart, CheckCircle, ChevronDown, Award, Users, TrendingUp } from "lucide-react"
import { notFound } from "next/navigation"
import { siteConfig } from "../../../../config/site"
import Link from "next/link"

// ==========================================
// MOCK DATA (Massively expanded for SEO)
// ==========================================
const categoriesData = {
  psychology: {
    id: 1,
    name: "Psychology",
    slug: "psychology",
    description: "Explore top psychology books on behavior, mindset, habits, and human thinking recommended by experts and successful people.",
    bookCount: 124,
    tags: ["Beginner Friendly", "Mindset", "Habits", "Behavioral", "Advanced"],
    quickPicks: [1, 2, 3], // IDs of top books for the Quick Pick section
    experts: [
      { name: "Naval Ravikant", role: "Entrepreneur & Investor", image: "/placeholder.svg?height=100&width=100" },
      { name: "Bill Gates", role: "Philanthropist & Founder", image: "/placeholder.svg?height=100&width=100" },
      { name: "Elon Musk", role: "CEO of Tesla & SpaceX", image: "/placeholder.svg?height=100&width=100" }
    ],
    faqs: [
      {
        question: "What is the best psychology book for beginners?",
        answer: "For beginners, 'Thinking, Fast and Slow' by Daniel Kahneman and 'The Power of Habit' by Charles Duhigg are highly recommended. They explain complex cognitive processes and behavioral loops using everyday examples, making them highly accessible."
      },
      {
        question: "Why should you read psychology books?",
        answer: "Reading psychology books helps you understand the underlying drivers of human behavior. It can improve your empathy, upgrade your decision-making frameworks, enhance your personal habits, and provide actionable insights into why people (including yourself) act the way they do."
      },
      {
        question: "Which psychology book should I start with to improve my mindset?",
        answer: "'Mindset: The New Psychology of Success' by Carol S. Dweck is fundamentally the most important starting point. It breaks down the difference between a 'fixed' and 'growth' mindset, fundamentally shifting how you perceive failure and learning."
      },
      {
        question: "Are psychology books useful in real-life business applications?",
        answer: "Absolutely. Books like 'Influence' by Robert Cialdini and 'Predictably Irrational' by Dan Ariely are practically mandatory reading for marketers, product managers, and leaders who need to understand behavioral economics and persuasion."
      }
    ],
    seoContent: [
      {
        h2: "What Are the Best Psychology Books?",
        text: "The best psychology books bridge the gap between rigorous academic research and actionable everyday insights. Whether you are aiming to rewire your daily routines, understand interpersonal dynamics, or achieve cognitive mastery, the literature provides a roadmap. Our curated list, ranging from Daniel Kahneman's exploration of cognitive biases to Mihaly Csikszentmihalyi's framework for optimal performance, represents the pinnacle of behavioral science literature."
      },
      {
        h2: "Top Psychology Books for Beginners",
        text: "If you are newly stepping into the world of behavioral science, academic textbooks can initially feel overwhelmingly dense. The optimal strategy is to start with accessible, narrative-driven books. Titles like 'The Power of Habit' provide incredible anecdotal stories mapped perfectly to psychological loops (Cue, Routine, Reward) that demystify human behavior without requiring a PhD to decode."
      },
      {
        h2: "Books That Improve Mindset and Habits",
        text: "A massive subset of psychological literature focuses exclusively on performance and self-actualization. Carol Dweck's research on the 'Growth Mindset' is a cornerstone theory that has reshaped both corporate training and educational curriculums globally. Pairing these foundational theories with modern habit optimization techniques ensures that readers not only understand their psychological limitations but are actively provided the tools to transcend them."
      }
    ],
    books: [
      {
        id: 1,
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        cover: "/placeholder.svg?height=400&width=280",
        description: "A groundbreaking exploration of the two systems that drive the way we think. Kahneman reveals when we can trust our intuitions and when we cannot.",
        rating: 4.8,
        publishedYear: 2011,
        isbn: "978-0374533557",
        tag: "Behavioral",
        topCategory: "Best for Behavioral Science",
        whyRead: "Radically shifts how you perceive your own logical decision-making flaws by mapping out System 1 vs. System 2 thinking."
      },
      {
        id: 2,
        title: "The Power of Habit",
        author: "Charles Duhigg",
        cover: "/placeholder.svg?height=400&width=280",
        description: "Discover the science behind habit formation and learn how to transform your life by changing your habits. A practical guide to personal and organizational change.",
        rating: 4.7,
        publishedYear: 2012,
        isbn: "978-1400069286",
        tag: "Habits",
        topCategory: "Best for Breaking Habits",
        whyRead: "The 'Habit Loop' framework is incredibly actionable. You will instantly recognize the cues driving your worst routines."
      },
      {
        id: 3,
        title: "Mindset: The New Psychology of Success",
        author: "Carol S. Dweck",
        cover: "/placeholder.svg?height=400&width=280",
        description: "Explores the power of mindset in achieving success. Dweck shows how a simple idea about the brain can create a love of learning and resilience.",
        rating: 4.6,
        publishedYear: 2006,
        isbn: "978-0345472328",
        tag: "Mindset",
        topCategory: "Best for Mindset Shift",
        whyRead: "Provides the definitive argument for abandoning a 'fixed mindset' in order to unlock limitless long-term potential."
      },
      {
        id: 4,
        title: "The Happiness Hypothesis",
        author: "Jonathan Haidt",
        cover: "/placeholder.svg?height=400&width=280",
        description: "Combines ancient wisdom with modern psychology to explore what really makes us happy. A thoughtful examination of human nature and well-being.",
        rating: 4.4,
        publishedYear: 2006,
        isbn: "978-0465028023",
        tag: "Beginner Friendly",
        whyRead: "Beautifully aligns Stoic philosophy and ancient beliefs with highly rigorous modern clinical psychological findings."
      },
      {
        id: 5,
        title: "Predictably Irrational",
        author: "Dan Ariely",
        cover: "/placeholder.svg?height=400&width=280",
        description: "Challenges our assumptions about making decisions and reveals the hidden forces that shape our choices in surprising and often irrational ways.",
        rating: 4.5,
        publishedYear: 2008,
        isbn: "978-0061353246",
        tag: "Behavioral",
        whyRead: "A masterclass in behavioral economics. You will realize why pricing, comparative context, and 'free' offers manipulate you so easily."
      },
      {
        id: 6,
        title: "Influence: The Psychology of Persuasion",
        author: "Robert B. Cialdini",
        cover: "/placeholder.svg?height=400&width=280",
        description: "Reveals the psychology behind why people say 'yes' and how to apply these insights ethically in business and everyday situations.",
        rating: 4.8,
        publishedYear: 1984,
        isbn: "978-0061241895",
        tag: "Advanced",
        whyRead: "The undisputed textbook for marketers and salespeople. The 6 principles of persuasion dictate modern commerce."
      },
    ],
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const category = categoriesData[slug as keyof typeof categoriesData]

  if (!category) return { title: "Category Not Found" }

  const seoTitle = `Best ${category.name} Books to Read in 2026 | ${siteConfig.name}`

  return {
    title: seoTitle,
    description: category.description,
    keywords: `${category.name.toLowerCase()}, best ${category.name.toLowerCase()} books, reading recommendations, mindset, habits, top books 2026`,
    openGraph: {
      title: seoTitle,
      description: category.description,
      type: "website",
      images: [{ url: "/placeholder.svg?height=630&width=1200", width: 1200, height: 630 }],
    },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const category = categoriesData[slug as keyof typeof categoriesData]

  if (!category) notFound()

  // High-value Quick Pick Books
  const quickPickBooks = category.books.filter(b => category.quickPicks?.includes(b.id))
  // The rest of the grid
  const standardBooks = category.books.filter(b => !category.quickPicks?.includes(b.id))

  // ==========================================
  // SCHEMA.ORG (Massive SEO Upgrade)
  // ==========================================
  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Best ${category.name} Books`,
    description: category.description,
    url: `/category/${category.slug}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: category.books.map((book, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Book",
          name: book.title,
          author: { "@type": "Person", name: book.author },
          isbn: book.isbn,
          aggregateRating: { "@type": "AggregateRating", ratingValue: book.rating, bestRating: 5 },
        },
      })),
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: category.faqs?.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    })) || []
  }

  return (
    <>
      {/* Structural SEO Data Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }} />
      {category.faqs && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <main className="min-h-screen bg-gray-50/20 selection:bg-emerald-100 selection:text-emerald-900">
        
        {/* =========================================
            1. HERO SECTION (SEO + VISUAL IMPACT)
            ========================================= */}
        <header className="relative bg-gradient-to-b from-emerald-100/50 via-emerald-50/30 to-transparent pt-24 pb-16 lg:pt-32 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-gray-100/50">
          <div className="absolute top-0 right-1/4 -translate-y-12 translate-x-1/2 z-0 pointer-events-none">
            <div className="w-[600px] h-[600px] bg-emerald-300/20 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
            
            {/* Dynamic SEO Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
              <span className="inline-flex items-center px-3 py-1 bg-white border border-emerald-100 text-emerald-800 rounded-full text-xs font-bold tracking-wide shadow-sm">
                <BookMarked className="w-3.5 h-3.5 mr-1.5 object-cover" /> {category.bookCount}+ Books
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-amber-50 border border-amber-100 text-amber-800 rounded-full text-xs font-bold tracking-wide shadow-sm">
                <TrendingUp className="w-3.5 h-3.5 mr-1.5" /> Updated for 2026
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight drop-shadow-sm text-balance">
              Best <span className="text-emerald-600">{category.name} Books</span> to Read in 2026
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto text-balance font-medium">
              {category.description}
            </p>
          </div>
        </header>

        {/* =========================================
            2. QUICK PICKS (High Conversion Tunnel)
            ========================================= */}
        {quickPickBooks?.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-20 -mt-10">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center space-x-3 mb-8">
                <Award className="w-8 h-8 text-amber-500" />
                <h2 className="text-2xl font-bold text-gray-900">Top 3 Must-Read Picks</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {quickPickBooks.map(book => (
                  <article key={book.id} className="bg-white rounded-[1.5rem] border-[1.5px] border-emerald-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 hover:-translate-y-1.5 transition-transform duration-300 flex flex-col h-full group">
                    <div className="inline-flex px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full mb-5 w-max">
                      🏆 {book.topCategory}
                    </div>
                    
                    <div className="flex gap-4 mb-5">
                      <div className="w-24 aspect-[2/3] rounded-lg overflow-hidden flex-shrink-0 shadow-md">
                        <img src={book.cover} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-bold text-gray-900 text-lg leading-snug mb-1">{book.title}</h3>
                        <p className="text-sm font-medium text-gray-500 mb-2">{book.author}</p>
                        <div className="flex items-center mt-auto bg-gray-50 w-max px-2 py-1 rounded-md">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
                          <span className="text-xs font-bold ml-1 text-gray-700">{book.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">"{book.whyRead}"</p>
                    
                    <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 hover:shadow-lg transition-all group/btn">
                      Buy on Amazon <ShoppingCart className="w-4 h-4 ml-2 group-hover/btn:scale-110 transition-transform" />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =========================================
            3. FILTER + TAGS SECTION (Chips UI)
            ========================================= */}
        {category.tags && (
          <section className="py-6 px-4 sm:px-6 lg:px-8 border-y border-gray-100 bg-white sticky top-0 z-40 bg-white/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mr-2 flex-shrink-0">Filters:</span>
              <button className="flex-shrink-0 inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium transition-colors">
                All Books
              </button>
              {category.tags.map(tag => (
                <button key={tag} className="flex-shrink-0 inline-flex items-center px-4 py-2 bg-gray-50 border border-gray-200 text-gray-700 hover:border-emerald-300 hover:text-emerald-700 rounded-full text-sm font-medium transition-colors">
                  {tag}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* =========================================
            4. BOOK GRID (Upgraded Core Display)
            ========================================= */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {standardBooks.map((book) => (
              <article key={book.id} className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-6 sm:p-8 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 group">
                <div className="flex gap-6 mb-6">
                  {/* Cover */}
                  <div className="w-32 sm:w-36 aspect-[2/3] flex-shrink-0 rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300 relative">
                    <img src={book.cover} alt={`${book.title} cover`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  
                  {/* Meta */}
                  <div className="flex flex-col py-1">
                    <div className="mb-2">
                      <span className="inline-flex px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-[11px] font-bold uppercase tracking-wider mb-2">
                        {book.tag}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors leading-tight">{book.title}</h3>
                    <p className="text-gray-500 font-medium mb-3">by {book.author}</p>
                    <div className="flex items-center mt-auto">
                      <Star className="h-4 w-4 text-amber-500 fill-current" />
                      <span className="ml-1.5 text-sm font-bold text-gray-900">{book.rating}</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm text-gray-500">{book.publishedYear}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed text-[15px] mb-6 flex-1">{book.description}</p>
                
                {/* Embedded 'Why Read' Block */}
                {book.whyRead && (
                  <div className="mb-8 bg-emerald-50/50 border border-emerald-100/60 rounded-xl p-4 flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">Why you should read this</span>
                      <p className="text-sm text-emerald-900/80 leading-relaxed font-medium">{book.whyRead}</p>
                    </div>
                  </div>
                )}

                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center justify-center w-full px-6 py-3.5 bg-gray-50 border border-gray-200 text-gray-800 font-bold rounded-xl hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all duration-300 group/btn">
                  Buy on Amazon <ArrowRight className="w-4 h-4 ml-2 opacity-50 group-hover/btn:translate-x-1 group-hover/btn:opacity-100 transition-all" />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* =========================================
            5. UNIQUE SECTION (Expert Social Proof)
            ========================================= */}
        {category.experts && (
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-10 tracking-tight">Read By The World's Top Minds</h2>
              <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
                {category.experts.map(expert => (
                  <div key={expert.name} className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full border-4 border-gray-700 overflow-hidden mb-4 bg-gray-800">
                      <img src={expert.image} alt={expert.name} className="w-full h-full object-cover opacity-80" />
                    </div>
                    <h4 className="font-bold text-lg">{expert.name}</h4>
                    <p className="text-gray-400 text-sm max-w-[150px] leading-snug">{expert.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =========================================
            6. LONG-FORM SEO CONTENT (Articles)
            ========================================= */}
        {category.seoContent && (
          <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
            <div className="max-w-3xl mx-auto">
              {category.seoContent.map((section, idx) => (
                <div key={idx} className="mb-12 last:mb-0">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">{section.h2}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed font-serif">{section.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* =========================================
            7. FAQ SECTION (Rich Snippets Driven)
            ========================================= */}
        {category.faqs && (
          <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
                <p className="text-gray-600">Everything you need to know about diving into {category.name.toLowerCase()} literature.</p>
              </div>
              
              <div className="space-y-4">
                {category.faqs.map((faq, idx) => (
                  <details key={idx} className="group bg-white border border-gray-200 rounded-2xl open:shadow-md transition-all duration-300">
                    <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 list-none outline-none">
                      {faq.question}
                      <span className="transition-transform duration-300 group-open:-rotate-180">
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =========================================
            8. INTERNAL LINKING & 9. CTA
            ========================================= */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-emerald-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[100px] opacity-20 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight text-balance">
              Start Improving Your Mindset Today
            </h2>
            <p className="text-emerald-100/90 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Dive into the greatest collection of {category.name.toLowerCase()} literature ever curated.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#top"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-emerald-400 text-emerald-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Explore Top Books <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <Link 
                href="/categories" 
                className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-emerald-500/50 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-800 hover:border-emerald-400 transition-all duration-300"
              >
                Browse All Categories
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
