import type { Metadata } from "next"
import { Star, Calendar, BookOpen, Users, ExternalLink, Award } from "lucide-react"
import { notFound } from "next/navigation"

// Mock data - in a real app, this would come from a database
const booksData = {
  "the-quantum-garden": {
    id: 1,
    title: "The Quantum Garden",
    slug: "the-quantum-garden",
    author: "Sarah Chen",
    authorSlug: "sarah-chen",
    cover: "/placeholder.svg?height=400&width=280",
    isbn: "978-0-123456-78-9",
    publishedDate: "2023-03-15",
    publisher: "Stellar Publishing",
    pages: 384,
    genre: ["Science Fiction", "Hard Science Fiction"],
    language: "English",
    rating: 4.8,
    totalRatings: 1247,
    totalReviews: 342,
    summary: `In "The Quantum Garden," Sarah Chen weaves a masterful tale of scientific discovery and human connection across multiple dimensions. When quantum physicist Dr. Elena Vasquez discovers a way to cultivate plants that exist in quantum superposition, she unknowingly opens a gateway to parallel realities where different versions of Earth have evolved along divergent paths.

As Elena tends to her impossible garden, she begins to receive messages from alternate versions of herself, each facing unique challenges in their respective timelines. Some worlds have solved climate change through quantum agriculture, while others have fallen to environmental collapse. Through her quantum plants, Elena must navigate the ethical implications of interdimensional communication while racing against time to prevent a catastrophic convergence event that could destroy all realities.

Chen's latest work brilliantly combines cutting-edge quantum physics with deeply human storytelling, exploring themes of choice, consequence, and the infinite possibilities that exist within every decision we make. The novel's intricate plot unfolds like a quantum equation, with each chapter revealing new layers of complexity while maintaining an emotional core that resonates across dimensions.`,
    awards: ["Hugo Award Nominee 2024", "Nebula Award Winner 2023"],
    buyLinks: [
      { retailer: "Amazon", url: "https://amazon.com/quantum-garden", price: "$16.99" },
      { retailer: "Barnes & Noble", url: "https://bn.com/quantum-garden", price: "$16.99" },
      { retailer: "Bookshop.org", url: "https://bookshop.org/quantum-garden", price: "$15.99" },
      { retailer: "Apple Books", url: "https://books.apple.com/quantum-garden", price: "$12.99" },
    ],
    recommendations: [
      {
        id: 1,
        name: "Marcus Rodriguez",
        title: "Bestselling Mystery Author",
        avatar: "/placeholder.svg?height=60&width=60",
        quote:
          "Chen's ability to blend hard science with emotional storytelling is unparalleled. A masterpiece of modern science fiction.",
        isVerified: true,
        followerCount: "1.8M",
      },
      {
        id: 2,
        name: "Dr. Lisa Park",
        title: "Quantum Physics Professor, MIT",
        avatar: "/placeholder.svg?height=60&width=60",
        quote:
          "Scientifically accurate and beautifully written. Chen gets the quantum mechanics right while telling a deeply human story.",
        isVerified: true,
        followerCount: "245K",
      },
      {
        id: 3,
        name: "Elena Volkov",
        title: "Historical Fiction Author",
        avatar: "/placeholder.svg?height=60&width=60",
        quote:
          "A stunning exploration of parallel possibilities. This book will stay with you long after the final page.",
        isVerified: true,
        followerCount: "3.1M",
      },
      {
        id: 4,
        name: "James Thompson",
        title: "Science Communicator",
        avatar: "/placeholder.svg?height=60&width=60",
        quote:
          "The Quantum Garden makes complex physics accessible while delivering an emotionally resonant story. Brilliant work.",
        isVerified: true,
        followerCount: "892K",
      },
      {
        id: 5,
        name: "BookLover_Sarah",
        title: "Top Reviewer",
        avatar: "/placeholder.svg?height=60&width=60",
        quote:
          "I couldn't put this book down! Chen has created something truly special that bridges science and humanity.",
        isVerified: false,
        followerCount: "12K",
      },
      {
        id: 6,
        name: "Prof. Michael Chang",
        title: "Literature Professor, Stanford",
        avatar: "/placeholder.svg?height=60&width=60",
        quote: "A literary achievement that pushes the boundaries of science fiction. Essential reading for our time.",
        isVerified: true,
        followerCount: "156K",
      },
    ],
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const book = booksData[slug as keyof typeof booksData]

  if (!book) {
    return {
      title: "Book Not Found",
      description: "The requested book could not be found.",
    }
  }

  return {
    title: `${book.title} by ${book.author} | BookDiscover`,
    description: `${book.summary.substring(0, 160)}...`,
    keywords: `${book.title}, ${book.author}, ${book.genre.join(", ")}, book review, science fiction, book recommendations`,
    authors: [{ name: book.author }],
    openGraph: {
      title: `${book.title} by ${book.author}`,
      description: book.summary.substring(0, 160),
      images: [
        {
          url: book.cover,
          width: 280,
          height: 400,
          alt: `${book.title} book cover`,
        },
      ],
      type: "book",
      book: {
        isbn: book.isbn,
        releaseDate: book.publishedDate,
        authors: [book.author],
        tags: book.genre,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: `${book.title} by ${book.author}`,
      description: book.summary.substring(0, 160),
      images: [book.cover],
    },
  }
}

export default async function BookDetailPage({ params }: Props) {
  const { slug } = await params
  const book = booksData[slug as keyof typeof booksData]

  if (!book) {
    notFound()
  }

  // Schema.org structured data
  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    author: {
      "@type": "Person",
      name: book.author,
    },
    isbn: book.isbn,
    datePublished: book.publishedDate,
    publisher: {
      "@type": "Organization",
      name: book.publisher,
    },
    numberOfPages: book.pages,
    inLanguage: book.language,
    genre: book.genre,
    image: book.cover,
    description: book.summary,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: book.rating,
      reviewCount: book.totalReviews,
      ratingCount: book.totalRatings,
      bestRating: 5,
      worstRating: 1,
    },
    offers: book.buyLinks.map((link) => ({
      "@type": "Offer",
      seller: {
        "@type": "Organization",
        name: link.retailer,
      },
      price: link.price.replace("$", ""),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: link.url,
    })),
    award: book.awards,
  }

  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }} />

      <main className="min-h-screen bg-white">
        {/* Book Header Section */}
        <header className="bg-gradient-to-br from-slate-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Book Cover */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <div className="bg-white rounded-lg shadow-xl p-4 max-w-sm mx-auto">
                    <img
                      src={book.cover || "/placeholder.svg"}
                      alt={`${book.title} book cover`}
                      className="w-full h-auto rounded-lg shadow-md"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>

              {/* Book Information */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {/* Genre Tags */}
                  <div className="flex flex-wrap gap-2">
                    {book.genre.map((genre) => (
                      <span
                        key={genre}
                        className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>

                  {/* Title and Author */}
                  <div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">{book.title}</h1>
                    <p className="text-xl text-gray-600 mb-4">
                      by{" "}
                      <a href={`/author/${book.authorSlug}`} className="text-emerald-600 hover:text-emerald-700">
                        {book.author}
                      </a>
                    </p>
                  </div>

                  {/* Rating and Stats */}
                  <div className="flex flex-wrap items-center gap-6 text-gray-600">
                    <div className="flex items-center">
                      <div className="flex items-center mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(book.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-gray-900">{book.rating}</span>
                      <span className="ml-1">({book.totalRatings.toLocaleString()} ratings)</span>
                    </div>
                    <span className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {book.pages} pages
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(book.publishedDate).getFullYear()}
                    </span>
                  </div>

                  {/* Awards */}
                  {book.awards.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2">
                      <Award className="h-5 w-5 text-yellow-500" />
                      <div className="flex flex-wrap gap-2">
                        {book.awards.map((award) => (
                          <span
                            key={award}
                            className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {award}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Publication Details */}
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Publication Details</h2>
                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <dt className="font-medium text-gray-500">Publisher</dt>
                        <dd className="text-gray-900">{book.publisher}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-500">ISBN</dt>
                        <dd className="text-gray-900">{book.isbn}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-500">Publication Date</dt>
                        <dd className="text-gray-900">
                          {new Date(book.publishedDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-500">Language</dt>
                        <dd className="text-gray-900">{book.language}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Book Summary */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Book</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {book.summary.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What People Are Saying</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                See what authors, experts, and readers are saying about {book.title}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {book.recommendations.map((recommendation) => (
                <article
                  key={recommendation.id}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={recommendation.avatar || "/placeholder.svg"}
                      alt={`${recommendation.name} avatar`}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-900 truncate">{recommendation.name}</h3>
                        {recommendation.isVerified && (
                          <div className="flex-shrink-0">
                            <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mb-3">{recommendation.title}</p>
                      <blockquote className="text-gray-700 italic leading-relaxed">"{recommendation.quote}"</blockquote>
                      <div className="flex items-center mt-3 text-xs text-gray-500">
                        <Users className="h-3 w-3 mr-1" />
                        {recommendation.followerCount} followers
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Where to Buy */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Where to Buy</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {book.buyLinks.map((link) => (
                <a
                  key={link.retailer}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg p-6 text-center transition-colors group"
                >
                  <div className="flex items-center justify-center mb-2">
                    <ExternalLink className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="font-semibold">{link.retailer}</span>
                  </div>
                  <div className="text-emerald-100 text-lg font-bold">{link.price}</div>
                </a>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">
              Prices may vary. Links open in new window. We may earn a commission from purchases.
            </p>
          </div>
        </section>

        {/* Related Books CTA */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover More Great Books</h2>
            <p className="text-gray-600 text-lg mb-8">
              Explore more recommendations from {book.author} and similar authors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/author/${book.authorSlug}`}
                className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
              >
                More by {book.author}
              </a>
              <a
                href="/books"
                className="inline-flex items-center px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors font-semibold"
              >
                Browse All Books
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
