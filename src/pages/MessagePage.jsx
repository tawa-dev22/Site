import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { AnimatedButton } from '../components/AnimatedButton.jsx'
import { useNavigate } from 'react-router-dom'

export function MessagePage() {
  const navigate = useNavigate()
  const rootRef = useRef(null)
  const headerRef = useRef(null)
  const letterRef = useRef(null)
  const paragraphRefs = useRef([])

  const paragraphs = [
    "I don’t know how to put into words how deeply grateful I am to have you in my life, but I promise to try—because if anyone appreciates clear logic and honest expression, it’s you. 🧠✨",
    "You are, without a doubt, the most brilliant person I know. Not just because of how effortlessly you solve complex problems or think in ways that leave me in complete awe, but because of the deep, beautiful wisdom and understanding you bring into my world every single day. 💻💡",
    "You approach everything with a gentle curiosity, a quiet patience, and a steady strength that makes me feel safe. In your presence, I feel like no challenge is ever truly unsolvable, and no problem is too heavy to carry. 🌱🤍",
    "Thank you for being my absolute constant—for debugging my chaos with your warmth, optimizing my worst days with your beautiful smile, and always, always showing up when it matters most. 🛠️💖",
    "You’ve been there through all my crashes and reboots, and somehow you always help me run a little better, feel a little lighter, and love a little deeper afterward. I honestly don’t know how you do it, but I’m endlessly thankful that you do. 🔄💫",
    "Beyond all the brilliance, what I treasure most is simply you: your quiet kindness, your beautiful laughter, your gentle honesty, and the way you make even the hardest moments feel like a warm, shared adventure. 🌸😊",
    "Life is infinitely brighter, safer, and more magical with you in it. I cannot imagine a universe where my path doesn't lead straight to yours. You are my home, my peace, and my absolute favorite person. 🌍💞",
    "No matter how many paths life branches into or how many lines of code we write, I hope you know I am forever here—rooting for you, believing in you, and incredibly proud of the beautiful soul you are. 🌈👏"
  ]

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      // Fade in the container
      gsap.set(root, { opacity: 0 })
      gsap.to(root, { opacity: 1, duration: 0.6 })

      // Slide in header elements
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out', stagger: 0.12 }
      )

      // Stagger animate each paragraph of the letter
      const els = paragraphRefs.current.filter(Boolean)
      gsap.set(els, { opacity: 0, y: 14 })
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: 'power3.out',
        stagger: 0.15,
        delay: 0.25,
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="pt-4 sm:pt-6 max-w-[800px] mx-auto">
      <div ref={headerRef} className="mb-6">
        <h1 className="m-0 text-[clamp(28px,4vw,42px)] tracking-[-0.03em] font-extrabold text-[#3d132c]">
          To the One I Cherish <span aria-hidden="true">💌</span>
        </h1>
        <p className="mt-2 text-[#2a1020]/70 text-[15px] font-medium">A little letter, from my heart to yours.</p>
      </div>

      <div
        ref={letterRef}
        className="rounded-[26px] bg-white/65 border border-white/60 shadow-[0_20px_50px_rgba(255,80,150,0.14)] backdrop-blur-md overflow-hidden p-6 sm:p-9 relative"
        aria-label="Love letter"
      >
        {/* Rose gold wax-seal inspired ornament */}
        <div className="flex justify-center gap-2.5 pb-5 text-[20px] opacity-80" aria-hidden="true">
          <span>✨</span>
          <span>💗</span>
          <span>✨</span>
        </div>

        {/* Cursive Handwriting Letter Opening */}
        <p className="m-0 mb-4 accent-script text-pink-500 select-none">
          My Beloved,
        </p>

        {/* Letter Body paragraphs */}
        <div className="space-y-4">
          {paragraphs.map((para, idx) => (
            <p
              key={`para-${idx}`}
              className="m-0 text-[16px] sm:text-[17px] leading-relaxed text-[#2a1020]/85 font-medium"
              ref={(el) => {
                paragraphRefs.current[idx] = el
              }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Letter Sign-off in handwriting */}
        <div 
          className="mt-8 pt-4 border-t border-rose-100/60"
          ref={(el) => {
            paragraphRefs.current[paragraphs.length] = el
          }}
        >
          <p className="m-0 text-[15px] font-bold text-rose-500/80 uppercase tracking-wider leading-none">
            With all my love, forever & always,
          </p>

        </div>

        {/* Call to Action Button */}
        <div 
          className="mt-9 flex gap-3 flex-wrap"
          ref={(el) => {
            paragraphRefs.current[paragraphs.length + 1] = el
          }}
        >
          <AnimatedButton variant="yes" onClick={() => navigate('/pictures')}>
            Explore Our Memories <span aria-hidden="true">📸</span>
          </AnimatedButton>
        </div>
      </div>
    </section>
  )
}
