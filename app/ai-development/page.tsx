import type { Metadata } from "next";
import Link from "next/link";
import styles from "./ai-development.module.css";

export const metadata: Metadata = {
  title: "AI Development Philosophy | Vincent Mukuna",
  description:
    "How Vincent Mukuna uses Cursor and Codex to build software, review the work, and stay responsible for what ships.",
  alternates: {
    canonical: "/ai-development",
  },
};

const Arrow = () => <span className="arrow-icon" aria-hidden="true" />;

const principles = [
  {
    title: "Start with the problem",
    body: "I work out who the feature is for, what they need to do, and what can go wrong. Then I bring AI into the job. A vague prompt usually creates vague software.",
  },
  {
    title: "Give it the real context",
    body: "Good output depends on what the tool can see. I share the relevant code, product rules, constraints, and examples. I also say what must stay unchanged.",
  },
  {
    title: "Keep the steps small enough to review",
    body: "For uncertain work, I ask for a plan before code. I split large changes into parts I can understand and check. Speed is useful only when I can still follow the work.",
  },
  {
    title: "Make the product calls myself",
    body: "AI can suggest options. I decide which tradeoff fits the product and the people using it. That judgment comes from the problem, not from whichever answer appeared first.",
  },
  {
    title: "Read the code",
    body: "I do not ship code because it looks convincing or happens to compile. I read the change, question the assumptions, and check how it fits the rest of the system.",
  },
  {
    title: "Test the awkward paths",
    body: "The happy path is usually easy. I check empty states, failures, slow responses, repeated actions, and the places where old and new code meet.",
  },
  {
    title: "Leave the code understandable",
    body: "The next developer should not need an AI tool to understand what happened. I keep the structure clear, remove leftover code, and write down decisions that are easy to miss.",
  },
];

export default function AiDevelopmentPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.wordmark} href="/" aria-label="Built by Vin, home">
          Built by Vin<span>.</span>
        </Link>
        <nav className={styles.nav} aria-label="AI development navigation">
          <Link href="/">Portfolio</Link>
          <a href="#manifesto">Manifesto</a>
          <a href="#tools">Tools</a>
        </nav>
        <Link className={styles.headerLink} href="/resume">
          View resume <Arrow />
        </Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>AI development / Working manifesto</p>
          <h1>AI helps me move faster. I still do the thinking.</h1>
          <p className={styles.heroIntro}>
            My setup is simple. I use Cursor and Codex to build software. I
            make the product calls, review the code, and own what ships.
          </p>
        </div>
        <aside className={styles.heroAside} aria-label="AI tools I use">
          <p>Tools I use</p>
          <div>
            <span>01</span>
            <strong>Cursor</strong>
          </div>
          <div>
            <span>02</span>
            <strong>Codex</strong>
          </div>
          <small>That is the whole list.</small>
        </aside>
      </section>

      <section className={styles.opening}>
        <p className={styles.eyebrow}>How I see it</p>
        <div className={styles.openingCopy}>
          <p>
            AI is part of my development setup. It can read a lot of code,
            draft quickly, and take care of repetitive work. It also gets
            things wrong.
          </p>
          <p>
            I treat the output like code from another developer. I want to know
            why it works, where it may fail, and whether it makes the product
            better. I stay responsible for the answer.
          </p>
        </div>
      </section>

      <section className={styles.manifesto} id="manifesto">
        <div className={styles.sectionHeading}>
          <h2>My working rules</h2>
          <p>Seven things I try to hold myself to.</p>
        </div>
        <ol className={styles.principleList}>
          {principles.map((principle, index) => (
            <li key={principle.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.toolsSection} id="tools">
        <div className={styles.toolsInner}>
          <div className={styles.sectionHeading}>
            <h2>Two tools, two kinds of work</h2>
            <p>I keep the setup small on purpose.</p>
          </div>
          <div className={styles.toolGrid}>
            <article>
              <span>01 / Cursor</span>
              <h3>Close to the code</h3>
              <p>
                I use Cursor when I am already deep in a file or feature. It
                helps with the quick loop: understand this code, change this
                part, clean it up, and keep moving while the context is fresh.
              </p>
            </article>
            <article>
              <span>02 / Codex</span>
              <h3>Room for a wider task</h3>
              <p>
                I use Codex when the job reaches across more of the codebase. I
                give it a clear outcome, let it inspect the system, make the
                change, and run the checks. Then I review the result.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.productAi}>
        <p className={styles.eyebrow}>When AI is inside the product</p>
        <div>
          <h2>AI needs a real job to do.</h2>
          <p>
            I use AI in a product when it saves someone work or makes a hard
            task easier. If a normal form, search box, or set of rules is
            clearer, I use that instead.
          </p>
          <p>
            The person using the product should know what is happening and stay
            in control. They need a useful way forward when the AI is slow,
            wrong, or unavailable. That part of the experience matters as much
            as the model call.
          </p>
        </div>
      </section>

      <section className={styles.closing}>
        <p>
          Cursor and Codex help me cover more ground. The responsibility stays
          with me.
        </p>
        <Link href="/#work">
          See what I have built <Arrow />
        </Link>
      </section>

      <footer className={styles.footer}>
        <Link className={styles.wordmark} href="/">
          Built by Vin<span>.</span>
        </Link>
        <p>Vincent Mukuna · Full-stack product developer</p>
        <div>
          <Link href="/">Portfolio</Link>
          <Link href="/resume">Resume</Link>
          <a
            href="https://www.upwork.com/freelancers/vinmukuna"
            target="_blank"
            rel="noreferrer"
          >
            Upwork
          </a>
        </div>
      </footer>
    </main>
  );
}
