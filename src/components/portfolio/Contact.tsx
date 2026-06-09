import { Github, Mail, ArrowUpRight, Gitlab } from "lucide-react";
import { Linkedin } from "lucide-react"

const socials = [
  { name: "GitHub", href: "https://github.com/slash2301", icon: GitHub },
  { name : "GitLab", href: "https://gitlab.com/dev.prasanna0102", icon: GitLab},
  { name: "Linkedin", href: "https://www.linkedin.com/in/prasanna-shinde-27a602209/", icon: Linkedin },
];

const EMAIL = "prasanna0102@zohomail.in";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Contact</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight max-w-3xl">
            Let's build something <span className="italic text-gradient">memorable</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Have a project in mind, a role to fill,
            my inbox is always open.
          </p>
        </div>

        <a
          href={`mailto:${EMAIL}`}
          className="group block rounded-2xl border border-border bg-card/50 backdrop-blur p-8 sm:p-12 hover:border-primary/50 hover:bg-card transition-all duration-500 shadow-soft hover:shadow-glow"
        >
          <div className="flex items-start sm:items-center justify-between gap-6 flex-col sm:flex-row">
            <div className="flex items-center gap-5">
              <div className="h-12 w-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">Email me at</div>
                <div className="font-display text-2xl sm:text-3xl text-foreground">{EMAIL}</div>
              </div>
            </div>
            <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-500" />
          </div>
        </a>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">Elsewhere</div>
            <div className="flex items-center gap-2">
              {socials.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={name}
                  className="h-11 w-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Based in Pune · Working worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
