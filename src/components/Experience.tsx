"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    company: "Turbo Chat",
    role: "Software Developer",
    period: "December 2024 — Present",
    location: "Remote, India",
    type: "Full-time",
    points: [
      "Develop and maintain backend systems for messaging platforms",
      "Leverage Python, Node.js, and AWS for scalability serving millions of users",
      "Build robust APIs and cohesive user experiences from ideation to deployment",
      "Collaborate with product managers and frontend developers on new features",
    ],
    tech: ["Python", "Node.js", "AWS", "APIs"],
  },
  {
    company: "Hindustan Unilever Limited",
    role: "Trailblazer Trainee",
    period: "July 2023 — November 2024",
    location: "Indore, India",
    type: "Full-time",
    points: [
      "Optimized data collection methods for accuracy and efficiency in reporting",
      "Acquired proficiency in Power BI and CRM tools through self-guided learning",
      "Conducted analysis on internal data, identifying key problems and insights",
    ],
    tech: ["Power BI", "CRM", "Data Analysis"],
  },
  {
    company: "E-sutra Private Limited",
    role: "Web Developer",
    period: "January 2023 — March 2023",
    location: "Indore, India",
    type: "Internship",
    points: [
      "Built websites using HTML, CSS, JavaScript, and jQuery",
      "Enhanced UX with responsive web design and performance optimization",
      "Developed custom web applications with tailored solutions for clients",
    ],
    tech: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ padding: "100px 0" }}>
      <div className="section-wrapper" style={{ maxWidth: 800 }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 16 }}>
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div style={{ width: 80, height: 4, background: "linear-gradient(90deg, #00d4ff, #7c3aed)", margin: "0 auto", borderRadius: 4 }} />
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: 40 }}>
          {/* Line */}
          <div style={{ position: "absolute", left: 11, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, #00d4ff, #7c3aed, transparent)" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                style={{ position: "relative" }}
              >
                {/* Dot */}
                <div className="animate-pulse-glow" style={{ position: "absolute", left: -34, top: 24, width: 12, height: 12, borderRadius: "50%", background: "linear-gradient(135deg, #00d4ff, #7c3aed)", border: "3px solid #0a0a0f" }} />

                <motion.div
                  whileHover={{ y: -3, boxShadow: "0 10px 40px rgba(0,212,255,0.08)" }}
                  transition={{ duration: 0.3 }}
                  style={{
                    padding: 24,
                    borderRadius: 16,
                    border: "1px solid #27272a",
                    background: "rgba(26,26,46,0.3)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                    <div>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e4e4e7", marginBottom: 4 }}>{exp.role}</h3>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#00d4ff", fontWeight: 600, fontSize: 14 }}>
                        <FaBriefcase size={12} /> {exp.company}
                      </div>
                    </div>
                    <span style={{ padding: "4px 14px", fontSize: 12, borderRadius: 999, border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff", background: "rgba(0,212,255,0.05)" }}>
                      {exp.type}
                    </span>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 16, fontSize: 13, color: "#a1a1aa", marginBottom: 16 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}><FaCalendarAlt size={11} /> {exp.period}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}><FaMapMarkerAlt size={11} /> {exp.location}</span>
                  </div>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                    {exp.points.map((p, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: "#a1a1aa" }}>
                        <span style={{ color: "#00d4ff", marginTop: 4, fontSize: 10 }}>&#9654;</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {exp.tech.map((t) => (
                      <span key={t} style={{ padding: "4px 12px", fontSize: 12, borderRadius: 6, background: "rgba(0,212,255,0.05)", color: "#00d4ff", border: "1px solid rgba(0,212,255,0.2)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
