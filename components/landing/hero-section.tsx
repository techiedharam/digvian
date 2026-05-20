"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const words = ["websites", "AI solutions", "SaaS products", "growth systems"];

const stats = [
  { value: "420+", label: "Projects delivered" },
  { value: "98%", label: "Client satisfaction" },
  { value: "50+", label: "Technologies" },
  { value: "12", label: "Industries served" },
];

const clients = ["Lumen Health", "Orbit Analytics", "Nova Retail", "Pioneer Labs"];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen max-h-screen flex flex-col items-center justify-between overflow-hidden bg-[#fafaf8]">

      {/* ── Grid lines ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px left-0 right-0"
            style={{ top: `${12.5 * (i + 1)}%`, background: "rgba(0,0,0,0.07)" }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px top-0 bottom-0"
            style={{ left: `${8.33 * (i + 1)}%`, background: "rgba(0,0,0,0.07)" }}
          />
        ))}

        {/* Warm center radial bloom — lifts hero off the grid */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 65% at 50% 44%, rgba(255,252,245,1) 0%, rgba(250,250,248,0.85) 45%, transparent 100%)",
          }}
        />

        {/* Concentric rings */}
        <div
          className="absolute rounded-full border border-black/[0.06]"
          style={{ width: 460, height: 460, top: "50%", left: "50%", transform: "translate(-50%, -56%)" }}
        />
        <div
          className="absolute rounded-full border border-black/[0.04]"
          style={{ width: 700, height: 700, top: "50%", left: "50%", transform: "translate(-50%, -56%)" }}
        />
        <div
          className="absolute rounded-full border border-black/[0.025]"
          style={{ width: 960, height: 960, top: "50%", left: "50%", transform: "translate(-50%, -56%)" }}
        />

        {/* Corner marks */}
        <div className="absolute top-6 left-6 w-5 h-5 border-t border-l border-black/20" />
        <div className="absolute top-6 right-6 w-5 h-5 border-t border-r border-black/20" />
        <div className="absolute bottom-[72px] left-6 w-5 h-5 border-b border-l border-black/20" />
        <div className="absolute bottom-[72px] right-6 w-5 h-5 border-b border-r border-black/20" />
      </div>

      {/* ── Center content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full px-6 text-center">

        {/* Eyebrow */}
        <div
          className={`mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="inline-flex items-center gap-2.5 border border-black/[0.1] bg-white/70 rounded-full px-4 py-1.5 text-[11px] font-mono tracking-[0.6px] text-black/50 uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
            AI-powered agency — startups &amp; growth teams
          </span>
        </div>

        {/* Headline */}
        <div
          className={`mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1
            className="font-display tracking-tight leading-[0.88]"
            style={{ fontSize: "clamp(2.8rem, 7.5vw, 8rem)" }}
          >
            {/* Top line — visible but muted */}
            <span className="block font-light" style={{ color: "rgba(0,0,0,0.28)" }}>
              We build
            </span>

            {/* Hero word — full black */}
            <span className="block relative text-black">
              <span
                key={wordIndex}
                style={{ display: "inline-flex", animation: "wordIn 0.3s ease both" }}
              >
                {words[wordIndex].split("").map((char, i) => (
                  <span
                    key={`${wordIndex}-${i}`}
                    className="inline-block"
                    style={{
                      animation: "charIn 0.42s cubic-bezier(0.22,1,0.36,1) both",
                      animationDelay: `${i * 32}ms`,
                    }}
                  >
                    {char === " " ? "\u00a0" : char}
                  </span>
                ))}
              </span>
              {/* Underline accent */}
              <span
                className="absolute left-1/2 -translate-x-1/2 rounded-full"
                style={{
                  bottom: "-4px",
                  height: "4px",
                  width: "100%",
                  background:
                    "linear-gradient(90deg, transparent, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.18) 50%, rgba(0,0,0,0.1) 80%, transparent)",
                }}
              />
            </span>

            {/* Bottom line — even more muted */}
            <span className="block font-light" style={{ color: "rgba(0,0,0,0.18)" }}>
              for the web.
            </span>
          </h1>
        </div>

        {/* Description */}
        <p
          className={`text-[15px] lg:text-[16px] leading-[1.72] max-w-[420px] mb-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ color: "rgba(0,0,0,0.48)" }}
        >
          Digvian designs and ships{" "}
          <span style={{ color: "rgba(0,0,0,0.78)", fontWeight: 500 }}>premium websites</span>,
          SaaS products, and{" "}
          <span style={{ color: "rgba(0,0,0,0.78)", fontWeight: 500 }}>AI-driven growth systems</span>
          {" "}— fast, reliable, focused on ROI.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-3 mb-7 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            size="lg"
            className="bg-black hover:bg-black/82 text-white px-7 h-11 text-[13.5px] font-medium rounded-full shadow-none group"
          >
            Book a Free Call
            <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-11 px-7 text-[13.5px] rounded-full border-black/[0.14] shadow-none"
            style={{ color: "rgba(0,0,0,0.58)" }}
          >
            Start Your Project
          </Button>
        </div>

        {/* Trusted by */}
        <div
          className={`flex items-center gap-2 flex-wrap justify-center transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-[11px] font-mono tracking-wide" style={{ color: "rgba(0,0,0,0.28)" }}>
            Trusted by
          </span>
          {clients.map((name, i) => (
            <span key={name} className="flex items-center gap-2">
              {i > 0 && (
                <span
                  className="w-0.5 h-0.5 rounded-full inline-block"
                  style={{ background: "rgba(0,0,0,0.18)" }}
                />
              )}
              <span className="text-[11px] font-mono tracking-wide" style={{ color: "rgba(0,0,0,0.42)" }}>
                {name}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Stats bar — pinned to bottom ── */}
      <div
        className={`relative z-10 w-full border-t transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ borderColor: "rgba(0,0,0,0.08)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div
            className="flex items-stretch divide-x"
            style={{ ["--tw-divide-opacity" as string]: 1, borderColor: "rgba(0,0,0,0.08)" }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex-1 flex flex-col items-center justify-center py-4 gap-0.5"
              >
                <span
                  className="text-[20px] lg:text-[23px] font-semibold tracking-tight leading-none text-black"
                >
                  {stat.value}
                </span>
                <span
                  className="text-[10.5px] tracking-wide mt-0.5"
                  style={{ color: "rgba(0,0,0,0.38)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}

            {/* Status dot */}
            <div className="hidden lg:flex items-center justify-center px-7 gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span
                className="text-[10px] font-mono whitespace-nowrap"
                style={{ color: "rgba(0,0,0,0.3)" }}
              >
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes charIn {
          from { opacity: 0; transform: translateY(12px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes wordIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </section>
  );
}