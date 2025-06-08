import type { Metadata } from "next"
import ClientHomePage from "./ClientHomePage"

export const metadata: Metadata = {
  title: "BookDiscover - Find Your Next Great Read",
  description:
    "Discover amazing books and authors with personalized recommendations. Explore trending titles, bestsellers, and curated collections.",
  keywords: "books, reading, recommendations, authors, bestsellers, book discovery",
}

export default function HomePage() {
  return <ClientHomePage />
}
