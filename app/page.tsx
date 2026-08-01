import Image from "next/image";
import { ContactForm } from "./contact-form";

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
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="header-cta">
          Get in touch <span aria-hidden="true">↓</span>
        </a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Vincent Mukuna · Independent developer</p>
          <h1>Full-stack developer based in Nairobi.</h1>
          <p className="hero-intro">
            I design and build web and mobile software, including AI features,
            for founders and product teams.
          </p>
          <div className="hero-footer">
            <a className="portfolio-link" href="#work">
              View selected work <span aria-hidden="true">↓</span>
            </a>
            <span className="hero-location">5+ years · Working remotely</span>
          </div>
        </div>
      </section>

      <section className="work-section shell" id="work">
        <div className="section-heading">
          <h2>Selected work</h2>
          <p>2024 to 2026</p>
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
            <ExternalLink
              href="https://stockmarketguides.com"
              className="project-link"
            >
              Visit product <Arrow />
            </ExternalLink>
          </div>
        </article>
      </section>

      <section className="about-section" id="about">
        <div className="shell about-grid">
          <div>
            <p className="section-label">About</p>
          </div>
          <div className="about-copy">
            <h2>I care about useful, dependable software.</h2>
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
          <div className="contact-copy">
            <p className="section-label">Contact</p>
            <h2>Let&apos;s talk.</h2>
            <p>
              Send a short note about what you&apos;re working on and where you need
              help. I&apos;ll reply by email.
            </p>
            <ExternalLink
              className="contact-secondary"
              href="https://www.upwork.com/freelancers/vinmukuna"
            >
              Prefer Upwork? View my profile <Arrow />
            </ExternalLink>
          </div>
          <ContactForm />
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
