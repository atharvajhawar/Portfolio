"use client";

import { motion } from "framer-motion";
import {
  SiCplusplus, SiPython, SiReact, SiNodedotjs, SiJavascript,
  SiMongodb, SiDocker, SiSolana, SiDjango, SiFlask, SiTailwindcss,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const techs = [
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Solana", icon: SiSolana, color: "#9945FF" },
  { name: "Django", icon: SiDjango, color: "#44B78B" },
  { name: "Flask", icon: SiFlask, color: "#ffffff" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
];

const doubled = [...techs, ...techs];

export default function TechMarquee() {
  return (
    <section style={{ padding: "48px 0", overflow: "hidden", background: "#0a0a0f" }}>
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <p style={{ fontSize: 14, color: "#52525b", textTransform: "uppercase", letterSpacing: 3, fontWeight: 600 }}>
          Technologies I Work With
        </p>
      </div>

      <div style={{ position: "relative", overflow: "hidden", maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ display: "flex", gap: 32, width: "max-content" }}
        >
          {doubled.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div
                key={`${tech.name}-${i}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 20px",
                  borderRadius: 12,
                  border: "1px solid #1a1a2e",
                  background: "rgba(26,26,46,0.2)",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                <Icon size={20} color={tech.color} />
                <span style={{ fontSize: 14, color: "#a1a1aa", fontWeight: 500 }}>{tech.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
