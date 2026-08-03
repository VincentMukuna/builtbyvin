import Image from "next/image";

const Arrow = () => <span className="arrow-icon" aria-hidden="true" />;

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
      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Vincent Mukuna</p>
          <h1>I turn product ideas into software people love to use</h1>
          <p className="hero-intro">
            I&apos;m Vincent, a full-stack product developer in Nairobi. I help
            founders and product teams shape, build, and improve web, mobile,
            and AI-powered products.
          </p>
          <div className="hero-footer">
            <ExternalLink
              className="portfolio-link"
              href="https://www.upwork.com/freelancers/vinmukuna"
            >
              Hire me on Upwork <Arrow />
            </ExternalLink>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="shell about-grid">
          <h2 className="eyebrow">About</h2>
          <p>
            I came into development through UX, so I tend to notice the space
            between &apos;the feature works&apos; and &apos;the product makes
            sense.&apos; That perspective shapes how I build.
          </p>
          <p>
            I like working through unclear flows, overlooked edge cases, and
            the decisions that make software feel dependable. The goal is not
            just to finish the ticket. It is to leave behind a product that is
            easier to use and easier to keep building.
          </p>
        </div>
      </section>

      <section className="work-section shell" id="work">
        <div className="section-heading">
          <h2>Selected work</h2>
          <p>2024 to 2026</p>
        </div>

        <article className="project project-owwed">
          <div className="project-details">
            <div className="project-meta">
              <span>01 / Mobile product</span>
            </div>
            <h3>Owwed</h3>
            <p className="project-lede">
              A private place to remember money owed between people.
            </p>
            <p className="project-story">
              Owwed started with my own frustration: recording a debt was easy,
              but remembering the context later was not. I designed and built
              the product end to end, from the core flows to the interface and
              code. The challenge was keeping each record simple without losing
              the details that make it useful when you return to it.
            </p>
            <div className="project-footer">
              <ExternalLink
                href="https://owwed.builtby.vin"
                className="project-link"
              >
                Explore Owwed <Arrow />
              </ExternalLink>
            </div>
          </div>
          <div className="project-image owwed-stage">
            <Image
              src="/work/owwed-site.png"
              alt="Owwed interface presented on its light product website"
              width={2200}
              height={1176}
              sizes="(max-width: 760px) 90vw, 50vw"
            />
          </div>
        </article>

        <article className="project project-kibbe">
          <div className="project-details">
            <div className="project-meta">
              <span>02 / AI product</span>
            </div>
            <h3>KibbeAI</h3>
            <p className="project-lede">
              Fashion search that understands how people naturally describe
              what they want.
            </p>
            <p className="project-story">
              I built the frontend and helped shape how the product behaves.
              The difficult part was turning an open-ended conversation into
              results people could quickly scan, compare, and browse. The
              assistant stays close when it is useful without taking over the
              shopping experience.
            </p>
            <div className="project-footer">
              <span className="project-note">Screens from the shipped product</span>
            </div>
          </div>
          <div className="project-image kibbe-stage">
            <Image
              src="/work/kibbe-search.png"
              alt="KibbeAI search results with product recommendations and an AI assistant conversation"
              width={2200}
              height={1367}
              sizes="(max-width: 760px) 90vw, 50vw"
            />
          </div>
        </article>

        <article className="project project-stock">
          <div className="project-details">
            <div className="project-meta">
              <span>03 / Production SaaS</span>
            </div>
            <h3>StockMarketGuides</h3>
            <p className="project-lede">
              A production dashboard for researching stocks and working through
              trading ideas.
            </p>
            <p className="project-story">
              I redesigned and rebuilt parts of a live SaaS product already
              used by real customers. The work involved fitting dense tables,
              filters, and subscription logic into a clearer experience, then
              maintaining those improvements without disrupting the people who
              relied on the product.
            </p>
            <div className="project-footer">
              <ExternalLink
                href="https://stockmarketguides.com"
                className="project-link"
              >
                Visit StockMarketGuides <Arrow />
              </ExternalLink>
            </div>
          </div>
          <div className="project-image stock-stage">
            <Image
              src="/work/stock-scores.png"
              alt="StockMarketGuides dashboard showing score filters and a detailed stock results table"
              width={2200}
              height={1491}
              sizes="(max-width: 760px) 90vw, 50vw"
            />
          </div>
        </article>
      </section>

      <footer>
        <div className="shell footer-inner">
          <a className="wordmark footer-wordmark" href="#top">
            Built by Vin<span className="wordmark-dot">.</span>
          </a>
          <p>Vincent Mukuna · Full-stack product developer</p>
          <div className="footer-links">
            <ExternalLink href="https://www.linkedin.com/in/vinmukuna/">
              LinkedIn
            </ExternalLink>
            <ExternalLink href="https://www.upwork.com/freelancers/vinmukuna">
              Upwork
            </ExternalLink>
            <ExternalLink href="https://github.com/VincentMukuna">
              GitHub
            </ExternalLink>
            <ExternalLink href="https://x.com/vin_mukuna">X</ExternalLink>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
