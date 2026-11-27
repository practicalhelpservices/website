"use client";

import { useState, type ReactNode } from "react";
import {
  BookButton,
  CallButton,
  ContactDetails,
  PhotoPlaceholder,
  PriceList,
  TickList,
} from "@/components/ui";
import { about, access, examples, services, trust, where } from "@/lib/content";
import { pricing, site } from "@/lib/site";

/** Concept 3: the seven visitor questions, answered one at a time. */

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-heading text-xl font-bold text-brand">{children}</h3>
  );
}

const questions: { id: string; question: string; answer: ReactNode }[] = [
  {
    id: "who",
    question: "Who am I?",
    answer: (
      <div className="grid items-start gap-8 sm:grid-cols-[13rem_1fr]">
        <PhotoPlaceholder className="aspect-[4/5] w-full max-w-52 rounded-lg" />
        <div className="space-y-4">
          {about.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <BookButton />
        </div>
      </div>
    ),
  },
  {
    id: "what",
    question: "What do I do?",
    answer: (
      <div className="divide-y divide-line">
        {services.map((s) => (
          <div key={s.id} className="py-5 first:pt-0 last:pb-0">
            <H3>{s.title}</H3>
            <p className="mt-1">{s.summary}</p>
            <p className="mt-1 text-base text-muted">{s.points.join(" · ")}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "examples",
    question: "What does it look like?",
    answer: (
      <div className="grid gap-6 sm:grid-cols-2">
        {examples.map((e) => (
          <div key={e.id} className="border-l-4 border-accent pl-4">
            <H3>{e.heading}</H3>
            <p className="mt-1 text-base">{e.text}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "cost",
    question: "What does it cost?",
    answer: (
      <div className="space-y-8">
        <p>The first chat is free. After that, these are the prices.</p>
        {pricing.map((group) => (
          <div key={group.slug}>
            <H3>{group.title}</H3>
            <PriceList prices={group.prices} />
            {group.footnote && (
              <p className="mt-2 text-base text-muted">{group.footnote}</p>
            )}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "trust",
    question: "Why should you trust me?",
    answer: (
      <div className="space-y-6">
        <TickList items={trust} />
        <p className="rounded-lg bg-brand-soft p-5">{access}</p>
      </div>
    ),
  },
  {
    id: "where",
    question: "Where do I work?",
    answer: (
      <div className="space-y-4">
        {where.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <p className="text-muted">
          Tutoring can be online or in person.
        </p>
      </div>
    ),
  },
  {
    id: "contact",
    question: "How do you get in touch?",
    answer: (
      <div className="space-y-6">
        <p>
          Call or email me for a free, confidential first chat. There&rsquo;s
          no obligation.
        </p>
        <ContactDetails />
        <div className="flex flex-wrap gap-3">
          <CallButton />
          <BookButton variant="secondary" />
        </div>
      </div>
    ),
  },
];

export function Questions() {
  const [active, setActive] = useState(questions[0].id);
  const index = questions.findIndex((q) => q.id === active);
  const current = questions[index];
  const next = questions[index + 1];

  return (
    <div className="mx-auto grid w-full max-w-6xl flex-1 gap-8 px-5 py-8 lg:grid-cols-[20rem_1fr] lg:gap-14 lg:py-14">
      <aside className="lg:sticky lg:top-10 lg:self-start">
        <p className="font-heading text-2xl leading-tight font-bold text-brand">
          {site.shortName}
        </p>
        <p className="mt-2 text-base text-muted">
          Mediation and advocacy in Brisbane and Moreton Bay, with Amanda.
        </p>
        <nav aria-label="Questions" className="mt-6">
          <ol className="flex flex-wrap gap-2 lg:block lg:border-l-2 lg:border-line">
            {questions.map((q, i) => (
              <li key={q.id}>
                <button
                  type="button"
                  aria-current={active === q.id ? "true" : undefined}
                  onClick={() => setActive(q.id)}
                  className={`rounded-full border px-4 py-2 text-left text-base lg:-ml-0.5 lg:w-full lg:rounded-none lg:border-0 lg:border-l-2 lg:py-2.5 lg:text-lg ${
                    active === q.id
                      ? "border-brand bg-brand font-bold text-white lg:border-accent lg:bg-transparent lg:text-brand"
                      : "border-line text-ink hover:text-brand lg:border-transparent"
                  }`}
                >
                  <span className="mr-2 text-muted max-lg:hidden">
                    {i + 1}.
                  </span>
                  {q.question}
                </button>
              </li>
            ))}
          </ol>
        </nav>
        <a
          href={site.phoneHref}
          className="mt-6 inline-block rounded-md bg-accent px-5 py-3 font-bold text-white hover:opacity-90 max-lg:hidden"
        >
          Call {site.phoneDisplay}
        </a>
      </aside>

      <section
        aria-live="polite"
        className="rounded-lg border border-line bg-surface p-6 sm:p-10"
      >
        <p className="text-base font-bold tracking-wide text-accent uppercase">
          Question {index + 1} of {questions.length}
        </p>
        <h1 className="mt-2 font-heading text-3xl leading-tight font-bold text-brand sm:text-5xl">
          {current.question}
        </h1>
        <div className="mt-8">{current.answer}</div>
        {next && (
          <p className="mt-10 border-t border-line pt-5">
            <button
              type="button"
              onClick={() => setActive(next.id)}
              className="font-bold text-brand underline"
            >
              Next: {next.question} →
            </button>
          </p>
        )}
      </section>
    </div>
  );
}
