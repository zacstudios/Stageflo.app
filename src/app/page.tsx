import Image from "next/image";

const featureCards = [
  {
    title: "Library to Live in Seconds",
    body: "Search songs, browse scripture, queue media, then send to projector or stage without bouncing between screens.",
  },
  {
    title: "Advanced Slide Editing",
    body: "Design rich lyric and scripture slides with layered text styling, spacing controls, and per-plan visual overrides.",
  },
  {
    title: "Built for Multi-Output Teams",
    body: "Control congregation output, stage confidence display, and lower-third overlays in one synchronized workflow.",
  },
  {
    title: "Service-Safe Reliability",
    body: "Desktop-first architecture with local data and fast rendering designed for live services where timing matters.",
  },
];

const installSteps = {
  macOS: [
    "Download the latest DMG from GitHub Releases.",
    "Open the DMG and drag StageFlo to Applications.",
    "Launch StageFlo and configure outputs.",
  ],
  Windows: [
    "Download the latest setup EXE from GitHub Releases.",
    "Run the installer and follow prompts.",
    "Launch StageFlo from Start Menu.",
  ],
  Linux: [
    "Download AppImage, DEB, or SNAP release assets.",
    "Install using your preferred package flow.",
    "Launch StageFlo and set presentation displays.",
  ],
};

export default function Home() {
  return (
    <div className="site-shell">
      <header className="top-nav">
        <a className="brand" href="#home" aria-label="StageFlo home">
          <Image src="/stageflo-icon.png" alt="StageFlo" width={30} height={30} />
          <span>StageFlo</span>
        </a>
        <nav>
          <a href="#features">Features</a>
          <a href="#screenshots">Screenshots</a>
          <a href="#install">Install</a>
          <a href="#community">Community</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <p className="eyebrow">Worship Presentation Software</p>
          <h1>Run Songs, Scripture, Media, and Multi-Screen Output from One Flow</h1>
          <p className="lead">
            StageFlo helps worship teams prepare and present with confidence across operator,
            projector, stage, and lower-third displays.
          </p>
          <div className="cta-row">
            <a
              className="button button-primary"
              href="https://github.com/zacstudios/stageflo/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Latest Release
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/zacstudios/stageflo"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source
            </a>
          </div>
        </section>

        <section className="feature-grid" id="features">
          {featureCards.map((feature) => (
            <article key={feature.title} className="card reveal">
              <h2>{feature.title}</h2>
              <p>{feature.body}</p>
            </article>
          ))}
        </section>

        <section className="screenshots" id="screenshots">
          <div className="section-head">
            <h2>Inside StageFlo</h2>
            <p>Drop real product screenshots in these slots as you capture your latest UI.</p>
          </div>
          <div className="shot-grid">
            <div className="shot reveal">
              <h3>Operator Workspace</h3>
              <p>Playlist planning, preview panel, and live controls.</p>
            </div>
            <div className="shot reveal">
              <h3>Slide Editor</h3>
              <p>Layer styling, typography tuning, and visual overrides.</p>
            </div>
            <div className="shot reveal">
              <h3>Projector and Stage Output</h3>
              <p>Readable congregation output with confidence monitor support.</p>
            </div>
          </div>
        </section>

        <section className="install" id="install">
          <div className="section-head">
            <h2>Install in Minutes</h2>
            <p>Use the latest GitHub release assets for your platform.</p>
          </div>
          <div className="install-grid">
            {Object.entries(installSteps).map(([platform, steps]) => (
              <article className="install-card reveal" key={platform}>
                <h3>{platform}</h3>
                <ol>
                  {steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                <a
                  href="https://github.com/zacstudios/stageflo/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Downloads
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="community" id="community">
          <div className="section-head">
            <h2>Docs and Community</h2>
          </div>
          <div className="cta-row">
            <a
              className="button button-secondary"
              href="https://github.com/zacstudios/stageflo#readme"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/zacstudios/stageflo/discussions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discussions
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/zacstudios/stageflo/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              Report an Issue
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>StageFlo</p>
        <small>Open-source worship presentation software for live services.</small>
      </footer>
    </div>
  );
}
