import { useLayoutEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'
import img1 from '../assets/1.jpeg'
import img2 from '../assets/2.jpeg'
import img3 from '../assets/3.jpeg'
import img4 from '../assets/4.jpeg'
import img5 from '../assets/5.jpeg'
import img6 from '../assets/6.jpeg'
import img7 from '../assets/7.jpeg'
import img8 from '../assets/8.jpeg'

export function PicturesPage() {
  const rootRef = useRef(null)
  const itemRefs = useRef([])

  const photos = useMemo(
    () => [
      { src: img1, caption: 'First smile 💕' },
      { src: img2, caption: 'That laugh 😳💗' },
      { src: img3, caption: 'Cozy moments 🧸' },
      { src: img4, caption: 'Little adventures ✨' },
      { src: img5, caption: 'You being you 💖' },
      { src: img6, caption: 'My favorite view 🥰' },
      { src: img7, caption: 'Forever vibe 💞' },
      { src: img8, caption: 'More memories soon 💘' },
    ],
    [],
  )

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      const els = itemRefs.current.filter(Boolean)
      gsap.set(els, { opacity: 0, y: 14, scale: 0.96 })
      gsap.to(els, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.06,
        delay: 0.05,
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="pt-6">
      <div className="mb-5">
        <h1 className="m-0 text-[clamp(30px,4.2vw,44px)] tracking-[-0.03em] font-extrabold">
          Memories <span aria-hidden="true">💕</span>
        </h1>
        <p className="mt-2 text-[#2a1020]/70">A tiny gallery of “us” (swap in your real photos anytime).</p>
      </div>

      <div className="grid grid-cols-12 gap-3.5" role="list">
        {photos.map((p, idx) => (
          <article
            key={`${p.caption}-${idx}`}
            className="group col-span-12 sm:col-span-6 md:col-span-4 flex flex-col h-full transform-gpu transition-transform duration-150 hover:-translate-y-0.5"
            role="listitem"
            ref={(el) => {
              itemRefs.current[idx] = el
            }}
          >
            <div className="relative rounded-[18px] overflow-hidden flex-1 flex items-center justify-center">
              <img
                className="w-full h-auto max-h-[260px] object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                src={p.src}
                alt={p.caption}
                loading="lazy"
              />
              <div
                className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                aria-hidden="true"
              >
                <span className="text-[40px] drop-shadow-[0_18px_40px_rgba(255,60,134,0.20)] animate-pulse">💗</span>
              </div>
            </div>
            <div className="px-2.5 pt-2.5 text-sm font-semibold tracking-[-0.02em] text-[#2a1020]/85 text-center">
              {p.caption}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

