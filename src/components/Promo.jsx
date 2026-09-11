const promoItems = [
  {
    title: 'Steamed Momo',
    text: 'Handcrafted dumplings — the soul of Nepali street food, filled with love and tradition.',
    img: '/assets/images/steammomom.png',
    alt: 'Steamed momo',
    icon: 'restaurant-outline',
  },
  {
    title: 'Veg Pokora',
    text: 'Crispy, golden vegetable fritters seasoned with comforting Nepali spices.',
    img: '/assets/images/veg pokora.png',
    alt: 'Vegetable pakora',
    icon: 'leaf-outline',
  },
  {
    title: 'Panner Pokora',
    text: 'Golden paneer fritters with a crisp coating and a soft, flavourful centre.',
    img: '/assets/images/panner pokora.png',
    alt: 'Paneer pakora',
    icon: 'sparkles-outline',
  },
]

export default function Promo() {
  return (
    <section className="section promo" id="promo">
      <div className="container">
        <p className="section-subtitle promo-subtitle" data-aos="fade-up">From Our Kitchen</p>

        <h2 className="h2 section-title promo-title" data-aos="fade-up" data-aos-delay="100">
          Featured <span className="span">Favourites</span>
        </h2>

        <p className="section-text promo-intro" data-aos="fade-up" data-aos-delay="200">
          Freshly prepared dishes that bring the warmth and flavour of Lachi to every table.
        </p>

        <ul className="promo-list has-scrollbar">
          {promoItems.map((item, index) => (
            <li key={item.title} className="promo-item" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="promo-card">
                <figure className="card-banner">
                  <img
                    src={item.img}
                    width="300"
                    height="300"
                    loading="lazy"
                    alt={item.alt}
                    className="w-100"
                  />
                  <span className="promo-badge">Lachi favourite</span>
                </figure>

                <div className="promo-card-content">
                  <div className="promo-card-heading">
                    <span className="promo-icon">
                      <ion-icon name={item.icon} aria-hidden="true"></ion-icon>
                    </span>
                    <h3 className="h3 card-title">{item.title}</h3>
                  </div>
                  <p className="card-text">{item.text}</p>
                  <span className="promo-link">Taste the tradition <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon></span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
