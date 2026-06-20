import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContactDiv } from "../components/ContactDiv";

import "../pages/ContactPage.css";
export default function ContactPage() {
  return (
    <div>
      <Header />
      <main>
        <ContactDiv className="contact-page-div" />
      </main>
      <Footer />
    </div>
  );
}
