import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "../../../config/site"
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
  ArrowRight
} from "lucide-react"

export const metadata: Metadata = {
  title: `Explore Book Categories | ${siteConfig.name}`,
  description: "Browse our extensive collection of book categories. Find your next great read across fiction, non-fiction, science, history, and more.",
  keywords: "book categories, book genres, fiction, non-fiction, reading recommendations, book discovery",
  openGraph: {
    title: `Explore Book Categories | ${siteConfig.name}`,
    description: "Browse our extensive collection of book categories and find your next great read.",
    type: "website",
    images: [{ url: "/placeholder.svg?height=630&width=1200" }],
  },
}

// Retaining all mock data functionality
const categories = [
  { id: 1, name: "Fiction", slug: "fiction", count: 3456, icon: Book, color: "bg-emerald-50 text-emerald-600 border-emerald-100/50" },
  { id: 2, name: "Psychology", slug: "psychology", count: 1247, icon: Brain, color: "bg-purple-50 text-purple-600 border-purple-100/50" },
  { id: 3, name: "Science Fiction", slug: "science-fiction", count: 2847, icon: Rocket, color: "bg-sky-50 text-sky-600 border-sky-100/50" },
  { id: 4, name: "Romance", slug: "romance", count: 3156, icon: Heart, color: "bg-pink-50 text-pink-600 border-pink-100/50" },
  { id: 5, name: "History", slug: "history", count: 1892, icon: History, color: "bg-amber-50 text-amber-600 border-amber-100/50" },
  { id: 6, name: "Self-Help", slug: "self-help", count: 1543, icon: Lightbulb, color: "bg-yellow-50 text-yellow-600 border-yellow-100/50" },
  { id: 7, name: "Science", slug: "science", count: 2234, icon: Microscope, color: "bg-teal-50 text-teal-600 border-teal-100/50" },
  { id: 8, name: "Travel", slug: "travel", count: 1123, icon: Globe, color: "bg-cyan-50 text-cyan-600 border-cyan-100/50" },
  { id: 9, name: "Cooking", slug: "cooking", count: 987, icon: Utensils, color: "bg-orange-50 text-orange-600 border-orange-100/50" },
  { id: 10, name: "Art & Design", slug: "art-design", count: 876, icon: Palette, color: "bg-violet-50 text-violet-600 border-violet-100/50" },
  { id: 11, name: "Music", slug: "music", count: 654, icon: Music, color: "bg-indigo-50 text-indigo-600 border-indigo-100/50" },
  { id: 12, name: "Philosophy", slug: "philosophy", count: 543, icon: Landmark, color: "bg-slate-50 text-slate-600 border-slate-200/50" },
  { id: 13, name: "Business", slug: "business", count: 1432, icon: Briefcase, color: "bg-blue-50 text-blue-600 border-blue-100/50" },
  { id: 14, name: "Environment", slug: "environment", count: 432, icon: Leaf, color: "bg-green-50 text-green-600 border-green-100/50" },
  { id: 15, name: "Biography", slug: "biography", count: 876, icon: Users, color: "bg-rose-50 text-rose-600 border-rose-100/50" },
  { id: 16, name: "Classics", slug: "classics", count: 1234, icon: BookOpen, color: "bg-stone-50 text-stone-600 border-stone-100/50" },
]

export default function CategoriesPage() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categoriesSchema) }} />

      <main className="min-h-screen bg-white">
        
        {/* Header Section (Immersive Glow) */}
        <header className="relative overflow-hidden bg-gradient-to-b from-emerald-50/80 to-white pt-20 pb-16 lg:pt-32 lg:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="absolute top-0 right-1/4 -translate-y-12 translate-x-1/2 z-0 pointer-events-none">
            <div className="w-[500px] h-[500px] bg-emerald-200/40 rounded-full blur-[80px]" />
          </div>
          <div className="absolute top-0 left-0 -translate-x-1/4 translate-y-1/4 z-0 pointer-events-none">
            <div className="w-[400px] h-[400px] bg-sky-100/40 rounded-full blur-[60px]" />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight text-balance">
              Explore The World <br className="hidden sm:block" />
              <span className="text-emerald-600">Through Books</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto text-balance">
              Discover your next great read by exploring our beautifully curated book categories. From timeless classics
              to cutting-edge science fiction, we have something to expand every mind.
            </p>
          </div>
        </header>

        {/* Categories Grid (Bento Box Cards) */}
        <section className="py-12 bg-white px-4 sm:px-6 lg:px-8 relative z-10 -mt-10 lg:-mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <Link
                    key={category.id}
                    href={`/category/${category.slug}`}
                    className="block group focus:outline-none"
                  >
                    <article className="relative bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-[2rem] p-8 h-full transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 overflow-hidden z-10 bg-gradient-to-br from-white to-gray-50/50">
                      
                      <div className="flex flex-col h-full relative z-20">
                        {/* Dynamic Soft Icon Wrap */}
                        <div
                          className={`w-14 h-14 rounded-2xl ${category.color} border flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 group-hover:scale-110`}
                          aria-hidden="true"
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors tracking-tight">
                          {category.name}
                        </h2>
                        
                        <div className="flex items-center justify-between mt-auto pt-4">
                          <p className="text-gray-500 font-medium bg-gray-100/80 px-3 py-1 rounded-full text-sm">
                            {category.count.toLocaleString()} books
                          </p>
                          <span className="w-8 h-8 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>

                      {/* Giant faded watermark icon */}
                      <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 z-0 text-slate-100 group-hover:text-emerald-50 group-hover:scale-125 transition-all duration-500 pointer-events-none">
                        <Icon className="w-64 h-64 opacity-50" strokeWidth={1} />
                      </div>
                    </article>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Popular Categories Section */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50/50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">Trending This Month</h2>
            <p className="text-lg text-gray-600 mb-10 text-balance max-w-2xl mx-auto">
              Dive into the categories sweeping the reading community. We update these trends weekly based on global reads.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories
                .slice(0, 5)
                .sort((a, b) => b.count - a.count)
                .map((category) => (
                  <Link
                    key={category.id}
                    href={`/category/${category.slug}`}
                    className="group inline-flex items-center px-5 py-2.5 bg-white border border-gray-200 shadow-sm text-gray-700 rounded-full hover:border-emerald-200 hover:shadow-md transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    <span className="group-hover:text-emerald-600 transition-colors">{category.name}</span>
                    <span className="ml-2.5 bg-gray-50 text-gray-500 group-hover:bg-emerald-50 group-hover:text-emerald-700 font-semibold px-2.5 py-0.5 rounded-full text-xs transition-colors">
                      {category.count.toLocaleString()}
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Newsletter Deep-Mode CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-emerald-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[100px] opacity-20" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-teal-400 rounded-full blur-[100px] opacity-20" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight">Stay Updated with New Finds</h2>
            <p className="text-emerald-100/90 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Get notified when we add fresh collections and timeless books. Receive personalized recommendations straight to your inbox.
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
            
            <p className="text-emerald-200/60 text-sm mt-6 font-medium">No spam ever. We only send absolute gems. 💎</p>
          </div>
        </section>
        
      </main>
    </>
  )
}
