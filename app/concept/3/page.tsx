import type { Metadata } from "next";
import { ConceptShell } from "@/components/ConceptShell";
import { Questions } from "@/components/concepts/Questions";
import { SiteFooter } from "@/components/ui";

export const metadata: Metadata = { title: "Concept 3: Seven questions" };

export default function ConceptThree() {
  return (
    <ConceptShell conceptId="3">
      <main className="flex flex-1 flex-col">
        <Questions />
      </main>
      <SiteFooter />
    </ConceptShell>
  );
}
