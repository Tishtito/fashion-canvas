import { useState } from "react";
import { Instagram, Facebook, MessageCircle, Music2, Mail, Phone, MapPin } from "lucide-react";

const services = [
  "Fashion Campaign", "Runway", "Brand Photoshoot", "Product Modelling",
  "Bridal", "Commercial", "Creative Concept", "Portfolio Build",
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-28 md:py-40 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="editorial-line text-crimson uppercase tracking-[0.35em] text-xs mb-6">Book a Model</p>
          <h2 className="font-display text-5xl md:text-6xl leading-tight text-beige mb-8">
            Let's create <em className="text-crimson not-italic font-light">something</em> unforgettable.
          </h2>
          <p className="text-beige/70 leading-relaxed mb-10">
            Tell us about your project, the look you're chasing, and the date you have in mind.
            Our casting team replies within 24 hours.
          </p>

          <ul className="space-y-5 mb-10 text-beige/80 text-sm">
            <li className="flex items-center gap-4"><Mail size={16} className="text-crimson" /> bookings@modelverse.studio</li>
            <li className="flex items-center gap-4"><Phone size={16} className="text-crimson" /> +1 (212) 555 — 0149</li>
            <li className="flex items-center gap-4"><MapPin size={16} className="text-crimson" /> 14 Mercer Street, New York</li>
          </ul>

          <div className="flex gap-3">
            {[Instagram, Music2, Facebook, MessageCircle].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-11 h-11 grid place-items-center border border-beige/30 text-beige hover:bg-crimson hover:border-crimson transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-7 bg-beige text-espresso p-8 md:p-12 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Full Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone Number" name="phone" type="tel" />
            <div>
              <label className="block text-[10px] uppercase tracking-[0.3em] mb-2">Service</label>
              <select required className="w-full bg-transparent border-b border-espresso/30 py-3 focus:outline-none focus:border-crimson text-sm">
                <option value="">Select a service</option>
                {services.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <Field label="Preferred Date" name="date" type="date" />
            <Field label="Budget" name="budget" placeholder="Optional" />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-[0.3em] mb-2">Message</label>
            <textarea
              rows={4}
              required
              placeholder="Tell us about your vision…"
              className="w-full bg-transparent border-b border-espresso/30 py-3 focus:outline-none focus:border-crimson text-sm resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="w-full md:w-auto px-10 py-4 bg-crimson text-beige text-xs uppercase tracking-[0.3em] hover:bg-espresso transition-colors disabled:opacity-60"
          >
            {sent ? "Request sent ✓" : "Submit Booking"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.3em] mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-espresso/30 py-3 focus:outline-none focus:border-crimson text-sm"
      />
    </div>
  );
}
