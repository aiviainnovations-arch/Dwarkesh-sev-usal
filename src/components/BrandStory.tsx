import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'
import VideoBackground from './VideoBackground'

export default function BrandStory() {
  return (
    <section id="story" className="relative overflow-hidden bg-brand-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 sm:px-10 lg:grid-cols-2 lg:px-16">
        <SectionReveal>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-red">Our Story</p>
          <h2 className="mt-4 max-w-md text-4xl font-semibold leading-tight text-brand-burgundyDark sm:text-5xl">
            The taste of Gujarat
          </h2>
          <div className="mt-6 max-w-md space-y-4 text-[15px] leading-relaxed text-brand-ink/80">
            <p>
              Dwarkesh Sev Usal is built around one idea: authentic Gujarati flavour, cooked fresh
              and served warm, the way it's meant to be. Crisp sev, a spiced usal gravy simmered
              slow, and toppings finished right before the bowl reaches you.
            </p>
            <p>
              No shortcuts, no compromises - just the comfort of home-style Gujarati cooking,
              presented with a little extra care.
            </p>
          </div>
          <div className="mt-8 gold-divider max-w-[120px]" />
        </SectionReveal>

        <SectionReveal delay={0.15} className="relative">
          <div className="relative mx-auto max-w-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden rounded-[28px] shadow-card"
            >
              <img
                src="/images/butter-sev-usal.jpg"
                alt="Butter Sev Usal at Dwarkesh Sev Usal, topped with melted butter, cheese and spring onion"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Overlapping inline video accent - macro butter/cheese melt */}
            <motion.div
              initial={{ opacity: 0, x: 24, y: 24 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-8 -right-6 w-40 overflow-hidden rounded-2xl border-4 border-brand-cream shadow-card sm:w-52"
            >
              <VideoBackground
                src="/videos/macro-butter-melt.mp4"
                poster="/images/poster-macro.jpg"
                className="aspect-square w-full"
              />
            </motion.div>

            <div className="absolute -left-6 -top-6 h-16 w-16 rounded-full border-2 border-brand-gold/50" />
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
