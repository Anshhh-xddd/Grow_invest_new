const highlights = [
  { label: 'Assets guided', value: '$4.2B+' },
  { label: 'Client retention', value: '98%' },
  { label: 'Average return (5yr)', value: '12.4%' },
]

const MobileHome = () => {
  return (
    <div className="space-y-10 pb-16">
      <section className="space-y-5">
        <p className="inline-flex rounded-full bg-brand-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
          Build wealth with purpose
        </p>
        <h1 className="text-3xl font-semibold leading-snug text-midnight">
          Sustainable investing guidance crafted for your mobile lifestyle.
        </h1>
        <p className="text-base leading-relaxed text-slate-600">
          Track momentum, unlock opportunities, and align your capital with the planet—all from your phone or tablet.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <a className="rounded-2xl bg-midnight px-5 py-3 text-center text-sm font-semibold text-white shadow-md shadow-midnight/30" href="/contact">
            Book a consultation
          </a>
          <a className="rounded-2xl border border-brand-200 bg-white px-5 py-3 text-center text-sm font-semibold text-brand-700" href="/blog">
            View latest insights
          </a>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.label} className="rounded-2xl border border-slate-100 bg-white/90 p-4 text-center shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold text-midnight">{item.value}</p>
          </div>
        ))}
      </section>

      <section className="space-y-4 rounded-3xl bg-midnight px-6 py-8 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-200">Concierge welcome</p>
        <h2 className="text-2xl font-semibold leading-snug">Partner with a Grow Invest advisor in less than two weeks.</h2>
        <p className="text-sm text-slate-200">
          Share your ambitions and we will craft a roadmap that aligns growth with global stewardship.
        </p>
        <a
          href="/contact"
          className="inline-flex w-full items-center justify-center rounded-2xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
        >
          Request a strategy session
        </a>
      </section>
    </div>
  )
}

export default MobileHome
