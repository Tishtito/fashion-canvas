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

const pageTitle = "Jeannete Hope Wangara | Fashion Model & Portfolio in Nairobi";
const pageDescription =
  "Explore Jeannete Hope Wangara's Nairobi fashion portfolio and book her for campaigns, runway, editorial, bridal, corporate, streetwear, and cultural fashion shoots.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
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
