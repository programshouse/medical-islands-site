import { getWorkshopImage } from '../../utils/workshopMedia.js'

export default function WorkshopCard({ workshop }) {
  const image = getWorkshopImage(workshop)
  const features = Array.isArray(workshop.features) ? workshop.features : []
  const detailsUrl = `workshop.html?id=${workshop.id}`

  return (
    <div className="col-lg-4 col-md-6 d-flex">
      <article className="workshop-card bg-light rounded text-center overflow-hidden w-100">
        <a href={detailsUrl} className="workshop-card-media d-block position-relative">
          <img
            className="workshop-card-image"
            src={image}
            alt={workshop.title || 'Workshop'}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.src = '/img/workshop1.webp'
            }}
          />
        </a>

        <div className="workshop-desc py-4 px-3">
          <a href={detailsUrl} className="workshop-card-title h4 d-block mb-3">
            {workshop.title || 'Workshop'}
          </a>

          <div className="workshop-card-content">
            {features.length > 0 ? (
              <ul className="workshop-card-features">
                {features.map((feature, featureIndex) => (
                  <li key={`${workshop.id}-${featureIndex}`}>{feature}</li>
                ))}
              </ul>
            ) : (
              workshop.description && <p className="workshop-card-description">{workshop.description}</p>
            )}
          </div>

          <div className="workshop-card-action">
            {workshop.link ? (
              <a
                href={workshop.link}
                className="workshop-button rounded-pill py-3 px-5 d-inline-flex align-items-center justify-content-center"
                target="_blank"
                rel="noreferrer"
              >
                Apply Now
              </a>
            ) : (
              <span className="workshop-button-coming rounded-pill py-3 px-5 d-inline-flex align-items-center justify-content-center">
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </article>
    </div>
  )
}
