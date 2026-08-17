import ServiceDetails from '../components/api/ServiceDetails.jsx'
import ServicesSection from '../components/api/ServicesSection.jsx'

export default function ServicePage() {
  const id = new URLSearchParams(window.location.search).get('id')

  return id ? <ServiceDetails id={id} /> : <ServicesSection />
}
