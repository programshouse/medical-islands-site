import BackToTop from './BackToTop.jsx'
import FloatingActions from './FloatingActions.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import Topbar from './Topbar.jsx'
import useSitePlugins from '../hooks/useSitePlugins.js'

export default function SiteLayout({ activePage, children }) {
  const isHome = activePage === 'home'

  useSitePlugins()

  return (
    <>
      <Topbar />
      <Navbar activePage={activePage} />
      {children}
      <Footer />
      <BackToTop isHome={isHome} />
      {isHome && <FloatingActions />}
    </>
  )
}
