import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionReveal from './SectionReveal'
import { MENU } from '../data/menu'
import { SITE, telHref, whatsappHref } from '../data/site'

export default function Menu() {
  const [activeId, setActiveId] = useState(MENU[0].id)
  const active = MENU.find((c) => c.id === activeId) ?? MENU[0]

  return (
    <section id="menu" className="bg-brand-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionReveal className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-red">The Menu</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-brand-burgundyDark sm:text-5xl">
            What's cooking today
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-ink/70">
            Pricing is confirmed in-store and over the phone. Call or WhatsApp us for today's
            rates.
          </p>
        </SectionReveal>

        {/* Sticky category pills */}
        <div className="sticky top-16 z-20 -mx-6 mt-10 overflow-x-auto scrollbar-thin bg-brand-cream/95 px-6 py-3 backdrop-blur sm:mx-0 sm:rounded-full sm:px-2">
          <div className="flex w-max gap-2 sm:w-auto sm:justify-center">
            {MENU.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveId(category.id)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors ${
                  activeId === category.id
                    ? 'bg-red-gradient text-white shadow-[0_8px_20px_-6px_rgba(227,6,19,0.5)]'
                    : 'bg-white text-brand-ink/70 hover:text-brand-red'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {active.dishes.map((dish) => (
              <div
                key={dish.id}
                className="flex gap-4 rounded-2xl bg-white p-4 shadow-[0_10px_30px_-16px_rgba(46,5,8,0.35)]"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="h-24 w-24 flex-shrink-0 rounded-xl object-cover"
                />
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-base font-semibold text-brand-burgundyDark">
                      {dish.name}
                    </h3>
                    {dish.tag && (
                      <span className="rounded-full bg-brand-gold/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-red">
                        {dish.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 flex-1 text-xs leading-relaxed text-brand-ink/65">
                    {dish.description}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-brand-red">{dish.price ?? 'Ask in-store'}</span>
                    <a
                      href={whatsappHref(SITE.phones[0], `Hi, I'd like to order ${dish.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-wide text-brand-burgundy hover:text-brand-red"
                    >
                      Order →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <p className="mt-10 text-center text-sm text-brand-ink/50">
          Looking for something else? Call us at{' '}
          <a href={telHref(SITE.phones[0])} className="font-semibold text-brand-red">
            {SITE.phones[0]}
          </a>{' '}
          - we'll be happy to help.
        </p>
      </div>
    </section>
  )
}
