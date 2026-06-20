import { AboutDiv } from "../components/AboutDiv";
import { StatsDiv } from "../components/StatsDiv";
import { BackgroundDiv } from "../components/BackgroundDiv";
import { FAQDiv } from "../components/FAQDiv";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import img1 from "../assets/AboutPage/img1.jpg";
import "../pages/AboutPage.css";
export default function AboutPage() {
  return (
    <div className="about-page">
      <Header />
      <div className="about-page-div">
        <img src={img1} alt="" className="about-page-main-img" />
      </div>
      <main>
        <AboutDiv />
        <StatsDiv />
        <BackgroundDiv />
        <FAQDiv />
      </main>
      <Footer />
    </div>
  );
}
