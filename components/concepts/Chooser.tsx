"use client";

import { useState } from "react";
import { BookButton, CallButton, PriceList } from "@/components/ui";
import { services, topics } from "@/lib/content";
import { pricing } from "@/lib/site";

/** Concept 2: visitors pick their situation and see the matching answer. */
export function Chooser() {
  const [active, setActive] = useState(topics[0].id);
  const topic = topics.find((t) => t.id === active)!;
  const service = services.find((s) => s.id === topic.service)!;
  const prices = pricing.find((p) => p.slug === topic.service)!;

  return (
    <>
      <div className="bg-brand text-white">
        <div className="mx-auto max-w-5xl px-5 pt-10 pb-28 text-center sm:pt-14">
          <p className="text-lg text-white/90">
            Mediation and advocacy in Brisbane and Moreton Bay
          </p>
          <h1 className="mt-3 font-heading text-4xl leading-tight font-bold sm:text-6xl">
            What do you need help with?
          </h1>
          <div
            role="group"
            aria-label="Choose your situation"
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {topics.map((t) => (
              <button
                key={t.id}
                type="button"
                aria-pressed={active === t.id}
                onClick={() => setActive(t.id)}
                className={`rounded-full border-2 px-5 py-3 text-lg font-bold transition-colors ${
                  active === t.id
                    ? "border-white bg-white text-brand"
                    : "border-white/60 text-white hover:bg-white/15"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto -mt-20 w-full max-w-5xl px-5">
        <div
          aria-live="polite"
          className="grid gap-8 rounded-3xl border border-line bg-surface p-6 shadow-xl sm:p-10 md:grid-cols-[1.2fr_1fr]"
        >
          <div>
            <p className="inline-block rounded-full bg-brand-soft px-3 py-1 text-base font-bold text-brand">
              {service.title}
            </p>
            <h2 className="mt-3 font-heading text-3xl leading-tight font-bold text-brand">
              {topic.heading}
            </h2>
            <p className="mt-3">{topic.text}</p>
            <p className="mt-4 text-muted">{service.how}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <BookButton />
              <CallButton variant="secondary" />
            </div>
          </div>
          <div className="rounded-2xl bg-band p-5 sm:p-6">
            <h3 className="font-heading text-xl font-bold text-brand">
              What it costs
            </h3>
            <PriceList prices={prices.prices} />
            <p className="mt-2 text-base text-muted">
              The first chat is free. {prices.footnote}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
