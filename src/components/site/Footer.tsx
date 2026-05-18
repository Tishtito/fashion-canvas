import { Instagram, Facebook, Music2, MessageCircle } from "lucide-react";

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
            {[Instagram, Music2, Facebook, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 grid place-items-center border border-beige/20 text-beige/70 hover:text-crimson hover:border-crimson transition-colors">
                <Icon size={14} />
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
