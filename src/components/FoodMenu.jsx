import { useState } from 'react'

const filters = ['All']

const foodItems = [
  { name: 'Steamed Momo', category: 'Momos', price: 'Rs 150', oldPrice: 'Rs 200', discount: '-25%', img: '/assets/images/steammomo.png', alt: 'Steamed Momo', description: 'Handmade dumplings stuffed with seasoned buffalo meat, served with spicy tomato achar.' },
  { name: 'Jhol Momo', category: 'Momos', price: 'Rs 180', oldPrice: 'Rs 250', discount: '-28%', img: '/assets/images/jhol momo.png', alt: 'Jhol Momo', description: 'Momo drowned in a tangy sesame and tomato-based soup — a Kathmandu street-food legend.' },
 
  { name: 'Thukpa', category: 'Curry', price: 'Rs 180', oldPrice: 'Rs 250', discount: '-28%', img: '/assets/images/thukpa.png', alt: 'Thukpa', description: 'Hearty Tibetan-style noodle soup with fresh vegetables and tender chicken — perfect for cold evenings.' },
]

function StarRating() {
  return (
    <div className="rating-wrapper">
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
    </div>
  )
}

export default function FoodMenu() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <section className="section food-menu" id="menu">
      <div className="container">

        <p className="section-subtitle" data-aos="fade-up">Taste of Nepal</p>

        <h2 className="h2 section-title" data-aos="fade-up" data-aos-delay="100">
          Our Signature <span className="span">Dishes</span>
        </h2>

        <p className="section-text" data-aos="fade-up" data-aos-delay="200">
          From the steaming momos of Chanfragadhi to the hearty dal bhat of the Himalayas — experience authentic Nepali flavors.
        </p>

        <ul className="fiter-list" data-aos="fade-up" data-aos-delay="300">
          {filters.map(filter => (
            <li key={filter}>
              <button
                className={`filter-btn${activeFilter === filter ? ' active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>

        <ul className="food-menu-list">
          {foodItems.map((item, index) => (
            <li key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="food-menu-card">

                <div className="card-banner">
                  <img src={item.img} width="300" height="300" loading="lazy"
                    alt={item.alt} className="w-100" />
                </div>

                <div className="wrapper">
                  <p className="category">{item.category}</p>
                  <StarRating />
                </div>

                <h3 className="h3 card-title">{item.name}</h3>

                {item.description && <p className="card-description">{item.description}</p>}

              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
