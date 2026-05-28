import { ArrowDown } from "lucide-react";
import { WorkingIllustration } from "./WorkingIllustration";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.04] pointer-events-none"
           style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur text-xs text-muted-foreground mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for new opportunities
        </div>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tight animate-blur-in">
          Hi, I'm <span className="text-gradient italic">Alex Rivera</span>
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
          A product designer & developer crafting thoughtful digital experiences
          where elegance meets engineering.
        </p>

        <WorkingIllustration />

        <div className="mt-12 flex items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#about"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Scroll to explore
            <ArrowDown className="h-4 w-4 animate-bounce group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
