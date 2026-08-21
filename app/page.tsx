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
          <h1>I turn product ideas into software people LOVE to use</h1>
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

        <article className="project project-betterflow">
          <div className="project-details">
            <div className="project-meta">
              <span>01 / Business platform</span>
            </div>
            <h3>BetterFlow</h3>
            <p className="project-lede">
              One connected workflow for service businesses, from first booking
              to final payment.
            </p>
            <p className="project-story">
              BetterFlow brings scheduling, customer history, visual estimates,
              invoices, notifications, and Stripe payments into one connected
              workflow. My work spanned the web, mobile, and backend experiences,
              with a focus on making the day-to-day easier for owners who are
              also doing the work.
            </p>
            <div className="project-footer">
              <ExternalLink
                href="https://trybetterflow.app"
                className="project-link"
              >
                Explore BetterFlow <Arrow />
              </ExternalLink>
            </div>
          </div>
          <div className="project-image betterflow-stage">
            <div className="betterflow-collage">
              <Image
                src="/work/betterflow-dashboard.png"
                alt="BetterFlow mobile dashboard with revenue, invoices, estimates, and upcoming appointments"
                width={1284}
                height={2778}
                sizes="(max-width: 640px) 30vw, 16vw"
              />
              <Image
                src="/work/betterflow-revenue.png"
                alt="BetterFlow revenue and payment activity screen"
                width={1284}
                height={2778}
                sizes="(max-width: 640px) 30vw, 16vw"
              />
              <Image
                src="/work/betterflow-schedule.png"
                alt="BetterFlow day schedule with customer appointments"
                width={1284}
                height={2778}
                sizes="(max-width: 640px) 30vw, 16vw"
              />
            </div>
          </div>
        </article>

        <article className="project project-owwed">
          <div className="project-details">
            <div className="project-meta">
              <span>02 / Mobile product</span>
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
              <span>03 / AI product</span>
            </div>
            <h3>KibbeAI</h3>
            <p className="project-lede">
              Fashion search that understands how people naturally describe
              what they want.
            </p>
            <p className="project-story">
              KibbeAI turns open-ended fashion conversations into results people
              can quickly scan, compare, and explore. I focused on the frontend
              experience, keeping the assistant close enough to help without
              letting it take over the shopping journey.
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
              <span>04 / Production SaaS</span>
            </div>
            <h3>StockMarketGuides</h3>
            <p className="project-lede">
              A production dashboard for researching stocks and working through
              trading ideas.
            </p>
            <p className="project-story">
              StockMarketGuides brings dense research tools into a product
              people can use with confidence. I focused on the frontend,
              building and maintaining tables, filters, and subscription flows
              for a live SaaS product with existing customers.
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

      <section className="tech-section" aria-labelledby="tech-stack-title">
        <div className="shell tech-inner">
          <div className="tech-intro">
            <h2 id="tech-stack-title">Tech stack</h2>
            <p>
              The tools I reach for to design, build, and ship products across
              web, mobile, payments, and AI.
            </p>
          </div>
          <div className="tech-grid">
            <article>
              <span>01 / Web</span>
              <ul>
                <li>TypeScript</li>
                <li>React</li>
                <li>Next.js</li>
              </ul>
            </article>
            <article>
              <span>02 / Mobile</span>
              <ul>
                <li>React Native</li>
                <li>Expo</li>
                <li>iOS &amp; Android</li>
              </ul>
            </article>
            <article>
              <span>03 / Platform</span>
              <ul>
                <li>Node.js &amp; APIs</li>
                <li>Stripe payments</li>
                <li>
                  <a className="tech-link" href="/ai-development">
                    AI development <Arrow />
                  </a>
                </li>
              </ul>
            </article>
          </div>
        </div>
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
            <a href="/resume">Resume</a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
