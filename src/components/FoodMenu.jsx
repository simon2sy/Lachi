import { useState } from 'react'

const filters = ['All', 'Momos', 'Curry', 'Newari', 'Drinks']

const foodItems = [
  { name: 'Steamed Momo', category: 'Momos', price: 'Rs 150', oldPrice: 'Rs 200', discount: '-25%', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Steamed%20Momos%20-%20KOLKATA.jpg?width=600', alt: 'Steamed Momo', description: 'Handmade dumplings stuffed with seasoned buffalo meat, served with spicy tomato achar.' },
  { name: 'Jhol Momo', category: 'Momos', price: 'Rs 180', oldPrice: 'Rs 250', discount: '-28%', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jhol%20Buff%20Momo%20.jpg?width=600', alt: 'Jhol Momo', description: 'Momo drowned in a tangy sesame and tomato-based soup — a Kathmandu street-food legend.' },
  { name: 'Dal Bhat Set', category: 'Newari', price: 'Rs 250', oldPrice: 'Rs 350', discount: '-29%', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dal%20bhat.jpg?width=600', alt: 'Dal Bhat Set', description: 'The Nepali national meal — steamed rice with lentil soup, seasonal tarkari, pickles, and ghee.' },
  { name: 'Sekuwa Kebab', category: 'Curry', price: 'Rs 350', oldPrice: 'Rs 450', discount: '-22%', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sekuwa%20Set.jpg?width=600', alt: 'Sekuwa Kebab', description: 'Charcoal-grilled marinated lamb, a beloved delicacy from the hills of eastern Nepal.' },
  { name: 'Chatamari', category: 'Newari', price: 'Rs 200', oldPrice: 'Rs 300', discount: '-33%', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Meat%20Chatamari.jpg?width=600', alt: 'Chatamari', description: 'Nepali rice crepe topped with minced meat, egg, and vegetables — the Newari pizza!' },
  { name: 'Thukpa', category: 'Curry', price: 'Rs 180', oldPrice: 'Rs 250', discount: '-28%', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chicken%20Thukpa.jpg?width=600', alt: 'Thukpa', description: 'Hearty Tibetan-style noodle soup with fresh vegetables and tender chicken — perfect for cold evenings.' },
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
    <section className="section food-menu" id="food-menu">
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

                  <div className="badge">{item.discount}</div>
                </div>

                <div className="wrapper">
                  <p className="category">{item.category}</p>
                  <StarRating />
                </div>

                <h3 className="h3 card-title">{item.name}</h3>

                {item.description && <p className="card-description">{item.description}</p>}

                <div className="price-wrapper">
                  <p className="price-text">Price:</p>
                  <data className="price">{item.price}</data>
                  <del className="del">{item.oldPrice}</del>
                </div>

              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
