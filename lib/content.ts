// Shared draft copy used by all three layout concepts.

export type ServiceId = "mediation" | "advocacy" | "tutoring";

export const services: {
  id: ServiceId;
  title: string;
  tagline: string;
  summary: string;
  points: string[];
  from: string;
  how: string;
}[] = [
  {
    id: "mediation",
    title: "Mediation",
    tagline: "Finding common ground, even when it feels impossible.",
    summary:
      "A neutral, confidential way for families, neighbours and businesses to settle a dispute, often at a lower cost than legal action.",
    points: [
      "Family mediation",
      "Neighbourhood and boundary disputes",
      "Workplace and business disputes",
    ],
    from: "From $350 per person for a half day",
    how: "Most mediations happen on Zoom. In-person sessions are held in a hired meeting room.",
  },
  {
    id: "advocacy",
    title: "Advocacy",
    tagline: "Your voice amplified, with someone firmly in your corner.",
    summary:
      "Independent support when you're dealing with aged care providers, schools, the NDIS or government agencies.",
    points: [
      "Aged care and My Aged Care providers",
      "School adjustments for children with disability",
      "NDIS providers",
    ],
    from: "$100 per hour, flat fee",
    how: "By phone, on Zoom, or alongside you at meetings.",
  },
  {
    id: "tutoring",
    title: "Tutoring",
    tagline: "Learning shaped around how your mind works best.",
    summary:
      "Inclusive one-on-one tutoring in Maths, Science, English and research skills, from primary school to university, with a registered teacher.",
    points: [
      "Primary, secondary and tertiary students",
      "Neurodiversity-affirming teaching",
      "Exam preparation and study skills",
    ],
    from: "From $65 per hour",
    how: "Online or in person.",
  },
];

export const topics: {
  id: string;
  label: string;
  service: ServiceId;
  heading: string;
  text: string;
}[] = [
  {
    id: "neighbour",
    label: "A dispute with a neighbour",
    service: "mediation",
    heading: "Neighbourhood and boundary disputes",
    text: "Two neighbours can't agree on a shared fence. A lawyer tells them court will cost far more than the fence is worth. In mediation, each has their say and they work out an arrangement they can both live with.",
  },
  {
    id: "family",
    label: "A family dispute",
    service: "mediation",
    heading: "Family mediation",
    text: "Separated parents need to sort out arrangements for their children. They meet on Zoom, each from their own home, and work through it step by step with a neutral person keeping the conversation calm and fair.",
  },
  {
    id: "work",
    label: "A workplace or business dispute",
    service: "mediation",
    heading: "Workplace and business disputes",
    text: "Mediation covers workplace and employment disputes and disagreements between businesses. It runs to a timeframe that suits you rather than court deadlines, and the conversation stays confidential.",
  },
  {
    id: "agedcare",
    label: "Aged care",
    service: "advocacy",
    heading: "Being heard by aged care providers",
    text: "An older client felt rushed and confused by her aged care providers. I sat down with her, found out what she actually wanted, and put it to the providers on her behalf.",
  },
  {
    id: "school",
    label: "My child's school",
    service: "advocacy",
    heading: "Adjustments at school",
    text: "A child with disability isn't getting the support they need in class. I tell the school which reasonable adjustments the child needs, and I'm honest with parents when a request goes beyond what's reasonable.",
  },
  {
    id: "ndis",
    label: "The NDIS",
    service: "advocacy",
    heading: "Dealing with NDIS providers",
    text: "If you're a person with disability dealing with NDIS providers, I work alongside you to say clearly what you need, protect your rights, and reach outcomes that reflect what matters to you.",
  },
  {
    id: "tutoring",
    label: "Tutoring",
    service: "tutoring",
    heading: "Private tutoring",
    text: "Inclusive one-on-one tutoring in Maths, Science, English and research skills, from primary school to university. Every program is tailored to the learner's needs, pace and goals.",
  },
];

export const examples = ["neighbour", "family", "agedcare", "school"].map(
  (id) => topics.find((t) => t.id === id)!,
);

export const headline = "Mediation and advocacy for people who need to be heard.";

export const intro =
  "I'm Amanda, an accredited mediator and independent advocate in North Brisbane and Moreton Bay. I help families, neighbours and businesses settle disputes without going to court, and I speak up for people dealing with aged care, schools and the NDIS.";

// Draft only: to be replaced with Amanda's own blurb.
export const about = [
  "I'm Amanda. I'm an accredited mediator, an independent advocate and a registered teacher, and I'm local to North Brisbane and Moreton Bay.",
  "My background is in education and in working with vulnerable people and children. What matters most to me is that people feel heard, whether that's across a mediation table or in a meeting with a provider.",
];

export const trust = [
  "Accredited mediator under Australia's national standards",
  "Postgraduate Diploma in Education and Master of Learning Innovation",
  "Registered teacher with Blue Card and Yellow Card",
  "Professional background working with vulnerable people and children",
  "Independent: I work for you, not for providers or agencies",
];

export const where = [
  "I work across North Brisbane and Moreton Bay, and online with people anywhere.",
  "Most sessions happen on Zoom, especially family matters. In-person sessions are held in a hired meeting room.",
];

export const access =
  "Access and inclusion are essential, not optional. Tell me your access needs and I'll adapt: plain-language or large-print materials, extra processing time, a support person, or a sensory-considerate room.";
