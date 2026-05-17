"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Product Manager",
    company: "Turbo Chat",
    text: "Atharva consistently delivers high-quality backend solutions. His ability to architect scalable APIs while maintaining clean code has been invaluable to our platform.",
    stars: 5,
    color: "#00d4ff",
  },
  {
    name: "Team Lead",
    company: "Hindustan Unilever",
    text: "His self-driven approach to learning Power BI and CRM tools resulted in significantly improved reporting accuracy. A dedicated problem solver.",
    stars: 5,
    color: "#7c3aed",
  },
  {
    name: "Client",
    company: "E-sutra Projects",
    text: "Delivered responsive, pixel-perfect websites on tight deadlines. The custom web applications exceeded our expectations and our clients loved them.",
    stars: 5,
    color: "#f472b6",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ padding: "100px 0", position: "relative" }}>
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: 12 }}>
            What People <span className="gradient-text">Say</span>
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: 15 }}>Feedback from teams I&apos;ve worked with</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -4, boxShadow: `0 12px 40px ${t.color}10` }}
              style={{
                padding: 28,
                borderRadius: 20,
                border: "1px solid #27272a",
                background: "rgba(26,26,46,0.2)",
                position: "relative",
                transition: "all 0.3s",
              }}
            >
              <FaQuoteLeft size={24} style={{ color: t.color, opacity: 0.3, marginBottom: 16 }} />
              <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.8, marginBottom: 20, fontStyle: "italic" }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: "flex", gap: 3, marginBottom: 12 }}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <FaStar key={j} size={14} color="#f59e0b" />
                ))}
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#e4e4e7" }}>{t.name}</div>
                <div style={{ fontSize: 13, color: t.color }}>{t.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
