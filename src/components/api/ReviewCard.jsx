export default function ReviewCard({ review }) {
  const userImage = review.user_image || 'img/testimonial-2.jpg'
  const detailsUrl = `review.html?id=${review.id}`

  return (
    <div className="testimonial-item text-center bg-light rounded p-4 h-100 d-flex flex-column">
      <a href={detailsUrl} className="text-decoration-none text-dark d-flex flex-column h-100">
        <div className="position-relative mb-4">
          <img 
            className="img-fluid rounded-circle mx-auto" 
            src={userImage} 
            alt={review.user_name} 
            onError={(e) => { e.target.src = 'img/testimonial-2.jpg' }}
            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
          />
          <div 
            className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" 
            style={{ width: '45px', height: '45px' }}
          >
            <i className="fa fa-quote-left text-primary"></i>
          </div>
        </div>
        <p className="fs-4 fw-normal flex-grow-1">{review.review}</p>
        <hr className="w-25 mx-auto" />
        <h3>{review.user_name}</h3>
        <h6 className="fw-normal text-primary mb-3">{review.user_job || 'Patient'}</h6>
      </a>
    </div>
  )
}
