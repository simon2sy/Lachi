import { useState, useEffect } from 'react'
import './Loading.css'

export default function Loading({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    // Start fade out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true)
    }, 2000)

    // Remove from DOM after fade animation
    const removeTimer = setTimeout(() => {
      setIsVisible(false)
      onComplete()
    }, 2800)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className={`loading-screen ${isFading ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-logo">
          Lachi<span className="loading-dot">.</span>
        </div>
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        <p className="loading-text">Authentic Nepali Flavors</p>
      </div>
    </div>
  )
}
