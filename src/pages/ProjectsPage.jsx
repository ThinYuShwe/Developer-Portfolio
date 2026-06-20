import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { ProjectsDiv } from "../components/ProjectsDiv";
import "../pages/ProjectsPage.css";

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <Header />
      <main className="projects-page-main">
        <ProjectsDiv className="projects-page-div" />
      </main>
      <Footer />
    </div>
  );
}
