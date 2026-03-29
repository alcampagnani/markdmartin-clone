import {
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
    <section className="relative bg-[#c9a84c] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="group relative overflow-hidden bg-[#2c3540]/95 p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-5 flex items-center justify-center">
                  <Icon className="h-10 w-10 text-white" strokeWidth={1.5} />
                </div>

                <h3 className="mb-4 text-center text-sm font-bold uppercase tracking-[2px] text-white">
                  {area.title}
                </h3>

                {area.description && (
                  <p className="mb-5 text-center text-sm leading-relaxed text-gray-300">
                    {area.description}
                  </p>
                )}

                {area.items && (
                  <ul className="mb-5 space-y-1.5 text-sm text-gray-300">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c5a55a]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto pt-2 text-center">
                  <a
                    href={area.link}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#c5a55a] transition-all hover:gap-2 hover:text-[#d4b76a]"
                  >
                    Read more &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
