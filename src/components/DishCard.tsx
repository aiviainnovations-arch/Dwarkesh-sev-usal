import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useTilt } from '../hooks/useTilt'
import type { Dish } from '../data/menu'
import { SITE, whatsappHref } from '../data/site'

export default function DishCard({ dish }: { dish: Dish }) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(6)

  return (
    <div className="tilt-wrap">
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        className="group relative overflow-hidden rounded-3xl bg-white shadow-card"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.img
            src={dish.image}
            alt={dish.name}
            loading="lazy"
            style={{ transform: 'translateZ(20px)' }}
            className="h-full w-full scale-105 object-cover transition-transform duration-500 group-hover:scale-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundyDark/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          {dish.tag && (
            <span className="absolute left-4 top-4 rounded-full bg-brand-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-burgundyDark">
              {dish.tag}
            </span>
          )}
        </div>

        <div className="p-6" style={{ transform: 'translateZ(30px)' }}>
          <h3 className="font-display text-xl font-semibold text-brand-burgundyDark">{dish.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">{dish.description}</p>

          <div className="mt-5 flex items-center justify-between border-t border-brand-ink/10 pt-4">
            <span className="text-sm font-semibold text-brand-red">
              {dish.price ?? 'Ask in-store'}
            </span>
            <a
              href={whatsappHref(SITE.phones[0], `Hi, I'd like to order ${dish.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-full bg-brand-burgundyDark px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition-colors group-hover:bg-brand-red"
            >
              Order
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
