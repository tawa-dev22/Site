import { useEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
}

export function FloatingHearts({ count = 18 }) {
  const rootRef = useRef(null)

  const hearts = useMemo(() => {
    const icons = ['💗', '💖', '💘', '💞', '💕', '❤️']
    return Array.from({ length: count }).map((_, i) => ({
      id: `heart-${i}`,
      icon: icons[i % icons.length],
    }))
  }, [count])

  useEffect(() => {
    const root = rootRef.current
    if (!root || prefersReducedMotion()) return

    const els = Array.from(root.querySelectorAll('[data-heart]'))
    const ctx = gsap.context(() => {
      els.forEach((el, i) => {
        const startX = gsap.utils.random(0, 100)
        const startY = gsap.utils.random(0, 100)
        const driftX = gsap.utils.random(-10, 10)
        const duration = gsap.utils.random(6, 10)
        const delay = (i % 6) * 0.25

        gsap.set(el, {
          left: `${startX}%`,
          top: `${startY}%`,
          opacity: gsap.utils.random(0.12, 0.26),
          scale: gsap.utils.random(0.8, 1.25),
        })

        gsap.to(el, {
          y: '-=60',
          x: `+=${driftX}`,
          opacity: `+=${gsap.utils.random(0.03, 0.08)}`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          duration,
          delay,
        })

        gsap.to(el, {
          rotation: gsap.utils.random(-12, 12),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          duration: gsap.utils.random(2.5, 4.2),
          delay,
        })
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute select-none text-[22px] drop-shadow-[0_10px_20px_rgba(255,60,134,0.12)]"
          data-heart
        >
          {h.icon}
        </span>
      ))}
    </div>
  )
}

