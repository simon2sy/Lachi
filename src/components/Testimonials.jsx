const testimonials = [
  {
    name: 'Aarav Sharma',
    title: 'Food Blogger, Kathmandu',
    text: '"Lachi has captured the true essence of Nepali cuisine. The momo here remind me of the ones my daju-bhai used to make back in Bhaktapur. Simply incredible!"',
    avatar: '/assets/images/avatar-1.jpg'
  },
  {
    name: 'Sita Thapa',
    title: 'Regular Customer',
    text: '"The dal bhat at Lachi is the best I have had outside my home. Every time I visit, it feels like eating at my own baa-mama\'s house. Dhanyabad, Lachi!"',
    avatar: '/assets/images/avatar-2.jpg'
  },
  {
    name: 'Ram Bahadur Gurung',
    title: 'Hotel Manager, Pokhara',
    text: '"I bring all my guests to Lachi. The sekuwa and chatamari are absolutely world-class. This place is a gem for anyone who loves authentic Nepali flavors."',
    avatar: '/assets/images/avatar-3.jpg'
  }
]

export default function Testimonials() {
  return (
    <section className="section section-divider white testi">
      <div className="container">

        <p className="section-subtitle" data-aos="fade-up">Testimonials</p>

        <h2 className="h2 section-title" data-aos="fade-up" data-aos-delay="100">
          What Our Guests <span className="span">Say</span>
        </h2>

        <p className="section-text" data-aos="fade-up" data-aos-delay="200">
          Don't just take our word for it — hear from the people who keep coming back for more Nepali goodness.
        </p>

        <ul className="testi-list has-scrollbar">
          {testimonials.map((item, index) => (
            <li key={index} className="testi-item" data-aos="fade-up" data-aos-delay={index * 150}>
              <div className="testi-card">

                <div className="profile-wrapper">

                  <figure className="avatar">
                    <img src={item.avatar} width="80" height="80" loading="lazy" alt={item.name} />
                  </figure>

                  <div>
                    <h3 className="h4 testi-name">{item.name}</h3>
                    <p className="testi-title">{item.title}</p>
                  </div>

                </div>

                <blockquote className="testi-text">
                  {item.text}
                </blockquote>

                <div className="rating-wrapper">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>

              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
