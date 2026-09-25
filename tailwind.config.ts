import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette derived from Dwarkesh Sev Usal identity
        brand: {
          red: '#E30613',
          redDeep: '#B8050F',
          burgundy: '#5C0A10',
          burgundyDark: '#2E0508',
          gold: '#FFD000',
          goldSoft: '#F2C14E',
          cream: '#FBF6EC',
          ink: '#1A0E0A',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      backgroundImage: {
        'burgundy-gradient':
          'linear-gradient(160deg, #2E0508 0%, #5C0A10 45%, #8B0000 100%)',
        'red-gradient': 'linear-gradient(135deg, #E30613 0%, #B8050F 100%)',
        'gold-line':
          'linear-gradient(90deg, transparent, #FFD000 50%, transparent)',
      },
      boxShadow: {
        gold: '0 0 0 1px rgba(255,208,0,0.35)',
        card: '0 20px 60px -20px rgba(46,5,8,0.45)',
      },
      animation: {
        steam: 'steam 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        steam: {
          '0%, 100%': { transform: 'translateY(0) scaleX(1)', opacity: '0.35' },
          '50%': { transform: 'translateY(-14px) scaleX(1.08)', opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
