import { useEffect } from 'react'
import ApiState from './ApiState.jsx'
import { useReviewsStore } from '../../stores/reviewsStore.js'

export default function ReviewDetails({ id }) {
  const { item, loading, error, fetchOne } = useReviewsStore()

  useEffect(() => {
    fetchOne(id)
  }, [id, fetchOne])

  const userImage = item?.user_image || 'img/testimonial-2.jpg'

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <ApiState loading={loading} error={error} onRetry={() => fetchOne(id)} />

        {!loading && !error && item && (
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="testimonial-item text-center bg-light rounded p-5">
                <div className="position-relative mb-5">
                  <img 
                    className="img-fluid rounded-circle mx-auto" 
                    src={userImage} 
                    alt={item.user_name} 
                    onError={(e) => { e.target.src = 'img/testimonial-2.jpg' }}
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  />
                  <div 
                    className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" 
                    style={{ width: '60px', height: '60px', boxShadow: '0 0 15px rgba(0,0,0,0.1)' }}
                  >
                    <i className="fa fa-quote-left text-primary fs-4"></i>
                  </div>
                </div>
                <p className="fs-4 fw-normal mb-5">{item.review}</p>
                <hr className="w-25 mx-auto mb-4" />
                <h2 className="mb-2">{item.user_name}</h2>
                <h5 className="fw-normal text-primary mb-4">{item.user_job || 'Patient'}</h5>
                
                <div className="mt-5">
                  <a href="review.html" className="btn btn-primary rounded-pill py-3 px-5">
                    Back to All Reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
