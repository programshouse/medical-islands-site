import { useEffect } from 'react'
import ApiState from './ApiState.jsx'
import ServiceCard from './ServiceCard.jsx'
import { useServicesStore } from '../../stores/servicesStore.js'

export default function ServicesSection({ limit, showDiscover = false }) {
  const { items, loading, error, fetchAll } = useServicesStore()

  useEffect(() => {
    fetchAll()
  }, [fetchAll])

  const services = limit ? items.slice(0, limit) : items

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="text-center mx-auto mb-lg-5" style={{ maxWidth: '500px' }}>
          <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
            Services
          </h5>
          <h1 className="display-6">Exceptional Medical Writing Services.</h1>
        </div>

        <ApiState loading={loading} error={error} onRetry={() => fetchAll(true)} />

        {!loading && !error && services.length === 0 && (
          <p className="text-center py-5">No services available.</p>
        )}

        {!loading && !error && (
          <div className="row g-5 relative services-inner">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}

            {showDiscover && (
              <div className="d-flex justify-content-center">
                <a href="service.html" className="custom-button">
                  Discover All Services
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
