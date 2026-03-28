import Link from "next/link"
import { BookOpen, Mail, Phone, MapPin, Twitter, Facebook, Instagram, ArrowRight, Github, Linkedin, Youtube } from "lucide-react"
import { siteConfig } from "../../config/site"

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand & Newsletter Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center space-x-2 mb-6 group">
              <div className="flex items-center justify-center w-8 h-8 bg-emerald-600 rounded-lg group-hover:bg-emerald-700 transition-colors">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">{siteConfig.name}</span>
            </Link>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-sm">
              {siteConfig.description}
            </p>

            {/* Newsletter Subscription */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-8">
              <h3 className="text-gray-900 font-bold mb-2">Subscribe to our newsletter</h3>
              <p className="text-gray-500 text-sm mb-4">
                Get weekly book recommendations and updates delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    id="newsletter-email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-sm"
                    required
                    aria-describedby="newsletter-description"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all font-semibold flex items-center justify-center whitespace-nowrap group"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
              <p id="newsletter-description" className="text-xs text-gray-400 mt-3 text-center sm:text-left">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:ml-auto">
            <h3 className="text-gray-900 font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/categories" className="text-gray-500 hover:text-emerald-600 hover:translate-x-1 transition-all inline-block font-medium">
                  Browse Categories
                </Link>
              </li>
              <li>
                <Link href="/people" className="text-gray-500 hover:text-emerald-600 hover:translate-x-1 transition-all inline-block font-medium">
                  Influential People
                </Link>
              </li>
              <li>
                <Link href="/authors" className="text-gray-500 hover:text-emerald-600 hover:translate-x-1 transition-all inline-block font-medium">
                  Featured Authors
                </Link>
              </li>
              <li>
                <Link href="/books" className="text-gray-500 hover:text-emerald-600 hover:translate-x-1 transition-all inline-block font-medium">
                  All Books
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-gray-900 font-bold mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/help" className="text-gray-500 hover:text-emerald-600 hover:translate-x-1 transition-all inline-block font-medium">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-emerald-600 hover:translate-x-1 transition-all inline-block font-medium">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-500 hover:text-emerald-600 hover:translate-x-1 transition-all inline-block font-medium">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-gray-500 hover:text-emerald-600 hover:translate-x-1 transition-all inline-block font-medium">
                  Send Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="group flex items-center text-gray-500 hover:text-emerald-600 transition-colors font-medium">
                  <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-emerald-50 flex items-center justify-center mr-3 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="group flex items-center text-gray-500 hover:text-emerald-600 transition-colors font-medium">
                  <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-emerald-50 flex items-center justify-center mr-3 transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start text-gray-500 font-medium">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>123 Book Street<br/>Reading City, RC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm text-center md:text-left font-medium">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            
            <div className="flex items-center space-x-6">
              {siteConfig.social.twitter && (
                <a href={siteConfig.social.twitter} className="text-gray-400 hover:text-emerald-600 transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {siteConfig.social.facebook && (
                <a href={siteConfig.social.facebook} className="text-gray-400 hover:text-emerald-600 transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {siteConfig.social.instagram && (
                <a href={siteConfig.social.instagram} className="text-gray-400 hover:text-emerald-600 transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {siteConfig.social.github && (
                <a href={siteConfig.social.github} className="text-gray-400 hover:text-emerald-600 transition-colors" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a href={siteConfig.social.linkedin} className="text-gray-400 hover:text-emerald-600 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>

            <div className="flex flex-wrap justify-center space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-emerald-600 transition-colors text-sm font-medium">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-emerald-600 transition-colors text-sm font-medium">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-emerald-600 transition-colors text-sm font-medium">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
