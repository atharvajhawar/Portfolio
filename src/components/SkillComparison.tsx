"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const comparisons = [
  { label: "Frontend", self: 85, market: 70, color: "#00d4ff" },
  { label: "Backend", self: 90, market: 65, color: "#7c3aed" },
  { label: "Blockchain", self: 75, market: 30, color: "#9945FF" },
  { label: "DevOps", self: 70, market: 55, color: "#14b8a6" },
  { label: "Data Analysis", self: 65, market: 50, color: "#f59e0b" },
];

export default function SkillComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ padding: "100px 0", background: "linear-gradient(180deg, rgba(8,8,16,0.9) 0%, rgba(12,12,22,0.95) 100%)" }}>
      <div className="section-wrapper" style={{ maxWidth: 750 }}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: 12 }}>
            Me vs <span className="gradient-text">Industry Average</span>
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: 14 }}>How my skills compare to typical developer profiles</p>
        </motion.div>

        {/* Legend */}
        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 12, height: 12, borderRadius: 3, background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }} />
            <span style={{ fontSize: 13, color: "#a1a1aa" }}>My Skills</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 12, height: 12, borderRadius: 3, background: "#27272a" }} />
            <span style={{ fontSize: 13, color: "#52525b" }}>Industry Avg</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {comparisons.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#e4e4e7" }}>{c.label}</span>
                <span style={{ fontSize: 13, color: c.color, fontWeight: 700 }}>{c.self}%</span>
              </div>
              {/* My bar */}
              <div style={{ height: 10, borderRadius: 6, background: "#1a1a2e", marginBottom: 4, overflow: "hidden" }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${c.self}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.1 }}
                  style={{ height: "100%", borderRadius: 6, background: `linear-gradient(90deg, ${c.color}, ${c.color}80)`, boxShadow: `0 0 10px ${c.color}30` }}
                />
              </div>
              {/* Industry avg bar */}
              <div style={{ height: 6, borderRadius: 4, background: "#1a1a2e", overflow: "hidden" }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${c.market}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                  style={{ height: "100%", borderRadius: 4, background: "#27272a" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
