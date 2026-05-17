"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const codeLines = [
  { text: "const developer = {", color: "#7c3aed" },
  { text: '  name: "Atharva Jhawar",', color: "#14b8a6" },
  { text: '  role: "Software Developer",', color: "#14b8a6" },
  { text: "  skills: [", color: "#7c3aed" },
  { text: '    "React", "Node.js", "Python",', color: "#f59e0b" },
  { text: '    "Solana", "AWS", "Docker"', color: "#f59e0b" },
  { text: "  ],", color: "#7c3aed" },
  { text: '  passion: "Building things that matter",', color: "#14b8a6" },
  { text: "  hireable: true,", color: "#00d4ff" },
  { text: "};", color: "#7c3aed" },
  { text: "", color: "" },
  { text: "// Let's build something amazing 🚀", color: "#52525b" },
];

export default function CodeTerminal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ padding: "80px 0" }}>
      <div className="section-wrapper" style={{ maxWidth: 650, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid #27272a",
            background: "#0d0d14",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
          }}
        >
          {/* Terminal header */}
          <div style={{ padding: "12px 16px", background: "#161622", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid #27272a" }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28ca41" }} />
            <span style={{ marginLeft: 12, fontSize: 13, color: "#52525b", fontFamily: "monospace" }}>atharva.js</span>
          </div>

          {/* Code content */}
          <div style={{ padding: "20px 24px", fontFamily: "'Fira Code', 'Cascadia Code', monospace", fontSize: 14, lineHeight: 1.8 }}>
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                style={{ display: "flex", gap: 16, minHeight: 24 }}
              >
                <span style={{ color: "#3a3a4a", userSelect: "none", minWidth: 24, textAlign: "right", fontSize: 13 }}>
                  {i + 1}
                </span>
                <span style={{ color: line.color || "#e4e4e7" }}>{line.text}</span>
              </motion.div>
            ))}
            {/* Blinking cursor */}
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              style={{ display: "inline-block", width: 8, height: 18, background: "#00d4ff", marginLeft: 40, marginTop: 4, borderRadius: 1 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
