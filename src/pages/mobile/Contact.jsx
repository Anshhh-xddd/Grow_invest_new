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

const MobileContact = () => {
  return (
    <div className="space-y-10 pb-16">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-midnight">Let’s design your next chapter.</h1>
        <p className="text-base leading-relaxed text-slate-600">
          Share your ambitions and we will assemble a dedicated team to architect your Grow Invest strategy.
        </p>
        <a
          href="mailto:hello@growinvest.com"
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
        >
          Email hello@growinvest.com
        </a>
        <div className="space-y-1 text-sm text-slate-500">
          <p className="font-semibold uppercase tracking-wide text-slate-400">Phone</p>
          <p className="text-base text-midnight">+1 (415) 555-0199</p>
        </div>
      </section>

      <section className="space-y-4">
        {offices.map((office) => (
          <article key={office.city} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-midnight">{office.city}</h2>
            <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-600">{office.details}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl bg-midnight px-5 py-6 text-white">
        <h2 className="text-xl font-semibold">Prefer a call?</h2>
        <p className="mt-2 text-sm text-slate-200">Submit the form and our advisors will respond within one business day.</p>
        <form className="mt-4 space-y-3 text-slate-900">
          <input
            type="text"
            placeholder="Full name"
            className="w-full rounded-2xl border border-transparent px-4 py-3 text-sm focus:border-brand-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Work email"
            className="w-full rounded-2xl border border-transparent px-4 py-3 text-sm focus:border-brand-400 focus:outline-none"
          />
          <textarea
            rows={3}
            placeholder="How can we help?"
            className="w-full rounded-2xl border border-transparent px-4 py-3 text-sm focus:border-brand-400 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full rounded-2xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Request a call
          </button>
        </form>
      </section>
    </div>
  )
}

export default MobileContact
