import type { Metadata } from "next";
import {
  Atkinson_Hyperlegible,
  Fraunces,
  Libre_Baskerville,
} from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

// Atkinson Hyperlegible is designed for readers with low vision.
const atkinson = Atkinson_Hyperlegible({
  variable: "--font-atkinson",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const baskerville = Libre_Baskerville({
  variable: "--font-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Mediation and advocacy`,
    template: `%s | ${site.name}`,
  },
  description:
    "Mediation services and independent advocacy in North Brisbane and Moreton Bay. Family mediation, neighbourhood and boundary disputes, aged care, school and NDIS advocacy. Prices upfront.",
  // Draft: keep the concept pages out of search engines. Remove at launch.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-AU"
      className={`${atkinson.variable} ${fraunces.variable} ${baskerville.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans text-lg leading-relaxed">
        {children}
      </body>
    </html>
  );
}
