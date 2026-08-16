import SiteLayout from './components/SiteLayout.jsx'
import { getCurrentPage } from './pageConfig.js'

export default function App() {
  const { activePage, Page } = getCurrentPage(window.location.pathname)

  return (
    <SiteLayout activePage={activePage}>
      <Page />
    </SiteLayout>
  )
}
