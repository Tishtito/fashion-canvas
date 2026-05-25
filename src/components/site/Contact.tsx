import { useState, type FormEvent } from "react";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

type BrandIconProps = {
  size?: number;
  className?: string;
};

const services = [
  "Fashion Campaign", "Runway", "Brand Photoshoot", "Product Modelling",
  "Bridal", "Commercial", "Creative Concept", "Portfolio Build",
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/_chinedu254?igsh=MTQ2cm42M2x3cWs3Mg==",
    icon: Instagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@_chinedu254?_r=1&_t=ZS-96UAJ0DkERc",
    icon: TikTokIcon,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/254740121892",
    icon: WhatsAppIcon,
  },
];

const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT || "/Backend/emailcontroller.php";

function TikTokIcon({ size = 16, className }: BrandIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <path d="M16.6 3c.3 2.4 1.7 3.8 4.1 4v3.5c-1.4 0-2.8-.4-4.1-1.2v6.1c0 3.5-2.4 5.6-5.7 5.6-3.1 0-5.6-2.3-5.6-5.4 0-3.4 2.8-5.7 6.4-5.1v3.7c-1.5-.5-2.8.5-2.8 1.8 0 1.1.9 1.9 2 1.9 1.3 0 2.1-.8 2.1-2.4V3h3.6Z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 16, className }: BrandIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width={size}
    >
      <path d="M5.2 18.8 6.3 15A7.4 7.4 0 1 1 9 17.8l-3.8 1Z" />
      <path d="M9.2 8.7c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.7 1.7c.1.2 0 .4-.1.5l-.4.5c-.1.1-.2.3 0 .5.4.8 1.1 1.5 2.1 2 .2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.6-.1l1.7.8c.2.1.4.3.3.5-.1.7-.7 1.4-1.3 1.6-.8.2-2.6-.1-4.4-1.5-1.7-1.4-2.7-3.2-2.8-4.2 0-.6.4-1.2.7-1.4Z" />
    </svg>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      date: String(formData.get("date") ?? "").trim(),
      budget: String(formData.get("budget") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    setSending(true);
    setSent(false);
    setError("");

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => ({}))) as { ok?: boolean; message?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Unable to send request right now.");
      }

      setSent(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send request right now.");
    } finally {
      setSending(false);
    }
  }

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
            <li className="flex items-center gap-4"><Mail size={16} className="text-crimson" /> hopejeannete@gmail.com</li>
            <li className="flex items-center gap-4"><Phone size={16} className="text-crimson" /> +254 740 121892</li>
            <li className="flex items-center gap-4"><MapPin size={16} className="text-crimson" /> Nairobi, Kenya</li>
          </ul>

          <div className="flex gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-11 h-11 grid place-items-center border border-beige/30 text-beige hover:bg-crimson hover:border-crimson transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="lg:col-span-7 bg-beige text-espresso p-8 md:p-12 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Full Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone Number" name="phone" type="tel" />
            <div>
              <label className="block text-[10px] uppercase tracking-[0.3em] mb-2">Service</label>
              <select name="service" required className="w-full bg-transparent border-b border-espresso/30 py-3 focus:outline-none focus:border-crimson text-sm">
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
              name="message"
              rows={4}
              required
              placeholder="Tell us about your vision…"
              className="w-full bg-transparent border-b border-espresso/30 py-3 focus:outline-none focus:border-crimson text-sm resize-none"
            />
          </div>
          {(error || sent) && (
            <p className={`text-sm ${error ? "text-crimson" : "text-espresso/70"}`} role="status" aria-live="polite">
              {error || "Request sent. We will reply soon."}
            </p>
          )}
          <button
            type="submit"
            disabled={sending || sent}
            className="w-full md:w-auto px-10 py-4 bg-crimson text-beige text-xs uppercase tracking-[0.3em] hover:bg-espresso transition-colors disabled:opacity-60"
          >
            {sending ? "Sending..." : sent ? "Request sent ✓" : "Submit Booking"}
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
