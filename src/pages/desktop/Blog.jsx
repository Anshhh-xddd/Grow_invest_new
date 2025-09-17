const posts = [
  {
    title: 'Financing the circular economy renaissance',
    excerpt: 'Where capital is flowing in 2025—from regenerative agriculture to materials innovation—and how investors can participate.',
  },
  {
    title: 'Policy pulse: Incentives powering clean infrastructure',
    excerpt: 'A quarterly recap of global legislation, grants, and credits influencing project pipelines and investment returns.',
  },
  {
    title: 'Founder playbook for impact measurement',
    excerpt: 'Practical frameworks to quantify mission outcomes alongside financial performance.',
  },
]

const DesktopBlog = () => {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="space-y-6">
        <h1 className="text-5xl font-semibold text-midnight">Insights to navigate an evolving market.</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
          Our research collective distills data, policy, and on-the-ground intelligence into actionable guidance for impact-minded
          investors.
        </p>
      </section>

      <section className="grid grid-cols-3 gap-10">
        {posts.map((post) => (
          <article key={post.title} className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-midnight">{post.title}</h2>
            <p className="mt-4 flex-1 text-base leading-relaxed text-slate-600">{post.excerpt}</p>
            <a
              href="mailto:research@growinvest.com?subject=Grow%20Invest%20Insights"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-700"
            >
              Request full article <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </section>
    </div>
  )
}

export default DesktopBlog
