"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaRocket,
  FaCode,
  FaCubes,
  FaUsers,
  FaSchool,
  FaBookOpen,
} from "react-icons/fa";

const milestones = [
  {
    year: "2017",
    title: "Completed 10th Standard",
    description: "Secured 7.8 GPA, building a strong academic foundation.",
    icon: FaSchool,
    color: "#06b6d4",
  },
  {
    year: "2019",
    title: "Completed 12th Standard",
    description: "Scored 62%, transitioning towards higher education.",
    icon: FaBookOpen,
    color: "#22c55e",
  },
  {
    year: "2019",
    title: "Started B.Tech IT",
    description:
      "Enrolled at Medicaps University, beginning the journey into Information Technology.",
    icon: FaGraduationCap,
    color: "#a855f7",
  },
  {
    year: "2023",
    title: "Graduated & Joined E-sutra",
    description:
      "Completed B.Tech with 7.99 GPA. Joined E-sutra as a Web Developer, building responsive client solutions.",
    icon: FaCode,
    color: "#00d4ff",
  },
  {
    year: "2023",
    title: "Hindustan Unilever",
    description:
      "Joined HUL as a Trailblazer Trainee, working on data analysis with Power BI and CRM tools.",
    icon: FaBriefcase,
    color: "#f59e0b",
  },
  {
    year: "2024",
    title: "Solana Blockchain Projects",
    description:
      "Built automated trading bots and explored decentralized applications on the Solana blockchain.",
    icon: FaCubes,
    color: "#9945FF",
  },
  {
    year: "2024",
    title: "Joined Turbo Chat",
    description:
      "Started as a Software Developer, building backend systems for messaging platforms.",
    icon: FaRocket,
    color: "#7c3aed",
  },
  {
    year: "Present",
    title: "Building at Scale",
    description:
      "Developing and maintaining scalable systems serving millions of users worldwide.",
    icon: FaUsers,
    color: "#00d4ff",
  },
];

export default function Journey() {
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
            My <span className="gradient-text">Journey</span>
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
            From academics to building products at scale
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative", maxWidth: 700, margin: "0 auto" }}>
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: 23,
              top: 0,
              bottom: 0,
              width: 2,
              background:
                "linear-gradient(to bottom, #00d4ff, #7c3aed, transparent)",
              transformOrigin: "top",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 32,
              paddingLeft: 60,
            }}
          >
            {milestones.map((milestone, i) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={`${milestone.year}-${milestone.title}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  style={{ position: "relative" }}
                >
                  {/* Animated dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.12 + 0.2,
                      type: "spring",
                      stiffness: 300,
                    }}
                    style={{
                      position: "absolute",
                      left: -48,
                      top: 18,
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${milestone.color}, ${milestone.color}88)`,
                      border: "3px solid #0a0a0f",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 0 16px ${milestone.color}40`,
                      zIndex: 2,
                    }}
                  >
                    <Icon size={10} color="#0a0a0f" />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -3,
                      boxShadow: `0 10px 40px ${milestone.color}12`,
                      borderColor: `${milestone.color}40`,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      padding: "20px 24px",
                      borderRadius: 16,
                      border: "1px solid #27272a",
                      background: "rgba(26,26,46,0.3)",
                      cursor: "default",
                    }}
                  >
                    {/* Year badge */}
                    <span
                      style={{
                        display: "inline-block",
                        padding: "3px 12px",
                        fontSize: 12,
                        fontWeight: 600,
                        borderRadius: 999,
                        background: `${milestone.color}15`,
                        color: milestone.color,
                        border: `1px solid ${milestone.color}30`,
                        marginBottom: 10,
                      }}
                    >
                      {milestone.year}
                    </span>

                    <h3
                      style={{
                        fontSize: 17,
                        fontWeight: 700,
                        color: "#e4e4e7",
                        marginBottom: 6,
                      }}
                    >
                      {milestone.title}
                    </h3>

                    <p
                      style={{
                        fontSize: 14,
                        color: "#a1a1aa",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {milestone.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
