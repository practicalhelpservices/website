import type { Metadata } from "next";
import { ConceptShell } from "@/components/ConceptShell";
import {
  BookButton,
  Button,
  ContactBand,
  PhotoPlaceholder,
  PriceList,
  SiteFooter,
  TickList,
} from "@/components/ui";
import {
  about,
  access,
  examples,
  headline,
  intro,
  services,
  trust,
  where,
} from "@/lib/content";
import { pricing, site } from "@/lib/site";

export const metadata: Metadata = { title: "Concept 1: Warm and personal" };

const nav = [
  { href: "#services", label: "What I do" },
  { href: "#examples", label: "Examples" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base font-bold tracking-wide text-accent uppercase">
      {children}
    </p>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-2 font-heading text-3xl leading-tight font-semibold text-brand sm:text-4xl">
      {children}
    </h2>
  );
}

export default function ConceptOne() {
  return (
    <ConceptShell conceptId="1">
      <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a
            href="#top"
            className="font-heading text-xl leading-tight font-semibold text-brand"
          >
            {site.shortName}
            <span className="block font-sans text-sm font-normal text-muted">
              Mediation and advocacy · Brisbane
            </span>
          </a>
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-md px-3 py-2 text-base hover:bg-brand-soft hover:text-brand"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={site.phoneHref}
            className="rounded-full bg-accent px-4 py-2 text-base font-bold whitespace-nowrap text-white hover:opacity-90"
          >
            <span className="hidden sm:inline">Call </span>
            {site.phoneDisplay}
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero: who am I, what do I do */}
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-[1.25fr_1fr] md:py-16">
          <div>
            <Eyebrow>Brisbane and Moreton Bay · Online and in person</Eyebrow>
            <h1 className="mt-3 font-heading text-4xl leading-[1.1] font-semibold text-brand sm:text-5xl lg:text-6xl">
              {headline}
            </h1>
            <p className="mt-5 max-w-xl text-xl">{intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <BookButton />
              <Button href="#pricing" variant="secondary">
                See what it costs
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <PhotoPlaceholder className="aspect-[4/5] rounded-[2rem]" />
            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-line bg-surface px-5 py-3 shadow-md sm:-left-8">
              <p className="font-heading text-xl font-semibold text-brand">
                Hi, I&rsquo;m Amanda
              </p>
              <p className="text-base text-muted">
                Accredited mediator · Advocate · Teacher
              </p>
            </div>
          </div>
        </section>

        {/* What do I do */}
        <section id="services" className="bg-band">
          <div className="mx-auto max-w-6xl px-5 py-14">
            <Eyebrow>What I do</Eyebrow>
            <H2>Three ways I can help</H2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {services.map((s, i) => (
                <article
                  key={s.id}
                  className={`flex flex-col rounded-2xl border p-6 sm:p-7 ${
                    i === 0
                      ? "border-brand bg-brand text-white"
                      : "border-line bg-surface"
                  }`}
                >
                  <h3
                    className={`font-heading text-2xl font-semibold ${
                      i === 0 ? "" : "text-brand"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-1 italic">{s.tagline}</p>
                  <p className={`mt-4 ${i === 0 ? "text-white/90" : ""}`}>
                    {s.summary}
                  </p>
                  <ul className="mt-4 list-disc space-y-1 pl-5">
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <p
                    className={`mt-auto pt-6 font-bold ${
                      i === 0 ? "" : "text-brand"
                    }`}
                  >
                    {s.from}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What does it look like */}
        <section id="examples" className="mx-auto max-w-6xl px-5 py-14">
          <Eyebrow>What it looks like</Eyebrow>
          <H2>Real situations I help with</H2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {examples.map((e) => (
              <article
                key={e.id}
                className="rounded-2xl border border-line bg-surface p-6 sm:p-7"
              >
                <p className="inline-block rounded-full bg-brand-soft px-3 py-1 text-base font-bold text-brand capitalize">
                  {e.service}
                </p>
                <h3 className="mt-3 font-heading text-2xl font-semibold text-brand">
                  {e.heading}
                </h3>
                <p className="mt-2">{e.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* What does it cost */}
        <section id="pricing" className="bg-band">
          <div className="mx-auto max-w-6xl px-5 py-14">
            <Eyebrow>What it costs</Eyebrow>
            <H2>Prices upfront, and the first chat is free</H2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {pricing.map((group) => (
                <div
                  key={group.slug}
                  className="rounded-2xl border border-line bg-surface p-6 sm:p-7"
                >
                  <h3 className="font-heading text-2xl font-semibold text-brand">
                    {group.title}
                  </h3>
                  <div className="mt-2">
                    <PriceList prices={group.prices} />
                  </div>
                  {group.footnote && (
                    <p className="mt-3 text-base text-muted">
                      {group.footnote}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why trust me, where do I work */}
        <section
          id="about"
          className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2"
        >
          <div>
            <Eyebrow>Why trust me</Eyebrow>
            <H2>Experienced, qualified and local</H2>
            {about.map((p) => (
              <p key={p} className="mt-4">
                {p}
              </p>
            ))}
            <div className="mt-6">
              <TickList items={trust} />
            </div>
          </div>
          <div className="space-y-5">
            <div className="rounded-2xl border border-line bg-surface p-6 sm:p-7">
              <h3 className="font-heading text-2xl font-semibold text-brand">
                Where and how we meet
              </h3>
              {where.map((p) => (
                <p key={p} className="mt-3">
                  {p}
                </p>
              ))}
            </div>
            <div className="rounded-2xl bg-brand-soft p-6 sm:p-7">
              <h3 className="font-heading text-2xl font-semibold text-brand">
                Accessible and inclusive
              </h3>
              <p className="mt-3">{access}</p>
            </div>
          </div>
        </section>

        <ContactBand />
      </main>
      <SiteFooter />
    </ConceptShell>
  );
}
