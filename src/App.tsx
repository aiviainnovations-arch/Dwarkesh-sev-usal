import Navbar from './components/Navbar'
import MobileStickyBar from './components/MobileStickyBar'
import Hero from './components/Hero'
import BrandStory from './components/BrandStory'
import SignatureDishes from './components/SignatureDishes'
import Menu from './components/Menu'
import WhyDwarkesh from './components/WhyDwarkesh'
import CinematicExperience from './components/CinematicExperience'
import Franchise from './components/Franchise'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-white px-5 py-3 text-sm font-bold text-brand-burgundyDark transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <BrandStory />
        <SignatureDishes />
        <Menu />
        <WhyDwarkesh />
        <CinematicExperience />
        <Franchise />
        <Location />
        <Contact />
      </main>
      <Footer />
      <MobileStickyBar />
      {/* Spacer so the sticky mobile bar never overlaps footer content */}
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </div>
  )
}
