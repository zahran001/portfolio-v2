'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useNavShrink } from '@/hooks/useNavShrink'
import { useSectionActivate } from '@/hooks/useSectionActivate'

const SECTION_IDS = ['aboutme', 'projects']

interface NavLink {
  href: string
  label: string
  sectionId?: string
}

const NAV_LINKS: NavLink[] = [
  { href: '/#aboutme', label: 'About me', sectionId: 'aboutme' },
  { href: '/#projects', label: 'My projects', sectionId: 'projects' },
  { href: '/more/', label: 'More' },
]

export default function Nav() {
  const isFixed = useNavShrink()
  const activeId = useSectionActivate(SECTION_IDS)
  const [menuOpen, setMenuOpen] = useState(false)

  const navClass = isFixed
    ? 'fixed top-0 left-0 right-0 z-50 bg-white/95 shadow-md backdrop-blur-sm py-2 transition-all'
    : 'relative bg-white/20 backdrop-blur-sm py-3 transition-all'

  return (
    <nav className={navClass}>
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-white hover:text-white/80 transition-colors text-sm md:text-base"
        >
          Zahran Yahia Khan
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ href, label, sectionId }) => {
            const isActive = sectionId ? activeId === sectionId : false
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white font-bold underline underline-offset-4'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 border-t border-white/20 px-6 py-4">
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block text-sm font-medium text-gray-700 hover:text-accent-purple transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
