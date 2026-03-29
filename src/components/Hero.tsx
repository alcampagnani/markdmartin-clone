export function Hero() {
  const bulletPoints = [
    "Entered one of the main law schools in Brazil with the highest entrance exam score in the school's history",
    "Served as President of the International Law Commission of the Minas Gerais Bar Association from 2019 to 2021",
    "Received national and international recognition for his expertise in International Law",
  ];

  return (
    <section className="relative bg-[#2c3540] overflow-hidden">
      <div className="mx-auto flex min-h-[85vh] max-w-[1400px] items-center">
        {/* Left Content - 60% */}
        <div className="relative z-10 w-full px-6 py-16 lg:w-[60%] lg:py-20 lg:pl-12 lg:pr-8">
          <h1 className="mb-6 font-serif text-4xl font-bold leading-[1.15] text-white md:text-5xl lg:text-[3.2rem]">
            Over 15 years delivering excellence
          </h1>

          {/* 5 Gold Stars */}
          <div className="mb-6 flex gap-1 text-[#c5a55a]">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl">&#9733;</span>
            ))}
          </div>

          <h2 className="mb-1 text-2xl font-semibold text-white md:text-3xl">
            Mark David Martin
          </h2>
          <p className="mb-8 text-sm uppercase tracking-[3px] text-white/70">
            Lawyer in Brazil
          </p>

          <ul className="mb-10 space-y-4 max-w-[540px]">
            {bulletPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-2 h-[6px] w-[6px] shrink-0 rounded-full bg-white/70" />
                <span className="text-[15px] leading-relaxed text-white/85">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="#the-law-firm"
            className="inline-block border border-white px-8 py-3 text-[12px] font-bold uppercase tracking-[2px] text-white transition-all hover:bg-white hover:text-[#2c3540]"
          >
            READ MORE
          </a>
        </div>

        {/* Right Image - 40% */}
        <div className="hidden lg:block lg:w-[40%] self-end">
          <img
            src="/images/mar_ok_.png"
            alt="Mark David Martin"
            className="w-full object-cover object-top"
          />
        </div>
      </div>

      {/* Request Free Consultation Banner */}
      <div className="w-full py-4 text-center">
        <a
          href="#contact"
          className="text-sm font-bold uppercase tracking-[3px] text-[#c5a55a] hover:text-[#d4b76a] transition-colors"
        >
          REQUEST A FREE CONSULTATION
        </a>
      </div>
    </section>
  );
}
