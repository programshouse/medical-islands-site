const links = [
  { key: 'home', label: 'Home', href: 'index.html' },
  { key: 'about', label: 'About', href: 'about.html' },
  { key: 'services', label: 'Services', href: 'service.html' },
  { key: 'workshops', label: 'Workshops', href: 'workshop.html' },
  { key: 'blogs', label: 'Blogs', href: 'blog.html' },
]

export default function Navbar({ activePage }) {
  const isHome = activePage === 'home'
  const visibleLinks = activePage === 'contact'
    ? [...links, { key: 'contact', label: 'Contact', href: 'contact.html' }]
    : links

  return (
    <div className="container-fluid sticky-top bg-white shadow-sm">
      <div className={`container${isHome ? ' navbar-total' : ''}`}>
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
          <a href="index.html" className="navbar-brand">
            <h1 className={`m-0 text-primary${isHome ? ' nav-title' : ''}`}>
              <img
                width={isHome ? 64 : 55}
                src="img/343091409_773140504194493_2471292547450633524_n-removebg-preview.webp"
                alt="Medical Island Logo"
              />{' '}
              <span style={{ color: '#111d43' }}>Medical</span> Islands
            </h1>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-label={isHome ? 'Toggle navigation' : undefined}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              {visibleLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className={`nav-item nav-link${activePage === link.key ? ' active' : ''}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
