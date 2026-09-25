// Central place for real restaurant information.
// Edit values here to update phone numbers, address or nav links across the whole site.

export const SITE = {
  name: 'Dwarkesh Sev Usal',
  tagline: 'Authentic Gujarati Taste',
  description:
    'Traditional Gujarati taste, presented through a modern premium experience. Made fresh. Served with heart.',
  phones: ['9722654369', '8320651753'],
  address: {
    line1: '1st Floor, 45 Aakashdeep Society,',
    line2: 'Opp Post Office, High Tension Road,',
    line3: 'Subhanpura, Vadodara - 390023',
    full: '1st Floor, 45 Aakashdeep Society, Opp Post Office, High Tension Road, Subhanpura, Vadodara - 390023',
  },
  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    whatsapp: 'https://wa.me/919722654369',
    maps: 'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent(
        '1st Floor, 45 Aakashdeep Society, Opp Post Office, High Tension Road, Subhanpura, Vadodara - 390023'
      ),
  },
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Story', href: '#story' },
  { label: 'Signature', href: '#signature' },
  { label: 'Menu', href: '#menu' },
  { label: 'Franchise', href: '#franchise' },
  { label: 'Location', href: '#location' },
]

export function telHref(number: string) {
  return `tel:+91${number}`
}

export function whatsappHref(number: string, message = "Hi Dwarkesh Sev Usal, I'd like to know more.") {
  return `https://wa.me/91${number}?text=${encodeURIComponent(message)}`
}
