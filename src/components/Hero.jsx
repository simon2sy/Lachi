export default function Hero() {
  return (
    <section className="hero" id="home" style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}>
      <div className="container">

        <div className="hero-content" data-aos="fade-right" data-aos-duration="1000">

          <p className="hero-subtitle">Authentic Nepali Cuisine</p>

          <h2 className="h1 hero-title">Taste the Himalayas at Lachi!</h2>

          <p className="hero-text">From handcrafted momos to aromatic dal bhat, every dish tells a story of Nepal's rich culinary heritage.</p>

        </div>

        <figure className="hero-banner" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
          <img src="/assets/images/hero-banner-bg.png" width="820" height="716" alt="" aria-hidden="true"
            className="w-100 hero-img-bg" />

        </figure>

      </div>
    </section>
  )
}
