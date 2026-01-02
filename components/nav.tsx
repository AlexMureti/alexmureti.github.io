"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Approach", href: "#approach" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Nav() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="hidden lg:block space-y-4 text-sm tracking-tight uppercase">
      {navItems.map((item) => (
        <div key={item.name} className="flex items-center group">
          <div
            className={cn(
              "h-[1px] bg-foreground transition-all duration-300",
              activeSection === item.href.slice(1) ? "w-12 mr-4" : "w-0 group-hover:w-8 group-hover:mr-4",
            )}
          />
          <Link
            href={item.href}
            className={cn(
              "transition-colors",
              activeSection === item.href.slice(1)
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {item.name}
          </Link>
        </div>
      ))}
    </nav>
  )
}
