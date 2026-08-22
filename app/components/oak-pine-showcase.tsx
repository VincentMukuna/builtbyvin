"use client";

import Image from "next/image";
import { useState } from "react";

const views = {
  customer: {
    label: "Customer site",
    eyebrow: "01 / Customer asks",
    description: "A request starts in the same place the customer already is.",
    src: "/notes/service-business-agents/oak-home-chat.png",
    alt: "Oak & Pine customer website with the AI support conversation open",
    width: 1280,
    height: 800,
  },
  operations: {
    label: "Back office",
    eyebrow: "02 / Agent works",
    description: "The request arrives with customer, booking, and approval context.",
    src: "/notes/service-business-agents/bo-owner-conversation.png",
    alt: "Oak & Pine back office showing an agent-handled customer conversation",
    width: 1280,
    height: 720,
  },
} as const;

type View = keyof typeof views;

export function OakPineShowcase() {
  const [activeView, setActiveView] = useState<View>("customer");
  const view = views[activeView];

  return (
    <figure className="project-image oak-stage">
      <div className="oak-viewer-bar">
        <p>One system / two surfaces</p>
        <div className="oak-view-switch" role="tablist" aria-label="Oak & Pine product surfaces">
          {(Object.keys(views) as View[]).map((viewKey) => (
            <button
              key={viewKey}
              type="button"
              role="tab"
              aria-selected={activeView === viewKey}
              onClick={() => setActiveView(viewKey)}
            >
              {views[viewKey].label}
            </button>
          ))}
        </div>
      </div>

      <div className="oak-viewer-canvas">
        <Image
          key={activeView}
          src={view.src}
          alt={view.alt}
          width={view.width}
          height={view.height}
          sizes="(max-width: 640px) calc(100vw - 58px), 48vw"
          priority={false}
        />
        <div className="oak-viewer-note" aria-live="polite">
          <span>{view.eyebrow}</span>
          <p>{view.description}</p>
        </div>
        <div className="oak-control-stamp">
          <span aria-hidden="true" />
          Staff can review, approve, or take over
        </div>
      </div>
    </figure>
  );
}
