const services = [
  {
    title: "Mediation",
    items: [
      "Intake interviews (1 hour maximum) - $100 per person",
      "Half-day mediation - $350 per person plus GST",
      "Full day mediation - $800 per person plus GST",
      "Room hire - Please contact us for room hire arrangements for in person mediation sessions. Prices will vary depending on the duration and number of rooms required.",
    ],
  },
  {
    title: "Private Tutoring",
    items: [
      "We are professionally trained and registered teachers who have blue and yellow cards.",
      "Online tutoring - $65 per hour",
      "In-person tutoring - $85 per hour, inclusive of some travel. Travel charges may occur for travel over 1 hour to and from location.",
    ],
  },
  {
    title: "Advocacy Services",
    items: [
      "We charge a flat fee of $100 per hour for advocacy services. This is regardless of location. You can package a tutoring and advocacy program for your student that includes helping them improve their learning outcomes and advocating to their learning institution to secure the adjustments they need.",
    ],
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col justify-center bg-indigo-700 px-6 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
            What do our services cost?
          </h1>
          <p className="mt-8 text-lg leading-8 text-white sm:text-xl">
            Our services are competitively priced and designed to deliver value
            for money. We can tailor education and advocacy packages to your
            personal needs.
          </p>
        </header>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <section
              key={service.title}
              className="rounded-lg bg-white px-8 py-10 text-center shadow-sm"
            >
              <h2 className="font-serif text-2xl font-bold text-indigo-950 sm:text-3xl">
                {service.title}
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
                {service.items.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
