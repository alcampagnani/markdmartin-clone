
const endorsements = [
  {
    title: 'American Embassy in Brazil',
    image: '/images/american-embassy-logo.png',
    text: 'References our office through its website',
  },
  {
    title: 'International Law Commission of Minas Gerais',
    image: '/images/OAB-1024x1024.png',
    text: 'Mark David Martin – President from 2019 – 2021',
  },
  {
    title: 'Brazilian Consulates Abroad',
    image: '/images/Logo-Consulado-Brasil-em-Los-Angeles-1.png',
    text: 'References our office through their websites',
  },
  {
    title: 'Google Reviews',
    image: '/images/Google-Review-Logo.png',
    text: '5/5 Stars Reviews',
  },
];

export function Endorsements() {
  return (
    <section style={{ backgroundColor: '#f4f4f4' }} className="py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2
          className="text-center text-3xl md:text-4xl font-bold mb-12"
          style={{ color: '#2c3540' }}
        >
          Endorsements &amp; Referrals
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {endorsements.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-sm hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-center justify-center mb-4 h-20">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-20 object-contain"
                />
              </div>
              <h3 className="font-semibold text-sm md:text-base mb-2" style={{ color: '#2c3540' }}>
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
