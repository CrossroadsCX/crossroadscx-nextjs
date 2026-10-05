import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

type NavLink = { label: string, href: string }

// Nav links are page-local: the same labels scroll to the matching section on the current page.
// Only the audience switch (and the logo) moves between pages.
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

const AUDIENCES = [
  { label: 'For business leaders', href: '/' },
  { label: 'For engineering teams & startups', href: '/engineering' },
]

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

  // Background and text colors depend on state, so they're passed separately rather than mixed into optionClassName
  const audienceSwitch = (className: string, optionClassName: string, inactiveClassName: string) => (
    <ul className={className} aria-label="Choose your audience">
      {AUDIENCES.map((audience) => {
        const isCurrent = audience.href === pathname
        return (
          <li key={audience.href} className="flex">
            <Link href={audience.href}>
              <a
                aria-current={isCurrent ? 'page' : undefined}
                onClick={() => setIsOpen(false)}
                className={`
                  ${optionClassName}
                  ${isCurrent ? 'bg-primary text-white' : inactiveClassName}
                  ${focusRing}
                `}
              >
                {audience.label}
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )

  return (
    <header
      ref={headerRef}
      className={`
        ${isSticky ? 'fixed bg-opacity-90 shadow-sm backdrop-blur-sm' : 'absolute'}
        z-50 w-full left-0 top-0 bg-white
      `}
    >
      <div className="hidden lg:block bg-[#F4F7FF]">
        <div className="container flex justify-end h-9 items-center">
          {audienceSwitch('flex rounded-full bg-white p-0.5 text-sm', 'px-4 py-1 rounded-full whitespace-nowrap', 'text-dark hover:text-primary')}
        </div>
      </div>
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

          <nav className="hidden lg:block" aria-label="Sections on this page">
            <ul className="flex gap-6 xl:gap-10">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={hrefFor(link.href)} className={`text-base font-medium text-dark hover:text-primary whitespace-nowrap ${focusRing}`}>
                    {link.label}
                  </a>
                </li>
              ))}
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
          {audienceSwitch('flex flex-col gap-2 mb-4', 'w-full rounded-lg px-4 py-3 font-medium', 'bg-[#F4F7FF] text-dark hover:text-primary')}
          <nav aria-label="Sections on this page">
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
