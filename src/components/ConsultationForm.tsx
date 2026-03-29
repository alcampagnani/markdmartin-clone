import { useState, type FormEvent } from "react";

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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const inputClasses =
    "w-full bg-white border border-[#d2d2d2] rounded-[6px] p-3 mb-4 focus:border-[#15779b] focus:outline-none";

  return (
    <section className="bg-[#2c3540] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-white text-3xl font-bold uppercase mb-3">
          REQUEST A FREE CONSULTATION
        </h2>
        <p className="text-[#d2d2d2] mb-10">
          Fill out the form below to receive a free and confidential initial
          consultation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left side - Image */}
          <div>
            <img
              src="/images/Mark-Supreme-Court-walking-edited-1-683x1024.jpg"
              alt="Mark at the Supreme Court"
              className="w-full max-h-[500px] object-cover rounded-lg"
            />
          </div>

          {/* Right side - Form */}
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
              <option value="Intellectual Property">Intellectual Property</option>
              <option value="Other">Other</option>
            </select>

            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={inputClasses}
            />

            <button
              type="submit"
              className="w-full bg-[#15779b] text-white font-semibold rounded py-[14px] hover:bg-[#11607d] transition-colors"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
