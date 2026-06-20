/* --- SIGNATURE SECTION FIXED --- */
  .signature-section {
    background-color: black;
    padding: 6rem 0;
    width: 100%;
    overflow: hidden; /* This makes sure anything sliding out horizontally is safely clipped */
    position: relative;
    --scroll-translate: 0px;
  }

  .signature-track-wrapper {
    --scroll-rot: 0deg;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    transform: rotateZ(var(--scroll-rot));
    transition: transform 0.25s cubic-bezier(0.1, 0.8, 0.3, 1);
    transform-origin: center center;
  }

  .signature-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    /* Use a tightly bounded width and negative margin so it centers perfectly */
    width: 115%;
    margin-left: -7.5%;
    will-change: transform;
  }

  /* Row movements */
  .signature-row:nth-child(1),
  .signature-row:nth-child(3) {
    transform: translateX(calc(var(--scroll-translate) * -1));
  }

  .signature-row:nth-child(2) {
    transform: translateX(var(--scroll-translate));
  }

  .signature-text {
    color: white;
    font-size: clamp(1.2rem, 3.5vw, 2.5rem);
    text-transform: uppercase;
    font-weight: bold;
    margin: 0 1rem;
    white-space: nowrap;
    flex-shrink: 0; /* Prevents text from being squished by images */
  }

  .signature-image {
    width: 22vw;
    max-width: 320px;
    height: 13vw;
    max-height: 200px;

    object-fit: cover;
    border-radius: 0.75rem;
    flex-shrink: 0;
  }