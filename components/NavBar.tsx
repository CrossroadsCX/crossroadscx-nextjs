import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

type NavLink = { label: string, href: string }

// Nav links are page-local: the same labels scroll to the matching section on the current page.
// The logo and the "Engineering" link are the only header links that change pages.
const NAV: Record<string, NavLink[]> = {
  '/': [
    { label: 'When to call', href: '#when-to-call' },
    { label: 'Services', href: '#services' },
    { label: 'Examples', href: '#examples' },
    { label: 'Team', href: '#team' },
    { label: 'FAQ', href: '#faq' },
  ],
  '/engineering': [
    { label: 'When to call', href: '#eng-triggers' },
    { label: 'Services', href: '#eng-capabilities' },
    { label: 'Examples', href: '#eng-examples' },
    { label: 'Team', href: '#eng-team' },
    { label: 'FAQ', href: '#eng-faq' },
  ],
}

const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

export const NavBar = () => {
  const { pathname } = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const links = NAV[pathname] ?? NAV['/']
  // On pages without their own sections, the anchors point back to the home page.
  const hrefFor = (href: string) => (NAV[pathname] ? href : `/${href}`)

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

  // The one page link in the header; underlined when you're on that page.
  const isEngineering = pathname === '/engineering'
  const engineeringLink = (className: string) => (
    <Link href="/engineering">
      <a
        aria-current={isEngineering ? 'page' : undefined}
        onClick={() => setIsOpen(false)}
        className={`${className} ${isEngineering ? 'text-primary underline underline-offset-8 decoration-2' : 'text-dark hover:text-primary'} ${focusRing}`}
      >
        Engineering
      </a>
    </Link>
  )

  return (
    <header
      ref={headerRef}
      className={`
        ${isSticky ? 'fixed bg-opacity-90 shadow-sm backdrop-blur-sm' : 'absolute'}
        z-50 w-full left-0 top-0 bg-white
      `}
    >
      <div className="container">
        <div className="flex items-center justify-between h-[72px] gap-4">
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

          <nav className="hidden lg:block" aria-label="Main">
            <ul className="flex gap-5 xl:gap-9">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={hrefFor(link.href)} className={`text-base font-medium text-dark hover:text-primary whitespace-nowrap ${focusRing}`}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>{engineeringLink('text-base font-medium whitespace-nowrap')}</li>
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={hrefFor('#contact-us')}
              className={`text-sm sm:text-base font-medium text-white bg-primary rounded-lg py-2 px-4 sm:py-3 sm:px-6 hover:bg-opacity-90 whitespace-nowrap ${focusRing}`}
            >
              Get in touch
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`
                ${isOpen ? 'navbarTogglerActive' : ''}
                lg:hidden
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
        className={`${isOpen ? '' : 'hidden'} lg:hidden absolute left-0 right-0 top-full bg-white shadow-lg border-t border-[#EFEFEF]`}
      >
        <div className="container py-4">
          <nav aria-label="Main">
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={hrefFor(link.href)}
                    onClick={() => setIsOpen(false)}
                    className={`flex py-3 text-base font-medium text-dark hover:text-primary ${focusRing}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>{engineeringLink('flex py-3 text-base font-medium')}</li>
            </ul>
          </nav>
          <a
            href={hrefFor('#contact-us')}
            onClick={() => setIsOpen(false)}
            className={`mt-3 flex justify-center w-full text-base font-medium text-white bg-primary rounded-lg py-3 hover:bg-opacity-90 ${focusRing}`}
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  )
}
