import type { Metadata } from "next";
import Link from "next/link";
import styles from "./ai-development.module.css";

export const metadata: Metadata = {
  title: "A Note on Working With AI | Vincent Mukuna",
  description:
    "A short note from Vincent Mukuna on learning to work with AI and spending more time on the hard parts of building software.",
  alternates: {
    canonical: "/ai-development",
  },
  openGraph: {
    title: "A Note on Working With AI | Vincent Mukuna",
    description:
      "A short note from Vincent Mukuna on learning to work with AI and spending more time on the hard parts of building software.",
    type: "article",
    url: "/ai-development",
    images: [
      {
        url: "/og-ai-development.png",
        width: 1200,
        height: 630,
        alt: "Working with AI, a short note by Vincent Mukuna.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Note on Working With AI | Vincent Mukuna",
    description:
      "A short note from Vincent Mukuna on learning to work with AI and spending more time on the hard parts of building software.",
    images: ["/og-ai-development.png"],
  },
};

export default function AiDevelopmentPage() {
  return (
    <main className={styles.page}>
      <header className={styles.siteHeader}>
        <Link className={styles.wordmark} href="/" aria-label="Built by Vin, home">
          Built by Vin<span>.</span>
        </Link>
        <nav aria-label="Page navigation">
          <Link href="/">Portfolio</Link>
          <Link href="/resume">Resume</Link>
        </nav>
      </header>

      <article className={styles.article}>
        <header className={styles.articleHeader}>
          <p className={styles.kicker}>A short note</p>
          <h1>Working with AI</h1>
          <p className={styles.intro}>
            I am still learning what these tools are good at, where they fall
            short, and how they are changing the way I build software.
          </p>
          <p className={styles.meta}>August 2026 · 2 minute read</p>
        </header>

        <div className={styles.prose}>
          <p className={styles.lead}>
            I use Cursor and Codex most days. Not because I have found the
            perfect way to work with AI, but because I am curious about what it
            changes and I enjoy learning through the work.
          </p>
          <p>
            The environment moves quickly. New models, tools, and ways of
            working keep appearing, so my process is still adapting. I try
            things, keep what helps, and stay careful about what I do not yet
            understand.
          </p>

          <h2>Less typing, more thinking</h2>
          <p>
            A lot of development used to be manual code writing, remembering
            syntax, moving between files, and translating an idea into the
            right semantics. AI can now help with much of that mechanical work.
          </p>
          <p>
            That has moved more of my attention toward the parts I have always
            found most interesting: understanding the real problem, deciding
            how a system should behave, finding the awkward edge cases, and
            making tradeoffs that leave the product simpler. Those hard parts
            were always the juice.
          </p>

          <h2>The responsibility is still mine</h2>
          <p>
            The tools can move fast and sound certain when they are wrong. I
            still need to understand the change, make the product calls, test
            the result, and own what ships.
          </p>
          <p>
            I do not think I have reached a final method. I hope I never treat
            it that way. For now, I am staying curious, doing the work, and
            learning how to use the extra leverage without giving up judgment.
          </p>

          <p className={styles.lastNote}>
            The code may take less time to write. The interesting work is still
            figuring out what is worth building and how it should work.
          </p>
        </div>

        <footer className={styles.articleFooter}>
          <Link href="/">← Back to the portfolio</Link>
        </footer>
      </article>

      <footer className={styles.siteFooter}>
        <p>Vincent Mukuna · Full-stack product developer</p>
        <a
          href="https://www.upwork.com/freelancers/vinmukuna"
          target="_blank"
          rel="noreferrer"
        >
          Upwork
        </a>
      </footer>
    </main>
  );
}
