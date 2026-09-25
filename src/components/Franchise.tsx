import { useState, type FormEvent } from 'react'
import { Phone, Send } from 'lucide-react'
import SectionReveal from './SectionReveal'
import { SITE, telHref } from '../data/site'

const INVESTMENT_RANGES = ['Under ₹5 Lakh', '₹5 - 10 Lakh', '₹10 - 20 Lakh', '₹20 Lakh+']

export default function Franchise() {
  const [form, setForm] = useState({ name: '', mobile: '', city: '', investment: INVESTMENT_RANGES[0], message: '' })
  const [sent, setSent] = useState(false)

  function update(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const text = [
      'Franchise Enquiry - Dwarkesh Sev Usal',
      `Name: ${form.name}`,
      `Mobile: ${form.mobile}`,
      `City: ${form.city}`,
      `Investment Range: ${form.investment}`,
      form.message ? `Message: ${form.message}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    window.open(`https://wa.me/91${SITE.phones[0]}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <section id="franchise" className="relative overflow-hidden bg-burgundy-gradient py-24 sm:py-32">
      <div className="grain-overlay" />
      {/* Decorative gold motif lines, inspired by the restaurant's print branding */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-brand-gold to-transparent" />
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-brand-gold to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:px-16">
        <SectionReveal>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-gold">Franchise Support</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Bring Dwarkesh to your city
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/75">
            Join hands with us and be a part of our growing success.
          </p>

          <div className="mt-10 space-y-3 border-l-2 border-brand-gold/40 pl-5">
            {SITE.phones.map((phone) => (
              <a key={phone} href={telHref(phone)} className="flex items-center gap-3 text-white/90 hover:text-brand-gold">
                <Phone size={16} className="text-brand-gold" />
                <span className="font-semibold tracking-wide">{phone}</span>
              </a>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-brand-gold/40 bg-white/[0.06] p-7 backdrop-blur-sm sm:p-9"
          >
            {sent && (
              <div className="mb-5 rounded-xl bg-brand-gold/15 px-4 py-3 text-sm text-brand-gold">
                Thanks! WhatsApp should have opened with your enquiry ready to send.
              </div>
            )}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/70">
                Name
                <input
                  required
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-brand-gold"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/70">
                Mobile Number
                <input
                  required
                  type="tel"
                  pattern="[0-9]{10}"
                  value={form.mobile}
                  onChange={(e) => update('mobile', e.target.value)}
                  className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-brand-gold"
                  placeholder="10-digit mobile"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/70">
                City
                <input
                  required
                  value={form.city}
                  onChange={(e) => update('city', e.target.value)}
                  className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-brand-gold"
                  placeholder="Your city"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/70">
                Investment Range
                <select
                  value={form.investment}
                  onChange={(e) => update('investment', e.target.value)}
                  className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none focus:border-brand-gold [&>option]:text-brand-ink"
                >
                  {INVESTMENT_RANGES.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/70 sm:col-span-2">
                Message
                <textarea
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  rows={3}
                  className="resize-none rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-brand-gold"
                  placeholder="Tell us a little about your enquiry"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-gold to-brand-goldSoft px-6 py-4 text-sm font-bold uppercase tracking-wider text-brand-burgundyDark transition-transform hover:-translate-y-0.5"
            >
              Submit Franchise Enquiry
              <Send size={16} />
            </button>
            <p className="mt-3 text-center text-[11px] text-white/50">
              Submitting opens WhatsApp with your details filled in, ready to send to our team.
            </p>
          </form>
        </SectionReveal>
      </div>
    </section>
  )
}
