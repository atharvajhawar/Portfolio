"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase, FaCode, FaBuilding, FaLaptopCode } from "react-icons/fa";

const stats = [
  { icon: FaBriefcase, value: "2+", label: "Years Experience", color: "#00d4ff" },
  { icon: FaCode, value: "15+", label: "Technologies", color: "#7c3aed" },
  { icon: FaBuilding, value: "3", label: "Companies", color: "#f472b6" },
  { icon: FaLaptopCode, value: "10+", label: "Projects Built", color: "#14b8a6" },
];

export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} style={{ padding: "60px 0", background: "linear-gradient(180deg, rgba(8,8,16,0.9) 0%, rgba(12,12,22,0.95) 100%)", borderTop: "1px solid #1a1a2e", borderBottom: "1px solid #1a1a2e" }}>
      <div className="section-wrapper">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 24 }}>
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "center" }}
              >
                <div style={{ padding: 12, borderRadius: 12, background: `${stat.color}15` }}>
                  <Icon size={22} color={stat.color} />
                </div>
                <div>
                  <div className="gradient-text" style={{ fontSize: 28, fontWeight: 800, lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ fontSize: 13, color: "#a1a1aa", marginTop: 2 }}>{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
