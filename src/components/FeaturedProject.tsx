"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaApple, FaRobot, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiSwift, SiOpenai } from "react-icons/si";

const aiTools = [
  { name: "ChatGPT", color: "#10a37f" },
  { name: "Gemini", color: "#4285F4" },
  { name: "Claude", color: "#d97706" },
  { name: "Perplexity", color: "#20B2AA" },
  { name: "More...", color: "#7c3aed" },
];

export default function FeaturedProject() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ padding: "100px 0 40px" }}>
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Pinned label */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <span style={{
              padding: "4px 12px", fontSize: 11, fontWeight: 700, borderRadius: 999, letterSpacing: 1,
              background: "linear-gradient(135deg, rgba(250,115,67,0.15), rgba(250,115,67,0.05))",
              color: "#FA7343", border: "1px solid rgba(250,115,67,0.25)",
              textTransform: "uppercase",
            }}>
              ⭐ Featured Project
            </span>
            <span style={{
              padding: "4px 12px", fontSize: 11, fontWeight: 700, borderRadius: 999, letterSpacing: 1,
              background: "rgba(0,212,255,0.08)", color: "#00d4ff", border: "1px solid rgba(0,212,255,0.2)",
            }}>
              iOS App
            </span>
          </div>

          {/* Main card */}
          <motion.div
            whileHover={{ y: -4, boxShadow: "0 16px 60px rgba(250,115,67,0.1), 0 0 40px rgba(0,212,255,0.05)" }}
            style={{
              padding: 32,
              borderRadius: 24,
              border: "1px solid rgba(250,115,67,0.2)",
              background: "linear-gradient(135deg, rgba(250,115,67,0.04), rgba(26,26,46,0.3), rgba(0,212,255,0.02))",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.4s",
            }}
          >
            {/* Top gradient bar */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #FA7343, #00d4ff, #7c3aed)" }} />

            {/* Background glow */}
            <div style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, background: "rgba(250,115,67,0.04)", borderRadius: "50%", filter: "blur(60px)", pointerEvents: "none" }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              {/* Header row */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{
                    padding: 14, borderRadius: 16,
                    background: "linear-gradient(135deg, rgba(250,115,67,0.15), rgba(250,115,67,0.05))",
                    border: "1px solid rgba(250,115,67,0.2)",
                  }}>
                    <FaRobot size={28} color="#FA7343" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 24, fontWeight: 800, color: "#e4e4e7", marginBottom: 4 }}>
                      Chat Aggregator
                    </h3>
                    <p style={{ fontSize: 14, color: "#a1a1aa" }}>
                      Multiple AI tools — one iOS app
                    </p>
                  </div>
                </div>

                {/* Tech badges */}
                <div style={{ display: "flex", gap: 8 }}>
                  <span style={{
                    display: "flex", alignItems: "center", gap: 5, padding: "6px 14px", borderRadius: 999,
                    background: "rgba(250,115,67,0.08)", border: "1px solid rgba(250,115,67,0.2)",
                    fontSize: 13, color: "#FA7343", fontWeight: 600,
                  }}>
                    <SiSwift size={14} /> Swift
                  </span>
                  <span style={{
                    display: "flex", alignItems: "center", gap: 5, padding: "6px 14px", borderRadius: 999,
                    background: "rgba(255,255,255,0.04)", border: "1px solid #27272a",
                    fontSize: 13, color: "#a1a1aa", fontWeight: 500,
                  }}>
                    <FaApple size={14} /> iOS
                  </span>
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: 15, color: "#a1a1aa", lineHeight: 1.8, marginBottom: 24, maxWidth: 700 }}>
                A native iOS application that brings together multiple AI chatbots into one unified interface.
                Instead of switching between apps, users can chat with ChatGPT, Gemini, Claude, and more — all in
                a single, beautifully designed app. Built with Swift & SwiftUI for smooth performance and native iOS experience.
              </p>

              {/* AI tools supported */}
              <div style={{ marginBottom: 24 }}>
                <p style={{ fontSize: 12, color: "#52525b", marginBottom: 10, textTransform: "uppercase", letterSpacing: 1, fontWeight: 600 }}>
                  AI Models Integrated
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {aiTools.map((ai) => (
                    <motion.span
                      key={ai.name}
                      whileHover={{ scale: 1.08, borderColor: `${ai.color}50` }}
                      style={{
                        display: "flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 999,
                        background: `${ai.color}10`, border: `1px solid ${ai.color}25`,
                        fontSize: 13, color: ai.color, fontWeight: 500, cursor: "default", transition: "all 0.3s",
                      }}
                    >
                      <FaRobot size={11} /> {ai.name}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Key features */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginBottom: 24 }}>
                {[
                  "Unified AI chat interface",
                  "Native iOS with SwiftUI",
                  "Switch AI models mid-chat",
                  "Chat history & sync",
                  "Clean minimal design",
                  "Fast & responsive",
                ].map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#a1a1aa" }}>
                    <span style={{ color: "#FA7343", fontSize: 10 }}>&#9654;</span> {f}
                  </div>
                ))}
              </div>

              {/* Timeline */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginBottom: 24 }}>
                <div>
                  <span style={{ fontSize: 11, color: "#52525b" }}>Started</span>
                  <div style={{ fontSize: 14, color: "#e4e4e7", fontWeight: 600 }}>Nov 2025</div>
                </div>
                <div>
                  <span style={{ fontSize: 11, color: "#52525b" }}>Last updated</span>
                  <div style={{ fontSize: 14, color: "#e4e4e7", fontWeight: 600 }}>May 2026</div>
                </div>
                <div>
                  <span style={{ fontSize: 11, color: "#52525b" }}>Status</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, color: "#4ade80", fontWeight: 600 }}>
                    <span className="animate-pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
                    Active Development
                  </div>
                </div>
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: 12 }}>
                <motion.a
                  href="https://github.com/atharvajhawar"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(250,115,67,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: "flex", alignItems: "center", gap: 8, padding: "10px 22px", borderRadius: 10,
                    background: "linear-gradient(135deg, rgba(250,115,67,0.12), rgba(250,115,67,0.05))",
                    border: "1px solid rgba(250,115,67,0.25)", color: "#FA7343", fontSize: 14, fontWeight: 600,
                    textDecoration: "none", transition: "all 0.3s",
                  }}
                >
                  <FaGithub size={16} /> View Code
                </motion.a>
                <motion.a
                  href="https://github.com/atharvajhawar"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: "flex", alignItems: "center", gap: 8, padding: "10px 22px", borderRadius: 10,
                    border: "1px solid #27272a", color: "#a1a1aa", fontSize: 14, fontWeight: 500,
                    textDecoration: "none", transition: "all 0.3s",
                  }}
                >
                  <FaExternalLinkAlt size={13} /> App Store
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
