export default function BackToTop({ isHome = false }) {
  return (
    <a
      href={isHome ? 'index.html' : '#'}
      className="btn btn-lg btn-primary btn-lg-square back-to-top"
    >
      <i className="bi bi-arrow-up" />
    </a>
  )
}
