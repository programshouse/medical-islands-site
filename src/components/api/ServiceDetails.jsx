import { useEffect } from 'react'
import ApiState from './ApiState.jsx'
import { useServicesStore } from '../../stores/servicesStore.js'

export default function ServiceDetails({ id }) {
  const { item, loading, error, fetchOne } = useServicesStore()

  useEffect(() => {
    fetchOne(id)
  }, [id, fetchOne])

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <ApiState loading={loading} error={error} onRetry={() => fetchOne(id)} />
        {!loading && !error && item && (
          <div className="row g-5 align-items-center">
            {item.image && (
              <div className="col-lg-5 text-center">
                <img className="img-fluid rounded" src={item.image} alt={item.title} />
              </div>
            )}
            <div className={item.image ? 'col-lg-7' : 'col-12'}>
              <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Service</h5>
              <h1 className="display-6 mb-4">{item.title}</h1>
              <p className="fs-5">{item.description}</p>
              {Array.isArray(item.features) && item.features.length > 0 && (
                <ul className="mt-4">
                  {item.features.map((feature, index) => <li key={index} className="mb-2">{feature}</li>)}
                </ul>
              )}
              {item.link && (
                <a className="custom-button mt-3" href={item.link} target="_blank" rel="noreferrer">
                  Open Service
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
