import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useNavigate } from 'react-router-dom'
import { AnimatedButton } from '../components/AnimatedButton.jsx'

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n))
}

export function HomePage() {
  const navigate = useNavigate()
  const [noClicks, setNoClicks] = useState(0)

  const rootRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const yesBtnRef = useRef(null)
  const noBtnRef = useRef(null)

  const tease = useMemo(() => {
    if (noClicks === 0) return 'Take a second, breathe, and answer with your heart. 💗'
    if (noClicks === 1) return 'Even if you tap “No”, I hope you know you’re still my favorite person. 🥺'
    if (noClicks === 2) return 'Okay, okay—I’ll pretend I didn’t see that… but my heart is still rooting for “Yes”. 💞'
    if (noClicks <= 5) return 'No matter what you pick, I’m grateful for you and this little moment with us. ✨'
    return 'Wherever your answer lands, you are cherished, appreciated, and so deeply loved. ❤️'
  }, [noClicks])

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      // Initial load sequence: background fade, text slide, buttons bounce in.
      gsap.set(root, { opacity: 0 })
      gsap.set([titleRef.current, subtitleRef.current], { opacity: 0, y: 18 })
      gsap.set([yesBtnRef.current, noBtnRef.current], { opacity: 0, scale: 0.86, y: 8 })

      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .to(root, { opacity: 1, duration: 0.45 }, 0)
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.65 }, 0.05)
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.55 }, 0.12)
        .to(
          [yesBtnRef.current, noBtnRef.current],
          { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.55)', stagger: 0.08 },
          0.22,
        )
    }, root)

    return () => ctx.revert()
  }, [])

  function handleNo() {
    const next = noClicks + 1
    setNoClicks(next)

    const yesScale = clamp(1 + next * 0.18, 1, 2.65)
    const noScale = clamp(1 - next * 0.07, 0.55, 1)

    gsap.to(yesBtnRef.current, {
      scale: yesScale,
      duration: 0.6,
      ease: 'elastic.out(1, 0.5)',
    })
    if (next <= 3) {
      gsap.to(noBtnRef.current, {
        scale: noScale,
        duration: 0.6,
        ease: 'elastic.out(1, 0.5)',
      })

      // Subtle "dodging" before it vanishes.
      gsap.fromTo(
        noBtnRef.current,
        { x: 0 },
        { x: gsap.utils.random(-10, 10), duration: 0.25, ease: 'power2.out', yoyo: true, repeat: 1 },
      )
    }

    if (next === 3) {
      gsap.to(noBtnRef.current, {
        opacity: 0,
        scale: 0.4,
        duration: 0.4,
        ease: 'power2.in',
      })
    }
  }

  function handleYes() {
    const root = rootRef.current
    if (!root) return

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => navigate('/message'),
    })

    tl.to(yesBtnRef.current, { scale: '+=0.12', duration: 0.18 }, 0)
      .to(yesBtnRef.current, { scale: '+=0.08', duration: 0.16, ease: 'elastic.out(1, 0.4)' }, 0.18)
      .to(root, { filter: 'saturate(1.15)', duration: 0.25 }, 0.05)
      .to(root, { filter: 'saturate(1)', duration: 0.25 }, 0.35)
  }

  return (
    <section ref={rootRef} className="grid place-items-center min-h-[calc(100vh-64px-56px)] pt-6">
      <div className="relative overflow-hidden w-full max-w-[760px] rounded-[22px] border border-white/60 bg-white/70 shadow-[0_18px_50px_rgba(255,60,134,0.18)] px-6 py-6 text-center">
        <div
          className="pointer-events-none absolute -inset-[50px] z-0
          bg-[radial-gradient(500px_200px_at_20%_10%,rgba(255,60,134,0.14),transparent_60%),radial-gradient(520px_220px_at_90%_0%,rgba(255,160,190,0.20),transparent_60%)]"
          aria-hidden="true"
        />

        <div className="relative z-[1]">

          <h1 ref={titleRef} className="mt-2 text-[clamp(34px,5vw,56px)] tracking-[-0.04em] leading-[1.05] font-extrabold">
            Are you my Best Friend? <span aria-hidden="true">💖</span>
          </h1>
          <p
            ref={subtitleRef}
            className="mt-3 mx-auto max-w-[52ch] text-[#2a1020]/75 text-[17px] leading-relaxed font-medium"
          >
            {tease}
          </p>

          <div className="mt-5 flex items-center justify-center gap-3.5 flex-wrap">
            <AnimatedButton ref={yesBtnRef} variant="yes" onClick={handleYes} aria-label="Yes, I will be your Valentine">
              Yes <span aria-hidden="true">❤️</span>
            </AnimatedButton>
            {noClicks < 3 && (
              <AnimatedButton ref={noBtnRef} variant="no" onClick={handleNo} aria-label="No">
                No <span aria-hidden="true">💔</span>
              </AnimatedButton>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

