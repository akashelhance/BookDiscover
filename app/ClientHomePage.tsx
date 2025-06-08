"use client"

import Link from "next/link"
import { Search, Star, TrendingUp, BookOpen, Users, Award } from "lucide-react"

// Mock data for demonstration
const trendingAuthors = [
  {
    id: 1,
    name: "Sarah Chen",
    slug: "sarah-chen",
    genre: "Science Fiction",
    books: 12,
    followers: "2.3M",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    slug: "marcus-rodriguez",
    genre: "Mystery & Thriller",
    books: 8,
    followers: "1.8M",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Elena Volkov",
    slug: "elena-volkov",
    genre: "Historical Fiction",
    books: 15,
    followers: "3.1M",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "James Thompson",
    slug: "james-thompson",
    genre: "Non-Fiction",
    books: 6,
    followers: "1.2M",
    image: "/placeholder.svg?height=80&width=80",
  },
]

const topBooks = [
  {
    id: 1,
    title: "The Quantum Garden",
    slug: "the-quantum-garden",
    author: "Sarah Chen",
    rating: 4.8,
    reviews: 1247,
    cover: "/placeholder.svg?height=200&width=140",
  },
  {
    id: 2,
    title: "Midnight in Prague",
    slug: "midnight-in-prague",
    author: "Marcus Rodriguez",
    rating: 4.6,
    reviews: 892,
    cover: "/placeholder.svg?height=200&width=140",
  },
  {
    id: 3,
    title: "The Last Empress",
    slug: "the-last-empress",
    author: "Elena Volkov",
    rating: 4.9,
    reviews: 2156,
    cover: "/placeholder.svg?height=200&width=140",
  },
  {
    id: 4,
    title: "Digital Minimalism",
    slug: "digital-minimalism",
    author: "James Thompson",
    rating: 4.7,
    reviews: 1834,
    cover: "/placeholder.svg?height=200&width=140",
  },
  {
    id: 5,
    title: "Ocean of Secrets",
    slug: "ocean-of-secrets",
    author: "Maria Santos",
    rating: 4.5,
    reviews: 967,
    cover: "/placeholder.svg?height=200&width=140",
  },
  {
    id: 6,
    title: "The Innovation Code",
    slug: "the-innovation-code",
    author: "David Kim",
    rating: 4.4,
    reviews: 743,
    cover: "/placeholder.svg?height=200&width=140",
  },
]

const categories = [
  {
    id: 1,
    name: "Science Fiction",
    slug: "science-fiction",
    count: 2847,
    icon: "🚀",
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: 2,
    name: "Mystery & Thriller",
    slug: "mystery-thriller",
    count: 1923,
    icon: "🔍",
    color: "bg-red-100 text-red-800",
  },
  {
    id: 3,
    name: "Romance",
    slug: "romance",
    count: 3156,
    icon: "💕",
    color: "bg-pink-100 text-pink-800",
  },
  {
    id: 4,
    name: "Historical Fiction",
    slug: "historical-fiction",
    count: 1567,
    icon: "🏛️",
    color: "bg-amber-100 text-amber-800",
  },
  {
    id: 5,
    name: "Non-Fiction",
    slug: "non-fiction",
    count: 2234,
    icon: "📚",
    color: "bg-green-100 text-green-800",
  },
  {
    id: 6,
    name: "Fantasy",
    slug: "fantasy",
    count: 2891,
    icon: "🐉",
    color: "bg-violet-100 text-violet-800",
  },
]

export default function ClientHomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Discover Your Next
              <span className="block text-emerald-600">Great Read</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore millions of books, connect with fellow readers, and get personalized recommendations tailored to
              your unique taste. Your literary journey starts here.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <form className="relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="search"
                    placeholder="Search for books, authors, or genres..."
                    className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-lg"
                    aria-label="Search for books, authors, or genres"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Authors Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <Link
                href="/authors"
                className="group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  Trending Authors
                </h2>
              </Link>
              <p className="text-gray-600">Discover the most popular authors this month</p>
            </div>
            <TrendingUp className="h-8 w-8 text-emerald-600" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingAuthors.map((author) => (
              <Link
                key={author.id}
                href={`/author/${author.slug}`}
                className="block group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-xl"
              >
                <article className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={author.image || "/placeholder.svg"}
                      alt={`${author.name} profile picture`}
                      className="w-20 h-20 rounded-full mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                      {author.name}
                    </h3>
                    <p className="text-emerald-600 font-medium mb-3">{author.genre}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        {author.books} books
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {author.followers}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Books Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <Link
                href="/books"
                className="group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  Top Books This Week
                </h2>
              </Link>
              <p className="text-gray-600">The most loved books by our community</p>
            </div>
            <Award className="h-8 w-8 text-emerald-600" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {topBooks.map((book) => (
              <Link
                key={book.id}
                href={`/book/${book.slug}`}
                className="block group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg"
              >
                <article className="group cursor-pointer">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-1">
                    <div className="aspect-[7/10] relative">
                      <img
                        src={book.cover || "/placeholder.svg"}
                        alt={`${book.title} book cover`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 text-sm group-hover:text-emerald-600 transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-900">{book.rating}</span>
                        <span className="text-sm text-gray-500">({book.reviews})</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          window.open("https://amazon.com", "_blank", "noopener,noreferrer")
                        }}
                        className="inline-flex items-center justify-center w-full mt-3 px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors font-medium text-sm"
                        aria-label={`Buy ${book.title} from Amazon`}
                      >
                        Buy from Amazon
                      </button>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Link
              href="/categories"
              className="group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg inline-block"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                Explore by Category
              </h2>
            </Link>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our carefully curated categories to find exactly what you're looking for
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="block group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-xl"
              >
                <article className="group cursor-pointer">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-emerald-200 group-hover:scale-[1.02] group-hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{category.icon}</div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                        {category.count.toLocaleString()} books
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Reading Journey?</h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of book lovers who have already discovered their next favorite read through our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Get Started Free
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
