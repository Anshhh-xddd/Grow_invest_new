import { NavLink, Route, Routes, Navigate } from 'react-router-dom'
import { pageRoutes } from '../routes/pageConfig.js'

const MobileView = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="relative isolate overflow-hidden bg-white px-6 pb-8 pt-10 text-slate-900">
        <div className="absolute inset-0 -z-10 bg-radial-grid opacity-80" aria-hidden="true" />
        <header className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-lg font-semibold text-forest">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/10 text-sm text-brand-600">GI</span>
            Grow Invest
          </span>
          <NavLink
            to="/contact"
            className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600"
          >
            Get started
          </NavLink>
        </header>

        <nav className="mt-6 -mx-6 overflow-x-auto border-t border-b border-slate-100 bg-white/80 px-6 py-3 text-sm">
          <ul className="flex w-max items-center gap-4">
            {pageRoutes.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `whitespace-nowrap rounded-full px-4 py-2 transition ${
                      isActive
                        ? 'bg-brand-500 text-white shadow-brand-500/25'
                        : 'bg-white/70 text-slate-600 shadow-sm'
                    } shadow`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <main className="flex-1 bg-white px-6">
        <Routes>
          {pageRoutes.map((page) => {
            const Component = page.mobile
            return <Route key={page.path} path={page.path} element={<Component />} />
          })}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="mt-auto border-t border-slate-100 bg-white px-6 py-6 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Grow Invest — Sustainable wealth for ambitious founders.</p>
        <a href="mailto:hello@growinvest.com" className="mt-2 inline-block font-semibold text-brand-600">
          hello@growinvest.com
        </a>
      </footer>
    </div>
  )
}

export default MobileView
