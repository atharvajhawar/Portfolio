"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiCplusplus, SiC, SiPython, SiHtml5, SiCss, SiReact, SiPhp,
  SiNodedotjs, SiJavascript, SiMongodb, SiSqlite, SiDocker,
  SiJenkins, SiSolana, SiWeb3Dotjs, SiJquery, SiExpress,
  SiTailwindcss, SiFlask, SiDjango,
} from "react-icons/si";
import { FaAws, FaChartBar } from "react-icons/fa";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "jQuery", icon: SiJquery, color: "#0769AD" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Django", icon: SiDjango, color: "#44B78B" },
      { name: "Flask", icon: SiFlask, color: "#ffffff" },
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "SQLite", icon: SiSqlite, color: "#44A8D6" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
      { name: "Power BI", icon: FaChartBar, color: "#F2C811" },
    ],
  },
  {
    title: "Blockchain",
    skills: [
      { name: "Solana", icon: SiSolana, color: "#9945FF" },
      { name: "Web3.js", icon: SiWeb3Dotjs, color: "#F16822" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ padding: "100px 0", background: "linear-gradient(180deg, rgba(8,8,16,0.9) 0%, rgba(12,12,22,0.95) 100%)" }}>
      <div className="section-wrapper">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 16 }}>
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div style={{ width: 80, height: 4, background: "linear-gradient(90deg, #00d4ff, #7c3aed)", margin: "0 auto", borderRadius: 4 }} />
          <p style={{ color: "#a1a1aa", marginTop: 16, fontSize: "clamp(0.95rem, 2vw, 1.05rem)" }}>Technologies I work with</p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              className="card-hover"
              style={{
                padding: 24,
                borderRadius: 16,
                border: "1px solid #27272a",
                background: "rgba(26,26,46,0.3)",
              }}
            >
              <h3 style={{ fontSize: 15, fontWeight: 600, color: "#00d4ff", marginBottom: 16 }}>
                {cat.title}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {cat.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.08, borderColor: "rgba(0,212,255,0.3)" }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "8px 14px",
                        borderRadius: 10,
                        background: "rgba(10,10,15,0.6)",
                        border: "1px solid #27272a",
                        cursor: "default",
                        transition: "border-color 0.3s",
                      }}
                    >
                      <Icon size={16} color={skill.color} />
                      <span style={{ fontSize: 13, color: "#a1a1aa" }}>{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
