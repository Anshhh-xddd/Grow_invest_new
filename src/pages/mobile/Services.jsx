const services = [
  {
    title: 'Portfolio architecture',
    description: 'Tailored allocations that balance public markets, private ventures, and impact opportunities.',
  },
  {
    title: 'Advisory and planning',
    description: 'Quarterly strategy sprints and on-demand advisor access to stay ahead of every decision.',
  },
  {
    title: 'Operations support',
    description: 'Consolidated reporting, compliance coordination, and communications for lean teams.',
  },
]

const MobileServices = () => {
  return (
    <div className="space-y-10 pb-16">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-midnight">Services built around your ambitions.</h1>
        <p className="text-base leading-relaxed text-slate-600">
          Choose the mix of strategic advisory, portfolio management, and operational support that matches your growth horizon.
        </p>
      </section>

      <section className="space-y-4">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-midnight">{service.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl bg-brand-500/10 px-5 py-6 text-midnight">
        <h2 className="text-xl font-semibold">Ready to co-create your plan?</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Book a discovery session and we will map the highest-impact steps for your capital.
        </p>
        <a
          href="/contact"
          className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
        >
          Talk to an advisor
        </a>
      </section>
    </div>
  )
}

export default MobileServices
