import { useState, useEffect, useRef, useCallback } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Promo from './components/Promo'
import About from './components/About'
import FoodMenu from './components/FoodMenu'
import CTA from './components/CTA'
import Delivery from './components/Delivery'
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

  const toggleNav = useCallback(() => {
    setIsNavActive(prev => !prev)
  }, [])

  const closeNav = useCallback(() => {
    setIsNavActive(false)
  }, [])

  return (
    <>
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
          <FoodMenu />
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
