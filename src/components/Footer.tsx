"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaHeart, FaArrowUp } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  { icon: FaGithub, href: "https://github.com/atharvajhawar", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/atharvajhawarcareergpt", label: "LinkedIn" },
  { icon: FaEnvelope, href: "mailto:atharvjhawar30@gmail.com", label: "Email" },
  { icon: FaPhone, href: "tel:+919131713467", label: "Phone" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#080810", borderTop: "1px solid #1a1a2e" }}>
      <div className="section-wrapper" style={{ paddingTop: 56, paddingBottom: 24 }}>
        {/* Top row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <Image src="/logo.png" alt="Atharva Jhawar" width={60} height={60} style={{ borderRadius: 10, objectFit: "contain", marginBottom: 12 }} />
            <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.7, maxWidth: 280 }}>
              Software Developer building scalable apps with React, Node.js, Python & Blockchain tech.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 600, color: "#e4e4e7", marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>Quick Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{ fontSize: 14, color: "#a1a1aa", textDecoration: "none", transition: "color 0.3s" }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 600, color: "#e4e4e7", marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>Get In Touch</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="mailto:atharvjhawar30@gmail.com" style={{ fontSize: 14, color: "#a1a1aa", textDecoration: "none" }}>
                atharvjhawar30@gmail.com
              </a>
              <a href="tel:+919131713467" style={{ fontSize: 14, color: "#a1a1aa", textDecoration: "none" }}>
                +91-9131713467
              </a>
              <span style={{ fontSize: 14, color: "#a1a1aa" }}>Khandwa, M.P., India</span>
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={s.label}
                    style={{
                      padding: 10,
                      borderRadius: 10,
                      border: "1px solid #27272a",
                      color: "#a1a1aa",
                      display: "flex",
                      transition: "all 0.3s",
                      background: "rgba(26,26,46,0.3)",
                    }}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #27272a, transparent)", marginBottom: 24 }} />

        {/* Bottom row */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <p style={{ fontSize: 13, color: "#52525b", display: "flex", alignItems: "center", gap: 4 }}>
            &copy; {new Date().getFullYear()} Atharva Jhawar. Built with <FaHeart size={10} color="#f472b6" /> using Next.js
          </p>

          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              color: "#a1a1aa",
              textDecoration: "none",
              padding: "8px 16px",
              borderRadius: 999,
              border: "1px solid #27272a",
              transition: "all 0.3s",
            }}
          >
            <FaArrowUp size={12} /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
