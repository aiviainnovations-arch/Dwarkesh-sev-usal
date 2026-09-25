import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu as MenuIcon, X, Phone } from 'lucide-react'
import Logo from './Logo'
import { NAV_LINKS, SITE, telHref } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-brand-cream/95 shadow-[0_4px_24px_rgba(46,5,8,0.08)] backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#home" aria-label="Dwarkesh Sev Usal home">
          <Logo variant={scrolled ? 'dark' : 'light'} />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                scrolled ? 'text-brand-ink hover:text-brand-red' : 'text-white/90 hover:text-brand-gold'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={telHref(SITE.phones[0])}
            className={`flex items-center gap-2 text-sm font-bold ${
              scrolled ? 'text-brand-burgundy' : 'text-white'
            }`}
          >
            <Phone size={16} />
            {SITE.phones[0]}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-red-gradient px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white shadow-[0_8px_24px_-6px_rgba(227,6,19,0.6)] transition-transform hover:-translate-y-0.5"
          >
            Order Now
          </a>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className={`grid h-10 w-10 place-items-center rounded-full lg:hidden ${
            scrolled ? 'text-brand-ink' : 'text-white'
          }`}
        >
          {open ? <X /> : <MenuIcon />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-brand-cream lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 pb-5 pt-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-wide text-brand-ink hover:bg-brand-red/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-red-gradient px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-white"
              >
                Order Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
