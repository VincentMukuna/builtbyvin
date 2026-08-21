import type { Metadata } from "next";
import Link from "next/link";
import { ExpandableScreenshot } from "./expandable-screenshot";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "While the owner is working, who runs the business? | Built by Vin",
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
          <h1 id="note-title">
            While the owner is working, who runs the business?
          </h1>
          <p className={styles.subtitle}>
            A small exploration into agents for service businesses.
          </p>
          <p className={styles.byline}>Vincent Mukuna · August 21, 2026</p>
        </section>

        <section className={`${styles.section} ${styles.letter}`}>
          <p>
            Hi Irv! Hope you’re doing well. I’ve been messing around with a
            small agent setup for service businesses.
          </p>
          <p>
            By agent, I mean an LLM-powered system that can follow a
            conversation, use the business’s tools, and take a few steps on its
            own. Here, it collects booking details, checks the schedule, and
            gets the request ready for the owner.
          </p>
          <p>
            It started with a normal booking message. Someone asks about a
            service and wants to know when the business is free. From the
            customer’s side, it feels like a normal conversation.
          </p>
          <ExpandableScreenshot
            src="/notes/service-business-agents/oak-customer-entry.png"
            alt="Oak and Pine customer chat with a reschedule request"
            caption="A customer starts with a normal booking request."
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
            As I worked through it, I started thinking about the smaller things
            around a booking. Customers ask more questions, send extra details,
            change their plans, and follow up later. All of that needs to go
            somewhere.
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
