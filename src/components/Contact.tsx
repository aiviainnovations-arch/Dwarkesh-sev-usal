import { MessageCircle, Navigation, Phone, ShoppingBag } from 'lucide-react'
import SectionReveal from './SectionReveal'
import Button from './Button'
import { SITE, telHref, whatsappHref } from '../data/site'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-red-gradient py-24 sm:py-28">
      <div className="grain-overlay" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-gold/20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-10">
        <SectionReveal>
          <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Come taste Gujarat
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-white/85">
            Order for pickup, ask us a question, or just say hello - we're one message away.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={whatsappHref(SITE.phones[0], 'Hi, I\'d like to place an order.')} variant="gold" icon={<ShoppingBag size={16} />}>
              Order Now
            </Button>
            <Button href={telHref(SITE.phones[0])} variant="ghost" icon={<Phone size={16} />}>
              Call Us
            </Button>
            <Button href={SITE.social.whatsapp} variant="ghost" icon={<MessageCircle size={16} />}>
              WhatsApp
            </Button>
            <Button href={SITE.social.maps} variant="ghost" icon={<Navigation size={16} />}>
              Get Directions
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-white/90">
            {SITE.phones.map((phone) => (
              <a key={phone} href={telHref(phone)} className="hover:text-brand-gold">
                {phone}
              </a>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
