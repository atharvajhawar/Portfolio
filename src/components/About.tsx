"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as [number, number, number, number] } },
};

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Technologies", value: "15+" },
  { label: "Companies Worked", value: "3" },
];

const details = [
  { icon: FaMapMarkerAlt, text: "Khandwa, Madhya Pradesh, India" },
  { icon: FaGraduationCap, text: "B.Tech IT — Medicaps University (7.99 GPA)" },
  { icon: FaBriefcase, text: "Software Developer @ Turbo Chat" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ padding: "100px 0" }}>
      <div className="section-wrapper">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Heading */}
          <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 16 }}>
              About <span className="gradient-text">Me</span>
            </h2>
            <div style={{ width: 80, height: 4, background: "linear-gradient(90deg, #00d4ff, #7c3aed)", margin: "0 auto", borderRadius: 4 }} />
          </motion.div>

          {/* Stats row */}
          <motion.div variants={fadeUp} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16, marginBottom: 56 }}>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  padding: "28px 20px",
                  borderRadius: 16,
                  border: "1px solid #27272a",
                  background: "rgba(26,26,46,0.4)",
                  textAlign: "center",
                  cursor: "default",
                }}
              >
                <div className="gradient-text" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 6 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 13, color: "#a1a1aa" }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bio */}
          <motion.div variants={fadeUp} style={{ maxWidth: 700, margin: "0 auto 48px", textAlign: "center" }}>
            <p style={{ color: "#a1a1aa", fontSize: "clamp(0.95rem, 2vw, 1.05rem)", lineHeight: 1.8, marginBottom: 20 }}>
              I&apos;m a <span style={{ color: "#00d4ff", fontWeight: 600 }}>Software Developer</span> with
              a strong foundation in Information Technology. I specialize in
              building robust backend systems and full-stack applications using
              modern technologies.
            </p>
            <p style={{ color: "#a1a1aa", fontSize: "clamp(0.95rem, 2vw, 1.05rem)", lineHeight: 1.8 }}>
              Currently at <span style={{ color: "#00d4ff", fontWeight: 600 }}>Turbo Chat</span>,
              I develop and maintain backend systems for messaging platforms
              serving millions of users. My experience spans from enterprise
              data analysis at <span style={{ color: "#00d4ff", fontWeight: 600 }}>Hindustan Unilever</span> to
              building automated trading bots on the Solana blockchain.
            </p>
          </motion.div>

          {/* Detail cards */}
          <motion.div variants={fadeUp} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 14, maxWidth: 850, margin: "0 auto" }}>
            {details.map((d) => {
              const Icon = d.icon;
              return (
                <motion.div
                  key={d.text}
                  whileHover={{ borderColor: "rgba(0,212,255,0.3)" }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "16px 20px",
                    borderRadius: 12,
                    border: "1px solid #27272a",
                    background: "rgba(26,26,46,0.25)",
                    transition: "border-color 0.3s",
                  }}
                >
                  <div style={{ flexShrink: 0, padding: 10, borderRadius: 10, background: "rgba(0,212,255,0.1)" }}>
                    <Icon size={16} color="#00d4ff" />
                  </div>
                  <span style={{ fontSize: 14, color: "#a1a1aa" }}>{d.text}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
