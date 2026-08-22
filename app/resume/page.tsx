import type { Metadata } from "next";
import Link from "next/link";
import { credibilityStats, UPWORK_URL } from "../../lib/portfolio-data";
import styles from "./resume.module.css";

export const metadata: Metadata = {
  title: "Full-Stack Software Engineer Resume | Vincent Mukuna",
  description:
    "Resume of Vincent Mukuna, a full-stack software engineer building web, mobile, SaaS, and practical AI products.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Full-Stack Software Engineer Resume | Vincent Mukuna",
    description:
      "Resume of Vincent Mukuna, a full-stack software engineer building web, mobile, SaaS, and practical AI products.",
    type: "website",
    url: "/resume",
    images: [
      {
        url: "/og-resume.png",
        width: 1200,
        height: 630,
        alt: "Vincent Mukuna, full-stack software engineer resume.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Software Engineer Resume | Vincent Mukuna",
    description:
      "Resume of Vincent Mukuna, a full-stack software engineer building web, mobile, SaaS, and practical AI products.",
    images: ["/og-resume.png"],
  },
};

const Arrow = () => <span aria-hidden="true">↗</span>;

const experience = [
  {
    company: "StockMarketGuides",
    role: "Frontend Engineer · Contract",
    period: "Jan 2026 - Present",
    place: "Remote",
    bullets: [
      "Redesign and rebuild key areas of a production Next.js financial dashboard, including dense data tables, filters, detail views, onboarding, and subscription flows.",
      "Ship and maintain features inside an established codebase without disrupting customer workflows. The redesigned dashboard has received positive feedback from users.",
    ],
  },
  {
    company: "Self-employed",
    role: "Software Engineer · Freelance",
    period: "Dec 2024 - Present",
    place: "Remote",
    bullets: [
      "Build and maintain web and mobile products for startups and product teams, taking work from early prototypes through production and launch.",
      "Built much of BetterFlow alongside its founder and carried the work through launch across public booking, business dashboards, React Native apps, backend workflows, and Stripe payments.",
      "Turned AmpleLeads from an early AI prototype into a production system with authentication, payments, realtime behaviour, and secure team-scoped data.",
    ],
  },
  {
    company: "Kibbe AI",
    role: "Frontend Developer · Full-time",
    period: "Feb 2025 - Jan 2026",
    place: "Remote",
    bullets: [
      "Built and refined the Next.js and TypeScript frontend across the product's core AI-assisted discovery flows.",
      "Shipped the frontend through launch and supported the product as it reached its first users.",
    ],
  },
  {
    company: "Trans Business Machines Ltd",
    role: "Software Developer · Contract",
    period: "Sep 2024 - Sep 2025",
    place: "Nairobi · Hybrid",
    bullets: [
      "Took a property management concept from field research and site visits to a working prototype while contributing to internal and client-facing software.",
    ],
  },
  {
    company: "Statsspeak",
    role: "Software Developer · Internship",
    period: "Jun 2024 - Sep 2024",
    place: "Nairobi · Hybrid",
    bullets: [
      "Built a learner book-sharing platform and prototypes for NGO projects as part of a newly forming software team.",
    ],
  },
] as const;

const skillGroups = [
  ["Frontend", "TypeScript, JavaScript, React, Next.js"],
  ["Mobile", "React Native, Expo, app release"],
  ["Backend", "Node.js, Laravel, Supabase, PostgreSQL, Stripe"],
  ["AI", "OpenAI API, Vercel AI SDK, tool calling, retrieval, human controls"],
  ["Product", "UX, requirements, product flows, testing, maintenance"],
] as const;

export default function ResumePage() {
  return (
    <main className={styles.page}>
      <header className={styles.siteHeader}>
        <Link className={styles.wordmark} href="/" aria-label="Built by Vin, home">
          Built by Vin<span>.</span>
        </Link>
        <nav aria-label="Resume navigation">
          <Link href="/">Portfolio</Link>
          <a href="#experience">Experience</a>
        </nav>
        <a
          className={styles.downloadButton}
          href="/vincent-mukuna-resume.pdf"
          download="Vincent-Mukuna-Resume.pdf"
        >
          Download PDF <span aria-hidden="true">↓</span>
        </a>
      </header>

      <article className={styles.resume}>
        <header className={styles.intro}>
          <p className={styles.kicker}>Resume / August 2026</p>
          <h1>Vincent Mukuna</h1>
          <p className={styles.title}>Full-stack Software Engineer</p>
          <p className={styles.summary}>
            Full-stack software engineer with experience shipping web, mobile,
            SaaS, and AI products across new builds and established codebases.
            Currently a Frontend Engineer at StockMarketGuides, with a UX
            background and a strong focus on clear, dependable product work.
          </p>

          <div className={styles.introMeta}>
            <span>Nairobi, Kenya</span>
            <span>Remote</span>
            <a href="https://builtby.vin">builtby.vin</a>
            <a href="https://www.linkedin.com/in/vinmukuna/" target="_blank" rel="noreferrer">
              LinkedIn <Arrow />
            </a>
            <a href="https://github.com/VincentMukuna" target="_blank" rel="noreferrer">
              GitHub <Arrow />
            </a>
            <a href={UPWORK_URL} target="_blank" rel="noreferrer">
              Upwork <Arrow />
            </a>
          </div>
        </header>

        <section className={styles.section} id="skills">
          <h2>Technical skills</h2>
          <dl className={styles.skills}>
            {skillGroups.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={styles.section} id="experience">
          <h2>Experience</h2>
          <div className={styles.experienceList}>
            {experience.map((item) => (
              <article className={styles.experienceItem} key={item.company}>
                <div className={styles.experienceHeading}>
                  <div>
                    <h3>{item.company}</h3>
                    <p>{item.role}</p>
                  </div>
                  <p className={styles.experienceMeta}>
                    <span>{item.period}</span>
                    <span>{item.place}</span>
                  </p>
                </div>
                <ul>
                  {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.projects}`}>
          <h2>Selected projects</h2>
          <article className={styles.project}>
            <div>
              <h3>Owwed</h3>
              <p>Expo · React Native · TypeScript · Apple App Store</p>
            </div>
            <p>
              Designed, built, tested, and released a local-first debt tracker
              that works without an account and keeps its core data on-device.
            </p>
            <div className={styles.projectLinks}>
              <a href="https://owwed.builtby.vin" target="_blank" rel="noreferrer">
                owwed.builtby.vin <Arrow />
              </a>
              <a href="https://apps.apple.com/ke/app/owwed/id6785079538" target="_blank" rel="noreferrer">
                App Store <Arrow />
              </a>
            </div>
          </article>
          <article className={styles.project}>
            <div>
              <h3>Oak &amp; Pine</h3>
              <p>AI workflows · Tool calling · Human controls</p>
            </div>
            <p>
              Built a public AI operations demo connected to customer, CRM,
              and booking workflows with staff review and takeover.
            </p>
            <div className={styles.projectLinks}>
              <a href="https://oak.builtby.vin" target="_blank" rel="noreferrer">
                oak.builtby.vin <Arrow />
              </a>
            </div>
          </article>
        </section>

        <section className={styles.section}>
          <h2>Education</h2>
          <div className={styles.education}>
            <div>
              <h3>University of Nairobi</h3>
              <p>Computer Science</p>
            </div>
            <p>2021 - 2024</p>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>{credibilityStats[1].value} · {credibilityStats[2].value} Job Success · {credibilityStats[3].value} hours</p>
          <a href={UPWORK_URL} target="_blank" rel="noreferrer">
            View Upwork profile <Arrow />
          </a>
        </footer>
      </article>
    </main>
  );
}
