"use client"

import Link from "next/link"
import { Star, ExternalLink, BookOpen, User, Flame, ArrowRight, LibraryBig } from "lucide-react"

// Mock data for books by category
const bookCategories = {
  trading: {
    title: "Trading Books",
    description: "Master the markets with these essential trading and investment guides",
    books: [
      {
        id: 1,
        title: "The Intelligent Investor",
        slug: "the-intelligent-investor",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "Benjamin Graham's timeless guide to value investing. Learn the principles that have guided successful investors for decades with practical strategies for building wealth.",
        rating: 4.8,
        author: "Benjamin Graham",
      },
      {
        id: 2,
        title: "Market Wizards",
        slug: "market-wizards",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "Jack Schwager interviews the world's top traders to uncover their secrets. Discover the mindset and strategies that separate winners from losers in trading.",
        rating: 4.7,
        author: "Jack Schwager",
      },
      {
        id: 3,
        title: "A Random Walk Down Wall Street",
        slug: "a-random-walk-down-wall-street",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "Burton Malkiel's comprehensive guide to investing strategy. Learn why passive investing often outperforms active trading with solid academic research.",
        rating: 4.6,
        author: "Burton Malkiel",
      },
      {
        id: 4,
        title: "Technical Analysis of Financial Markets",
        slug: "technical-analysis-of-financial-markets",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "John Murphy's definitive guide to technical analysis. Master chart patterns, indicators, and market psychology to improve your trading decisions.",
        rating: 4.5,
        author: "John Murphy",
      },
    ],
  },
  fiction: {
    title: "Fiction Books",
    description: "Immerse yourself in captivating stories and unforgettable characters",
    books: [
      {
        id: 5,
        title: "The Seven Husbands of Evelyn Hugo",
        slug: "the-seven-husbands-of-evelyn-hugo",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "Taylor Jenkins Reid's captivating novel about a reclusive Hollywood icon. A story of ambition, love, and the price of fame that will keep you turning pages.",
        rating: 4.9,
        author: "Taylor Jenkins Reid",
      },
      {
        id: 6,
        title: "Where the Crawdads Sing",
        slug: "where-the-crawdads-sing",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "Delia Owens' atmospheric mystery set in the marshlands of North Carolina. A coming-of-age story that beautifully weaves nature, isolation, and human resilience.",
        rating: 4.7,
        author: "Delia Owens",
      },
      {
        id: 7,
        title: "The Midnight Library",
        slug: "the-midnight-library",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "Matt Haig's philosophical novel about life's infinite possibilities. A thought-provoking exploration of regret, choice, and the paths not taken.",
        rating: 4.6,
        author: "Matt Haig",
      },
      {
        id: 8,
        title: "Educated",
        slug: "educated",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "Tara Westover's powerful memoir about education and family. A gripping account of breaking free from a survivalist family to pursue knowledge and self-discovery.",
        rating: 4.8,
        author: "Tara Westover",
      },
    ],
  },
  motivation: {
    title: "Motivation Books",
    description: "Ignite your passion and unlock your potential with these inspiring reads",
    books: [
      {
        id: 9,
        title: "Atomic Habits",
        slug: "atomic-habits",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "James Clear's practical guide to building good habits and breaking bad ones. Learn how tiny changes can lead to remarkable results through proven strategies.",
        rating: 4.9,
        author: "James Clear",
      },
      {
        id: 10,
        title: "The 7 Habits of Highly Effective People",
        slug: "the-7-habits-of-highly-effective-people",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "Stephen Covey's timeless principles for personal and professional effectiveness. Transform your mindset and achieve lasting success with character-based leadership.",
        rating: 4.7,
        author: "Stephen R. Covey",
      },
      {
        id: 11,
        title: "Mindset",
        slug: "mindset",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "Carol Dweck's groundbreaking research on the power of mindset. Discover how believing in your ability to improve can lead to greater achievement and fulfillment.",
        rating: 4.6,
        author: "Carol S. Dweck",
      },
      {
        id: 12,
        title: "Grit",
        slug: "grit",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "Angela Duckworth's exploration of passion and perseverance. Learn why talent isn't everything and how grit can be the key to achieving your long-term goals.",
        rating: 4.5,
        author: "Angela Duckworth",
      },
    ],
  },
  selfHelp: {
    title: "Self-help Books",
    description: "Transform your life with practical wisdom and actionable insights",
    books: [
      {
        id: 13,
        title: "The Power of Now",
        slug: "the-power-of-now",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "Eckhart Tolle's spiritual guide to living in the present moment. Discover how to free yourself from anxiety and stress by embracing the power of now.",
        rating: 4.7,
        author: "Eckhart Tolle",
      },
      {
        id: 14,
        title: "How to Win Friends and Influence People",
        slug: "how-to-win-friends-and-influence-people",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "Dale Carnegie's classic guide to interpersonal skills. Learn timeless principles for building relationships, communicating effectively, and influencing others positively.",
        rating: 4.6,
        author: "Dale Carnegie",
      },
      {
        id: 15,
        title: "The Subtle Art of Not Giving a F*ck",
        slug: "the-subtle-art-of-not-giving-a-fck",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "Mark Manson's counterintuitive approach to living a good life. Learn to focus on what truly matters and let go of the things that don't serve you.",
        rating: 4.5,
        author: "Mark Manson",
      },
      {
        id: 16,
        title: "Think and Grow Rich",
        slug: "think-and-grow-rich",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "Napoleon Hill's classic success philosophy based on studying wealthy individuals. Discover the mental strategies and principles that lead to financial success.",
        rating: 4.4,
        author: "Napoleon Hill",
      },
    ],
  },
}

export default function BooksClientPage() {
  // Schema.org structured data for books collection
  const booksSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "All Books",
    description: "A comprehensive collection of books across trading, fiction, motivation, and self-help categories.",
    url: "https://bookdiscover.com/books",
    mainEntity: Object.values(bookCategories).flatMap((category) =>
      category.books.map((book) => ({
        "@type": "Book",
        name: book.title,
        author: {
          "@type": "Person",
          name: book.author,
        },
        description: book.description,
        image: book.cover,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: book.rating,
          bestRating: 5,
        },
        url: `https://bookdiscover.com/book/${book.slug}`,
      })),
    ),
  }

  // Calculate total across categories safely
  const totalBooks = Object.values(bookCategories).reduce((acc, cat) => acc + cat.books.length, 0)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(booksSchema) }} />

      <main className="min-h-screen bg-gray-50/50">
        
        {/* ============================== */}
        {/* HERO SECTION (Immersive Glow) */}
        {/* ============================== */}
        <header className="relative bg-gradient-to-b from-emerald-50/80 to-transparent pt-24 pb-20 lg:pt-32 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-gray-100/50">
          <div className="absolute top-0 right-1/4 -translate-y-12 translate-x-1/2 z-0 pointer-events-none">
            <div className="w-[600px] h-[600px] bg-emerald-200/40 rounded-full blur-[100px]" />
          </div>
          <div className="absolute top-0 left-0 -translate-x-1/4 translate-y-1/4 z-0 pointer-events-none">
            <div className="w-[400px] h-[400px] bg-sky-100/30 rounded-full blur-[80px]" />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center justify-center space-x-2 bg-white/60 backdrop-blur-md border border-emerald-100 px-5 py-2 rounded-full text-sm font-semibold text-emerald-800 tracking-wide shadow-sm mb-6">
              <LibraryBig className="w-5 h-5 text-emerald-500" />
              <span>{totalBooks}+ Expert Reviewed Books</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight text-balance">
              The Ultimate <span className="text-emerald-600">Reading Catalog</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto text-balance font-medium">
              Discover our carefully curated collection of world-class literature. From definitive trading strategies
              to captivating fiction, find your next great read right here.
            </p>
          </div>
        </header>

        {/* ============================== */}
        {/* BOOKS CATEGORIES (Bento Grid)  */}
        {/* ============================== */}
        <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-7xl mx-auto space-y-24">
            
            {Object.entries(bookCategories).map(([categoryKey, category], categoryIndex) => (
              <section key={categoryKey} className="relative">
                
                {/* Category Header */}
                <header className="mb-14 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-200/60 pb-8">
                  <div>
                    <div className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-100 font-bold shadow-sm mb-4">
                      {categoryIndex === 0 ? <Flame className="w-5 h-5 mr-2" /> : <BookOpen className="w-5 h-5 mr-2" />}
                      Category Collection
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">{category.title}</h2>
                  </div>
                  <p className="text-gray-500 text-lg md:text-right max-w-sm hidden md:block leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Mobile Desc */}
                  <p className="text-gray-500 text-lg md:hidden leading-relaxed">
                    {category.description}
                  </p>
                </header>

                {/* 3D Bento Book Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
                  {category.books.map((book) => (
                    <article key={book.id} className="h-full">
                      <Link
                        href={`/book/${book.slug}`}
                        className="block h-full bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 group focus:outline-none flex flex-col pt-4 overflow-hidden"
                      >
                        {/* 3D Pop Cover */}
                        <div className="px-8 pt-6 pb-2 relative z-10 flex justify-center">
                          <div className="w-32 sm:w-40 aspect-[2/3] rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.03] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
                            <img
                              src={book.cover || "/placeholder.svg"}
                              alt={`${book.title} cover`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl pointer-events-none"></div>
                          </div>
                        </div>

                        {/* Metadata Box */}
                        <div className="p-6 sm:p-8 flex flex-col flex-1 bg-white relative z-0">
                          
                          <div className="mt-2 mb-3">
                            <h3 className="text-2xl font-bold text-gray-900 line-clamp-2 leading-tight group-hover:text-emerald-600 transition-colors">
                              {book.title}
                            </h3>
                          </div>

                          <div className="flex items-center text-gray-600 text-sm font-semibold mb-4">
                            <User className="w-4 h-4 mr-1.5 text-gray-400" />
                            {book.author}
                          </div>

                          <div className="flex items-center bg-gray-50 w-max px-3 py-1.5 rounded-lg border border-gray-100 mb-6">
                            <Star className="h-4 w-4 text-amber-500 fill-current" />
                            <span className="ml-1.5 text-sm font-bold text-gray-900">{book.rating}</span>
                          </div>

                          <p className="text-gray-500 text-[15px] line-clamp-3 leading-relaxed mb-8 flex-1 font-medium">
                            {book.description}
                          </p>

                          {/* Fluid Read Synopsis Link */}
                          <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                             <span className="text-emerald-600 font-bold text-sm inline-flex items-center group-hover:text-emerald-700 transition-colors">
                                Read Synopsis
                                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </span>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>

                {/* Section View All Button */}
                <div className="text-center mt-12 mb-8">
                  <Link
                    href={`/category/${categoryKey}`}
                    className="inline-flex items-center px-8 py-3.5 bg-gray-50 text-gray-700 border border-gray-200 rounded-xl font-bold hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-all shadow-sm"
                  >
                    Explore all {category.title}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* ============================== */}
        {/* DEEP-MODE CTA SECTION          */}
        {/* ============================== */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-emerald-900 relative overflow-hidden mt-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[100px] opacity-20 pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-teal-400 rounded-full blur-[100px] opacity-20 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight text-balance">
              Never Miss A Recommendation
            </h2>
            <p className="text-emerald-100/90 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
              Get weekly recommendations delivered directly to your inbox. Discover new releases, hidden gems, and timeless classics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto bg-white/10 p-2 rounded-2xl backdrop-blur-md border border-white/20 shadow-2xl">
              <input
                type="email"
                placeholder="Enter your email address..."
                className="flex-1 px-6 py-4 rounded-xl bg-white/90 text-gray-900 border-0 focus:ring-2 focus:ring-emerald-400 placeholder-gray-500 font-medium outline-none"
                aria-label="Email address for newsletter subscription"
              />
              <button className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-400 transition-colors shadow-lg flex-shrink-0">
                Subscribe
              </button>
            </div>
            
            <p className="text-emerald-200/60 text-sm mt-8 font-bold tracking-widest uppercase">
              Free Weekly Insights
            </p>
          </div>
        </section>

      </main>
    </>
  )
}
