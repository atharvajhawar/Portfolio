"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGit, FaGithub, FaSlack, FaTrello, FaFigma, FaChrome, FaTerminal, FaLinux, FaNpm } from "react-icons/fa";
import { SiPostman, SiVercel } from "react-icons/si";
import { FaCode } from "react-icons/fa";

const tools = [
  { name: "VS Code", icon: FaCode, color: "#007ACC" },
  { name: "Git", icon: FaGit, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Terminal", icon: FaTerminal, color: "#00d4ff" },
  { name: "Chrome DevTools", icon: FaChrome, color: "#4285F4" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "npm", icon: FaNpm, color: "#CB3837" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  { name: "Linux", icon: FaLinux, color: "#FCC624" },
  { name: "Slack", icon: FaSlack, color: "#4A154B" },
  { name: "Trello", icon: FaTrello, color: "#0079BF" },
];

export default function ToolsIUse() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ padding: "80px 0" }}>
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 700, marginBottom: 10 }}>
            Tools I <span className="gradient-text">Use Daily</span>
          </h2>
          <p style={{ color: "#52525b", fontSize: 14 }}>My everyday development toolkit</p>
        </motion.div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
          {tools.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ scale: 1.1, y: -4, borderColor: `${t.color}50` }}
                style={{
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
                  padding: "16px 20px", borderRadius: 14, border: "1px solid #27272a",
                  background: "rgba(26,26,46,0.2)", cursor: "default", transition: "all 0.3s",
                  minWidth: 90,
                }}
              >
                <Icon size={24} color={t.color} />
                <span style={{ fontSize: 11, color: "#a1a1aa", whiteSpace: "nowrap" }}>{t.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
