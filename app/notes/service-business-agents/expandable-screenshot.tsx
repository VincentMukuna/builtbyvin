"use client";

import Image from "next/image";
import { useRef } from "react";
import styles from "./page.module.css";

type ExpandableScreenshotProps = {
  src: string;
  alt: string;
  caption: string;
};

export function ExpandableScreenshot({
  src,
  alt,
  caption,
}: ExpandableScreenshotProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openImage() {
    dialogRef.current?.showModal();
  }

  function closeImage() {
    dialogRef.current?.close();
  }

  return (
    <>
      <figure className={styles.demoFigure}>
        <button
          className={styles.screenshotButton}
          type="button"
          onClick={openImage}
          aria-label={`Expand image: ${alt}`}
        >
          <Image
            className={styles.screenshotImage}
            src={src}
            alt={alt}
            width={1280}
            height={720}
            sizes="(max-width: 760px) calc(100vw - 40px), 900px"
          />
          <span className={styles.screenshotHint} aria-hidden="true">
            Click to expand
          </span>
        </button>
        <figcaption>{caption}</figcaption>
      </figure>

      <dialog
        className={styles.lightbox}
        ref={dialogRef}
        aria-label={alt}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            event.currentTarget.close();
          }
        }}
      >
        <button
          className={styles.lightboxClose}
          type="button"
          onClick={closeImage}
        >
          Close
        </button>
        <Image
          className={styles.lightboxImage}
          src={src}
          alt={alt}
          width={1280}
          height={720}
          sizes="96vw"
        />
      </dialog>
    </>
  );
}
