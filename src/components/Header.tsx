import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

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
    <header className="sticky top-0 z-50 bg-[#2c3540] border-b border-[#c5a55a]/40">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <img
            src="/images/Martin-Law-Gold-no-bg-horizontal.png"
            alt="Martin Law"
            style={{ height: '60px', width: 'auto' }}
          />
        </a>

        {/* Desktop Nav + Contact Button */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setExpertiseOpen(true)}
                onMouseLeave={() => setExpertiseOpen(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-[11px] font-semibold uppercase tracking-[1.5px] text-white transition-colors hover:text-[#c5a55a]">
                  {item.label}
                  <ChevronDown
                    className={`h-3 w-3 transition-transform ${expertiseOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {expertiseOpen && (
                  <div className="absolute left-0 top-full pt-1">
                    <ul className="min-w-[280px] border border-[#c5a55a]/30 bg-[#2c3540] py-1 shadow-xl">
                      {expertiseItems.map(({ label, href }) => (
                        <li key={label}>
                          <a
                            href={href}
                            className="block px-5 py-2.5 text-sm text-white/80 transition-all hover:bg-white/5 hover:pl-7 hover:text-[#c5a55a]"
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
                className="px-4 py-2 text-[11px] font-semibold uppercase tracking-[1.5px] text-white transition-colors hover:text-[#c5a55a]"
              >
                {item.label}
              </a>
            )
          )}

          <a
            href="#contact"
            className="ml-4 border border-[#c5a55a] px-6 py-2.5 text-[11px] font-bold uppercase tracking-[1.5px] text-white transition-colors hover:bg-[#c5a55a] hover:text-[#2c3540]"
          >
            CONTACT US
          </a>
        </nav>

        {/* Contact Info - far right */}
        <div className="hidden flex-col items-end text-right xl:flex">
          <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#c5a55a]">
            CALL US TODAY!
          </span>
          <a
            href="tel:661-336-9606"
            className="text-[15px] font-bold text-white hover:text-[#c5a55a] transition-colors"
          >
            661-336-9606
          </a>
          <a
            href="tel:704-755-5335"
            className="text-[15px] font-bold text-white hover:text-[#c5a55a] transition-colors"
          >
            704-755-5335
          </a>
          <span className="mt-1 text-[10px] text-white/60">Send your email to:</span>
          <a
            href="mailto:info@markdmartin.com"
            className="text-[12px] text-[#c5a55a] underline hover:text-[#d4b76a] transition-colors"
          >
            info@markdmartin.com
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white lg:hidden"
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

      {/* Gold separator line */}
      <div className="h-[1px] bg-[#c5a55a]/50" />

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[#c5a55a]/20 bg-[#2c3540] lg:hidden">
          <nav className="mx-auto max-w-[1400px] px-6 py-4">
            <ul className="space-y-1">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <li key={item.label}>
                    <button
                      className="flex w-full items-center justify-between py-3 text-sm font-semibold uppercase tracking-wider text-white"
                      onClick={() =>
                        setMobileExpertiseOpen(!mobileExpertiseOpen)
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 text-[#c5a55a] transition-transform ${mobileExpertiseOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileExpertiseOpen && (
                      <ul className="border-l-2 border-[#c5a55a] pl-4">
                        {expertiseItems.map(({ label, href }) => (
                          <li key={label}>
                            <a
                              href={href}
                              className="block py-2 text-sm text-white/70 hover:text-[#c5a55a]"
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
                      className="block py-3 text-sm font-semibold uppercase tracking-wider text-white"
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
              className="mt-4 block border border-[#c5a55a] px-6 py-3 text-center text-sm font-bold uppercase text-white hover:bg-[#c5a55a] hover:text-[#2c3540] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT US
            </a>

            {/* Mobile contact info */}
            <div className="mt-4 border-t border-white/10 pt-4 text-center">
              <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#c5a55a]">
                CALL US TODAY!
              </span>
              <div className="mt-1">
                <a href="tel:661-336-9606" className="block text-sm font-bold text-white">
                  661-336-9606
                </a>
                <a href="tel:704-755-5335" className="block text-sm font-bold text-white">
                  704-755-5335
                </a>
              </div>
              <div className="mt-2">
                <span className="text-[10px] text-white/60">Send your email to:</span>
                <a
                  href="mailto:info@markdmartin.com"
                  className="block text-[12px] text-[#c5a55a] underline"
                >
                  info@markdmartin.com
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
