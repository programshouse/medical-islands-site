export default function BlogCard({ blog }) {
  const detailsUrl = `blog.html?id=${blog.id}`
  const userImage = blog.user_image || 'img/user.jpg'
  const blogImage = blog.image || 'img/blog.webp'

  return (
    <div className="col-xl-4 col-lg-6">
      <div className="bg-light rounded overflow-hidden h-100 d-flex flex-column">
        <a href={detailsUrl} className="d-block">
          <img 
            className="img-fluid w-100" 
            src={blogImage} 
            alt={blog.title} 
            onError={(e) => { e.target.src = 'img/blog.webp' }}
            style={{ height: '250px', objectFit: 'cover' }}
          />
        </a>
        <div className="p-4 flex-grow-1">
          <a className="h4 d-block mb-3" href={detailsUrl}>
            {blog.title}
          </a>
          <div 
            className="m-0 text-truncate-3" 
            dangerouslySetInnerHTML={{ __html: blog.content }} 
          />
        </div>
        <div className="d-flex justify-content-between border-top p-4 mt-auto">
          <div className="d-flex align-items-center">
            <img 
              className="rounded-circle me-2" 
              src={userImage} 
              width="25" 
              height="25" 
              alt={blog.user_name || 'Author'} 
              onError={(e) => { e.target.src = 'img/user.jpg' }}
            />
            <small>{blog.user_name || 'Admin'}</small>
          </div>
          <div className="d-flex align-items-center">
            <small className="ms-3">
              <i className="far fa-calendar-alt text-primary me-1"></i>
              {new Date(blog.created_at).toLocaleDateString()}
            </small>
            {blog.category && (
              <small className="ms-3">
                <i className="far fa-folder text-primary me-1"></i>
                {blog.category}
              </small>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
