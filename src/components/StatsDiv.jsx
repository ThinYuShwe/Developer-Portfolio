import img1 from "../assets/HomePage/image1.png";
export function StatsDiv() {
  return (
    <>
      <article className="stats-section">
        <img src={img1} alt="" className="stats-image" />

        <ul className="stats-list">
          <li className="stats-item">
            <h3 className="stats-number">55+</h3>

            <p className="stats-label">Repositories Created</p>
          </li>

          <li className="stats-item">
            <h3 className="stats-number">7+</h3>

            <p className="stats-label">Completed Projects</p>
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
