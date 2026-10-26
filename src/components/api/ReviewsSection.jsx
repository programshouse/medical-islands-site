import { useEffect } from 'react'
import ApiState from './ApiState.jsx'
import ReviewCard from './ReviewCard.jsx'
import { useReviewsStore } from '../../stores/reviewsStore.js'

export default function ReviewsSection({ limit, showDiscover = false }) {
  const { items, loading, error, fetchAll } = useReviewsStore()

  useEffect(() => {
    fetchAll()
  }, [fetchAll])

  const reviews = limit ? items.slice(0, limit) : items

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
          <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
            Testimonial
          </h5>
          <h1 className="display-4">Patients Say About Our Services</h1>
        </div>
        
        <ApiState loading={loading} error={error} onRetry={() => fetchAll(true)} />

        {!loading && !error && reviews.length === 0 && (
          <p className="text-center py-5">No reviews available.</p>
        )}

        {!loading && !error && (
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="row g-5">
                {reviews.map((review) => (
                  <div key={review.id} className="col-md-6 col-lg-4">
                    <ReviewCard review={review} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {showDiscover && !loading && !error && (
          <div className="d-flex justify-content-center mt-5">
            <a href="review.html" className="btn btn-primary rounded-pill py-3 px-5">
              Discover All Reviews
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
