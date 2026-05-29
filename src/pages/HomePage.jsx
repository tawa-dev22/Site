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
  const introRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const yesBtnRef = useRef(null)
  const noBtnRef = useRef(null)

  const tease = useMemo(() => {
    if (noClicks === 0) return 'Take a second, look into my eyes, and answer with your heart. You are my absolute favorite story. 💗'
    if (noClicks === 1) return 'Oh, did your finger slip? 🥺 I’ll pretend I didn’t see that, because my heart is entirely, completely yours. 💞'
    if (noClicks === 2) return 'Wait… are you teasing me? 😂 You know you can’t escape my love—it’s practically written in the code! Let’s try that “Yes” button instead. 🌹'
    return 'Okay, okay, I see how it is! But since the “No” button has officially run away, there’s only one perfect choice left… click “Yes”! ✨'
  }, [noClicks])

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      // Initial load sequence: background fade, text slide, buttons bounce in.
      gsap.set(root, { opacity: 0 })
      gsap.set(introRef.current, { opacity: 0, y: -12 })
      gsap.set([titleRef.current, subtitleRef.current], { opacity: 0, y: 22 })
      gsap.set([yesBtnRef.current, noBtnRef.current], { opacity: 0, scale: 0.82, y: 12 })

      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .to(root, { opacity: 1, duration: 0.5 }, 0)
        .to(introRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.08)
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.75 }, 0.12)
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.65 }, 0.2)
        .to(
          [yesBtnRef.current, noBtnRef.current],
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.55)', stagger: 0.08 },
          0.3,
        )
    }, root)

    return () => ctx.revert()
  }, [])

  function handleNo() {
    const next = noClicks + 1
    setNoClicks(next)

    const yesScale = clamp(1 + next * 0.22, 1, 2.8)
    const noScale = clamp(1 - next * 0.1, 0.5, 1)

    // Expand the YES button to tease the user
    gsap.to(yesBtnRef.current, {
      scale: yesScale,
      duration: 0.55,
      ease: 'elastic.out(1, 0.45)',
    })

    if (next <= 3) {
      // Shrink the NO button
      gsap.to(noBtnRef.current, {
        scale: noScale,
        duration: 0.55,
        ease: 'elastic.out(1, 0.45)',
      })

      // Advanced playful dodging animation (shakes left/right and slides randomly)
      const shakeDirection = next % 2 === 0 ? 1 : -1
      gsap.fromTo(
        noBtnRef.current,
        { x: 0 },
        {
          x: shakeDirection * gsap.utils.random(15, 30),
          y: gsap.utils.random(-8, 8),
          duration: 0.2,
          ease: 'power2.out',
          yoyo: true,
          repeat: 1
        }
      )
    }

    // Hide NO button entirely on the 3rd click
    if (next === 3) {
      gsap.to(noBtnRef.current, {
        opacity: 0,
        scale: 0.2,
        duration: 0.35,
        ease: 'power2.in',
        pointerEvents: 'none'
      })
    }
  }

  function handleYes() {
    const root = rootRef.current
    const yesBtn = yesBtnRef.current
    if (!root || !yesBtn) return

    // Prevent multiple clicks
    yesBtn.style.pointerEvents = 'none'

    // Get coordinates of the YES button to spawn bursts from it
    const rect = yesBtn.getBoundingClientRect()
    const burstX = rect.left + rect.width / 2
    const burstY = rect.top + rect.height / 2

    const heartSymbols = ['💗', '💖', '💘', '💕', '❤️', '🌹', '✨', '🌸']
    const container = document.createElement('div')
    container.className = 'fixed inset-0 pointer-events-none z-[9999]'
    document.body.appendChild(container)

    // Generate stunning burst of 35 particles
    for (let i = 0; i < 38; i++) {
      const el = document.createElement('span')
      el.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)]
      el.style.position = 'fixed'
      el.style.left = `${burstX}px`
      el.style.top = `${burstY}px`
      el.style.fontSize = `${gsap.utils.random(18, 38)}px`
      el.style.transform = 'translate(-50%, -50%)'
      el.style.filter = 'drop-shadow(0 8px 16px rgba(255,80,150,0.35))'
      container.appendChild(el)

      const angle = gsap.utils.random(0, Math.PI * 2)
      const velocity = gsap.utils.random(110, 270)
      const targetX = burstX + Math.cos(angle) * velocity
      const targetY = burstY + Math.sin(angle) * velocity - gsap.utils.random(90, 210) // float upwards

      gsap.fromTo(
        el,
        { x: 0, y: 0, scale: 0.2, opacity: 1 },
        {
          x: targetX - burstX,
          y: targetY - burstY,
          scale: gsap.utils.random(1.2, 1.8),
          opacity: 0,
          rotation: gsap.utils.random(-180, 180),
          duration: gsap.utils.random(1.2, 1.9),
          ease: 'power2.out',
        }
      )
    }

    // Shrink button slightly on tap, then explode the layout beautifully
    const tl = gsap.timeline({
      onComplete: () => {
        container.remove()
        navigate('/message')
      },
    })

    tl.to(yesBtn, { scale: '-=0.15', duration: 0.12, ease: 'power2.out' }, 0)
      .to(yesBtn, { scale: '+=0.25', duration: 0.2, ease: 'elastic.out(1, 0.4)' }, 0.12)
      .to(root, { filter: 'saturate(1.25)', duration: 0.3 }, 0.05)
      .to(root, {
        opacity: 0,
        scale: 0.95,
        filter: 'blur(8px)',
        duration: 0.8,
        delay: 0.9, // Hold layout so the beautiful burst of hearts completes
        ease: 'power3.inOut'
      })
  }

  return (
    <section ref={rootRef} className="grid place-items-center min-h-[calc(100vh-64px-130px)] pt-4 sm:pt-6">
      <div className="relative overflow-hidden w-full max-w-[700px] rounded-[30px] border border-white/60 bg-white/65 shadow-[0_24px_60px_rgba(255,80,150,0.16)] backdrop-blur-md px-6 py-10 sm:py-12 text-center">
        
        {/* Floating gradient lights */}
        <div
          className="pointer-events-none absolute -inset-[50px] z-0
          bg-[radial-gradient(600px_250px_at_15%_15%,rgba(255,80,150,0.12),transparent_60%),radial-gradient(600px_250px_at_85%_5%,rgba(255,180,210,0.18),transparent_60%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col items-center">
          {/* Subtle Accent Script */}
          <span ref={introRef} className="accent-script block mb-2 sm:mb-3">
            For My Favorite Person
          </span>

          {/* Proposal Header */}
          <h1 ref={titleRef} className="mt-1 text-[clamp(28px,4.5vw,52px)] tracking-[-0.04em] leading-[1.08] font-extrabold text-[#3d132c]">
            Will you be My Love <br />today & always? <span className="inline-block animate-pulse" aria-hidden="true">💖</span>
          </h1>

          {/* Adaptive Teaser Text */}
          <p
            ref={subtitleRef}
            className="mt-5 mx-auto max-w-[46ch] text-[#2a1020]/80 text-[16px] sm:text-[18px] leading-relaxed font-semibold min-h-[54px]"
          >
            {tease}
          </p>

          {/* Interactive Actions wrapper */}
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap min-h-[64px]">
            <AnimatedButton ref={yesBtnRef} variant="yes" onClick={handleYes} aria-label="Yes, I will be your Valentine">
              Yes, I do! <span aria-hidden="true">❤️</span>
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
