"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaDownload, FaFilePdf } from "react-icons/fa";

export default function ResumeDownload() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ padding: "80px 0" }}>
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 24,
            border: "1px solid rgba(0,212,255,0.2)",
            background: "linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(124,58,237,0.08) 100%)",
            padding: "60px 40px",
            textAlign: "center",
          }}
        >
          {/* Decorative gradient orbs */}
          <div
            style={{
              position: "absolute",
              top: -60,
              right: -60,
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -40,
              left: -40,
              width: 160,
              height: 160,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              display: "inline-flex",
              padding: 16,
              borderRadius: "50%",
              background: "rgba(0,212,255,0.1)",
              marginBottom: 24,
            }}
          >
            <FaFilePdf size={28} color="#00d4ff" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "#e4e4e7",
              marginBottom: 12,
            }}
          >
            Download My{" "}
            <span className="gradient-text">Resume</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              fontSize: 16,
              color: "#a1a1aa",
              marginBottom: 32,
              maxWidth: 440,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Get a detailed overview of my experience and skills
          </motion.p>

          <motion.a
            href="/Atharva_Jhawar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "16px 36px",
              borderRadius: 14,
              background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
              color: "#fff",
              fontSize: 16,
              fontWeight: 600,
              textDecoration: "none",
              cursor: "pointer",
              border: "none",
              overflow: "hidden",
            }}
          >
            {/* Shimmer overlay */}
            <motion.div
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "50%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                pointerEvents: "none",
              }}
            />
            <FaDownload size={16} />
            Download Resume
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            style={{
              fontSize: 13,
              color: "#52525b",
              marginTop: 16,
            }}
          >
            PDF &middot; 91 KB
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
