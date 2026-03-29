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
    <section className="bg-[#2c3540] py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-16 text-center text-3xl font-bold uppercase tracking-[3px] text-[#c5a55a] md:text-4xl">
          Endorsements and Referrals
        </h2>

        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {endorsements.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-5 flex h-[120px] items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-[120px] object-contain"
                />
              </div>
              <h3 className="mb-2 text-sm font-bold uppercase tracking-[2px] text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/70">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
