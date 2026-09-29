import { motion } from 'framer-motion'
import VideoBackground from './VideoBackground'

export default function CinematicExperience() {
  return (
    <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden bg-brand-burgundyDark">
    <VideoBackground
      src={`${import.meta.env.BASE_URL}videos/cinematic-sev-pour.mp4`}
      poster={`${import.meta.env.BASE_URL}images/poster-cinematic.jpg`}
      className="h-full w-full"
    />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-burgundyDark/70 via-brand-burgundyDark/20 to-brand-burgundyDark/80" />
      <div className="grain-overlay" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9 }}
          className="font-display text-3xl font-medium italic text-white sm:text-5xl"
        >
          The flavour you crave.
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-2 font-display text-3xl font-medium text-brand-gold sm:text-5xl"
        >
          The taste you remember.
        </motion.h2>
      </div>
    </section>
  )
}
