import { Facebook, Instagram, MapPin, MessageCircle } from 'lucide-react'
import Logo from './Logo'
import { NAV_LINKS, SITE, telHref } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-brand-burgundyDark pt-16">
      <div className="mx-auto max-w-7xl px-6 pb-10 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Authentic Gujarati taste - made fresh, served with heart.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/70 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="text-sm text-white/70 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {SITE.phones.map((phone) => (
                <li key={phone}>
                  <a href={telHref(phone)} className="hover:text-white">
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">Address</h3>
            <p className="mt-4 flex gap-2 text-sm leading-relaxed text-white/70">
              <MapPin size={16} className="mt-0.5 flex-shrink-0 text-brand-gold" />
              <span>
                {SITE.address.line1} {SITE.address.line2} {SITE.address.line3}
              </span>
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 hover:border-brand-gold hover:text-brand-gold"
              >
                <Instagram size={16} />
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 hover:border-brand-gold hover:text-brand-gold"
              >
                <Facebook size={16} />
              </a>
              <a
                href={SITE.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 hover:border-brand-gold hover:text-brand-gold"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={SITE.social.maps}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 hover:border-brand-gold hover:text-brand-gold"
              >
                <MapPin size={16} />
              </a>
            </div>
          </div>
        </div>

        <p className="py-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Dwarkesh Sev Usal. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
