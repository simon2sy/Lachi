import { useState } from 'react'

const whatsappNumber = '9779842692212'

const contactDetails = [
  {
    icon: 'location-outline',
    title: 'Our Location',
    lines: ['Bhadrapur-10, Jhapa', 'Nepal'],
  },
  {
    icon: 'call-outline',
    title: 'Phone',
    lines: ['+977 9842692212', '+977 9862751525'],
  },
  {
    icon: 'mail-outline',
    title: 'Email',
    lines: ['shresthaindira479@gmail.com'],
  },
  {
    icon: 'time-outline',
    title: 'Opening Hours',
    lines: ['Every day: 7 am to 9 pm'],
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
    const whatsappMessage = [
      'New message for Lachi',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      `Subject: ${formData.subject}`,
      `Message: ${formData.message}`,
    ].join('\n')

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank',
      'noopener,noreferrer',
    )
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 4000)
  }

  return (
    <section className="section contact" id="contact">
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1784.2147059073113!2d88.068302!3d26.5705924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5af6ff2192acf%3A0x416af7cdda523a40!2sLACHI%20BY%20PRADHAN%20LODGE!5e0!3m2!1sen!2snp!4v1788944291315!5m2!1sen!2snp"
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
