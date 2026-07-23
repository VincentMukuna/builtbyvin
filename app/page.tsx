const Arrow = () => <span aria-hidden="true">↗</span>;

const ExternalLink = ({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <a
    className={className}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Built by Vin, home">
          Built by Vin<span className="wordmark-dot">.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
        </nav>
        <ExternalLink
          href="https://www.upwork.com/freelancers/vinmukuna"
          className="header-cta"
        >
          Let&apos;s talk <Arrow />
        </ExternalLink>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            Full-stack product developer
            <span className="availability">Open to good work</span>
          </p>
          <h1>
            I build polished web, mobile, and{" "}
            <span className="accent-word">AI products.</span>
          </h1>
          <p className="hero-intro">
            I&apos;m Vincent Mukuna, a product-minded developer helping founders
            and small teams turn ideas, designs, and existing software into
            products that feel clear, reliable, and ready for real users.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              See selected work <span aria-hidden="true">↓</span>
            </a>
            <ExternalLink
              className="text-link"
              href="https://www.linkedin.com/in/vinmukuna/"
            >
              Connect on LinkedIn <Arrow />
            </ExternalLink>
          </div>
          <div className="hero-proof" aria-label="Experience summary">
            <span>5+ years building software</span>
            <span>Web · Mobile · AI</span>
            <span>Nairobi · Working remotely</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Preview of Vincent's work">
          <div className="visual-label">
            <span>01</span>
            <span>Latest build</span>
          </div>
          <img
            src="/work/owwed-site.png"
            alt="Owwed product website showing the private debt tracker mobile app"
          />
          <div className="visual-caption">
            <div>
              <strong>Owwed</strong>
              <span>Product design &amp; mobile development</span>
            </div>
            <ExternalLink href="https://owwed.builtby.vin">
              Live product <Arrow />
            </ExternalLink>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Verified Upwork proof">
        <div className="shell trust-inner">
          <span className="trust-source">Verified on Upwork</span>
          <div className="trust-stat">
            <strong>100%</strong>
            <span>Job Success</span>
          </div>
          <div className="trust-stat">
            <strong>Top Rated</strong>
            <span>Freelancer</span>
          </div>
          <div className="trust-stat">
            <strong>5.0</strong>
            <span>Client rating</span>
          </div>
          <div className="trust-stat">
            <strong>2.8K+</strong>
            <span>Hours logged</span>
          </div>
          <ExternalLink
            href="https://www.upwork.com/freelancers/vinmukuna"
            className="trust-link"
          >
            View profile <Arrow />
          </ExternalLink>
        </div>
      </section>

      <section className="work-section shell" id="work">
        <div className="section-heading">
          <p className="section-label">Selected work / 2024—2026</p>
          <h2>Products and features built around real user workflows.</h2>
          <p>
            Three projects that show how I move between new product ideas,
            production codebases, complex interfaces, and the details that make
            software feel finished.
          </p>
        </div>

        <article className="project project-owwed">
          <div className="project-meta">
            <span>01 / Mobile product</span>
            <span>Independent build</span>
          </div>
          <div className="project-copy">
            <div>
              <h3>Owwed</h3>
              <p className="project-lede">
                A private, local-first app for remembering money between people.
              </p>
            </div>
            <p className="project-story">
              I took Owwed from a personal frustration to a working mobile
              product—shaping the core flows, visual language, and
              implementation. The hard part was making detailed debt records
              feel simple without losing the context people need later.
            </p>
          </div>
          <div className="project-image owwed-stage">
            <img
              src="/work/owwed-site.png"
              alt="Owwed interface presented on its dark product website"
            />
          </div>
          <div className="project-footer">
            <ul>
              <li>Local-first, with no account required</li>
              <li>Partial payments, reminders, and clear history</li>
              <li>Designed for iOS and Android</li>
            </ul>
            <ExternalLink
              href="https://owwed.builtby.vin"
              className="project-link"
            >
              Explore Owwed <Arrow />
            </ExternalLink>
          </div>
        </article>

        <article className="project project-kibbe">
          <div className="project-meta">
            <span>02 / AI product</span>
            <span>Frontend &amp; product input</span>
          </div>
          <div className="project-copy">
            <div>
              <h3>KibbeAI</h3>
              <p className="project-lede">
                Conversational fashion discovery without the usual search-box
                limits.
              </p>
            </div>
            <p className="project-story">
              I helped turn an open-ended AI interaction into a structured
              product experience. My focus was the frontend: guiding users from
              a natural-language request to useful, browsable results while
              keeping the assistant present but never in the way.
            </p>
          </div>
          <div className="project-image kibbe-stage">
            <img
              src="/work/kibbe-search.png"
              alt="KibbeAI search results with product recommendations and an AI assistant conversation"
            />
          </div>
          <div className="project-footer">
            <ul>
              <li>AI-guided search and product discovery</li>
              <li>Responsive results and conversation layouts</li>
              <li>Launched as a complete customer-facing experience</li>
            </ul>
            <span className="project-note">Screens from the shipped product</span>
          </div>
        </article>

        <article className="project project-stock">
          <div className="project-meta">
            <span>03 / Production SaaS</span>
            <span>Dashboard redesign &amp; maintenance</span>
          </div>
          <div className="project-copy">
            <div>
              <h3>StockMarketGuides</h3>
              <p className="project-lede">
                A clearer dashboard for research, trading ideas, and dense
                financial data.
              </p>
            </div>
            <p className="project-story">
              Working inside an established product, I redesigned and rebuilt
              key dashboard surfaces used by real customers. The work balances
              dense data, filtering, subscription logic, and ongoing
              maintenance without disrupting the product people already rely
              on.
            </p>
          </div>
          <div className="project-image stock-stage">
            <img
              src="/work/stock-scores.png"
              alt="StockMarketGuides dashboard showing score filters and a detailed stock results table"
            />
          </div>
          <div className="project-footer">
            <ul>
              <li>Data-heavy tables, scores, and filtering</li>
              <li>Ongoing work in a live, established codebase</li>
              <li>Close product and engineering collaboration</li>
            </ul>
            <ExternalLink
              href="https://stockmarketguides.com"
              className="project-link"
            >
              Visit product <Arrow />
            </ExternalLink>
          </div>
        </article>
      </section>

      <section className="services-section" id="services">
        <div className="shell">
          <div className="section-heading services-heading">
            <p className="section-label">What I help with</p>
            <h2>From a useful idea to a reliable product.</h2>
          </div>
          <div className="services-grid">
            <article>
              <span className="service-number">01</span>
              <h3>Web products</h3>
              <p>
                SaaS platforms, customer portals, dashboards, admin tools, and
                production features built around the way people actually work.
              </p>
            </article>
            <article>
              <span className="service-number">02</span>
              <h3>Mobile apps</h3>
              <p>
                Thoughtful cross-platform apps, including offline workflows,
                notifications, local-first data, and the unglamorous edge cases.
              </p>
            </article>
            <article>
              <span className="service-number">03</span>
              <h3>AI features</h3>
              <p>
                Assistants, guided generation, conversational interfaces, and
                AI capabilities that earn their place in the product.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="process-section shell">
        <div className="process-intro">
          <p className="section-label">How I work</p>
          <h2>Clear thinking. Steady delivery. Care at the finish.</h2>
        </div>
        <ol className="process-list">
          <li>
            <span>01</span>
            <div>
              <h3>Start with the workflow</h3>
              <p>
                Understand the user, the business need, and what success needs
                to feel like before making the interface busy.
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Work with what is there</h3>
              <p>
                Start from a sketch, design, product requirement, or mature
                codebase—and improve it without unnecessary reinvention.
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Make progress visible</h3>
              <p>
                Break the work into clear steps, raise risks early, and keep
                feedback close to the work.
              </p>
            </div>
          </li>
          <li>
            <span>04</span>
            <div>
              <h3>Own the final quality</h3>
              <p>
                Review the details, test the awkward paths, and take
                responsibility for the thing that reaches users.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="about-section" id="about">
        <div className="shell about-grid">
          <div>
            <p className="section-label">About Vincent</p>
            <p className="about-kicker">Developer, designer-at-heart, builder.</p>
          </div>
          <div className="about-copy">
            <h2>
              I care about how the finished thing works{" "}
              <span>and how it feels.</span>
            </h2>
            <div className="about-columns">
              <p>
                I&apos;m Vincent Mukuna, a full-stack product developer based in
                Nairobi. I work with founders and product teams on web
                platforms, mobile apps, and AI-powered features.
              </p>
              <p>
                My UX background keeps me close to the user workflow, the edge
                cases, and the small decisions that decide whether a feature is
                merely complete or genuinely dependable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <p className="section-label">Have something in mind?</p>
          <h2>Let&apos;s make the useful version of it.</h2>
          <p>
            Tell me what you&apos;re building, what is stuck, or where your team
            needs another experienced pair of hands.
          </p>
          <div className="contact-actions">
            <ExternalLink
              className="button button-light"
              href="https://www.upwork.com/freelancers/vinmukuna"
            >
              Start a conversation <Arrow />
            </ExternalLink>
            <ExternalLink
              className="contact-secondary"
              href="https://www.linkedin.com/in/vinmukuna/"
            >
              LinkedIn <Arrow />
            </ExternalLink>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <a className="wordmark footer-wordmark" href="#top">
            Built by Vin<span className="wordmark-dot">.</span>
          </a>
          <p>Vincent Mukuna · Full-stack product developer</p>
          <div>
            <ExternalLink href="https://www.linkedin.com/in/vinmukuna/">
              LinkedIn
            </ExternalLink>
            <ExternalLink href="https://www.upwork.com/freelancers/vinmukuna">
              Upwork
            </ExternalLink>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
