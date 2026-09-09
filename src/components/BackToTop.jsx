export default function BackToTop({ isActive }) {
  return (
    <a href="#top" className={`back-top-btn${isActive ? ' active' : ''}`} aria-label="Back to top" data-back-top-btn>
      <ion-icon name="chevron-up"></ion-icon>
    </a>
  )
}
