const quickLinks = [
  ['Home', 'index.html'],
  ['About Us', 'about.html'],
  ['Services', 'service.html'],
  ['Workshops', 'workshop.html'],
  ['Blogs', 'blog.html'],
]

const services = [
  'Paper submission & Publication',
  'Plagiarism check & paraphrasing',
  'Discussion Revision',
]

const workshops = ['Biostatistics', 'EndNote', 'Sample Size Calculation']

import { useSettingsStore } from '../stores/settingsStore.js'

function FooterLinks({ items, href, allLabel }) {
  return (
    <div className="d-flex flex-column justify-content-start">
      {items.map((item) => {
        const [label, link] = Array.isArray(item) ? item : [item, href]
        return (
          <a key={label} className="text-light mb-2" href={link}>
            <i className="fa fa-angle-right me-2" />{label}
          </a>
        )
      })}
      {allLabel && (
        <a className="text-light mb-2" style={{ textDecoration: 'underline' }} href={href}>
          <i className="fa fa-angle-right me-2" />{allLabel}
        </a>
      )}
    </div>
  )
}

export default function Footer() {
  const whiteBlock = { color: 'white', display: 'block' }
  const socialStyle = { color: 'white', fontSize: '26.67px' }
  const { settings } = useSettingsStore()

  return (
    <>
      <div className="container-fluid bg-dark text-light mt-5 py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Get In Touch</h4>
              <a href={settings?.address || 'https://maps.app.goo.gl/G2auyAiNgnxTxHLE6'} style={whiteBlock} className="mb-2" target="_blank">
                <i className="fa fa-map-marker-alt text-primary me-3" /> {settings?.address_text || 'Tanta, El Bahr Street - in front of Tanta Hospital above Almokhtabar Lab.'}
              </a>
              <a href={`mailto:${settings?.email || 'research@medicalislands.com'}`} style={whiteBlock} className="mb-2" target="_blank">
                <i className="fa fa-envelope text-primary me-3" />{settings?.email || 'research@medicalislands.com'}
              </a>
              <a href={`tel:${settings?.phone || '+201289087489'}`} style={whiteBlock} className="mb-0" target="_blank">
                <i className="fa fa-phone-alt text-primary me-3" />{settings?.phone || '+2012 890 87489'}
              </a>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Quick Links</h4>
              <FooterLinks items={quickLinks} />
            </div>

            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Popular Services</h4>
              <FooterLinks items={services} href="service.html" allLabel="All Services" />
            </div>

            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Best Workshops</h4>
              <FooterLinks items={workshops} href="workshop.html" allLabel="All Workshops" />
            </div>

            <div className="col-lg-3 col-md-6 w-100 justify-content-between d-flex footer-follow-download">
              <div>
                <h6 className="text-primary text-uppercase mb-3">Follow Us</h6>
                <div className="d-flex">
                  {settings?.facebook && (
                    <a className="me-3" href={settings.facebook} aria-label="Visit our Facebook page" style={socialStyle} target="_blank">
                      <i className="fab fa-facebook" />
                    </a>
                  )}
                  {settings?.twitter && (
                    <a className="me-3" href={settings.twitter} aria-label="Visit our Twitter page" style={socialStyle} target="_blank">
                      <i className="fab fa-twitter" />
                    </a>
                  )}
                  {settings?.linkedin && (
                    <a className="me-3" href={settings.linkedin} aria-label="Visit our LinkedIn page" style={socialStyle} target="_blank">
                      <i className="fab fa-linkedin" />
                    </a>
                  )}
                  {settings?.instagram && (
                    <a className="me-3" href={settings.instagram} aria-label="Visit our Instagram page" style={socialStyle} target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                  )}
                  {settings?.whatsapp && (
                    <a href={settings.whatsapp} aria-label="Whatsapp" style={socialStyle} target="_blank">
                      <i className="fab fa-whatsapp" />
                    </a>
                  )}
                </div>
              </div>

              <div className="d-flex align-items-center footer-follow" style={{ gap: '24px' }}>
                <img src="img/google-play.webp" alt="Google Play" height="48px" />
                <img src="img/app-store.webp" alt="App Store" height="48px" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">Powered by <a className="text-primary" href="index.html">PH</a></p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">© 2025 All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
