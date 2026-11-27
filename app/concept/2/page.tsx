import type { Metadata } from "next";
import { ConceptShell } from "@/components/ConceptShell";
import { Chooser } from "@/components/concepts/Chooser";
import {
  ContactBand,
  PhotoPlaceholder,
  SiteFooter,
  TickList,
} from "@/components/ui";
import { about, access, trust, where } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Concept 2: Guided" };

export default function ConceptTwo() {
  return (
    <ConceptShell conceptId="2">
      <header className="bg-brand text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
          <p className="font-heading text-xl leading-tight font-bold">
            {site.shortName}
          </p>
          <a
            href={site.phoneHref}
            className="rounded-full bg-white px-4 py-2 text-base font-bold whitespace-nowrap text-brand hover:opacity-90"
          >
            <span className="hidden sm:inline">Call </span>
            {site.phoneDisplay}
          </a>
        </div>
      </header>

      <main>
        <Chooser />

        <section className="mx-auto grid max-w-5xl items-center gap-8 px-5 py-14 md:grid-cols-[14rem_1fr]">
          <PhotoPlaceholder className="mx-auto aspect-square w-56 rounded-full" />
          <div>
            <h2 className="font-heading text-3xl leading-tight font-bold text-brand">
              Helping people feel heard
            </h2>
            {about.map((p) => (
              <p key={p} className="mt-3">
                {p}
              </p>
            ))}
          </div>
        </section>

        <section className="bg-band">
          <div className="mx-auto grid max-w-5xl gap-5 px-5 py-14 md:grid-cols-3">
            <div className="rounded-3xl bg-surface p-6">
              <h2 className="font-heading text-xl font-bold text-brand">
                Why trust me
              </h2>
              <div className="mt-3 text-base">
                <TickList items={trust} />
              </div>
            </div>
            <div className="rounded-3xl bg-surface p-6">
              <h2 className="font-heading text-xl font-bold text-brand">
                Where I work
              </h2>
              {where.map((p) => (
                <p key={p} className="mt-3 text-base">
                  {p}
                </p>
              ))}
            </div>
            <div className="rounded-3xl bg-surface p-6">
              <h2 className="font-heading text-xl font-bold text-brand">
                Accessible and inclusive
              </h2>
              <p className="mt-3 text-base">{access}</p>
            </div>
          </div>
        </section>

        <ContactBand title="Ready to talk it through?" />
      </main>
      <SiteFooter />
    </ConceptShell>
  );
}
