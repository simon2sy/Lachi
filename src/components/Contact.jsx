import { useState } from 'react'

const contactDetails = [
  {
    icon: 'location-outline',
    title: 'Our Location',
    lines: ['New Baneshwor, Kathmandu', 'Nepal 44600'],
  },
  {
    icon: 'call-outline',
    title: 'Phone',
    lines: ['+977-1-425678', '+977-9801234567'],
  },
  {
    icon: 'mail-outline',
    title: 'Email',
    lines: ['info@lachi.com.np', 'reservations@lachi.com.np'],
  },
  {
    icon: 'time-outline',
    title: 'Opening Hours',
    lines: ['Sun–Fri: 11 AM – 10 PM', 'Saturday: 10 AM – 11 PM'],
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
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
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 4000)
  }

  return (
    <section className="section contact" id="contact-section">
      <div className="container">

        <p className="section-subtitle" data-aos="fade-up">Get In Touch</p>

        <h2 className="h2 section-title" data-aos="fade-up" data-aos-delay="100">
          We'd Love To <span className="span">Hear From You</span>
        </h2>

        <p className="section-text" data-aos="fade-up" data-aos-delay="200">
          Whether it's a reservation, feedback, or a partnership enquiry — drop us a message and we'll get back to you with a smile.
        </p>

        {/* Contact Info Cards */}
        <ul className="contact-cards">
          {contactDetails.map((item, index) => (
            <li key={index} className="contact-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="contact-card-icon">
                <ion-icon name={item.icon}></ion-icon>
              </div>
              <h3 className="h4 contact-card-title">{item.title}</h3>
              {item.lines.map((line, i) => (
                <p key={i} className="contact-card-text">{line}</p>
              ))}
            </li>
          ))}
        </ul>

        {/* Map + Form Row */}
        <div className="contact-body">

          <div className="contact-map" data-aos="fade-right" data-aos-duration="1000">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1788698661478!6m8!1m7!1smjW4KHM5e9-DsQYo83n_QQ!2m2!1d26.57117679671469!2d88.06835594873108!3f259.2857179362318!4f5.949519526649681!5f0.7820865974627469"
              width="600"
              height="450"
              style={{ border: 0, borderRadius: '8px', width: '100%', height: '100%' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Lachi Restaurant location on map"
            ></iframe>
          </div>

          <div className="contact-form-wrapper" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">

            {submitted ? (
              <div className="contact-success">
                <ion-icon name="checkmark-circle" className="success-icon"></ion-icon>
                <h3 className="h4">Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    aria-label="Your Name"
                    className="input-field"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    aria-label="Email Address"
                    className="input-field"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact-form-row">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    aria-label="Phone Number"
                    className="input-field"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <select
                    name="subject"
                    required
                    aria-label="Subject"
                    className="input-field"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select Subject</option>
                    <option value="reservation">Reservation</option>
                    <option value="feedback">Feedback</option>
                    <option value="catering">Catering Inquiry</option>
                    <option value="events">Private Events</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  required
                  placeholder="Your Message..."
                  aria-label="Your Message"
                  className="input-field contact-textarea"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

                <button type="submit" className="btn contact-submit-btn">Send Message</button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  )
}
