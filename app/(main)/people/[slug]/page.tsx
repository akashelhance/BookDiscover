import type { Metadata } from "next"
import { Star, Calendar, ExternalLink, BookOpen, Users, CheckCircle, ArrowRight, ShoppingCart } from "lucide-react"
import { notFound } from "next/navigation"
import Link from "next/link"

type Props = {
  params: Promise<{ slug: string }>
}

// Mock data - in a real app, this would come from a database
const peopleData = {
  "elon-musk": {
    id: 1,
    name: "Elon Musk",
    slug: "elon-musk",
    profession: "Entrepreneur & CEO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Elon Musk is a visionary entrepreneur and CEO of Tesla and SpaceX. Known for his ambitious goals of sustainable energy and space exploration, Musk is also an avid reader who often shares book recommendations that have shaped his thinking on innovation, technology, and the future of humanity. His reading list spans from science fiction to biographies of great inventors and business leaders.",
    followers: "2.3M",
    totalRecommendations: 47,
    website: "https://twitter.com/elonmusk",
    recommendedBooks: [
      {
        id: 1,
        title: "The Foundation Series",
        author: "Isaac Asimov",
        cover: "/placeholder.svg?height=400&width=280",
        summary: "A science fiction masterpiece that explores the fall and rise of galactic civilizations. Asimov's vision of psychohistory and the future of humanity has deeply influenced Musk's thinking about long-term planning and space colonization.",
        rating: 4.8,
        publishedYear: 1951,
        genre: "Science Fiction",
      },
      {
        id: 2,
        title: "Structures: Or Why Things Don't Fall Down",
        author: "J.E. Gordon",
        cover: "/placeholder.svg?height=400&width=280",
        summary: "An accessible introduction to structural engineering that explains how buildings, bridges, and other structures work. This book provides fundamental insights into engineering principles that apply to rocket design and construction.",
        rating: 4.6,
        publishedYear: 1978,
        genre: "Engineering",
      },
      {
        id: 3,
        title: "Benjamin Franklin: An American Life",
        author: "Walter Isaacson",
        cover: "/placeholder.svg?height=400&width=280",
        summary: "A comprehensive biography of one of America's most fascinating founding fathers. Franklin's entrepreneurial spirit, scientific curiosity, and innovative thinking serve as inspiration for modern-day innovators and entrepreneurs.",
        rating: 4.7,
        publishedYear: 2003,
        genre: "Biography",
      },
      {
        id: 4,
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        cover: "/placeholder.svg?height=400&width=280",
        summary: "A humorous science fiction series that combines wit with profound questions about life, the universe, and everything. Adams' irreverent take on space travel and technology offers both entertainment and philosophical insights.",
        rating: 4.5,
        publishedYear: 1979,
        genre: "Science Fiction",
      },
      {
        id: 5,
        title: "Ignition!",
        author: "John D. Clark",
        cover: "/placeholder.svg?height=400&width=280",
        summary: "An informal history of liquid rocket propellants that combines technical knowledge with entertaining anecdotes. Essential reading for anyone interested in the practical challenges of rocket engineering and space exploration.",
        rating: 4.9,
        publishedYear: 1972,
        genre: "Science",
      },
      {
        id: 6,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        cover: "/placeholder.svg?height=400&width=280",
        summary: "The epic fantasy trilogy that has captivated readers for generations. Tolkien's detailed world-building and themes of perseverance against overwhelming odds resonate with anyone pursuing ambitious, seemingly impossible goals.",
        rating: 4.8,
        publishedYear: 1954,
        genre: "Fantasy",
      },
    ],
  },
  "oprah-winfrey": {
    id: 2,
    name: "Oprah Winfrey",
    slug: "oprah-winfrey",
    profession: "Media Mogul & Philanthropist",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Oprah Winfrey is one of the most influential media personalities in the world, known for her talk show, book club, and philanthropic efforts. Her book recommendations have launched countless bestsellers and introduced millions of readers to transformative literature. Oprah's reading selections often focus on personal growth, human connection, and stories that illuminate the human experience.",
    followers: "19.2M",
    totalRecommendations: 156,
    website: "https://www.oprah.com",
    recommendedBooks: [
      {
        id: 7,
        title: "Becoming",
        author: "Michelle Obama",
        cover: "/placeholder.svg?height=400&width=280",
        summary: "The former First Lady's memoir chronicles her journey from the South Side of Chicago to the White House. A powerful story of resilience, family, and finding your voice in a world that often tries to silence it.",
        rating: 4.9,
        publishedYear: 2018,
        genre: "Memoir",
      },
      {
        id: 8,
        title: "The Water Dancer",
        author: "Ta-Nehisi Coates",
        cover: "/placeholder.svg?height=400&width=280",
        summary: "A powerful novel that blends history with magical realism, telling the story of a young man born into slavery who discovers a mysterious power. Coates weaves together themes of memory, family, and the enduring impact of slavery.",
        rating: 4.4,
        publishedYear: 2019,
        genre: "Historical Fiction",
      },
      {
        id: 9,
        title: "The Sun Does Shine",
        author: "Anthony Ray Hinton",
        cover: "/placeholder.svg?height=400&width=280",
        summary: "A memoir of hope and resilience from a man who spent 30 years on death row for crimes he didn't commit. Hinton's story demonstrates the power of forgiveness, friendship, and maintaining hope in the darkest circumstances.",
        rating: 4.7,
        publishedYear: 2018,
        genre: "Memoir",
      },
    ],
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const person = peopleData[slug as keyof typeof peopleData]

  if (!person) {
    return {
      title: "Person Not Found",
      description: "The requested person profile could not be found.",
    }
  }

  return {
    title: `${person.name} - Book Recommendations | BookDiscover`,
    description: `Discover book recommendations from ${person.name}, ${person.profession}. Explore ${person.totalRecommendations} carefully curated books that have influenced this thought leader.`,
    keywords: `${person.name}, book recommendations, ${person.profession}, reading list, influential people`,
    authors: [{ name: person.name }],
    openGraph: {
      title: `${person.name} - Book Recommendations`,
      description: `Discover book recommendations from ${person.name}, ${person.profession}.`,
      images: [
        {
          url: person.image,
          width: 300,
          height: 300,
          alt: `${person.name} profile picture`,
        },
      ],
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: `${person.name} - Book Recommendations`,
      description: `Discover book recommendations from ${person.name}, ${person.profession}.`,
      images: [person.image],
    },
  }
}

export default async function PersonDetailPage({ params }: Props) {
  const { slug } = await params
  const person = peopleData[slug as keyof typeof peopleData]

  if (!person) {
    notFound()
  }

  // Schema.org structured data
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    image: person.image,
    description: person.bio,
    url: person.website,
    jobTitle: person.profession,
    sameAs: [person.website],
  }

  const booksSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Books recommended by ${person.name}`,
    description: `A curated list of book recommendations from ${person.name}`,
    itemListElement: person.recommendedBooks.map((book, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Book",
        name: book.title,
        author: book.author,
        genre: book.genre,
        datePublished: book.publishedYear.toString(),
        description: book.summary,
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(booksSchema) }} />

      <main className="min-h-screen bg-gray-50/50">
        
        {/* ============================== */}
        {/* INFLUENCER HERO SECTION        */}
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
            
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm font-medium">
                <li><Link href="/" className="text-gray-400 hover:text-emerald-600 transition-colors">Home</Link></li>
                <li className="text-gray-300">/</li>
                <li><Link href="/people" className="text-gray-400 hover:text-emerald-600 transition-colors">People Directory</Link></li>
                <li className="text-gray-300">/</li>
                <li className="text-emerald-800 font-bold">{person.name}</li>
              </ol>
            </nav>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14">
              
              {/* Profile Image - Raised & Shadowed */}
              <div className="flex-shrink-0 relative group">
                <div className="absolute inset-0 bg-emerald-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden bg-white ring-[6px] ring-white shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    src={person.image || "/placeholder.svg"}
                    alt={`${person.name} profile`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Data Blocks */}
              <div className="flex-1 text-center md:text-left pt-2">
                
                <div className="inline-flex items-center px-4 py-1.5 bg-white/60 backdrop-blur-sm border border-emerald-100 text-emerald-800 rounded-full text-sm font-bold tracking-wider uppercase shadow-sm mb-5">
                  <Star className="w-4 h-4 text-emerald-500 mr-2" />
                  {person.profession}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                  {person.name}'s Reading List
                </h1>
                
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl text-balance font-medium">
                  "{person.bio}"
                </p>

                {/* Glassmorphic Data Pills */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
                  <div className="flex items-center bg-white/50 backdrop-blur-md border border-gray-200/50 px-5 py-2.5 rounded-2xl shadow-sm">
                    <BookOpen className="h-5 w-5 text-emerald-600 mr-2.5" />
                    <span className="font-bold text-gray-900">{person.totalRecommendations} <span className="font-medium text-gray-500">Books</span></span>
                  </div>
                  <div className="flex items-center bg-white/50 backdrop-blur-md border border-gray-200/50 px-5 py-2.5 rounded-2xl shadow-sm">
                    <Users className="h-5 w-5 text-emerald-600 mr-2.5" />
                    <span className="font-bold text-gray-900">{person.followers} <span className="font-medium text-gray-500">Followers</span></span>
                  </div>
                </div>

                {/* External Links */}
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
                  <a
                    href={person.website}
                    className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Official Website
                  </a>
                </div>

              </div>
            </div>
          </div>
        </header>

        {/* ============================== */}
        {/* RECOMMENDED BOOKS (Flex Bento) */}
        {/* ============================== */}
        <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-7xl mx-auto">
            
            <div className="mb-14 text-center md:text-left border-b border-gray-200/60 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Curated Books</h2>
                <p className="text-gray-500 text-lg">The foundational literature that shaped {person.name}'s mind.</p>
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-100 font-bold shadow-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                Verified Recommendations
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {person.recommendedBooks.map((book) => (
                <article
                  key={book.id}
                  className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-6 sm:p-8 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div className="flex gap-6 mb-6">
                    {/* Cover: Strict aspect ratio flex mapping */}
                    <div className="w-32 sm:w-36 flex-shrink-0 aspect-[2/3] rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300 relative">
                      <img
                        src={book.cover || "/placeholder.svg"}
                        alt={`${book.title} cover`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    </div>

                    {/* Meta Information Container */}
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

                  {/* Curated Summary / Review Block */}
                  <div className="mb-8 flex-1">
                    <p className="text-gray-600 leading-relaxed text-[15px] font-medium font-serif italic mb-4">
                      "{book.summary}"
                    </p>
                    <div className="flex items-center text-xs font-bold text-gray-400 tracking-wider uppercase">
                      <div className="w-8 h-[1px] bg-gray-300 mr-3"></div>
                      Insight from {person.name}
                    </div>
                  </div>

                  {/* Fluid Conversion Button */}
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
        {/* DEEP-MODE CTA SECTION          */}
        {/* ============================== */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-emerald-900 relative overflow-hidden mt-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
          
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[100px] opacity-20 pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-teal-400 rounded-full blur-[100px] opacity-20 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight text-balance">
              Discover More Influential Minds
            </h2>
            <p className="text-emerald-100/90 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
              Continue exploring the definitive curated reading lists of global leaders, scientists, and creatives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/people"
                className="inline-flex items-center justify-center px-10 py-5 bg-emerald-400 text-emerald-950 font-black text-lg rounded-full hover:bg-emerald-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                Browse All Directory <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </div>
            
            <p className="text-emerald-200/60 text-sm mt-8 font-bold tracking-widest uppercase">
              150+ Curators Discovered
            </p>
          </div>
        </section>

      </main>
    </>
  )
}
