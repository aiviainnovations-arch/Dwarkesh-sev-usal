import { useEffect, useRef, useState } from 'react'

type Props = {
  src: string
  poster: string
  className?: string
  /** Hero video should load eagerly since it's above the fold; others lazy-load. */
  eager?: boolean
  overlayClassName?: string
}

/**
 * Full-bleed background video: autoplay, muted, looped, inline (no controls).
 * - Lazy-loads via IntersectionObserver so off-screen sections don't cost bandwidth.
 * - Falls back to a static poster image on very slow connections or when the
 *   viewer prefers reduced motion, so nobody is stuck staring at a blank box.
 */
export default function VideoBackground({ src, poster, className = '', eager = false, overlayClassName }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(eager)
  const [useStaticFallback, setUseStaticFallback] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const nav = navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }
    const saveData = nav.connection?.saveData
    const slowConnection = nav.connection?.effectiveType === '2g' || nav.connection?.effectiveType === 'slow-2g'

    if (prefersReducedMotion || saveData || slowConnection) {
      setUseStaticFallback(true)
      return
    }

    if (eager) return

    const el = containerRef.current
    if (!el || !('IntersectionObserver' in window)) {
      setShouldLoad(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [eager])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {useStaticFallback || !shouldLoad ? (
        <img
          src={poster}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading={eager ? 'eager' : 'lazy'}
        />
      ) : (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload={eager ? 'auto' : 'metadata'}
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      {overlayClassName && <div className={`absolute inset-0 ${overlayClassName}`} />}
    </div>
  )
}
