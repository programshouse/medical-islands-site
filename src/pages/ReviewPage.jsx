import ReviewsSection from '../components/api/ReviewsSection.jsx'
import ReviewDetails from '../components/api/ReviewDetails.jsx'

export default function ReviewPage() {
  const id = new URLSearchParams(window.location.search).get('id')

  return id ? <ReviewDetails id={id} /> : <ReviewsSection />
}
