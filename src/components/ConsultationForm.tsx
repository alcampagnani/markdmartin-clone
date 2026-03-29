import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    legalMatter: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const inputClasses =
    "w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-none p-3.5 mb-4 focus:border-[#c5a55a] focus:outline-none transition-colors";

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/Mark-Supreme-Court-walking-edited-1-683x1024.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-[#2c3540]/92" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* Left - Text content */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-[#c5a55a]">
              Get In Touch
            </p>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Request a Free Consultation
            </h2>
            <div className="mb-6 h-[3px] w-16 bg-[#c5a55a]" />
            <p className="mb-10 text-base leading-relaxed text-white/70">
              Fill out the form to receive a free and confidential initial
              consultation. Our team will get back to you within 24 hours.
            </p>

            <img
              src="/images/Mark-Supreme-Court-walking-edited-1-683x1024.jpg"
              alt="Mark at the Supreme Court"
              className="hidden w-full max-w-[400px] shadow-2xl md:block"
            />
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className={inputClasses}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClasses}
            />

            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={inputClasses}
              required
            >
              <option value="" disabled>
                Country
              </option>
              <option value="United States">United States</option>
              <option value="Brazil">Brazil</option>
              <option value="Other">Other</option>
            </select>

            <select
              name="legalMatter"
              value={formData.legalMatter}
              onChange={handleChange}
              className={inputClasses}
              required
            >
              <option value="" disabled>
                Legal Matter
              </option>
              <option value="International Law">International Law</option>
              <option value="Estate Law">Estate Law</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Family Law">Family Law</option>
              <option value="Business Law">Business Law</option>
              <option value="Contracts">Contracts</option>
              <option value="Immigration">Immigration</option>
              <option value="Intellectual Property">
                Intellectual Property
              </option>
              <option value="Other">Other</option>
            </select>

            <textarea
              name="message"
              placeholder="Tell us about your case..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={inputClasses}
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 bg-[#c5a55a] py-4 text-sm font-bold uppercase tracking-[2px] text-[#1a2530] transition-all hover:bg-[#d4b56a]"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
