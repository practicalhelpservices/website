"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { concepts, palettes } from "@/lib/concepts";
import { ConceptFeedback } from "./FeedbackForm";

// Draft-only toolbar shown on each concept page: move between concepts, try
// the colour directions, and leave notes. Not part of the final site.

const ROOT_ID = "concept-root";
const listeners = new Set<() => void>();

function currentPalette() {
  return document.getElementById(ROOT_ID)?.dataset.theme ?? "";
}

function applyPalette(id: string) {
  const root = document.getElementById(ROOT_ID);
  if (root) root.dataset.theme = id;
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

const swatch: Record<string, string> = {
  clay: "linear-gradient(135deg, #1f4d40 50%, #a8481f 50%)",
  plum: "linear-gradient(135deg, #5b2a4e 50%, #91540a 50%)",
  coast: "linear-gradient(135deg, #145a5e 50%, #b8402a 50%)",
};

export function ReviewBar({
  conceptId,
  defaultPalette,
}: {
  conceptId: string;
  defaultPalette: string;
}) {
  const [open, setOpen] = useState(false);
  const palette = useSyncExternalStore(
    subscribe,
    currentPalette,
    () => defaultPalette,
  );
  const concept = concepts.find((c) => c.id === conceptId)!;

  return (
    <div
      data-theme="clay"
      className="fixed inset-x-0 bottom-0 z-50 text-base text-ink"
    >
      {open && (
        <section
          aria-label={`Feedback on concept ${conceptId}`}
          className="mx-auto max-h-[70vh] max-w-xl overflow-auto rounded-t-2xl border border-b-0 border-line bg-bg p-5 shadow-2xl"
        >
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-xl font-bold text-brand">
              Concept {conceptId}: {concept.name}
            </h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full border border-line px-3 py-1 font-bold"
            >
              Close
            </button>
          </div>
          <div className="mt-4">
            <ConceptFeedback conceptId={conceptId} />
          </div>
          <p className="mt-4 text-muted">
            Saved on this device as you type.{" "}
            <Link href="/#feedback" className="font-bold text-brand underline">
              Review and send all feedback
            </Link>
          </p>
        </section>
      )}

      <div className="border-t border-line bg-surface shadow-[0_-4px_16px_rgba(0,0,0,0.12)]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-3 py-2">
          <nav aria-label="Concepts" className="flex items-center gap-1">
            <Link
              href="/"
              className="rounded-full px-3 py-1.5 font-bold text-brand underline"
            >
              All concepts
            </Link>
            {concepts.map((c) => (
              <Link
                key={c.id}
                href={`/concept/${c.id}`}
                aria-current={c.id === conceptId ? "page" : undefined}
                aria-label={`Concept ${c.id}: ${c.name}`}
                title={c.name}
                className={`flex h-9 w-9 items-center justify-center rounded-full font-bold ${
                  c.id === conceptId
                    ? "bg-brand text-white"
                    : "border border-line text-ink hover:bg-brand-soft"
                }`}
              >
                {c.id}
              </Link>
            ))}
          </nav>

          <div
            role="group"
            aria-label="Try different colours"
            className="flex items-center gap-2"
          >
            <span className="hidden text-muted sm:inline">Colours</span>
            {palettes.map((p) => (
              <button
                key={p.id}
                type="button"
                title={p.name}
                aria-label={`Colours: ${p.name}`}
                aria-pressed={palette === p.id}
                onClick={() => applyPalette(p.id)}
                style={{ background: swatch[p.id] }}
                className={`h-8 w-8 rounded-full border-2 border-white ${
                  palette === p.id ? "ring-3 ring-ink" : "ring-1 ring-line"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full bg-brand px-4 py-1.5 font-bold text-white"
          >
            {open ? "Hide feedback" : "Give feedback"}
          </button>
        </div>
      </div>
    </div>
  );
}
