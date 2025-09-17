const values = [
  {
    title: 'Mission-driven wealth',
    copy: 'Institutional expertise meets regenerative finance so every allocation advances progress.',
  },
  {
    title: 'Human insight + smart tech',
    copy: 'We pair advisor judgment with scenario modeling and climate analytics to stay ahead of market shifts.',
  },
  {
    title: 'Transparent partnership',
    copy: 'Clear reporting, open communication, and aligned incentives keep you confident in every move.',
  },
]

const MobileAbout = () => {
  return (
    <div className="space-y-10 pb-16">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-midnight">Investing in progress and people.</h1>
        <p className="text-base leading-relaxed text-slate-600">
          Grow Invest partners with founders and families who want growth with measurable impact. Our multidisciplinary team
          builds strategies that respect your goals and the planet.
        </p>
      </section>

      <section className="space-y-4">
        {values.map((value) => (
          <article key={value.title} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-midnight">{value.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.copy}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl bg-brand-500/10 px-5 py-6 text-midnight">
        <h2 className="text-xl font-semibold">Our journey</h2>
        <ul className="mt-4 space-y-3 text-sm text-slate-600">
          <li>
            <span className="font-semibold text-midnight">2016:</span> Founded to accelerate sustainable venture funds.
          </li>
          <li>
            <span className="font-semibold text-midnight">2019:</span> Expanded support to global family offices and social enterprises.
          </li>
          <li>
            <span className="font-semibold text-midnight">2023:</span> Introduced resilience analytics for proactive risk management.
          </li>
        </ul>
      </section>
    </div>
  )
}

export default MobileAbout
