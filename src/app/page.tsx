const RELEASE_BASE_URL = "https://github.com/zacstudios/Stageflo.app/releases/download/v1.0.0-desktop";
const MAC_DOWNLOAD_URL = `${RELEASE_BASE_URL}/stageflo-1.0.0.dmg`;
const WINDOWS_DOWNLOAD_URL = `${RELEASE_BASE_URL}/stageflo-1.0.0-setup.exe`;

const testimonials = [
  {
    text: "StageFlo transformed our worship tech workflow. It's free, powerful, and just works.",
    author: "Marcus W.",
    role: "Worship Director",
  },
  {
    text: "The remote singer view is a game-changer. Our team feels more connected during every service.",
    author: "Sarah K.",
    role: "Tech Lead",
  },
  {
    text: "No subscriptions, no lock-in, pure functionality. This is worship software the right way.",
    author: "David L.",
    role: "Church Tech Lead",
  },
];

const featureGroups = [
  {
    title: "Content Creation",
    features: [
      { name: "Song Library Management", desc: "Search songs by title, artist, or lyrics instantly." },
      { name: "Bible Integration", desc: "Look up passages and convert them to slides in one click." },
      { name: "Custom Slides", desc: "Build announcements, prayers, and worship direction slides." },
      { name: "Media Integration", desc: "Embed videos, images, and audio directly into presentations." },
    ],
  },
  {
    title: "Live Control",
    features: [
      { name: "Hotkeys & Shortcuts", desc: "Control playback with keyboard shortcuts for your workflow." },
      { name: "Remote Controller", desc: "Manage presentations from wireless devices during service." },
      { name: "Multi-Output Sync", desc: "Control projector, stage display, and overlays simultaneously." },
      { name: "Remote Singer View", desc: "Dedicated monitor for singers showing current and next slides." },
    ],
  },
  {
    title: "Output and Design",
    features: [
      { name: "Advanced Text Styling", desc: "Rich formatting with fonts, colors, shadows, and outlines." },
      { name: "Lower-Third Overlays", desc: "Add song titles and speaker names to projector output." },
      { name: "Stage Display", desc: "Confidence monitor with notes and timing for speakers." },
      { name: "Template System", desc: "Design once, reuse across services with visual overrides." },
    ],
  },
];

const installSteps = {
  macOS: [
    "Open the StageFlo mac downloads page.",
    "Open the DMG and drag StageFlo to Applications.",
    "Launch StageFlo and configure outputs.",
  ],
  Windows: [
    "Open the StageFlo Windows downloads page.",
    "Run the installer and follow prompts.",
    "Launch StageFlo from Start Menu.",
  ],
};

const downloadCards = [
  {
    title: "Download for macOS",
    body: "Use the latest StageFlo universal DMG hosted directly on stageflo.app. macOS auto-update files are published from the desktop app pipeline.",
    href: MAC_DOWNLOAD_URL,
    label: "Download Mac DMG",
  },
  {
    title: "Download for Windows",
    body: "Use the latest StageFlo setup EXE hosted directly on stageflo.app. Windows installers are copied from the private main branch build pipeline.",
    href: WINDOWS_DOWNLOAD_URL,
    label: "Download Windows EXE",
  },
  {
    title: "Updater Feed",
    body: "StageFlo checks the update feed hosted at stageflo.app for packaged macOS builds. The feed lives under the stable /updates path.",
    href: "/updates/",
    label: "View Update Feed Info",
  },
];

const screenshotCards = [
  {
    title: "Operator Workspace",
    body: "Playlist planning, preview panel, and live controls.",
    src: "screenshots/operator-workspace.png",
    alt: "StageFlo operator workspace with library, playlist, and preview panels.",
  },
  {
    title: "Slide Editor",
    body: "Layer styling, typography tuning, and visual overrides.",
    src: "screenshots/slide-editor.png",
    alt: "StageFlo slide editor showing text and layout styling controls.",
  },
  {
    title: "Projector and Stage Output",
    body: "Readable congregation output with confidence monitor support.",
    src: "screenshots/projector-stage.png",
    alt: "StageFlo projector and stage output displays during a live presentation.",
  },
  {
    title: "Stage Display Focus",
    body: "Live current and next-slide confidence view for speakers and musicians.",
    src: "screenshots/stage-display.png",
    alt: "StageFlo stage display view showing current and next slide panels.",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="top-nav">
        <a className="brand" href="#home" aria-label="StageFlo home">
          <img src="stageflo-icon.png" alt="StageFlo" width={30} height={30} />
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
              href={MAC_DOWNLOAD_URL}
            >
              Download for macOS
            </a>
            <a
              className="button button-secondary"
              href={WINDOWS_DOWNLOAD_URL}
            >
              Download for Windows
            </a>
          </div>
        </section>

        <section className="install" id="downloads">
          <div className="section-head">
            <h2>Desktop Downloads</h2>
            <p>
              StageFlo desktop builds are published to the public release channel and mirrored here for direct downloads.
            </p>
          </div>
          <div className="install-grid">
            {downloadCards.map((card) => (
              <article className="install-card reveal" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <a href={card.href}>{card.label}</a>
              </article>
            ))}
          </div>
        </section>

        <section className="feature-grid" id="features">
          <div className="section-head" style={{ gridColumn: "1 / -1" }}>
            <h2>Our Mission</h2>
            <p>
              Worship teams spend too much on presentation software. We built StageFlo to be free, open-source, and powerful.
              No subscriptions, no lock-in, no limitations. Just worship tech that works for your team.
            </p>
          </div>
        </section>

        <section style={{ marginTop: "3rem" }}>
          <div className="section-head">
            <h2>Powerful Features Organized for Worship</h2>
            <p>Everything you need to run a professional, multi-output worship service.</p>
          </div>

          {featureGroups.map((group) => (
            <div key={group.title} style={{ marginTop: "2.3rem" }}>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "1rem", color: "var(--ink)" }}>{group.title}</h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "1rem",
                }}
              >
                {group.features.map((feature) => (
                  <article key={feature.name} className="card reveal">
                    <h4 style={{ fontSize: "1rem", marginBottom: "0.4rem", fontWeight: 600 }}>{feature.name}</h4>
                    <p>{feature.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section style={{ marginTop: "3.5rem" }}>
          <div className="section-head">
            <h2>What Teams Are Saying</h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.3rem",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <article
                key={`${testimonial.author}-${index}`}
                className="card reveal"
              >
                <p style={{ fontStyle: "italic" }}>
                  "{testimonial.text}"
                </p>
                <p style={{ marginTop: "0.9rem", marginBottom: 0, fontWeight: 600 }}>{testimonial.author}</p>
                <p style={{ marginTop: "0.25rem" }}>{testimonial.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="screenshots" id="screenshots">
          <div className="section-head">
            <h2>Inside StageFlo</h2>
            <p>Real screenshots from StageFlo workflows used during live services.</p>
          </div>
          <div className="shot-grid">
            {screenshotCards.map((shot) => (
              <figure key={shot.src} className="shot reveal">
                <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
                <figcaption>
                  <h3>{shot.title}</h3>
                  <p>{shot.body}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="install" id="install">
          <div className="section-head">
            <h2>Install in Minutes</h2>
            <p>Use the latest downloads hosted directly on stageflo.app for your platform.</p>
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
                  href={
                    platform === "macOS"
                      ? MAC_DOWNLOAD_URL
                      : WINDOWS_DOWNLOAD_URL
                  }
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
              href="/downloads/"
            >
              Downloads Hub
            </a>
            <a
              className="button button-secondary"
              href="/feedback/"
            >
              Feedback & Bugs
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/zacstudios/Stageflo.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/zacstudios/Stageflo.app/issues"
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
