import type { Metadata } from "next"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, MessageCircle, Users, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with BookDiscover",
  description:
    "Have questions about book recommendations or want to partner with us? Contact BookDiscover for support, feedback, or partnership inquiries. We'd love to hear from you.",
  keywords: [
    "contact BookDiscover",
    "customer support",
    "book recommendation help",
    "partnership inquiries",
    "feedback",
    "get in touch",
    "contact form",
  ],
  openGraph: {
    title: "Contact Us - BookDiscover",
    description: "Get in touch with BookDiscover for questions, feedback, or partnership opportunities.",
    type: "website",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Contact BookDiscover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - BookDiscover",
    description: "Get in touch with BookDiscover for questions, feedback, or partnership opportunities.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function ContactPage() {
  // Schema.org structured data for contact page
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us",
    description: "Contact BookDiscover for questions, feedback, or partnership inquiries.",
    url: "https://bookdiscover.com/contact",
    mainEntity: {
      "@type": "Organization",
      name: "BookDiscover",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1-234-567-890",
          contactType: "customer service",
          email: "hello@bookdiscover.com",
          availableLanguage: "English",
        },
        {
          "@type": "ContactPoint",
          email: "partnerships@bookdiscover.com",
          contactType: "business partnerships",
          availableLanguage: "English",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Book Street",
        addressLocality: "Reading City",
        addressRegion: "RC",
        postalCode: "12345",
        addressCountry: "US",
      },
    },
  }

  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

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
                <li className="text-gray-900 font-medium">Contact Us</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              We'd love to hear from you! Whether you have questions about our book recommendations, feedback to share,
              or are interested in partnership opportunities, don't hesitate to get in touch. Our team is here to help
              and we typically respond within 24 hours.
            </p>
          </div>
        </header>

        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form Section */}
              <section>
                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                  <header className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </header>

                  <form className="space-y-6" action="#" method="POST">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name{" "}
                        <span className="text-red-500" aria-label="required">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                        placeholder="Enter your full name"
                        aria-describedby="name-help"
                      />
                      <p id="name-help" className="mt-1 text-sm text-gray-500">
                        We'll use this to personalize our response to you.
                      </p>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address{" "}
                        <span className="text-red-500" aria-label="required">
                          *
                        </span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                        placeholder="Enter your email address"
                        aria-describedby="email-help"
                      />
                      <p id="email-help" className="mt-1 text-sm text-gray-500">
                        We'll never share your email address with third parties.
                      </p>
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                        aria-describedby="subject-help"
                      >
                        <option value="">Select a topic</option>
                        <option value="general">General Question</option>
                        <option value="recommendation">Book Recommendation Request</option>
                        <option value="feedback">Website Feedback</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="technical">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                      <p id="subject-help" className="mt-1 text-sm text-gray-500">
                        This helps us route your message to the right team member.
                      </p>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message{" "}
                        <span className="text-red-500" aria-label="required">
                          *
                        </span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors resize-vertical"
                        placeholder="Tell us how we can help you..."
                        aria-describedby="message-help"
                      ></textarea>
                      <p id="message-help" className="mt-1 text-sm text-gray-500">
                        Please provide as much detail as possible to help us assist you better.
                      </p>
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors font-semibold"
                      >
                        Send Message
                      </button>
                    </div>

                    {/* Privacy Notice */}
                    <p className="text-xs text-gray-500 leading-relaxed">
                      By submitting this form, you agree to our{" "}
                      <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700 underline">
                        Privacy Policy
                      </Link>
                      . We'll only use your information to respond to your inquiry and won't share it with third
                      parties.
                    </p>
                  </form>
                </div>
              </section>

              {/* Contact Information Section */}
              <section>
                <div className="space-y-8">
                  {/* Direct Contact Info */}
                  <div className="bg-gray-50 rounded-xl p-8">
                    <header className="mb-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch Directly</h2>
                      <p className="text-gray-600">Prefer to contact us directly? Here are other ways to reach us.</p>
                    </header>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <Mail className="h-6 w-6 text-emerald-600 mr-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                          <p className="text-gray-600 mb-2">For general inquiries and support</p>
                          <a
                            href="mailto:hello@bookdiscover.com"
                            className="text-emerald-600 hover:text-emerald-700 font-medium"
                          >
                            hello@bookdiscover.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Phone className="h-6 w-6 text-emerald-600 mr-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                          <p className="text-gray-600 mb-2">Monday - Friday, 9 AM - 6 PM EST</p>
                          <a href="tel:+1234567890" className="text-emerald-600 hover:text-emerald-700 font-medium">
                            +1 (234) 567-890
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <MapPin className="h-6 w-6 text-emerald-600 mr-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                          <p className="text-gray-600">
                            123 Book Street
                            <br />
                            Reading City, RC 12345
                            <br />
                            United States
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Clock className="h-6 w-6 text-emerald-600 mr-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                          <div className="text-gray-600 space-y-1">
                            <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                            <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                            <p>Sunday: Closed</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Specialized Contact */}
                  <div className="bg-white border border-gray-200 rounded-xl p-8">
                    <header className="mb-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Specialized Inquiries</h2>
                      <p className="text-gray-600">
                        Need help with something specific? Contact the right team directly.
                      </p>
                    </header>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-gray-900">Partnerships & Collaborations:</span>
                          <a
                            href="mailto:partnerships@bookdiscover.com"
                            className="ml-2 text-emerald-600 hover:text-emerald-700"
                          >
                            partnerships@bookdiscover.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <BookOpen className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-gray-900">Book Submissions & Reviews:</span>
                          <a
                            href="mailto:submissions@bookdiscover.com"
                            className="ml-2 text-emerald-600 hover:text-emerald-700"
                          >
                            submissions@bookdiscover.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <MessageCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-gray-900">Media & Press Inquiries:</span>
                          <a
                            href="mailto:press@bookdiscover.com"
                            className="ml-2 text-emerald-600 hover:text-emerald-700"
                          >
                            press@bookdiscover.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8">
                    <header className="mb-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Follow Us</h2>
                      <p className="text-gray-600">Stay connected and get the latest book recommendations.</p>
                    </header>

                    <div className="flex flex-wrap gap-4">
                      <a
                        href="https://twitter.com/bookdiscover"
                        className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                        Twitter
                      </a>

                      <a
                        href="https://facebook.com/bookdiscover"
                        className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Facebook
                      </a>

                      <a
                        href="https://instagram.com/bookdiscover"
                        className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Quick answers to common questions. Don't see what you're looking for? Contact us directly.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">How do you choose book recommendations?</h3>
                <p className="text-gray-600 text-sm">
                  Our recommendations come from influential people, expert reviewers, and community feedback. We focus
                  on quality and relevance rather than popularity alone.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Can I submit a book for review?</h3>
                <p className="text-gray-600 text-sm">
                  Yes! Authors and publishers can submit books for consideration. Please email us at
                  submissions@bookdiscover.com with details about your book.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Do you offer personalized recommendations?</h3>
                <p className="text-gray-600 text-sm">
                  While we don't currently offer individual consultations, our categorized recommendations and search
                  features help you find books tailored to your interests.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">How quickly do you respond to inquiries?</h3>
                <p className="text-gray-600 text-sm">
                  We typically respond to all inquiries within 24 hours during business days. Complex questions may take
                  up to 48 hours for a complete response.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
