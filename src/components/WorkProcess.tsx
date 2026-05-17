"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaSearch, FaPencilRuler, FaCode, FaRocket } from "react-icons/fa";

const steps = [
  {
    icon: FaSearch,
    step: "01",
    title: "Discover",
    desc: "Understand requirements, goals, and constraints. Research the problem space.",
    color: "#00d4ff",
  },
  {
    icon: FaPencilRuler,
    step: "02",
    title: "Design",
    desc: "Plan architecture, choose the right tech stack, and prototype the solution.",
    color: "#7c3aed",
  },
  {
    icon: FaCode,
    step: "03",
    title: "Develop",
    desc: "Write clean, scalable code. Build features iteratively with continuous testing.",
    color: "#f472b6",
  },
  {
    icon: FaRocket,
    step: "04",
    title: "Deploy",
    desc: "Ship to production, monitor performance, and iterate based on feedback.",
    color: "#14b8a6",
  },
];

export default function WorkProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ padding: "100px 0", background: "linear-gradient(180deg, rgba(8,8,16,0.9) 0%, rgba(12,12,22,0.95) 100%)", position: "relative", overflow: "hidden" }}>
      {/* Background decoration */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 500, height: 500, background: "radial-gradient(circle, rgba(0,212,255,0.03) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="section-wrapper" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: 12 }}>
            How I <span className="gradient-text">Work</span>
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: 15 }}>My development process from idea to launch</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                style={{
                  padding: 28,
                  borderRadius: 20,
                  border: "1px solid #27272a",
                  background: "rgba(26,26,46,0.2)",
                  textAlign: "center",
                  position: "relative",
                  transition: "all 0.3s",
                  cursor: "default",
                }}
              >
                {/* Step number */}
                <div style={{ position: "absolute", top: 14, right: 18, fontSize: 48, fontWeight: 900, color: `${s.color}08`, lineHeight: 1 }}>
                  {s.step}
                </div>

                <div style={{ display: "inline-flex", padding: 14, borderRadius: "50%", background: `${s.color}12`, marginBottom: 18, border: `1px solid ${s.color}20` }}>
                  <Icon size={22} color={s.color} />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#e4e4e7", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "#a1a1aa", lineHeight: 1.7 }}>{s.desc}</p>

                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block" style={{ position: "absolute", top: "50%", right: -12, width: 24, height: 2, background: `linear-gradient(90deg, ${s.color}40, transparent)` }} />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
