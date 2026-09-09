export default function Bar() {
  return (
    <section className="section section-divider white bar" id="bar">
      <div className="container">

        <figure className="bar-banner" data-aos="fade-right" data-aos-duration="1000">
          <img src="/assets/images/bar.png" width="900" height="800" loading="lazy" alt="Lachi Bar & Lounge"
            className="w-100 bar-img" />
        </figure>

        <div className="bar-content" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">

          <h2 className="h2 section-title">
            Unwind at Our
            <span className="span">Bar & Lounge</span>
          </h2>

          <p className="section-text">
            After a delicious meal, step into Lachi's cozy bar and lounge. Sip on handcrafted cocktails,
            premium spirits and refreshing local brews while soaking in the warm, welcoming ambience.
          </p>

          <ul className="bar-list">

            <li className="bar-item">
              <ion-icon name="wine-outline"></ion-icon>
              <span className="span">Curated Wines & Signature Cocktails</span>
            </li>

            <li className="bar-item">
              <ion-icon name="beer-outline"></ion-icon>
              <span className="span">Local & Imported Beers</span>
            </li>

            <li className="bar-item">
              <ion-icon name="musical-notes-outline"></ion-icon>
              <span className="span">Live Music & Cozy Ambience</span>
            </li>

          </ul>

        </div>

      </div>
    </section>
  )
}