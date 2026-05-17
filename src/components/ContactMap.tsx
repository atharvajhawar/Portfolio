"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaClock, FaGlobeAsia, FaCalendarCheck, FaHandshake } from "react-icons/fa";

const items = [
  { icon: FaGlobeAsia, title: "Location", value: "Khandwa, M.P., India", color: "#00d4ff" },
  { icon: FaClock, title: "Timezone", value: "IST (UTC +5:30)", color: "#7c3aed" },
  { icon: FaCalendarCheck, title: "Availability", value: "Open for work", color: "#4ade80" },
  { icon: FaHandshake, title: "Preferred", value: "Remote / Hybrid", color: "#f59e0b" },
];

export default function ContactMap() {
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
            Availability <span className="gradient-text">& Location</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -3, borderColor: `${item.color}40` }}
                style={{
                  padding: 24, borderRadius: 16, border: "1px solid #27272a",
                  background: "rgba(26,26,46,0.2)", textAlign: "center",
                  cursor: "default", transition: "all 0.3s",
                }}
              >
                <div style={{ display: "inline-flex", padding: 12, borderRadius: "50%", background: `${item.color}12`, marginBottom: 14 }}>
                  <Icon size={20} color={item.color} />
                </div>
                <div style={{ fontSize: 13, color: "#52525b", marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#e4e4e7" }}>{item.value}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
