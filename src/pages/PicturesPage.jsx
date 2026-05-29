import { useLayoutEffect, useMemo, useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'
import img7 from '../assets/7.jpg'
import img8 from '../assets/8.jpg'
import img9 from '../assets/9.jpg'

// Premium Image component with a shimmer gradient skeleton
function ImageWithSkeleton({ src, alt, className }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="relative w-full h-full overflow-hidden bg-rose-50/50 rounded-xl">
      {/* Shimmer skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-rose-100/50 via-pink-100/70 to-rose-100/50" />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  )
}

export function PicturesPage() {
  const rootRef = useRef(null)
  const itemRefs = useRef([])
  const [activePhotoIndex, setActivePhotoIndex] = useState(null)
  const lightboxRef = useRef(null)

  const photos = useMemo(
    () => [
      {
        src: img1,
        caption: 'Your Start 🌸',
        description: 'The very moment our paths crossed and my world turned into beautiful, vibrant color. Every second since has been a beautiful reminder of how magical life became the instant you stepped into it. I treasure this memory above all else.'
      },
      {
        src: img2,
        caption: 'Your Smile ✨',
        description: 'Your laugh is my absolute favorite symphony—a sweet, joyful melody that instantly turns any dark day into pure sunshine. I promise to spend my lifetime keeping that beautiful smile on your face.'
      },
      {
        src: img3,
        caption: 'Safe Haven 🏡',
        description: 'Finding a safe place in this chaotic world is a rare gift, and I found mine right beside you. In your embrace, all the noise and worries fade away, and I am completely, beautifully home.'
      },
      {
        src: img4,
        caption: 'Adventures 🗺️',
        description: "It doesn't matter where we go or what we do—even a simple walk down the street or a quiet car ride feels like the greatest adventure of my life because you are by my side."
      },
      {
        src: img5,
        caption: 'Just You 💖',
        description: 'Captured in a simple, candid moment of you just being you. Your kindness, your grace, and your loving, generous heart never cease to leave me in complete, breathless awe.'
      },
      {
        src: img6,
        caption: 'Golden Hour 🌅',
        description: "They say the golden hour sunsets are beautiful, but I wouldn't know—my eyes are always completely locked onto you. You are, and will always be, the most breathtaking sight in my universe."
      },
      {
        src: img7,
        caption: 'Pure Joy 😊',
        description: 'A snapshot of pure, unadulterated happiness. I remember the exact feeling of this day—the warmth in the air, the peace in our hearts, and the silent certainty of our deep, beautiful bond.'
      },
      {
        src: img8,
        caption: 'Our History 📖',
        description: 'A stunning collection of laughter, secrets shared, and paths traveled hand-in-hand. Thank you for making our history so incredibly rich, warm, and beautiful.'
      },
      {
        src: img9,
        caption: 'Forever Next 🌹',
        description: 'As we look ahead, my heart overflows with excitement for all the dreams we have yet to chase, the memories we have yet to paint, and the infinite love we will share.'
      },
    ],
    [],
  )

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      const els = itemRefs.current.filter(Boolean)
      gsap.set(els, { opacity: 0, y: 18, scale: 0.95 })
      gsap.to(els, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.08,
        delay: 0.05,
      })
    }, root)

    return () => ctx.revert()
  }, [])

  function openLightbox(idx) {
    setActivePhotoIndex(idx)
    // Scale up GSAP transition on mount
    setTimeout(() => {
      if (lightboxRef.current) {
        gsap.fromTo(
          lightboxRef.current.querySelector('.lightbox-card'),
          { scale: 0.88, opacity: 0, y: 15 },
          { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
        )
      }
    }, 10)
  }

  function closeLightbox() {
    if (lightboxRef.current) {
      gsap.to(lightboxRef.current.querySelector('.lightbox-card'), {
        scale: 0.9,
        opacity: 0,
        y: 10,
        duration: 0.25,
        ease: 'power2.in',
        onComplete: () => setActivePhotoIndex(null),
      })
    } else {
      setActivePhotoIndex(null)
    }
  }

  function nextPhoto() {
    if (activePhotoIndex === null) return
    const nextIdx = (activePhotoIndex + 1) % photos.length
    
    // Quick fade effect between photos
    gsap.to(lightboxRef.current.querySelector('.lightbox-content'), {
      opacity: 0,
      x: -12,
      duration: 0.18,
      ease: 'power2.in',
      onComplete: () => {
        setActivePhotoIndex(nextIdx)
        gsap.fromTo(
          lightboxRef.current.querySelector('.lightbox-content'),
          { opacity: 0, x: 12 },
          { opacity: 1, x: 0, duration: 0.25, ease: 'power2.out' }
        )
      }
    })
  }

  function prevPhoto() {
    if (activePhotoIndex === null) return
    const prevIdx = (activePhotoIndex - 1 + photos.length) % photos.length

    // Quick fade effect between photos
    gsap.to(lightboxRef.current.querySelector('.lightbox-content'), {
      opacity: 0,
      x: 12,
      duration: 0.18,
      ease: 'power2.in',
      onComplete: () => {
        setActivePhotoIndex(prevIdx)
        gsap.fromTo(
          lightboxRef.current.querySelector('.lightbox-content'),
          { opacity: 0, x: -12 },
          { opacity: 1, x: 0, duration: 0.25, ease: 'power2.out' }
        )
      }
    })
  }

  // Handle keyboard inputs for Lightbox
  useEffect(() => {
    if (activePhotoIndex === null) return

    function handleKeyDown(e) {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextPhoto()
      if (e.key === 'ArrowLeft') prevPhoto()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePhotoIndex])

  return (
    <section ref={rootRef} className="pt-4 sm:pt-6">
      <div className="mb-6 sm:mb-8">
        <h1 className="m-0 text-[clamp(28px,4.2vw,44px)] tracking-[-0.03em] font-extrabold text-[#3d132c]">
          Photo Gallery <span aria-hidden="true">💕</span>
        </h1>
        <p className="mt-2 text-[#2a1020]/70 text-[15px] sm:text-[16px] font-medium">
          A visual journey of our love—captured in moments, held forever in my heart.
        </p>
      </div>

      {/* Polaroid Grid */}
      <div className="grid grid-cols-12 gap-5" role="list">
        {photos.map((p, idx) => (
          <article
            key={`${p.caption}-${idx}`}
            onClick={() => openLightbox(idx)}
            className="group col-span-12 sm:col-span-6 md:col-span-4 flex flex-col h-full transform-gpu transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_35px_rgba(255,80,150,0.12)] cursor-pointer glass-panel p-3.5 rounded-[22px]"
            role="listitem"
            ref={(el) => {
              itemRefs.current[idx] = el
            }}
          >
            {/* Polaroid frame image wrapper */}
            <div className="relative rounded-[14px] overflow-hidden flex-1 aspect-[4/3] flex items-center justify-center border border-rose-100/40 bg-rose-50/10">
              <ImageWithSkeleton
                src={p.src}
                alt={p.caption}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />

              {/* Pulsing overlay icon */}
              <div
                className="absolute inset-0 bg-[#2a1020]/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100 grid place-items-center"
                aria-hidden="true"
              >
                <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm grid place-items-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <span className="text-[24px]">🔍</span>
                </div>
              </div>
            </div>

            {/* Polaroid handwritten-style caption */}
            <div className="px-2 pt-3.5 pb-1 text-center font-bold tracking-tight text-[#4a1230]/90 text-[15px]">
              {p.caption}
            </div>
          </article>
        ))}
      </div>

      {/* Glassmorphic Polaroid Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-[#2a1020]/45 backdrop-blur-lg transition-opacity duration-300"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          {/* Polaroid Frame Container */}
          <div
            className="lightbox-card relative w-full max-w-[580px] bg-white border border-white/90 shadow-[0_25px_60px_rgba(0,0,0,0.35)] rounded-[24px] p-4 sm:p-5 flex flex-col items-center text-center transform-gpu transition-all duration-400"
            onClick={(e) => e.stopPropagation()} // Stop closing on clicking inside the card
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-500 hover:text-rose-700 font-bold text-[14px] flex items-center justify-center transition-colors border border-rose-100/50 shadow-sm z-55"
              aria-label="Close lightbox"
            >
              ✕
            </button>

            {/* Lightbox content (swaps with animation) */}
            <div className="lightbox-content w-full flex flex-col items-center">
              {/* Photo Frame */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-inner border border-rose-50/50 bg-rose-50/30 max-h-[360px] flex items-center justify-center">
                <img
                  src={photos[activePhotoIndex].src}
                  alt={photos[activePhotoIndex].caption}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Memory Identifier */}
              <span className="accent-script block text-pink-500 mt-4 text-[42px] leading-none select-none">
                Memory #{activePhotoIndex + 1}
              </span>

              {/* Polaroid Short Caption */}
              <h2 className="m-0 mt-1 font-bold text-[18px] text-[#4a1230] leading-tight">
                {photos[activePhotoIndex].caption}
              </h2>

              {/* Extended Heartfelt description */}
              <p className="mt-3.5 text-sm sm:text-[15px] leading-relaxed text-[#2a1020]/80 font-medium px-2 max-w-[46ch] min-h-[72px]">
                {photos[activePhotoIndex].description}
              </p>
            </div>

            {/* Navigation Handles */}
            <div className="w-full flex items-center justify-between mt-5 border-t border-rose-100/50 pt-4 px-2">
              <button
                onClick={prevPhoto}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-600 font-extrabold text-xs transition-colors border border-rose-100/40"
              >
                ◀ Previous
              </button>
              
              <span className="text-xs font-bold text-rose-400/80">
                {activePhotoIndex + 1} / {photos.length}
              </span>

              <button
                onClick={nextPhoto}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-600 font-extrabold text-xs transition-colors border border-rose-100/40"
              >
                Next ▶
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
