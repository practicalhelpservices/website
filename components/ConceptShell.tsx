import type { CSSProperties, ReactNode } from "react";
import { concepts } from "@/lib/concepts";
import { ReviewBar } from "./review/ReviewBar";

/** Wraps a concept page in its colours and heading font, plus the review bar. */
export function ConceptShell({
  conceptId,
  children,
}: {
  conceptId: string;
  children: ReactNode;
}) {
  const concept = concepts.find((c) => c.id === conceptId)!;
  return (
    <>
      <div
        id="concept-root"
        data-theme={concept.palette}
        style={{ "--heading": concept.headingFont } as CSSProperties}
        className="flex flex-1 flex-col bg-bg pb-24 text-ink sm:pb-14"
      >
        {children}
      </div>
      <ReviewBar conceptId={conceptId} defaultPalette={concept.palette} />
    </>
  );
}
