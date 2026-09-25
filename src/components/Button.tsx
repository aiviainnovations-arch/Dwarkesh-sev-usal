import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
  children: ReactNode
  href: string
  variant?: 'primary' | 'gold' | 'ghost' | 'outline'
  icon?: ReactNode
  className?: string
  onClick?: () => void
}

const VARIANTS: Record<string, string> = {
  primary:
    'bg-red-gradient text-white shadow-[0_10px_30px_-8px_rgba(227,6,19,0.55)] hover:shadow-[0_14px_36px_-8px_rgba(227,6,19,0.7)]',
  gold:
    'bg-gradient-to-r from-brand-gold to-brand-goldSoft text-brand-burgundyDark shadow-[0_10px_30px_-8px_rgba(255,208,0,0.5)]',
  ghost: 'bg-white/10 text-white border border-white/30 backdrop-blur-sm hover:bg-white/20',
  outline: 'border border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-white',
}

export default function Button({ children, href, variant = 'primary', icon, className = '', onClick }: Props) {
  const isExternal = href.startsWith('http')

  return (
    <motion.a
      href={href}
      onClick={onClick}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wider transition-shadow ${VARIANTS[variant]} ${className}`}
    >
      {icon}
      {children}
    </motion.a>
  )
}
