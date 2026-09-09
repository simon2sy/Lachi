import { useState } from 'react'

export default function Footer() {
  const [formData, setFormData] = useState({
    full_name: '',
    email_address: '',
    total_person: 'person',
    booking_date: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ full_name: '', email_address: '', total_person: 'person', booking_date: '', message: '' })
    }, 3000)
  }

  return (
    <footer className="footer">

      <div className="footer-top" style={{ backgroundImage: "url('/assets/images/footer-illustration.png')" }}>
        <div className="container">

          <div className="footer-brand" data-aos="fade-up">

            <a href="#top" className="logo">Lachi<span className="span">.</span></a>

            <p className="footer-text">
              Serving the finest authentic Nepali cuisine with a modern twist. From our kitchen to your heart — taste the tradition.
            </p>

            <ul className="social-list">

              <li>
                <a href="https://www.facebook.com/share/1DDV4Z27f4/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="https://www.tiktok.com/@lachi_bypradhanlo?_r=1&_t=ZS-99a9yhH3qfh" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok">
                  <ion-icon name="logo-tiktok"></ion-icon>
                </a>
              </li>

            </ul>

          </div>

          <ul className="footer-list" data-aos="fade-up" data-aos-delay="100">

            <li>
              <p className="footer-list-title">Contact Info</p>
            </li>

            <li>
              <p className="footer-list-item">+977-1-425678</p>
            </li>

            <li>
              <p className="footer-list-item">info@lachi.com.np</p>
            </li>

            <li>
              <address className="footer-list-item">Bhadrapur-10, Jhapa, Nepal</address>
            </li>

          </ul>

          <ul className="footer-list" data-aos="fade-up" data-aos-delay="200">

            <li>
              <p className="footer-list-title">Opening Hours</p>
            </li>

            <li>
              <p className="footer-list-item">Sunday–Friday: 11:00–22:00</p>
            </li>

            <li>
              <p className="footer-list-item">Saturday: 10:00–23:00</p>
            </li>

            <li>
              <p className="footer-list-item">Public Holidays: 12:00–21:00</p>
            </li>

          </ul>

          <form action="" className="footer-form" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="300">

            <p className="footer-list-title">Book a Table</p>

            {submitted && (
              <p style={{ color: 'var(--deep-saffron)', fontWeight: 600, marginBottom: '15px', textAlign: 'center' }}>
                ✅ Thank you! Your reservation request has been received.
              </p>
            )}

            <div className="input-wrapper">

              <input
                type="text"
                name="full_name"
                required
                placeholder="Your Name"
                aria-label="Your Name"
                className="input-field"
                value={formData.full_name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email_address"
                required
                placeholder="Email"
                aria-label="Email"
                className="input-field"
                value={formData.email_address}
                onChange={handleChange}
              />

            </div>

            <div className="input-wrapper">

              <select
                name="total_person"
                aria-label="Total person"
                className="input-field"
                value={formData.total_person}
                onChange={handleChange}
              >
                <option value="person">Person</option>
                <option value="2 person">2 Person</option>
                <option value="3 person">3 Person</option>
                <option value="4 person">4 Person</option>
                <option value="5 person">5 Person</option>
                <option value="6+ person">6+ Person</option>
              </select>

              <input
                type="date"
                name="booking_date"
                aria-label="Reservation date"
                className="input-field"
                value={formData.booking_date}
                onChange={handleChange}
              />

            </div>

            <textarea
              name="message"
              required
              placeholder="Message"
              aria-label="Message"
              className="input-field"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="btn">Book a Table</button>

          </form>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright-text">
            &copy; 2025 <a href="#top" className="copyright-link">Lachi Restaurant</a> All Rights Reserved. Made with ❤️ in Nepal.
          </p>
        </div>
      </div>

    </footer>
  )
}
