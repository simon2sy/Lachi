const galleryItems = [
  {
    image: '/assets/images/gallery/gallery1.jpeg',
    category: 'The Lachi Experience',
    caption: 'A warm welcome, made for sharing',
  },
  {
    image: '/assets/images/gallery/gallery2.jpeg',
    category: 'Nepali Flavours',
    caption: 'Traditional taste with a modern touch',
  },
  {
    image: '/assets/images/gallery/gallery3.jpeg',
    category: 'Freshly Prepared',
    caption: 'Beautiful dishes made with care',
  },
  {
    image: '/assets/images/gallery/gallery4.jpeg',
    category: 'Gather Together',
    caption: 'Good food tastes better together',
  },
]

export default function Gallery() {
  return (
    <section className="section section-divider white gallery" id="gallery">
      <div className="container">
        <p className="section-subtitle" data-aos="fade-up">A Glimpse Of Lachi</p>

        <h2 className="h2 section-title" data-aos="fade-up" data-aos-delay="100">
          Moments Worth <span className="span">Savouring</span>
        </h2>

        <p className="section-text" data-aos="fade-up" data-aos-delay="200">
          Step inside Lachi and discover the flavours, people, and moments that make every visit special.
        </p>

        <ul className="gallery-grid">
          {galleryItems.map((item, index) => (
            <li className="gallery-item" key={item.image} data-aos="fade-up" data-aos-delay={index * 100}>
              <figure className="gallery-card">
                <img
                  className="gallery-img"
                  src={item.image}
                  width="600"
                  height="600"
                  loading="lazy"
                  alt={item.caption}
                />
                <figcaption className="gallery-overlay">
                  <span className="gallery-category">{item.category}</span>
                  <span className="gallery-caption">{item.caption}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
