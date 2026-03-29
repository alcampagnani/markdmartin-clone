import { useState } from "react";
import { Phone, Mail, Menu, ChevronDown, X } from "lucide-react";

const expertiseItems = [
  { label: "Business Law", href: "#business-law" },
  { label: "Contracts", href: "#contracts" },
  { label: "Estate Law", href: "#estate-law" },
  { label: "Family Law in Brazil for Foreigners", href: "#family-law" },
  { label: "Intellectual Property", href: "#ip" },
  { label: "International Law", href: "#international-law" },
  { label: "Real Estate", href: "#real-estate" },
];

const navItems = [
  { label: "THE LAW FIRM", href: "#the-law-firm" },
  { label: "EXPERTISE", href: "#expertise", hasDropdown: true },
  { label: "LATEST NEWS", href: "#latest-news" },
  { label: "TESTIMONIALS", href: "#testimonials" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      {/* Top Bar */}
      <div className="border-b border-gray-100 bg-[#2c3540]">
        <div className="mx-auto flex max-w-[1200px] items-center justify-end gap-6 px-6 py-2 text-xs text-white/80">
          <a
            href="tel:661-336-9606"
            className="flex items-center gap-1.5 transition-colors hover:text-[#c5a55a]"
          >
            <Phone className="h-3 w-3" />
            <span>661-336-9606</span>
          </a>
          <a
            href="tel:704-755-5335"
            className="flex items-center gap-1.5 transition-colors hover:text-[#c5a55a]"
          >
            <Phone className="h-3 w-3" />
            <span>704-755-5335</span>
          </a>
          <a
            href="mailto:contact@martinlaw.com.br"
            className="hidden items-center gap-1.5 transition-colors hover:text-[#c5a55a] sm:flex"
          >
            <Mail className="h-3 w-3" />
            <span>contact@martinlaw.com.br</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <img
            src="/images/Martin-Law-Gold-no-bg-horizontal.png"
            alt="Martin Law"
            className="h-[45px] w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setExpertiseOpen(true)}
                onMouseLeave={() => setExpertiseOpen(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] text-[#2c3540] transition-colors hover:text-[#15779b]">
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${expertiseOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {expertiseOpen && (
                  <div className="absolute left-0 top-full pt-1">
                    <ul className="min-w-[280px] border border-gray-100 bg-white py-1 shadow-xl">
                      {expertiseItems.map(({ label, href }) => (
                        <li key={label}>
                          <a
                            href={href}
                            className="block px-5 py-2.5 text-sm text-[#2c3540] transition-all hover:bg-[#15779b]/5 hover:pl-7 hover:text-[#15779b]"
                          >
                            {label}
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
                className="px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] text-[#2c3540] transition-colors hover:text-[#15779b]"
              >
                {item.label}
              </a>
            )
          )}

          <a
            href="#contact"
            className="ml-4 bg-[#15779b] px-6 py-2.5 text-xs font-bold uppercase tracking-[1.5px] text-white transition-colors hover:bg-[#11607d]"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-[#2c3540] lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <nav className="mx-auto max-w-[1200px] px-6 py-4">
            <ul className="space-y-1">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <li key={item.label}>
                    <button
                      className="flex w-full items-center justify-between py-3 text-sm font-bold uppercase tracking-wider text-[#2c3540]"
                      onClick={() =>
                        setMobileExpertiseOpen(!mobileExpertiseOpen)
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileExpertiseOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileExpertiseOpen && (
                      <ul className="border-l-2 border-[#c5a55a] pl-4">
                        {expertiseItems.map(({ label, href }) => (
                          <li key={label}>
                            <a
                              href={href}
                              className="block py-2 text-sm text-[#555] hover:text-[#15779b]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {label}
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
                      className="block py-3 text-sm font-bold uppercase tracking-wider text-[#2c3540]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </ul>

            <a
              href="#contact"
              className="mt-4 block bg-[#15779b] px-6 py-3 text-center text-sm font-bold uppercase text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
