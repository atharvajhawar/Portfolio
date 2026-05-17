"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaBuilding, FaIndustry, FaCode } from "react-icons/fa";

const companies = [
  {
    name: "Turbo Chat",
    role: "Software Developer",
    period: "2024 – Present",
    icon: FaBuilding,
    gradient: "linear-gradient(180deg, #00d4ff, #0088cc)",
  },
  {
    name: "Hindustan Unilever Limited",
    role: "Tech Intern",
    period: "2024",
    icon: FaIndustry,
    gradient: "linear-gradient(180deg, #7c3aed, #5b21b6)",
  },
  {
    name: "E-sutra Private Limited",
    role: "Software Developer Intern",
    period: "2023 – 2024",
    icon: FaCode,
    gradient: "linear-gradient(180deg, #14b8a6, #0d9488)",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as [number, number, number, number] } },
};

export default function TrustedBy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ padding: "80px 0" }}>
      <div className="section-wrapper">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Heading */}
          <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 700, marginBottom: 10 }}>
              Trusted <span className="gradient-text">By</span>
            </h2>
            <p style={{ color: "#a1a1aa", fontSize: 14 }}>Companies I&apos;ve Worked With</p>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {companies.map((company, i) => {
              const Icon = company.icon;
              return (
                <motion.div
                  key={company.name}
                  variants={fadeUp}
                  whileHover={{ y: -6, borderColor: "#3f3f46" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    position: "relative",
                    padding: "28px 24px",
                    borderRadius: 16,
                    border: "1px solid #27272a",
                    background: "rgba(26,26,46,0.2)",
                    cursor: "default",
                    overflow: "hidden",
                    transition: "border-color 0.3s",
                  }}
                >
                  {/* Left gradient border */}
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: 3,
                      background: company.gradient,
                      borderRadius: "16px 0 0 16px",
                    }}
                  />

                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        background: "rgba(26,26,46,0.6)",
                        border: "1px solid #27272a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={22} color="#a1a1aa" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: 16, fontWeight: 600, color: "#e4e4e7", marginBottom: 4 }}>
                        {company.name}
                      </h3>
                      <p style={{ fontSize: 13, color: "#00d4ff", marginBottom: 2 }}>{company.role}</p>
                      <p style={{ fontSize: 12, color: "#71717a" }}>{company.period}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
