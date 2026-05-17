"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaRocket, FaShieldAlt, FaClock, FaUsers, FaLightbulb, FaCogs } from "react-icons/fa";

const advantages = [
  {
    icon: FaRocket,
    title: "Scalable Solutions",
    desc: "Building systems that handle millions of users — backend architecture designed for growth.",
    color: "#00d4ff",
  },
  {
    icon: FaShieldAlt,
    title: "Production-Ready Code",
    desc: "Clean, tested, and maintainable code deployed across real-world products.",
    color: "#7c3aed",
  },
  {
    icon: FaClock,
    title: "Fast Delivery",
    desc: "Agile workflow with rapid prototyping to production — delivering results on time.",
    color: "#14b8a6",
  },
  {
    icon: FaUsers,
    title: "Team Collaboration",
    desc: "Experience working cross-functionally with PMs, designers, and frontend engineers.",
    color: "#f472b6",
  },
  {
    icon: FaLightbulb,
    title: "Full Stack Expertise",
    desc: "Frontend to backend to blockchain — I cover the entire stack with confidence.",
    color: "#f59e0b",
  },
  {
    icon: FaCogs,
    title: "DevOps Aware",
    desc: "Docker, Jenkins, AWS — comfortable with CI/CD pipelines and cloud deployment.",
    color: "#06b6d4",
  },
];

export default function Advantages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ padding: "100px 0", background: "linear-gradient(180deg, rgba(8,8,16,0.9) 0%, rgba(12,12,22,0.95) 100%)", position: "relative", overflow: "hidden" }}>
      {/* Decorative bg elements */}
      <div style={{ position: "absolute", top: 60, right: -40, width: 250, height: 250, background: "rgba(0,212,255,0.03)", borderRadius: "50%", filter: "blur(80px)" }} />
      <div style={{ position: "absolute", bottom: 60, left: -40, width: 250, height: 250, background: "rgba(124,58,237,0.03)", borderRadius: "50%", filter: "blur(80px)" }} />

      <div className="section-wrapper" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: 12 }}>
            Why <span className="gradient-text">Choose Me</span>
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: 15, maxWidth: 500, margin: "0 auto" }}>
            What I bring to the table
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {advantages.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, borderColor: `${adv.color}40` }}
                style={{
                  padding: 28,
                  borderRadius: 16,
                  border: "1px solid #27272a",
                  background: "rgba(26,26,46,0.25)",
                  transition: "all 0.3s",
                  cursor: "default",
                }}
              >
                <div style={{ display: "inline-flex", padding: 12, borderRadius: 12, background: `${adv.color}12`, marginBottom: 16 }}>
                  <Icon size={22} color={adv.color} />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#e4e4e7", marginBottom: 8 }}>{adv.title}</h3>
                <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.7 }}>{adv.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
