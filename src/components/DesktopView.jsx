import { NavLink, Route, Routes, Navigate } from 'react-router-dom'
import { pageRoutes } from '../routes/pageConfig.js'

const DesktopView = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white text-slate-900">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-grid" aria-hidden="true" />
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-12 pb-16">
        <header className="flex items-center justify-between py-12" id="top">
          <div className="flex items-center gap-3 text-2xl font-semibold tracking-tight text-forest">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-500/10 text-brand-600">GI</span>
            Grow Invest
          </div>
          <nav className="flex items-center gap-8 text-sm font-medium text-slate-600">
            {pageRoutes.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `transition-colors hover:text-brand-600 ${isActive ? 'text-brand-600' : 'text-slate-600'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-4 text-sm">
            <a
              href="mailto:hello@growinvest.com"
              className="rounded-full border border-slate-200 px-5 py-2 font-medium text-slate-600 transition hover:border-brand-400 hover:text-brand-600"
            >
              Email us
            </a>
            <NavLink
              to="/contact"
              className="rounded-full bg-brand-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600"
            >
              Start investing
            </NavLink>
          </div>
        </header>

        <main className="flex-1">
          <Routes>
            {pageRoutes.map((page) => {
              const Component = page.desktop
              return <Route key={page.path} path={page.path} element={<Component />} />
            })}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <footer className="mt-12 flex items-center justify-between border-t border-slate-100 pt-8 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Grow Invest. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#top" className="transition hover:text-brand-600">
              Back to top
            </a>
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
