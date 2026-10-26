import ServicesSection from '../components/api/ServicesSection.jsx'
import WorkshopsSection from '../components/api/WorkshopsSection.jsx'
import BlogsSection from '../components/api/BlogsSection.jsx'
import ReviewsSection from '../components/api/ReviewsSection.jsx'
import { useSettingsStore } from '../stores/settingsStore.js'

export default function HomePage() {
  const { settings } = useSettingsStore()

  return (
    <>
      
      <section className="hero-section">
      <div className="container">
      <div className="hero-content">
      
      <div className="logo">
      <img src="/img/ms-rounded.webp" alt="Medical Islands Logo" />
      </div>
      
      <p className="mb-2 hero-head">Welcome To Medical Islands</p>
      
      <h1 className="hero-title">
                  From <span>Doctors</span> To <span>Doctors</span>
      </h1>
      
      <p className="hero-description">
                  Bridging the gap in medical writing with precision, clarity, and
                  expertise.
                </p>
      
      <a href="tel:+201289087489" className="hero-btn custom-button">Contact Now</a>
      </div>
      </div>
      </section>
      
      
      <div className="container-fluid py-5">
      <div className="container">
      <div className="row gx-5">
      <div className="col-lg-6">
      <div className="mb-lg-5 mb-4">
      <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
                      About Us
                    </h5>
      <h1 className="display-6">
                      Your Trusted Partner in Your Scientific Journey in Medical
                      Writing
                    </h1>
      </div>
      <p>
                    Medical Islands supports healthcare professionals on their
                    scientific journey with expert medical writing and communication.
                  </p>
      <ul className="list-unstyled">
      <li className="list-item">
      <span>• High Professionalism:</span> A team of experienced
                      medical writing experts.
                    </li>
      <li className="list-item">
      <span>• Trust and Reliability:</span> Committed to quality and
                      confidentiality.
                    </li>
      <li className="list-item">
      <span>• Strong Support:</span> Offering continuous guidance for
                      project success.
                    </li>
      <li className="list-item">
      <span>• Emergency Readiness:</span> Ready to tackle urgent
                      projects anytime.
                    </li>
      </ul>
      <div className="row g-3 pb-5">
      <div className="col-sm-3 col-6">
      <div className="bg-light text-center rounded-circle py-4">
      <img src="img/doctor-icon.png" alt="Doctor Icon" width="48" />
      <h6 className="mb-0 mt-1">
                          Qualified<small className="d-block text-primary">Doctors</small>
      </h6>
      </div>
      </div>
      <div className="col-sm-3 col-6">
      <div className="bg-light text-center rounded-circle py-4">
      <img src="img/trust-icon.webp" alt="Doctor Icon" width="48" />
      <h6 className="mb-0 mt-1">
                          Trust &<small className="d-block text-primary">Reliability</small>
      </h6>
      </div>
      </div>
      <div className="col-sm-3 col-6">
      <div className="bg-light text-center rounded-circle py-4">
      <img src="img/emergency-icon.png" alt="Doctor Icon" width="48" />
      <h6 className="mb-0 mt-1">
                          Emergency<small className="d-block text-primary">Readiness</small>
      </h6>
      </div>
      </div>
      <div className="col-sm-3 col-6">
      <div className="bg-light text-center rounded-circle p-4">
      <img src="img/strong-icon.png" alt="Doctor Icon" width="48" />
      <h6 className="mb-0 mt-1">
                          Strong<small className="d-block text-primary">Support</small>
      </h6>
      </div>
      </div>
      </div>
      </div>
      <div className="col-lg-6 mb-lg-0">
      <div className="position-relative">
      <img className="w-100 rounded" src="img/about-banner.webp" alt="About Banner" />
      </div>
      </div>
      </div>
      </div>
      </div>
      
      
      <ServicesSection limit={3} showDiscover />

      <WorkshopsSection limit={3} showDiscover />

      <BlogsSection limit={3} showDiscover />

      <ReviewsSection limit={3} showDiscover />

      <div className="container-fluid my-5 py-5" style={{ backgroundColor: '#1c2a4e' }}>
      <div className="container py-5">
      <div className="row gx-5">
      <div className="col-lg-7 mb-5 mb-lg-0">
      <h1 className="display-6 text-white mb-4">We’re here to listen.</h1>
      <p className="mb-5 contact-desc" style={{ maxWidth: '500px' }}>
                    Your feedback matters to us, and we’re here to assist with any
                    questions, suggestions, or concerns you may have. Whether you’re
                    looking for more information, have ideas to share, or simply need
                    support, don’t hesitate to get in touch. we’re always here to
                    listen and help
                  </p>
      <div className="d-flex workshops-discover">
      <a href={`tel:${settings?.phone || '+201289087489'}`} className="custom-button" style={{ backgroundColor: 'white', color: '#1c2a4e', padding: '12px 64px' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.0497 6C15.0264 6.19057 15.924 6.66826 16.6277 7.37194C17.3314 8.07561 17.8091 8.97326 17.9997 9.95M14.0497 2C16.0789 2.22544 17.9713 3.13417 19.4159 4.57701C20.8606 6.01984 21.7717 7.91101 21.9997 9.94M10.2266 13.8631C9.02506 12.6615 8.07627 11.3028 7.38028 9.85323C7.32041 9.72854 7.29048 9.66619 7.26748 9.5873C7.18576 9.30695 7.24446 8.96269 7.41447 8.72526C7.46231 8.65845 7.51947 8.60129 7.63378 8.48698C7.98338 8.13737 8.15819 7.96257 8.27247 7.78679C8.70347 7.1239 8.70347 6.26932 8.27247 5.60643C8.15819 5.43065 7.98338 5.25585 7.63378 4.90624L7.43891 4.71137C6.90747 4.17993 6.64174 3.91421 6.35636 3.76987C5.7888 3.4828 5.11854 3.4828 4.55098 3.76987C4.2656 3.91421 3.99987 4.17993 3.46843 4.71137L3.3108 4.86901C2.78117 5.39863 2.51636 5.66344 2.31411 6.02348C2.08969 6.42298 1.92833 7.04347 1.9297 7.5017C1.93092 7.91464 2.01103 8.19687 2.17124 8.76131C3.03221 11.7947 4.65668 14.6571 7.04466 17.045C9.43264 19.433 12.295 21.0575 15.3284 21.9185C15.8928 22.0787 16.1751 22.1588 16.588 22.16C17.0462 22.1614 17.6667 22 18.0662 21.7756C18.4263 21.5733 18.6911 21.3085 19.2207 20.7789L19.3783 20.6213C19.9098 20.0898 20.1755 19.8241 20.3198 19.5387C20.6069 18.9712 20.6069 18.3009 20.3198 17.7333C20.1755 17.448 19.9098 17.1822 19.3783 16.6508L19.1835 16.4559C18.8339 16.1063 18.6591 15.9315 18.4833 15.8172C17.8204 15.3862 16.9658 15.3862 16.3029 15.8172C16.1271 15.9315 15.9523 16.1063 15.6027 16.4559C15.4884 16.5702 15.4313 16.6274 15.3644 16.6752C15.127 16.8453 14.7828 16.904 14.5024 16.8222C14.4235 16.7992 14.3612 16.7693 14.2365 16.7094C12.7869 16.0134 11.4282 15.0646 10.2266 13.8631Z" stroke="#1C2A4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
                      Call Us
                    </a>
      </div>
      <div className="contact-social">
      <div>
      <div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.5 18L14.8571 12M9.14286 12L2.50003 18M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
                        Email
                      </div>
      <a href={`mailto:${settings?.email || 'research@medicalislands.com'}`} style={{ color: 'white' }}>{settings?.email || 'research@medicalislands.com'}</a>
      </div>
      <div>
      <div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
                        Address
                      </div>
      <a href={settings?.address || 'https://maps.app.goo.gl/G2auyAiNgnxTxHLE6'} target="_blank" style={{ color: 'white' }}>
                        {settings?.address_text || 'Tanta, El Bahr Street - in front of Tanta Hospital above Almokhtabar Lab.'}
                      </a>
      </div>
      </div>
      </div>
      <div className="col-lg-5 bg-white text-center form-container rounded">
      <form>
      <div className="input-group">
      <div className="input-field">
      <input type="text" id="name" required placeholder="Ali Ahmed" />
      <label htmlFor="name">Name</label>
      </div>
      <div className="input-field">
      <input type="tel" id="phone" required placeholder="123456789" />
      <label htmlFor="phone">Phone</label>
      </div>
      </div>
      <div className="input-field">
      <input type="email" id="email" required placeholder="abcd@gmail.com" />
      <label htmlFor="email">Email</label>
      </div>
      <div className="input-field">
      <select id="heard" required defaultValue="">
      <option value="" disabled>Choose One</option>
      <option>Social Media</option>
      <option>Friend</option>
      <option>Advertisement</option>
      </select>
      <label htmlFor="heard">Heard From</label>
      </div>
      <div className="input-field">
      <textarea id="message" required placeholder="Write your message ,Suggestion or Feedback"></textarea>
      <label htmlFor="message">Message</label>
      </div>
      <div className="d-flex justify-content-center">
      <button type="submit" className="custom-button" style={{ width: '100%', marginBottom: '0' }}>
                        Submit<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
      </button>
      </div>
      </form>
      </div>
      </div>
      </div>
      </div>
      
      
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
      <div className="row g-5">
      <div className="col-xl-4 col-lg-6">
      <div className="bg-light rounded overflow-hidden">
      <img className="img-fluid w-100" src="img/blog.webp" alt="First Blogs" />
      <div className="p-4">
      <a className="h4 d-block mb-3" href="index.html">Paper submission & Publication</a>
      <p className="m-0">
                        This service supports researchers with clinical trial
                        registration, paper submission, and publication in reputable
                        journals.
                      </p>
      </div>
      <div className="d-flex justify-content-between border-top p-4">
      <div className="d-flex align-items-center">
      <img className="rounded-circle me-2" src="img/user.jpg" width="25" height="25" alt="Something Here" />
      <small>Ali Ahmed</small>
      </div>
      <div className="d-flex align-items-center">
      <small className="ms-3"><i className="far fa-eye text-primary me-1"></i>Research</small>
      </div>
      </div>
      </div>
      </div>
      <div className="col-xl-4 col-lg-6">
      <div className="bg-light rounded overflow-hidden">
      <img className="img-fluid w-100" src="img/blog.webp" alt="First Blogs" />
      <div className="p-4">
      <a className="h4 d-block mb-3" href="index.html">Paper submission & Publication</a>
      <p className="m-0">
                        This service supports researchers with clinical trial
                        registration, paper submission, and publication in reputable
                        journals.
                      </p>
      </div>
      <div className="d-flex justify-content-between border-top p-4">
      <div className="d-flex align-items-center">
      <img className="rounded-circle me-2" src="img/user.jpg" width="25" height="25" alt="Something Here" />
      <small>Ali Ahmed</small>
      </div>
      <div className="d-flex align-items-center">
      <small className="ms-3"><i className="far fa-eye text-primary me-1"></i>Research</small>
      </div>
      </div>
      </div>
      </div>
      <div className="col-xl-4 col-lg-6">
      <div className="bg-light rounded overflow-hidden">
      <img className="img-fluid w-100" src="img/blog.webp" alt="First Blogs" />
      <div className="p-4">
      <a className="h4 d-block mb-3" href="index.html">Paper submission & Publication</a>
      <p className="m-0">
                        This service supports researchers with clinical trial
                        registration, paper submission, and publication in reputable
                        journals.
                      </p>
      </div>
      <div className="d-flex justify-content-between border-top p-4">
      <div className="d-flex align-items-center">
      <img className="rounded-circle me-2" src="img/user.jpg" width="25" height="25" alt="Something Here" />
      <small>Ali Ahmed</small>
      </div>
      <div className="d-flex align-items-center">
      <small className="ms-3"><i className="far fa-eye text-primary me-1"></i>Research</small>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
      <a href="blog.html" className="blogs-button">Discover All Blogs </a>
      </div>
      </div>
      </div>
      
      
      <div className="container-fluid py-5">
      <div className="container">
      <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
      <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
                  What Our Clients Say
                </h5>
      <h1 className="display-6 test-desc">
                  Building trust through the voices of those we’ve supported
                </h1>
      </div>
      <div className="row justify-content-center">
      <div className="col-lg-8">
      <div className="owl-carousel testimonial-carousel">
      <div className="testimonial-item text-center">
      <div className="position-relative mb-5">
      <img className="img-fluid rounded-circle mx-auto" src="img/test1.webp" alt="Something Here" />
      <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: '60px', height: '60px' }}>
      <i className="fa fa-quote-left fa-2x text-primary"></i>
      </div>
      </div>
      <p className="fs-4 fw-normal">
                        Working with Medical Islands has been an outstanding
                        experience. Their professionalism and attention to detail
                        exceeded our expectations.
                      </p>
      <hr className="w-25 mx-auto" />
      <h3>Ali Mohamed</h3>
      <h6 className="fw-normal text-primary mb-3">Doctor</h6>
      </div>
      <div className="testimonial-item text-center">
      <div className="position-relative mb-5">
      <img className="img-fluid rounded-circle mx-auto" src="img/testimonial-2.jpg" alt="Something Here" />
      <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: '60px', height: '60px' }}>
      <i className="fa fa-quote-left fa-2x text-primary"></i>
      </div>
      </div>
      <p className="fs-4 fw-normal">
                        The team at Medical Islands transformed our research into a
                        clear and impactful publication. Highly recommended.
                      </p>
      <hr className="w-25 mx-auto" />
      <h3>Ammar Yasser</h3>
      <h6 className="fw-normal text-primary mb-3">Profession</h6>
      </div>
      <div className="testimonial-item text-center">
      <div className="position-relative mb-5">
      <img className="img-fluid rounded-circle mx-auto" src="img/test2.webp" alt="Something Here" />
      <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: '60px', height: '60px' }}>
      <i className="fa fa-quote-left fa-2x text-primary"></i>
      </div>
      </div>
      <p className="fs-4 fw-normal">
                        Their support and expertise in medical writing made the entire
                        process smooth and stress-free. I’ll definitely work with them
                        again.
                      </p>
      <hr className="w-25 mx-auto" />
      <h3>Mohamed Tarek</h3>
      <h6 className="fw-normal text-primary mb-3">Profession</h6>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      
    </>
  )
}
