import type { Metadata } from "next"
import { Star, Calendar, BookOpen, Users, ExternalLink, Award, Sparkles, CheckCircle, ArrowRight, ShoppingCart } from "lucide-react"
import { notFound } from "next/navigation"
import Link from "next/link"

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
    summary: `In "The Quantum Garden," Sarah Chen weaves a masterful tale of scientific discovery and human connection across multiple dimensions. When quantum physicist Dr. Elena Vasquez discovers a way to cultivate plants that exist in quantum superposition, she unknowingly opens a gateway to parallel realities where different versions of Earth have evolved along divergent paths.\n\nAs Elena tends to her impossible garden, she begins to receive messages from alternate versions of herself, each facing unique challenges in their respective timelines. Some worlds have solved climate change through quantum agriculture, while others have fallen to environmental collapse. Through her quantum plants, Elena must navigate the ethical implications of interdimensional communication while racing against time to prevent a catastrophic convergence event that could destroy all realities.\n\nChen's latest work brilliantly combines cutting-edge quantum physics with deeply human storytelling, exploring themes of choice, consequence, and the infinite possibilities that exist within every decision we make. The novel's intricate plot unfolds like a quantum equation, with each chapter revealing new layers of complexity while maintaining an emotional core that resonates across dimensions.`,
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }} />

      <main className="min-h-screen bg-gray-50/50">
        
        {/* ============================== */}
        {/* BOOK SPOTLIGHT HERO SECTION    */}
        {/* ============================== */}
        <header className="relative bg-gradient-to-b from-emerald-50/80 to-transparent pt-20 pb-20 lg:pt-32 lg:pb-32 px-4 sm:px-6 lg:px-8 border-b border-gray-100/50 overflow-hidden">
          
          {/* Ambient Glow Orbs */}
          <div className="absolute top-0 right-1/4 -translate-y-12 translate-x-1/2 z-0 pointer-events-none">
            <div className="w-[600px] h-[600px] bg-emerald-200/40 rounded-full blur-[100px]" />
          </div>
          <div className="absolute top-0 left-0 -translate-x-1/4 translate-y-1/4 z-0 pointer-events-none">
            <div className="w-[400px] h-[400px] bg-sky-100/30 rounded-full blur-[80px]" />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm font-medium">
                <li><Link href="/" className="text-gray-400 hover:text-emerald-600 transition-colors">Home</Link></li>
                <li className="text-gray-300">/</li>
                <li><Link href="/books" className="text-gray-400 hover:text-emerald-600 transition-colors">Books</Link></li>
                <li className="text-gray-300">/</li>
                <li className="text-emerald-800 font-bold truncate max-w-[200px]">{book.title}</li>
              </ol>
            </nav>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              
              {/* Massive 3D Book Cover Spotlighting */}
              <div className="flex-shrink-0 lg:w-80 relative group mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-emerald-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="w-full aspect-[2/3] rounded-[2rem] overflow-hidden bg-white ring-[8px] ring-white shadow-[0_20px_50px_rgb(0,0,0,0.15)] relative z-10 transition-transform duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2 group-hover:shadow-[0_40px_80px_rgb(0,0,0,0.2)]">
                  <img
                    src={book.cover || "/placeholder.svg"}
                    alt={`${book.title} cover`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  {/* Glass glare effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none mix-blend-overlay"></div>
                </div>
              </div>

              {/* Data Blocks */}
              <div className="flex-1 pt-2">
                
                {/* Immersive Tags Map */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {book.genre.map((genre) => (
                    <span
                      key={genre}
                      className="inline-flex items-center px-4 py-1.5 bg-white/60 backdrop-blur-sm border border-emerald-100 text-emerald-800 rounded-full text-sm font-bold tracking-wider uppercase shadow-sm"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-emerald-500 mr-2" />
                      {genre}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
                  {book.title}
                </h1>
                
                <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-medium">
                  by {" "}
                  <Link href={`/author/${book.authorSlug}`} className="text-emerald-600 hover:text-emerald-700 underline underline-offset-4 decoration-emerald-200 hover:decoration-emerald-500 transition-colors">
                    {book.author}
                  </Link>
                </p>

                {/* Glassmorphic Data Pills row */}
                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <div className="flex items-center bg-white/70 backdrop-blur-md border border-gray-200/50 px-5 py-3 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                    <div className="flex items-center mr-2">
                      <Star className="h-5 w-5 text-amber-500 fill-current" />
                    </div>
                    <span className="font-bold text-gray-900 text-lg mr-2">{book.rating}</span>
                    <span className="font-medium text-gray-500">({book.totalRatings.toLocaleString()})</span>
                  </div>
                  
                  <div className="flex items-center bg-white/70 backdrop-blur-md border border-gray-200/50 px-5 py-3 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                    <BookOpen className="h-5 w-5 text-emerald-600 mr-2.5" />
                    <span className="font-bold text-gray-900">{book.pages} <span className="font-medium text-gray-500">Pages</span></span>
                  </div>

                  <div className="flex items-center bg-white/70 backdrop-blur-md border border-gray-200/50 px-5 py-3 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                    <Calendar className="h-5 w-5 text-emerald-600 mr-2.5" />
                    <span className="font-bold text-gray-900">{new Date(book.publishedDate).getFullYear()} <span className="font-medium text-gray-500">Published</span></span>
                  </div>
                </div>

                {/* Awards Pill */}
                {book.awards.length > 0 && (
                  <div className="mb-10 flex flex-wrap gap-3">
                    {book.awards.map((award) => (
                      <span key={award} className="inline-flex items-center bg-amber-50 border border-amber-200/50 text-amber-800 px-4 py-2 rounded-xl text-sm font-bold tracking-wide shadow-sm">
                        <Award className="h-4 w-4 mr-2 text-amber-500" />
                        {award}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Row */}
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                  <a
                    href={book.buyLinks[0].url}
                    className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-bold text-lg rounded-2xl hover:bg-emerald-500 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group shadow-lg flex-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ShoppingCart className="w-5 h-5 mr-3 group-hover:-rotate-6 transition-transform" />
                    Get Book For {book.buyLinks[0].price}
                  </a>
                </div>

              </div>
            </div>
          </div>
        </header>

        {/* ============================== */}
        {/* SYNOPSIS & PUBLICATION META    */}
        {/* ============================== */}
        <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Main Synopsis */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">About The Book</h2>
              <div className="prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed prose-p:font-medium prose-p:mb-6 prose-headings:font-bold">
                {book.summary.split("\n\n").map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Publication Details Dashboard */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-emerald-600" />
                  Publication Info
                </h3>
                
                <dl className="space-y-6">
                  <div className="pb-4 border-b border-gray-200/60">
                    <dt className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Publisher</dt>
                    <dd className="text-gray-900 font-bold text-lg">{book.publisher}</dd>
                  </div>
                  <div className="pb-4 border-b border-gray-200/60">
                    <dt className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">ISBN</dt>
                    <dd className="text-gray-900 font-bold text-lg">{book.isbn}</dd>
                  </div>
                  <div className="pb-4 border-b border-gray-200/60">
                    <dt className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Language</dt>
                    <dd className="text-gray-900 font-bold text-lg">{book.language}</dd>
                  </div>
                </dl>
              </div>
            </div>

          </div>
        </section>

        {/* ============================== */}
        {/* REVIEW BOARD (Glassmorphism)   */}
        {/* ============================== */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            
            <div className="mb-14 text-center md:text-left border-b border-gray-200/60 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Verified Reading Lists</h2>
                <p className="text-gray-500 text-lg font-medium">Top influencers and authors who recommended this book.</p>
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-100 font-bold shadow-sm">
                <Users className="w-4 h-4 mr-2" />
                {book.recommendations.length} Influencer Spotlights
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {book.recommendations.map((recommendation) => (
                <article
                  key={recommendation.id}
                  className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-8 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center mb-6 pb-6 border-b border-gray-50">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 ring-[4px] ring-gray-50 mr-4 shadow-sm flex-shrink-0">
                      <img
                        src={recommendation.avatar || "/placeholder.svg"}
                        alt={`${recommendation.name} avatar`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg flex items-center group-hover:text-emerald-700 transition-colors">
                        {recommendation.name}
                        {recommendation.isVerified && (
                          <CheckCircle className="w-4 h-4 text-emerald-500 ml-1.5 flex-shrink-0" />
                        )}
                      </h3>
                      <p className="text-xs font-bold text-gray-500 tracking-wide uppercase mt-1">{recommendation.title}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-600 font-medium font-serif italic leading-relaxed text-[15px] flex-1">
                    "{recommendation.quote}"
                  </blockquote>
                  
                  <div className="mt-6 inline-flex items-center text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg w-max">
                    <Users className="w-3.5 h-3.5 mr-1.5" />
                    {recommendation.followerCount} Readers
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* ============================== */}
        {/* RETAILER PURCHASE LINKS        */}
        {/* ============================== */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center tracking-tight">Available At Your Favorite Retailers</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {book.buyLinks.map((link) => (
                <a
                  key={link.retailer}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-gray-200 hover:border-emerald-500 text-gray-900 rounded-2xl p-6 text-center shadow-sm hover:shadow-[0_8px_30px_rgb(16,185,129,0.15)] transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="text-lg font-bold mb-4 group-hover:text-emerald-600 transition-colors">
                    {link.retailer}
                  </div>
                  <div className="mt-auto">
                    <div className="inline-flex items-center justify-center w-full px-4 py-3 bg-emerald-50 text-emerald-700 font-bold rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      {link.price}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <p className="text-center text-gray-400 font-medium text-sm mt-8">
              Prices are subject to variation. We may receive affiliate compensation for transactions.
            </p>
          </div>
        </section>

        {/* ============================== */}
        {/* DEEP-MODE CTA SECTION          */}
        {/* ============================== */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-emerald-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[100px] opacity-20 pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-teal-400 rounded-full blur-[100px] opacity-20 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight text-balance">
              Building Your Reading List?
            </h2>
            <p className="text-emerald-100/90 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
              Continue exploring thousands of verified top recommendations organized into our curated directories.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/categories"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-400 text-emerald-950 font-black text-lg rounded-xl hover:bg-emerald-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg w-full sm:w-auto"
              >
                Browse Genres
              </Link>
              <Link
                href={`/author/${book.authorSlug}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-emerald-400 text-emerald-300 font-black text-lg rounded-xl hover:bg-emerald-800 transition-all duration-300 w-full sm:w-auto"
              >
                More by {book.author}
                <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
