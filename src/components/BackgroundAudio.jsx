import { useEffect, useRef, useState } from 'react'
import sound from '../assets/Sound/sound.mp3'

export function BackgroundAudio() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPrompt, setShowPrompt] = useState(true)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    const audio = new Audio(sound)
    audio.loop = true
    audioRef.current = audio

    const handleVisibility = () => {
      if (!audioRef.current || isMuted) return

      if (document.visibilityState === 'visible') {
        if (isPlaying) {
          audioRef.current.play().catch(() => {
            setIsPlaying(false)
          })
        }
      } else {
        audioRef.current.pause()
      }
    }

    document.addEventListener('visibilitychange', handleVisibility)

    // Attempt initial autoplay on mount
    audio.play()
      .then(() => {
        setIsPlaying(true)
        setShowPrompt(false)
      })
      .catch(() => {
        // Autoplay blocked by browser (normal behavior)
        setIsPlaying(false)
        setShowPrompt(true)
      })

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility)
      audioRef.current?.pause()
      audioRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function togglePlay() {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      setIsMuted(true)
    } else {
      audio.play()
        .then(() => {
          setIsPlaying(true)
          setShowPrompt(false)
          setIsMuted(false)
        })
        .catch((err) => {
          console.error("Audio failed to play:", err)
        })
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2.5 pointer-events-none select-none">
      {/* Pulse Autoplay / Unmute Prompt */}
      {showPrompt && (
        <button
          onClick={togglePlay}
          className="pointer-events-auto cursor-pointer glass-panel px-3.5 py-1.5 rounded-xl text-xs font-bold text-rose-600 shadow-[0_10px_25px_rgba(255,80,150,0.22)] animate-bounce border border-rose-200/60"
        >
          Tap to Play Music 🎵
        </button>
      )}

      {/* Main Glassmorphic Music Controller */}
      <button
        onClick={togglePlay}
        className="pointer-events-auto cursor-pointer flex items-center gap-3 glass-panel p-2 rounded-full transition-all duration-350 hover:shadow-[0_16px_40px_rgba(255,100,160,0.22)] group max-w-[48px] hover:max-w-[170px] overflow-hidden"
        style={{
          boxShadow: isPlaying ? '0 16px_40px_rgba(255,100,160,0.25)' : ''
        }}
        title={isPlaying ? "Pause Music" : "Play Music"}
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        {/* Rotating Vinyl Record Graphic */}
        <div className="relative w-9 h-9 flex-shrink-0 flex items-center justify-center">
          {/* Black vinyl base with grooves */}
          <div
            className={`w-full h-full rounded-full bg-gradient-to-br from-[#1e0a15] via-[#331124] to-[#12040c] shadow-[0_4px_10px_rgba(0,0,0,0.25)] flex items-center justify-center border border-white/20 transition-transform duration-1000 ${
              isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''
            }`}
          >
            {/* Vinyl record shiny grooves */}
            <div className="absolute inset-0.5 rounded-full border border-[#ffe1ee]/5 opacity-40" />
            <div className="absolute inset-1.5 rounded-full border border-[#ffe1ee]/5 opacity-30" />
            <div className="absolute inset-2.5 rounded-full border border-[#ffe1ee]/5 opacity-20" />

            {/* Pink center label */}
            <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center border border-white/30">
              {/* Spindle hole */}
              <div className="w-1 h-1 rounded-full bg-white/90" />
            </div>
          </div>

          {/* Floating heart beat indicator */}
          <div
            className={`absolute -top-0.5 -right-0.5 text-[10px] filter drop-shadow-[0_2px_4px_rgba(255,80,150,0.3)] transition-transform duration-300 ${
              isPlaying ? 'animate-ping scale-110' : 'opacity-0 scale-75'
            }`}
          >
            💗
          </div>
        </div>

        {/* Collapsed label that slides open on hover */}
        <div className="flex flex-col items-start pr-2.5 opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 w-0 group-hover:w-[100px] pointer-events-none">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-rose-500/80 leading-none">
            {isPlaying ? 'Playing' : 'Paused'}
          </span>
          <span className="text-xs font-bold text-[#4a1230] truncate max-w-[85px] leading-tight">
            Our Song.mp3
          </span>
        </div>

        {/* Dancing Soundwave Bars */}
        <div className="flex items-end gap-[2px] h-3.5 pr-2 flex-shrink-0">
          <div
            className={`w-[2.5px] rounded-full bg-rose-400/90 transition-all duration-300 ${
              isPlaying ? 'animate-[bounce-bar_0.8s_ease-in-out_infinite_alternate]' : 'h-1'
            }`}
            style={{ height: isPlaying ? '14px' : '4px' }}
          />
          <div
            className={`w-[2.5px] rounded-full bg-pink-500 transition-all duration-300 ${
              isPlaying ? 'animate-[bounce-bar_0.6s_ease-in-out_infinite_alternate]' : 'h-1'
            }`}
            style={{ animationDelay: '0.15s', height: isPlaying ? '14px' : '4px' }}
          />
          <div
            className={`w-[2.5px] rounded-full bg-rose-500 transition-all duration-300 ${
              isPlaying ? 'animate-[bounce-bar_0.9s_ease-in-out_infinite_alternate]' : 'h-1'
            }`}
            style={{ animationDelay: '0.3s', height: isPlaying ? '14px' : '4px' }}
          />
          <div
            className={`w-[2.5px] rounded-full bg-rose-400/90 transition-all duration-300 ${
              isPlaying ? 'animate-[bounce-bar_0.7s_ease-in-out_infinite_alternate]' : 'h-1'
            }`}
            style={{ animationDelay: '0.45s', height: isPlaying ? '14px' : '4px' }}
          />
        </div>
      </button>

      {/* Styled JSX for keyframe animations (completely self-contained!) */}
      <style>{`
        @keyframes spin {
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes bounce-bar {
          0% {
            height: 4px;
          }
          100% {
            height: 14px;
          }
        }
      `}</style>
    </div>
  )
}
