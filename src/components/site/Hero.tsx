import { motion } from "framer-motion";
import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="Fashion model in couture gown" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/85 to-espresso/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-espresso/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-32 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="editorial-line text-crimson uppercase tracking-[0.35em] text-xs mb-8"
        >
          ModelVerse Portfolio · Est. 2025
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="font-display text-beige text-6xl md:text-8xl lg:text-9xl leading-[0.95] text-balance max-w-4xl"
        >
          Where <em className="text-crimson not-italic font-light">Fashion</em> <br />
          Meets Identity.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-beige/75 max-w-xl text-lg leading-relaxed"
        >
          A curated portfolio of editorial, runway, and brand campaigns —
          built around the faces, fabrics, and stories that move culture forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#portfolio"
            className="group inline-flex items-center justify-center px-8 py-4 bg-crimson text-beige text-sm uppercase tracking-[0.25em] hover:bg-crimson/90 transition-all"
          >
            View Portfolio
            <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-beige text-beige text-sm uppercase tracking-[0.25em] hover:bg-beige hover:text-espresso transition-all"
          >
            Book a Model
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-end gap-3 text-beige/60">
        <span className="text-[10px] uppercase tracking-[0.4em] rotate-90 origin-right translate-y-12">Scroll</span>
      </div>
    </section>
  );
}
