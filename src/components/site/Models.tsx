import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import editorial from "@/assets/editorial.jpg";
import streetwear from "@/assets/streetwear.jpg";
import bridal from "@/assets/bridal.jpg";
import corporate from "@/assets/corporate.jpg";
import runway from "@/assets/runway.jpg";
import cultural from "@/assets/cultural.jpg";
import about from "@/assets/about.jpg";
import hero from "@/assets/hero.jpg";

const categories = [
  "All", "Female Models", "Kids Models", "Runway Models",
  "Commercial Models", "Editorial Models", "Fitness Models", "Fashion Influencers",
];

const models = [
  { name: "Lena Okafor", category: "Editorial Models", img: editorial },
  { name: "Kai Mendez", category: "Commercial Models", img: streetwear },
  { name: "Sofia Rey", category: "Female Models", img: bridal },
  { name: "Adrian Voss", category: "Runway Models", img: corporate },
  { name: "Maya Chen", category: "Runway Models", img: runway },
  { name: "Amara Diallo", category: "Editorial Models", img: cultural },
  { name: "Iris Lavigne", category: "Fashion Influencers", img: about },
  { name: "Noor Hassan", category: "Female Models", img: hero },
];

export function Models() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? models : models.filter((m) => m.category === active);

  return (
    <section id="models" className="py-28 md:py-40 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
        <div>
          <p className="editorial-line text-crimson uppercase tracking-[0.35em] text-xs mb-6">The Roster</p>
          <h2 className="font-display text-5xl md:text-6xl text-beige leading-tight">
            Model <em className="text-crimson not-italic font-light">categories.</em>
          </h2>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] transition-all ${
              active === c
                ? "bg-crimson text-beige"
                : "border border-beige/30 text-beige/70 hover:border-crimson hover:text-crimson"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {visible.map((m) => (
            <motion.div
              layout
              key={m.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden bg-secondary">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-lg text-beige">{m.name}</h3>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-beige/50 mt-1">{m.category}</p>
                </div>
                <span className="text-crimson text-sm group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="text-center text-beige/50 py-20 italic">Casting in progress for this category.</p>
      )}
    </section>
  );
}
