import img1 from "../assets/HomePage/image1.png";
export function StatsDiv() {
  return (
    <>
      <article className="stats-section">
        <img src={img1} alt="" className="stats-image" />

        <ul className="stats-list">
          <li className="stats-item">
            <h3 className="stats-number">50+</h3>

            <p className="stats-label">Projects Designed & Delivered</p>
          </li>

          {/* <li className="stats-item">
            <h3 className="stats-number">15+</h3>

            <p className="stats-label">Tools & Platforms Worked With</p>
          </li> */}

          <li className="stats-item">
            <h3 className="stats-number">3+</h3>

            <p className="stats-label">Years of Experience</p>
          </li>

          {/* <li className="stats-item">
            <h3 className="stats-number">30+</h3>

            <p className="stats-label">Worldwide Clients</p>
          </li> */}
        </ul>
      </article>
    </>
  );
}
