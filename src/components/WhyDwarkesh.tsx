import SectionReveal from './SectionReveal'

const points = [
  {
    title: 'Authentic Gujarati Taste',
    description: 'Recipes rooted in real Gujarati home cooking, not shortcuts.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
        <path
          d="M24 6c8 4 14 11 14 20a14 14 0 1 1-28 0c0-9 6-16 14-20Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M24 16v20M18 22c2 2 4 2 6 0M24 22c2 2 4 2 6 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Fresh & Hygienic',
    description: 'Ingredients prepped fresh and finished right before serving.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
        <path d="M24 6c6 7 11 14.5 11 21a11 11 0 1 1-22 0c0-6.5 5-14 11-21Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M18 30a6 6 0 0 0 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Made With Love',
    description: 'Every bowl finished by hand, the way it would be at home.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
        <path
          d="M24 38S8 28.5 8 18.5A8.5 8.5 0 0 1 24 14a8.5 8.5 0 0 1 16 4.5C40 28.5 24 38 24 38Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

export default function WhyDwarkesh() {
  return (
    <section className="relative overflow-hidden bg-burgundy-gradient py-24 sm:py-32">
      <div className="grain-overlay" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionReveal className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-gold">Why Dwarkesh</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            What makes it worth the visit
          </h2>
        </SectionReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {points.map((point, i) => (
            <SectionReveal key={point.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="text-brand-gold">{point.icon}</div>
                <h3 className="mt-6 font-display text-xl font-semibold text-white">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{point.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
