import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Models", href: "#models" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-wide text-beige">
          Model<span className="text-crimson">Verse</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.2em]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-beige/80 hover:text-crimson transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex px-5 py-2.5 text-xs uppercase tracking-[0.2em] bg-crimson text-beige hover:bg-crimson/90 transition-colors"
        >
          Book a Model
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-beige p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="flex flex-col px-6 py-6 gap-5 text-sm uppercase tracking-[0.2em]">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-beige/80 hover:text-crimson">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="bg-crimson text-beige px-5 py-3 text-center">
              Book a Model
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
