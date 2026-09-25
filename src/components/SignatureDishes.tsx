import SectionReveal from './SectionReveal'
import DishCard from './DishCard'
import { SIGNATURE_DISHES } from '../data/menu'

export default function SignatureDishes() {
  return (
    <section id="signature" className="bg-brand-burgundyDark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionReveal className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-gold">Fan Favourites</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Signature Dishes
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/70">
            A few of the bowls and glasses people keep coming back for.
          </p>
        </SectionReveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SIGNATURE_DISHES.map((dish, i) => (
            <SectionReveal key={dish.id} delay={i * 0.08}>
              <DishCard dish={dish} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
