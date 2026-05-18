import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { ArrowRight } from "lucide-react";

import editorial from "@/assets/editorial.jpg";
import streetwear from "@/assets/streetwear.jpg";
import bridal from "@/assets/bridal.jpg";
import corporate from "@/assets/corporate.jpg";
import runway from "@/assets/runway.jpg";
import cultural from "@/assets/cultural.jpg";

const cards = [
  { img: editorial, title: "Editorial Fashion", location: "Milan Studio", desc: "A bold visual story inspired by confidence, elegance, and high-end magazine fashion." },
  { img: streetwear, title: "Streetwear Style", location: "Brooklyn, NY", desc: "Urban fashion captured through expressive poses, layered outfits, and city-inspired energy." },
  { img: bridal, title: "Bridal Modelling", location: "Tuscany", desc: "Graceful bridal looks designed to express beauty, romance, and timeless elegance." },
  { img: corporate, title: "Corporate Fashion", location: "London HQ", desc: "Professional modelling looks for business brands, formal campaigns, and executive styling." },
  { img: runway, title: "Runway Looks", location: "Paris Fashion Week", desc: "Dynamic fashion pieces created for movement, confidence, and stage presence." },
  { img: cultural, title: "Cultural Fashion", location: "Lagos · Marrakech", desc: "A celebration of heritage, identity, and traditional fashion through modern modelling." },
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
            Drag, swipe or tap through six signature directions —
            each a chapter in the ModelVerse archive.
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
            <SwiperSlide key={c.title} className="!h-auto">
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
                    <button className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-crimson hover:gap-3 transition-all">
                      View Details <ArrowRight size={14} />
                    </button>
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
