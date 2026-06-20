export function ProcessDiv() {
  return (
    <>
      <section className="process-section">
        <header className="process-header">
          <h2 className="process-title">DEVELOPMENT PROCESS</h2>

          <p className="process-description">
            Every successful web application follows a structured development
            workflow. From planning and coding to deployment and maintenance,
            each step ensures a reliable and scalable product.
          </p>
        </header>

        <ol className="process-list">
          <li className="process-step">
            <article className="process-card">
              <h3 className="process-step-title">PLANNING</h3>

              <p className="process-step-text">
                Analyze project requirements, define features, and choose the
                right technologies before development begins.
              </p>
            </article>
          </li>

          <li className="process-step">
            <article className="process-card">
              <h3 className="process-step-title">DESIGN</h3>

              <p className="process-step-text">
                Create wireframes and plan the user interface to ensure a smooth
                and intuitive user experience.
              </p>
            </article>
          </li>

          <li className="process-step">
            <article className="process-card">
              <h3 className="process-step-title">DEVELOPMENT</h3>

              <p className="process-step-text">
                Build responsive frontends, secure backends, and scalable
                application architecture using modern technologies.
              </p>
            </article>
          </li>

          <li className="process-step">
            <article className="process-card">
              <h3 className="process-step-title">TESTING</h3>

              <p className="process-step-text">
                Verify functionality, performance, and responsiveness across
                devices and browsers to ensure quality.
              </p>
            </article>
          </li>

          <li className="process-step">
            <article className="process-card">
              <h3 className="process-step-title">DEPLOYMENT</h3>

              <p className="process-step-text">
                Launch applications using modern hosting platforms.
              </p>
            </article>
          </li>

          <li className="process-step">
            <article className="process-card">
              <h3 className="process-step-title">MAINTENANCE</h3>

              <p className="process-step-text">
                Monitor performance, fix bugs, and implement updates to keep
                applications secure and up to date.
              </p>
            </article>
          </li>
        </ol>
      </section>
    </>
  );
}
