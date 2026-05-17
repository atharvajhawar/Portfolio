"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaLanguage,
  FaLightbulb,
  FaLaptopCode,
  FaGamepad,
  FaHandshake,
  FaClock,
} from "react-icons/fa";

const infoItems = [
  {
    icon: FaLanguage,
    label: "Languages Spoken",
    value: "Hindi, English",
    borderColor: "#00d4ff",
  },
  {
    icon: FaLightbulb,
    label: "Interests",
    value: "Blockchain, AI, Open Source",
    borderColor: "#f59e0b",
  },
  {
    icon: FaLaptopCode,
    label: "Work Style",
    value: "Remote-first, Agile",
    borderColor: "#22c55e",
  },
  {
    icon: FaGamepad,
    label: "Hobbies",
    value: "Gaming, Learning new tech, Music",
    borderColor: "#a855f7",
  },
  {
    icon: FaHandshake,
    label: "Available For",
    value: "Full-time, Freelance, Collaboration",
    borderColor: "#7c3aed",
  },
  {
    icon: FaClock,
    label: "Timezone",
    value: "IST (UTC+5:30)",
    borderColor: "#ec4899",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0, 0, 0.2, 1] as [number, number, number, number],
    },
  },
};

export default function PersonalInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ padding: "100px 0" }}>
      <div className="section-wrapper">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Personal <span className="gradient-text">Info</span>
          </h2>
          <div
            style={{
              width: 80,
              height: 4,
              background: "linear-gradient(90deg, #00d4ff, #7c3aed)",
              margin: "0 auto",
              borderRadius: 4,
            }}
          />
          <p
            style={{
              color: "#a1a1aa",
              marginTop: 16,
              fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
            }}
          >
            A little more about who I am beyond the code
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 18,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {infoItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={cardVariant}
                whileHover={{
                  y: -4,
                  boxShadow: `0 8px 32px ${item.borderColor}12`,
                  borderColor: `${item.borderColor}50`,
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "20px 22px",
                  borderRadius: 14,
                  border: "1px solid #27272a",
                  borderLeft: `4px solid ${item.borderColor}`,
                  background: "rgba(26,26,46,0.25)",
                  cursor: "default",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
              >
                {/* Icon container */}
                <div
                  style={{
                    flexShrink: 0,
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `${item.borderColor}12`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={18} color={item.borderColor} />
                </div>

                {/* Text */}
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#a1a1aa",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: 4,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      color: "#e4e4e7",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
