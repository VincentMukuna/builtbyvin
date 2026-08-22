import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./page.module.css";

type Market = "kenya" | "us";

type MarketCopy = {
  edition: string;
  intro: ReactNode;
  request: string;
  steps: string[];
  examples: string[];
  result: ReactNode;
};

const articleTitle = "How an AI Assistant Can Help Your Business";
const articleDescription =
  "Where small teams lose time, how an AI assistant can help, and what a good first workflow looks like.";
const articlePath = "/notes/how-an-ai-assistant-can-help-your-business";

const marketCopy: Record<Market, MarketCopy> = {
  kenya: {
    edition: "Kenya edition",
    intro: (
      <>
        A customer sends a WhatsApp message while everyone is busy. Someone
        pays a deposit through M-Pesa, but the team still has to match it to the
        right job. A customer wants to move a booking. A follow-up is forgotten.
      </>
    ),
    request:
      "Can you come on Friday instead? I have already paid the deposit on M-Pesa.",
    steps: [
      "Find the customer, booking, and payment record.",
      "Check which Friday times are free.",
      "Offer only the times the business can keep.",
      "Update the booking and confirm the change.",
    ],
    examples: [
      "Collect job details from a WhatsApp enquiry.",
      "Check an M-Pesa payment against the right customer record.",
      "Find an existing booking and offer valid times.",
      "Prepare a quote or follow-up for a person to approve.",
    ],
    result: (
      <>
        The customer gets a clear reply on WhatsApp. The team can see the
        booking and the M-Pesa payment in the right place. If anything looks
        wrong, a person takes over.
      </>
    ),
  },
  us: {
    edition: "United States edition",
    intro: (
      <>
        A customer sends a text while everyone is busy. Someone pays a deposit
        by card, but the team still has to match it to the right job. A customer
        wants to move a booking. A follow-up is forgotten.
      </>
    ),
    request:
      "Can you come on Friday instead? I already paid the deposit by card.",
    steps: [
      "Find the customer, booking, and payment record.",
      "Check which Friday times are free.",
      "Offer only the times the business can keep.",
      "Update the booking and confirm the change.",
    ],
    examples: [
      "Collect job details from a text or website enquiry.",
      "Check a card payment against the right customer record.",
      "Find an existing booking and offer valid times.",
      "Prepare an estimate or follow-up for a person to approve.",
    ],
    result: (
      <>
        The customer gets a clear reply by text. The team can see the booking
        and payment in the right place. If anything looks wrong, a person takes
        over.
      </>
    ),
  },
};

export function getArticleMetadata(market: Market): Metadata {
  const isUs = market === "us";
  const path = isUs ? `${articlePath}/us` : articlePath;
  const image = isUs
    ? `${articlePath}/og-us.png`
    : `${articlePath}/og-kenya.png`;
  const imageAlt = isUs
    ? "How an AI assistant can help your business, United States edition."
    : "How an AI assistant can help your business, Kenya edition.";

  return {
    title: `${articleTitle} | Built by Vin`,
    description: articleDescription,
    alternates: {
      canonical: path,
      languages: {
        "en-KE": articlePath,
        "en-US": `${articlePath}/us`,
      },
    },
    openGraph: {
      title: articleTitle,
      description: articleDescription,
      type: "article",
      url: path,
      locale: isUs ? "en_US" : "en_KE",
      publishedTime: "2026-08-22T00:00:00+03:00",
      authors: ["Vincent Mukuna"],
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: articleTitle,
      description: articleDescription,
      images: [image],
    },
  };
}

const ExternalArrow = () => <span aria-hidden="true">↗</span>;

function EditionSwitch({ market }: { market: Market }) {
  return (
    <nav className={styles.editionSwitch} aria-label="Choose article edition">
      <Link
        href={articlePath}
        aria-current={market === "kenya" ? "page" : undefined}
      >
        Kenya
      </Link>
      <Link
        href={`${articlePath}/us`}
        aria-current={market === "us" ? "page" : undefined}
      >
        United States
      </Link>
    </nav>
  );
}

export function AiAssistantArticle({ market }: { market: Market }) {
  const copy = marketCopy[market];

  return (
    <main className={styles.page} id="top">
      <header className={styles.siteHeader}>
        <Link className={styles.wordmark} href="/" aria-label="Built by Vin home">
          Built by Vin<span>.</span>
        </Link>
        <EditionSwitch market={market} />
      </header>

      <article>
        <header className={styles.articleHeader}>
          <p className={styles.kicker}>{copy.edition}</p>
          <h1>{articleTitle}</h1>
          <p className={styles.standfirst}>{articleDescription}</p>
          <div className={styles.byline}>
            <span>By Vincent Mukuna</span>
            <time dateTime="2026-08-22">22 August 2026</time>
            <span>6 minute read</span>
          </div>
        </header>

        <div className={styles.articleBody}>
          <p className={styles.lead}>
            Small jobs can take a surprising amount of time.
          </p>
          <p>{copy.intro}</p>
          <p>
            None of these jobs is hard on its own. The problem is how often they
            happen. They break up the day, slow customers down, and get missed
            when the team is busy.
          </p>
          <p>
            This is where an AI assistant can help. It can read a message, find
            approved information, and take a few clear actions. It does not run
            the business. It handles a defined job and passes the hard parts to
            a person.
          </p>

          <p className={styles.principle}>
            Start with one job people repeat every day. Make that job easier.
            Then decide if AI deserves more work.
          </p>

          <section aria-labelledby="talk-and-work">
            <h2 id="talk-and-work">Start with the work that gets missed</h2>
            <p>
              A quick reply is helpful, but it is not enough. The assistant must
              connect the customer&apos;s message to the work behind it.
            </p>
            <p>It could:</p>
            <ul>
              {copy.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
              <li>Pass the conversation to a person when the request is unusual.</li>
            </ul>
            <p>
              The value comes from moving the job forward. The words are only
              the front door.
            </p>
          </section>

          <section aria-labelledby="one-request">
            <h2 id="one-request">Take one booking change</h2>
            <p>A customer sends this message after the team has gone home:</p>

            <div className={styles.example}>
              <blockquote>“{copy.request}”</blockquote>
              <ol
                className={styles.steps}
                aria-label="How an assistant could handle the request"
              >
                {copy.steps.map((step, index) => (
                  <li key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <p>{copy.result}</p>
            <p>
              This sounds simple. It is not. The assistant must know which
              customer is asking, which booking they mean, what the business can
              offer, and what it has permission to change. That is why the
              workflow matters more than the chat box.
            </p>
          </section>

          <section aria-labelledby="value">
            <h2 id="value">Why this can matter</h2>
            <div className={styles.valueList}>
              <div>
                <h3>Customers get an answer sooner</h3>
                <p>
                  They get help while the request is still on their mind, even
                  when the team is busy.
                </p>
              </div>
              <div>
                <h3>The team repeats less work</h3>
                <p>
                  People spend less time answering the same questions or copying
                  the same details.
                </p>
              </div>
              <div>
                <h3>Fewer tasks get lost</h3>
                <p>
                  The assistant records the request and its result instead of
                  leaving both inside a chat thread.
                </p>
              </div>
              <div>
                <h3>People handle the hard cases</h3>
                <p>
                  Staff keep their time for work that needs care, experience, or
                  a real decision.
                </p>
              </div>
            </div>

            <aside className={styles.evidence}>
              <p className={styles.evidenceLabel}>What the research says</p>
              <p>
                A 2025 study followed 5,172 customer support agents. With AI
                help, they solved 15 percent more customer issues per hour on
                average. An OECD survey found that 65.1 percent of small and
                medium businesses using generative AI said it had improved staff
                performance.
              </p>
              <p>
                These numbers are not a promise. The study covered one company,
                and the OECD did not measure how large each gain was. The useful
                lesson is smaller: AI works best when it has a clear job inside
                a real process.
              </p>
            </aside>
          </section>

          <section aria-labelledby="limits">
            <h2 id="limits">The limits matter as much as the features</h2>
            <p>
              An assistant should not invent a price, promise a time that is not
              free, expose private customer details, or make a costly decision
              on its own.
            </p>
            <p>A good one should:</p>
            <ul>
              <li>Use only the information it needs.</li>
              <li>Stay within clear rules and permissions.</li>
              <li>Ask before an important action.</li>
              <li>Keep a record of what it did.</li>
              <li>Let a person take over without starting again.</li>
              <li>Fail clearly when it is unsure or offline.</li>
            </ul>
            <p>
              NIST gives similar advice. It says businesses should define the
              roles of people and AI, including who checks the system and who is
              responsible for each decision.
            </p>
          </section>

          <section aria-labelledby="start">
            <h2 id="start">How to choose the first job</h2>
            <p>Do not start with this question:</p>
            <blockquote className={styles.question}>
              “How can we add AI to the business?”
            </blockquote>
            <p>Start here instead:</p>
            <blockquote className={`${styles.question} ${styles.questionStrong}`}>
              “Which part of the day keeps taking time, slowing customers down,
              or getting forgotten?”
            </blockquote>
            <p>A good first job is easy to spot:</p>
            <ul>
              <li>It happens often.</li>
              <li>The normal steps are clear.</li>
              <li>The information already exists.</li>
              <li>A person can check or correct the result.</li>
              <li>Delay or mistakes have a real cost.</li>
            </ul>
            <p>
              It may be new enquiries, job details, booking changes, payment
              checks, lead follow-ups, or a daily summary for the owner.
            </p>
            <p>
              One job that works well is better than a large system that tries
              to run everything.
            </p>
          </section>

          <section className={styles.demoSection} aria-labelledby="demo">
            <p className={styles.kicker}>A working example</p>
            <h2 id="demo">I built a small version of this idea</h2>
            <p>
              I built BO Assistant around Oak &amp; Pine, a made-up home service
              business. The demo focuses on one job: helping a customer manage
              an appointment while showing the business what happened.
            </p>

            <figure className={styles.demoFigure}>
              <a
                className={styles.fullImageLink}
                href="/notes/service-business-agents/bo-owner-conversation.png"
                target="_blank"
                rel="noreferrer"
                aria-label="Open the full-size BO Assistant screenshot"
              >
                <Image
                  src="/notes/service-business-agents/bo-owner-conversation.png"
                  alt="BO Assistant showing a customer conversation and the actions taken"
                  width={1280}
                  height={720}
                  sizes="(max-width: 760px) calc(100vw - 32px), 960px"
                />
              </a>
              <figcaption>
                The back office shows the conversation, the actions taken, and
                the result. Oak &amp; Pine is a demo business, not a client. {" "}
                <a
                  href="/notes/service-business-agents/bo-owner-conversation.png"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open the original image ↗
                </a>
              </figcaption>
            </figure>

            <p>
              Oak is the customer side. BO Assistant is the business side. The
              demo does not claim that AI can run a whole company. It shows what
              one small workflow feels like when the assistant has the right
              information, a few tools, and clear limits.
            </p>

            <div className={styles.demoLinks}>
              <a href="https://oak.builtby.vin" target="_blank" rel="noreferrer">
                Try the customer side
                <ExternalArrow />
              </a>
              <a href="https://bo.builtby.vin" target="_blank" rel="noreferrer">
                Open BO Assistant
                <ExternalArrow />
              </a>
            </div>

            <p className={styles.demoWarning}>
              These demos are public. Do not enter personal or private
              information.
            </p>
          </section>

          <section aria-labelledby="bottom-line">
            <h2 id="bottom-line">Start with the problem, not the label</h2>
            <p>
              Sometimes an AI assistant is the right tool. Sometimes a form,
              search page, or simple rule will do the job better. The goal is
              not to make the business look advanced. The goal is to make one
              part of the day work better.
            </p>
            <p>
              Your business may not need AI everywhere. It may have one repeated
              job where a small assistant can save time, help customers, and
              stop work from being missed.
            </p>
            <p>That is enough of a place to start.</p>
          </section>

          <aside className={styles.authorCard}>
            <p>
              Vincent Mukuna is a full-stack product developer in Nairobi. He
              builds web and mobile products and tests practical ways to use AI
              in real work.
            </p>
            <Link href="/#selected-work">
              See what Vincent has built <span aria-hidden="true">→</span>
            </Link>
          </aside>

          <section className={styles.sources} aria-labelledby="sources-title">
            <h2 id="sources-title">Sources</h2>
            <ol>
              <li>
                <a
                  href="https://doi.org/10.1093/qje/qjae044"
                  target="_blank"
                  rel="noreferrer"
                >
                  Generative AI at Work, The Quarterly Journal of Economics
                  <ExternalArrow />
                </a>
              </li>
              <li>
                <a
                  href="https://www.oecd.org/en/publications/generative-ai-and-the-sme-workforce_2d08b99d-en/full-report/component-4.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Generative AI and the SME Workforce, OECD
                  <ExternalArrow />
                </a>
              </li>
              <li>
                <a
                  href="https://airc.nist.gov/airmf-resources/airmf/appendices/app-c-ai-risk-management-and-human-ai-interaction/"
                  target="_blank"
                  rel="noreferrer"
                >
                  AI Risk Management and Human-AI Interaction, NIST
                  <ExternalArrow />
                </a>
              </li>
            </ol>
          </section>
        </div>
      </article>

      <footer className={styles.footer}>
        <Link className={styles.wordmark} href="/">
          Built by Vin<span>.</span>
        </Link>
        <p>Vincent Mukuna · Full-stack product developer</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
