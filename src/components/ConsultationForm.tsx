import { useState, type FormEvent } from "react";

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    services: "",
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
    "w-full bg-white border border-gray-300 text-gray-800 placeholder-gray-400 rounded px-4 py-3 mb-4 focus:border-[#2c3540] focus:outline-none transition-colors text-sm";

  return (
    <section id="contact" className="bg-[#c5a55a]">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
        {/* Heading */}
        <h2 className="mb-3 text-center text-3xl font-bold uppercase tracking-wide text-[#2c3540] md:text-4xl">
          REQUEST A FREE CONSULTATION
        </h2>
        <p className="mx-auto mb-12 max-w-[600px] text-center text-sm leading-relaxed text-[#2c3540]/80">
          Fill out the form below to receive a free and confidential initial
          consultation.
        </p>

        {/* Two-column layout */}
        <div className="grid items-start gap-10 md:grid-cols-2">
          {/* Left - Photo */}
          <div className="flex justify-center">
            <img
              src="/images/Mark-Supreme-Court-walking-edited-1-683x1024.jpg"
              alt="Mark at the Supreme Court"
              className="w-full max-w-[450px] object-cover shadow-lg"
            />
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
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
              placeholder="Phone Number"
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
                What Country Are You From?
              </option>
              <option value="United States">United States</option>
              <option value="Brazil">Brazil</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Portugal">Portugal</option>
              <option value="Other">Other</option>
            </select>

            <select
              name="services"
              value={formData.services}
              onChange={handleChange}
              className={inputClasses}
              required
            >
              <option value="" disabled>
                Services
              </option>
              <option value="International Law">International Law</option>
              <option value="Estate Law">Estate Law</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Family Law">Family Law</option>
              <option value="Business Law">Business Law</option>
              <option value="Contracts">Contracts</option>
              <option value="Immigration">Immigration</option>
              <option value="Intellectual Property">Intellectual Property</option>
              <option value="Other">Other</option>
            </select>

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={inputClasses}
            />

            <button
              type="submit"
              className="mt-2 inline-flex items-center gap-2 border-2 border-[#2c3540] bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#2c3540] transition-all hover:bg-[#2c3540] hover:text-white"
            >
              Submit
              <span aria-hidden="true">&rarr;</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
