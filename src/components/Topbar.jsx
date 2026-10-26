import { useSettingsStore } from '../stores/settingsStore.js'

export default function Topbar() {
  const { settings } = useSettingsStore()

  return (
    <div className="container-fluid py-2 border-bottom d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <a className="text-decoration-none text-body pe-3" href={`tel:${settings?.phone || '+201289087489'}`}>
                <i className="bi bi-telephone me-2" />{settings?.phone || '+2012 890 87489'}
              </a>
              <span className="text-body">|</span>
              <a className="text-decoration-none text-body px-3" href={`mailto:${settings?.email || 'research@medicalislands.com'}`}>
                <i className="bi bi-envelope me-2" />{settings?.email || 'research@medicalislands.com'}
              </a>
            </div>
          </div>

          <div className="col-md-6 text-center text-lg-end">
            <div className="d-inline-flex align-items-center">
              {settings?.facebook && (
                <a className="text-body px-2" target="_blank" href={settings.facebook} aria-label="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
              )}
              {settings?.twitter && (
                <a className="text-body px-2" target="_blank" href={settings.twitter} aria-label="Twitter">
                  <i className="fab fa-twitter" />
                </a>
              )}
              {settings?.linkedin && (
                <a className="text-body px-2" target="_blank" href={settings.linkedin} aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in" />
                </a>
              )}
              {settings?.instagram && (
                <a className="text-body px-2" target="_blank" href={settings.instagram} aria-label="Instagram">
                  <i className="fab fa-instagram" />
                </a>
              )}
              {settings?.whatsapp && (
                <a className="text-body ps-2" target="_blank" href={settings.whatsapp} aria-label="Whatsapp">
                  <i className="fab fa-whatsapp" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
