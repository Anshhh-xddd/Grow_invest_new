const services = [
  {
    title: 'Smart automated portfolios',
    description: 'Pre-built mixes tuned for green growth, with transparent rebalancing and fee structures.',
  },
  {
    title: 'Advisor access on demand',
    description: 'Chat or schedule video sessions with senior strategists whenever new goals surface.',
  },
  {
    title: 'Impact-first research',
    description: 'Weekly digests keep you ahead of sustainability legislation, incentives, and innovators.',
  },
]

const milestones = [
  { step: '01', title: 'Discover', copy: 'Share your aspirations and current allocations through a guided digital intake.' },
  { step: '02', title: 'Design', copy: 'We craft a dual-track plan that balances growth momentum with measurable impact.' },
  { step: '03', title: 'Grow', copy: 'Launch your personalized portfolio and monitor progress in a unified dashboard.' },
]

const MobileView = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="relative isolate overflow-hidden bg-white px-6 pb-12 pt-10 text-slate-900">
        <div className="absolute inset-0 -z-10 bg-radial-grid opacity-80" aria-hidden="true" />
        <header className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-lg font-semibold text-forest">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/10 text-sm text-brand-600">GI</span>
            Grow Invest
          </span>
          <a
            href="#mobile-contact"
            className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600"
          >
            Get started
          </a>
        </header>

        <main className="mt-10 space-y-10">
          <section className="space-y-6">
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
              <button className="rounded-2xl bg-midnight px-5 py-3 text-sm font-semibold text-white shadow-md shadow-midnight/30">
                Launch the app demo
              </button>
              <button className="rounded-2xl border border-brand-200 bg-white px-5 py-3 text-sm font-semibold text-brand-700">
                View performance
              </button>
            </div>
          </section>

          <section className="space-y-5" id="mobile-services">
            <h2 className="text-xl font-semibold text-midnight">Everything you need to grow with confidence</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl border border-slate-100 bg-white/90 p-5 shadow-sm shadow-slate-200/60"
                >
                  <h3 className="text-base font-semibold text-midnight">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-5" id="mobile-journey">
            <h2 className="text-xl font-semibold text-midnight">From first conversation to live portfolio in 3 easy steps</h2>
            <div className="space-y-4">
              {milestones.map((item) => (
                <div key={item.step} className="flex gap-4 rounded-2xl bg-brand-50 p-4 shadow-inner">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-brand-500 text-base font-semibold text-white">
                    {item.step}
                  </span>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-midnight">{item.title}</p>
                    <p className="text-sm leading-relaxed text-slate-600">{item.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4 rounded-3xl bg-midnight px-6 py-8 text-white" id="mobile-contact">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-200">Concierge welcome</p>
            <h2 className="text-2xl font-semibold leading-snug">
              Let’s design your Grow Invest strategy—schedule a call that fits your calendar.
            </h2>
            <form className="space-y-3 text-slate-900">
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-2xl border border-transparent px-4 py-3 text-sm focus:border-brand-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-2xl border border-transparent px-4 py-3 text-sm focus:border-brand-400 focus:outline-none"
              />
              <textarea
                rows={3}
                placeholder="How can we help you grow?"
                className="w-full rounded-2xl border border-transparent px-4 py-3 text-sm focus:border-brand-400 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-2xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
              >
                Request a call
              </button>
            </form>
          </section>
        </main>
      </div>

      <footer className="mt-auto border-t border-slate-100 bg-white px-6 py-6 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Grow Invest — Sustainable wealth for ambitious founders.</p>
      </footer>
    </div>
  )
}

export default MobileView
