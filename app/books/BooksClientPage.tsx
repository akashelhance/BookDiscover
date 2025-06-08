"use client"

import Link from "next/link"
import { Star, ExternalLink } from "lucide-react"

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

  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(booksSchema) }} />

      <main className="min-h-screen bg-white">
        {/* Header Section */}
        <header className="bg-gradient-to-br from-slate-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">All Books</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover our carefully curated collection of books across multiple categories. From trading strategies
                to captivating fiction, find your next great read with expert recommendations and trusted reviews.
              </p>
            </div>
          </div>
        </header>

        {/* Books Categories */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-16">
            {Object.entries(bookCategories).map(([categoryKey, category], categoryIndex) => (
              <section key={categoryKey} className={categoryIndex > 0 ? "border-t border-gray-200 pt-16" : ""}>
                <header className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.books.map((book) => (
                    <article key={book.id} className="h-full">
                      <Link
                        href={`/book/${book.slug}`}
                        className="block h-full bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                      >
                        <div className="flex flex-col h-full">
                          {/* Book Cover */}
                          <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
                            <img
                              src={book.cover || "/placeholder.svg"}
                              alt={`${book.title} book cover`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>

                          {/* Book Information */}
                          <div className="p-6 flex flex-col flex-1">
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
                                {book.title}
                              </h3>

                              <p className="text-gray-600 text-sm mb-3">by {book.author}</p>

                              <div className="flex items-center mb-4">
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                  <span className="ml-1 text-sm font-medium text-gray-900">{book.rating}</span>
                                </div>
                              </div>

                              <p className="text-gray-700 text-sm line-clamp-3 leading-relaxed mb-6">
                                {book.description}
                              </p>
                            </div>

                            {/* Buy Button */}
                            <div className="mt-auto">
                              <div
                                className="inline-flex items-center justify-center w-full px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors font-medium text-sm"
                                onClick={(e) => {
                                  e.preventDefault()
                                  window.open("https://amazon.com", "_blank", "noopener,noreferrer")
                                }}
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Buy from Amazon
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>

                {/* View More Link */}
                <div className="text-center mt-8">
                  <Link
                    href={`/category/${categoryKey}`}
                    className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors font-medium"
                  >
                    View All {category.title}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Featured Categories CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More Categories</h2>
            <p className="text-gray-600 text-lg mb-8">
              Discover books across even more genres and topics tailored to your interests.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/category/science-fiction"
                className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors font-medium"
              >
                Science Fiction
              </Link>
              <Link
                href="/category/mystery"
                className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors font-medium"
              >
                Mystery & Thriller
              </Link>
              <Link
                href="/category/romance"
                className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors font-medium"
              >
                Romance
              </Link>
              <Link
                href="/category/biography"
                className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors font-medium"
              >
                Biography
              </Link>
              <Link
                href="/categories"
                className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
              >
                View All Categories
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Never Miss a Great Book</h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
              Get weekly recommendations delivered to your inbox. Discover new releases, hidden gems, and timeless
              classics curated by our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-emerald-600"
                aria-label="Email address for newsletter subscription"
              />
              <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
