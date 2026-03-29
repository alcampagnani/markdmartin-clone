const endorsements = [
  {
    title: "American Embassy in Brazil",
    image: "/images/american-embassy-logo.png",
    text: "References our office through its website",
  },
  {
    title: "International Law Commission of Minas Gerais",
    image: "/images/OAB-1024x1024.png",
    text: "Mark David Martin – President from 2019 – 2021",
  },
  {
    title: "Brazilian Consulates Abroad",
    image: "/images/Logo-Consulado-Brasil-em-Los-Angeles-1.png",
    text: "References our office through their websites",
  },
  {
    title: "Google Reviews",
    image: "/images/Google-Review-Logo.png",
    text: "5/5 Stars Reviews",
  },
];

export function Endorsements() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-[#c5a55a]">
            Trusted By
          </p>
          <h2 className="mb-4 text-3xl font-bold text-[#2c3540] md:text-4xl">
            Endorsements & Referrals
          </h2>
          <div className="mx-auto h-[3px] w-16 bg-[#c5a55a]" />
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {endorsements.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center border border-gray-100 bg-[#fafafa] p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#c5a55a]/30 hover:shadow-lg"
            >
              <div className="mb-5 flex h-24 items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-20 object-contain grayscale transition-all group-hover:grayscale-0"
                />
              </div>
              <h3 className="mb-2 text-sm font-bold text-[#2c3540]">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-[#757575]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
