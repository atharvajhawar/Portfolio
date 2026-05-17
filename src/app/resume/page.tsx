"use client";

import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";

const experience = [
  { company: "Turbo Chat", role: "Software Developer", period: "Dec 2024 — Present", location: "Remote", points: ["Backend systems for messaging platforms", "Python, Node.js, AWS for scalability", "Built robust APIs for millions of users"] },
  { company: "Hindustan Unilever Limited", role: "Trailblazer Trainee", period: "Jul 2023 — Nov 2024", location: "Indore", points: ["Optimized data collection and reporting", "Power BI and CRM proficiency", "Internal data analysis and insights"] },
  { company: "E-sutra Private Limited", role: "Web Developer", period: "Jan — Mar 2023", location: "Indore", points: ["Built responsive websites with HTML, CSS, JS", "Custom web applications for clients"] },
];

const skills = ["C++", "Python", "JavaScript", "React", "Node.js", "MongoDB", "AWS", "Docker", "Jenkins", "Solana", "Web3.js", "Power BI", "HTML/CSS", "Django", "Flask", "Swift"];

const education = [
  { school: "Medicaps University", degree: "B.Tech Information Technology", year: "2019-2023", grade: "GPA: 7.99/10" },
  { school: "St Joseph's Convent Sr. Sec. School", degree: "12th Standard", year: "2018-2019", grade: "62%" },
];

export default function ResumePage() {
  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ padding: "60px 0" }}>
        <div className="section-wrapper" style={{ maxWidth: 850 }}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: "center", marginBottom: 40 }}
          >
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: 8 }}>
              <span className="gradient-text">Atharva Jhawar</span>
            </h1>
            <p style={{ fontSize: 18, color: "#a1a1aa", marginBottom: 16 }}>Software Developer</p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, marginBottom: 24 }}>
              {[
                { icon: FaEnvelope, text: "atharvjhawar30@gmail.com" },
                { icon: FaPhone, text: "+91-9131713467" },
                { icon: FaMapMarkerAlt, text: "Khandwa, M.P., India" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <span key={item.text} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#a1a1aa" }}>
                    <Icon size={12} color="#00d4ff" /> {item.text}
                  </span>
                );
              })}
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
              <a href="https://github.com/atharvajhawar" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 8, border: "1px solid #27272a", color: "#a1a1aa", fontSize: 13, textDecoration: "none" }}>
                <FaGithub size={14} /> GitHub
              </a>
              <a href="https://linkedin.com/in/atharvajhawarcareergpt" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 8, border: "1px solid #27272a", color: "#a1a1aa", fontSize: 13, textDecoration: "none" }}>
                <FaLinkedin size={14} /> LinkedIn
              </a>
              <a href="/Atharva_Jhawar_Resume.pdf" target="_blank" style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 8, background: "linear-gradient(135deg, #00d4ff, #7c3aed)", color: "white", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
                <FaDownload size={12} /> Download PDF
              </a>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ marginBottom: 40 }}
          >
            <h2 style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 20, fontWeight: 700, color: "#e4e4e7", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid #27272a" }}>
              <FaBriefcase size={18} color="#00d4ff" /> Experience
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {experience.map((exp) => (
                <div key={exp.company} style={{ padding: 20, borderRadius: 14, border: "1px solid #27272a", background: "rgba(26,26,46,0.2)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: 8 }}>
                    <div>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e4e4e7" }}>{exp.role}</h3>
                      <p style={{ fontSize: 14, color: "#00d4ff", fontWeight: 600 }}>{exp.company}</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p style={{ fontSize: 13, color: "#a1a1aa" }}>{exp.period}</p>
                      <p style={{ fontSize: 12, color: "#52525b" }}>{exp.location}</p>
                    </div>
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 4 }}>
                    {exp.points.map((p) => (
                      <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#a1a1aa" }}>
                        <span style={{ color: "#00d4ff", marginTop: 3, fontSize: 8 }}>&#9654;</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ marginBottom: 40 }}
          >
            <h2 style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 20, fontWeight: 700, color: "#e4e4e7", marginBottom: 16, paddingBottom: 10, borderBottom: "1px solid #27272a" }}>
              <FaCode size={18} color="#7c3aed" /> Skills
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {skills.map((s) => (
                <span key={s} style={{ padding: "6px 14px", borderRadius: 8, background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", color: "#00d4ff", fontSize: 13, fontWeight: 500 }}>
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ marginBottom: 40 }}
          >
            <h2 style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 20, fontWeight: 700, color: "#e4e4e7", marginBottom: 16, paddingBottom: 10, borderBottom: "1px solid #27272a" }}>
              <FaGraduationCap size={18} color="#f472b6" /> Education
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {education.map((edu) => (
                <div key={edu.school} style={{ padding: 18, borderRadius: 14, border: "1px solid #27272a", background: "rgba(26,26,46,0.2)", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                  <div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#e4e4e7" }}>{edu.school}</h3>
                    <p style={{ fontSize: 13, color: "#a1a1aa" }}>{edu.degree}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontSize: 13, color: "#a1a1aa" }}>{edu.year}</p>
                    <p style={{ fontSize: 13, color: "#7c3aed", fontWeight: 600 }}>{edu.grade}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Download CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ textAlign: "center", padding: 32, borderRadius: 20, background: "linear-gradient(135deg, rgba(0,212,255,0.06), rgba(124,58,237,0.04))", border: "1px solid rgba(0,212,255,0.15)" }}
          >
            <p style={{ fontSize: 16, color: "#e4e4e7", fontWeight: 600, marginBottom: 12 }}>Want the full details?</p>
            <a href="/Atharva_Jhawar_Resume.pdf" target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", borderRadius: 10, background: "linear-gradient(135deg, #00d4ff, #7c3aed)", color: "white", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
              <FaDownload size={14} /> Download Resume PDF
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
