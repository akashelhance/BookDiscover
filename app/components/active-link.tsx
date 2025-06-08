"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

interface ActiveLinkProps {
  href: string
  children: ReactNode
  className?: string
  activeClassName?: string
}

export default function ActiveLink({ href, children, className = "", activeClassName }: ActiveLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href))

  const finalClassName = isActive ? `${className} ${activeClassName || "text-emerald-600 font-semibold"}` : className

  return (
    <Link href={href} className={finalClassName} aria-current={isActive ? "page" : undefined}>
      {children}
    </Link>
  )
}
