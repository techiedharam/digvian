"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileCheck, Sparkles, Cpu } from "lucide-react";

const securityFeatures = [
  {
    icon: Cpu,
    title: "AI-Powered Solutions",
    description: "Custom AI integrations designed for real users and measurable outcomes.",
    accent: "#3b82f6",
    step: 1,
  },
  {
    icon: Lock,
    title: "Fast Delivery",
    description: "Rapid sprints and predictable timelines without sacrificing quality.",
    accent: "#a855f7",
    step: 2,
  },
  {
    icon: Eye,
    title: "Modern Tech Stack",
    description: "Best-in-class tooling and scalable architecture for long-term growth.",
    accent: "#06b6d4",
    step: 3,
  },
  {
    icon: FileCheck,
    title: "SEO-Friendly Dev",
    description: "Performance and structure built for search visibility and conversion.",
    accent: "#22c55e",
    step: 4,
  },
  {
    icon: Shield,
    title: "Client-Centric",
    description: "Transparent communication, focused on business outcomes and ROI.",
    accent: "#ec4899",
    step: 5,
  },
  {
    icon: Sparkles,
    title: "Full Support",
    description: "Ongoing maintenance, monitoring, and long-term growth partnerships.",
    accent: "#f97316",
    step: 6,
  },
];

const certifications = ["Startup-friendly", "NDAs", "Fixed bids", "SLA options"];

const CARD_SIZE = 220;
const H_ARROW_W = 80; // horizontal arrow cell width
const V_ARROW_H = 80; // vertical arrow cell height

/* ─── Right Arrow → ────────────────────────────────────────── */
function RightArrow({ color }: { color: string }) {
  return (
    <svg
      width="64"
      height="36"
      viewBox="0 0 64 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Static track */}
      <line
        x1="6" y1="18" x2="52" y2="18"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity={0.18}
      />
      {/* Travelling dash */}
      <motion.line
        x1="6" y1="18" x2="52" y2="18"
        stroke={color} strokeWidth="2" strokeLinecap="round"
        strokeDasharray="12 34"
        animate={{ strokeDashoffset: [46, 0] }}
        transition={{ duration: 1.1, ease: "linear", repeat: Infinity }}
        opacity={0.85}
      />
      {/* Arrowhead */}
      <motion.path
        d="M47 11 L55 18 L47 25"
        stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
        animate={{ x: [0, 3, 0] }}
        transition={{ duration: 1.1, ease: "easeInOut", repeat: Infinity }}
        opacity={0.9}
      />
      {/* Origin dot */}
      <motion.circle
        cx="6" cy="18" r="2.5" fill={color}
        animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 1.1, ease: "easeInOut", repeat: Infinity }}
      />
    </svg>
  );
}

/* ─── Left Arrow ← (mirrored Right) ────────────────────────── */
function LeftArrow({ color }: { color: string }) {
  return (
    <svg
      width="64"
      height="36"
      viewBox="0 0 64 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: "scaleX(-1)" }}
      aria-hidden="true"
    >
      <line
        x1="6" y1="18" x2="52" y2="18"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity={0.18}
      />
      <motion.line
        x1="6" y1="18" x2="52" y2="18"
        stroke={color} strokeWidth="2" strokeLinecap="round"
        strokeDasharray="12 34"
        animate={{ strokeDashoffset: [46, 0] }}
        transition={{ duration: 1.1, ease: "linear", repeat: Infinity }}
        opacity={0.85}
      />
      <motion.path
        d="M47 11 L55 18 L47 25"
        stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
        animate={{ x: [0, 3, 0] }}
        transition={{ duration: 1.1, ease: "easeInOut", repeat: Infinity }}
        opacity={0.9}
      />
      <motion.circle
        cx="6" cy="18" r="2.5" fill={color}
        animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 1.1, ease: "easeInOut", repeat: Infinity }}
      />
    </svg>
  );
}

/* ─── Down Arrow ↓ ──────────────────────────────────────────── */
function DownArrow({ color }: { color: string }) {
  return (
    <svg
      width="36"
      height="64"
      viewBox="0 0 36 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Static track */}
      <line
        x1="18" y1="6" x2="18" y2="52"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity={0.18}
      />
      {/* Travelling dash */}
      <motion.line
        x1="18" y1="6" x2="18" y2="52"
        stroke={color} strokeWidth="2" strokeLinecap="round"
        strokeDasharray="12 34"
        animate={{ strokeDashoffset: [46, 0] }}
        transition={{ duration: 1.1, ease: "linear", repeat: Infinity }}
        opacity={0.85}
      />
      {/* Arrowhead pointing down */}
      <motion.path
        d="M11 47 L18 55 L25 47"
        stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
        animate={{ y: [0, 3, 0] }}
        transition={{ duration: 1.1, ease: "easeInOut", repeat: Infinity }}
        opacity={0.9}
      />
      {/* Origin dot at top */}
      <motion.circle
        cx="18" cy="6" r="2.5" fill={color}
        animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 1.1, ease: "easeInOut", repeat: Infinity }}
      />
    </svg>
  );
}

/* ─── Feature Card ──────────────────────────────────────────── */
function FeatureCard({
  feature,
  delay = 0,
}: {
  feature: (typeof securityFeatures)[0];
  delay?: number;
}) {
  return (
    <motion.div
      style={{ width: CARD_SIZE, height: CARD_SIZE }}
      className="group relative rounded-2xl border border-white/10 hover:border-white/25 transition-colors duration-300 overflow-hidden flex flex-col justify-between p-5 bg-[#0d0d0f] cursor-default select-none flex-shrink-0"
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
    >
      {/* Glow blob */}
      <div
        className="absolute -top-8 -left-8 w-32 h-32 rounded-full pointer-events-none"
        style={{ background: feature.accent, opacity: 0.12, filter: "blur(32px)" }}
      />

      {/* Step badge */}
      <div className="flex items-start justify-between">
        <div
          className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10"
          style={{ background: `${feature.accent}20` }}
        >
          <feature.icon className="w-5 h-5" style={{ color: feature.accent }} />
        </div>
        <span
          className="text-[11px] font-mono tabular-nums px-2 py-0.5 rounded-full border"
          style={{
            color: feature.accent,
            borderColor: `${feature.accent}40`,
            background: `${feature.accent}10`,
          }}
        >
          {String(feature.step).padStart(2, "0")}
        </span>
      </div>

      {/* Text */}
      <div className="mt-auto">
        <h3 className="text-[15px] font-semibold tracking-tight text-white mb-1.5 leading-snug">
          {feature.title}
        </h3>
        <p className="text-[12px] text-white/45 leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Bottom accent bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${feature.accent}, transparent)`,
        }}
      />
    </motion.div>
  );
}

/* ─── Arrow Cell wrapper ────────────────────────────────────── */
function HArrowCell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{ width: H_ARROW_W, height: CARD_SIZE }}
      className="flex items-center justify-center flex-shrink-0"
    >
      {children}
    </div>
  );
}

function VArrowCell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{ width: CARD_SIZE, height: V_ARROW_H }}
      className="flex items-center justify-center flex-shrink-0"
    >
      {children}
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────────── */
export function SecuritySection() {
  const f = securityFeatures;

  return (
    <section
      id="why-digvian"
      className="relative w-full py-16 lg:py-24"
      style={{ background: "#080809" }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-14 lg:mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-3 mb-5 justify-center">
            <motion.div
              className="h-px w-8"
              style={{ background: "linear-gradient(90deg, transparent, #ffffff60)" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
            <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-white/40">
              Why Digvian
            </span>
            <motion.div
              className="h-px w-8"
              style={{ background: "linear-gradient(90deg, #ffffff60, transparent)" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </div>

          <h2 className="text-4xl md:text-5xl  tracking-tight text-white mb-3 leading-tight font-sans">
            Why Choose Digvian?
          </h2>
          <p className="text-[15px] text-white/50 max-w-xl leading-relaxed font-sans">
            Premium, AI-first execution that balances speed, quality, and measurable growth.
          </p>

          <div className="flex flex-wrap gap-2 mt-5 justify-center">
            {certifications.map((cert, i) => (
              <motion.span
                key={cert}
                className="px-3 py-1.5 rounded-full border border-white/10 text-[11px] font-sans text-white/50 hover:border-white/25 hover:text-white/70 transition-colors duration-200"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                viewport={{ once: true }}
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>



      {/*
       * Snake Grid Layout
       *
       * Visual flow (step order):
       *
       *  [1: AI-Powered]  →  [2: Fast Delivery]  →  [3: Modern Tech Stack]
       *                                                        ↓
       *  [6: Full Support] ←  [5: Client-Centric]  ← [4: SEO-Friendly Dev]
       *
       * Grid columns: [card] [h-arrow] [card] [h-arrow] [card]
       * Grid rows:    [cards row 1] [v-arrow row] [cards row 2]
       *)
      */}
      <div className="relative z-10 w-full overflow-x-auto">
        <div className="min-w-max mx-auto px-4 lg:px-8">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `${CARD_SIZE}px ${H_ARROW_W}px ${CARD_SIZE}px ${H_ARROW_W}px ${CARD_SIZE}px`,
              gridTemplateRows: `${CARD_SIZE}px ${V_ARROW_H}px ${CARD_SIZE}px`,
              width: "fit-content",
              margin: "0 auto",
            }}
          >
            {/* ── ROW 1: step 1 → step 2 → step 3 ── */}

            {/* [0,0] Card 1 */}
            <FeatureCard feature={f[0]} delay={0} />

            {/* [0,1] Right arrow: 1 → 2 */}
            <HArrowCell>
              <RightArrow color={f[0].accent} />
            </HArrowCell>

            {/* [0,2] Card 2 */}
            <FeatureCard feature={f[1]} delay={0.1} />

            {/* [0,3] Right arrow: 2 → 3 */}
            <HArrowCell>
              <RightArrow color={f[1].accent} />
            </HArrowCell>

            {/* [0,4] Card 3 */}
            <FeatureCard feature={f[2]} delay={0.2} />

            {/* ── ARROW ROW: only column 5 (right side) has a down arrow ── */}

            {/* [1,0] empty col 1 */}
            <div style={{ height: V_ARROW_H }} />

            {/* [1,1] empty col 2 */}
            <div style={{ height: V_ARROW_H }} />

            {/* [1,2] empty col 3 */}
            <div style={{ height: V_ARROW_H }} />

            {/* [1,3] empty col 4 */}
            <div style={{ height: V_ARROW_H }} />

            {/* [1,4] Down arrow: 3 → 4, aligned to right column */}
            <VArrowCell>
              <DownArrow color={f[2].accent} />
            </VArrowCell>

            {/* ── ROW 2 (reversed): step 6 ← step 5 ← step 4 ── */}

            {/* [2,0] Card 6 — sits below Card 1 */}
            <FeatureCard feature={f[5]} delay={0.5} />

            {/* [2,1] Left arrow: 5 → 6 */}
            <HArrowCell>
              <LeftArrow color={f[4].accent} />
            </HArrowCell>

            {/* [2,2] Card 5 — sits below Card 2 */}
            <FeatureCard feature={f[4]} delay={0.4} />

            {/* [2,3] Left arrow: 4 → 5 */}
            <HArrowCell>
              <LeftArrow color={f[3].accent} />
            </HArrowCell>

            {/* [2,4] Card 4 — sits below Card 3 */}
            <FeatureCard feature={f[3]} delay={0.3} />
          </div>
        </div>
      </div>
    </section>
  );
}