"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCoffee, FaTerminal, FaMusic, FaGamepad, FaBook, FaPlane } from "react-icons/fa";

const facts = [
  { icon: FaCoffee, text: "Fueled by chai & coffee", color: "#f59e0b" },
  { icon: FaTerminal, text: "Dark mode everything", color: "#00d4ff" },
  { icon: FaMusic, text: "Code with lo-fi beats", color: "#7c3aed" },
  { icon: FaGamepad, text: "Gamer at heart", color: "#14b8a6" },
  { icon: FaBook, text: "Always learning new tech", color: "#f472b6" },
  { icon: FaPlane, text: "Based in India, work globally", color: "#06b6d4" },
];

export default function FunFacts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ padding: "80px 0", background: "linear-gradient(180deg, rgba(8,8,16,0.9) 0%, rgba(12,12,22,0.95) 100%)" }}>
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 700, marginBottom: 10 }}>
            Fun <span className="gradient-text">Facts</span>
          </h2>
          <p style={{ color: "#52525b", fontSize: 14 }}>A little more about me beyond the code</p>
        </motion.div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
          {facts.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.text}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ scale: 1.06, borderColor: `${f.color}50` }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 20px",
                  borderRadius: 999,
                  border: "1px solid #27272a",
                  background: "rgba(26,26,46,0.25)",
                  cursor: "default",
                  transition: "all 0.3s",
                }}
              >
                <Icon size={16} color={f.color} />
                <span style={{ fontSize: 14, color: "#a1a1aa", whiteSpace: "nowrap" }}>{f.text}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
