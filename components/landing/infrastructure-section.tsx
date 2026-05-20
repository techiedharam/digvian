"use client";

import { useEffect, useState, useRef } from "react";

const technologies = [
  { name: "React.js", note: "Frontend" },
  { name: "Next.js", note: "SSR & Performance" },
  { name: "Node.js", note: "API & Backend" },
  { name: "TypeScript", note: "Type-safe" },
  { name: "MongoDB", note: "Database" },
  { name: "Firebase", note: "Realtime & Auth" },
  { name: "Tailwind CSS", note: "Design system" },
  { name: "OpenAI", note: "AI integrations" },
  { name: "Vercel", note: "Hosting" },
  { name: "AWS", note: "Cloud services" },
  { name: "Docker", note: "Containers" },
  { name: "Stripe", note: "Payments" },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeLocation, setActiveLocation] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLocation((prev) => (prev + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="infrastructure" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-8 h-px bg-foreground/30" />
                Technologies
              </span>
              <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
                Modern stack,
                <br />
                built for scale.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                We combine proven technologies and AI-first tooling to deliver performant, maintainable products.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl lg:text-5xl font-display mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Technologies & tools</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-display mb-2">420+</div>
                  <div className="text-sm text-muted-foreground">Projects delivered</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-display mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Years combined experience</div>
                </div>
              </div>
          </div>

          {/* Right: Location list */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-foreground/10">
              {/* Header */}
              <div className="px-6 py-4 border-b border-foreground/10 flex items-center justify-between">
                <span className="text-sm font-mono text-muted-foreground">Tech stack</span>
                <span className="flex items-center gap-2 text-xs font-mono text-green-600">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Trusted partners
                </span>
              </div>

              {/* Locations */}
              <div>
                {technologies.map((tech, index) => (
                  <div
                    key={tech.name}
                    className={`px-6 py-5 border-b border-foreground/5 last:border-b-0 flex items-center justify-between transition-all duration-300 ${
                      activeLocation === index ? "bg-foreground/[0.02]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span 
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          activeLocation === index ? "bg-foreground" : "bg-foreground/20"
                        }`}
                      />
                      <div>
                        <div className="font-medium">{tech.name}</div>
                        <div className="text-sm text-muted-foreground">{tech.note}</div>
                      </div>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">Trusted</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
