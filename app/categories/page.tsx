import type { Metadata } from "next"
import Link from "next/link"
import {
  BookOpen,
  Book,
  Brain,
  Rocket,
  Heart,
  History,
  Lightbulb,
  Microscope,
  Globe,
  Utensils,
  Palette,
  Music,
  Landmark,
  Briefcase,
  Leaf,
  Users,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Explore Book Categories | BookDiscover",
  description:
    "Browse our extensive collection of book categories. Find your next great read across fiction, non-fiction, science, history, and more.",
  keywords: "book categories, book genres, fiction, non-fiction, reading recommendations, book discovery",
  openGraph: {
    title: "Explore Book Categories | BookDiscover",
    description: "Browse our extensive collection of book categories and find your next great read.",
    type: "website",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "BookDiscover Categories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Book Categories | BookDiscover",
    description: "Browse our extensive collection of book categories and find your next great read.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

// Mock data for categories
const categories = [
  {
    id: 1,
    name: "Fiction",
    slug: "fiction",
    count: 3456,
    icon: () => <Book className="h-8 w-8" />,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    id: 2,
    name: "Psychology",
    slug: "psychology",
    count: 1247,
    icon: () => <Brain className="h-8 w-8" />,
    color: "bg-purple-50 text-purple-600",
  },
  {
    id: 3,
    name: "Science Fiction",
    slug: "science-fiction",
    count: 2847,
    icon: () => <Rocket className="h-8 w-8" />,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: 4,
    name: "Romance",
    slug: "romance",
    count: 3156,
    icon: () => <Heart className="h-8 w-8" />,
    color: "bg-pink-50 text-pink-600",
  },
  {
    id: 5,
    name: "History",
    slug: "history",
    count: 1892,
    icon: () => <History className="h-8 w-8" />,
    color: "bg-amber-50 text-amber-600",
  },
  {
    id: 6,
    name: "Self-Help",
    slug: "self-help",
    count: 1543,
    icon: () => <Lightbulb className="h-8 w-8" />,
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    id: 7,
    name: "Science",
    slug: "science",
    count: 2234,
    icon: () => <Microscope className="h-8 w-8" />,
    color: "bg-teal-50 text-teal-600",
  },
  {
    id: 8,
    name: "Travel",
    slug: "travel",
    count: 1123,
    icon: () => <Globe className="h-8 w-8" />,
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    id: 9,
    name: "Cooking",
    slug: "cooking",
    count: 987,
    icon: () => <Utensils className="h-8 w-8" />,
    color: "bg-red-50 text-red-600",
  },
  {
    id: 10,
    name: "Art & Design",
    slug: "art-design",
    count: 876,
    icon: () => <Palette className="h-8 w-8" />,
    color: "bg-violet-50 text-violet-600",
  },
  {
    id: 11,
    name: "Music",
    slug: "music",
    count: 654,
    icon: () => <Music className="h-8 w-8" />,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    id: 12,
    name: "Philosophy",
    slug: "philosophy",
    count: 543,
    icon: () => <Landmark className="h-8 w-8" />,
    color: "bg-gray-50 text-gray-600",
  },
  {
    id: 13,
    name: "Business",
    slug: "business",
    count: 1432,
    icon: () => <Briefcase className="h-8 w-8" />,
    color: "bg-orange-50 text-orange-600",
  },
  {
    id: 14,
    name: "Environment",
    slug: "environment",
    count: 432,
    icon: () => <Leaf className="h-8 w-8" />,
    color: "bg-green-50 text-green-600",
  },
  {
    id: 15,
    name: "Biography",
    slug: "biography",
    count: 876,
    icon: () => <Users className="h-8 w-8" />,
    color: "bg-rose-50 text-rose-600",
  },
  {
    id: 16,
    name: "Classics",
    slug: "classics",
    count: 1234,
    icon: () => <BookOpen className="h-8 w-8" />,
    color: "bg-stone-50 text-stone-600",
  },
]

export default function CategoriesPage() {
  // Schema.org structured data
  const categoriesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Book Categories",
    description: "Browse our extensive collection of book categories and find your next great read.",
    url: "/categories",
    mainEntity: {
      "@type": "ItemList",
      name: "Book Categories Collection",
      numberOfItems: categories.length,
      itemListElement: categories.map((category, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          name: category.name,
          url: `/category/${category.slug}`,
          description: `${category.count} books in the ${category.name} category`,
        },
      })),
    },
  }

  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categoriesSchema) }} />

      <main className="min-h-screen bg-white">
        {/* Header Section */}
        <header className="bg-gradient-to-br from-slate-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Explore Book Categories</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Discover your next great read by exploring our carefully curated book categories. From timeless classics
              to cutting-edge science fiction, we have something for every reader.
            </p>
          </div>
        </header>

        {/* Categories Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((category) => {
                return (
                  <Link
                    key={category.id}
                    href={`/category/${category.slug}`}
                    className="block group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-xl"
                  >
                    <article className="bg-white border border-gray-200 rounded-xl p-6 h-full transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.02] group-focus:shadow-lg group-focus:scale-[1.02] group-focus:border-emerald-200">
                      <div className="flex flex-col items-center text-center h-full">
                        <div
                          className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mb-6`}
                          aria-hidden="true"
                        >
                          <category.icon />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                          {category.name}
                        </h2>
                        <p className="text-gray-500 font-medium">
                          {category.count.toLocaleString()} {category.count === 1 ? "Book" : "Books"}
                        </p>
                      </div>
                    </article>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Popular Categories Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Categories This Month</h2>
            <p className="text-gray-600 mb-10">
              These categories are trending among our readers. Explore what others are enjoying right now.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories
                .slice(0, 5)
                .sort((a, b) => b.count - a.count)
                .map((category) => (
                  <Link
                    key={category.id}
                    href={`/category/${category.slug}`}
                    className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    {category.name}
                    <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      {category.count.toLocaleString()}
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with New Categories</h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
              Get notified when we add new categories and books to our collection. Receive personalized recommendations
              based on your reading preferences.
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
