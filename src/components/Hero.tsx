"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import Image from "next/image";
import { HiArrowDown } from "react-icons/hi";

const socials = [
  { icon: FaGithub, href: "https://github.com/atharvajhawar", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/atharvajhawarcareergpt", label: "LinkedIn" },
  { icon: FaEnvelope, href: "mailto:atharvjhawar30@gmail.com", label: "Email" },
  { icon: FaPhone, href: "tel:+919131713467", label: "Phone" },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-grid"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "0 24px" }}
    >
      {/* Gradient orbs */}
      <div className="animate-float" style={{ position: "absolute", top: "20%", left: "15%", width: 300, height: 300, background: "rgba(0,212,255,0.06)", borderRadius: "50%", filter: "blur(80px)" }} />
      <div className="animate-float" style={{ position: "absolute", bottom: "20%", right: "15%", width: 300, height: 300, background: "rgba(124,58,237,0.06)", borderRadius: "50%", filter: "blur(80px)", animationDelay: "3s" }} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        style={{ position: "relative", zIndex: 10, maxWidth: 700, margin: "0 auto", textAlign: "center" }}
      >
        {/* Logo */}
        <motion.div variants={item} style={{ marginBottom: 24, display: "flex", justifyContent: "center" }}>
          <Image src={process.env.NODE_ENV === "production" ? "/Portfolio/logo.png" : "/logo.png"} alt="Atharva Jhawar Logo" width={120} height={120} style={{ borderRadius: 20, objectFit: "contain", filter: "drop-shadow(0 0 24px rgba(0,212,255,0.2))" }} />
        </motion.div>

        {/* Status */}
        <motion.div variants={item} style={{ marginBottom: 32 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 18px", borderRadius: 999, border: "1px solid #27272a", background: "rgba(26,26,46,0.5)", backdropFilter: "blur(8px)" }}>
            <span className="animate-pulse" style={{ width: 8, height: 8, background: "#4ade80", borderRadius: "50%", display: "inline-block" }} />
            <span style={{ fontSize: 14, color: "#a1a1aa" }}>Available for opportunities</span>
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={item} style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 800, marginBottom: 16, lineHeight: 1.15 }}>
          Hi, I&apos;m <span className="gradient-text">Atharva Jhawar</span>
        </motion.h1>

        {/* Typed role */}
        <motion.div variants={item} style={{ fontSize: "clamp(1.1rem, 3vw, 1.5rem)", color: "#a1a1aa", marginBottom: 28, height: 36 }}>
          <TypeAnimation
            sequence={["Software Developer", 2000, "Full Stack Engineer", 2000, "Blockchain Enthusiast", 2000, "Problem Solver", 2000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Bio */}
        <motion.p variants={item} style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "#a1a1aa", maxWidth: 550, margin: "0 auto 36px", lineHeight: 1.7 }}>
          Building scalable applications with modern tech. From backend systems
          serving millions to blockchain trading bots — I turn ideas into
          production-ready solutions.
        </motion.p>

        {/* Social icons */}
        <motion.div variants={item} style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 36 }}>
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                whileHover={{ scale: 1.15, borderColor: "rgba(0,212,255,0.5)" }}
                whileTap={{ scale: 0.95 }}
                style={{ padding: 12, borderRadius: "50%", border: "1px solid #27272a", background: "rgba(26,26,46,0.5)", color: "#a1a1aa", display: "flex", transition: "color 0.3s" }}
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div variants={item} style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(0,212,255,0.3)" }}
            whileTap={{ scale: 0.97 }}
            style={{ padding: "12px 32px", borderRadius: 999, background: "linear-gradient(135deg, #00d4ff, #7c3aed)", color: "white", fontWeight: 600, fontSize: 14, textDecoration: "none" }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, borderColor: "rgba(0,212,255,0.5)" }}
            whileTap={{ scale: 0.97 }}
            style={{ padding: "12px 32px", borderRadius: 999, border: "1px solid #27272a", color: "#e4e4e7", fontWeight: 500, fontSize: 14, textDecoration: "none", transition: "all 0.3s" }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#highlights"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="animate-bounce"
        style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", color: "#a1a1aa" }}
      >
        <HiArrowDown size={24} />
      </motion.a>
    </section>
  );
}
