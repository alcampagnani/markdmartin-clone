import { ArrowRight } from "lucide-react";

export function AttorneyProfile() {
  const credentials = [
    "Entered one of the main law schools in Brazil with the highest entrance exam score in the school's history",
    "Served as President of the International Law Commission of the Minas Gerais Bar Association from 2019 to 2021",
    "Received national and international recognition for his expertise in International Law",
  ];

  return (
    <section className="bg-[#f4f4f4] py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-2 text-3xl font-bold text-[#2c3540] md:text-4xl">
          Mark David Martin
        </h2>
        <p className="mb-12 text-lg font-medium text-[#15779b]">
          International Law Specialist
        </p>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-base leading-relaxed text-[#2c3540]">
                {credential}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <a
            href="#about"
            className="inline-flex items-center gap-2 font-semibold text-[#15779b] transition-colors hover:text-[#126685]"
          >
            READ MORE
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <p className="text-sm text-gray-500">
          For US citizens looking for an attorney in Brazil, visit our dedicated
          attorney page.
        </p>
      </div>
    </section>
  );
}
