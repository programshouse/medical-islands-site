import { useEffect } from 'react'
import ApiState from './ApiState.jsx'
import { useWorkshopsStore } from '../../stores/workshopsStore.js'
import { getWorkshopImage } from '../../utils/workshopMedia.js'

export default function WorkshopDetails({ id }) {
  const { item, loading, error, fetchOne } = useWorkshopsStore()

  useEffect(() => {
    fetchOne(id)
  }, [id, fetchOne])

  const image = item ? getWorkshopImage(item) : null

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <ApiState loading={loading} error={error} onRetry={() => fetchOne(id)} />

        {!loading && !error && item && (
          <div className="row g-5 align-items-stretch workshop-details">
            <div className="col-lg-6 d-flex">
              <div className="workshop-details-media w-100">
                {item.video ? (
                  <video className="workshop-details-video" controls poster={image}>
                    <source src={item.video} />
                  </video>
                ) : (
                  <img
                    className="workshop-details-image"
                    src={image}
                    alt={item.title || 'Workshop'}
                    onError={(event) => {
                      event.currentTarget.src = '/img/workshop1.webp'
                    }}
                  />
                )}
              </div>
            </div>

            <div className="col-lg-6 d-flex">
              <div className="workshop-details-content w-100">
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
                  Workshop
                </h5>
                <h1 className="display-6 mb-4">{item.title}</h1>

                {item.description && <p className="fs-5">{item.description}</p>}

                {Array.isArray(item.features) && item.features.length > 0 && (
                  <ul className="mt-4 workshop-details-features">
                    {item.features.map((feature, index) => (
                      <li key={index} className="mb-2">{feature}</li>
                    ))}
                  </ul>
                )}

                {item.link ? (
                  <a
                    className="workshop-button rounded-pill py-3 px-5 d-inline-flex align-items-center justify-content-center mt-auto"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Apply Now
                  </a>
                ) : (
                  <span className="workshop-button-coming rounded-pill py-3 px-5 d-inline-flex align-items-center justify-content-center mt-auto">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
