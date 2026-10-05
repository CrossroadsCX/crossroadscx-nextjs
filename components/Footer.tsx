import React from 'react'
import Image from 'next/future/image'
import Link from 'next/link'
import { GitHubIcon } from './GitubIcon'
import { LinkedInIcon } from './LinkedInIcon'

// The footer is the full site map, so it links across pages; each column is labeled with its page.
const columns = [
  {
    heading: 'For business leaders',
    page: '/',
    links: [
      { label: 'When to call', href: '/#when-to-call' },
      { label: 'Services', href: '/#services' },
      { label: 'Examples', href: '/#examples' },
      { label: 'Team', href: '/#team' },
      { label: 'FAQ', href: '/#faq' },
    ],
  },
  {
    heading: 'For engineering teams and startups',
    page: '/engineering',
    links: [
      { label: 'When to call', href: '/engineering#eng-triggers' },
      { label: 'Services', href: '/engineering#eng-capabilities' },
      { label: 'Examples', href: '/engineering#eng-examples' },
      { label: 'Team', href: '/engineering#eng-team' },
      { label: 'FAQ', href: '/engineering#eng-faq' },
    ],
  },
]

const linkClass = 'inline-block text-base text-[#efefef] hover:text-white leading-loose mb-1'

export const Footer = () => {
  return (
    <footer className="bg-primary relative z-10">
      <div className="container pt-14 lg:pt-20">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-4/12 px-4">
            <div className="w-full mb-10">
              <Link href="/">
                <a className="inline-flex items-center gap-3 mb-6">
                  <Image
                    src="/images/logo/logo-symbol-v2.svg"
                    alt=""
                    className="w-16 rounded-lg bg-white"
                    height="64"
                    width="64"
                  />
                  <span className="text-white text-2xl">CrossroadsCX</span>
                </a>
              </Link>
              <p className="text-base text-[#efefef] mb-2">
                <a href="mailto:hello@crossroadscx.com" className="hover:underline">hello@crossroadscx.com</a>
              </p>
              <p className="text-base text-[#efefef] mb-6">Chicago, IL</p>
              <div className="flex items-center -mx-3">
                <LinkedInIcon link="https://www.linkedin.com/company/crossroads-cx" className="text-[#efefef] hover:text-white" />
                <GitHubIcon link="https://github.com/crossroadscx" className="text-[#efefef] hover:text-white" />
              </div>
            </div>
          </div>
          {columns.map((column) => (
            <div key={column.page} className="w-full sm:w-1/2 lg:w-4/12 px-4">
              <nav className="w-full mb-10" aria-label={column.heading}>
                <h2 className="text-white text-lg font-semibold mb-6">
                  <Link href={column.page}>
                    <a className="hover:underline">{column.heading}</a>
                  </Link>
                </h2>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>
                        <a className={linkClass}>{link.label}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#101541] py-8 mt-6">
        <div className="container">
          <p className="text-base text-[#efefef] text-center md:text-left">&copy; {new Date().getFullYear()} CrossroadsCX</p>
        </div>
      </div>
    </footer>
  )
}
