const testimonials = [
  {
    name: 'Amina Patel',
    role: 'Founder, Solstice Labs',
    quote:
      'Grow Invest helped us rebalance ahead of supply chain shocks and reinvest into resilient climate tech ventures.',
  },
  {
    name: 'Diego Martínez',
    role: 'Managing Director, Horizonte Family Office',
    quote: 'They translate complex policy into clear choices—we stay focused on mission and results.',
  },
  {
    name: 'Lena Cho',
    role: 'COO, Evergreen Communities',
    quote: 'Transparent dashboards keep our board aligned on progress and accountability.',
  },
]

const MobileTestimonials = () => {
  return (
    <div className="space-y-10 pb-16">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-midnight">Client stories</h1>
        <p className="text-base leading-relaxed text-slate-600">
          Leaders across climate tech, family offices, and social enterprises rely on Grow Invest to safeguard momentum.
        </p>
      </section>

      <section className="space-y-4">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <p className="text-sm leading-relaxed text-slate-600">“{testimonial.quote}”</p>
            <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <p className="text-midnight text-sm normal-case">{testimonial.name}</p>
              <p className="mt-1 text-[11px] font-medium text-slate-400">{testimonial.role}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-3xl bg-midnight px-5 py-6 text-white">
        <h2 className="text-xl font-semibold">Let’s write your success story.</h2>
        <p className="mt-2 text-sm text-slate-200">
          Book a conversation to see how our advisors can tailor strategies to your growth horizon.
        </p>
        <a
          href="/contact"
          className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
        >
          Connect with the team
        </a>
      </section>
    </div>
  )
}

export default MobileTestimonials
