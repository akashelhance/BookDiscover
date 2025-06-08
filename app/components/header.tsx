import Link from "next/link"
import { Search, BookOpen } from "lucide-react"
import ActiveLink from "./active-link"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="flex items-center justify-center w-8 h-8 bg-emerald-600 rounded-lg group-hover:bg-emerald-700 transition-colors">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                BookDiscover
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            <ActiveLink href="/" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Home
            </ActiveLink>
            <ActiveLink href="/books" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Books
            </ActiveLink>
            <ActiveLink
              href="/categories"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Categories
            </ActiveLink>
            <ActiveLink href="/authors" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Authors
            </ActiveLink>
            <ActiveLink href="/people" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              People
            </ActiveLink>
            <ActiveLink href="/about" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              About
            </ActiveLink>
          </nav>

          {/* Search Bar */}
          <div className="flex items-center">
            <form className="relative hidden sm:block" role="search">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="search"
                  placeholder="Search books, authors..."
                  className="w-64 pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
                  aria-label="Search books and authors"
                />
              </div>
            </form>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden ml-4 p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Open mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-gray-200 py-4">
          <nav className="flex flex-col space-y-2" aria-label="Mobile navigation">
            <ActiveLink
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              Home
            </ActiveLink>
            <ActiveLink
              href="/books"
              className="block px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              Books
            </ActiveLink>
            <ActiveLink
              href="/categories"
              className="block px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              Categories
            </ActiveLink>
            <ActiveLink
              href="/authors"
              className="block px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              Authors
            </ActiveLink>
            <ActiveLink
              href="/people"
              className="block px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              People
            </ActiveLink>
            <ActiveLink
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              About
            </ActiveLink>
          </nav>

          {/* Mobile Search */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <form role="search">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="search"
                  placeholder="Search books, authors..."
                  className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
                  aria-label="Search books and authors"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  )
}
