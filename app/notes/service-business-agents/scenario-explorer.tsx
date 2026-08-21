"use client";

import { KeyboardEvent, useRef, useState } from "react";
import styles from "./page.module.css";

type Scenario = {
  id: string;
  label: string;
  status: "Works now" | "An idea to test";
  summary: string;
  steps: string[];
};

const scenarios: Scenario[] = [
  {
    id: "reschedule",
    label: "A customer needs to change an appointment",
    status: "Works now",
    summary:
      "The customer can ask questions as a guest, then verify their email when they need to change a booking.",
    steps: [
      "The customer asks to move a visit",
      "They verify their email",
      "The agent finds the booking and checks free times",
      "The owner approves the change",
      "The customer confirms the new time",
    ],
  },
  {
    id: "new-request",
    label: "A new request arrives while the owner is busy",
    status: "Works now",
    summary:
      "The agent can turn a conversation into a pending booking for the owner to review.",
    steps: [
      "A customer says what they need",
      "They give a service and a time",
      "The agent checks if that time is free",
      "It creates a pending booking",
      "The owner sees it and decides what to do",
    ],
  },
  {
    id: "follow-up",
    label: "A completed job still needs follow-up",
    status: "An idea to test",
    summary:
      "I have not built this part. I would want to know if it saves time or just creates more noise.",
    steps: [
      "A job is marked as done",
      "The agent checks if anything is still missing",
      "It suggests the next useful step",
      "The owner handles anything unusual",
      "The result is saved",
    ],
  },
];

export function ScenarioExplorer() {
  const [activeId, setActiveId] = useState(scenarios[0].id);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeScenario =
    scenarios.find((scenario) => scenario.id === activeId) ?? scenarios[0];

  const moveFocus = (index: number) => {
    const nextIndex = (index + scenarios.length) % scenarios.length;
    const scenario = scenarios[nextIndex];

    setActiveId(scenario.id);
    tabRefs.current[nextIndex]?.focus();
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      moveFocus(index + 1);
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      moveFocus(index - 1);
    }

    if (event.key === "Home") {
      event.preventDefault();
      moveFocus(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      moveFocus(scenarios.length - 1);
    }
  };

  return (
    <div className={styles.explorer}>
      <div
        className={styles.scenarioTabs}
        role="tablist"
        aria-label="Service business scenarios"
        aria-orientation="vertical"
      >
        {scenarios.map((scenario, index) => {
          const isActive = scenario.id === activeId;

          return (
            <button
              className={styles.scenarioTab}
              data-active={isActive}
              id={`scenario-${scenario.id}`}
              key={scenario.id}
              onClick={() => setActiveId(scenario.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              role="tab"
              aria-controls={`scenario-panel-${scenario.id}`}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              type="button"
            >
              <span>{scenario.label}</span>
              <small>{scenario.status}</small>
            </button>
          );
        })}
      </div>

      <div
        className={styles.scenarioPanel}
        id={`scenario-panel-${activeScenario.id}`}
        role="tabpanel"
        aria-labelledby={`scenario-${activeScenario.id}`}
        tabIndex={0}
      >
        <div className={styles.panelHeading}>
          <span
            className={styles.status}
            data-current={activeScenario.status === "Works now"}
          >
            {activeScenario.status}
          </span>
          <p>{activeScenario.summary}</p>
        </div>
        <ol className={styles.flow}>
          {activeScenario.steps.map((step, index) => (
            <li key={step}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
