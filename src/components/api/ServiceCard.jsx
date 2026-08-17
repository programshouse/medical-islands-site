const fallbackImages = ['img/service1.webp', 'img/service2.webp', 'img/service3.webp']

export default function ServiceCard({ service, index = 0 }) {
  const image = service.image || fallbackImages[index % fallbackImages.length]

  return (
    <div className="col-lg-4 col-md-6">
      <div className="service-item bg-light rounded d-flex flex-column align-items-center text-center h-100">
        <img className="service-icon" src={image} alt={service.title || 'Medical service'} />
        {service.title && <h4 className="service-title">{service.title}</h4>}
        <p className="service-desc">{service.description}</p>
        <a
          className="btn btn-lg btn-primary rounded-pill"
          href={`service.html?id=${service.id}`}
          aria-label={`View ${service.title || 'service'}`}
        >
          <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  )
}
