import project1 from "../assets/HomePage/project1.png";
import project2 from "../assets/HomePage/project2.png";
import project3 from "../assets/HomePage/project3.png";
import project4 from "../assets/HomePage/project4.png";
import project5 from "../assets/HomePage/project5.png";
import project6 from "../assets/HomePage/project6.png";

export function ProjectsDiv({ className = "" }) {
  return (
    <>
      <section className={`${className}`}>
        <header className="projects-header">
          <div className="projects-heading-group">
            <h2 className="projects-title">Projects</h2>
            <div className="projects-heading-inner-group">
              <p className="projects-description">
                A collection of web development projects built with modern
                technologies, clean code, and responsive design.
              </p>
              <button className="projects-link">View all projects</button>
            </div>
          </div>
        </header>

        <ul className="projects-grid">
          <li className="project-card">
            <article className="project-card-article1">
              <a
                href=" https://thinyushwe.github.io/luxury-hotel-and-resort/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project1}
                  alt="Preview of Project One"
                  className="project-image1"
                />
              </a>
              <h3 className="project-title">React</h3>
            </article>
          </li>

          <div className="project-card-group1">
            <li className="project-card project-card-2">
              <article className="project-card-article2">
                <a
                  href=" https://thinyushwe.github.io/40794410-Memory-Game-Assessment-Final/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project2}
                    alt="Preview of Project Two"
                    className="project-image2"
                  />
                </a>
                <h3 className="project-title">JavaScript</h3>
              </article>
            </li>

            <li className="project-card project-card-3">
              <article className="project-card-article3">
                <a
                  href="https://thinyushwe.github.io/Tip-calculator-app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project3}
                    alt="Preview of Project Three"
                    className="project-image3"
                  />
                </a>
                <h3 className="project-title">JavaScript</h3>
              </article>
            </li>
          </div>

          <li className="project-card">
            <article>
              <a
                href="https://thinyushwe.github.io/Velina-Ecommerce/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project4}
                  alt="Preview of Project Four"
                  className="project-image4"
                />
              </a>
              <h3 className="project-title">React</h3>
            </article>
          </li>

          <div className="project-card-group2">
            <li className="project-card project-card-5">
              <article className="project-card-article5">
                <a
                  href="https://thinyushwe.github.io/Social-Media-Dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project5}
                    alt="Preview of Project Five"
                    className="project-image5"
                  />
                </a>
                <h3 className="project-title">JavaScript</h3>
              </article>
            </li>

            <li className="project-card project-card-6">
              <article className="project-card-article6">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src={project6}
                    alt="Preview of Project Six"
                    className="project-image6"
                  />
                </a>
                <h3 className="project-title">React</h3>
              </article>
            </li>
          </div>
        </ul>
      </section>
    </>
  );
}
