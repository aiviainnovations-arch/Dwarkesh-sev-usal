import { MessageCircle, Phone, ShoppingBag } from 'lucide-react'
import { SITE, telHref } from '../data/site'

export default function MobileStickyBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-gold/40 bg-brand-burgundyDark/98 backdrop-blur lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="grid grid-cols-3 divide-x divide-white/10">
        <a href="#contact" className="flex flex-col items-center gap-1 py-3 text-white">
          <ShoppingBag size={18} className="text-brand-gold" />
          <span className="text-[11px] font-bold uppercase tracking-wide">Order Now</span>
        </a>
        <a href={SITE.social.whatsapp} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 py-3 text-white">
          <MessageCircle size={18} className="text-brand-gold" />
          <span className="text-[11px] font-bold uppercase tracking-wide">WhatsApp</span>
        </a>
        <a href={telHref(SITE.phones[0])} className="flex flex-col items-center gap-1 py-3 text-white">
          <Phone size={18} className="text-brand-gold" />
          <span className="text-[11px] font-bold uppercase tracking-wide">Call</span>
        </a>
      </div>
    </div>
  )
}
