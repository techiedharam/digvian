"use client";

import { useEffect, useState, useRef } from "react";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-foreground/[0.02] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24 max-w-3xl">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            About us
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We build digital products that move the needle.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Mission */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl lg:text-3xl font-display mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Digvian is an AI-powered digital agency helping startups, businesses, creators, and brands build, automate, and grow their digital presence. We combine premium engineering, strategic thinking, and AI-first approaches to deliver products that matter.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't just build websites or apps — we build growth systems that help our clients reach their ambitions.
            </p>
          </div>

          {/* Right: Services Overview */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl lg:text-3xl font-display mb-6">What We Do</h3>
            <div className="space-y-4">
              {[
                "Website Development — Modern, fast, SEO-friendly sites",
                "SaaS Development — Scalable products for startups",
                "AI Solutions — Chatbots, automation, intelligent systems",
                "Digital Marketing — Growth-focused SEO, paid media, strategy",
                "Branding & UI/UX — Premium brand identity and design",
                "Mobile App Development — Cross-platform apps built for scale",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-foreground mt-2 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pt-24 border-t border-foreground/10">
          {[
            { number: "420+", label: "Projects Delivered" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "50+", label: "Technologies & Tools" },
            { number: "12", label: "Industries Served" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl lg:text-4xl font-display mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
