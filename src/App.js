import React from 'https://esm.sh/react@19.2.0';
import htm from 'https://esm.sh/htm@3.1.1';

const html = htm.bind(React.createElement);

const blueprintLinks = {
  docs: 'https://blueprintjs.com/docs/',
  contract: 'https://blueprintjs.com/docs/#blueprint/principles.api-contract',
  palantir: 'https://github.com/palantir/blueprint',
};

export function App() {
  return html`
    <div>
      <header className="bp5-navbar">
        <div className="bp5-navbar-group bp5-align-left">
          <div className="bp5-navbar-heading">Blueprint Sample UI</div>
          <span className="bp5-navbar-divider"></span>
          <span className="bp5-tag bp5-minimal bp5-intent-primary">React Blueprint Template</span>
        </div>
      </header>

      <main className="app-shell">
        <section className="bp5-card bp5-elevation-2">
          <h1 className="bp5-heading">Welcome to Blueprint</h1>
          <p>
            This page demonstrates a practical, composable UI using Blueprint primitives with semantic
            intent styles, clear hierarchy, and accessible controls.
          </p>
          <div className="hero-actions">
            <a className="bp5-button" href=${blueprintLinks.docs} target="_blank" rel="noreferrer">Blueprint docs</a>
            <a className="bp5-button bp5-intent-primary" href=${blueprintLinks.contract} target="_blank" rel="noreferrer">API contract principles</a>
          </div>
        </section>

        <section className="feature-grid" aria-label="Blueprint best-practice samples">
          <article className="bp5-card bp5-elevation-1 feature-card">
            <h3 className="bp5-heading">Composable layout</h3>
            <p>Cards and callouts provide consistent structure for grouped content and actions.</p>
            <button type="button" className="bp5-button bp5-small">Learn more</button>
          </article>

          <article className="bp5-card bp5-elevation-1 feature-card">
            <h3 className="bp5-heading">Semantic intent</h3>
            <p>Use intent classes to express meaning and reduce ambiguous actions.</p>
            <span className="bp5-tag bp5-intent-success">Healthy</span>
            <span className="bp5-tag bp5-intent-warning">Needs review</span>
          </article>

          <article className="bp5-card bp5-elevation-1 feature-card">
            <h3 className="bp5-heading">Accessible controls</h3>
            <label className="bp5-label" htmlFor="sample-input">
              Project name
              <input id="sample-input" className="bp5-input" type="text" placeholder="Blueprint starter" />
            </label>
          </article>
        </section>

        <section className="bp5-callout bp5-intent-success" aria-label="Blueprint credit">
          <h5 className="bp5-heading">Credit</h5>
          <p>
            Visual language and components are based on
            <a href=${blueprintLinks.palantir} target="_blank" rel="noreferrer"> Blueprint by Palantir</a>.
          </p>
        </section>
      </main>
    </div>
  `;
}
