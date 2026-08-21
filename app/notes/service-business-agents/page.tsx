import type { Metadata } from "next";
import Link from "next/link";
import { ExpandableScreenshot } from "./expandable-screenshot";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Exploring agents for service businesses | Built by Vin",
  description:
    "A private product note exploring what a carefully controlled agent could do for a small service business.",
  alternates: {
    canonical: "/notes/service-business-agents",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function ServiceBusinessAgentsNote() {
  return (
    <main className={styles.page} id="top">
      <header className={styles.noteHeader}>
        <Link
          className={styles.wordmark}
          href="/"
          aria-label="Built by Vin home"
        >
          Built by Vin<span>.</span>
        </Link>
      </header>

      <article>
        <section className={styles.hero} aria-labelledby="note-title">
          <h1 id="note-title">Exploring agents for service businesses</h1>
          <p className={styles.byline}>Vincent Mukuna · August 21, 2026</p>
        </section>

        <section className={`${styles.section} ${styles.letter}`}>
          <p>
            Hi Irv! Hope you’re doing well. I’ve been messing around with a
            small agent
            <span className={styles.agentInfo}>
              <button
                className={styles.agentInfoButton}
                type="button"
                aria-label="What I mean by agent"
                aria-describedby="agent-clarification"
              >
                <span aria-hidden="true">i</span>
              </button>
              <span
                className={styles.agentTooltip}
                id="agent-clarification"
                role="tooltip"
              >
                By agent, I mean an LLM-powered system that can follow a
                conversation, use the business’s tools, and take a few steps on
                its own. Here, it collects booking details, checks the schedule,
                and gets the request ready for the owner.
              </span>
            </span>{" "}
            setup for service businesses.
          </p>
          <p>
            It started with a normal booking message. Someone asks about a
            service and wants to know when the business is free. From the
            customer’s side, it feels like a normal conversation.
          </p>
          <ExpandableScreenshot
            src="/notes/service-business-agents/oak-home-chat.png"
            alt="Oak and Pine home page with customer chat options open"
            caption="A customer starts with a normal booking request."
            width={1280}
            height={800}
          />
          <p>
            I wanted to think through both sides of the request: what the
            customer sees and what the owner needs.
          </p>
          <p>
            I built a small prototype to see what the idea might feel like in
            practice. Oak shows the customer experience, and BO shows what is
            happening on the business side.
          </p>
          <div className={styles.prototypeCallout}>
            <p>
              You can try both sides of the prototype. Start with Oak as the
              customer, then open BO to see the business side.
            </p>
            <div className={styles.prototypeLinks}>
              <a
                className={styles.prototypeLink}
                href="https://oak.builtby.vin"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Open Oak</strong>
                <span>Customer view ↗</span>
              </a>
              <a
                className={styles.prototypeLink}
                href="https://bo.builtby.vin"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Open BO</strong>
                <span>Business view ↗</span>
              </a>
            </div>
          </div>
          <ExpandableScreenshot
            src="/notes/service-business-agents/bo-owner-conversation.png"
            alt="Oak and Pine Ops showing an agent-completed booking change"
            caption="The owner can see the conversation, the agent’s actions, and the outcome."
          />
          <p>
            Say the customer comes back later and asks for a different day. The
            agent needs to find the booking, check the new time, and show the
            owner what changed.
          </p>
          <p>
            It sounds like a small change, but the administrative parts can add
            up. One{" "}
            <a
              className={styles.researchLink}
              href="https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/guides/svc-mobile-worker-research-worksheet-for-success.pdf"
              target="_blank"
              rel="noreferrer"
            >
              study
            </a>{" "}
            found that changing an appointment took 15 minutes on average.
          </p>
          <p>
            The customer might return a few days later and ask what is happening
            with the booking. The agent needs to know which job they mean and
            where things were left.
          </p>
          <p>
            I can see the same idea being useful in other parts of a service
            business too. There are probably a few directions it could take.
          </p>
          <p>
            Every service business has its own way of handling customers,
            schedules, and decisions. The prototype has been a way to test how
            an agent could fit into that: what it needs to know, what it can
            handle on its own, and where it should pause for the owner. Those
            details would shape whether it is useful in day-to-day work.
          </p>
          <p>
            I’d love to hear what you think of the concept. I’m definitely open
            to exploring where it could go and what shape that might take.
          </p>
        </section>
      </article>

      <footer className={styles.footer}>
        <p>Built by Vincent Mukuna · Nairobi · 2026</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
