import img2 from "../assets/HomePage/image2.png";

export function BackgroundDiv() {
  return (
    <>
      <section className="background-section">
        <header className="background-header">
          <h2 className="background-title">Background</h2>
          <p className="background-description">
            The education, experience, and achievements that shaped the thinking
            and craft behind every project.
          </p>
        </header>

        <article className="background-content">
          <ul className="background-categories">
            <li className="background-category">Education</li>
          </ul>
          <div className="background-details">
            <img src={img2} alt="" className="background-image" />

            <ul className="background-list">
              <li className="background-item">
                <article className="background-card">
                  <h3 className="background-card-title">
                    Higher National Diploma
                  </h3>

                  <div className="background-meta">
                    <p className="background-role">Software Enginnering</p>

                    <p className="background-date">2022 – 2025</p>
                  </div>
                </article>
              </li>

              <li className="background-item">
                <article className="background-card">
                  <h3 className="background-card-title">
                    Bachalor in Computing
                  </h3>

                  <div className="background-meta">
                    <p className="background-role">Software Enginnering</p>

                    <p className="background-date">2026</p>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </>
  );
}
