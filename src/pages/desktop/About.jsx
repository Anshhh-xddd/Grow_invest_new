const principles = [
  {
    title: 'Mission-driven wealth',
    description:
      'Our founding team blends institutional investing experience with a passion for regenerative economies and equitable growth.',
  },
  {
    title: 'Human insight + smart tech',
    description:
      'We layer scenario modeling and climate analytics with advisor judgment so every portfolio reflects what matters most to you.',
  },
  {
    title: 'Transparent partnership',
    description:
      'Real-time dashboards, proactive check-ins, and clear fee structures keep you informed and in control.',
  },
]

const timeline = [
  { year: '2016', milestone: 'Grow Invest founded with a focus on sustainable venture funds.' },
  { year: '2019', milestone: 'Expanded to managed portfolios for founders and family offices worldwide.' },
  { year: '2023', milestone: 'Launched climate resilience analytics platform for proactive risk management.' },
]

const DesktopAbout = () => {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="space-y-8">
        <h1 className="text-5xl font-semibold text-midnight">Investing in progress and people.</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
          Grow Invest helps visionary leaders turn capital into a catalyst for sustainable prosperity. Our advisors and
          researchers collaborate across disciplines to deliver plans that respect your goals, community, and the planet.
        </p>
      </section>

      <section className="grid grid-cols-3 gap-10">
        {principles.map((item) => (
          <article key={item.title} className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-midnight">{item.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl bg-midnight/95 px-12 py-10 text-white shadow-2xl">
        <h2 className="text-3xl font-semibold">Our journey</h2>
        <div className="mt-6 grid grid-cols-3 gap-8">
          {timeline.map((entry) => (
            <div key={entry.year} className="rounded-2xl bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">{entry.year}</p>
              <p className="mt-3 text-base leading-relaxed text-slate-100">{entry.milestone}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default DesktopAbout
