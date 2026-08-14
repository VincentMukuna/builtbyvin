import type { Metadata } from "next";
import Link from "next/link";
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
                <dd>5+ years</dd>
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
                    <p>End-to-end product design &amp; development</p>
                  </div>
                  <span>Flagship product</span>
                </div>
                <ul>
                  <li>
                    Built the product end to end across product direction, UX,
                    public booking, business dashboard, mobile apps, backend,
                    and release delivery.
                  </li>
                  <li>
                    Connected scheduling, customer records, estimates,
                    invoices, notifications, and payments into one workflow for
                    service businesses.
                  </li>
                  <li>
                    Implemented Stripe-powered online payments and payment
                    requests alongside customer-facing booking and invoice
                    experiences.
                  </li>
                </ul>
              </article>

              <article className={styles.experienceItem}>
                <div className={styles.itemHeading}>
                  <div>
                    <h3>StockMarketGuides</h3>
                    <p>Full-stack product development</p>
                  </div>
                  <span>Ongoing engagement</span>
                </div>
                <ul>
                  <li>
                    Redesigned and rebuilt parts of a production SaaS dashboard
                    used for stock research and trading workflows.
                  </li>
                  <li>
                    Delivered dense data tables, filters, score displays, and
                    subscription-aware product flows inside a mature codebase.
                  </li>
                  <li>
                    Continue to maintain and extend the product without
                    disrupting existing customers.
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
                    Built responsive product discovery experiences around
                    natural-language fashion search.
                  </li>
                  <li>
                    Shaped an interface where AI guidance stays available
                    without getting in the way of browsing results.
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
                  <p>Product owner, designer &amp; full-stack developer</p>
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
                  Designed and built a local-first iOS and Android app for
                  tracking money owed between people, including partial
                  payments, reminders, and clear history.
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
                <div>
                  <strong>100%</strong>
                  <span>Job Success</span>
                </div>
                <div>
                  <strong>Top Rated</strong>
                  <span>Freelancer</span>
                </div>
                <div>
                  <strong>5.0</strong>
                  <span>Client rating</span>
                </div>
                <div>
                  <strong>2.8K+</strong>
                  <span>Hours logged</span>
                </div>
              </div>
              <a
                href="https://www.upwork.com/freelancers/vinmukuna"
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
