import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useTransition } from './TransitionContext.jsx'

export function PageTransition({ children, routeKey }) {
  const rootRef = useRef(null)
  const { setPageEl } = useTransition()

  useLayoutEffect(() => {
    const el = rootRef.current
    if (!el) return

    setPageEl(el)

    // Entrance animation (runs on initial load and on route changes).
    gsap.killTweensOf(el)
    gsap.set(el, { opacity: 0, y: 16, scale: 0.96, filter: 'blur(10px)' })
    gsap
      .timeline({ defaults: { ease: 'power3.out' } })
      .to(el, { opacity: 1, y: 0, duration: 0.55, filter: 'blur(0px)' }, 0)
      .to(
        el,
        {
          scale: 1.02,
          duration: 0.28,
          ease: 'power2.out',
        },
        0.05,
      )
      .to(el, { scale: 1, duration: 0.22, ease: 'power2.out' }, '>-0.02')

    return () => {
      // cleanup is handled by the next mount / playExit()
    }
  }, [routeKey, setPageEl])

  return (
    <div ref={rootRef} className="will-change-transform will-change-opacity">
      {children}
    </div>
  )
}

