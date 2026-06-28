import img3 from "../assets/HomePage/image3.png";

export function ContactDiv({ className = "" }) {
  return (
    <>
      <section className={`${className}`}>
        <header className="contact-header">
          <h2 className="contact-title">Get in Touch</h2>

          <p className="contact-description">
            Open to full-time roles, freelance projects, and meaningful design
            conversations. Drop a message — it won’t sit unanswered for long.
          </p>
        </header>

        <div className="contact-content">
          <article className="contact-form-card">
            <h3 className="contact-form-title">Say Hello!</h3>

            <form className="contact-form" action="">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Your Phone Number</label>

                <input type="tel" id="phone" name="phone" autoComplete="tel" />
              </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </article>

          <aside className="contact-details">
            <img src={img3} alt="" className="contact-image" />

            <ul className="contact-list">
              <li className="contact-item">
                <h3 className="contact-item-title">Email</h3>

                <a href="mailto:hello@gmail.com" className="contact-link">
                  mileyaleynaedu226@gmail.com
                </a>
              </li>

              <li className="contact-item">
                <h3 className="contact-item-title">Call Me</h3>

                <a href="tel:+18084569890" className="contact-link">
                  09 - 243241345
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
