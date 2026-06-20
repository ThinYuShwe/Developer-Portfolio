export function SkillsDiv() {
  return (
    <>
      <section className="skills-section">
        <header className="skills-header">
          <h2 className="skills-title">Skills</h2>

          <p className="skills-description">
            I build modern web applications with clean code, responsive design,
            and scalable solutions. Here are the skills and technologies I use.
          </p>
        </header>

        <ul className="skills-grid">
          <li className="skill-card">
            <article>
              <h3 className="skill-title">FRONTEND DEVELOPMENT</h3>

              <p className="skill-text">
                Building responsive and user-friendly websites using modern web
                technologies.
              </p>
            </article>
          </li>

          <li className="skill-card">
            <article>
              <h3 className="skill-title">REACT DEVELOPMENT</h3>

              <p className="skill-text">
                Building reusable components and dynamic user interfaces.
              </p>
            </article>
          </li>

          <li className="skill-card">
            <article>
              <h3 className="skill-title">DATABASE MANAGEMENT</h3>

              <p className="skill-text">
                Storing, managing, and retrieving data efficiently.
              </p>
            </article>
          </li>

          <li className="skill-card">
            <article>
              <h3 className="skill-title">VERSION CONTROL</h3>

              <p className="skill-text">
                Using Git and GitHub for collaboration and code management.
              </p>
            </article>
          </li>

          <li className="skill-card">
            <article>
              <h3 className="skill-title">PERFORMANCE OPTIMIZATION</h3>

              <p className="skill-text">
                Improving speed, accessibility, and overall user experience.
              </p>
            </article>
          </li>
        </ul>
      </section>
    </>
  );
}
