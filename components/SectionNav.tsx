import React, { useEffect, useRef, useState } from 'react'

export type SectionLink = { id: string, label: string }

type SectionNavProps = {
  sections: SectionLink[]
}

// Header (72px) + this bar (44px). Keep in sync with scroll-padding-top in styles/globals.css.
const STUCK_OFFSET = 116

// Opaque in-page menu that sticks under the header and highlights the section you're reading.
// Render it right after a page's hero.
export const SectionNav = ({ sections }: SectionNavProps) => {
  const [activeId, setActiveId] = useState<string>()
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      let current: string | undefined
      for (const { id } of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= STUCK_OFFSET + 8) current = id
      }
      // The last sections may be too short to reach the top; finish on the last one.
      setActiveId(atBottom ? sections[sections.length - 1].id : current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [sections])

  // On narrow screens the bar scrolls sideways; keep the active item in view without moving the page.
  useEffect(() => {
    const list = listRef.current
    const active = list?.querySelector<HTMLElement>('[aria-current="location"]')
    if (!list || !active) return
    const left = active.offsetLeft - (list.clientWidth - active.offsetWidth) / 2
    list.scrollTo({ left, behavior: 'smooth' })
  }, [activeId])

  return (
    <nav aria-label="On this page" className="sticky top-[72px] z-40 bg-white border-y border-[#E5E7EB]">
      <div className="container">
        <ul ref={listRef} className="flex gap-6 sm:gap-8 h-11 items-stretch overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {sections.map(({ id, label }) => {
            const isActive = id === activeId
            return (
              <li key={id} className="flex">
                <a
                  href={`#${id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`
                    flex items-center text-sm font-medium border-b-2 -mb-px
                    ${isActive ? 'border-primary text-primary' : 'border-transparent text-body-color hover:text-dark'}
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary
                  `}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
