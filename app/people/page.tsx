import type { Metadata } from "next"
import Link from "next/link"
import { Users, BookOpen, Filter } from "lucide-react"

type Props = {
  searchParams: Promise<{ profession?: string }>
}

export const metadata: Metadata = {
  title: "Influential People Who Recommend Books | BookDiscover 2",
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
  const { profession } = await searchParams
  const selectedProfession = profession || ""

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
    name: "Influential People Who Recommend Books x",
    description: "Discover book recommendations from influential people across various professions.",
    url: `/people${selectedProfession ? `?profession=${selectedProfession}` : ""}`,
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
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(peopleSchema) }} />

      <main className="min-h-screen bg-white">
        {/* Header Section */}
        <header className="bg-gradient-to-br from-slate-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Influential People Who Recommend Books
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl">
              Discover book recommendations from thought leaders, innovators, and influential figures across various
              industries. Get insights into what shapes the minds of today's most successful people.
            </p>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-8">
                <div className="flex items-center mb-6">
                  <Filter className="h-6 w-6 text-emerald-600 mr-3" />
                  <h2 className="text-xl font-bold text-gray-900">Filter by Profession</h2>
                </div>

                <nav aria-label="Filter people by profession">
                  <ul className="space-y-1">
                    {professions.map((profession) => {
                      const isActive = selectedProfession === profession.slug
                      const href = profession.slug ? `/people?profession=${profession.slug}` : "/people"

                      return (
                        <li key={profession.slug || "all"}>
                          <Link
                            href={href}
                            className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                              isActive
                                ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                                : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                            }`}
                            aria-current={isActive ? "page" : undefined}
                          >
                            <span>{profession.name}</span>
                            <span
                              className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                                isActive
                                  ? "bg-emerald-200 text-emerald-800"
                                  : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
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

            {/* Right Content Area */}
            <section className="flex-1">
              {/* Results Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedProfession ? `${currentProfession?.name}s Who Recommend Books` : "All Influential People"}
                  </h2>
                  <p className="text-gray-600">
                    {filteredPeople.length} {filteredPeople.length === 1 ? "person" : "people"} found
                    {selectedProfession && ` in ${currentProfession?.name?.toLowerCase()}`}
                  </p>
                </div>
                <div className="flex items-center text-gray-500 mt-4 sm:mt-0">
                  <Users className="h-5 w-5 mr-2" />
                  <span className="text-sm">
                    {people.reduce((total, person) => total + person.booksRecommended, 0).toLocaleString()} total
                    recommendations
                  </span>
                </div>
              </div>

              {/* People Grid */}
              {filteredPeople.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPeople.map((person) => (
                    <Link
                      key={person.id}
                      href={`/people/${person.slug}`}
                      className="block group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-xl"
                    >
                      <article className="bg-white border border-gray-200 rounded-xl p-6 h-full transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02] group-hover:-translate-y-1 group-focus:shadow-xl group-focus:scale-[1.02] group-focus:-translate-y-1">
                        <div className="flex flex-col items-center text-center h-full">
                          {/* Profile Image */}
                          <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-gray-100 ring-4 ring-gray-50 group-hover:ring-emerald-100 transition-all duration-300">
                            <img
                              src={person.image || "/placeholder.svg"}
                              alt={`${person.name} profile picture`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>

                          {/* Person Info */}
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                            {person.name}
                          </h3>

                          <p className="text-emerald-600 font-semibold mb-3 text-sm uppercase tracking-wide">
                            {person.professionDisplay}
                          </p>

                          <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                            {person.description}
                          </p>

                          {/* Books Count */}
                          <div className="mt-auto flex items-center justify-center bg-gray-50 rounded-lg px-4 py-2 group-hover:bg-emerald-50 transition-colors">
                            <BookOpen className="h-4 w-4 mr-2 text-gray-500 group-hover:text-emerald-600 transition-colors" />
                            <span className="text-sm font-semibold text-gray-700 group-hover:text-emerald-700 transition-colors">
                              {person.booksRecommended} {person.booksRecommended === 1 ? "book" : "books"}
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              ) : (
                /* No Results State */
                <div className="text-center py-16">
                  <Users className="h-16 w-16 text-gray-300 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">No people found</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    We don't have any {selectedProfession}s in our database yet. Check back soon or explore other
                    professions.
                  </p>
                  <Link
                    href="/people"
                    className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
                  >
                    View All People
                  </Link>
                </div>
              )}
            </section>
          </div>
        </div>

        {/* Call to Action Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Get Inspired by Great Minds</h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
              Explore what influential people are reading and discover your next favorite book through their curated
              recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/categories"
                className="inline-flex items-center px-8 py-3 bg-white text-emerald-600 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
              >
                Browse Book Categories
              </Link>
              <Link
                href="/books"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-emerald-600 transition-colors font-semibold"
              >
                View All Books
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
