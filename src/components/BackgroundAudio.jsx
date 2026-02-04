import { useEffect, useRef } from 'react'
import sound from '../assets/Sound/sound.mp3'

export function BackgroundAudio() {
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = new Audio(sound)
    audio.loop = true
    audioRef.current = audio

    const handleVisibility = () => {
      if (!audioRef.current) return

      if (document.visibilityState === 'visible') {
        audioRef.current
          .play()
          .catch(() => {
            // autoplay might be blocked until user interacts; ignore errors
          })
      } else {
        audioRef.current.pause()
      }
    }

    document.addEventListener('visibilitychange', handleVisibility)

    // attempt initial play on mount
    handleVisibility()

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility)
      audioRef.current?.pause()
      audioRef.current = null
    }
  }, [])

  return null
}

