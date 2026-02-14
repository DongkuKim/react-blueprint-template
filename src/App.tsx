const blueprintLinks = {
  docs: 'https://blueprintjs.com/docs/',
  contract: 'https://blueprintjs.com/docs/#blueprint/principles.api-contract',
  palantir: 'https://github.com/palantir/blueprint',
};

export function App() {
  return (
    <div>
      <header className="bp5-navbar">
        <div className="bp5-navbar-group bp5-align-left">
          <div className="bp5-navbar-heading">React + Blueprint Template</div>
          <span className="bp5-navbar-divider" />
          <span className="bp5-tag bp5-minimal bp5-intent-primary">Palantir Blueprint</span>
        </div>
      </header>

      <main className="app-shell">
        <section className="bp5-card bp5-elevation-2 hero-card">
          <h1 className="bp5-heading">Blueprint-first React starter</h1>
          <p>
            This project is a React starter styled with Blueprint design language and references
            Blueprint principles and API contract guidance.
          </p>
          <div className="bp5-button-group">
            <a className="bp5-button" href={blueprintLinks.docs} target="_blank" rel="noreferrer">
              Blueprint docs
            </a>
            <a className="bp5-button bp5-intent-primary" href={blueprintLinks.contract} target="_blank" rel="noreferrer">
              API contract principles
            </a>
          </div>
        </section>

        <section className="bp5-card bp5-elevation-1">
          <h3 className="bp5-heading">Best-practice notes</h3>
          <ul>
            <li>Use composable Blueprint primitives for consistent layout and interactions.</li>
            <li>Prefer semantic intent classes to communicate action meaning.</li>
            <li>Keep component APIs explicit and predictable per Blueprint contract principles.</li>
          </ul>
          <div className="bp5-callout bp5-intent-success">
            <h5 className="bp5-heading">Credit</h5>
            <p>
              UI styling is powered by{' '}
              <a href={blueprintLinks.palantir} target="_blank" rel="noreferrer">
                Blueprint by Palantir
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
