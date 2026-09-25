import { MapPin, Navigation, Phone } from 'lucide-react'
import SectionReveal from './SectionReveal'
import Button from './Button'
import { SITE, telHref } from '../data/site'

export default function Location() {
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(SITE.address.full)}&output=embed`

  return (
    <section id="location" className="bg-brand-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionReveal className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-red">Find Us</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-brand-burgundyDark sm:text-5xl">
            Visit Dwarkesh
          </h2>
        </SectionReveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <SectionReveal delay={0.1} className="lg:col-span-3">
            <div className="overflow-hidden rounded-3xl shadow-card">
              <iframe
                title="Dwarkesh Sev Usal location on Google Maps"
                src={mapEmbedSrc}
                className="h-[360px] w-full sm:h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2} className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-3xl bg-white p-8 shadow-card">
              <div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 flex-shrink-0 text-brand-red" size={22} />
                  <p className="text-[15px] leading-relaxed text-brand-ink/80">
                    {SITE.address.line1}
                    <br />
                    {SITE.address.line2}
                    <br />
                    {SITE.address.line3}
                  </p>
                </div>

                <div className="mt-6 space-y-2 border-t border-brand-ink/10 pt-6">
                  {SITE.phones.map((phone) => (
                    <a
                      key={phone}
                      href={telHref(phone)}
                      className="flex items-center gap-3 text-sm font-semibold text-brand-ink/80 hover:text-brand-red"
                    >
                      <Phone size={16} className="text-brand-red" />
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <Button href={SITE.social.maps} variant="primary" icon={<Navigation size={16} />}>
                  Get Directions
                </Button>
                <Button href={telHref(SITE.phones[0])} variant="outline">
                  Call Now
                </Button>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
