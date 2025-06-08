import type { Metadata } from "next"
import { Star, Calendar, ExternalLink, BookOpen, Users } from "lucide-react"
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
        cover: "/placeholder.svg?height=300&width=200",
        summary:
          "A science fiction masterpiece that explores the fall and rise of galactic civilizations. Asimov's vision of psychohistory and the future of humanity has deeply influenced Musk's thinking about long-term planning and space colonization.",
        rating: 4.8,
        publishedYear: 1951,
        genre: "Science Fiction",
      },
      {
        id: 2,
        title: "Structures: Or Why Things Don't Fall Down",
        author: "J.E. Gordon",
        cover: "/placeholder.svg?height=300&width=200",
        summary:
          "An accessible introduction to structural engineering that explains how buildings, bridges, and other structures work. This book provides fundamental insights into engineering principles that apply to rocket design and construction.",
        rating: 4.6,
        publishedYear: 1978,
        genre: "Engineering",
      },
      {
        id: 3,
        title: "Benjamin Franklin: An American Life",
        author: "Walter Isaacson",
        cover: "/placeholder.svg?height=300&width=200",
        summary:
          "A comprehensive biography of one of America's most fascinating founding fathers. Franklin's entrepreneurial spirit, scientific curiosity, and innovative thinking serve as inspiration for modern-day innovators and entrepreneurs.",
        rating: 4.7,
        publishedYear: 2003,
        genre: "Biography",
      },
      {
        id: 4,
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        cover: "/placeholder.svg?height=300&width=200",
        summary:
          "A humorous science fiction series that combines wit with profound questions about life, the universe, and everything. Adams' irreverent take on space travel and technology offers both entertainment and philosophical insights.",
        rating: 4.5,
        publishedYear: 1979,
        genre: "Science Fiction",
      },
      {
        id: 5,
        title: "Ignition!",
        author: "John D. Clark",
        cover: "/placeholder.svg?height=300&width=200",
        summary:
          "An informal history of liquid rocket propellants that combines technical knowledge with entertaining anecdotes. Essential reading for anyone interested in the practical challenges of rocket engineering and space exploration.",
        rating: 4.9,
        publishedYear: 1972,
        genre: "Science",
      },
      {
        id: 6,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        cover: "/placeholder.svg?height=300&width=200",
        summary:
          "The epic fantasy trilogy that has captivated readers for generations. Tolkien's detailed world-building and themes of perseverance against overwhelming odds resonate with anyone pursuing ambitious, seemingly impossible goals.",
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
        cover: "/placeholder.svg?height=300&width=200",
        summary:
          "The former First Lady's memoir chronicles her journey from the South Side of Chicago to the White House. A powerful story of resilience, family, and finding your voice in a world that often tries to silence it.",
        rating: 4.9,
        publishedYear: 2018,
        genre: "Memoir",
      },
      {
        id: 8,
        title: "The Water Dancer",
        author: "Ta-Nehisi Coates",
        cover: "/placeholder.svg?height=300&width=200",
        summary:
          "A powerful novel that blends history with magical realism, telling the story of a young man born into slavery who discovers a mysterious power. Coates weaves together themes of memory, family, and the enduring impact of slavery.",
        rating: 4.4,
        publishedYear: 2019,
        genre: "Historical Fiction",
      },
      {
        id: 9,
        title: "The Sun Does Shine",
        author: "Anthony Ray Hinton",
        cover: "/placeholder.svg?height=300&width=200",
        summary:
          "A memoir of hope and resilience from a man who spent 30 years on death row for crimes he didn't commit. Hinton's story demonstrates the power of forgiveness, friendship, and maintaining hope in the darkest circumstances.",
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
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(booksSchema) }} />

      <main className="min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <nav className="bg-gray-50 py-4 px-4 sm:px-6 lg:px-8" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/people" className="text-gray-500 hover:text-gray-700 transition-colors">
                  People
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">{person.name}</li>
            </ol>
          </div>
        </nav>

        {/* Person Header Section */}
        <header className="bg-gradient-to-br from-slate-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img
                  src={person.image || "/placeholder.svg"}
                  alt={`${person.name} profile picture`}
                  className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-white"
                />
              </div>

              {/* Person Info */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{person.name}</h1>

                <h2 className="text-2xl text-emerald-600 font-semibold mb-6">{person.profession}</h2>

                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mb-6 text-gray-600">
                  <span className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-emerald-600" />
                    {person.totalRecommendations} books recommended
                  </span>
                  <span className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-emerald-600" />
                    {person.followers} followers
                  </span>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl">{person.bio}</p>

                {/* External Link */}
                <a
                  href={person.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Books Recommended Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Books Recommended by {person.name}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover the books that have shaped {person.name}'s thinking and influenced their remarkable journey.
                Each recommendation comes with personal insights into why these works are meaningful.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {person.recommendedBooks.map((book) => (
                <article
                  key={book.id}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  {/* Book Cover */}
                  <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
                    <img
                      src={book.cover || "/placeholder.svg"}
                      alt={`${book.title} book cover`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Book Information */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                        {book.genre}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors leading-tight">
                      {book.title}
                    </h3>

                    <p className="text-gray-600 font-medium mb-3">by {book.author}</p>

                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-medium text-gray-900">{book.rating}</span>
                      </div>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {book.publishedYear}
                      </span>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6 text-sm">{book.summary}</p>

                    <a
                      href="https://amazon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors font-medium text-sm"
                      aria-label={`Buy ${book.title} from Amazon`}
                    >
                      Buy from Amazon
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Related People Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover More Influential People</h2>
            <p className="text-gray-600 text-lg mb-8">
              Explore book recommendations from other thought leaders and influential figures across various industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/people"
                className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
              >
                Browse All People
              </Link>
              <Link
                href="/categories"
                className="inline-flex items-center px-8 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors font-semibold"
              >
                Explore Categories
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
