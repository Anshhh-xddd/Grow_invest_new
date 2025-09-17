import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Solutions', href: '#solutions' },
  { name: 'Insights', href: '#insights' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

const features = [
  {
    title: 'Personalized Strategies',
    body: 'Holistic planning built around your timeline, liquidity needs, and appetite for smart risk.',
  },
  {
    title: 'Sustainable Growth',
    body: 'We focus on resilient sectors, impact opportunities, and diversification to outpace inflation.',
  },
  {
    title: 'Active Guidance',
    body: 'Dedicated advisors provide quarterly reviews, scenario modeling, and on-demand support.',
  },
]

const insights = [
  {
    title: '2025 Green Infrastructure Outlook',
    description:
      'How policy incentives and new technologies are creating once-in-a-decade opportunities for conscious investors.',
  },
  {
    title: 'Navigating Volatile Markets with Confidence',
    description:
      'Five portfolio adjustments we recommend for balancing growth and protection this year.',
  },
]

const stats = [
  { label: 'Assets guided', value: '$4.2B+' },
  { label: 'Client retention', value: '98%' },
  { label: 'Average return (5yr)', value: '12.4%' },
]

const DesktopView = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white text-slate-900">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-grid" aria-hidden="true" />
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-12 pb-16">
        <header className="flex items-center justify-between py-12" id="top">
          <div className="flex items-center gap-3 text-2xl font-semibold tracking-tight text-forest">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-500/10 text-brand-600">
              GI
            </span>
            Grow Invest
          </div>
          <nav className="flex items-center gap-10 text-sm font-medium text-slate-600">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} className="transition-colors hover:text-brand-600">
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4 text-sm">
            <Link
              to="#contact"
              className="rounded-full border border-slate-200 px-5 py-2 font-medium text-slate-600 transition hover:border-brand-400 hover:text-brand-600"
            >
              Log in
            </Link>
            <Link
              to="#contact"
              className="rounded-full bg-brand-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600"
            >
              Start investing
            </Link>
          </div>
        </header>

        <main className="flex flex-1 flex-col gap-24 pb-16">
          <section className="grid grid-cols-[1.1fr,0.9fr] items-center gap-16" id="solutions">
            <div className="space-y-8">
              <p className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-1 text-sm font-semibold text-brand-600">
                Investing in a greener future
              </p>
              <h1 className="text-5xl font-semibold leading-tight text-midnight">
                Strategic wealth growth for visionaries building a sustainable world.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                Grow Invest delivers agile portfolio management, actionable climate-focused research, and experienced
                advisors who translate market complexity into confident decisions.
              </p>
              <div className="flex items-center gap-6 pt-2 text-sm font-medium">
                <Link
                  to="#contact"
                  className="rounded-full bg-midnight px-7 py-3 text-white shadow-lg shadow-midnight/30 transition hover:bg-slate-900"
                >
                  Book a consultation
                </Link>
                <Link to="#insights" className="inline-flex items-center gap-2 text-slate-600 transition hover:text-brand-600">
                  Explore insights
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
              <dl className="grid grid-cols-3 gap-6 pt-6 text-left">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-sm shadow-slate-200/40">
                    <dt className="text-xs uppercase tracking-wide text-slate-500">{item.label}</dt>
                    <dd className="mt-3 text-3xl font-semibold text-midnight">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative flex h-full items-stretch">
              <div className="relative grid flex-1 place-items-center overflow-hidden rounded-3xl bg-gradient-to-br from-brand-200 via-white to-brand-100 p-12 shadow-2xl">
                <div className="absolute inset-x-8 inset-y-10 rounded-3xl border border-white/60" aria-hidden="true" />
                <div className="relative z-10 flex flex-col gap-8 text-center text-midnight">
                  <p className="text-lg font-medium uppercase tracking-[0.35em] text-brand-700">Impact Portfolios</p>
                  <p className="text-3xl font-semibold leading-normal">
                    Multi-layer diversification anchored in renewable infrastructure, clean technology, and circular economy pioneers.
                  </p>
                  <div className="flex items-center justify-center gap-6 text-left text-sm">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">Projected annualized yield</p>
                      <p className="text-2xl font-semibold text-brand-700">9.8%</p>
                    </div>
                    <div className="h-12 w-px bg-slate-200" aria-hidden="true" />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">Volatility guardrails</p>
                      <p className="text-2xl font-semibold text-brand-700">±5%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white/90 p-12 shadow-xl shadow-brand-500/10 backdrop-blur" id="about">
            <div className="grid grid-cols-3 gap-10">
              {features.map((feature) => (
                <div key={feature.title} className="space-y-4">
                  <h3 className="text-xl font-semibold text-midnight">{feature.title}</h3>
                  <p className="text-base leading-relaxed text-slate-600">{feature.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-[1.1fr,0.9fr] gap-16" id="insights">
            <div className="space-y-8">
              <h2 className="text-4xl font-semibold text-midnight">Market intelligence, distilled.</h2>
              <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                Our research team continuously monitors macro trends, policy shifts, and emerging technologies. Every
                briefing transforms complex data into clear actions for your portfolio.
              </p>
              <div className="space-y-6">
                {insights.map((item) => (
                  <article key={item.title} className="rounded-2xl border border-slate-100 bg-white/80 p-6 shadow-sm">
                    <h3 className="text-2xl font-semibold text-midnight">{item.title}</h3>
                    <p className="mt-3 text-base text-slate-600">{item.description}</p>
                    <Link
                      to="#contact"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-700"
                    >
                      Request full report <span aria-hidden="true">→</span>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
            <div className="relative isolate overflow-hidden rounded-3xl bg-midnight px-10 py-12 text-white shadow-2xl" id="contact">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.45),transparent_60%)]" aria-hidden="true" />
              <div className="relative space-y-6">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-brand-200">Concierge onboarding</p>
                <h3 className="text-3xl font-semibold leading-relaxed">Partner with a Grow Invest advisor in less than two weeks.</h3>
                <p className="text-base text-slate-200">
                  Share your ambitions and we will craft a roadmap that aligns growth with global stewardship.
                </p>
                <form className="grid gap-4 text-slate-900">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="rounded-2xl border border-slate-200/10 bg-white/95 px-4 py-3 text-sm focus:border-brand-400 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Work email"
                    className="rounded-2xl border border-slate-200/10 bg-white/95 px-4 py-3 text-sm focus:border-brand-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-2xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
                  >
                    Request a strategy session
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-auto flex items-center justify-between border-t border-slate-100 pt-8 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Grow Invest. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="#top" className="transition hover:text-brand-600">
              Back to top
            </Link>
            <a href="mailto:hello@growinvest.com" className="transition hover:text-brand-600">
              hello@growinvest.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default DesktopView
