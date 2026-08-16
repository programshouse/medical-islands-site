import AboutPage from './pages/AboutPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ServicePage from './pages/ServicePage.jsx'
import WorkshopPage from './pages/WorkshopPage.jsx'

const pageConfig = {
  '/': { activePage: 'home', Page: HomePage },
  '/index.html': { activePage: 'home', Page: HomePage },
  '/about.html': { activePage: 'about', Page: AboutPage },
  '/service.html': { activePage: 'services', Page: ServicePage },
  '/workshop.html': { activePage: 'workshops', Page: WorkshopPage },
  '/blog.html': { activePage: 'blogs', Page: BlogPage },
  '/contact.html': { activePage: 'contact', Page: ContactPage },
}

export function getCurrentPage(pathname) {
  return pageConfig[pathname] ?? pageConfig['/']
}
