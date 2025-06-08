import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/header"
import Footer from "./components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "BookDiscover - Find Your Next Great Read",
    template: "%s | BookDiscover",
  },
  description:
    "Discover amazing books and authors with personalized recommendations. Explore trending titles, bestsellers, and curated collections from influential people.",
  keywords: [
    "books",
    "reading",
    "recommendations",
    "authors",
    "bestsellers",
    "book discovery",
    "book reviews",
    "reading lists",
  ],
  authors: [{ name: "BookDiscover Team" }],
  creator: "BookDiscover",
  publisher: "BookDiscover",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bookdiscover.com",
    siteName: "BookDiscover",
    title: "BookDiscover - Find Your Next Great Read",
    description:
      "Discover amazing books and authors with personalized recommendations. Explore trending titles, bestsellers, and curated collections.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "BookDiscover - Book Recommendation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BookDiscover - Find Your Next Great Read",
    description:
      "Discover amazing books and authors with personalized recommendations. Explore trending titles, bestsellers, and curated collections.",
    images: ["/placeholder.svg?height=630&width=1200"],
    creator: "@bookdiscover",
  },
  verification: {
    google: "google-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full flex flex-col bg-white text-gray-900 antialiased`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
