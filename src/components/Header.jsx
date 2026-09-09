export default function Header({ isNavActive, isHeaderSticky, onToggleNav, onCloseNav }) {
  return (
    <header className={`header${isHeaderSticky ? ' active' : ''}${isNavActive ? ' menu-open' : ''}`} data-header>
      <div className="container">

        <h1>
          <a href="#top" className="logo">Lachi<span className="span">.</span></a>
          <span className="lodge-name">by Pradhan Lodge</span>
        </h1>

        <nav className={`navbar${isNavActive ? ' active' : ''}`} data-navbar>
          <ul className="navbar-list">

            <li className="nav-item">
              <a href="#home" className="navbar-link" data-nav-link onClick={onCloseNav}>Home</a>
            </li>

            <li className="nav-item">
              <a href="#about" className="navbar-link" data-nav-link onClick={onCloseNav}>About Us</a>
            </li>

            <li className="nav-item">
              <a href="#food-menu" className="navbar-link" data-nav-link onClick={onCloseNav}>Menu</a>
            </li>

            <li className="nav-item">
              <a href="#contact-section" className="navbar-link" data-nav-link onClick={onCloseNav}>Contact Us</a>
            </li>

          </ul>
        </nav>

        <div className="header-btn-group">
         <button
            className={`nav-toggle-btn${isNavActive ? ' active' : ''}`}
            aria-label="Toggle Menu"
            data-menu-toggle-btn
            onClick={onToggleNav}
          >
            <span className="line top"></span>
            <span className="line middle"></span>
            <span className="line bottom"></span>
          </button>
        </div>

      </div>
    </header>
  )
}
