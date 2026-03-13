const faqs = [
  {
    question: "Who is this site intended for?",
    answer:
      "This site currently focuses on users in Israel and is designed to show referral offers that are relevant to that supported audience.",
  },
  {
    question: "Why are some exchanges marked as coming soon?",
    answer:
      "The project is built for gradual expansion. Some exchanges are already planned in the structure, but only active referral setups should be shown to users.",
  },
  {
    question: "Do these links include referrals?",
    answer:
      "Yes. Some outbound links on this website are referral links, which may generate a commission when a user registers through them.",
  },
  {
    question: "Why is region detection important?",
    answer:
      "Exchange availability can vary by jurisdiction. Region-aware display helps prevent showing irrelevant or unsupported offers to the wrong audience.",
  },
];

export function FAQ() {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Common questions
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <h3 className="text-lg font-semibold text-white">
                {faq.question}
              </h3>
              <p className="mt-3 leading-7 text-zinc-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}