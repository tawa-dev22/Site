import React, { createContext, useCallback, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'

const TransitionContext = createContext({
  setPageEl: () => {},
  playExit: async () => {},
  isTransitioning: false,
})

export function TransitionProvider({ children }) {
  const pageElRef = useRef(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const setPageEl = useCallback((el) => {
    pageElRef.current = el
  }, [])

  const playExit = useCallback(async () => {
    const el = pageElRef.current
    if (!el || isTransitioning) return

    setIsTransitioning(true)

    await new Promise((resolve) => {
      gsap.killTweensOf(el)
      gsap
        .timeline({
          defaults: { ease: 'power2.inOut', duration: 0.35 },
          onComplete: resolve,
        })
        .to(el, { opacity: 0, y: 10, filter: 'blur(6px)' }, 0)
    })

    setIsTransitioning(false)
  }, [isTransitioning])

  const value = useMemo(
    () => ({
      setPageEl,
      playExit,
      isTransitioning,
    }),
    [setPageEl, playExit, isTransitioning],
  )

  return <TransitionContext.Provider value={value}>{children}</TransitionContext.Provider>
}

export function useTransition() {
  const ctx = React.useContext(TransitionContext)
  return ctx
}

