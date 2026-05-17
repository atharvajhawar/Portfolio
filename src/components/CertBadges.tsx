"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCertificate, FaCheck, FaClock } from "react-icons/fa";

const certifications = [
  {
    title: "Web Development",
    status: "completed" as const,
    year: "2023",
    color: "#00d4ff",
  },
  {
    title: "Python Programming",
    status: "completed" as const,
    year: "2022",
    color: "#7c3aed",
  },
  {
    title: "Blockchain & Web3",
    status: "in-progress" as const,
    year: "",
    color: "#14b8a6",
  },
  {
    title: "Cloud Computing (AWS)",
    status: "in-progress" as const,
    year: "",
    color: "#f59e0b",
  },
];

export default function CertBadges() {
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
            Certifications &{" "}
            <span className="gradient-text">Learning</span>
          </h2>
          <p style={{ color: "#52525b", fontSize: 14 }}>
            Continuous learning is part of who I am
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {certifications.map((cert, i) => {
            const isCompleted = cert.status === "completed";
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  scale: 1.04,
                  borderColor: `${cert.color}40`,
                }}
                style={{
                  padding: 28,
                  borderRadius: 20,
                  border: "1px solid #27272a",
                  background: `linear-gradient(135deg, ${cert.color}06, transparent)`,
                  textAlign: "center",
                  cursor: "default",
                  transition: "all 0.3s",
                }}
              >
                {/* Badge icon */}
                <div
                  style={{
                    display: "inline-flex",
                    padding: 14,
                    borderRadius: "50%",
                    background: `${cert.color}12`,
                    marginBottom: 18,
                    position: "relative",
                  }}
                >
                  <FaCertificate size={24} color={cert.color} />
                  {/* Status indicator */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: -2,
                      right: -2,
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: isCompleted ? "#22c55e" : "#f59e0b",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "2px solid #06060c",
                    }}
                  >
                    {isCompleted ? (
                      <FaCheck size={10} color="#fff" />
                    ) : (
                      <FaClock size={10} color="#fff" />
                    )}
                  </div>
                </div>

                {/* Title */}
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#e4e4e7",
                    marginBottom: 8,
                  }}
                >
                  {cert.title}
                </div>

                {/* Status label */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "4px 14px",
                    borderRadius: 999,
                    background: isCompleted
                      ? "rgba(34,197,94,0.1)"
                      : "rgba(245,158,11,0.1)",
                    fontSize: 12,
                    fontWeight: 500,
                    color: isCompleted ? "#22c55e" : "#f59e0b",
                  }}
                >
                  {isCompleted ? "Completed" : "In Progress"}
                  {cert.year && (
                    <span style={{ color: "#52525b" }}>&middot; {cert.year}</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
