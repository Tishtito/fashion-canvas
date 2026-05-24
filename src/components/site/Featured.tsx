import { motion } from "framer-motion";
import featured from "@/assets/featured.jpg";

export function Featured() {
  return (
    <section className="py-28 md:py-40 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="lg:col-span-7"
        >
          <div className="aspect-[16/11] overflow-hidden">
            <img src={featured} alt="Model in a pinstripe suit near stone columns" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-5 lg:pl-6"
        >
          <p className="editorial-line text-crimson uppercase tracking-[0.35em] text-xs mb-6">Featured Story</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight text-beige mb-8">
            Changing Faces <br /><em className="text-crimson font-light not-italic">— Defining Spaces</em>
          </h2>
          <p className="text-beige/75 leading-relaxed mb-5">
            My work bridges the gap between the structured precision of the runway and the spontaneous story told during a lifestyle shoot. 
            This adaptability comes from a deep respect for the collaborative process. I understand that a great image requires chemistry between the model, 
            the photographer, the stylist, and the light.Whether the aesthetic demands raw vulnerability, sharp sophistication, or commercial warmt.
          </p>
          <p className="text-beige/60 leading-relaxed mb-10">
            I bring total presence and professional discipline to the lens. 
            I do not have just one look—I have the look that your project needs.
          </p>

          <dl className="grid grid-cols-2 gap-y-5 gap-x-8 text-sm mb-10 border-t border-border pt-8">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.3em] text-beige/50 mb-1">Height</dt>
              <dd className="text-beige">5'10"</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.3em] text-beige/50 mb-1">SKin Color</dt>
              <dd className="text-beige">Chocolate</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.3em] text-beige/50 mb-1">Styling</dt>
              <dd className="text-beige">Jeannete Hope</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.3em] text-beige/50 mb-1">Issue</dt>
              <dd className="text-beige">Spring · 2026</dd>
            </div>
          </dl>

          <a
            href="#portfolio"
            className="group inline-flex items-center gap-3 px-7 py-3.5 bg-crimson text-beige text-xs uppercase tracking-[0.25em] hover:bg-crimson/90 transition-all"
          >
            Explore More
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
