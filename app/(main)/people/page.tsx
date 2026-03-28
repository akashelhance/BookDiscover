import type { Metadata } from "next"
import Link from "next/link"
import { Users, BookOpen, Filter, ArrowRight, Sparkles } from "lucide-react"

type Props = {
  searchParams: Promise<{ profession?: string }>
}

export const metadata: Metadata = {
  title: "Influential People Who Recommend Books | BookDiscover",
  description:
    "Discover book recommendations from influential people across various professions. Find your next great read through curated lists from industry leaders, entrepreneurs, scientists, and more.",
  keywords: "book recommendations, influential people, celebrities, reading lists, book discovery, thought leaders",
  openGraph: {
    title: "Influential People Who Recommend Books | BookDiscover",
    description: "Discover book recommendations from influential people across various professions.",
    type: "website",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Influential People Book Recommendations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Influential People Who Recommend Books | BookDiscover",
    description: "Discover book recommendations from influential people across various professions.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

// Mock data for professions
const professions = [
  { name: "All Professions", slug: "", count: 156 },
  { name: "Actor", slug: "actor", count: 23 },
  { name: "CEO", slug: "ceo", count: 34 },
  { name: "Entrepreneur", slug: "entrepreneur", count: 28 },
  { name: "Scientist", slug: "scientist", count: 19 },
  { name: "Author", slug: "author", count: 31 },
  { name: "Politician", slug: "politician", count: 15 },
  { name: "Athlete", slug: "athlete", count: 12 },
  { name: "Investor", slug: "investor", count: 18 },
  { name: "Director", slug: "director", count: 14 },
  { name: "Musician", slug: "musician", count: 16 },
  { name: "Chef", slug: "chef", count: 9 },
]

// Mock data for people
const people = [
  {
    id: 1,
    name: "Elon Musk",
    slug: "elon-musk",
    profession: "entrepreneur",
    professionDisplay: "Entrepreneur & CEO",
    image: "/placeholder.svg?height=200&width=200",
    booksRecommended: 47,
    description: "CEO of Tesla and SpaceX",
  },
  {
    id: 2,
    name: "Oprah Winfrey",
    slug: "oprah-winfrey",
    profession: "actor",
    professionDisplay: "Media Mogul & Actor",
    image: "/placeholder.svg?height=200&width=200",
    booksRecommended: 156,
    description: "Media executive and talk show host",
  },
  {
    id: 3,
    name: "Bill Gates",
    slug: "bill-gates",
    profession: "entrepreneur",
    professionDisplay: "Entrepreneur & Philanthropist",
    image: "/placeholder.svg?height=200&width=200",
    booksRecommended: 89,
    description: "Co-founder of Microsoft",
  },
  {
    id: 4,
    name: "Neil deGrasse Tyson",
    slug: "neil-degrasse-tyson",
    profession: "scientist",
    professionDisplay: "Astrophysicist",
    image: "/placeholder.svg?height=200&width=200",
    booksRecommended: 73,
    description: "Astrophysicist and science communicator",
  },
  {
    id: 5,
    name: "Tim Cook",
    slug: "tim-cook",
    profession: "ceo",
    professionDisplay: "CEO",
    image: "/placeholder.svg?height=200&width=200",
    booksRecommended: 34,
    description: "CEO of Apple Inc.",
  },
  {
    id: 6,
    name: "Reese Witherspoon",
    slug: "reese-witherspoon",
    profession: "actor",
    professionDisplay: "Actor & Producer",
    image: "/placeholder.svg?height=200&width=200",
    booksRecommended: 92,
    description: "Academy Award-winning actress",
  },
  {
    id: 7,
    name: "Warren Buffett",
    slug: "warren-buffett",
    profession: "investor",
    professionDisplay: "Investor",
    image: "/placeholder.svg?height=200&width=200",
    booksRecommended: 67,
    description: "Chairman and CEO of Berkshire Hathaway",
  },
  {
    id: 8,
    name: "Barack Obama",
    slug: "barack-obama",
    profession: "politician",
    professionDisplay: "Former President",
    image: "/placeholder.svg?height=200&width=200",
    booksRecommended: 124,
    description: "44th President of the United States",
  },
  {
    id: 9,
    name: "Satya Nadella",
    slug: "satya-nadella",
    profession: "ceo",
    professionDisplay: "CEO",
    image: "/placeholder.svg?height=200&width=200",
    booksRecommended: 28,
    description: "CEO of Microsoft",
  },
  {
    id: 10,
    name: "Marie Curie",
    slug: "marie-curie",
    profession: "scientist",
    professionDisplay: "Physicist & Chemist",
    image: "/placeholder.svg?height=200&width=200",
    booksRecommended: 45,
    description: "Nobel Prize-winning scientist",
  },
  {
    id: 11,
    name: "Steven Spielberg",
    slug: "steven-spielberg",
    profession: "director",
    professionDisplay: "Film Director",
    image: "/placeholder.svg?height=200&width=200",
    booksRecommended: 56,
    description: "Academy Award-winning director",
  },
  {
    id: 12,
    name: "Serena Williams",
    slug: "serena-williams",
    profession: "athlete",
    professionDisplay: "Tennis Champion",
    image: "/placeholder.svg?height=200&width=200",
    booksRecommended: 31,
    description: "23-time Grand Slam champion",
  },
  {
    id: 13,
    name: "Gordon Ramsay",
    slug: "gordon-ramsay",
    profession: "chef",
    professionDisplay: "Celebrity Chef",
    image: "/placeholder.svg?height=200&width=200",
    booksRecommended: 23,
    description: "Michelin-starred chef and restaurateur",
  },
  {
    id: 14,
    name: "Taylor Swift",
    slug: "taylor-swift",
    profession: "musician",
    professionDisplay: "Singer-Songwriter",
    image: "/placeholder.svg?height=200&width=200",
    booksRecommended: 38,
    description: "Grammy Award-winning artist",
  },
  {
    id: 15,
    name: "Malcolm Gladwell",
    slug: "malcolm-gladwell",
    profession: "author",
    professionDisplay: "Author & Journalist",
    image: "/placeholder.svg?height=200&width=200",
    booksRecommended: 84,
    description: "Bestselling author and journalist",
  },
]

export default async function PeoplePage({ searchParams }: Props) {
  const params = await searchParams
  const selectedProfession = params.profession || ""

  // Filter people based on selected profession
  const filteredPeople = selectedProfession
    ? people.filter((person) => person.profession === selectedProfession)
    : people

  // Get current profession info for dynamic content
  const currentProfession = professions.find((p) => p.slug === selectedProfession)

  // Schema.org structured data
  const peopleSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Influential ${selectedProfession ? currentProfession?.name : "People"} Who Recommend Books`,
    description: "Discover book recommendations from influential people across various professions.",
    url: `https://bookdiscover.com/people${selectedProfession ? `?profession=${selectedProfession}` : ""}`,
    mainEntity: {
      "@type": "ItemList",
      name: "Influential People Collection",
      numberOfItems: filteredPeople.length,
      itemListElement: filteredPeople.map((person, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Person",
          name: person.name,
          url: `/people/${person.slug}`,
          jobTitle: person.professionDisplay,
          description: person.description,
          image: person.image,
        },
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(peopleSchema) }} />

      <main className="min-h-screen bg-gray-50/50">
        
        {/* ============================== */}
        {/* IMMERSIVE GLOW HERO SECTION    */}
        {/* ============================== */}
        <header className="relative bg-gradient-to-b from-emerald-50/80 to-transparent pt-24 pb-20 lg:pt-32 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-gray-100/50">
          
          {/* Edge-to-edge optical blur spheres */}
          <div className="absolute top-0 right-1/4 -translate-y-12 translate-x-1/2 z-0 pointer-events-none">
            <div className="w-[600px] h-[600px] bg-emerald-200/40 rounded-full blur-[100px]" />
          </div>
          <div className="absolute top-0 left-0 -translate-x-1/4 translate-y-1/4 z-0 pointer-events-none">
            <div className="w-[400px] h-[400px] bg-sky-100/30 rounded-full blur-[80px]" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center justify-center space-x-2 bg-white/60 backdrop-blur-md border border-emerald-100 px-5 py-2 rounded-full text-sm font-semibold text-emerald-800 tracking-wide shadow-sm mb-6">
              <Users className="w-5 h-5 text-emerald-500" />
              <span>150+ Influential Leaders</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight text-balance">
              What The Top <span className="text-emerald-600">1%</span> Are Reading
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto text-balance font-medium">
              Discover the specific books that shaped the minds of the world's most successful innovators, CEOs, authors, and thought leaders.
            </p>
          </div>
        </header>

        {/* ============================== */}
        {/* DASHBOARD LAYOUT (Sidebar+Grid)*/}
        {/* ============================== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* FLOATING GLASS SIDEBAR */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-6 lg:p-8 sticky top-8">
                <div className="flex items-center mb-6">
                  <Filter className="h-5 w-5 text-emerald-600 mr-2.5" />
                  <h2 className="text-xl font-bold text-gray-900 tracking-tight">Filter Directory</h2>
                </div>

                <nav aria-label="Filter people by profession">
                  <ul className="space-y-1.5 border-t border-gray-100/50 pt-5">
                    {professions.map((profession) => {
                      const isActive = selectedProfession === profession.slug
                      const href = profession.slug ? `/people?profession=${profession.slug}` : "/people"

                      return (
                        <li key={profession.slug || "all"}>
                          <Link
                            href={href}
                            className={`flex items-center justify-between px-5 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 group ${
                              isActive
                                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                                : "text-gray-600 hover:bg-white hover:shadow-sm hover:text-emerald-700"
                            }`}
                            aria-current={isActive ? "page" : undefined}
                          >
                            <span>{profession.name}</span>
                            <span
                              className={`text-xs px-2.5 py-1 rounded-md font-bold transition-colors ${
                                isActive
                                  ? "bg-white/20 text-white"
                                  : "bg-gray-100 text-gray-500 group-hover:bg-emerald-50 group-hover:text-emerald-700"
                              }`}
                            >
                              {profession.count}
                            </span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* PEOPLE BENTO GRID */}
            <section className="flex-1 min-w-0">
              
              {/* Grid Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 pb-6 border-b border-gray-100/80">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                    {selectedProfession ? `${currentProfession?.name} Profiles` : "All Innovators"}
                  </h2>
                  <p className="text-gray-500 font-medium">
                    Showing {filteredPeople.length} {filteredPeople.length === 1 ? "profile" : "profiles"} in directory
                  </p>
                </div>
                <div className="flex items-center text-emerald-800 bg-emerald-50 border border-emerald-100 px-4 py-2.5 rounded-xl mt-4 sm:mt-0 font-bold shadow-sm">
                  <BookOpen className="h-5 w-5 text-emerald-600 mr-2" />
                  <span className="text-sm">
                    {people.reduce((total, person) => total + person.booksRecommended, 0).toLocaleString()} Linked Books
                  </span>
                </div>
              </div>

              {/* Grid Render */}
              {filteredPeople.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                  {filteredPeople.map((person) => (
                    <Link
                      key={person.id}
                      href={`/people/${person.slug}`}
                      className="block group focus:outline-none"
                    >
                      <article className="bg-white border border-gray-100 rounded-[2rem] p-8 h-full transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1.5 focus:shadow-xl hover:border-emerald-100">
                        <div className="flex flex-col items-center text-center h-full relative">
                          
                          {/* Bento 3D Avatar */}
                          <div className="w-28 h-28 rounded-full overflow-hidden mb-6 bg-gray-50 ring-[6px] ring-white shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl relative z-10">
                            <img
                              src={person.image || "/placeholder.svg"}
                              alt={`${person.name} profile picture`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>

                          {/* Data Stack */}
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight group-hover:text-emerald-600 transition-colors">
                            {person.name}
                          </h3>

                          <div className="mb-4">
                            <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-[11px] font-bold uppercase tracking-wider group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                              {person.professionDisplay}
                            </span>
                          </div>

                          <p className="text-gray-600 leading-relaxed font-medium text-[15px] mb-8 line-clamp-2">
                            "{person.description}"
                          </p>

                          {/* Footer Book Pill */}
                          <div className="mt-auto flex items-center justify-center bg-gray-50 border border-gray-100/80 rounded-xl px-4 py-2.5 w-full group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors">
                            <BookOpen className="h-4 w-4 mr-2 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                            <span className="text-sm font-bold text-gray-600 group-hover:text-emerald-700 transition-colors tracking-wide">
                              {person.booksRecommended} Reviewed Books
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              ) : (
                /* No Results State */
                <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-gray-200">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-10 w-10 text-gray-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">No Innovators Found</h3>
                  <p className="text-gray-500 mb-8 max-w-md mx-auto text-lg">
                    We don't have any {currentProfession?.name || selectedProfession}s in our database yet.
                  </p>
                  <Link
                    href="/people"
                    className="inline-flex items-center px-8 py-3.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-bold shadow-lg"
                  >
                    View All Categories <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              )}
            </section>
          </div>
        </div>

        {/* ============================== */}
        {/* DEEP-MODE GLOBAL CTA           */}
        {/* ============================== */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-emerald-900 relative overflow-hidden mt-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-500 rounded-full blur-[100px] opacity-20 pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-teal-400 rounded-full blur-[100px] opacity-20 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight text-balance">
              Who Should We Add Next?
            </h2>
            <p className="text-emerald-100/90 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
              We are constantly decoding the reading lists of the world's most fascinating minds. Join our newsletter to get their book recommendations instantly.
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
            
            <p className="text-emerald-200/60 text-sm mt-8 font-bold tracking-widest uppercase">
              Free Weekly Insights
            </p>
          </div>
        </section>

      </main>
    </>
  )
}
