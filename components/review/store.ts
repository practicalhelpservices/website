"use client";

import { useSyncExternalStore } from "react";
import { concepts, palettes } from "@/lib/concepts";

// Review notes are kept in the visitor's own browser (localStorage) and only
// leave it when they choose to email or copy them.

export type Feedback = Record<string, string>;

const KEY = "phs-concept-feedback-v1";
const EMPTY: Feedback = {};
const listeners = new Set<() => void>();
let cache: Feedback | null = null;

function load(): Feedback {
  if (cache) return cache;
  try {
    cache = JSON.parse(localStorage.getItem(KEY) ?? "{}") as Feedback;
  } catch {
    cache = {};
  }
  return cache;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function setField(key: string, value: string) {
  cache = { ...load(), [key]: value };
  try {
    localStorage.setItem(KEY, JSON.stringify(cache));
  } catch {}
  listeners.forEach((l) => l());
}

export function useFeedback() {
  return useSyncExternalStore(subscribe, load, () => EMPTY);
}

export const ratings = ["Love it", "Like it", "Not sure", "Not for me"];

export function feedbackText(fb: Feedback) {
  const line = (label: string, value?: string) =>
    `${label}: ${value?.trim() || "(nothing yet)"}`;
  const paletteName =
    palettes.find((p) => p.id === fb["overall.colours"])?.name ??
    fb["overall.colours"];

  const parts = [
    "Website concept feedback",
    "",
    line("Favourite layout", fb["overall.layout"]),
    line("Favourite colours", paletteName),
    line("Other comments", fb["overall.notes"]),
  ];
  for (const c of concepts) {
    parts.push(
      "",
      `Concept ${c.id}: ${c.name}`,
      line("Reaction", fb[`${c.id}.rating`]),
      line("What I like", fb[`${c.id}.likes`]),
      line("What I don't like", fb[`${c.id}.dislikes`]),
    );
  }
  return parts.join("\n");
}

export function hasFeedback(fb: Feedback) {
  return Object.values(fb).some((v) => v.trim() !== "");
}
