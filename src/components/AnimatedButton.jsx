import { forwardRef } from 'react'

export const AnimatedButton = forwardRef(function AnimatedButton(
  { variant = 'primary', className = '', children, ...props },
  ref,
) {
  const base =
    'group relative inline-flex items-center justify-center rounded-full px-[18px] py-3 font-extrabold text-[16px] ' +
    'tracking-[-0.01em] shadow-[0_16px_40px_rgba(255,60,134,0.18)] transform-gpu ' +
    'transition-[transform,box-shadow,filter] duration-150 overflow-hidden ' +
    'hover:-translate-y-px hover:shadow-[0_22px_55px_rgba(255,60,134,0.22)] active:translate-y-px active:scale-[0.99]'

  const variants = {
    primary: 'bg-white/75 border border-white/85 text-[#2a1020]/90',
    yes: 'bg-gradient-to-br from-[rgba(255,87,136,0.92)] to-[rgba(255,201,215,0.86)] text-[#2a0a14]/95',
    no: 'bg-gradient-to-br from-white/70 to-[rgba(255,235,242,0.85)] border border-white/90 text-[#2a1020]/90',
  }

  return (
    <button
      ref={ref}
      className={[base, variants[variant] || variants.primary, className].filter(Boolean).join(' ')}
      type="button"
      {...props}
    >
      <span
        className="pointer-events-none absolute -inset-[40%] opacity-0 transition-[opacity,transform] duration-300
        bg-[radial-gradient(closest-side,rgba(255,255,255,0.9),transparent_55%)]
        -translate-x-[40%] rotate-[20deg]
        group-hover:opacity-65 group-hover:translate-x-0"
        aria-hidden="true"
      />
      <span className="relative z-[1] inline-flex items-center gap-2">{children}</span>
    </button>
  )
})

