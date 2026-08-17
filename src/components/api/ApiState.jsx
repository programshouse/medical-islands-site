export default function ApiState({ loading, error, onRetry }) {
  if (loading) {
    return <div className="text-center py-5">Loading...</div>
  }

  if (error) {
    return (
      <div className="text-center py-5">
        <p className="text-danger mb-3">Unable to load data.</p>
        <button className="btn btn-primary rounded-pill px-4" onClick={onRetry}>
          Try Again
        </button>
      </div>
    )
  }

  return null
}
