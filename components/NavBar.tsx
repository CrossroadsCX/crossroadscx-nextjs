import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

// The header links pages only, labeled by the kind of help rather than the kind of visitor.
// Sections are reached by scrolling, in-page CTAs, and the footer site map.
const PAGES = [
  { label: 'How we help', href: '/' },
  { label: 'Engineering', href: '/engineering' },
]

const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

export const NavBar = () => {
  const { pathname } = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  // Both pages have their own contact form; anything else sends people to the home page's.
  const contactHref = PAGES.some((page) => page.href === pathname) ? '#contact-us' : '/#contact-us'

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY >= 50)
    // Pages can load already scrolled (deep links, scroll restoration)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const handleClick = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        document.getElementById('navbarToggler')?.focus()
      }
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [isOpen])

  const pageLinks = (itemClassName: string) =>
    PAGES.map((page) => {
      const isCurrent = page.href === pathname
      return (
        <li key={page.href}>
          <Link href={page.href}>
            <a
              aria-current={isCurrent ? 'page' : undefined}
              onClick={() => setIsOpen(false)}
              className={`${itemClassName} ${isCurrent ? 'text-primary underline underline-offset-8 decoration-2' : 'text-dark hover:text-primary'} ${focusRing}`}
            >
              {page.label}
            </a>
          </Link>
        </li>
      )
    })

  return (
    <header
      ref={headerRef}
      className={`
        ${isSticky ? 'fixed shadow-sm' : 'absolute'}
        z-50 w-full left-0 top-0 bg-white
      `}
    >
      <div className="container">
        <div className="flex items-center justify-between h-[72px] gap-4">
          <div className="flex items-center gap-10">
            <Link href="/">
              <a className={`flex items-center gap-3 shrink-0 ${focusRing}`}>
                <Image
                  src="/images/logo/logo-symbol-v2.svg"
                  alt=""
                  className="w-11"
                  width="44"
                  height="44"
                />
                {/* Wordmark hides on small phones so the header row fits; it stays the link's accessible name */}
                <span className="sr-only sm:not-sr-only text-black text-2xl">CrossroadsCX</span>
              </a>
            </Link>

            <nav className="hidden md:block" aria-label="Main">
              <ul className="flex gap-8">
                {pageLinks('text-base font-medium whitespace-nowrap')}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={contactHref}
              className={`text-sm sm:text-base font-medium text-white bg-primary rounded-lg py-2 px-4 sm:py-3 sm:px-6 hover:bg-opacity-90 whitespace-nowrap ${focusRing}`}
            >
              Get in touch
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`
                ${isOpen ? 'navbarTogglerActive' : ''}
                md:hidden
                px-2
                py-[6px]
                rounded-lg
                ${focusRing}
              `}
              id="navbarToggler"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="navbarCollapse"
            >
              <span className="relative w-[30px] h-[2px] my-[6px] block bg-body-color"></span>
              <span className="relative w-[30px] h-[2px] my-[6px] block bg-body-color"></span>
              <span className="relative w-[30px] h-[2px] my-[6px] block bg-body-color"></span>
            </button>
          </div>
        </div>
      </div>

      <div
        id="navbarCollapse"
        className={`${isOpen ? '' : 'hidden'} md:hidden absolute left-0 right-0 top-full bg-white shadow-lg border-t border-[#EFEFEF]`}
      >
        <nav className="container py-2" aria-label="Main">
          <ul>
            {pageLinks('flex py-3 text-base font-medium')}
          </ul>
        </nav>
      </div>
    </header>
  )
}
