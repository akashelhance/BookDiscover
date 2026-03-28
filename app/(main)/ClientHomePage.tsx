"use client"

import Link from "next/link"
import { Search, Star, TrendingUp, BookOpen, Users, Award, ArrowRight, Compass } from "lucide-react"
import { siteConfig } from "../../config/site"
import Image from "next/image"

// Mock data (Retained for visual layout structure)
const trendingAuthors = [
  { id: 1, name: "Sarah Chen", slug: "sarah-chen", genre: "Science Fiction", books: 12, followers: "2.3M", image: "/placeholder.svg?height=80&width=80" },
  { id: 2, name: "Marcus Rodriguez", slug: "marcus-rodriguez", genre: "Mystery & Thriller", books: 8, followers: "1.8M", image: "/placeholder.svg?height=80&width=80" },
  { id: 3, name: "Elena Volkov", slug: "elena-volkov", genre: "Historical", books: 15, followers: "3.1M", image: "/placeholder.svg?height=80&width=80" },
  { id: 4, name: "James Thompson", slug: "james-thompson", genre: "Non-Fiction", books: 6, followers: "1.2M", image: "/placeholder.svg?height=80&width=80" },
]

const topBooks = [
  { id: 1, title: "The Quantum Garden", slug: "the-quantum-garden", author: "Sarah Chen", rating: 4.8, reviews: 1247, cover: "/placeholder.svg?height=300&width=200" },
  { id: 2, title: "Midnight in Prague", slug: "midnight-in-prague", author: "Marcus Rodriguez", rating: 4.6, reviews: 892, cover: "/placeholder.svg?height=300&width=200" },
  { id: 3, title: "The Last Empress", slug: "the-last-empress", author: "Elena Volkov", rating: 4.9, reviews: 2156, cover: "/placeholder.svg?height=300&width=200" },
  { id: 4, title: "Digital Minimalism", slug: "digital-minimalism", author: "James Thompson", rating: 4.7, reviews: 1834, cover: "/placeholder.svg?height=300&width=200" },
  { id: 5, title: "Ocean of Secrets", slug: "ocean-of-secrets", author: "Maria Santos", rating: 4.5, reviews: 967, cover: "/placeholder.svg?height=300&width=200" },
  { id: 6, title: "The Innovation Code", slug: "the-innovation-code", author: "David Kim", rating: 4.4, reviews: 743, cover: "/placeholder.svg?height=300&width=200" },
]

const categories = [
  { id: 1, name: "Science Fiction", slug: "science-fiction", count: 2847, icon: "🚀", color: "bg-purple-50 text-purple-700 hover:border-purple-200" },
  { id: 2, name: "Mystery & Thriller", slug: "mystery-thriller", count: 1923, icon: "🔍", color: "bg-rose-50 text-rose-700 hover:border-rose-200" },
  { id: 3, name: "Romance", slug: "romance", count: 3156, icon: "💕", color: "bg-pink-50 text-pink-700 hover:border-pink-200" },
  { id: 4, name: "Historical Fiction", slug: "historical-fiction", count: 1567, icon: "🏛️", color: "bg-amber-50 text-amber-700 hover:border-amber-200" },
  { id: 5, name: "Non-Fiction", slug: "non-fiction", count: 2234, icon: "💡", color: "bg-emerald-50 text-emerald-700 hover:border-emerald-200" },
  { id: 6, name: "Fantasy", slug: "fantasy", count: 2891, icon: "🐉", color: "bg-indigo-50 text-indigo-700 hover:border-indigo-200" },
]

export default function ClientHomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/80 to-white pt-20 pb-16 lg:pt-32 lg:pb-28 px-4 sm:px-6 lg:px-8">
        {/* Soft background glow elements */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 z-0 pointer-events-none">
          <div className="w-[600px] h-[600px] bg-emerald-200/30 rounded-full blur-[80px]" />
        </div>
        <div className="absolute top-40 left-0 -translate-x-1/2 z-0 pointer-events-none">
          <div className="w-[400px] h-[400px] bg-sky-100/40 rounded-full blur-[60px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-emerald-100 px-4 py-1.5 rounded-full text-sm font-medium text-emerald-800 mb-8 tracking-wide shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{siteConfig.tagline}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight text-balance">
            Discover Your Next <br className="hidden sm:block" />
            <span className="text-emerald-600">Great Read</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed text-balance">
            {siteConfig.description}
          </p>

          {/* Floating Search Bar */}
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <form className="relative bg-white/90 backdrop-blur-md rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center p-2">
              <Search className="text-gray-400 h-6 w-6 ml-4" />
              <input
                type="search"
                placeholder="Search for books, authors, or genres..."
                className="w-full pl-4 pr-4 py-3 bg-transparent text-lg text-gray-900 placeholder-gray-400 focus:outline-none"
                aria-label="Search for books, authors, or genres"
              />
              <button
                type="submit"
                className="flex-shrink-0 bg-emerald-600 text-white px-8 py-3 rounded-xl hover:bg-emerald-700 transition-colors font-medium text-lg shadow-sm"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Trending Authors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-12">
            <div>
              <Link href="/authors" className="group inline-flex items-center gap-3 focus:outline-none">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight group-hover:text-emerald-600 transition-colors">
                  Trending Authors
                </h2>
                <TrendingUp className="h-6 w-6 text-emerald-500" />
              </Link>
              <p className="text-gray-500 mt-2 text-lg">Discover the highest-rated curators this month</p>
            </div>
            <Link href="/authors" className="hidden sm:inline-flex items-center font-medium text-emerald-600 hover:text-emerald-700 transition-colors group">
              View all authors <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingAuthors.map((author) => (
              <Link
                key={author.id}
                href={`/author/${author.slug}`}
                className="block group"
              >
                <article className="bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-3xl p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-emerald-100 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-5 ring-4 ring-emerald-50/50 group-hover:ring-emerald-100 transition-all duration-300 relative">
                    <img
                      src={author.image}
                      alt={author.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                    {author.name}
                  </h3>
                  <p className="text-emerald-600 font-medium text-sm mb-4 px-3 py-1 bg-emerald-50 rounded-full">{author.genre}</p>
                  
                  <div className="w-full h-px bg-gray-100 mb-4" />
                  
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 font-medium w-full">
                    <span className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1.5 text-gray-400" />
                      {author.books}
                    </span>
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1.5 text-gray-400" />
                      {author.followers}
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Books Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-12">
            <div>
              <Link href="/books" className="group inline-flex items-center gap-3 focus:outline-none">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight group-hover:text-emerald-600 transition-colors">
                  Highly Anticipated Reads
                </h2>
                <Award className="h-6 w-6 text-emerald-500" />
              </Link>
              <p className="text-gray-500 mt-2 text-lg">Books trending globally across our curated lists</p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-6 lg:gap-8">
            {topBooks.map((book) => (
              <Link
                key={book.id}
                href={`/book/${book.slug}`}
                className="block group"
              >
                <article className="flex flex-col h-full">
                  <div className="bg-gray-100 rounded-2xl shadow-sm overflow-hidden mb-4 relative aspect-[2/3] group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <h3 className="font-bold text-gray-900 mb-1 line-clamp-2 text-base group-hover:text-emerald-600 transition-colors leading-snug">
                      {book.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-2 font-medium">{book.author}</p>
                    <div className="flex items-center space-x-1.5 mt-auto">
                      <Star className="h-4 w-4 text-amber-400 fill-current" />
                      <span className="text-sm font-bold text-gray-900">{book.rating}</span>
                      <span className="text-xs text-gray-400 font-medium">({book.reviews})</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Bento Box Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Link href="/categories" className="group inline-flex items-center gap-3 focus:outline-none mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight group-hover:text-emerald-600 transition-colors">
                Explore by Category
              </h2>
              <Compass className="h-8 w-8 text-emerald-500" />
            </Link>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Dive deep into our beautifully organized collections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className={`block group relative overflow-hidden rounded-3xl p-8 border border-transparent transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${category.color}`}
              >
                <div className="relative z-10 flex flex-col h-full justify-between min-h-[140px]">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 tracking-tight">
                      {category.name}
                    </h3>
                    <p className="font-medium opacity-80">
                      {category.count.toLocaleString()} curations
                    </p>
                  </div>
                  <div className="flex justify-end mt-4">
                     <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/40 group-hover:bg-white/60 transition-colors backdrop-blur-sm">
                       <ArrowRight className="w-5 h-5" />
                     </span>
                  </div>
                </div>
                {/* Decorative large background icon */}
                <div className="absolute -bottom-4 -right-2 text-8xl opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 transform rotate-12 pointer-events-none">
                  {category.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[100px] opacity-20" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-teal-400 rounded-full blur-[100px] opacity-20" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight">{siteConfig.cta.title}</h2>
          <p className="text-emerald-100/90 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href={siteConfig.cta.buttonLink}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-emerald-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {siteConfig.cta.buttonText}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/about" 
              className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-emerald-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-800 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
