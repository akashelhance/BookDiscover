import type { Metadata } from "next"
import BooksClientPage from "./BooksClientPage"

export const metadata: Metadata = {
  title: "All Books - Discover Great Reads Across All Categories | BookDiscover",
  description:
    "Explore our comprehensive collection of books across trading, fiction, motivation, and self-help categories. Find your next great read with expert recommendations.",
  keywords: [
    "books",
    "trading books",
    "fiction books",
    "motivation books",
    "self-help books",
    "book recommendations",
    "bestsellers",
    "reading list",
  ],
  openGraph: {
    title: "All Books - BookDiscover",
    description: "Explore our comprehensive collection of books across all categories.",
    type: "website",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "BookDiscover Books Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Books - BookDiscover",
    description: "Explore our comprehensive collection of books across all categories.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function BooksPage() {
  return <BooksClientPage />
}
