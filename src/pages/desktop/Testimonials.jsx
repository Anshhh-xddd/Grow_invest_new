const testimonials = [
  {
    name: 'Amina Patel',
    role: 'Founder, Solstice Labs',
    quote:
      'Grow Invest helped us rebalance ahead of supply chain shocks and reinvest into resilient climate tech ventures. Their foresight preserved momentum through volatility.',
  },
  {
    name: 'Diego Martínez',
    role: 'Managing Director, Horizonte Family Office',
    quote:
      'The team translates complex policy changes into clear financial choices. We finally have a partner who understands generational stewardship and measurable impact.',
  },
  {
    name: 'Lena Cho',
    role: 'COO, Evergreen Communities',
    quote:
      'Our board values the transparency and accountability Grow Invest provides. Dashboards and advisor check-ins keep everyone aligned on mission and returns.',
  },
]

const DesktopTestimonials = () => {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="space-y-6">
        <h1 className="text-5xl font-semibold text-midnight">Trusted by leaders shaping a regenerative economy.</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
          Hear how founders, family offices, and social enterprises partner with Grow Invest to protect momentum and amplify
          impact.
        </p>
      </section>

      <section className="grid grid-cols-3 gap-10">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
            <p className="flex-1 text-base leading-relaxed text-slate-600">“{testimonial.quote}”</p>
            <div className="mt-6 text-sm font-semibold text-midnight">
              <p>{testimonial.name}</p>
              <p className="mt-1 text-xs font-normal uppercase tracking-wide text-slate-500">{testimonial.role}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-3xl bg-midnight px-10 py-12 text-white">
        <div className="flex items-center justify-between gap-12">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Let your success story be next.</h2>
            <p className="text-base text-slate-200">
              Book a conversation to see how our advisors can tailor strategies to your growth horizon.
            </p>
          </div>
          <a
            href="/contact"
            className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600"
          >
            Connect with the team
          </a>
        </div>
      </section>
    </div>
  )
}

export default DesktopTestimonials
