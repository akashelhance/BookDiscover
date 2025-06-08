import type { Metadata } from "next"
import { Star, BookOpen, Calendar } from "lucide-react"
import { notFound } from "next/navigation"

// Mock data - in a real app, this would come from a database
const categoriesData = {
  psychology: {
    id: 1,
    name: "Psychology",
    slug: "psychology",
    description:
      "Explore the fascinating world of human behavior, mental processes, and psychological insights. From cognitive science to behavioral psychology, discover books that illuminate how the mind works and help you understand yourself and others better.",
    bookCount: 1247,
    books: [
      {
        id: 1,
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "A groundbreaking exploration of the two systems that drive the way we think. Kahneman reveals when we can trust our intuitions and when we cannot.",
        rating: 4.7,
        publishedYear: 2011,
        isbn: "978-0374533557",
      },
      {
        id: 2,
        title: "The Power of Habit",
        author: "Charles Duhigg",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "Discover the science behind habit formation and learn how to transform your life by changing your habits. A practical guide to personal and organizational change.",
        rating: 4.5,
        publishedYear: 2012,
        isbn: "978-1400069286",
      },
      {
        id: 3,
        title: "Mindset: The New Psychology of Success",
        author: "Carol S. Dweck",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "Explores the power of mindset in achieving success. Dweck shows how a simple idea about the brain can create a love of learning and resilience.",
        rating: 4.6,
        publishedYear: 2006,
        isbn: "978-0345472328",
      },
      {
        id: 4,
        title: "The Happiness Hypothesis",
        author: "Jonathan Haidt",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "Combines ancient wisdom with modern psychology to explore what really makes us happy. A thoughtful examination of human nature and well-being.",
        rating: 4.4,
        publishedYear: 2006,
        isbn: "978-0465028023",
      },
      {
        id: 5,
        title: "Flow: The Psychology of Optimal Experience",
        author: "Mihaly Csikszentmihalyi",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "Reveals the secrets of happiness through the concept of 'flow' - the state of complete immersion in activity that leads to optimal experience.",
        rating: 4.3,
        publishedYear: 1990,
        isbn: "978-0061339202",
      },
      {
        id: 6,
        title: "The Social Animal",
        author: "David Brooks",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "A journey into the unconscious mind that shapes our lives. Brooks explores how emotions, intuitions, and social connections drive human behavior.",
        rating: 4.2,
        publishedYear: 2011,
        isbn: "978-0812979374",
      },
      {
        id: 7,
        title: "Predictably Irrational",
        author: "Dan Ariely",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "Challenges our assumptions about making decisions and reveals the hidden forces that shape our choices in surprising and often irrational ways.",
        rating: 4.5,
        publishedYear: 2008,
        isbn: "978-0061353246",
      },
      {
        id: 8,
        title: "The Paradox of Choice",
        author: "Barry Schwartz",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "Examines how the abundance of choice in modern life can lead to anxiety and depression. Offers practical advice for making better decisions.",
        rating: 4.1,
        publishedYear: 2004,
        isbn: "978-0060005696",
      },
      {
        id: 9,
        title: "Influence: The Psychology of Persuasion",
        author: "Robert B. Cialdini",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "Reveals the psychology behind why people say 'yes' and how to apply these insights ethically in business and everyday situations.",
        rating: 4.8,
        publishedYear: 1984,
        isbn: "978-0061241895",
      },
    ],
  },
  "science-fiction": {
    id: 2,
    name: "Science Fiction",
    slug: "science-fiction",
    description:
      "Journey into the future and explore infinite possibilities through imaginative storytelling. From space exploration to artificial intelligence, discover books that push the boundaries of human imagination and scientific possibility.",
    bookCount: 2847,
    books: [
      {
        id: 10,
        title: "Dune",
        author: "Frank Herbert",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "A masterpiece of science fiction set on the desert planet Arrakis. Herbert creates an intricate universe of politics, religion, and ecology.",
        rating: 4.9,
        publishedYear: 1965,
        isbn: "978-0441172719",
      },
      {
        id: 11,
        title: "The Left Hand of Darkness",
        author: "Ursula K. Le Guin",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "A groundbreaking exploration of gender and society through the lens of an alien world. Le Guin's prose is both beautiful and thought-provoking.",
        rating: 4.7,
        publishedYear: 1969,
        isbn: "978-0441478125",
      },
      {
        id: 12,
        title: "Neuromancer",
        author: "William Gibson",
        cover: "/placeholder.svg?height=300&width=200",
        description:
          "The cyberpunk classic that defined a genre. Gibson's vision of cyberspace and artificial intelligence remains influential decades later.",
        rating: 4.6,
        publishedYear: 1984,
        isbn: "978-0441569595",
      },
    ],
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const category = categoriesData[slug as keyof typeof categoriesData]

  if (!category) {
    return {
      title: "Category Not Found",
      description: "The requested book category could not be found.",
    }
  }

  return {
    title: `${category.name} Books - Recommendations & Reviews | BookDiscover`,
    description: `${category.description} Browse ${category.bookCount} carefully curated ${category.name.toLowerCase()} books with reviews and recommendations.`,
    keywords: `${category.name.toLowerCase()}, books, reading, recommendations, reviews, ${category.name.toLowerCase()} books`,
    openGraph: {
      title: `${category.name} Books - BookDiscover`,
      description: category.description,
      type: "website",
      images: [
        {
          url: "/placeholder.svg?height=630&width=1200",
          width: 1200,
          height: 630,
          alt: `${category.name} books collection`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} Books - BookDiscover`,
      description: category.description,
      images: ["/placeholder.svg?height=630&width=1200"],
    },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const category = categoriesData[slug as keyof typeof categoriesData]

  if (!category) {
    notFound()
  }

  // Schema.org structured data
  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} Books`,
    description: category.description,
    url: `/category/${category.slug}`,
    mainEntity: {
      "@type": "ItemList",
      name: `${category.name} Books Collection`,
      numberOfItems: category.books.length,
      itemListElement: category.books.map((book, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Book",
          name: book.title,
          author: {
            "@type": "Person",
            name: book.author,
          },
          isbn: book.isbn,
          datePublished: book.publishedYear.toString(),
          image: book.cover,
          description: book.description,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: book.rating,
            bestRating: 5,
          },
        },
      })),
    },
  }

  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }} />

      <main className="min-h-screen bg-white">
        {/* Category Header */}
        <header className="bg-gradient-to-br from-slate-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">{category.name}</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">{category.description}</p>
            <div className="flex items-center justify-center space-x-2 text-gray-500">
              <BookOpen className="h-5 w-5" />
              <span className="font-medium">{category.bookCount.toLocaleString()} books in this category</span>
            </div>
          </div>
        </header>

        {/* Books Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {category.books.map((book) => (
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

                    <p className="text-gray-700 leading-relaxed mb-6 text-sm">{book.description}</p>

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

        {/* Related Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More Categories</h2>
            <p className="text-gray-600 text-lg mb-8">
              Discover books across different genres and topics that might interest you
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/category/science-fiction"
                className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors font-medium"
              >
                Science Fiction
              </a>
              <a
                href="/category/mystery"
                className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors font-medium"
              >
                Mystery & Thriller
              </a>
              <a
                href="/category/romance"
                className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors font-medium"
              >
                Romance
              </a>
              <a
                href="/category/non-fiction"
                className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors font-medium"
              >
                Non-Fiction
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with New {category.name} Books</h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
              Get notified when we add new {category.name.toLowerCase()} books to our collection and receive
              personalized recommendations.
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
