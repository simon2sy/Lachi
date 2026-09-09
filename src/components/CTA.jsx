export default function CTA() {
  return (
    <section className="section section-divider white cta" style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}>
      <div className="container">

        <div className="cta-content" data-aos="fade-right" data-aos-duration="1000">

          <h2 className="h2 section-title">
            Lachi Serves The Finest
            <span className="span">Nepali Delicacies!</span>
          </h2>

          <p className="section-text">
            Our chefs handpick the freshest ingredients from local markets, ensuring every bite carries the warmth of Nepali tradition. From the mountains to your plate.
          </p>

        </div>

        <figure className="cta-banner" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
          <img src="/assets/images/cta-banner.png" width="700" height="637" loading="lazy" alt="Lachi Nepali Food"
            className="w-100 cta-img" />

         
        </figure>

      </div>
    </section>
  )
}
