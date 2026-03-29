import {
  ArrowRight,
  Scale,
  Building,
  Home,
  Heart,
  Briefcase,
  FileText,
  Plane,
  Shield,
} from "lucide-react";

interface PracticeAreaCard {
  icon: React.ElementType;
  title: string;
  description?: string;
  items?: string[];
  link: string;
}

const practiceAreas: PracticeAreaCard[] = [
  {
    icon: Scale,
    title: "International Law",
    description:
      "Strategic legal support for cross-border disputes involving Brazilian jurisdiction.",
    link: "/international-law/",
  },
  {
    icon: Building,
    title: "Estate Law",
    items: [
      "Probate",
      "Family Holding",
      "Inheritance Tax ITCMD",
      "Assets Protection",
      "Wills",
    ],
    link: "/estate-law/",
  },
  {
    icon: Home,
    title: "Real Estate Law",
    items: [
      "Due Diligence",
      "Golden Visa",
      "Fund Transfers",
      "Power of Attorney",
      "CPF",
    ],
    link: "/real-estate/",
  },
  {
    icon: Heart,
    title: "Family Law",
    items: [
      "Divorce",
      "Marriage Contracts",
      "International Child Abduction",
      "Division of Assets",
      "Child Custody",
    ],
    link: "/family-law-in-brazil-for-foreigners/",
  },
  {
    icon: Briefcase,
    title: "Business Law",
    items: [
      "Opening a Company",
      "Partnership Agreement",
      "Shareholders Agreement",
      "Joint Venture Agreement",
      "Investment Agreement",
    ],
    link: "/business-law/",
  },
  {
    icon: FileText,
    title: "Contracts",
    items: [
      "Independent Contractor",
      "Employment Contract",
      "Loan Agreement",
      "Confidentiality Agreement",
      "Non-Compete Agreement",
    ],
    link: "/contracts/",
  },
  {
    icon: Plane,
    title: "Immigration to Brazil",
    items: [
      "Family reunion visa",
      "Retirement visa",
      "Golden visa",
      "Digital Nomad visa",
      "Work visa",
    ],
    link: "/visas-and-immigration-to-brazil/",
  },
  {
    icon: Shield,
    title: "Intellectual Property",
    items: [
      "Trademark Registration",
      "Patent Application",
      "Copyright Registration",
      "Legal Opinion",
      "IP Agreements",
    ],
    link: "/intellectual-property/",
  },
];

export function PracticeAreas() {
  return (
    <section className="bg-[#f8f8f8] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-[#c5a55a]">
            What We Do
          </p>
          <h2 className="mb-4 text-3xl font-bold text-[#2c3540] md:text-4xl">
            Our Expertise
          </h2>
          <div className="mx-auto h-[3px] w-16 bg-[#c5a55a]" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="group relative overflow-hidden border border-gray-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Top accent line */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-[#15779b] transition-all duration-300 group-hover:w-full" />

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#15779b]/10 transition-colors group-hover:bg-[#15779b]">
                  <Icon className="h-6 w-6 text-[#15779b] transition-colors group-hover:text-white" />
                </div>

                <h3 className="mb-3 text-lg font-bold text-[#2c3540]">
                  {area.title}
                </h3>

                {area.description && (
                  <p className="mb-5 text-sm leading-relaxed text-[#757575]">
                    {area.description}
                  </p>
                )}

                {area.items && (
                  <ul className="mb-5 space-y-1.5 text-sm text-[#757575]">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#c5a55a]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  href={area.link}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#15779b] transition-all hover:gap-2"
                >
                  Read more
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <a
            href="/services/"
            className="inline-block border-2 border-[#15779b] px-10 py-3 text-sm font-bold uppercase tracking-[1.5px] text-[#15779b] transition-all hover:bg-[#15779b] hover:text-white"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}
