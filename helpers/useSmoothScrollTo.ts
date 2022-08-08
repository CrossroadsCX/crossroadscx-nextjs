import { useEffect, useRef } from 'react'

export const useSmoothScrollTo = (id: string) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const listener = (e: HashChangeEvent) => {
      if (ref.current && location.hash === id) {
        ref.current.scrollIntoView({ behavior: 'smooth' })
      }
    }
    window.addEventListener('hashchange', listener, true)
    return () => {
      window.removeEventListener('hashchange', listener)
    }
  })

  return {
    'data-anchor-id': id,
    ref,
  }
}
