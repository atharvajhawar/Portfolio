"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaBolt, FaCircle } from "react-icons/fa";

const activities = [
  {
    status: "live",
    title: "Turbo Chat Backend",
    desc: "Building messaging APIs handling millions of real-time connections",
    tech: "Python · Node.js · AWS",
  },
  {
    status: "building",
    title: "Solana Trading Bot v2",
    desc: "Upgrading meme coin bot with ML-based token analysis filters",
    tech: "Python · Solana · Machine Learning",
  },
  {
    status: "learning",
    title: "System Design & Architecture",
    desc: "Deep-diving into distributed systems and microservice patterns",
    tech: "Architecture · Design Patterns",
  },
];

const statusConfig: Record<string, { label: string; color: string }> = {
  live: { label: "LIVE", color: "#4ade80" },
  building: { label: "BUILDING", color: "#f59e0b" },
  learning: { label: "LEARNING", color: "#00d4ff" },
};

export default function CurrentlyBuilding() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ padding: "100px 0", background: "linear-gradient(180deg, rgba(8,8,16,0.9) 0%, rgba(12,12,22,0.95) 100%)" }}>
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <FaBolt size={18} color="#f59e0b" />
            <span style={{ fontSize: 14, color: "#f59e0b", fontWeight: 600, textTransform: "uppercase", letterSpacing: 2 }}>Currently</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: 12 }}>
            What I&apos;m <span className="gradient-text">Working On</span>
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 700, margin: "0 auto" }}>
          {activities.map((a, i) => {
            const status = statusConfig[a.status];
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ x: 4, borderColor: `${status.color}40` }}
                style={{
                  padding: "20px 24px",
                  borderRadius: 16,
                  border: "1px solid #27272a",
                  background: "rgba(26,26,46,0.25)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  transition: "all 0.3s",
                  cursor: "default",
                }}
              >
                <div style={{ marginTop: 4 }}>
                  <FaCircle size={8} color={status.color} className={a.status === "live" ? "animate-pulse" : ""} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e4e4e7" }}>{a.title}</h3>
                    <span style={{ padding: "2px 10px", fontSize: 10, fontWeight: 700, borderRadius: 999, background: `${status.color}15`, color: status.color, letterSpacing: 1 }}>
                      {status.label}
                    </span>
                  </div>
                  <p style={{ fontSize: 14, color: "#a1a1aa", marginBottom: 6 }}>{a.desc}</p>
                  <p style={{ fontSize: 12, color: "#52525b" }}>{a.tech}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
