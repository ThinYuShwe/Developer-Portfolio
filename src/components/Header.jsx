import "./Header.css";
import "../index.css";
import menu from "../assets/Header/circleMenu.png";
import { NavLink } from "react-router-dom";
import menu1 from "../assets/Header/menu1.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <nav className="main-nav-header" aria-label="Main navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" className="nav-logo">
              Portfolio
            </NavLink>
          </li>

          <li className="nav-item">
            <div className="dot-grid" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </li>
        </ul>
      </nav>

      {isMenuOpen && (
        <div className="menu">
          <nav className="menu-navigation">
            <ul className="menu-nav-lists">
              <li className="menu-nav-item">
                <Link to="/home" className="menu-nav-link">
                  Home
                </Link>
              </li>

              <li className="menu-nav-item">
                <Link to="/about" className="menu-nav-link">
                  About
                </Link>
              </li>

              <li className="menu-nav-item">
                <Link to="/projects" className="menu-nav-link">
                  Projects
                </Link>
              </li>

              <li className="menu-nav-item">
                <Link to="/contact" className="menu-nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <img src={menu1} alt="" className="menuImg" />
        </div>
      )}
    </header>
  );
}
