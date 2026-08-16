export default function Topbar() {
  return (
    <div className="container-fluid py-2 border-bottom d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <a className="text-decoration-none text-body pe-3" href="tel:+201289087489">
                <i className="bi bi-telephone me-2" />+2012 890 87489
              </a>
              <span className="text-body">|</span>
              <a className="text-decoration-none text-body px-3" href="mailto:research@medicalislands.com">
                <i className="bi bi-envelope me-2" />research@medicalislands.com
              </a>
            </div>
          </div>

          <div className="col-md-6 text-center text-lg-end">
            <div className="d-inline-flex align-items-center">
              <a className="text-body px-2" target="_blank" href="https://www.facebook.com/Medicalislands" aria-label="Facebook">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="text-body px-2" target="_blank" href="https://www.messenger.com/t/2077011299208655" aria-label="Messenger">
                <i className="fab fa-facebook-messenger" />
              </a>
              <a className="text-body ps-2" target="_blank" href="https://api.whatsapp.com/message/BMWDNU7RMJKML1?autoload=1&app_absent=0" aria-label="Whatsapp">
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
