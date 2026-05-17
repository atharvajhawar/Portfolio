"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Animated gradient top line — full width */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, height: 3, zIndex: 60,
        background: "linear-gradient(90deg, #00d4ff, #7c3aed, #f472b6, #f59e0b, #14b8a6, #00d4ff)",
        backgroundSize: "300% 100%",
        animation: "borderGlow 3s linear infinite",
      }} />

      {/* Full-width navbar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        style={{
          position: "fixed",
          top: 3,
          left: 0,
          right: 0,
          zIndex: 55,
          background: isScrolled
            ? "rgba(6,6,14,0.88)"
            : "rgba(8,8,18,0.55)",
          backdropFilter: "blur(28px) saturate(2)",
          WebkitBackdropFilter: "blur(28px) saturate(2)",
          borderBottom: "1px solid",
          borderImage: isScrolled
            ? "linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.3) 20%, rgba(124,58,237,0.25) 50%, rgba(244,114,182,0.2) 80%, transparent 100%) 1"
            : "linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.1) 30%, rgba(124,58,237,0.08) 70%, transparent 100%) 1",
          boxShadow: isScrolled
            ? "0 4px 30px rgba(0,0,0,0.5), 0 0 60px rgba(0,212,255,0.04)"
            : "none",
          transition: "all 0.4s",
        }}
      >
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 56,
        }}>
          {/* ---- LOGO ---- */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: 2,
                padding: "5px 16px",
                borderRadius: 10,
                cursor: "pointer",
                background: "linear-gradient(135deg, rgba(0,212,255,0.1), rgba(124,58,237,0.06))",
                border: "1px solid rgba(0,212,255,0.18)",
                boxShadow: "0 0 14px rgba(0,212,255,0.08), inset 0 1px 0 rgba(255,255,255,0.04)",
                overflow: "hidden",
              }}
            >
              <Image src="/logo.png" alt="Atharva Jhawar" width={36} height={36} style={{ borderRadius: 6, objectFit: "contain" }} />
            </motion.div>
          </Link>

          {/* ---- DESKTOP NAV ---- */}
          <div className="hidden md:flex" style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              const isHovered = hoveredIdx === i;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{ textDecoration: "none", position: "relative" }}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <motion.div
                    whileTap={{ scale: 0.94 }}
                    style={{
                      padding: "7px 16px",
                      borderRadius: 8,
                      fontSize: 14,
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#fff" : isHovered ? "#e4e4e7" : "#9a9aaa",
                      background: isActive
                        ? "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.1))"
                        : isHovered ? "rgba(255,255,255,0.03)" : "transparent",
                      border: isActive ? "1px solid rgba(0,212,255,0.2)" : "1px solid transparent",
                      boxShadow: isActive ? "0 0 16px rgba(0,212,255,0.1), inset 0 1px 0 rgba(255,255,255,0.03)" : "none",
                      transition: "all 0.25s",
                      cursor: "pointer",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {link.name}

                    {/* Active glow bar under text */}
                    {isActive && (
                      <motion.div
                        layoutId="navActive"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        style={{
                          position: "absolute", bottom: 1, left: "15%", right: "15%", height: 2, borderRadius: 2,
                          background: "linear-gradient(90deg, #00d4ff, #7c3aed)",
                          boxShadow: "0 0 8px rgba(0,212,255,0.5), 0 0 20px rgba(0,212,255,0.15)",
                        }}
                      />
                    )}

                    {/* Hover sweep */}
                    {isHovered && !isActive && (
                      <motion.div
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: "250%", opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        style={{
                          position: "absolute", top: 0, left: 0, width: "30%", height: "100%",
                          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
                          pointerEvents: "none",
                        }}
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}

            {/* Resume is now part of navLinks */}
          </div>

          {/* ---- MOBILE TOGGLE ---- */}
          <motion.button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden"
            style={{
              background: "rgba(0,212,255,0.06)",
              border: "1px solid rgba(0,212,255,0.2)",
              borderRadius: 8,
              padding: 8,
              color: "#00d4ff",
              cursor: "pointer",
              display: "flex",
              boxShadow: "0 0 10px rgba(0,212,255,0.05)",
            }}
          >
            {isMobileOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </motion.button>
        </div>
      </motion.header>

      {/* ---- MOBILE MENU ---- */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden"
            style={{
              position: "fixed",
              top: 62,
              left: 0,
              right: 0,
              zIndex: 54,
              background: "rgba(6,6,14,0.95)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(0,212,255,0.1)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "16px 0" }}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={link.name} href={link.href} onClick={() => setIsMobileOpen(false)}
                    style={{
                      width: "85%", textAlign: "center", padding: "12px 16px", borderRadius: 10,
                      fontSize: 15, fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#00d4ff" : "#a1a1aa", textDecoration: "none",
                      background: isActive ? "rgba(0,212,255,0.08)" : "transparent",
                      border: isActive ? "1px solid rgba(0,212,255,0.15)" : "1px solid transparent",
                      transition: "all 0.3s",
                    }}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes borderGlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
      `}</style>
    </>
  );
}
