export default function Delivery({ deliveryBoyRef, deliveryBoyMove }) {
  return (
    <section className="section section-divider gray delivery">
      <div className="container">

        <div className="delivery-content" data-aos="fade-right" data-aos-duration="1000">

          <h2 className="h2 section-title">
            Fresh Flavors Delivered <span className="span">Right On Time</span> & Place
          </h2>

          <p className="section-text">
            Whether you're in the heart of Bhadrapur or the nearby corners of Jhapa, our delivery team brings the taste of Lachi straight to your doorstep — fast, hot, and fresh.
          </p>

        </div>

        <figure className="delivery-banner" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
          <img src="/assets/images/delivery-banner-bg.png" width="700" height="602" loading="lazy" alt="clouds"
            className="w-100" />

          <img
            ref={deliveryBoyRef}
            src="/assets/images/delivery-boy.svg"
            width="1000"
            height="880"
            loading="lazy"
            alt="delivery boy"
            className="w-100 delivery-img"
            data-delivery-boy
            style={{ transform: `translateX(${deliveryBoyMove}px)` }}
          />
        </figure>

      </div>
    </section>
  )
}
