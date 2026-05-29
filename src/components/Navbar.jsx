import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function Navbar() {
  const location = useLocation()
  const indicatorRef = useRef(null)
  const navRef = useRef(null)

  const items = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/message', label: 'Our Letter', icon: '💌' },
    { path: '/pictures', label: 'Memories', icon: '📸' },
  ]

  useEffect(() => {
    const navEl = navRef.current
    const indicatorEl = indicatorRef.current
    if (!navEl || !indicatorEl) return

    // Find the active link
    const activeLink = navEl.querySelector('.active-nav-link')
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink
      gsap.to(indicatorEl, {
        left: offsetLeft,
        width: offsetWidth,
        duration: 0.45,
        ease: 'power3.out',
      })
    }
  }, [location.pathname])

  return (
    <nav
      ref={navRef}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] flex items-center justify-between glass-panel px-3.5 py-2.5 rounded-full w-[90%] max-w-[390px] border border-white/60 shadow-[0_20px_40px_rgba(255,100,160,0.18)]"
      aria-label="Secondary navigation"
    >
      {/* Active Indicator Bubble */}
      <div
        ref={indicatorRef}
        className="absolute top-2 bottom-2 bg-gradient-to-r from-rose-100 to-pink-200/90 rounded-full z-0 pointer-events-none border border-white/30"
        style={{ left: 0, width: 0 }}
      />

      {items.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `relative z-10 flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-bold tracking-tight text-[#4a1230]/75 transition-colors duration-250 select-none hover:text-[#2a0518] ${
              isActive ? 'active-nav-link text-rose-700 font-extrabold' : ''
            }`
          }
        >
          <span className="text-[17px]" aria-hidden="true">
            {item.icon}
          </span>
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
