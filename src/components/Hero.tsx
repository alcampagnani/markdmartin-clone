import { Check } from "lucide-react";

export function Hero() {
  const bulletPoints = [
    "Over 15 years delivering excellence",
    "Over 1000 clients from USA, Brazil, Europe and Asia",
    "Endorsed by the American Embassy in Brazil",
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
          {/* Left side - Text content */}
          <div className="flex-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#15779b]">
              Martin Law Firm
            </p>
            <h1 className="mb-8 text-4xl font-bold leading-tight text-[#2c3540] md:text-5xl">
              We are the Legal Assistance you need in Brazil
            </h1>

            <ul className="mb-10 space-y-4">
              {bulletPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#15779b]">
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-base text-[#2c3540]">{point}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-block rounded-md bg-[#15779b] px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#126685]"
            >
              Contact Us
            </a>
          </div>

          {/* Right side - Attorney photo */}
          <div className="flex-1">
            <img
              src="/images/mar_ok_.png"
              alt="Mark David Martin - Attorney"
              className="w-full max-w-md rounded-lg shadow-lg md:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
