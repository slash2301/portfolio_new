const skills = [
  "Java", "Golang", "Python", "JavaScript", "Microservices",
  "Spring Security", "Hibernate/JPA", "MySQL", "Redis", "Angular"
];

const stats = [
  { value: "1+", label: "Years of experience" },
  //{ value: "40+", label: "Projects shipped" },
  //{ value: "12", label: "Happy clients" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">About</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight max-w-3xl">
            A blend of <span className="italic text-gradient">curiosity</span> and craft.
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          <div className="md:col-span-3 space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a backend developer who finds satisfaction in the gap between a problem and it's solution — that space where clean code, thoughtful design and a 
              bit of stubbornness turn complexity into something that just works. Based in Pune, I currently build Java based tools and API integrations at Tech Mahindra,
              where my code runs in producion for one of the Europe's largest telecom networks.
            </p>
            <p>
              When I am not pushing commits, I'm usually playing guitar, getting lost in music, or dissecting the latest geopolitical developments with more enthusiasm than
              is probably healthy. I am currently deepening my backend craft across Spring Boot, Docker and Distributed Systems. But I firmly believe the best engineers are the
              ones who know when to close the laptop too.
            </p>
          </div>

          <div className="md:col-span-2 space-y-8">
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="space-y-1">
                  <div className="font-display text-3xl sm:text-4xl text-foreground">{s.value}</div>
                  <div className="text-xs text-muted-foreground leading-tight">{s.label}</div>
                </div>
              ))}
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">Toolkit</div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-full border border-border bg-card/50 text-foreground/80 hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
