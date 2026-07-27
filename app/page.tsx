import Image from "next/image";

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
            <span className="availability">Available for new projects</span>
          </p>
          <h1>
            I build web and mobile products,{" "}
            <span className="accent-word">including AI features.</span>
          </h1>
          <p className="hero-intro">
            I&apos;m Vincent Mukuna. I work with founders and small teams to turn
            ideas and designs into working software. I also improve products
            that are already in use.
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
          <Image
            src="/work/owwed-site.png"
            alt="Owwed product website showing the private debt tracker mobile app"
            width={2200}
            height={1176}
            sizes="(max-width: 1020px) 90vw, 48vw"
            priority
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
          <p className="section-label">Selected work / 2024 to 2026</p>
          <h2>A few things I&apos;ve built recently.</h2>
          <p>
            These projects include an app I built from scratch, an AI shopping
            experience, and a dashboard redesign inside a live SaaS product.
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
                A private app for keeping track of money owed between people.
              </p>
            </div>
            <p className="project-story">
              Owwed started with my own frustration. I designed and built the
              app, from the main flows through to the interface and code. Most
              of the work went into keeping debt records simple while saving
              enough detail to make sense when you return to them.
            </p>
          </div>
          <div className="project-image owwed-stage">
            <Image
              src="/work/owwed-site.png"
              alt="Owwed interface presented on its light product website"
              width={2200}
              height={1176}
              sizes="(max-width: 760px) 90vw, 1080px"
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
                Fashion search that lets people describe what they want in
                their own words.
              </p>
            </div>
            <p className="project-story">
              I worked on the frontend and helped shape the product. The main
              challenge was turning an open-ended conversation into results
              people could scan and browse. The assistant stays available
              without taking over the page.
            </p>
          </div>
          <div className="project-image kibbe-stage">
            <Image
              src="/work/kibbe-search.png"
              alt="KibbeAI search results with product recommendations and an AI assistant conversation"
              width={2200}
              height={1367}
              sizes="(max-width: 760px) 90vw, 1080px"
            />
          </div>
          <div className="project-footer">
            <ul>
              <li>AI-guided search and product discovery</li>
              <li>Responsive results and conversation layouts</li>
              <li>Released as a customer-facing product</li>
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
                A dashboard for researching stocks and working through trading
                ideas.
              </p>
            </div>
            <p className="project-story">
              I redesigned and rebuilt parts of an established dashboard used
              by real customers. The job meant fitting dense tables, filters,
              and subscription logic into a live product, then maintaining the
              work without disrupting the people already using it.
            </p>
          </div>
          <div className="project-image stock-stage">
            <Image
              src="/work/stock-scores.png"
              alt="StockMarketGuides dashboard showing score filters and a detailed stock results table"
              width={2200}
              height={1491}
              sizes="(max-width: 760px) 90vw, 1080px"
            />
          </div>
          <div className="project-footer">
            <ul>
              <li>Tables, scores, and filters for dense financial data</li>
              <li>Ongoing development in a live codebase</li>
              <li>Worked closely with product and engineering</li>
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
            <h2>What I can build with you.</h2>
          </div>
          <div className="services-grid">
            <article>
              <span className="service-number">01</span>
              <h3>Web products</h3>
              <p>
                SaaS products, customer portals, dashboards, admin tools, and
                new features for software that is already in use.
              </p>
            </article>
            <article>
              <span className="service-number">02</span>
              <h3>Mobile apps</h3>
              <p>
                Cross-platform apps with offline flows, notifications, and
                local-first data. I pay attention to the awkward edge cases too.
              </p>
            </article>
            <article>
              <span className="service-number">03</span>
              <h3>AI features</h3>
              <p>
                Assistants, guided generation, and conversational interfaces. I
                focus on where AI is useful to the person using the product.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="process-section shell">
        <div className="process-intro">
          <p className="section-label">How I work</p>
          <h2>I start with the problem and stay through the fiddly parts.</h2>
        </div>
        <ol className="process-list">
          <li>
            <span>01</span>
            <div>
              <h3>Learn how people will use it</h3>
              <p>
                Before I touch the interface, I learn who it is for, what they
                need to do, and what the business needs from it.
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Build on what is already there</h3>
              <p>
                I can start with a sketch, a finished design, a product
                requirement, or a mature codebase. I keep what works and improve
                what does not.
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Keep the work easy to follow</h3>
              <p>
                I split the work into clear steps, flag risks early, and ask for
                feedback while changes are still easy to make.
              </p>
            </div>
          </li>
          <li>
            <span>04</span>
            <div>
              <h3>Finish the job properly</h3>
              <p>
                I review the details and test the awkward paths before the work
                reaches users. If I build it, I take responsibility for it.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="about-section" id="about">
        <div className="shell about-grid">
          <div>
            <p className="section-label">About Vincent</p>
            <p className="about-kicker">A developer with a soft spot for design.</p>
          </div>
          <div className="about-copy">
            <h2>
              I care about how software works{" "}
              <span>and how it feels to use.</span>
            </h2>
            <div className="about-columns">
              <p>
                I&apos;m Vincent Mukuna, a full-stack product developer based in
                Nairobi. I work with founders and product teams on web
                platforms, mobile apps, and AI-powered features.
              </p>
              <p>
                My background in UX makes me pay attention to the workflow and
                the edge cases. A feature can be technically finished and still
                be confusing or brittle. I try not to hand over work like that.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <p className="section-label">Working on something?</p>
          <h2>Tell me where you need help.</h2>
          <p>
            You might have a new product to build, a feature that is stuck, or
            an existing codebase that needs another experienced pair of hands.
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
            <ExternalLink href="https://github.com/VincentMukuna">
              GitHub
            </ExternalLink>
            <ExternalLink href="https://x.com/DevMukuna">X</ExternalLink>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
