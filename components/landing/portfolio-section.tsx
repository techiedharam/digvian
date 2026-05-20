"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const works = [
  {
    number: "01",
    title: "Nexous LLC",
    description: "A technology and business solutions company website focused on helping businesses with digital transformation, software solutions, automation, and business growth strategies.",
    category: "Business Solutions",
    link: "https://www.nexousallc.com/",
  },
  {
    number: "02",
    title: "Beebot AI",
    description: "An AI-powered platform showcasing intelligent automation and AI-driven solutions designed to help organizations improve workflows, automate tasks, and enhance digital interactions using AI agents.",
    category: "AI SaaS Product",
    link: "https://beebot-ai.vercel.app/",
  },
  {
    number: "03",
    title: "Arushi NGO",
    description: "A non-profit organization website presenting mission, projects, and impact focused on social welfare, community support, awareness programs, and NGO activities/outreach.",
    category: "Non-profit",
    link: "https://arushi-ngo-frontend.vercel.app/",
  },
  {
    number: "04",
    title: "The Bone Clinic",
    description: "A specialized healthcare platform developed through private engagement, demonstrating our expertise in building secure, scalable solutions for the medical industry.",
    category: "Healthcare",
    link: "#",
  },
  {
    number: "05",
    title: "Gayatri Computer Charitable Trust",
    description: "An NGO platform for free digital education and skill development, helping economically weaker students learn technology and communication skills for better career opportunities. Offering courses in basic/advanced computer training, Python, Tally, Advanced Excel, and spoken English.",
    category: "Educational NGO",
    link: "https://gayatricomputercharitabletrust.org/",
  },
];

function WorkCard({ work, index }: { work: typeof works[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <a href={work.link} target={work.link !== "#" ? "_blank" : undefined} rel={work.link !== "#" ? "noopener noreferrer" : undefined}>
      <div
        ref={cardRef}
        className={`group relative transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="flex flex-col gap-4 p-6 lg:p-8 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300">
          {/* Number and Link */}
          <div className="flex items-start justify-between">
            <span className="font-mono text-sm text-muted-foreground">{work.number}</span>
            {work.link !== "#" && (
              <ArrowUpRight className="w-5 h-5 text-foreground/40 group-hover:text-foreground transition-all transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            )}
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-display mb-2 group-hover:translate-x-1 transition-transform duration-300">
              {work.title}
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {work.description}
            </p>
            <span className="inline-block px-3 py-1 text-xs font-mono bg-foreground/5 border border-foreground/10 rounded text-muted-foreground">
              {work.category}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

export function PortfolioSection() {
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
      id="portfolio"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Works
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Selected projects we've delivered.
            <br />
            <span className="text-muted-foreground">Diverse industries, measurable impact.</span>
          </h2>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {works.map((work, index) => (
            <WorkCard key={work.number} work={work} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
