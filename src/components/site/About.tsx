import { motion } from "framer-motion";
import about from "@/assets/about.jpg";

const tags = ["Mississipi Fashion House", "Fashion and Fusion", "Posh The Brand"];

export function About() {
  return (
    <section id="about" className="py-28 md:py-40 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img src={about} alt="Model in a black tailored suit outdoors" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-crimson text-beige px-6 py-4 hidden md:block">
            <div className="font-display text-3xl">10+</div>
            <div className="text-[10px] uppercase tracking-[0.3em]">Years of craft</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <p className="editorial-line text-crimson uppercase tracking-[0.35em] text-xs mb-6">About the Jeannete Hope Wangara</p>
          <h2 className="font-display text-5xl md:text-6xl leading-tight mb-8 text-beige">
            I'm a thrilled <em className="text-crimson not-italic font-light">In-House</em> Content Creator & Model.
          </h2>
          <p className="text-beige/75 leading-relaxed mb-6">
            With a passion for storytelling and experience in crafting engaging content, 
            I'm ready to bring the brand to life through compelling visuals and authentic narratives.
          </p>
          <p className="text-beige/60 leading-relaxed mb-10">
            Let's create something awesome together.
            Below are some of the brands I've had the pleasure of working with:
          </p>
          <div className="flex flex-wrap gap-3">
            {tags.map((t) => (
              <span key={t} className="text-xs uppercase tracking-[0.2em] px-4 py-2 bg-beige text-espresso">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
