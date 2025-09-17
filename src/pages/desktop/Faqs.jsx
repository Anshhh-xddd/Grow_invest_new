const faqs = [
  {
    question: 'Who does Grow Invest partner with?',
    answer:
      'We advise founders, family offices, and impact-driven organizations managing $5M–$500M in assets who want growth with measurable responsibility.',
  },
  {
    question: 'How quickly can we onboard?',
    answer:
      'Most clients complete onboarding within two weeks. Our team coordinates data gathering, custodian setup, and roadmap planning to keep momentum high.',
  },
  {
    question: 'Do you offer custom mandates?',
    answer:
      'Yes. We regularly design bespoke portfolios, co-investments, and thematic sleeves tailored to cash-flow needs, liquidity events, and mission objectives.',
  },
  {
    question: 'How is performance reported?',
    answer:
      'Interactive dashboards consolidate public and private holdings, with quarterly deep dives and monthly insights delivered to your inbox.',
  },
]

const DesktopFaqs = () => {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="space-y-6">
        <h1 className="text-5xl font-semibold text-midnight">Frequently asked questions.</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
          Clarity builds trust. Explore answers to the topics prospective clients ask us about most often.
        </p>
      </section>

      <section className="space-y-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-midnight">
              {faq.question}
              <span className="text-sm font-medium text-brand-600 transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </section>

      <section className="rounded-3xl bg-brand-500/10 px-10 py-8">
        <div className="flex items-center justify-between gap-12">
          <div className="space-y-2 text-midnight">
            <h2 className="text-3xl font-semibold">Still exploring?</h2>
            <p className="text-base text-slate-600">Send us a note and we will set up time with an advisor.</p>
          </div>
          <a
            href="mailto:hello@growinvest.com"
            className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600"
          >
            Email Grow Invest
          </a>
        </div>
      </section>
    </div>
  )
}

export default DesktopFaqs
