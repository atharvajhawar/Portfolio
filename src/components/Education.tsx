"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const education = [
  { institution: "Medicaps University", degree: "Bachelor of Information Technology", period: "Aug 2019 — May 2023", location: "Indore, M.P.", grade: "GPA: 7.99 / 10", icon: FaGraduationCap },
  { institution: "St Joseph's Convent Sr. Sec. School", degree: "Senior Secondary (12th)", period: "2018 — 2019", location: "Khandwa, M.P.", grade: "62.0%", icon: FaSchool },
  { institution: "St Joseph's Convent Sr. Sec. School", degree: "Secondary (10th)", period: "2016 — 2017", location: "Khandwa, M.P.", grade: "GPA: 7.8 / 10", icon: FaSchool },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ padding: "100px 0" }}>
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 16 }}>
            <span className="gradient-text">Education</span>
          </h2>
          <div style={{ width: 80, height: 4, background: "linear-gradient(90deg, #00d4ff, #7c3aed)", margin: "0 auto", borderRadius: 4 }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {education.map((edu, i) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={edu.degree + edu.period}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -4, boxShadow: "0 10px 40px rgba(0,212,255,0.08)" }}
                style={{
                  padding: 32,
                  borderRadius: 16,
                  border: "1px solid #27272a",
                  background: "rgba(26,26,46,0.3)",
                  textAlign: "center",
                }}
              >
                <div style={{ display: "inline-flex", padding: 16, borderRadius: "50%", background: "rgba(0,212,255,0.1)", marginBottom: 20 }}>
                  <Icon size={28} color="#00d4ff" />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#e4e4e7", marginBottom: 8 }}>{edu.institution}</h3>
                <p style={{ fontSize: 14, color: "#00d4ff", fontWeight: 500, marginBottom: 12 }}>{edu.degree}</p>
                <p style={{ fontSize: 13, color: "#a1a1aa", marginBottom: 4 }}>{edu.period}</p>
                <p style={{ fontSize: 13, color: "#a1a1aa", marginBottom: 16 }}>{edu.location}</p>
                <span style={{ display: "inline-block", padding: "6px 18px", borderRadius: 999, background: "rgba(124,58,237,0.1)", color: "#a78bfa", fontSize: 14, fontWeight: 600 }}>
                  {edu.grade}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
