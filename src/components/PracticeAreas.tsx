import { ArrowRight, Scale, Building, Home, Heart, Briefcase, FileText, Plane, Shield } from "lucide-react";

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
    description: "Strategic legal support for cross-border disputes involving Brazilian jurisdiction.",
    link: "/international-law/",
  },
  {
    icon: Building,
    title: "Estate Law",
    items: ["Probate", "Family Holding", "Inheritance Tax ITCMD", "Assets Protection", "Wills"],
    link: "/estate-law/",
  },
  {
    icon: Home,
    title: "Real Estate Law",
    items: ["Due Diligence", "Golden Visa", "Fund Transfers", "Power of Attorney", "CPF"],
    link: "/real-estate/",
  },
  {
    icon: Heart,
    title: "Family Law",
    items: ["Divorce", "Marriage Contracts", "International Child Abduction", "Division of Assets", "Child Custody"],
    link: "/family-law-in-brazil-for-foreigners/",
  },
  {
    icon: Briefcase,
    title: "Business Law",
    items: ["Opening a Company", "Partnership Agreement", "Shareholders Agreement", "Joint Venture Agreement", "Investment Agreement"],
    link: "/business-law/",
  },
  {
    icon: FileText,
    title: "Contracts",
    items: ["Independent Contractor", "Employment Contract", "Loan Agreement", "Confidentiality Agreement", "Non-Compete Agreement"],
    link: "/contracts/",
  },
  {
    icon: Plane,
    title: "Immigration to Brazil",
    items: ["Family reunion visa", "Retirement visa", "Golden visa", "Digital Nomad visa", "Work visa"],
    link: "/visas-and-immigration-to-brazil/",
  },
  {
    icon: Shield,
    title: "Intellectual Property",
    items: ["Trademark Registration", "Patent Application", "Copyright Registration", "Legal Opinion", "IP Agreements"],
    link: "/intellectual-property/",
  },
];

export function PracticeAreas() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold" style={{ color: "#2c3540" }}>
            Our Expertise
          </h2>
          <p style={{ color: "#757575" }}>Practice Areas</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="group rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderRadius: "8px" }}
              >
                <div className="mb-4">
                  <Icon size={32} style={{ color: "#15779b" }} />
                </div>
                <h3
                  className="mb-3 text-lg font-bold"
                  style={{ color: "#2c3540", fontSize: "18px" }}
                >
                  {area.title}
                </h3>

                {area.description && (
                  <p className="mb-4 text-sm" style={{ color: "#757575" }}>
                    {area.description}
                  </p>
                )}

                {area.items && (
                  <ul className="mb-4 list-disc space-y-1 pl-5 text-sm" style={{ color: "#757575" }}>
                    {area.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                <a
                  href={area.link}
                  className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:underline"
                  style={{ color: "#15779b" }}
                >
                  Read more
                  <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/services/"
            className="inline-block rounded border-2 px-8 py-3 font-medium transition-colors hover:bg-[#15779b] hover:text-white"
            style={{ borderColor: "#15779b", color: "#15779b" }}
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}
