import { useLayoutEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'
import { AnimatedButton } from '../components/AnimatedButton.jsx'
import { useNavigate } from 'react-router-dom'

export function MessagePage() {
  const navigate = useNavigate()
  const rootRef = useRef(null)
  const lineRefs = useRef([])

  const lines = useMemo(
    () => [
      'Dear Bestie, 💛',
      'I don’t know how to put into words how grateful I am for you, but I’ll try—because if anyone appreciates clear logic and honest expression, it’s you. 🧠✨',
      'You’re one of the smartest people I know, not just because you can solve complex problems or think in ways that amaze me, but because of how deeply you understand people, situations, and life. 💻💡',
      'You approach everything with curiosity, patience, and that quiet determination that makes me feel like no problem is ever truly unsolvable. 🌱🤍',
      'Thank you for being my constant—debugging my chaos, optimizing my bad days, and always showing up when it matters most. 🛠️💖',
      'You’ve been there through my crashes and reboots, and somehow you always help me run a little better afterward. I honestly don’t know how you do it, but I’m endlessly thankful that you do. 🔄💫',
      'Beyond all the brilliance, what I treasure most is you: your kindness, your humor, your honesty, and the way you make even the hardest moments feel lighter. 🌸😊',
      'Life is better, safer, and more fun with you in it, and I can’t imagine my world without you as my best friend. 🌍💞',
      'No matter how many paths life branches into, I hope you know I’m always here—rooting for you, believing in you, and proud of the incredible person you are. 🌈👏',
      'With so much love, ❤️',
    ],
    [],
  )
  

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      const els = lineRefs.current.filter(Boolean)
      gsap.set(els, { opacity: 0, y: 14 })
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.22,
        delay: 0.08,
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="pt-6">
      <div className="mb-5">
        <h1 className="m-0 text-[clamp(30px,4.2vw,44px)] tracking-[-0.03em] font-extrabold">
          For My Bestie <span aria-hidden="true">💌</span>
        </h1>
        <p className="mt-2 text-[#2a1020]/70">A little letter, from my heart to yours.</p>
      </div>

      <div
        className="rounded-[22px] bg-white/70 border border-white/70 shadow-[0_18px_50px_rgba(255,60,134,0.18)] overflow-hidden"
        aria-label="Love letter"
      >
        <div className="flex justify-center gap-2.5 pt-3.5 text-[18px] opacity-90" aria-hidden="true">
          <span>✨</span>
          <span>💗</span>
          <span>✨</span>
        </div>

        <div className="px-5 pt-4 pb-2">
          {lines.map((line, idx) => (
            <p
              key={`${line}-${idx}`}
              className={[
                'm-0 mb-3 text-[17px] leading-relaxed text-[#2a1020]/85',
                idx === 0 ? 'font-semibold text-[18px]' : '',
                idx === lines.length - 1 ? 'mt-4 font-extrabold text-[#2a0a14]/95' : '',
              ].join(' ')}
              ref={(el) => {
                lineRefs.current[idx] = el
              }}
            >
              {line}
            </p>
          ))}
        </div>

        <div className="px-5 pb-5 flex gap-3 flex-wrap">
          <AnimatedButton variant="primary" onClick={() => navigate('/pictures')}>
            See Memories <span aria-hidden="true">📸</span>
          </AnimatedButton>
        </div>
      </div>
    </section>
  )
}

