"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCalendarAlt, FaCodeBranch, FaServer, FaUsers } from "react-icons/fa";

const stats = [
  { icon: FaCalendarAlt, value: "2+", label: "Years in Industry", sub: "Dec 2022 — Present", color: "#00d4ff" },
  { icon: FaServer, value: "50+", label: "APIs Deployed", sub: "REST & WebSocket", color: "#7c3aed" },
  { icon: FaUsers, value: "1M+", label: "Users Impacted", sub: "Turbo Chat platform", color: "#f472b6" },
  { icon: FaCodeBranch, value: "500+", label: "Commits Made", sub: "Across all projects", color: "#14b8a6" },
];

export default function ExperienceStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ padding: "80px 0", background: "linear-gradient(180deg, rgba(8,8,16,0.9) 0%, rgba(12,12,22,0.95) 100%)" }}>
      <div className="section-wrapper">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, borderColor: `${s.color}40` }}
                style={{
                  padding: 24, borderRadius: 16, border: "1px solid #27272a",
                  background: `linear-gradient(135deg, ${s.color}06, transparent)`,
                  textAlign: "center", cursor: "default", transition: "all 0.3s",
                }}
              >
                <Icon size={22} color={s.color} style={{ marginBottom: 12 }} />
                <div className="gradient-text" style={{ fontSize: 30, fontWeight: 800, marginBottom: 4 }}>{s.value}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#e4e4e7", marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 12, color: "#52525b" }}>{s.sub}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
