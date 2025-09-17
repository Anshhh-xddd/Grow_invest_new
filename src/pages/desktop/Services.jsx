const services = [
  {
    title: 'Portfolio architecture',
    summary: 'Tailored asset allocations blending public markets, private deals, and impact opportunities.',
    points: ['Risk profiling and goal alignment', 'Dynamic rebalancing with tax optimization', 'ESG screens and stewardship votes'],
  },
  {
    title: 'Advisory and planning',
    summary: 'Proactive strategy sessions with senior advisors to navigate liquidity events and expansion plans.',
    points: ['Quarterly scenario workshops', 'Succession and philanthropy roadmaps', 'On-call market intelligence'],
  },
  {
    title: 'Operations support',
    summary: 'Integrated reporting, compliance coordination, and stakeholder communications for lean teams.',
    points: ['Consolidated performance dashboards', 'Sustainable impact measurement', 'Investment committee preparation'],
  },
]

const DesktopServices = () => {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="space-y-6">
        <h1 className="text-5xl font-semibold text-midnight">Services designed for modern stewards of capital.</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
          Every engagement starts with listening. We build modular service packages that grow alongside your ambitions—whether
          you are preparing for a funding round, scaling impact initiatives, or institutionalizing family wealth.
        </p>
      </section>

      <section className="grid grid-cols-3 gap-10">
        {services.map((service) => (
          <article key={service.title} className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-midnight">{service.title}</h2>
            <p className="mt-4 flex-1 text-base leading-relaxed text-slate-600">{service.summary}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-500">
              {service.points.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-500" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="rounded-3xl bg-brand-500/10 px-10 py-8">
        <div className="flex items-center justify-between gap-12">
          <div className="space-y-3 text-midnight">
            <h2 className="text-3xl font-semibold">Not sure where to begin?</h2>
            <p className="text-base text-slate-600">
              Schedule a complimentary discovery call and we will map the highest-impact next steps for your capital.
            </p>
          </div>
          <a
            href="/contact"
            className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600"
          >
            Talk to an advisor
          </a>
        </div>
      </section>
    </div>
  )
}

export default DesktopServices
