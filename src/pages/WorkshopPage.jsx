import WorkshopDetails from '../components/api/WorkshopDetails.jsx'
import WorkshopsSection from '../components/api/WorkshopsSection.jsx'

export default function WorkshopPage() {
  const id = new URLSearchParams(window.location.search).get('id')

  return id ? <WorkshopDetails id={id} /> : <WorkshopsSection />
}
