"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaServer, FaLaptopCode, FaCubes, FaChartLine } from "react-icons/fa";

const services = [
  {
    icon: FaLaptopCode,
    title: "Full Stack Development",
    desc: "End-to-end web applications using React, Node.js, and modern frameworks — from UI to database.",
    color: "#00d4ff",
    gradient: "linear-gradient(135deg, #00d4ff20, #00d4ff05)",
  },
  {
    icon: FaServer,
    title: "Backend & API Development",
    desc: "Scalable REST APIs, microservices, and server-side systems built with Python, Node.js, and AWS.",
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed20, #7c3aed05)",
  },
  {
    icon: FaCubes,
    title: "Blockchain Solutions",
    desc: "Smart contracts, trading bots, and Web3 integrations on Solana using Web3.js and DeFi protocols.",
    color: "#9945FF",
    gradient: "linear-gradient(135deg, #9945FF20, #9945FF05)",
  },
  {
    icon: FaChartLine,
    title: "Data Analysis & BI",
    desc: "Transform raw data into actionable insights using Power BI dashboards and analytical workflows.",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b20, #f59e0b05)",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ padding: "100px 0" }}>
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: 12 }}>
            What I <span className="gradient-text">Do</span>
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: 15, maxWidth: 480, margin: "0 auto" }}>
            Services and expertise I bring to every project
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: `0 16px 48px ${s.color}15` }}
                style={{
                  padding: 28,
                  borderRadius: 20,
                  border: "1px solid #27272a",
                  background: s.gradient,
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s",
                  cursor: "default",
                }}
              >
                {/* Corner glow */}
                <div style={{ position: "absolute", top: -30, right: -30, width: 100, height: 100, background: `${s.color}08`, borderRadius: "50%", filter: "blur(30px)" }} />

                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ display: "inline-flex", padding: 14, borderRadius: 14, background: `${s.color}15`, marginBottom: 20, border: `1px solid ${s.color}20` }}>
                    <Icon size={24} color={s.color} />
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e4e4e7", marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
