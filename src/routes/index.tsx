import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Portfolio } from "@/components/site/Portfolio";
import { Featured } from "@/components/site/Featured";
import { Services } from "@/components/site/Services";
import { Models } from "@/components/site/Models";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ChineduVerse Portfolio — Where Fashion Meets Identity" },
      { name: "description", content: "A modern modelling house showcasing editorial, runway, bridal and commercial fashion stories. Book the next face of your campaign." },
      { property: "og:title", content: "ChineduVerse Portfolio" },
      { property: "og:description", content: "Editorial, runway, bridal and commercial modelling — curated for brands that take their image seriously." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Featured />
      <Services />
      <Models />
      <Contact />
      <Footer />
    </main>
  );
}
