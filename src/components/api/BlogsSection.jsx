import { useEffect } from 'react'
import ApiState from './ApiState.jsx'
import BlogCard from './BlogCard.jsx'
import { useBlogsStore } from '../../stores/blogsStore.js'

export default function BlogsSection({ limit, showDiscover = false }) {
  const { items, loading, error, fetchAll } = useBlogsStore()

  useEffect(() => {
    fetchAll()
  }, [fetchAll])

  const blogs = limit ? items.slice(0, limit) : items

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '640px' }}>
          <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
            Blogs
          </h5>
          <h1 className="display-6">
            Insights and Expertise through Our Medical Writing Blogs.
          </h1>
        </div>

        <ApiState loading={loading} error={error} onRetry={() => fetchAll(true)} />

        {!loading && !error && blogs.length === 0 && (
          <p className="text-center py-5">No blogs available.</p>
        )}

        {!loading && !error && (
          <div className="row g-5">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}

        {showDiscover && !loading && !error && (
          <div className="d-flex justify-content-center mt-5">
            <a href="blog.html" className="btn btn-primary rounded-pill py-3 px-5">
              Discover All Blogs
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
