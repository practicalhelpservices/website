export const site = {
  name: "Practical Help Services Brisbane",
  shortName: "Practical Help Services",
  owner: "Amanda",
  phoneDisplay: "0494 010 345",
  phoneHref: "tel:+61494010345",
  email: "practicalhelp@myyahoo.com",
  hours: "Monday to Friday, 9am to 4pm",
  area: "North Brisbane and Moreton Bay",
  abn: "73 516 994 560",
  facebook: "https://www.facebook.com/profile.php?id=61572067483062",
  // Set this to a Calendly / Cal.com style link once a booking tool is chosen.
  // While it is empty, "Book a free call" buttons go to the contact page.
  bookingUrl: "",
};

export const bookingHref = site.bookingUrl || "/contact";

export const nav = [
  { href: "/mediation", label: "Mediation" },
  { href: "/advocacy", label: "Advocacy" },
  { href: "/tutoring", label: "Tutoring" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export type Price = { label: string; price: string; note?: string };

export const pricing: {
  slug: string;
  title: string;
  intro?: string;
  prices: Price[];
  footnote?: string;
}[] = [
  {
    slug: "mediation",
    title: "Mediation",
    prices: [
      {
        label: "Intake interview",
        price: "$100",
        note: "per person, 1 hour maximum",
      },
      {
        label: "Half-day mediation",
        price: "$350",
        note: "per person, plus GST",
      },
      {
        label: "Full-day mediation",
        price: "$800",
        note: "per person, plus GST",
      },
    ],
    footnote:
      "Room hire for in-person sessions is extra and depends on how long we need and how many rooms. Contact me and I'll arrange it. Sessions on Zoom have no room cost.",
  },
  {
    slug: "advocacy",
    title: "Advocacy",
    prices: [
      {
        label: "Advocacy services",
        price: "$100",
        note: "per hour, flat fee, regardless of location",
      },
    ],
    footnote:
      "You can package tutoring and advocacy together for a student: helping them improve their learning outcomes, and advocating to their school or institution for the adjustments they need.",
  },
  {
    slug: "tutoring",
    title: "Private tutoring",
    prices: [
      { label: "Online tutoring", price: "$65", note: "per hour" },
      {
        label: "In-person tutoring",
        price: "$85",
        note: "per hour, inclusive of some travel",
      },
    ],
    footnote:
      "Travel charges may apply for travel over 1 hour to and from the location.",
  },
];

export type Faq = { q: string; a: string };

export const mediationFaqs: Faq[] = [
  {
    q: "What kinds of disputes can be resolved through mediation?",
    a: "A wide range: family disputes, neighbourhood and boundary disagreements, workplace and employment issues, conflicts within organisations or clubs, tenancy and housing matters, and education-related disputes between parents or students and institutions. If you're unsure whether your situation is suitable, get in touch and we can talk it through.",
  },
  {
    q: "Does the other party have to agree to mediation?",
    a: "Mediation works best when everyone involved is willing to take part. I can support you in inviting the other party and, in some cases, contact them on your behalf. I can't force anyone to attend, but many people are open to mediation once they understand that it is a safe, neutral process with no predetermined outcome.",
  },
  {
    q: "How long does mediation usually take?",
    a: "It depends on how complex the dispute is and how willing everyone is to engage. Many straightforward matters are resolved in one to three sessions. More complex or emotionally charged disputes may take longer. After our first conversation I'll give you a realistic idea of the likely timeframe.",
  },
  {
    q: "Is a mediated agreement legally binding?",
    a: "Mediated agreements are made in good faith, so they are not automatically legally binding. It is up to the people involved to follow what they have agreed. If you need advice about making an agreement legally binding, I recommend speaking with an independent lawyer.",
  },
];

export const advocacyFaqs: Faq[] = [
  {
    q: "What is independent advocacy and why does it matter?",
    a: "Independent means I focus only on your interests, not those of service providers, government agencies or funders. That independence is what guarantees the advice and support you get are free from conflicts of interest.",
  },
  {
    q: "Can you help me appeal a decision about my care or education?",
    a: "Yes. I support clients in preparing and submitting formal appeals, complaints and review requests across healthcare, education, housing and government agencies. I can help you understand your rights, collect evidence, draft letters, and come with you to hearings or meetings.",
  },
  {
    q: "Can you help me learn to advocate for myself?",
    a: "Yes, and I actively encourage it. One-on-one sessions focus on understanding your rights, communicating effectively with services, and preparing for challenging conversations. The aim is to help you become more independent, not to create dependence on me.",
  },
];

export const tutoringFaqs: Faq[] = [
  {
    q: "How do you support students with learning difficulties?",
    a: "I use neurodiversity-affirming practices and have experience supporting students with dyslexia, dyscalculia, ADHD, autism, anxiety and other learning profiles. Tutoring starts with a thorough intake to understand the student's strengths, challenges and preferences, so the approach is tailored rather than one-size-fits-all.",
  },
  {
    q: "Will you contact my child's school or teachers?",
    a: "With your permission, yes. I'm happy to coordinate with your child's school or classroom teachers so the approach is consistent: sharing progress updates, discussing learning objectives, and contributing to Individual Education Plans or similar documents.",
  },
];

export const generalFaqs: Faq[] = [
  {
    q: "How do I know which service is right for me?",
    a: "Start with a free first call. I'll listen to your situation and help you work out which service, or combination of services, would suit. There is no pressure to proceed, and everything discussed is strictly confidential.",
  },
  {
    q: "Are sessions online or in person?",
    a: "Either. Sessions can be held on Zoom, by phone, or in person in a hired meeting room. Most mediation sessions, especially family matters, happen on Zoom.",
  },
  {
    q: "What accessibility accommodations do you provide?",
    a: "Depending on your needs, I can provide written materials in alternative formats (large print, plain language, digital), hold sessions in sensory-considerate environments, allow extra processing time, communicate through a support person, and adapt my communication style to suit you. Tell me your access needs when you get in touch.",
  },
  {
    q: "Is everything I share kept confidential?",
    a: "Yes. Information shared during calls and sessions is not disclosed to anyone without your consent, except in the rare circumstances required by law, such as immediate risk of harm. I'll always explain these limits clearly before we begin.",
  },
  {
    q: "Can I bring a support person?",
    a: "Absolutely. You are welcome to bring a trusted support person, carer or communication assistant to any session.",
  },
];
