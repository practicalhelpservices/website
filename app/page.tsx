import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { OverallFeedback } from "@/components/review/FeedbackForm";
import { concepts } from "@/lib/concepts";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Website concepts" };

export default function ConceptsHub() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-12 sm:py-16">
      <p className="text-base font-bold tracking-wide text-accent uppercase">
        {site.name} · Draft
      </p>
      <h1 className="mt-2 font-heading text-4xl leading-tight font-semibold text-brand sm:text-5xl">
        Three ideas for the new website
      </h1>
      <p className="mt-5 max-w-3xl text-xl">
        Each concept below is a different way of laying out the same
        information. Open each one, try it on your phone as well, and use the
        bar at the bottom of the screen to switch colours and leave notes.
      </p>
      <ul className="mt-4 max-w-3xl list-disc space-y-1 pl-6 text-muted">
        <li>Layouts and colours can be mixed: any layout works in any colour.</li>
        <li>
          The wording is a draft, and the photo and &ldquo;about me&rdquo; text
          are placeholders until yours arrive.
        </li>
      </ul>

      <ol className="mt-10 grid gap-5 md:grid-cols-3">
        {concepts.map((c) => (
          <li key={c.id}>
            <Link
              href={`/concept/${c.id}`}
              data-theme={c.palette}
              style={{ "--heading": c.headingFont } as CSSProperties}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface text-ink hover:shadow-lg"
            >
              <div className="bg-brand px-6 py-8 text-white">
                <p className="text-base text-white/85">Concept {c.id}</p>
                <h2 className="font-heading text-3xl leading-tight font-semibold">
                  {c.name}
                </h2>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p>{c.summary}</p>
                <p className="mt-auto pt-5 font-bold text-accent group-hover:underline">
                  Open concept {c.id} →
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ol>

      <section id="feedback" className="mt-16 rounded-2xl bg-band p-6 sm:p-10">
        <h2 className="font-heading text-3xl leading-tight font-semibold text-brand">
          Your feedback
        </h2>
        <p className="mt-3 max-w-3xl">
          Notes you leave on each concept are collected here. When you&rsquo;re
          done, email them or copy them into a message.
        </p>
        <div className="mt-8">
          <OverallFeedback />
        </div>
      </section>
    </main>
  );
}
