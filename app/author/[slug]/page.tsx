import type { Metadata } from "next"
import { Star, BookOpen, Calendar, Users, ExternalLink } from "lucide-react"
import { notFound } from "next/navigation"

// Mock data - in a real app, this would come from a database
const authorsData = {
  "sarah-chen": {
    id: 1,
    name: "Sarah Chen",
    slug: "sarah-chen",
    image: "/placeholder.svg?height=200&width=200",
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
        cover: "/placeholder.svg?height=300&width=200",
        summary:
          "A masterpiece of science fiction that explores politics, religion, and ecology on the desert planet Arrakis. Herbert's world-building is unparalleled.",
        rating: 4.9,
        publishedYear: 1965,
        genre: "Science Fiction",
      },
      {
        id: 2,
        title: "The Left Hand of Darkness",
        author: "Ursula K. Le Guin",
        cover: "/placeholder.svg?height=300&width=200",
        summary:
          "A groundbreaking exploration of gender and society through the lens of an alien world. Le Guin's prose is both beautiful and thought-provoking.",
        rating: 4.7,
        publishedYear: 1969,
        genre: "Science Fiction",
      },
      {
        id: 3,
        title: "Neuromancer",
        author: "William Gibson",
        cover: "/placeholder.svg?height=300&width=200",
        summary:
          "The cyberpunk classic that defined a genre. Gibson's vision of cyberspace and artificial intelligence remains influential decades later.",
        rating: 4.6,
        publishedYear: 1984,
        genre: "Cyberpunk",
      },
      {
        id: 4,
        title: "The Fifth Season",
        author: "N.K. Jemisin",
        cover: "/placeholder.svg?height=300&width=200",
        summary:
          "A powerful fantasy that tackles themes of oppression and survival in a world plagued by seismic catastrophes. Jemisin's storytelling is exceptional.",
        rating: 4.8,
        publishedYear: 2015,
        genre: "Fantasy",
      },
      {
        id: 5,
        title: "Station Eleven",
        author: "Emily St. John Mandel",
        cover: "/placeholder.svg?height=300&width=200",
        summary:
          "A post-apocalyptic novel that focuses on art, memory, and human connection. Mandel weaves multiple timelines into a beautiful narrative.",
        rating: 4.5,
        publishedYear: 2014,
        genre: "Literary Fiction",
      },
      {
        id: 6,
        title: "The Martian",
        author: "Andy Weir",
        cover: "/placeholder.svg?height=300&width=200",
        summary:
          "A thrilling survival story that combines hard science with humor. Weir's attention to scientific detail makes this an engaging read.",
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
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(booksSchema) }} />

      <main className="min-h-screen bg-white">
        {/* Author Header Section */}
        <header className="bg-gradient-to-br from-slate-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Author Image */}
              <div className="flex-shrink-0">
                <img
                  src={author.image || "/placeholder.svg"}
                  alt={`${author.name} profile picture`}
                  className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white"
                />
              </div>

              {/* Author Info */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{author.name}</h1>

                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mb-6 text-gray-600">
                  <span className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-emerald-600" />
                    {author.booksPublished} books published
                  </span>
                  <span className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-emerald-600" />
                    {author.followers} followers
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-emerald-600" />
                    Writing since {author.joinedYear}
                  </span>
                </div>

                <div className="mb-6">
                  <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
                    {author.genre}
                  </span>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl">{author.bio}</p>

                {/* Social Links */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <a
                    href={author.website}
                    className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Website
                  </a>
                  <span className="text-gray-500">
                    {author.socialMedia.twitter} • {author.socialMedia.instagram}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Recommended Books Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Books Recommended by {author.name}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover the books that have inspired and influenced {author.name}'s writing journey. Each
                recommendation comes with personal insights and reasons why these works stand out.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {author.recommendedBooks.map((book) => (
                <article
                  key={book.id}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  {/* Book Cover */}
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={book.cover || "/placeholder.svg"}
                      alt={`${book.title} book cover`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Book Info */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {book.genre}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {book.title}
                    </h3>

                    <p className="text-gray-600 font-medium mb-3">by {book.author}</p>

                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-medium text-gray-900">{book.rating}</span>
                      </div>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm text-gray-500">Published {book.publishedYear}</span>
                    </div>

                    <p className="text-gray-700 leading-relaxed">{book.summary}</p>
                    <a
                      href="https://amazon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full mt-4 px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors font-medium text-sm"
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

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover More Great Authors</h2>
            <p className="text-gray-600 text-lg mb-8">
              Explore our community of talented authors and their curated book recommendations.
            </p>
            <a
              href="/authors"
              className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
            >
              Browse All Authors
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
