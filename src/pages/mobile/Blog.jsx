const posts = [
  {
    title: 'Circular economy renaissance',
    excerpt: 'Where capital is flowing in 2025—from regenerative agriculture to materials innovation.',
  },
  {
    title: 'Policy pulse: Clean infrastructure',
    excerpt: 'Quarterly highlights of global legislation and incentives influencing returns.',
  },
  {
    title: 'Impact measurement playbook',
    excerpt: 'Frameworks to quantify mission outcomes alongside financial performance.',
  },
]

const MobileBlog = () => {
  return (
    <div className="space-y-10 pb-16">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-midnight">Insights & research</h1>
        <p className="text-base leading-relaxed text-slate-600">
          Stay ahead with data-rich briefings and founder-friendly playbooks from the Grow Invest research collective.
        </p>
      </section>

      <section className="space-y-4">
        {posts.map((post) => (
          <article key={post.title} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-midnight">{post.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
            <a
              href="mailto:research@growinvest.com?subject=Grow%20Invest%20Insights"
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-600"
            >
              Request full article →
            </a>
          </article>
        ))}
      </section>
    </div>
  )
}

export default MobileBlog
