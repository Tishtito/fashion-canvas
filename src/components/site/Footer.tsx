import { Instagram, Facebook, Music2, MessageCircle } from "lucide-react";

type BrandIconProps = {
  size?: number;
  className?: string;
};

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/tishtito?igsh=MWx6cXlqY2Q3ZXplZQ==",
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

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <h3 className="font-display text-3xl text-beige mb-4">
            Model<span className="text-crimson">Verse</span>
          </h3>
          <p className="text-beige/60 text-sm leading-relaxed max-w-sm mb-6">
            A modern modelling house representing editorial, runway, commercial,
            and creative talent across four continents.
          </p>
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

        <div className="md:col-span-3">
          <p className="text-[10px] uppercase tracking-[0.3em] text-crimson mb-5">Explore</p>
          <ul className="space-y-3 text-sm text-beige/70">
            {["About", "Portfolio", "Services", "Models", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-crimson transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-crimson mb-5">Newsletter</p>
          <p className="text-sm text-beige/60 mb-4">Casting calls, editorial drops, and studio diaries.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex border border-beige/30">
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 bg-transparent px-4 py-3 text-sm text-beige placeholder:text-beige/40 focus:outline-none"
            />
            <button className="bg-crimson px-5 text-xs uppercase tracking-[0.25em] text-beige hover:bg-crimson/90">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-beige/40">
          <p>© {new Date().getFullYear()} ModelVerse Portfolio. All rights reserved.</p>
          <p>Crafted for the love of editorial.</p>
        </div>
      </div>
    </footer>
  );
}
