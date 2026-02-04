import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
}

export function LoveCursor() {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root || prefersReducedMotion()) return

    const hearts = ['💗', '💖', '💘', '💕', '❤️']

    const leader = document.createElement('span')
    leader.textContent = '💗'
    leader.style.position = 'fixed'
    leader.style.left = '0px'
    leader.style.top = '0px'
    leader.style.pointerEvents = 'none'
    leader.style.zIndex = '1'
    leader.style.fontSize = '22px'
    leader.style.filter = 'drop-shadow(0 10px 20px rgba(255,60,134,0.35))'
    root.appendChild(leader)

    let lastTrailTime = 0

    function handleMove(e) {
      const { clientX: x, clientY: y } = e

      gsap.to(leader, {
        x,
        y,
        duration: 0.14,
        ease: 'power3.out',
      })

      const now = performance.now()
      if (now - lastTrailTime < 55) return
      lastTrailTime = now

      const trail = document.createElement('span')
      trail.textContent = hearts[Math.floor(Math.random() * hearts.length)]
      trail.style.position = 'fixed'
      trail.style.left = '0px'
      trail.style.top = '0px'
      trail.style.pointerEvents = 'none'
      trail.style.fontSize = '18px'
      trail.style.filter = 'drop-shadow(0 12px 24px rgba(255,60,134,0.3))'
      root.appendChild(trail)

      const jitterX = gsap.utils.random(-10, 10)
      const floatY = gsap.utils.random(30, 50)

      gsap.fromTo(
        trail,
        { x, y, scale: 0.6, opacity: 0.9 },
        {
          x: x + jitterX,
          y: y - floatY,
          scale: 1.2,
          opacity: 0,
          duration: 0.85,
          ease: 'power2.out',
          onComplete: () => {
            trail.remove()
          },
        },
      )
    }

    function handleClick(e) {
      const { clientX: x, clientY: y } = e

      const burstCount = 6
      for (let i = 0; i < burstCount; i++) {
        const burst = document.createElement('span')
        burst.textContent = hearts[Math.floor(Math.random() * hearts.length)]
        burst.style.position = 'fixed'
        burst.style.left = '0px'
        burst.style.top = '0px'
        burst.style.pointerEvents = 'none'
        burst.style.fontSize = '20px'
        burst.style.filter = 'drop-shadow(0 14px 30px rgba(255,60,134,0.45))'
        root.appendChild(burst)

        const angle = (Math.PI * 2 * i) / burstCount
        const radius = gsap.utils.random(24, 40)
        const targetX = x + Math.cos(angle) * radius
        const targetY = y + Math.sin(angle) * radius

        gsap.fromTo(
          burst,
          { x, y, scale: 0.4, opacity: 1 },
          {
            x: targetX,
            y: targetY,
            scale: 1.3,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
            onComplete: () => {
              burst.remove()
            },
          },
        )
      }
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mousedown', handleClick)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mousedown', handleClick)
      root.innerHTML = ''
    }
  }, [])

  return <div ref={rootRef} className="fixed inset-0 pointer-events-none z-[9999]" aria-hidden="true" />
}

