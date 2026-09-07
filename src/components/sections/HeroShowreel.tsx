import { useRef, useState, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Pause, Play, Volume2, VolumeX } from 'lucide-react'
import { SyncWaveform } from '@/components/ui/SyncWaveform'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import type { HeroContent } from '@/types/content'

interface HeroShowreelProps {
  hero: HeroContent
}

/**
 * Editorial showreel treatment: a real video when hero.videoSrc is set
 * (muted autoplay preview, with visible play/pause + mute controls and a
 * poster fallback), or the original waveform art as a placeholder when no
 * footage has been added yet.
 */
export function HeroShowreel({ hero }: HeroShowreelProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const reducedMotion = useReducedMotion()
  const [playing, setPlaying] = useState(!reducedMotion)
  const [muted, setMuted] = useState(true)
  const hasVideo = Boolean(hero.videoSrc)

  // Cursor-aware tilt on desktop only — mouseX/mouseY stay at 0 (no tilt)
  // whenever reduced motion is preferred, since handleMouseMove no-ops.
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 150, damping: 20, mass: 0.5 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 150, damping: 20, mass: 0.5 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setPlaying(true)
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="group relative aspect-video w-full overflow-hidden border border-line"
    >
      {hasVideo ? (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          poster={hero.posterSrc || undefined}
          muted={muted}
          loop
          playsInline
          autoPlay={!reducedMotion}
          preload="metadata"
        >
          <source src={hero.videoSrc} />
        </video>
      ) : (
        <SyncWaveform />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-paper/60 via-transparent to-transparent" />

      {hasVideo ? (
        <div className="absolute bottom-4 left-4 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 sm:bottom-6 sm:left-6">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? 'Pause showreel' : 'Play showreel'}
            className="flex h-11 w-11 items-center justify-center border border-line/70 bg-paper/70 text-ink backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
          >
            {playing ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
          </button>
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? 'Unmute showreel' : 'Mute showreel'}
            className="flex h-11 w-11 items-center justify-center border border-line/70 bg-paper/70 text-ink backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
          >
            {muted ? <VolumeX className="h-4 w-4" aria-hidden="true" /> : <Volume2 className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      ) : (
        <span className="absolute bottom-4 left-4 font-sans text-xs uppercase tracking-[0.14em] text-muted sm:bottom-6 sm:left-6">
          Showreel — add video source
        </span>
      )}
    </motion.div>
  )
}
