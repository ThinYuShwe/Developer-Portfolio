import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AboutDiv } from "../components/AboutDiv";
import { StatsDiv } from "../components/StatsDiv";
import { ProjectsDiv } from "../components/ProjectsDiv";
import { SkillsDiv } from "../components/SkillsDiv";
import { ProcessDiv } from "../components/ProcessDiv";
import { BackgroundDiv } from "../components/BackgroundDiv";
import { FAQDiv } from "../components/FAQDiv";
import { ContactDiv } from "../components/ContactDiv";
import { SignatureDiv } from "../components/SignatureDiv";

import "./HomePage.css";
import "../index.css";

import homeBg from "../assets/HomePage/homeBg.png";
import github from "../assets/HomePage/github.png";
import instagram from "../assets/HomePage/instagram.png";
import linkedin from "../assets/HomePage/linkedin.png";
import youtube from "../assets/HomePage/youtube.png";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="home-page">
        <section className="hero-section">
          <div className="hero-image-container">
            <img
              src={homeBg}
              alt="Portrait background for Carolina portfolio homepage"
              className="hero-image"
            />
          </div>

          <div className="hero-content">
            <div className="hero-introduction">
              <article className="intro-text">
                <p className="hero-description">
                  Hi! I'm a Web Developer, looking for my next opportunity. I
                  build responsive, user-friendly websites and enjoy turning
                  complex problems into clean, efficient, and scalable
                  solutions.
                </p>
                <nav
                  className="social-navigation"
                  aria-label="Social media links"
                >
                  <ul className="social-list">
                    <li className="social-item">
                      <a
                        href="https://github.com/ThinYuShwe"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit GitHub profile"
                      >
                        <img src={github} alt="" className="social-icon" />
                      </a>
                    </li>

                    {/* <li className="social-item">
                      <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Instagram profile"
                      >
                        <img src={instagram} alt="" className="social-icon" />
                      </a>
                    </li>

                    <li className="social-item">
                      <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit LinkedIn profile"
                      >
                        <img src={linkedin} alt="" className="social-icon" />
                      </a>
                    </li>

                    <li className="social-item">
                      <a
                        href="https://youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit YouTube profile"
                      >
                        <img src={youtube} alt="" className="social-icon" />
                      </a>
                    </li> */}
                  </ul>
                </nav>
              </article>

              <h1 className="hero-title">Thin Yu Shwe Yee</h1>
            </div>

            <section className="hero-details" aria-label="Profile details">
              <div className="detail-card">
                <p className="detail-text">Myanmar</p>
              </div>

              <div className="detail-card">
                <p className="detail-text">Web Developer</p>
              </div>

              <div className="detail-card">
                <p className="detail-text">Available for work</p>
              </div>
            </section>
          </div>
        </section>

        <section className="section-collection">
          <AboutDiv />
          <StatsDiv />
          <ProjectsDiv className="home-projects-div" />
          <SkillsDiv />
          <ProcessDiv />
          <BackgroundDiv />
          <FAQDiv />
          <ContactDiv className="contact-section" />
          <SignatureDiv />
        </section>
      </main>
      <Footer />
    </>
  );
}
