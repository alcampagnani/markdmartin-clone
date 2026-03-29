import { Check } from "lucide-react";

export function Hero() {
  const bulletPoints = [
    "Over 15 years delivering excellence",
    "Over 1000 clients from USA, Brazil, Europe and Asia",
    "Endorsed by the American Embassy in Brazil",
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/mar_ok_.png')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a2530]/95 via-[#1a2530]/85 to-[#1a2530]/40" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-20">
        <div className="max-w-[650px]">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-[#c5a55a]">
            Martin Law Firm
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-[1.15] text-white md:text-5xl lg:text-6xl">
            We are the Legal Assistance you need in Brazil
          </h1>

          <div className="mb-10 h-[3px] w-16 bg-[#c5a55a]" />

          <ul className="mb-10 space-y-4">
            {bulletPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c5a55a]">
                  <Check className="h-3 w-3 text-[#1a2530]" strokeWidth={3} />
                </span>
                <span className="text-base text-white/90 md:text-lg">{point}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-block border-2 border-[#c5a55a] bg-[#c5a55a] px-10 py-4 text-sm font-bold uppercase tracking-[2px] text-[#1a2530] transition-all hover:bg-transparent hover:text-[#c5a55a]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
