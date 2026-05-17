"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    label: "Frontend",
    detail: "React, HTML, CSS, Tailwind",
    percent: 85,
    gradient: "linear-gradient(90deg, #00d4ff, #06b6d4)",
  },
  {
    label: "Backend",
    detail: "Node.js, Python, Django, Flask",
    percent: 90,
    gradient: "linear-gradient(90deg, #22c55e, #10b981)",
  },
  {
    label: "Database",
    detail: "MongoDB, SQLite",
    percent: 80,
    gradient: "linear-gradient(90deg, #f59e0b, #eab308)",
  },
  {
    label: "DevOps",
    detail: "Docker, Jenkins, AWS",
    percent: 70,
    gradient: "linear-gradient(90deg, #7c3aed, #a855f7)",
  },
  {
    label: "Blockchain",
    detail: "Solana, Web3.js",
    percent: 75,
    gradient: "linear-gradient(90deg, #9945FF, #14F195)",
  },
  {
    label: "Data Analysis",
    detail: "Power BI, CRM",
    percent: 65,
    gradient: "linear-gradient(90deg, #ec4899, #f43f5e)",
  },
];

export default function SkillRadar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ padding: "100px 0" }}>
      <div className="section-wrapper">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Skill <span className="gradient-text">Proficiency</span>
          </h2>
          <div
            style={{
              width: 80,
              height: 4,
              background: "linear-gradient(90deg, #00d4ff, #7c3aed)",
              margin: "0 auto",
              borderRadius: 4,
            }}
          />
          <p
            style={{
              color: "#a1a1aa",
              marginTop: 16,
              fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
            }}
          >
            Areas of expertise and proficiency levels
          </p>
        </motion.div>

        {/* Bars */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: 750,
            margin: "0 auto",
          }}
        >
          {skillCategories.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Label row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: 8,
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#e4e4e7",
                    }}
                  >
                    {skill.label}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      color: "#a1a1aa",
                      marginLeft: 10,
                    }}
                  >
                    {skill.detail}
                  </span>
                </div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.6 }}
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#e4e4e7",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {skill.percent}%
                </motion.span>
              </div>

              {/* Bar track */}
              <div
                style={{
                  position: "relative",
                  height: 12,
                  borderRadius: 8,
                  background: "rgba(26,26,46,0.5)",
                  border: "1px solid #27272a",
                  overflow: "hidden",
                }}
              >
                {/* Animated fill */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.percent}%` } : {}}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.1 + 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  style={{
                    height: "100%",
                    borderRadius: 8,
                    background: skill.gradient,
                    position: "relative",
                  }}
                >
                  {/* Shine effect */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "50%",
                      background:
                        "linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)",
                      borderRadius: "8px 8px 0 0",
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
