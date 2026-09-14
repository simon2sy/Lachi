const navItems = [
  { href: '#home', label: 'Home', icon: 'home-outline' },
  { href: '#about', label: 'About', icon: 'information-circle-outline' },
  { href: '#gallery', label: 'Gallery', icon: 'images-outline' },
  { href: '#menu', label: 'Menu', icon: 'restaurant-outline' },
  { href: '#contact', label: 'Contact', icon: 'call-outline' },
]

export default function Header({ isNavActive, isHeaderSticky, onToggleNav, onCloseNav }) {
  return (
    <header
      className={`header${isHeaderSticky ? ' active' : ''}${isNavActive ? ' menu-open' : ''}`}
      data-header
    >

      <div
        className={`nav-overlay${isNavActive ? ' active' : ''}`}
        onClick={onCloseNav}
        aria-hidden="true"
      />

      <div className="container">

        <h1 className="logo-wrap">
          <a href="#top" className="logo" onClick={onCloseNav}>
            Lachi<span className="span"></span>
          </a>
          <span className="lodge-name">By Pradhan Lodge</span>
        </h1>

        <nav
          className={`navbar${isNavActive ? ' active' : ''}`}
          data-navbar
          aria-label="Main navigation"
        >
        

          <ul className="navbar-list">
            {navItems.map(({ href, label, icon }) => (
              <li key={href} className="nav-item">
                <a href={href} className="navbar-link" data-nav-link onClick={onCloseNav}>
                  <ion-icon name={icon} aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>

          

          
        </nav>

          <div className="header-btn-group">
           

            <button
              className={`nav-toggle-btn${isNavActive ? ' active' : ''}`}
              aria-label={isNavActive ? 'Close menu' : 'Open menu'}
              aria-expanded={isNavActive}
              data-menu-toggle-btn
              onClick={onToggleNav}
            >
              <span className="line top" />
              <span className="line middle" />
              <span className="line bottom" />
            </button>
          </div>

      </div>
    </header>
  )
}
