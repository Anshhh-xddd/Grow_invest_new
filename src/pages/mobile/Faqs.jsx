const faqs = [
  {
    question: 'Who does Grow Invest partner with?',
    answer: 'Founders, family offices, and mission-driven leaders managing $5M–$500M in assets.',
  },
  {
    question: 'How quickly can we onboard?',
    answer: 'Most clients launch within two weeks thanks to guided data gathering and roadmap planning.',
  },
  {
    question: 'Do you design custom mandates?',
    answer: 'Yes, including thematic sleeves, co-investments, and liquidity-sensitive strategies.',
  },
  {
    question: 'How is performance reported?',
    answer: 'Dashboards consolidate every holding with monthly insights and quarterly deep dives.',
  },
]

const MobileFaqs = () => {
  return (
    <div className="space-y-10 pb-16">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-midnight">Frequently asked questions</h1>
        <p className="text-base leading-relaxed text-slate-600">The essentials prospective clients ask before partnering.</p>
      </section>

      <section className="space-y-3">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-midnight">
              {faq.question}
              <span className="text-xs font-medium text-brand-600 transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </section>

      <section className="rounded-3xl bg-brand-500/10 px-5 py-6 text-midnight">
        <h2 className="text-xl font-semibold">Need more clarity?</h2>
        <p className="mt-2 text-sm text-slate-600">Send us a note and an advisor will reach out.</p>
        <a
          href="mailto:hello@growinvest.com"
          className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
        >
          Email Grow Invest
        </a>
      </section>
    </div>
  )
}

export default MobileFaqs
