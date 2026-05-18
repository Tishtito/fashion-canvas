import { motion } from "framer-motion";
import { Camera, Sparkles, ShoppingBag, Building2, Heart, Megaphone, Lightbulb, FolderHeart } from "lucide-react";

const services = [
  { icon: Camera, title: "Fashion Campaign Modelling", desc: "Cover-worthy talent for global fashion campaigns." },
  { icon: Sparkles, title: "Runway Modelling", desc: "Trained walkers for couture, ready-to-wear and showroom." },
  { icon: ShoppingBag, title: "Brand Photoshoots", desc: "Story-led imagery for lifestyle and luxury brands." },
  { icon: Building2, title: "Product Modelling", desc: "Precision hand, beauty and detail work for catalog." },
  { icon: Heart, title: "Bridal Modelling", desc: "Soft, romantic talent for bridal collections." },
  { icon: Megaphone, title: "Commercial Modelling", desc: "Relatable faces for retail, tech and consumer brands." },
  { icon: Lightbulb, title: "Creative Concept Shoots", desc: "Avant-garde direction for art books and zines." },
  { icon: FolderHeart, title: "Portfolio Creation", desc: "Build a signature book — concept to print." },
];

export function Services() {
  return (
    <section id="services" className="py-28 md:py-40 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-16">
        <p className="editorial-line text-crimson uppercase tracking-[0.35em] text-xs mb-6">Services</p>
        <h2 className="font-display text-5xl md:text-6xl leading-tight text-beige">
          Everything from the <em className="text-crimson not-italic font-light">first frame</em> to the final book.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group bg-beige text-espresso p-8 hover:bg-crimson hover:text-beige transition-all duration-500 cursor-pointer"
          >
            <s.icon size={28} className="text-crimson group-hover:text-beige transition-colors mb-8" strokeWidth={1.4} />
            <h3 className="font-display text-xl mb-3 leading-snug">{s.title}</h3>
            <p className="text-sm leading-relaxed opacity-80">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
