import Link from "next/link"
import { Search, BookOpen, Menu, X } from "lucide-react"
import ActiveLink from "./active-link"
import { siteConfig } from "../../config/site"

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="flex items-center justify-center w-8 h-8 bg-emerald-600 rounded-lg group-hover:bg-emerald-700 transition-colors">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                {siteConfig.name}
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

          {/* Search Bar and Mobile Menu */}
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

            {/* Mobile Menu Toggle */}
            <div className="md:hidden ml-4 relative group">
              <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />
              <label
                htmlFor="mobile-menu-toggle"
                className="cursor-pointer p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 block"
                aria-label="Toggle mobile menu"
              >
                <Menu className="h-6 w-6 peer-checked:hidden" />
                <X className="h-6 w-6 hidden peer-checked:block" />
              </label>

              {/* Mobile Dropdown Menu */}
              <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible peer-checked:opacity-100 peer-checked:visible transition-all duration-200 z-50">
                <nav className="p-4" aria-label="Mobile navigation">
                  <div className="flex flex-col space-y-2">
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
                  </div>

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
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
