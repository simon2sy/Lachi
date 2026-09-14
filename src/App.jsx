import { useState, useEffect, useRef, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import AOS from 'aos'
import 'aos/dist/aos.css'
import SEO from './components/SEO'
import Header from './components/Header'
import Hero from './components/Hero'
import Promo from './components/Promo'
import About from './components/About'
import Gallery from './components/Gallery'
import FoodMenu from './components/FoodMenu'
import CTA from './components/CTA'
import Delivery from './components/Delivery'
import Bar from './components/Bar'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  const [isNavActive, setIsNavActive] = useState(false)
  const [isHeaderSticky, setIsHeaderSticky] = useState(false)
  const [isBackTopActive, setIsBackTopActive] = useState(false)
  const [deliveryBoyMove, setDeliveryBoyMove] = useState(-80)

  const deliveryBoyRef = useRef(null)
  const lastScrollPosRef = useRef(-80)

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    })
  }, [])

  // Sticky header & back to top
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY >= 100) {
        setIsHeaderSticky(true)
        setIsBackTopActive(true)
      } else {
        setIsHeaderSticky(false)
        setIsBackTopActive(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Delivery boy scroll animation
  useEffect(() => {
    const handleScroll = () => {
      if (!deliveryBoyRef.current) return
      const deliveryBoyTopPos = deliveryBoyRef.current.getBoundingClientRect().top

      if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
        const activeScrollPos = window.scrollY
        let newMove = deliveryBoyMove

        if (lastScrollPosRef.current < activeScrollPos) {
          newMove += 1
        } else {
          newMove -= 1
        }

        lastScrollPosRef.current = activeScrollPos
        setDeliveryBoyMove(newMove)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [deliveryBoyMove])

  // Lock body scroll while the mobile nav is open, close on Escape / desktop resize
  const toggleNav = useCallback(() => {
    setIsNavActive(prev => !prev)
  }, [])

  const closeNav = useCallback(() => {
    setIsNavActive(false)
  }, [])

  useEffect(() => {
    if (!isNavActive) return

    document.body.classList.add('nav-open')

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeNav()
    }

    const handleResize = () => {
      if (window.innerWidth >= 992) closeNav()
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      document.body.classList.remove('nav-open')
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [isNavActive, closeNav])

  return (
    <>
      <SEO
        title="Lachi - Authentic Nepali Flavors in Every Bite!"
        description="Experience authentic Nepali cuisine at Lachi. Enjoy traditional dishes like momo, thukpa, chowmein, and more. Delicious flavors delivered to your doorstep or visit us today!"
        image="/assets/images/hero-banner.png"
      />
      <Header
        isNavActive={isNavActive}
        isHeaderSticky={isHeaderSticky}
        onToggleNav={toggleNav}
        onCloseNav={closeNav}
      />

<main>
        <article>
          <Hero />
          <Promo />
          <About />
          <Gallery />
          <FoodMenu />
          <Bar />
          <CTA />
          
          <Delivery deliveryBoyRef={deliveryBoyRef} deliveryBoyMove={deliveryBoyMove} />
          
          <Testimonials />
          <Contact />
        </article>
      </main>

      <Footer />
      <BackToTop isActive={isBackTopActive} />
    </>
  )
}

export default App
