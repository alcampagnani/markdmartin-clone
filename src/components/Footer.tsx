import type { LucideProps } from "lucide-react";

function FacebookIcon(props: LucideProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}
function TwitterIcon(props: LucideProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
    </svg>
  );
}
function InstagramIcon(props: LucideProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}
function YoutubeIcon(props: LucideProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>
    </svg>
  );
}

const socialLinks = [
  {
    icon: FacebookIcon,
    href: "https://facebook.com/martinlawfirmen",
    label: "Facebook",
  },
  {
    icon: TwitterIcon,
    href: "https://twitter.com/martin_lawfirm",
    label: "Twitter",
  },
  {
    icon: InstagramIcon,
    href: "https://instagram.com/martin_law_firm/",
    label: "Instagram",
  },
  {
    icon: YoutubeIcon,
    href: "https://youtube.com/channel/UCl4-h8QEpjpz9B6lUdKyvyQ",
    label: "YouTube",
  },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-10">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
        {/* Office image */}
        <img
          src="/images/KZGqJfOASrp_9bKtjSkggMXxL0AIqLMf5A-e1760478433615-1024x701.png"
          alt="Office"
          className="w-full max-w-[600px] rounded-lg mb-6"
        />

        {/* Social media icons */}
        <div className="flex gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-[#757575] flex items-center justify-center text-[#757575] hover:border-[#15779b] hover:text-[#15779b] transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[#757575] text-sm text-center mt-6">
          &copy; ALL RIGHTS RESERVED. SEND YOUR E-MAIL TO: contact@martinlaw.com.br
        </p>
      </div>
    </footer>
  );
}
