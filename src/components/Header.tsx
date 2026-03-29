import { useState } from 'react'
import { Phone, Mail, Menu, ChevronDown, X } from 'lucide-react'

const expertiseItems = [
  'Business Law',
  'Contracts',
  'Estate Law',
  'Family Law in Brazil for Foreigners',
  'Intellectual Property',
  'International Law',
  'Real Estate',
]

const navItems = [
  { label: 'THE LAW FIRM', href: '#the-law-firm' },
  { label: 'EXPERTISE', href: '#expertise', hasDropdown: true },
  { label: 'LATEST NEWS', href: '#latest-news' },
  { label: 'TESTIMONIALS', href: '#testimonials' },
  { label: 'CONTACT US', href: '#contact-us' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expertiseOpen, setExpertiseOpen] = useState(false)
  const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-4 py-2 text-sm text-[#2c3540]">
          <a
            href="tel:661-336-9606"
            className="flex items-center gap-1.5 transition-colors hover:text-[#15779b]"
          >
            <Phone className="h-3.5 w-3.5 text-[#15779b]" />
            <span>661-336-9606</span>
          </a>
          <a
            href="tel:704-755-5335"
            className="flex items-center gap-1.5 transition-colors hover:text-[#15779b]"
          >
            <Phone className="h-3.5 w-3.5 text-[#15779b]" />
            <span>704-755-5335</span>
          </a>
          <a
            href="mailto:contact@martinlaw.com.br"
            className="flex items-center gap-1.5 transition-colors hover:text-[#15779b]"
          >
            <Mail className="h-3.5 w-3.5 text-[#15779b]" />
            <span>contact@martinlaw.com.br</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <img
            src="/images/Martin-Law-Gold-no-bg-horizontal.png"
            alt="Martin Law"
            className="h-[50px] w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setExpertiseOpen(true)}
                onMouseLeave={() => setExpertiseOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-sm font-semibold tracking-wide text-[#2c3540] transition-colors hover:text-[#15779b]"
                  onClick={() => setExpertiseOpen(!expertiseOpen)}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${expertiseOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {expertiseOpen && (
                  <div className="absolute left-0 top-full pt-2">
                    <ul className="min-w-[260px] rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                      {expertiseItems.map((expertise) => (
                        <li key={expertise}>
                          <a
                            href={`#expertise-${expertise.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block px-5 py-2.5 text-sm text-[#2c3540] transition-colors hover:bg-gray-50 hover:text-[#15779b]"
                          >
                            {expertise}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold tracking-wide text-[#2c3540] transition-colors hover:text-[#15779b]"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-[#2c3540] lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4">
            <ul className="space-y-1">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <li key={item.label}>
                    <button
                      className="flex w-full items-center justify-between py-3 text-sm font-semibold tracking-wide text-[#2c3540] transition-colors hover:text-[#15779b]"
                      onClick={() => setMobileExpertiseOpen(!mobileExpertiseOpen)}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileExpertiseOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {mobileExpertiseOpen && (
                      <ul className="border-l-2 border-[#15779b] pl-4">
                        {expertiseItems.map((expertise) => (
                          <li key={expertise}>
                            <a
                              href={`#expertise-${expertise.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block py-2 text-sm text-[#2c3540] transition-colors hover:text-[#15779b]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {expertise}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block py-3 text-sm font-semibold tracking-wide text-[#2c3540] transition-colors hover:text-[#15779b]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </ul>

            {/* Mobile contact info */}
            <div className="mt-4 space-y-3 border-t border-gray-200 pt-4">
              <a
                href="tel:661-336-9606"
                className="flex items-center gap-2 text-sm text-[#2c3540] hover:text-[#15779b]"
              >
                <Phone className="h-4 w-4 text-[#15779b]" />
                661-336-9606
              </a>
              <a
                href="tel:704-755-5335"
                className="flex items-center gap-2 text-sm text-[#2c3540] hover:text-[#15779b]"
              >
                <Phone className="h-4 w-4 text-[#15779b]" />
                704-755-5335
              </a>
              <a
                href="mailto:contact@martinlaw.com.br"
                className="flex items-center gap-2 text-sm text-[#2c3540] hover:text-[#15779b]"
              >
                <Mail className="h-4 w-4 text-[#15779b]" />
                contact@martinlaw.com.br
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
