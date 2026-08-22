import Image from "next/image";
import { credibilityStats, UPWORK_URL } from "../lib/portfolio-data";
import { OakPineShowcase } from "./components/oak-pine-showcase";

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
  <a className={className} href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
);

export default function Home() {
  return (
    <main>
      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            Vincent Mukuna / Full-stack product developer
          </p>
          <h1>I turn product ideas into software people can rely on.</h1>
          <p className="hero-intro">
            I&apos;m Vincent, a full-stack product developer in Nairobi. I help
            founders and product teams launch web and mobile products, improve
            live software, and add AI where it can do useful work.
          </p>
          <div className="hero-actions">
            <a className="text-link" href="#selected-work">
              View selected work <span aria-hidden="true">↓</span>
            </a>
            <ExternalLink className="text-link" href={UPWORK_URL}>
              Hire me on Upwork <Arrow />
            </ExternalLink>
          </div>
          <p className="location-line">Nairobi, Kenya · Remote worldwide</p>
        </div>
      </section>

      <section className="credibility-section" aria-label="Professional record">
        <ul className="shell credibility-grid">
          {credibilityStats.map((stat) => (
            <li key={stat.homepageLabel}>{stat.homepageLabel}</li>
          ))}
        </ul>
      </section>

      <section className="work-section shell" id="selected-work">
        <div className="section-heading">
          <div>
            <h2>Selected work</h2>
            <p className="section-intro">
              A few products I have helped shape, build, launch, or improve in
              production.
            </p>
          </div>
          <p className="section-range">2024 to 2026</p>
        </div>

        <article className="project project-betterflow">
          <div className="project-details">
            <p className="project-meta">01 / Business platform · Launched</p>
            <h3>BetterFlow</h3>
            <p className="project-lede">
              One connected workflow for service businesses, from first booking
              to final payment.
            </p>
            <p className="project-story">
              I built much of BetterFlow alongside its founder, taking on
              broader responsibility as the product grew. My work spanned public
              booking, the business dashboard, mobile apps, backend workflows,
              and Stripe payments. I also helped onboard another developer and
              take the product through launch.
            </p>
            <div className="project-footer">
              <ExternalLink href="https://trybetterflow.app" className="project-link">
                Explore BetterFlow <Arrow />
              </ExternalLink>
            </div>
          </div>
          <figure className="project-image betterflow-stage">
            <div className="betterflow-collage">
              <Image
                src="/work/betterflow-dashboard.png"
                alt="BetterFlow mobile screen showing the business dashboard"
                width={1284}
                height={2778}
                sizes="(max-width: 640px) 30vw, 16vw"
              />
              <Image
                src="/work/betterflow-revenue.png"
                alt="BetterFlow mobile screen showing payment activity"
                width={1284}
                height={2778}
                sizes="(max-width: 640px) 30vw, 16vw"
              />
              <Image
                src="/work/betterflow-schedule.png"
                alt="BetterFlow mobile screen showing the daily schedule"
                width={1284}
                height={2778}
                sizes="(max-width: 640px) 30vw, 16vw"
              />
            </div>
          </figure>
        </article>

        <article className="project project-oak">
          <div className="project-details">
            <p className="project-meta">
              02 / Self-directed AI system · Live demo
            </p>
            <h3>Oak &amp; Pine</h3>
            <p className="project-lede">
              An AI operations assistant that connects customer conversations
              to real service-business workflows.
            </p>
            <p className="project-story">
              I designed and built the customer website and back office as one
              connected system. The agent uses customer, CRM, and booking context
              to answer questions, complete supported tasks, and hand decisions
              back to staff when human judgment is needed. Operators can review,
              approve, or take over at any point.
            </p>
            <div className="project-footer project-links">
              <ExternalLink href="https://oak.builtby.vin" className="project-link">
                Open customer website <Arrow />
              </ExternalLink>
              <ExternalLink href="https://bo.builtby.vin" className="project-link">
                Open back office <Arrow />
              </ExternalLink>
            </div>
            <p className="project-disclaimer">
              Public demo. Anything entered may be visible to other visitors. Do
              not enter personal or sensitive information.
            </p>
          </div>
          <OakPineShowcase />
        </article>

        <article className="project project-owwed">
          <div className="project-details">
            <p className="project-meta">03 / Mobile product · App Store</p>
            <h3>Owwed</h3>
            <p className="project-lede">
              A private, local-first place to remember money owed between people.
            </p>
            <p className="project-story">
              I took Owwed from the initial product idea through design,
              development, testing, and release on the Apple App Store. The app
              tracks debts, partial repayments, promised dates, reminders, and
              the context people need when they return later, while keeping its
              core data on the device.
            </p>
            <div className="project-footer project-links">
              <ExternalLink href="https://owwed.builtby.vin" className="project-link">
                Explore Owwed <Arrow />
              </ExternalLink>
              <ExternalLink
                href="https://apps.apple.com/ke/app/owwed/id6785079538"
                className="project-link"
              >
                View Owwed on the App Store <Arrow />
              </ExternalLink>
            </div>
          </div>
          <figure className="project-image owwed-stage">
            <Image
              src="/work/owwed-site.png"
              alt="Owwed mobile debt tracker presented on its product website"
              width={2200}
              height={1176}
              sizes="(max-width: 760px) 90vw, 50vw"
            />
          </figure>
        </article>

        <article className="project project-stock">
          <div className="project-details">
            <p className="project-meta">04 / Production SaaS · Ongoing</p>
            <h3>StockMarketGuides</h3>
            <p className="project-lede">
              A live research dashboard for working through stocks and trading
              ideas.
            </p>
            <p className="project-story">
              I redesigned and rebuilt key parts of an established SaaS
              dashboard used by existing customers, including dense data tables,
              filters, detail views, and subscription flows. The new dashboard
              has received positive feedback from users, and I continue to
              maintain and extend the product without disrupting the workflows
              they already rely on.
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
          <figure className="project-image stock-stage">
            <Image
              src="/work/stock-scores.png"
              alt="StockMarketGuides dashboard with stock filters and a detailed results table"
              width={2200}
              height={1491}
              sizes="(max-width: 760px) 90vw, 50vw"
            />
          </figure>
        </article>
      </section>

      <section className="additional-section shell" aria-labelledby="additional-title">
        <div className="section-heading compact-heading">
          <h2 id="additional-title">Additional work</h2>
        </div>
        <div className="additional-grid">
          <article className="additional-item">
            <p className="additional-label">AI lead-generation SaaS</p>
            <h3>AmpleLeads</h3>
            <p>
              Turned an early AI prototype into a working production system with
              authentication, Stripe payments, secure data access, realtime
              product behaviour, and its core user flows.
            </p>
            <ExternalLink href="https://ampleleads.io" className="project-link">
              Visit AmpleLeads <Arrow />
            </ExternalLink>
          </article>
          <article className="additional-item">
            <p className="additional-label">AI fashion product</p>
            <h3>KibbeAI</h3>
            <p>
              Built and refined the frontend across the product&apos;s core
              discovery flows, helping take the product through launch and into
              the hands of its first users.
            </p>
          </article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="shell about-grid">
          <h2>How I work</h2>
          <p>
            I came into development through UX, so I pay attention to the gap
            between a feature that technically works and a product that makes
            sense. I clarify the workflow, surface important edge cases, and
            make technical decisions around what the product needs to achieve.
          </p>
          <p>
            I work best when I can understand the wider system, own a meaningful
            part of the problem, and leave behind software that is easier to use
            and easier for the next developer to extend.
          </p>
        </div>
      </section>

      <section className="capabilities-section" aria-labelledby="capabilities-title">
        <div className="shell capabilities-inner">
          <h2 id="capabilities-title">What I can help with</h2>
          <div className="capabilities-grid">
            <article>
              <p>01 / Build and launch</p>
              <h3>Build and launch</h3>
              <p>
                Turn designs and early prototypes into working web or mobile
                products, including product flows, backend logic,
                authentication, payments, and release work.
              </p>
            </article>
            <article>
              <p>02 / Improve a live product</p>
              <h3>Improve a live product</h3>
              <p>
                Get familiar with an existing codebase, clarify requirements,
                ship important features, and improve difficult workflows without
                destabilizing what users already depend on.
              </p>
            </article>
            <article>
              <p>03 / Add practical AI</p>
              <h3>Add practical AI</h3>
              <p>
                Build assistants, tool-calling agents, retrieval, and workflow
                automation connected to real product data, permissions, actions,
                and human controls.
              </p>
            </article>
          </div>
          <div className="stack-row">
            <p>
              <strong>Core stack:</strong> TypeScript, React, Next.js, React
              Native, Expo, Node.js, Laravel, Supabase, PostgreSQL, Stripe,
              OpenAI API, and Vercel AI SDK.
            </p>
            <a className="text-link" href="/ai-development">
              How I work with AI <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="shell cta-inner">
          <h2>Have a product that needs to move forward?</h2>
          <p>
            Tell me what exists today, what is blocked, and what you need to ship
            next.
          </p>
          <div className="cta-actions">
            <ExternalLink className="text-link" href={UPWORK_URL}>
              Hire me on Upwork <Arrow />
            </ExternalLink>
            <a className="text-link" href="/resume">
              View resume <Arrow />
            </a>
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
            <ExternalLink href={UPWORK_URL}>Upwork</ExternalLink>
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
