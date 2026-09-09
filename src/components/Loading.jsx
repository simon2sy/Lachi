import { useState, useEffect } from 'react'
import './Loading.css'

export default function Loading({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true)
  const [isFading, setIsFading] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 40)

    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true)
    }, 2500)

    // Remove from DOM after fade animation
    const removeTimer = setTimeout(() => {
      setIsVisible(false)
      onComplete()
    }, 3300)

    return () => {
      clearInterval(progressInterval)
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
        <div className="loading-progress">
          <div className="loading-progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="loading-text">Authentic Nepali Flavors</p>
      </div>
    </div>
  )
}
