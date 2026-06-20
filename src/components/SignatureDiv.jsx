import { useEffect, useRef } from "react";

import img4 from "../assets/HomePage/image4.png";
import img5 from "../assets/HomePage/image5.png";
import img6 from "../assets/HomePage/image6.png";
import img7 from "../assets/HomePage/image7.png";
import img8 from "../assets/HomePage/image8.png";
import img9 from "../assets/HomePage/image9.png";
import img10 from "../assets/HomePage/image10.png";
import img11 from "../assets/HomePage/image11.png";
import img12 from "../assets/HomePage/image12.png";
import img13 from "../assets/HomePage/image13.png";
import img14 from "../assets/HomePage/image14.png";
import img15 from "../assets/HomePage/image15.png";

export function SignatureDiv() {
  // create a reference to the section element
  const sectionRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    let scrollTimeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const currentScrollY = window.scrollY;
            const delta = currentScrollY - lastScrollY;

            // 1. Handle the tilt/rotation on scroll
            let rotation = 0;
            if (Math.abs(delta) > 10) {
              rotation = delta / 40;
            }
            rotation = Math.max(-2, Math.min(2, rotation));
            sectionRef.current.style.setProperty(
              "--scroll-rot",
              `${rotation}deg`,
            );

            // 2. Controlled Marquee Movement
            const rect = sectionRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Check if the section is currently inside the viewport
            if (rect.top < viewportHeight && rect.bottom > 0) {
              // Calculate a percentage (0 to 1) of the section's progress through the screen
              const totalDistance = viewportHeight + rect.height;
              const progress = (viewportHeight - rect.top) / totalDistance;

              // Adjust 150 to change how far it can move max (e.g., 100 for less, 200 for more)
              const maxMovePixels = 150;
              const moveFactor = (progress - 0.5) * maxMovePixels;

              sectionRef.current.style.setProperty(
                "--scroll-translate",
                `${moveFactor}px`,
              );
            }

            lastScrollY = currentScrollY;
          }
          ticking = false;
        });
        ticking = true;
      }

      // Reset rotation only when scroll stops
      scrollTimeout = setTimeout(() => {
        if (sectionRef.current) {
          sectionRef.current.style.setProperty("--scroll-rot", "0deg");
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);
  return (
    <>
      <section className="signature-section" ref={sectionRef}>
        <div className="signature-track-wrapper">
          <div className="signature-row">
            <img src={img4} alt="" className="signature-image" />

            <p className="signature-text">Made</p>

            <img src={img5} alt="" className="signature-image" />

            <img src={img6} alt="" className="signature-image" />

            <img src={img13} alt="" className="signature-image" />
          </div>

          <div className="signature-row">
            <p className="signature-text">With</p>

            <img src={img7} alt="" className="signature-image" />

            <img src={img8} alt="" className="signature-image" />

            <img src={img9} alt="" className="signature-image" />

            <img src={img14} alt="" className="signature-image" />
          </div>

          <div className="signature-row">
            <img src={img10} alt="" className="signature-image" />

            <img src={img11} alt="" className="signature-image" />

            <p className="signature-text">Intent</p>

            <img src={img12} alt="" className="signature-image" />

            <img src={img15} alt="" className="signature-image" />
          </div>
        </div>
      </section>
    </>
  );
}
