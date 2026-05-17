"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const roles = [
  {
    company: "Turbo Chat",
    role: "Software Developer",
    period: "Dec 2024 — Present",
    highlight: "Backend systems for messaging platforms serving millions of users",
    color: "#00d4ff",
  },
  {
    company: "Hindustan Unilever",
    role: "Trailblazer Trainee",
    period: "Jul 2023 — Nov 2024",
    highlight: "Data analysis with Power BI and CRM for enterprise reporting",
    color: "#7c3aed",
  },
  {
    company: "E-sutra Pvt Ltd",
    role: "Web Developer",
    period: "Jan — Mar 2023",
    highlight: "Responsive websites and custom web apps for clients",
    color: "#f472b6",
  },
];

export default function ExperiencePreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ padding: "100px 0", background: "#0d0d14" }}>
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: 12 }}>
            Where I&apos;ve <span className="gradient-text">Worked</span>
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: 15 }}>Companies and roles that shaped my career</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {roles.map((role, i) => (
            <motion.div
              key={role.company}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -4, boxShadow: `0 10px 40px ${role.color}10` }}
              style={{
                padding: 24,
                borderRadius: 16,
                border: "1px solid #27272a",
                background: "rgba(26,26,46,0.3)",
                borderLeft: `3px solid ${role.color}`,
                transition: "all 0.3s",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#e4e4e7" }}>{role.company}</h3>
                <span style={{ fontSize: 12, color: "#52525b", whiteSpace: "nowrap" }}>{role.period}</span>
              </div>
              <p style={{ fontSize: 14, color: role.color, fontWeight: 600, marginBottom: 10 }}>{role.role}</p>
              <p style={{ fontSize: 13, color: "#a1a1aa", lineHeight: 1.6 }}>{role.highlight}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          style={{ textAlign: "center", marginTop: 36 }}
        >
          <Link href="/experience" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, color: "#00d4ff", textDecoration: "none", fontWeight: 600 }}>
            View Full Experience <FaArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
