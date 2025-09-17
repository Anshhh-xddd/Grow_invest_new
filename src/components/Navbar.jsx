import { useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const defaultNavigation = [
  { name: 'Insights', href: '#insights' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

const defaultServiceLinks = [
  { name: 'Portfolio Strategy', href: '#solutions' },
  { name: 'Impact Research', href: '#insights' },
  { name: 'Advisor Access', href: '#contact' },
]

const defaultBrand = {
  initials: 'GI',
  name: 'Grow Invest',
}

const defaultPrimaryCta = { label: 'Start investing', to: '#contact' }
const defaultSecondaryCta = { label: 'Log in', to: '#contact' }

const combineClassNames = (...classes) => classes.filter(Boolean).join(' ')

const Navbar = ({
  navigation = defaultNavigation,
  serviceLinks = defaultServiceLinks,
  brand = defaultBrand,
  primaryCta = defaultPrimaryCta,
  secondaryCta = defaultSecondaryCta,
  className = '',
  ...rest
}) => {
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const triggerRef = useRef(null)
  const dropdownMenuId = useId()

  useEffect(() => {
    if (!servicesOpen) {
      return undefined
    }

    const handleClickOutside = (event) => {
      if (
        dropdownRef.current?.contains(event.target) ||
        triggerRef.current?.contains(event.target)
      ) {
        return
      }

      setServicesOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [servicesOpen])

  useEffect(() => {
    if (!servicesOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setServicesOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [servicesOpen])

  const handleBlur = (event) => {
    if (!servicesOpen) {
      return
    }

    if (
      dropdownRef.current?.contains(event.relatedTarget) ||
      triggerRef.current?.contains(event.relatedTarget)
    ) {
      return
    }

    setServicesOpen(false)
  }

  const headerClassName = combineClassNames(
    'flex items-center justify-between py-12',
    className,
  )

  return (
    <header {...rest} className={headerClassName}>
      <div className="flex items-center gap-3 text-2xl font-semibold tracking-tight text-forest">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-500/10 text-brand-600">
          {brand.initials}
        </span>
        {brand.name}
      </div>

      <nav className="flex items-center gap-10 text-sm font-medium text-slate-600">
        <div
          className="relative"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
          onBlur={handleBlur}
        >
          <button
            ref={triggerRef}
            type="button"
            className="inline-flex items-center gap-1 transition-colors hover:text-brand-600"
            aria-haspopup="true"
            aria-controls={dropdownMenuId}
            aria-expanded={servicesOpen}
            onClick={() => setServicesOpen((previous) => !previous)}
            onFocus={() => setServicesOpen(true)}
          >
            Services
            <svg
              className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : 'rotate-0'}`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.127l3.71-3.896a.75.75 0 1 1 1.08 1.04l-4.24 4.46a.75.75 0 0 1-1.08 0l-4.24-4.46a.75.75 0 0 1 .02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            ref={dropdownRef}
            id={dropdownMenuId}
            role="menu"
            className={`absolute left-0 top-full z-20 mt-3 w-48 rounded-2xl border border-slate-100 bg-white p-2 text-sm shadow-lg shadow-slate-200/60 transition-opacity ${servicesOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
            aria-hidden={!servicesOpen}
          >
            {serviceLinks.map((service) => (
              <Link
                key={service.name}
                to={service.href}
                role="menuitem"
                className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-slate-600 transition hover:bg-brand-50 hover:text-brand-600"
                onClick={() => setServicesOpen(false)}
              >
                {service.name}
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="transition-colors hover:text-brand-600"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4 text-sm">
        <Link
          to={secondaryCta.to}
          className="rounded-full border border-slate-200 px-5 py-2 font-medium text-slate-600 transition hover:border-brand-400 hover:text-brand-600"
        >
          {secondaryCta.label}
        </Link>
        <Link
          to={primaryCta.to}
          className="rounded-full bg-brand-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600"
        >
          {primaryCta.label}
        </Link>
      </div>
    </header>
  )
}

export default Navbar
