import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import VideoBackground from './VideoBackground'
import Button from './Button'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Subtle cinematic parallax: the video breathes and drifts slightly as you scroll,
  // rather than staying perfectly static - this is the one bold motion moment of the page.
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.18])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="home" ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-brand-burgundyDark">
      <motion.div style={{ scale: videoScale }} className="absolute inset-0">
        <VideoBackground
          {/* src="/videos/hero-sev-usal.mp4"
          poster="/images/poster-hero.jpg" */}
        src={`${import.meta.env.BASE_URL}videos/hero-sev-usal.mp4`}
        poster={`${import.meta.env.BASE_URL}images/poster-hero.jpg`}
          className="h-full w-full"
          eager
        />
      </motion.div>

      {/* Cinematic colour grade: burgundy gradient + darken for legible type */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundyDark via-brand-burgundyDark/40 to-brand-burgundyDark/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-burgundyDark/70 via-transparent to-transparent" />
      <div className="grain-overlay" />

      {/* Floating steam wisps - pure CSS, no distracting motion */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
        <div className="mt-16 h-40 w-24 animate-steam rounded-full bg-white/10 blur-2xl" />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col items-start justify-end gap-6 px-6 pb-28 sm:px-10 sm:pb-32 lg:px-16"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xs font-bold uppercase tracking-[0.4em] text-brand-gold"
        >
          Subhanpura, Vadodara
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-3xl font-display text-6xl font-semibold leading-[0.95] text-white sm:text-7xl lg:text-8xl"
        >
          Dwarkesh
          <br />
          <span className="text-brand-gold">Sev Usal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="max-w-md font-body text-base font-medium text-white/85 sm:text-lg"
        >
          Authentic Gujarati taste. Made fresh. Served with heart.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex flex-wrap gap-4 pt-2"
        >
          <Button href="#contact" variant="primary">
            Order Now
          </Button>
          <Button href="#menu" variant="ghost">
            Explore Menu
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#story"
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/80"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  )
}
