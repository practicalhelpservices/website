"use client";

import { useState } from "react";
import { concepts, palettes } from "@/lib/concepts";
import {
  feedbackText,
  hasFeedback,
  ratings,
  setField,
  useFeedback,
} from "./store";

const fieldClass =
  "mt-1 w-full rounded-lg border border-line bg-surface p-3 text-base text-ink";

function Choice({
  name,
  options,
}: {
  name: string;
  options: { value: string; label: string }[];
}) {
  const fb = useFeedback();
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {options.map((o) => {
        const checked = fb[name] === o.value;
        return (
          <label
            key={o.value}
            className={`cursor-pointer rounded-full border-2 px-4 py-1.5 text-base has-focus-visible:outline-3 has-focus-visible:outline-accent ${
              checked
                ? "border-brand bg-brand font-bold text-white"
                : "border-line bg-surface text-ink"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={o.value}
              checked={checked}
              onChange={() => setField(name, o.value)}
              className="sr-only"
            />
            {o.label}
          </label>
        );
      })}
    </div>
  );
}

function Notes({ name, label }: { name: string; label: string }) {
  const fb = useFeedback();
  return (
    <label className="block text-base font-bold">
      {label}
      <textarea
        rows={3}
        value={fb[name] ?? ""}
        onChange={(e) => setField(name, e.target.value)}
        className={`${fieldClass} font-normal`}
      />
    </label>
  );
}

/** Notes about one concept. Saved in the browser as you type. */
export function ConceptFeedback({ conceptId }: { conceptId: string }) {
  return (
    <div className="space-y-4">
      <fieldset>
        <legend className="text-base font-bold">Your reaction</legend>
        <Choice
          name={`${conceptId}.rating`}
          options={ratings.map((r) => ({ value: r, label: r }))}
        />
      </fieldset>
      <Notes name={`${conceptId}.likes`} label="What do you like?" />
      <Notes name={`${conceptId}.dislikes`} label="What don't you like?" />
    </div>
  );
}

/** Overall choices plus the buttons that send everything. */
export function OverallFeedback() {
  const fb = useFeedback();
  const [copied, setCopied] = useState(false);
  const text = feedbackText(fb);
  const mailto = `mailto:?subject=${encodeURIComponent(
    "Website concept feedback",
  )}&body=${encodeURIComponent(text)}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="space-y-6">
      <fieldset>
        <legend className="font-bold">Which layout do you prefer?</legend>
        <Choice
          name="overall.layout"
          options={[
            ...concepts.map((c) => ({
              value: `Concept ${c.id}: ${c.name}`,
              label: `${c.id}. ${c.name}`,
            })),
            { value: "A mix", label: "A mix" },
            { value: "None of them", label: "None of them" },
          ]}
        />
      </fieldset>
      <fieldset>
        <legend className="font-bold">Which colours do you prefer?</legend>
        <Choice
          name="overall.colours"
          options={[
            ...palettes.map((p) => ({ value: p.id, label: p.name })),
            { value: "None of them", label: "None of them" },
          ]}
        />
      </fieldset>
      <Notes
        name="overall.notes"
        label="Anything else? Wording, things missing, things to remove."
      />

      <div>
        <h3 className="font-bold">Your feedback so far</h3>
        <pre className="mt-2 max-h-72 overflow-auto rounded-lg border border-line bg-surface p-4 font-sans text-base whitespace-pre-wrap text-muted">
          {text}
        </pre>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href={mailto}
          className="inline-flex rounded-full bg-accent px-6 py-3 font-bold text-white hover:opacity-90"
        >
          Email my feedback
        </a>
        <button
          type="button"
          onClick={copy}
          className="rounded-full border-2 border-brand px-6 py-3 font-bold text-brand hover:bg-brand-soft"
        >
          Copy my feedback
        </button>
        <span role="status" className="text-base text-muted">
          {copied ? "Copied. Paste it into a text or email." : ""}
        </span>
      </div>
      {!hasFeedback(fb) && (
        <p className="text-base text-muted">
          Nothing saved yet. Your notes are kept on this device as you type,
          and nothing is sent until you email or copy them.
        </p>
      )}
    </div>
  );
}
