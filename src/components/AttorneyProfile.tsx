import { ArrowRight, Award, BookOpen, Globe } from "lucide-react";

const credentials = [
  {
    icon: BookOpen,
    text: "Entered one of the main law schools in Brazil with the highest entrance exam score in the school's history",
  },
  {
    icon: Award,
    text: "Served as President of the International Law Commission of the Minas Gerais Bar Association from 2019 to 2021",
  },
  {
    icon: Globe,
    text: "Received national and international recognition for his expertise in International Law",
  },
];

export function AttorneyProfile() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left - Photo */}
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full border-2 border-[#c5a55a]/30" />
            <img
              src="/images/mar_ok_.png"
              alt="Mark David Martin"
              className="relative z-10 w-full object-cover shadow-2xl"
            />
          </div>

          {/* Right - Content */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-[#c5a55a]">
              About the Attorney
            </p>
            <h2 className="mb-2 text-3xl font-bold text-[#2c3540] md:text-4xl">
              Mark David Martin
            </h2>
            <p className="mb-8 text-lg text-[#15779b]">
              International Law Specialist
            </p>

            <div className="mb-10 space-y-6">
              {credentials.map(({ icon: Icon, text }, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#15779b]/10">
                    <Icon className="h-5 w-5 text-[#15779b]" />
                  </div>
                  <p className="text-[15px] leading-relaxed text-[#555]">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#about"
              className="inline-flex items-center gap-2 border-b-2 border-[#15779b] pb-1 font-semibold text-[#15779b] transition-all hover:gap-3"
            >
              READ MORE
              <ArrowRight className="h-4 w-4" />
            </a>

            <p className="mt-6 text-sm italic text-[#888]">
              For US citizens looking for an attorney in Brazil, visit our{" "}
              <a href="#" className="text-[#15779b] underline">
                dedicated attorney page
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
