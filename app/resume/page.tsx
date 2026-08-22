import type { Metadata } from "next";
import Link from "next/link";
import { credibilityStats, UPWORK_URL } from "../../lib/portfolio-data";
import styles from "./resume.module.css";

export const metadata: Metadata = {
  title: "Resume | Vincent Mukuna",
  description:
    "The resume of Vincent Mukuna, a full-stack product developer building web, mobile, SaaS, and AI products.",
  alternates: {
    canonical: "/resume",
  },
};

const Arrow = () => <span className="arrow-icon" aria-hidden="true" />;

export default function ResumePage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.wordmark} href="/" aria-label="Built by Vin, home">
          Built by Vin<span>.</span>
        </Link>
        <nav className={styles.nav} aria-label="Resume navigation">
          <Link href="/">Portfolio</Link>
          <a href="#experience">Experience</a>
          <a href="#work">Selected work</a>
        </nav>
        <a
          className={styles.downloadButton}
          href="/vincent-mukuna-resume.pdf"
          download="Vincent-Mukuna-Resume.pdf"
        >
          Download PDF <span aria-hidden="true">↓</span>
        </a>
      </header>

      <div className={styles.resumeShell}>
        <section className={styles.hero} aria-labelledby="resume-title">
          <div>
            <p className={styles.eyebrow}>Resume / 2026</p>
            <h1 id="resume-title">Vincent Mukuna</h1>
            <p className={styles.role}>
              Full-stack product developer for web, mobile, and AI.
            </p>
          </div>
          <div className={styles.heroAside}>
            <p>
              I&apos;m an independent product developer who turns ideas,
              designs, and existing products into thoughtful, production-ready
              software.
            </p>
            <dl className={styles.quickFacts}>
              <div>
                <dt>Based</dt>
                <dd>Nairobi, Kenya</dd>
              </div>
              <div>
                <dt>Working</dt>
                <dd>Remote / Worldwide</dd>
              </div>
              <div>
                <dt>Experience</dt>
                <dd>{credibilityStats[0].value}</dd>
              </div>
            </dl>
          </div>
        </section>

        <div className={styles.bodyGrid}>
          <div className={styles.mainColumn}>
            <section className={styles.section} id="experience">
              <div className={styles.sectionHeader}>
                <span>01</span>
                <h2>Experience</h2>
              </div>

              <article className={styles.experienceItem}>
                <div className={styles.itemHeading}>
                  <div>
                    <h3>BetterFlow</h3>
                    <p>Full-stack product developer</p>
                  </div>
                  <span>Flagship product</span>
                </div>
                <ul>
                  <li>
                    Built much of the product alongside its founder across
                    public booking, the business dashboard, mobile apps,
                    backend workflows, and payments.
                  </li>
                  <li>
                    Took on broader responsibility as the product grew and
                    helped onboard another developer into the codebase.
                  </li>
                  <li>
                    Helped take the product through launch, including
                    Stripe-powered payments and release work across web and
                    mobile.
                  </li>
                </ul>
              </article>

              <article className={styles.experienceItem}>
                <div className={styles.itemHeading}>
                  <div>
                    <h3>StockMarketGuides</h3>
                    <p>Frontend Engineer</p>
                  </div>
                  <span>Ongoing engagement</span>
                </div>
                <ul>
                  <li>
                    Redesigned and rebuilt key parts of a production SaaS
                    dashboard used for stock research and trading workflows.
                  </li>
                  <li>
                    Worked on dense data tables, filters, detail views,
                    onboarding, and subscription-related flows inside a mature
                    codebase.
                  </li>
                  <li>
                    The redesigned dashboard received positive user feedback,
                    and I continue to maintain and extend the product.
                  </li>
                </ul>
              </article>

              <article className={styles.experienceItem}>
                <div className={styles.itemHeading}>
                  <div>
                    <h3>KibbeAI</h3>
                    <p>Frontend development &amp; product input</p>
                  </div>
                  <span>Selected engagement</span>
                </div>
                <ul>
                  <li>
                    Built and refined the core frontend product experience
                    across its discovery flows.
                  </li>
                  <li>
                    Helped take the product through launch and put it in the
                    hands of its first users.
                  </li>
                </ul>
              </article>
            </section>

            <section className={styles.section} id="work">
              <div className={styles.sectionHeader}>
                <span>02</span>
                <h2>Selected work</h2>
              </div>

              <article className={styles.projectItem}>
                <div>
                  <h3>BetterFlow</h3>
                  <p>Full-stack product developer</p>
                </div>
                <p>
                  A connected operating platform for service businesses,
                  spanning public booking, scheduling, estimates, invoices,
                  customer history, and payments.
                </p>
                <a href="https://trybetterflow.app" target="_blank" rel="noreferrer">
                  View product <Arrow />
                </a>
              </article>

              <article className={styles.projectItem}>
                <div>
                  <h3>Owwed</h3>
                  <p>Creator, product designer &amp; mobile developer</p>
                </div>
                <p>
                  Designed, built, tested, and released a local-first debt
                  tracker on the Apple App Store, with partial repayments,
                  reminders, promised dates, and clear history.
                </p>
                <a href="https://owwed.builtby.vin" target="_blank" rel="noreferrer">
                  View product <Arrow />
                </a>
              </article>

            </section>
          </div>

          <aside className={styles.sidebar} aria-label="Skills and links">
            <section className={styles.sidebarSection}>
              <p className={styles.sidebarLabel}>Core stack</p>
              <ul className={styles.skillList}>
                <li>TypeScript / JavaScript</li>
                <li>React / Next.js</li>
                <li>React Native / Expo</li>
                <li>Node.js / APIs</li>
                <li>AI product integrations</li>
                <li>Stripe / payments</li>
              </ul>
            </section>

            <section className={styles.sidebarSection}>
              <p className={styles.sidebarLabel}>Product practice</p>
              <ul className={styles.skillList}>
                <li>Product discovery</li>
                <li>UX &amp; interface design</li>
                <li>Responsive systems</li>
                <li>Local-first mobile</li>
                <li>Testing &amp; maintenance</li>
              </ul>
            </section>

            <section className={`${styles.sidebarSection} ${styles.proofCard}`}>
              <p className={styles.sidebarLabel}>Upwork record</p>
              <div className={styles.proofGrid}>
                {credibilityStats.map((stat) => (
                  <div key={stat.homepageLabel}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noreferrer"
              >
                View verified profile <Arrow />
              </a>
            </section>

            <section className={styles.sidebarSection}>
              <p className={styles.sidebarLabel}>Find me online</p>
              <div className={styles.linkList}>
                <a href="https://builtby.vin">builtby.vin <Arrow /></a>
                <a
                  href="https://www.linkedin.com/in/vinmukuna/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <Arrow />
                </a>
                <a
                  href="https://github.com/VincentMukuna"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <Arrow />
                </a>
              </div>
            </section>
          </aside>
        </div>

        <footer className={styles.footer}>
          <p>Open to product development engagements and long-term collaborations.</p>
          <Link href="/#contact">Start a conversation <Arrow /></Link>
        </footer>
      </div>
    </main>
  );
}
