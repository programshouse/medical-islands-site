import BlogsSection from '../components/api/BlogsSection.jsx'
import BlogDetails from '../components/api/BlogDetails.jsx'

export default function BlogPage() {
  const id = new URLSearchParams(window.location.search).get('id')

  return id ? <BlogDetails id={id} /> : <BlogsSection />
}
