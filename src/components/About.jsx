export default function About() {
  const scrollToMenu = (e) => {
    e.preventDefault()
    const menu = document.getElementById('food-menu')
    if (menu) {
      menu.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="section section-divider gray about" id="about">
      <div className="container">

        <div className="about-banner" data-aos="zoom-in" data-aos-duration="800">
          <img src="/assets/images/burger%20and%20coke.jpg" width="509" height="459" loading="lazy" alt="Burger with Drinks"
            className="w-100 about-img" />
        </div>

        <div className="about-content" data-aos="fade-left" data-aos-delay="200">

          <h2 className="h2 section-title">
            A Taste of Nepal
            <span className="span">Right Here!</span>
          </h2>

          <p className="section-text">
            Born in the heart of Kathmandu, Lachi brings you the authentic flavors of Nepali cuisine. Our recipes have been passed down through generations, blending traditional spices with modern culinary artistry.
          </p>

          <ul className="about-list">

            <li className="about-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span className="span">Authentic Nepali Recipes</span>
            </li>

            <li className="about-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span className="span">Freshly Ground Spices Daily</span>
            </li>

            <li className="about-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span className="span">Warm Nepali Hospitality</span>
            </li>

            <li className="about-item">
              <ion-icon name="checkmark-outline"></ion-icon>
              <span className="span">Fast Home Delivery</span>
            </li>

          </ul>

          <button className="btn btn-hover" onClick={scrollToMenu}>Explore Menu</button>

        </div>

      </div>
    </section>
  )
}
