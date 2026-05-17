"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaTrophy, FaUsers, FaDatabase, FaGlobe } from "react-icons/fa";

const achievements = [
  {
    icon: FaUsers,
    number: "1M+",
    label: "Users Served",
    desc: "Backend systems at Turbo Chat",
    color: "#00d4ff",
  },
  {
    icon: FaDatabase,
    number: "50+",
    label: "APIs Built",
    desc: "RESTful services in production",
    color: "#7c3aed",
  },
  {
    icon: FaTrophy,
    number: "7.99",
    label: "University GPA",
    desc: "B.Tech in Information Technology",
    color: "#f59e0b",
  },
  {
    icon: FaGlobe,
    number: "3",
    label: "Industries",
    desc: "FMCG, Messaging, Web Services",
    color: "#14b8a6",
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ padding: "80px 0" }}>
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: 12 }}>
            Key <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: 20 }}>
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.04, borderColor: `${a.color}40` }}
                style={{
                  padding: 28,
                  borderRadius: 20,
                  border: "1px solid #27272a",
                  background: `linear-gradient(135deg, ${a.color}06, transparent)`,
                  textAlign: "center",
                  cursor: "default",
                  transition: "all 0.3s",
                }}
              >
                <div style={{ display: "inline-flex", padding: 12, borderRadius: "50%", background: `${a.color}12`, marginBottom: 16 }}>
                  <Icon size={22} color={a.color} />
                </div>
                <div className="gradient-text" style={{ fontSize: 32, fontWeight: 800, marginBottom: 4 }}>{a.number}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#e4e4e7", marginBottom: 4 }}>{a.label}</div>
                <div style={{ fontSize: 13, color: "#52525b" }}>{a.desc}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
