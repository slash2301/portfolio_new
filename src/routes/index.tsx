import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Alex Rivera — Designer & Developer Portfolio" },
      { name: "description", content: "Personal portfolio of Alex Rivera, a product designer and developer crafting thoughtful digital experiences." },
      { property: "og:title", content: "Alex Rivera — Designer & Developer" },
      { property: "og:description", content: "Personal portfolio of Alex Rivera." },
    ],
  }),
});

function Index() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
