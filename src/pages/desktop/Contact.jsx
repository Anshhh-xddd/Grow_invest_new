const offices = [
  {
    city: 'San Francisco',
    details: 'Pier 27 Innovation Wharf\nSuite 420\nSan Francisco, CA 94111',
  },
  {
    city: 'London',
    details: '1 Sustainable Exchange\nLevel 7\nLondon EC2M 4JX',
  },
]

const DesktopContact = () => {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="grid grid-cols-[1fr,1fr] gap-16">
        <div className="space-y-6">
          <h1 className="text-5xl font-semibold text-midnight">Let’s design your next chapter.</h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Share your ambitions and we will assemble a dedicated team to architect your Grow Invest strategy. Reach out directly
            or schedule time that works for you.
          </p>
          <a
            href="mailto:hello@growinvest.com"
            className="inline-flex items-center gap-3 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600"
          >
            Email hello@growinvest.com
          </a>
          <div className="space-y-3 text-sm text-slate-500">
            <p className="font-semibold uppercase tracking-wide text-slate-400">Phone</p>
            <p className="text-lg text-midnight">+1 (415) 555-0199</p>
          </div>
        </div>
        <form className="grid gap-4 rounded-3xl border border-slate-100 bg-white p-10 shadow-xl shadow-brand-500/10">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Full name</label>
            <input
              type="text"
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-400 focus:outline-none"
              placeholder="Jamie Rivera"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Work email</label>
            <input
              type="email"
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-400 focus:outline-none"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">What can we explore together?</label>
            <textarea
              rows={4}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-400 focus:outline-none"
              placeholder="Tell us about your goals, timeline, and any priorities."
            />
          </div>
          <button
            type="submit"
            className="rounded-2xl bg-midnight px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
          >
            Request a call
          </button>
        </form>
      </section>

      <section className="grid grid-cols-2 gap-10">
        {offices.map((office) => (
          <article key={office.city} className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-midnight">{office.city}</h2>
            <p className="mt-3 whitespace-pre-line text-base leading-relaxed text-slate-600">{office.details}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default DesktopContact
