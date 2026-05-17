"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

const projects = [
  {
    emoji: "\uD83D\uDCF1",
    title: "Chat Aggregator",
    description:
      "An iOS application that aggregates messages from multiple chat platforms into a single unified inbox for seamless communication.",
    tech: ["iOS", "Swift", "UIKit", "REST APIs"],
    gradient: "linear-gradient(135deg, #00d4ff, #0ea5e9)",
  },
  {
    emoji: "\uD83E\uDD16",
    title: "Solana Trading Bot",
    description:
      "Automated trading bot for the Solana blockchain that executes trades based on real-time market data and custom strategies.",
    tech: ["Python", "Solana", "Web3", "Async"],
    gradient: "linear-gradient(135deg, #7c3aed, #a855f7)",
  },
  {
    emoji: "\uD83D\uDCAC",
    title: "Real-Chat App",
    description:
      "A real-time chat application with instant messaging, typing indicators, read receipts, and group conversation support.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    gradient: "linear-gradient(135deg, #14b8a6, #22c55e)",
  },
  {
    emoji: "\uD83C\uDFE5",
    title: "Health Prediction",
    description:
      "Machine learning powered health prediction system that analyzes patient data to predict potential health risks and outcomes.",
    tech: ["Django", "Python", "ML", "Scikit-learn"],
    gradient: "linear-gradient(135deg, #f59e0b, #f472b6)",
  },
];

export default function ProjectCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isInView]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const project = projects[current];

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
            Project <span className="gradient-text">Showcase</span>
          </h2>
          <p style={{ color: "#52525b", fontSize: 14 }}>
            A quick tour through some of my work
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            position: "relative",
            maxWidth: 640,
            marginLeft: "auto",
            marginRight: "auto",
            minHeight: 300,
          }}
        >
          {/* Slide container */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 20,
              border: "1px solid #27272a",
              background: "rgba(26,26,46,0.2)",
              minHeight: 280,
            }}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ padding: "36px 32px" }}
              >
                {/* Gradient accent bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: project.gradient,
                    borderRadius: "20px 20px 0 0",
                  }}
                />

                <div style={{ fontSize: 40, marginBottom: 16 }}>
                  {project.emoji}
                </div>

                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#e4e4e7",
                    marginBottom: 12,
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: 15,
                    color: "#a1a1aa",
                    lineHeight: 1.6,
                    marginBottom: 20,
                  }}
                >
                  {project.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "5px 14px",
                        borderRadius: 999,
                        border: "1px solid #27272a",
                        background: "rgba(26,26,46,0.4)",
                        fontSize: 12,
                        color: "#a1a1aa",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              marginTop: 24,
            }}
          >
            {/* Dots */}
            <div style={{ display: "flex", gap: 8 }}>
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    borderRadius: 999,
                    border: "none",
                    background:
                      i === current
                        ? "linear-gradient(90deg, #00d4ff, #7c3aed)"
                        : "#27272a",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    padding: 0,
                  }}
                />
              ))}
            </div>

            {/* Counter */}
            <span style={{ fontSize: 13, color: "#52525b", fontWeight: 500 }}>
              {current + 1} / {projects.length}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
