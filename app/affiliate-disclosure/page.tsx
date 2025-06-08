import type { Metadata } from "next"
import Link from "next/link"
import { ExternalLink, DollarSign, Shield, Info } from "lucide-react"

export const metadata: Metadata = {
  title: "Affiliate Disclosure - Transparency in Our Recommendations",
  description:
    "Learn about BookDiscover's affiliate partnerships and how we maintain transparency while recommending books. We participate in Amazon Associates and other affiliate programs.",
  keywords: [
    "affiliate disclosure",
    "Amazon Associates",
    "affiliate links",
    "transparency",
    "book recommendations",
    "commission disclosure",
    "FTC compliance",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Affiliate Disclosure - BookDiscover",
    description: "Learn about our affiliate partnerships and commitment to transparent book recommendations.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Affiliate Disclosure - BookDiscover",
    description: "Learn about our affiliate partnerships and commitment to transparent book recommendations.",
  },
}

export default function AffiliateDisclosurePage() {
  const lastUpdated = "December 8, 2024"

  // Schema.org structured data for legal document
  const disclosureSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Affiliate Disclosure",
    description: "BookDiscover's affiliate disclosure explaining our participation in affiliate programs.",
    url: "https://bookdiscover.com/affiliate-disclosure",
    dateModified: lastUpdated,
    publisher: {
      "@type": "Organization",
      name: "BookDiscover",
      url: "https://bookdiscover.com",
    },
  }

  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(disclosureSchema) }} />

      <main className="min-h-screen bg-white">
        {/* Header Section */}
        <header className="bg-gradient-to-br from-slate-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-gray-500">
                <li>
                  <Link href="/" className="hover:text-gray-700 transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">Affiliate Disclosure</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Affiliate Disclosure</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transparency is important to us. Learn about our affiliate partnerships and how they support our mission
              to provide quality book recommendations.
            </p>
            <p className="text-sm text-gray-500 mt-6">
              <strong>Last updated:</strong> {lastUpdated}
            </p>
          </div>
        </header>

        {/* Content Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Important Notice */}
            <section className="mb-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start">
                <Info className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h2 className="text-lg font-semibold text-blue-900 mb-2">Important Notice</h2>
                  <p className="text-blue-800 leading-relaxed">
                    This website contains affiliate links. As an Amazon Associate, we earn from qualifying purchases. We
                    may also receive commissions from other affiliate partners when you click our links and make
                    purchases. This does not affect the price you pay or influence our recommendations.
                  </p>
                </div>
              </div>
            </section>

            <div className="prose prose-lg max-w-none">
              {/* Overview Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    BookDiscover participates in various affiliate marketing programs, which means we may earn
                    commissions on purchases made through links on our website. This affiliate disclosure is provided in
                    accordance with the Federal Trade Commission's (FTC) guidelines regarding endorsements and
                    testimonials in advertising.
                  </p>
                  <p>
                    We believe in complete transparency with our readers. When you click on certain links on our website
                    and make a purchase, we may receive a small commission at no additional cost to you. These
                    commissions help support the operation of our website and allow us to continue providing valuable
                    book recommendations and content to our community.
                  </p>
                  <p>
                    Our participation in affiliate programs does not influence our editorial content or book
                    recommendations. We only recommend books that we genuinely believe will provide value to our
                    readers, regardless of whether they generate affiliate commissions.
                  </p>
                </div>
              </section>

              {/* Affiliate Programs Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Affiliate Programs We Participate In</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center mb-4">
                      <DollarSign className="h-6 w-6 text-emerald-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">Amazon Associates Program</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising
                      program designed to provide a means for sites to earn advertising fees by advertising and linking
                      to Amazon.com.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center mb-4">
                      <ExternalLink className="h-6 w-6 text-emerald-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">Other Retail Partners</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      We also participate in affiliate programs with Barnes & Noble, Bookshop.org, Apple Books, and
                      other online book retailers to provide you with multiple purchasing options.
                    </p>
                  </div>
                </div>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Specific Affiliate Partnerships</h3>
                  <p>
                    <strong>Amazon Associates:</strong> As an Amazon Associate, we earn from qualifying purchases made
                    through our Amazon links. This program allows us to earn a small commission (typically 1-10% of the
                    purchase price) when you buy books or other products through our Amazon links.
                  </p>
                  <p>
                    <strong>Barnes & Noble Affiliate Program:</strong> We participate in the Barnes & Noble affiliate
                    program and may earn commissions on purchases made through our Barnes & Noble links.
                  </p>
                  <p>
                    <strong>Bookshop.org Affiliate Program:</strong> We are affiliates of Bookshop.org, which supports
                    independent bookstores. When you purchase books through our Bookshop.org links, we earn a commission
                    while also supporting local bookstores.
                  </p>
                  <p>
                    <strong>Other Partnerships:</strong> We may also participate in affiliate programs with other book
                    retailers, educational platforms, and book-related services. These partnerships are disclosed when
                    relevant and appropriate.
                  </p>
                </div>
              </section>

              {/* How It Works Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How Affiliate Links Work</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    When you click on an affiliate link on our website, you'll be directed to the retailer's website. If
                    you make a purchase within a certain timeframe (usually 24-30 days, depending on the program), we
                    may earn a small commission from that sale.
                  </p>
                  <p>
                    <strong>No Additional Cost to You:</strong> Using our affiliate links does not cost you anything
                    extra. The price you pay is exactly the same as if you had navigated to the retailer's website
                    directly. The commission we earn comes from the retailer's marketing budget, not from your purchase
                    price.
                  </p>
                  <p>
                    <strong>Cookie-Based Tracking:</strong> Most affiliate programs use cookies to track referrals. When
                    you click our affiliate link, a small cookie is placed on your device that identifies you as having
                    come from our website. This cookie typically expires after 24-30 days.
                  </p>
                  <p>
                    <strong>Commission Structure:</strong> Commission rates vary by program and product category.
                    Typically, book commissions range from 1-8% of the purchase price, while other products may have
                    different rates.
                  </p>
                </div>
              </section>

              {/* Editorial Independence Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Editorial Independence</h2>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-6">
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-900 mb-2">Our Promise</h3>
                      <p className="text-emerald-800 leading-relaxed">
                        We maintain complete editorial independence. Our book recommendations are based solely on
                        quality, relevance, and value to our readers, not on potential affiliate earnings.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Our primary goal is to help readers discover books that will enrich their lives, expand their
                    knowledge, and provide entertainment. We take this responsibility seriously and maintain strict
                    editorial standards regardless of affiliate relationships.
                  </p>
                  <p>
                    <strong>Recommendation Criteria:</strong> Books are recommended based on factors such as literary
                    merit, reader reviews, expert opinions, cultural impact, and relevance to our audience. Potential
                    affiliate earnings do not influence our selection process.
                  </p>
                  <p>
                    <strong>Honest Reviews:</strong> When we review books, we provide honest, unbiased opinions. We may
                    include both positive and negative aspects of a book, even if it contains affiliate links.
                  </p>
                  <p>
                    <strong>Diverse Options:</strong> We strive to provide multiple purchasing options for each book,
                    including both affiliate and non-affiliate links when possible, so you can choose where to make your
                    purchase.
                  </p>
                </div>
              </section>

              {/* FTC Compliance Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">FTC Compliance</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    We comply with the Federal Trade Commission's guidelines regarding endorsements and testimonials in
                    advertising. This means we clearly disclose our affiliate relationships and ensure that our
                    endorsements reflect our honest opinions and experiences.
                  </p>
                  <p>
                    <strong>Clear Disclosure:</strong> We make every effort to clearly identify affiliate links and
                    sponsored content. You may see disclosures such as "affiliate link," "sponsored," or similar
                    language near relevant links or content.
                  </p>
                  <p>
                    <strong>Material Connection:</strong> We disclose any material connection between us and the
                    companies whose products or services we recommend. This includes affiliate relationships, sponsored
                    content, and any free products or services we may have received.
                  </p>
                  <p>
                    <strong>Honest Opinions:</strong> All opinions expressed on our website are our own, based on our
                    genuine experience and research. We do not make claims about products or services that we do not
                    believe to be true.
                  </p>
                </div>
              </section>

              {/* Your Choices Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Choices</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    You are under no obligation to use our affiliate links. You can always navigate directly to any
                    retailer's website to make your purchases. However, if you find value in our recommendations and
                    content, using our affiliate links is a simple way to support our work at no additional cost to you.
                  </p>
                  <p>
                    <strong>Alternative Options:</strong> We often provide multiple purchasing options, including links
                    to different retailers and formats (physical books, e-books, audiobooks). Choose the option that
                    works best for you.
                  </p>
                  <p>
                    <strong>Library Resources:</strong> We encourage readers to also check their local libraries and
                    digital library services, which we mention when appropriate, even though these don't generate
                    affiliate commissions.
                  </p>
                  <p>
                    <strong>Price Comparison:</strong> We recommend comparing prices across different retailers to
                    ensure you're getting the best deal, regardless of our affiliate relationships.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section className="mb-12 bg-gray-50 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About Our Affiliate Relationships</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    If you have any questions about our affiliate relationships or this disclosure, please don't
                    hesitate to contact us. We're committed to transparency and are happy to provide additional
                    information about our partnerships.
                  </p>
                  <div className="space-y-2">
                    <p>
                      <strong>Email:</strong> affiliates@bookdiscover.com
                    </p>
                    <p>
                      <strong>General Contact:</strong> hello@bookdiscover.com
                    </p>
                    <p>
                      <strong>Phone:</strong> +1 (234) 567-890
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 mt-6">
                    We appreciate your support and trust in our book recommendations. Thank you for being part of the
                    BookDiscover community.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
