import type { Metadata } from "next"
import { Star, BookOpen, Calendar, Users, ExternalLink, ArrowRight, ShoppingCart, CheckCircle } from "lucide-react"
import { notFound } from "next/navigation"
import Link from "next/link"

// Mock data - in a real app, this would come from a database
const authorsData = {
  "sarah-chen": {
    id: 1,
    name: "Sarah Chen",
    slug: "sarah-chen",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Sarah Chen is a bestselling science fiction author known for her thought-provoking explorations of technology, humanity, and the future. With over 15 years of writing experience, she has captivated readers worldwide with her unique blend of hard science and emotional storytelling. Her works have been translated into 23 languages and have won numerous awards including the Hugo Award and Nebula Award.",
    genre: "Science Fiction",
    booksPublished: 12,
    followers: "2.3M",
    joinedYear: 2008,
    website: "https://sarahchen.com",
    socialMedia: {
      twitter: "@sarahchen_sf",
      instagram: "@sarahchen_author",
    },
    recommendedBooks: [
      {
        id: 1,
        title: "Dune",
        author: "Frank Herbert",
        cover: "/placeholder.svg?height=400&width=280",
        summary: "A masterpiece of science fiction that explores politics, religion, and ecology on the desert planet Arrakis. Herbert's world-building is unparalleled.",
        rating: 4.9,
        publishedYear: 1965,
        genre: "Science Fiction",
      },
      {
        id: 2,
        title: "The Left Hand of Darkness",
        author: "Ursula K. Le Guin",
        cover: "/placeholder.svg?height=400&width=280",
        summary: "A groundbreaking exploration of gender and society through the lens of an alien world. Le Guin's prose is both beautiful and thought-provoking.",
        rating: 4.7,
        publishedYear: 1969,
        genre: "Science Fiction",
      },
      {
        id: 3,
        title: "Neuromancer",
        author: "William Gibson",
        cover: "/placeholder.svg?height=400&width=280",
        summary: "The cyberpunk classic that defined a genre. Gibson's vision of cyberspace and artificial intelligence remains influential decades later.",
        rating: 4.6,
        publishedYear: 1984,
        genre: "Cyberpunk",
      },
      {
        id: 4,
        title: "The Fifth Season",
        author: "N.K. Jemisin",
        cover: "/placeholder.svg?height=400&width=280",
        summary: "A powerful fantasy that tackles themes of oppression and survival in a world plagued by seismic catastrophes. Jemisin's storytelling is exceptional.",
        rating: 4.8,
        publishedYear: 2015,
        genre: "Fantasy",
      },
      {
        id: 5,
        title: "Station Eleven",
        author: "Emily St. John Mandel",
        cover: "/placeholder.svg?height=400&width=280",
        summary: "A post-apocalyptic novel that focuses on art, memory, and human connection. Mandel weaves multiple timelines into a beautiful narrative.",
        rating: 4.5,
        publishedYear: 2014,
        genre: "Literary Fiction",
      },
      {
        id: 6,
        title: "The Martian",
        author: "Andy Weir",
        cover: "/placeholder.svg?height=400&width=280",
        summary: "A thrilling survival story that combines hard science with humor. Weir's attention to scientific detail makes this an engaging read.",
        rating: 4.7,
        publishedYear: 2011,
        genre: "Science Fiction",
      },
    ],
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const author = authorsData[slug as keyof typeof authorsData]

  if (!author) {
    return {
      title: "Author Not Found",
      description: "The requested author profile could not be found.",
    }
  }

  return {
    title: `${author.name} - Author Profile | BookDiscover`,
    description: `Discover ${author.name}'s book recommendations and learn about this acclaimed ${author.genre} author. Explore curated reading lists and literary insights.`,
    keywords: `${author.name}, ${author.genre}, book recommendations, author profile, reading list`,
    openGraph: {
      title: `${author.name} - Author Profile`,
      description: author.bio.substring(0, 160),
      images: [author.image],
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: `${author.name} - Author Profile`,
      description: author.bio.substring(0, 160),
      images: [author.image],
    },
  }
}

export default async function AuthorProfilePage({ params }: Props) {
  const { slug } = await params
  const author = authorsData[slug as keyof typeof authorsData]

  if (!author) {
    notFound()
  }

  // Schema.org structured data
  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    image: author.image,
    description: author.bio,
    url: author.website,
    jobTitle: "Author",
    genre: author.genre,
    sameAs: [
      `https://twitter.com/${author.socialMedia.twitter.replace("@", "")}`,
      `https://instagram.com/${author.socialMedia.instagram.replace("@", "")}`,
    ],
  }

  const booksSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Books recommended by ${author.name}`,
    itemListElement: author.recommendedBooks.map((book, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Book",
        name: book.title,
        author: book.author,
        genre: book.genre,
        datePublished: book.publishedYear.toString(),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: book.rating,
          bestRating: 5,
        },
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(booksSchema) }} />

      <main className="min-h-screen bg-gray-50/50">
        
        {/* ============================== */}
        {/* IMMERSIVE AUTHOR HERO SECTION  */}
        {/* ============================== */}
        <header className="relative bg-gradient-to-b from-emerald-50/80 to-transparent pt-20 pb-20 lg:pt-32 lg:pb-32 px-4 sm:px-6 lg:px-8 border-b border-gray-100/50 overflow-hidden">
          
          {/* Ambient Glow Orbs */}
          <div className="absolute top-0 right-1/4 -translate-y-12 translate-x-1/2 z-0 pointer-events-none">
            <div className="w-[600px] h-[600px] bg-emerald-200/40 rounded-full blur-[100px]" />
          </div>
          <div className="absolute top-0 left-0 -translate-x-1/4 translate-y-1/4 z-0 pointer-events-none">
            <div className="w-[400px] h-[400px] bg-sky-100/30 rounded-full blur-[80px]" />
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14">
              
              {/* Profile Image - Raised & Shadowed */}
              <div className="flex-shrink-0 relative group">
                <div className="absolute inset-0 bg-emerald-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden bg-white ring-[6px] ring-white shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    src={author.image || "/placeholder.svg"}
                    alt={`${author.name} profile`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Author Data */}
              <div className="flex-1 text-center md:text-left pt-2">
                
                <div className="inline-flex items-center px-4 py-1.5 bg-white/60 backdrop-blur-sm border border-emerald-100 text-emerald-800 rounded-full text-sm font-bold tracking-wider uppercase shadow-sm mb-5">
                  <Star className="w-4 h-4 text-emerald-500 mr-2" />
                  {author.genre} Architect
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                  {author.name}
                </h1>
                
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl text-balance font-medium">
                  "{author.bio}"
                </p>

                {/* Glassmorphic Data Pills */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
                  <div className="flex items-center bg-white/50 backdrop-blur-md border border-gray-200/50 px-5 py-2.5 rounded-2xl shadow-sm">
                    <BookOpen className="h-5 w-5 text-emerald-600 mr-2.5" />
                    <span className="font-bold text-gray-900">{author.booksPublished} <span className="font-medium text-gray-500">Books</span></span>
                  </div>
                  <div className="flex items-center bg-white/50 backdrop-blur-md border border-gray-200/50 px-5 py-2.5 rounded-2xl shadow-sm">
                    <Users className="h-5 w-5 text-emerald-600 mr-2.5" />
                    <span className="font-bold text-gray-900">{author.followers} <span className="font-medium text-gray-500">Followers</span></span>
                  </div>
                  <div className="flex items-center bg-white/50 backdrop-blur-md border border-gray-200/50 px-5 py-2.5 rounded-2xl shadow-sm">
                    <Calendar className="h-5 w-5 text-emerald-600 mr-2.5" />
                    <span className="font-bold text-gray-900">Since <span className="font-medium text-gray-500">{author.joinedYear}</span></span>
                  </div>
                </div>

                {/* External Links */}
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
                  <a
                    href={author.website}
                    className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Official Website
                  </a>
                  <div className="flex space-x-2 text-gray-500 font-medium">
                    <span className="px-4 py-3 bg-white/40 backdrop-blur-sm border border-gray-200/50 rounded-xl">{author.socialMedia.twitter}</span>
                    <span className="px-4 py-3 bg-white/40 backdrop-blur-sm border border-gray-200/50 rounded-xl">{author.socialMedia.instagram}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </header>

        {/* ============================== */}
        {/* RECOMMENDED BOOKS (Bento UI)   */}
        {/* ============================== */}
        <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-7xl mx-auto">
            
            <div className="mb-14 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">The Reading List</h2>
                <p className="text-gray-500 text-lg">Books heavily recommended and reviewed by {author.name}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {author.recommendedBooks.map((book) => (
                <article
                  key={book.id}
                  className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-6 sm:p-8 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div className="flex gap-6 mb-6">
                    {/* Cover: Strict aspect ratio mapping */}
                    <div className="w-32 sm:w-36 flex-shrink-0 aspect-[2/3] rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300 relative">
                      <img
                        src={book.cover || "/placeholder.svg"}
                        alt={`${book.title} cover`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-col py-1">
                      <div className="mb-2">
                        <span className="inline-flex px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md text-[11px] font-bold uppercase tracking-wider">
                          {book.genre}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors leading-tight">
                        {book.title}
                      </h3>
                      <p className="text-gray-500 font-medium mb-3">by {book.author}</p>
                      
                      <div className="flex items-center mt-auto bg-gray-50 w-max px-2.5 py-1 rounded-md border border-gray-100">
                        <Star className="h-4 w-4 text-amber-500 fill-current" />
                        <span className="ml-1.5 text-sm font-bold text-gray-900">{book.rating}</span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-sm font-medium text-gray-500">{book.publishedYear}</span>
                      </div>
                    </div>
                  </div>

                  {/* Curated Summary Block */}
                  <div className="mb-8 flex-1">
                    <p className="text-gray-600 leading-relaxed text-[15px] font-medium font-serif italic mb-4">
                      "{book.summary}"
                    </p>
                    <div className="flex items-center text-xs font-bold text-gray-400 tracking-wider uppercase">
                      <div className="w-8 h-[1px] bg-gray-300 mr-3"></div>
                      Selected by {author.name}
                    </div>
                  </div>

                  {/* Fluid CTA */}
                  <a
                    href="https://amazon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center w-full px-6 py-4 bg-gray-50 border border-gray-200 text-gray-800 font-bold rounded-xl hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all duration-300 group/btn"
                    aria-label={`Buy ${book.title} from Amazon`}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Buy on Amazon
                    <ArrowRight className="w-4 h-4 ml-2 opacity-50 group-hover/btn:translate-x-1 group-hover/btn:opacity-100 transition-all" />
                  </a>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* ============================== */}
        {/* DEEP-MODE CTA (Consistency Stop) */}
        {/* ============================== */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-emerald-900 relative overflow-hidden mt-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[100px] opacity-20 pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-teal-400 rounded-full blur-[100px] opacity-20 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight text-balance">
              Discover More Literary Minds
            </h2>
            <p className="text-emerald-100/90 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
              Explore our massive directory of pioneering authors, their biographies, and precisely curated reading lists.
            </p>
            
            <div className="flex justify-center">
              <Link
                href="/authors"
                className="inline-flex items-center px-10 py-5 bg-emerald-400 text-emerald-950 font-black text-lg rounded-full hover:bg-emerald-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                Browse All Authors <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </div>
            
            <p className="text-emerald-200/60 text-sm mt-8 font-medium tracking-wide uppercase">
              Join 10,000+ Readers inside
            </p>
          </div>
        </section>

      </main>
    </>
  )
}
