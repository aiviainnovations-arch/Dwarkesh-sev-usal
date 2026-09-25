type Props = {
  variant?: 'light' | 'dark'
  className?: string
}

/**
 * No logo file was included in the supplied assets, so this is a typographic
 * wordmark plus a simple bowl/steam line-icon in the brand's red/gold palette -
 * NOT an invented replacement logo. Swap this component's contents for an
 * <img src="/images/logo.png" /> the moment a real logo file is available
 * (see README.md "Adding your real logo").
 */
export default function Logo({ variant = 'dark', className = '' }: Props) {
  const textColor = variant === 'light' ? 'text-white' : 'text-brand-burgundyDark'
  const subColor = variant === 'light' ? 'text-brand-gold' : 'text-brand-red'

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <circle cx="32" cy="32" r="31" stroke="#FFD000" strokeWidth="1.5" />
        <path
          d="M16 30h32a2 2 0 0 1 2 2c0 9.94-9.4 18-20 18s-20-8.06-20-18a2 2 0 0 1 2-2Z"
          fill={variant === 'light' ? '#FFD000' : '#E30613'}
        />
        <path
          d="M20 30c0-4 3-7 6-9M32 30c0-5 3.5-8 4-12M42 30c0-4-2-6-2.5-9"
          stroke={variant === 'light' ? '#fff' : '#5C0A10'}
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <div className="leading-tight">
        <div className={`font-display text-lg font-semibold tracking-tight ${textColor}`}>
          Dwarkesh
        </div>
        <div className={`-mt-1 font-body text-[10px] font-bold uppercase tracking-[0.3em] ${subColor}`}>
          Sev Usal
        </div>
      </div>
    </div>
  )
}
