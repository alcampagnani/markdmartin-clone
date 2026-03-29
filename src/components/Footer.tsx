const socialLinks = [
  {
    href: "https://facebook.com/martinlawfirmen",
    label: "Facebook",
    svg: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  {
    href: "https://twitter.com/martin_lawfirm",
    label: "X (Twitter)",
    svg: (
      <>
        <path d="M4 4l11.733 16h4.267l-11.733-16z" />
        <path d="M4 20l6.768-6.768m2.46-2.46l6.772-6.772" />
      </>
    ),
  },
  {
    href: "https://instagram.com/martin_law_firm/",
    label: "Instagram",
    svg: (
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </>
    ),
  },
  {
    href: "https://youtube.com/channel/UCl4-h8QEpjpz9B6lUdKyvyQ",
    label: "YouTube",
    svg: (
      <>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1e24]">
      {/* Office image banner */}
      <div className="mx-auto max-w-[1200px] px-6 pt-12">
        <a href="https://www.martinlaw.com.br" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/KZGqJfOASrp_9bKtjSkggMXxL0AIqLMf5A-e1760478433615-1024x701.png"
            alt="Martin Law Office"
            className="mx-auto w-full max-w-[700px] opacity-80 transition-opacity hover:opacity-100"
          />
        </a>
      </div>

      {/* Social + Copyright */}
      <div className="mx-auto max-w-[1200px] px-6 py-8">
        <div className="mb-6 flex items-center justify-center gap-4">
          {socialLinks.map(({ href, label, svg }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/50 transition-all hover:border-[#c5a55a] hover:text-[#c5a55a]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {svg}
              </svg>
            </a>
          ))}
        </div>

        <div className="h-px w-full bg-white/10" />

        <p className="mt-6 text-center text-xs uppercase tracking-wider text-white/40">
          &copy; All Rights Reserved. Send your e-mail to:{" "}
          <a
            href="mailto:contact@martinlaw.com.br"
            className="text-[#c5a55a]/70 transition-colors hover:text-[#c5a55a]"
          >
            contact@martinlaw.com.br
          </a>
        </p>
      </div>
    </footer>
  );
}
