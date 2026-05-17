"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { FaGithub, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Solana Meme Coin Trading Bot",
    description: "Automated trading bot for Solana blockchain — fetches new meme coins via DexScreener API with smart filters on liquidity and age.",
    tech: ["Python", "Solana", "Web3.js", "Flask"],
    github: "https://github.com/atharvajhawar",
    gradientFrom: "#9945FF",
    gradientTo: "#14F195",
    emoji: "🤖",
  },
  {
    title: "Real-Chat App",
    description: "Real-time messaging app with chat rooms, private messaging, message history, and JWT authentication.",
    tech: ["MongoDB", "React", "Node.js", "Socket.io"],
    github: "https://github.com/atharvajhawar",
    gradientFrom: "#00d4ff",
    gradientTo: "#7c3aed",
    emoji: "💬",
  },
];

export default function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ padding: "100px 0" }}>
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: 12 }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: 15 }}>Some things I&apos;ve built recently</p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4, boxShadow: "0 12px 48px rgba(0,212,255,0.08)" }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                borderRadius: 20,
                border: "1px solid #27272a",
                background: "rgba(26,26,46,0.25)",
                overflow: "hidden",
                transition: "box-shadow 0.3s",
              }}
            >
              {/* Gradient top bar */}
              <div style={{ height: 4, background: `linear-gradient(90deg, ${project.gradientFrom}, ${project.gradientTo})` }} />

              <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ fontSize: 36 }}>{project.emoji}</span>
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: "#e4e4e7" }}>{project.title}</h3>
                  </div>
                </div>

                <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.7, maxWidth: 600 }}>
                  {project.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {project.tech.map((t) => (
                    <span key={t} style={{ padding: "5px 14px", fontSize: 12, borderRadius: 8, background: "rgba(0,212,255,0.06)", color: "#00d4ff", border: "1px solid rgba(0,212,255,0.15)" }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 16, marginTop: 4 }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, color: "#a1a1aa", textDecoration: "none" }}>
                    <FaGithub size={16} /> View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          style={{ textAlign: "center", marginTop: 36 }}
        >
          <Link href="/projects" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, color: "#00d4ff", textDecoration: "none", fontWeight: 600 }}>
            View All Projects <FaArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
