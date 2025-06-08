import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "All Authors - Discover Great Writers | BookDiscover",
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
    title: "All Authors - BookDiscover",
    description: "Explore our comprehensive collection of authors across all genres.",
    type: "website",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "BookDiscover Authors Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Authors - BookDiscover",
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
    bio: "Award-winning science fiction author known for exploring quantum physics and parallel realities in her thought-provoking novels. Her work has been translated into 23 languages.",
    booksCount: 12,
    genre: "Science Fiction",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    slug: "marcus-rodriguez",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Former detective turned mystery writer whose intricate plots and authentic procedural details have earned him a devoted following and multiple Edgar Award nominations.",
    booksCount: 8,
    genre: "Mystery & Thriller",
  },
  {
    id: 3,
    name: "Elena Volkov",
    slug: "elena-volkov",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Renowned historical fiction author with a gift for bringing forgotten moments in history to vivid life. Her research-intensive approach creates immersive, authentic historical worlds.",
    booksCount: 15,
    genre: "Historical Fiction",
  },
  {
    id: 4,
    name: "James Thompson",
    slug: "james-thompson",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Bestselling non-fiction author specializing in accessible explanations of complex scientific concepts. His work bridges the gap between academic research and public understanding.",
    booksCount: 6,
    genre: "Non-Fiction",
  },
  {
    id: 5,
    name: "Aisha Patel",
    slug: "aisha-patel",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Rising literary star whose debut novel exploring cultural identity and belonging won the National Book Award. Her lyrical prose and complex characters have captivated critics.",
    booksCount: 3,
    genre: "Literary Fiction",
  },
  {
    id: 6,
    name: "David Kim",
    slug: "david-kim",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Pioneering business author and tech entrepreneur whose practical frameworks for innovation have influenced startups and Fortune 500 companies alike.",
    booksCount: 5,
    genre: "Business",
  },
  {
    id: 7,
    name: "Maria Santos",
    slug: "maria-santos",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Celebrated romance novelist known for her emotionally resonant love stories set against vividly realized international backdrops. Her work explores themes of fate and second chances.",
    booksCount: 11,
    genre: "Romance",
  },
  {
    id: 8,
    name: "Robert Chen",
    slug: "robert-chen",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Fantasy world-builder extraordinaire whose epic series spans multiple continents and civilizations. His intricate magic systems and political intrigue have earned comparisons to Tolkien.",
    booksCount: 9,
    genre: "Fantasy",
  },
  {
    id: 9,
    name: "Sophia Williams",
    slug: "sophia-williams",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Pulitzer Prize-winning journalist whose narrative non-fiction examines social justice issues with compassion and clarity. Her immersive reporting style brings untold stories to light.",
    booksCount: 4,
    genre: "Journalism",
  },
  {
    id: 10,
    name: "Thomas Wright",
    slug: "thomas-wright",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Veteran biographer whose meticulously researched portraits of historical figures reveal the complex humanity behind iconic names. His work combines scholarly rigor with narrative flair.",
    booksCount: 7,
    genre: "Biography",
  },
  {
    id: 11,
    name: "Olivia Johnson",
    slug: "olivia-johnson",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Acclaimed children's author whose whimsical illustrations and gentle storytelling have made her books bedtime favorites for a generation of young readers.",
    booksCount: 18,
    genre: "Children's",
  },
  {
    id: 12,
    name: "Steven Pressfield",
    slug: "steven-pressfield",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Versatile author known for historical fiction and practical guides on creativity. His work on overcoming creative resistance has inspired artists and entrepreneurs worldwide.",
    booksCount: 10,
    genre: "Mixed",
  },
  {
    id: 13,
    name: "Naomi Chen",
    slug: "naomi-chen",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Climate scientist and nature writer whose lyrical explorations of ecosystems combine scientific precision with poetic sensibility. Her work fosters deeper connection with the natural world.",
    booksCount: 5,
    genre: "Nature & Environment",
  },
  {
    id: 14,
    name: "Michael Okafor",
    slug: "michael-okafor",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Visionary science fiction author whose near-future speculations on technology and society have proven remarkably prescient. His work explores the ethical dimensions of innovation.",
    booksCount: 8,
    genre: "Science Fiction",
  },
  {
    id: 15,
    name: "Emma Richards",
    slug: "emma-richards",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Bestselling cookbook author and culinary historian who documents traditional recipes and food cultures from around the world. Her work preserves culinary heritage for future generations.",
    booksCount: 9,
    genre: "Cooking",
  },
]

export default function AuthorsPage() {
  // Schema.org structured data for authors collection
  const authorsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "All Authors",
    description: "A comprehensive collection of authors featured on BookDiscover.",
    url: "https://bookdiscover.com/authors",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: authors.map((author, index) => ({
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
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorsSchema) }} />

      <main className="min-h-screen bg-white">
        {/* Header Section */}
        <header className="bg-gradient-to-br from-slate-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">All Authors</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover the brilliant minds behind your favorite books. Explore our collection of authors across all
                genres, from bestselling veterans to emerging literary voices.
              </p>
            </div>
          </div>
        </header>

        {/* Authors Grid Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Filter/Sort Controls - Could be added in future */}
            <div className="mb-8 flex justify-between items-center">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{authors.length}</span> authors
              </p>
              {/* Placeholder for future filter/sort controls */}
              <div className="text-sm text-gray-500">Sorted by popularity</div>
            </div>

            {/* Authors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {authors.map((author) => (
                <article key={author.id} className="h-full">
                  <Link
                    href={`/author/${author.slug}`}
                    className="block h-full bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    <div className="p-6 flex flex-col h-full">
                      {/* Author Image */}
                      <div className="flex justify-center mb-6">
                        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 ring-4 ring-gray-50">
                          <img
                            src={author.image || "/placeholder.svg"}
                            alt={`${author.name} profile picture`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* Author Info */}
                      <div className="text-center flex-1 flex flex-col">
                        <h2 className="text-xl font-bold text-gray-900 mb-1">{author.name}</h2>
                        <p className="text-emerald-600 font-medium text-sm mb-3">{author.genre}</p>

                        <div className="flex items-center justify-center mb-4">
                          <BookOpen className="h-4 w-4 text-gray-500 mr-1" />
                          <span className="text-sm text-gray-600">
                            {author.booksCount} {author.booksCount === 1 ? "book" : "books"}
                          </span>
                        </div>

                        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{author.bio}</p>

                        <span className="mt-auto text-emerald-600 font-medium text-sm flex items-center justify-center">
                          View Profile
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Pagination - Could be added in future */}
            <div className="mt-12 flex justify-center">
              <nav className="inline-flex rounded-md shadow-sm" aria-label="Pagination">
                <span className="px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500">
                  Previous
                </span>
                <span className="px-4 py-2 border-t border-b border-gray-300 bg-emerald-50 text-sm font-medium text-emerald-600">
                  1
                </span>
                <span className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500">2</span>
                <span className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500">3</span>
                <span className="px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500">
                  Next
                </span>
              </nav>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with New Authors</h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
              Be the first to know when we add new authors and book recommendations to our collection. Join our
              newsletter for weekly updates.
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
