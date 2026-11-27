import type { ReactNode } from "react";
import { bookingHref, site, type Price } from "@/lib/site";

const buttonBase =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-lg font-bold transition-opacity hover:opacity-90";

const buttonStyles = {
  primary: "bg-accent text-white",
  secondary: "border-2 border-brand text-brand hover:bg-brand-soft",
  onBrand: "bg-white text-brand",
  onBrandOutline: "border-2 border-white text-white",
};

type Variant = keyof typeof buttonStyles;

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <a href={href} className={`${buttonBase} ${buttonStyles[variant]}`}>
      {children}
    </a>
  );
}

export function BookButton({ variant }: { variant?: Variant }) {
  return (
    <Button href={bookingHref} variant={variant}>
      Book a free call
    </Button>
  );
}

export function CallButton({ variant }: { variant?: Variant }) {
  return (
    <Button href={site.phoneHref} variant={variant}>
      Call {site.phoneDisplay}
    </Button>
  );
}

export function TickList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs font-bold text-brand"
          >
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PriceList({ prices }: { prices: Price[] }) {
  return (
    <dl className="divide-y divide-line">
      {prices.map((p) => (
        <div
          key={p.label}
          className="flex items-baseline justify-between gap-4 py-3"
        >
          <dt className="font-bold">{p.label}</dt>
          <dd className="text-right">
            <span className="font-heading text-2xl font-semibold text-brand">
              {p.price}
            </span>
            {p.note && (
              <span className="block text-base text-muted">{p.note}</span>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function PhotoPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Photo of Amanda (to be added)"
      className={`flex flex-col items-center justify-center border-2 border-dashed border-brand/40 bg-brand-soft text-center text-brand ${className}`}
    >
      <span className="font-heading text-7xl font-semibold" aria-hidden="true">
        A
      </span>
      <span className="mt-3 px-4 text-base">Amanda&rsquo;s photo goes here</span>
    </div>
  );
}

export function ContactDetails() {
  return (
    <dl className="space-y-3">
      <div>
        <dt className="text-base text-muted">Phone</dt>
        <dd>
          <a
            href={site.phoneHref}
            className="font-heading text-2xl font-semibold text-brand underline"
          >
            {site.phoneDisplay}
          </a>
        </dd>
      </div>
      <div>
        <dt className="text-base text-muted">Email</dt>
        <dd>
          <a href={`mailto:${site.email}`} className="text-brand underline">
            {site.email}
          </a>
        </dd>
      </div>
      <div>
        <dt className="text-base text-muted">Hours</dt>
        <dd>{site.hours}</dd>
      </div>
    </dl>
  );
}

export function ContactBand({
  title = "Not sure where to start? Give me a call.",
}: {
  title?: string;
}) {
  return (
    <section id="contact" className="bg-brand text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl leading-tight font-semibold sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-white/90">
            The first chat is free and confidential, with no obligation.
            I&rsquo;m available {site.hours}.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <CallButton variant="onBrand" />
          <BookButton variant="onBrandOutline" />
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-base text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © 2026 {site.name}. ABN {site.abn}.
        </p>
        <p>
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>{" "}
          ·{" "}
          <a href={site.facebook} className="underline">
            Facebook
          </a>
        </p>
      </div>
    </footer>
  );
}
