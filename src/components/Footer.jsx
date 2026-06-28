import "./Footer.css";
import "../index.css";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="site-footer">
      <section className="footer-intro">
        <h2 className="footer-title">Get in Touch</h2>
      </section>

      <div className="footer-content">
        {/* <nav className="social-navigation" aria-label="Social media links">
          <h3 className="footer-heading">Follow Me</h3>

          <ul className="footer-list">
            <li className="footer-list-item">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                LinkedIn
              </a>
            </li>

            <li className="footer-list-item">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Instagram
              </a>
            </li>

            <li className="footer-list-item">
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Dribbble
              </a>
            </li>

            <li className="footer-list-item">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                YouTube
              </a>
            </li>
          </ul>
        </nav> */}

        <nav className="footer-navigation" aria-label="Footer navigation">
          <h3 className="footer-heading">Navigation</h3>

          <ul className="footer-list">
            <li className="footer-list-item">
              <Link to="/home" className="footer-link">
                Home
              </Link>
            </li>

            <li className="footer-list-item">
              <Link to="/about" className="footer-link">
                About
              </Link>
            </li>

            <li className="footer-list-item">
              <Link to="/projects" className="footer-link">
                Projects
              </Link>
            </li>

            <li className="footer-list-item">
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
