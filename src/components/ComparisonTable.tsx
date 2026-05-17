"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const rows = [
  { category: "Response Time", me: "24 hours", avg: "3-5 days" },
  { category: "Code Quality", me: "Production-ready", avg: "Varies" },
  { category: "Communication", me: "Daily updates", avg: "Weekly" },
  { category: "Tech Stack", me: "Full-stack + Blockchain", avg: "Frontend only" },
  { category: "Cost Efficiency", me: "Competitive", avg: "Premium" },
  { category: "Availability", me: "Flexible hours", avg: "9-5 only" },
];

export default function ComparisonTable() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ padding: "80px 0" }}>
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 700,
              marginBottom: 12,
            }}
          >
            Why Choose <span className="gradient-text">Me</span>
          </h2>
          <p style={{ color: "#52525b", fontSize: 14 }}>
            How I compare to the industry average
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            borderRadius: 20,
            border: "1px solid #27272a",
            overflow: "hidden",
            background: "rgba(26,26,46,0.2)",
          }}
        >
          {/* Header row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr 1fr",
              padding: "18px 28px",
              borderBottom: "1px solid #27272a",
              background: "rgba(26,26,46,0.4)",
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 600, color: "#52525b", textTransform: "uppercase", letterSpacing: 1 }}>
              Category
            </span>
            <span style={{ fontSize: 14, fontWeight: 600, color: "#00d4ff", textTransform: "uppercase", letterSpacing: 1, textAlign: "center" }}>
              With Me
            </span>
            <span style={{ fontSize: 14, fontWeight: 600, color: "#52525b", textTransform: "uppercase", letterSpacing: 1, textAlign: "center" }}>
              Industry Avg
            </span>
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <motion.div
              key={row.category}
              initial={{ opacity: 0, x: -15 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1.4fr 1fr 1fr",
                padding: "16px 28px",
                borderBottom: i < rows.length - 1 ? "1px solid #27272a" : "none",
                background: i % 2 === 0 ? "transparent" : "rgba(26,26,46,0.15)",
                transition: "background 0.2s",
              }}
            >
              <span style={{ fontSize: 15, fontWeight: 500, color: "#e4e4e7" }}>
                {row.category}
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  fontSize: 14,
                  color: "#22c55e",
                  fontWeight: 500,
                }}
              >
                <FaCheck size={12} color="#22c55e" />
                {row.me}
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  fontSize: 14,
                  color: "#52525b",
                }}
              >
                <FaTimes size={12} color="#52525b" />
                {row.avg}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
