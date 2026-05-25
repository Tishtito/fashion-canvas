import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { ArrowRight } from "lucide-react";

import editorial from "@/assets/editorial.jpg";
import editorial2 from "@/assets/editorial2.jpg";
import editorial3 from "@/assets/editorial3.jpg";
import streetwear from "@/assets/streetwear.jpg";
import streetwear2 from "@/assets/streetwear2.jpg";
import streetwear3 from "@/assets/streetwear3.jpg";
import streetwear4 from "@/assets/streetwear4.jpg";
import streetwear5 from "@/assets/streetwear5.jpg";
import bridal from "@/assets/bridal.jpg";
import corporate from "@/assets/corporate.jpg";
import corporate2 from "@/assets/corporate2.jpg";
import corporate3 from "@/assets/12.jpg";
import corporate4 from "@/assets/corporate3.jpg";
import corporate5 from "@/assets/corporate4.jpg";
import runway from "@/assets/runway.jpg";
import cultural from "@/assets/cultural.jpg";
import cultural2 from "@/assets/cultural2.jpg";
import casual from "@/assets/Casual.jpg";
import casual2 from "@/assets/Casual2.jpg";

const cards = [
  { id: "runway-stage", img: runway, title: "Runway", location: "Nairobi", desc: "A movement-led look built for confident entrances, clean lines, and spotlight-ready posture." },
  { id: "editorial-poise", img: editorial, title: "Editorial", location: "Nairobi", desc: "A polished magazine-style frame focused on elegance, attitude, and refined visual storytelling." },
  { id: "corporate-power", img: corporate, title: "Corporate", location: "Nairobi", desc: "Sharp executive styling with a composed presence for business, leadership, and brand campaigns." },
  { id: "streetwear-edge", img: streetwear, title: "Streetwear", location: "Nairobi", desc: "A city-ready fashion moment with bold styling, relaxed confidence, and expressive street energy." },
  { id: "cultural-heritage", img: cultural, title: "Cultural", location: "Nairobi", desc: "Heritage-inspired styling that highlights texture, identity, and African fashion influence." },
  { id: "casual-soft", img: casual, title: "Casual", location: "Nairobi", desc: "An easy everyday look shaped around comfort, natural confidence, and approachable style." },
  { id: "streetwear-second", img: streetwear5, title: "Streetwear", location: "Nairobi", desc: "Contemporary street styling with a clean silhouette, casual strength, and editorial finish." },
  { id: "editorial-drama", img: editorial2, title: "Editorial", location: "Nairobi", desc: "High-fashion posing with a strong mood, sculpted styling, and campaign-ready presence." },
  { id: "corporate-tailoring", img: corporate2, title: "Corporate", location: "Nairobi", desc: "A formal wardrobe story centered on structure, professionalism, and modern executive polish." },
  { id: "streetwear-layered", img: streetwear2, title: "Streetwear", location: "Nairobi", desc: "Layered casual pieces photographed with youthful rhythm, movement, and urban personality." },
  { id: "bridal-grace", img: bridal, title: "Bridal", location: "Nairobi", desc: "A romantic bridal portrait designed around softness, poise, and timeless celebration styling." },
  { id: "cultural-statement", img: cultural2, title: "Cultural", location: "Nairobi", desc: "A vibrant cultural look that pairs expressive detail with proud, graceful presentation." },
  { id: "corporate-portrait", img: corporate3, title: "Corporate", location: "Nairobi", desc: "A poised professional portrait with crisp styling for profiles, campaigns, and formal branding." },
  { id: "streetwear-bold", img: streetwear3, title: "Streetwear", location: "Nairobi", desc: "A stronger street-style chapter with confident styling, attitude, and camera-forward energy." },
  { id: "editorial-motion", img: editorial3, title: "Editorial", location: "Nairobi", desc: "An elongated fashion frame that leans into silhouette, movement, and dramatic editorial balance." },
  { id: "corporate-style", img: corporate5, title: "Runway", location: "Nairobi", desc: "A poised professional portrait with crisp styling for profiles, campaigns, and formal branding." },
  { id: "casual-bright", img: casual2, title: "Casual", location: "Nairobi", desc: "A fresh daytime outfit story with relaxed polish, friendly charm, and wearable fashion appeal." },
  { id: "corporate-detail", img: corporate4, title: "Corporate", location: "Nairobi", desc: "A refined business-fashion look that emphasizes detail, confidence, and camera-ready composure." },
  { id: "streetwear-modern", img: streetwear4, title: "Streetwear", location: "Nairobi", desc: "Contemporary street styling with a clean silhouette, casual strength, and editorial finish." },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-28 md:py-40 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="editorial-line text-crimson uppercase tracking-[0.35em] text-xs mb-6">The Portfolio</p>
            <h2 className="font-display text-5xl md:text-7xl text-beige leading-tight">
              Fashion <em className="text-crimson not-italic font-light">stories,</em><br />swiped in motion.
            </h2>
          </div>
          <p className="text-beige/60 max-w-sm">
            Drag, swipe or tap through a mixed set of signature directions —
            each chapter in the Jeannete Hope Wangara archive.
          </p>
        </div>
      </div>

      <div className="px-2 md:px-10 pb-8">
        <Swiper
          modules={[Navigation, Pagination, A11y, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView={1.15}
          spaceBetween={20}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 120, modifier: 2, slideShadows: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 2.6 },
            1280: { slidesPerView: 3 },
          }}
          className="!pb-16"
        >
          {cards.map((c) => (
            <SwiperSlide key={c.id} className="!h-auto">
              {({ isActive }) => (
                <article
                  className={`group bg-beige text-espresso transition-all duration-500 ${
                    isActive ? "scale-100 opacity-100" : "scale-[0.92] opacity-70"
                  }`}
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-crimson mb-3">
                      <span>{c.location}</span>
                      <span>Chapter</span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl mb-3">{c.title}</h3>
                    <p className="text-sm leading-relaxed text-espresso/75 mb-6">{c.desc}</p>
                    {/* <button className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-crimson hover:gap-3 transition-all">
                      View Details <ArrowRight size={14} />
                    </button> */}
                  </div>
                </article>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
