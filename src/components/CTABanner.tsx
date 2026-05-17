"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ padding: "100px 0" }}>
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            padding: "56px 40px",
            borderRadius: 24,
            background: "linear-gradient(135deg, rgba(0,212,255,0.08), rgba(124,58,237,0.08))",
            border: "1px solid rgba(0,212,255,0.15)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background glow */}
          <div style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, background: "rgba(0,212,255,0.06)", borderRadius: "50%", filter: "blur(60px)" }} />
          <div style={{ position: "absolute", bottom: -50, left: -50, width: 200, height: 200, background: "rgba(124,58,237,0.06)", borderRadius: "50%", filter: "blur(60px)" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 700, marginBottom: 16, color: "#e4e4e7" }}
            >
              Interested in working together?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{ fontSize: 15, color: "#a1a1aa", maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.7 }}
            >
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to bring your vision to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginBottom: 28 }}
            >
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(0,212,255,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "13px 32px",
                    borderRadius: 999,
                    background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                    color: "white",
                    fontWeight: 600,
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                >
                  <FaEnvelope size={15} /> Let&apos;s Talk
                </motion.span>
              </Link>

              <a href="mailto:atharvjhawar30@gmail.com">
                <motion.span
                  whileHover={{ scale: 1.05, borderColor: "rgba(0,212,255,0.5)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "13px 32px",
                    borderRadius: 999,
                    border: "1px solid #27272a",
                    color: "#e4e4e7",
                    fontWeight: 500,
                    fontSize: 14,
                    cursor: "pointer",
                    transition: "border-color 0.3s",
                  }}
                >
                  Send Email
                </motion.span>
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              style={{ display: "flex", justifyContent: "center", gap: 12 }}
            >
              {[
                { icon: FaGithub, href: "https://github.com/atharvajhawar" },
                { icon: FaLinkedin, href: "https://linkedin.com/in/atharvajhawarcareergpt" },
                { icon: FaEnvelope, href: "mailto:atharvjhawar30@gmail.com" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    style={{ padding: 10, borderRadius: 10, border: "1px solid #27272a", color: "#a1a1aa", display: "flex", transition: "all 0.3s" }}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
