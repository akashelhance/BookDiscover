import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Users, Filter, Sparkles, ArrowRight } from "lucide-react"
import { siteConfig } from "../../../config/site"

export const metadata: Metadata = {
  title: `All Authors - Discover Great Writers | ${siteConfig.name}`,
  description:
    "Explore our comprehensive collection of authors. Find bestselling writers, emerging talents, and literary legends across all genres.",
  keywords: [
    "book authors",
    "writers",
    "bestselling authors",
    "fiction writers",
    "non-fiction authors",
    "literary authors",
    "author directory",
  ],
  openGraph: {
    title: `All Authors - ${siteConfig.name}`,
    description: "Explore our comprehensive collection of authors across all genres.",
    type: "website",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Authors Collection`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `All Authors - ${siteConfig.name}`,
    description: "Explore our comprehensive collection of authors across all genres.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

// Mock data for authors
const authors = [
  {
    id: 1,
    name: "Sarah Chen",
    slug: "sarah-chen",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Award-winning science fiction author known for exploring quantum physics and parallel realities in her thought-provoking novels.",
    booksCount: 12,
    genre: "Science Fiction",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    slug: "marcus-rodriguez",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Former detective turned mystery writer whose intricate plots and authentic procedural details have earned him multiple Edgar Award nominations.",
    booksCount: 8,
    genre: "Mystery & Thriller",
  },
  {
    id: 3,
    name: "Elena Volkov",
    slug: "elena-volkov",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Renowned historical fiction author with a gift for bringing forgotten moments in history to vivid life with deep research.",
    booksCount: 15,
    genre: "Historical Fiction",
  },
  {
    id: 4,
    name: "James Thompson",
    slug: "james-thompson",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Bestselling non-fiction author specializing in accessible explanations of complex scientific concepts. Bridging academia and public understanding.",
    booksCount: 6,
    genre: "Non-Fiction",
  },
  {
    id: 5,
    name: "Aisha Patel",
    slug: "aisha-patel",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Rising literary star whose debut novel exploring cultural identity and belonging won the National Book Award.",
    booksCount: 3,
    genre: "Literary Fiction",
  },
  {
    id: 6,
    name: "David Kim",
    slug: "david-kim",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Pioneering business author and tech entrepreneur whose practical frameworks for innovation shape modern enterprise.",
    booksCount: 5,
    genre: "Business",
  },
  {
    id: 7,
    name: "Maria Santos",
    slug: "maria-santos",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Celebrated romance novelist known for her emotionally resonant love stories set against vividly realized international backdrops.",
    booksCount: 11,
    genre: "Romance",
  },
  {
    id: 8,
    name: "Robert Chen",
    slug: "robert-chen",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Fantasy world-builder extraordinaire whose epic series spans multiple continents, civilizations, and magical systems.",
    booksCount: 9,
    genre: "Fantasy",
  },
  {
    id: 9,
    name: "Sophia Williams",
    slug: "sophia-williams",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Pulitzer Prize-winning journalist whose narrative non-fiction examines social justice issues with compassion and clarity.",
    booksCount: 4,
    genre: "Non-Fiction",
  },
  {
    id: 10,
    name: "Thomas Wright",
    slug: "thomas-wright",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Veteran biographer whose meticulously researched portraits of historical figures reveal the complex humanity behind iconic names.",
    booksCount: 7,
    genre: "Biography",
  },
  {
    id: 11,
    name: "Olivia Johnson",
    slug: "olivia-johnson",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Acclaimed children's author whose whimsical illustrations and gentle storytelling have made her books bedtime favorites.",
    booksCount: 18,
    genre: "Children's",
  },
  {
    id: 12,
    name: "Steven Pressfield",
    slug: "steven-pressfield",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Versatile author known for historical fiction and practical guides on creativity, inspiring artists and entrepreneurs worldwide.",
    booksCount: 10,
    genre: "Historical Fiction",
  },
  {
    id: 13,
    name: "Naomi Chen",
    slug: "naomi-chen",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Climate scientist and nature writer whose lyrical explorations of ecosystems combine scientific precision with poetic sensibility.",
    booksCount: 5,
    genre: "Nature & Environment",
  },
  {
    id: 14,
    name: "Michael Okafor",
    slug: "michael-okafor",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Visionary science fiction author whose near-future speculations on technology and society have proven remarkably prescient.",
    booksCount: 8,
    genre: "Science Fiction",
  },
  {
    id: 15,
    name: "Emma Richards",
    slug: "emma-richards",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Bestselling cookbook author and culinary historian who documents traditional recipes and food cultures from around the world.",
    booksCount: 9,
    genre: "Cooking",
  },
]

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function AuthorsPage({ searchParams }: Props) {
  // 1. Resolve search params securely on server
  const params = await searchParams
  const activeGenre = typeof params.genre === 'string' ? params.genre : 'All'

  // 2. Extract unique genres dynamically for the Filter UI
  const uniqueGenres = Array.from(new Set(authors.map(a => a.genre))).sort()
  
  // 3. Compute genre counts for Sidebar Dashboard
  const genreCounts = authors.reduce((acc, author) => {
    acc[author.genre] = (acc[author.genre] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  // 4. Filter authors based on URL
  const displayedAuthors = activeGenre === 'All' 
    ? authors 
    : authors.filter(author => author.genre === activeGenre)

  // 5. Schema.org structured data
  const authorsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "All Authors",
    description: "A comprehensive collection of authors featured on BookDiscover.",
    url: "https://bookdiscover.com/authors",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: displayedAuthors.map((author, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Person",
          name: author.name,
          url: `https://bookdiscover.com/author/${author.slug}`,
          image: author.image,
          description: author.bio,
          mainEntityOfPage: {
            "@type": "ProfilePage",
            "@id": `https://bookdiscover.com/author/${author.slug}`,
          },
        },
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorsSchema) }} />

      <main className="min-h-screen bg-gray-50/50">
        
        {/* ============================== */}
        {/* HERO SECTION (Immersive Glow) */}
        {/* ============================== */}
        <header className="relative bg-gradient-to-b from-emerald-50/80 to-transparent pt-24 pb-20 lg:pt-32 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-gray-100/50">
          <div className="absolute top-0 right-1/4 -translate-y-12 translate-x-1/2 z-0 pointer-events-none">
            <div className="w-[500px] h-[500px] bg-emerald-200/40 rounded-full blur-[100px]" />
          </div>
          <div className="absolute top-0 left-0 -translate-x-1/4 translate-y-1/4 z-0 pointer-events-none">
            <div className="w-[400px] h-[400px] bg-sky-100/30 rounded-full blur-[80px]" />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center justify-center space-x-2 bg-white/60 backdrop-blur-md border border-emerald-100 px-5 py-2 rounded-full text-sm font-semibold text-emerald-800 tracking-wide shadow-sm mb-6">
              <Users className="w-5 h-5 text-emerald-500" />
              <span>{authors.length} Brilliant Minds</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight text-balance">
              The Architects of <span className="text-emerald-600">Imagination</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto text-balance font-medium">
              Discover the brilliant minds behind your favorite books. Explore our collection of authors across all genres, from established literary legends to emerging breakthrough voices.
            </p>
          </div>
        </header>

        {/* ============================== */}
        {/* DASHBOARD LAYOUT (Sidebar+Grid)*/}
        {/* ============================== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* FLOATING GLASS SIDEBAR FILTER */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-6 lg:p-8 sticky top-8">
                <div className="flex items-center mb-6">
                  <Filter className="h-5 w-5 text-emerald-600 mr-2.5" />
                  <h2 className="text-xl font-bold text-gray-900 tracking-tight">Filter Genres</h2>
                </div>

                <nav aria-label="Filter authors by genre">
                  <ul className="space-y-1.5 border-t border-gray-100/50 pt-5">
                    {/* All Authors Pillar */}
                    <li>
                      <Link
                        href="/authors"
                        className={`flex items-center justify-between px-5 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 group ${
                          activeGenre === 'All'
                            ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                            : "text-gray-600 hover:bg-white hover:shadow-sm hover:text-emerald-700"
                        }`}
                        aria-current={activeGenre === 'All' ? "page" : undefined}
                      >
                        <span>All Authors</span>
                        <span
                          className={`text-xs px-2.5 py-1 rounded-md font-bold transition-colors ${
                            activeGenre === 'All'
                              ? "bg-white/20 text-white"
                              : "bg-gray-100 text-gray-500 group-hover:bg-emerald-50 group-hover:text-emerald-700"
                          }`}
                        >
                          {authors.length}
                        </span>
                      </Link>
                    </li>
                    
                    {/* Unique Genres Pillars */}
                    {uniqueGenres.map((genre) => {
                      const isActive = activeGenre === genre
                      return (
                        <li key={genre}>
                          <Link
                            href={`/authors?genre=${encodeURIComponent(genre)}`}
                            className={`flex items-center justify-between px-5 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 group ${
                              isActive
                                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                                : "text-gray-600 hover:bg-white hover:shadow-sm hover:text-emerald-700"
                            }`}
                            aria-current={isActive ? "page" : undefined}
                          >
                            <span>{genre}</span>
                            <span
                              className={`text-xs px-2.5 py-1 rounded-md font-bold transition-colors ${
                                isActive
                                  ? "bg-white/20 text-white"
                                  : "bg-gray-100 text-gray-500 group-hover:bg-emerald-50 group-hover:text-emerald-700"
                              }`}
                            >
                              {genreCounts[genre]}
                            </span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* AUTHORS BENTO GRID */}
            <section className="flex-1 min-w-0">
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 pb-6 border-b border-gray-100/80">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 flex items-center mb-2 tracking-tight">
                    {activeGenre === 'All' ? 'Showing All Authors' : `Authors under "${activeGenre}"`}
                  </h2>
                  <p className="text-gray-500 font-medium">
                    Showing {displayedAuthors.length} {displayedAuthors.length === 1 ? "author" : "authors"}
                  </p>
                </div>
              </div>
              
              {displayedAuthors.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
                  <p className="text-xl text-gray-500 font-medium">No authors found matching this genre.</p>
                  <Link href="/authors" className="mt-4 inline-block text-emerald-600 font-bold hover:underline">Clear Filters</Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-16 mt-8">
                  {displayedAuthors.map((author) => (
                    <article key={author.id} className="relative pt-14"> {/* Padding top to accommodate popped image */}
                      <Link
                        href={`/author/${author.slug}`}
                        className="block h-full bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-100 focus:outline-none group"
                      >
                        <div className="px-6 pb-8 pt-20 flex flex-col h-full relative text-center">
                          
                          {/* 3D Popped Image */}
                          <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full overflow-hidden bg-gray-100 ring-4 ring-white shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:ring-emerald-50">
                            <img
                              src={author.image || "/placeholder.svg"}
                              alt={`${author.name} profile picture`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>

                          {/* Author Info */}
                          <div className="flex-1 flex flex-col items-center">
                            <h2 className="text-2xl font-bold text-gray-900 mb-1 tracking-tight group-hover:text-emerald-700 transition-colors">{author.name}</h2>
                            
                            <div className="inline-flex items-center px-2.5 py-1 mb-4 bg-emerald-50 rounded-md">
                              <Sparkles className="w-3 h-3 text-emerald-500 mr-1.5" />
                              <span className="text-emerald-700 font-bold text-[11px] uppercase tracking-wider">{author.genre}</span>
                            </div>

                            <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-3 mb-6">
                              "{author.bio}"
                            </p>

                            <div className="mt-auto w-full pt-4 border-t border-gray-50 flex items-center justify-between">
                              <span className="flex items-center text-sm font-semibold text-gray-500">
                                <BookOpen className="h-4 w-4 text-gray-400 border border-gray-200 rounded p-[1px] mr-1.5" />
                                {author.booksCount} {author.booksCount === 1 ? "Book" : "Books"}
                              </span>
                              
                              <span className="text-emerald-600 font-bold text-sm inline-flex items-center group-hover:text-emerald-700 transition-colors">
                                Profile
                                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </span>
                            </div>
                          </div>

                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>

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
              Discover New Literary Voices
            </h2>
            <p className="text-emerald-100/90 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
              Be the first to know when we add new authors, fascinating biographies, and curated reading lists. Join our newsletter today.
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
            
            <p className="text-emerald-200/60 text-sm mt-6 font-medium tracking-wide">
              Weekly updates. Zero spam.
            </p>
          </div>
        </section>

      </main>
    </>
  )
}
