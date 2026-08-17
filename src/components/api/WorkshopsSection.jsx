import { useEffect } from 'react'
import ApiState from './ApiState.jsx'
import WorkshopCard from './WorkshopCard.jsx'
import { useWorkshopsStore } from '../../stores/workshopsStore.js'

export default function WorkshopsSection({ limit, showDiscover = false }) {
  const { items, loading, error, fetchAll } = useWorkshopsStore()

  useEffect(() => {
    fetchAll()
  }, [fetchAll])

  const workshops = limit ? items.slice(0, limit) : items

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
          <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
            Workshops
          </h5>
          <h1 className="workshops-title">Workshops to Elevate Your Medical Writing Skills.</h1>
        </div>

        <ApiState loading={loading} error={error} onRetry={() => fetchAll(true)} />

        {!loading && !error && workshops.length === 0 && (
          <p className="text-center py-5">No workshops available.</p>
        )}

        {!loading && !error && (
          <div className="row g-5">
            {workshops.map((workshop) => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          </div>
        )}

        {showDiscover && !loading && !error && (
          <div className="d-flex justify-content-center workshops-discover mt-5">
            <a href="workshop.html" className="custom-button">
              Discover All Workshops
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
