export const palettes = [
  { id: "clay", name: "Forest and terracotta" },
  { id: "plum", name: "Plum and gold" },
  { id: "coast", name: "Teal and coral" },
] as const;

export type PaletteId = (typeof palettes)[number]["id"];

export const concepts: {
  id: string;
  name: string;
  summary: string;
  palette: PaletteId;
  headingFont: string;
}[] = [
  {
    id: "1",
    name: "Warm and personal",
    summary:
      "A friendly home page led by your photo and a clear statement of what you do, with services, examples and prices in short sections underneath.",
    palette: "clay",
    headingFont: "var(--font-fraunces)",
  },
  {
    id: "2",
    name: "Guided",
    summary:
      "Opens by asking visitors what they need help with. They pick their situation and see what you'd do, what it costs and how to book, without scrolling.",
    palette: "plum",
    headingFont: "var(--font-atkinson)",
  },
  {
    id: "3",
    name: "Seven questions",
    summary:
      "The questions every visitor has, listed down the side. Click a question and the answer appears next to it, one at a time.",
    palette: "coast",
    headingFont: "var(--font-baskerville)",
  },
];
