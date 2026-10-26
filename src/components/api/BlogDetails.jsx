import { useEffect } from 'react'
import ApiState from './ApiState.jsx'
import { useBlogsStore } from '../../stores/blogsStore.js'

export default function BlogDetails({ id }) {
  const { item, loading, error, fetchOne } = useBlogsStore()

  useEffect(() => {
    fetchOne(id)
  }, [id, fetchOne])

  const blogImage = item?.image || 'img/blog.webp'
  const userImage = item?.user_image || 'img/user.jpg'

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <ApiState loading={loading} error={error} onRetry={() => fetchOne(id)} />

        {!loading && !error && item && (
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="mb-5">
                <img 
                  className="img-fluid w-100 rounded mb-5" 
                  src={blogImage} 
                  alt={item.title} 
                  onError={(e) => { e.target.src = 'img/blog.webp' }}
                />
                <h1 className="display-4 mb-4">{item.title}</h1>
                <div 
                  className="blog-content fs-5" 
                  dangerouslySetInnerHTML={{ __html: item.content }} 
                />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="bg-light rounded p-5 mb-5">
                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 mb-4">
                  Author
                </h4>
                <div className="d-flex align-items-center">
                  <img 
                    className="rounded-circle me-3" 
                    src={userImage} 
                    width="60" 
                    height="60" 
                    alt={item.user_name || 'Author'} 
                    onError={(e) => { e.target.src = 'img/user.jpg' }}
                  />
                  <div>
                    <h5 className="mb-1">{item.user_name || 'Admin'}</h5>
                    <small>Medical Content Creator</small>
                  </div>
                </div>
              </div>

              <div className="bg-light rounded p-5 mb-5">
                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 mb-4">
                  Metadata
                </h4>
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-3">
                    <i className="far fa-calendar-alt text-primary me-3"></i>
                    <span>Published: {new Date(item.created_at).toLocaleDateString()}</span>
                  </div>
                  {item.category && (
                    <div className="d-flex align-items-center">
                      <i className="far fa-folder text-primary me-3"></i>
                      <span>Category: {item.category}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <a href="blog.html" className="btn btn-primary rounded-pill py-3 px-5">
                  Back to Blogs
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
