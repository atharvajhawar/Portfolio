"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

const contactInfo = [
  { icon: FaEnvelope, label: "Email", value: "atharvjhawar30@gmail.com", href: "mailto:atharvjhawar30@gmail.com" },
  { icon: FaPhone, label: "Phone", value: "+91-9131713467", href: "tel:+919131713467" },
  { icon: FaMapMarkerAlt, label: "Location", value: "Khandwa, M.P., India", href: "#" },
];

const socials = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/atharvajhawar" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/atharvajhawarcareergpt" },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: 12,
  background: "rgba(26,26,46,0.5)",
  border: "1px solid #27272a",
  color: "#e4e4e7",
  fontSize: 14,
  outline: "none",
  transition: "border-color 0.3s",
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    window.location.href = `mailto:atharvjhawar30@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section ref={ref} style={{ padding: "100px 0", background: "linear-gradient(180deg, rgba(8,8,16,0.9) 0%, rgba(12,12,22,0.95) 100%)" }}>
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 16 }}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div style={{ width: 80, height: 4, background: "linear-gradient(90deg, #00d4ff, #7c3aed)", margin: "0 auto", borderRadius: 4 }} />
          <p style={{ color: "#a1a1aa", marginTop: 16, fontSize: "clamp(0.95rem, 2vw, 1.05rem)" }}>Have a project in mind? Let&apos;s talk.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 48 }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 style={{ fontSize: 22, fontWeight: 700, color: "#e4e4e7", marginBottom: 12 }}>
              Let&apos;s build something great together
            </h3>
            <p style={{ color: "#a1a1aa", fontSize: 14, lineHeight: 1.7, marginBottom: 28 }}>
              I&apos;m always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    whileHover={{ borderColor: "rgba(0,212,255,0.3)" }}
                    style={{ display: "flex", alignItems: "center", gap: 14, padding: 16, borderRadius: 12, border: "1px solid #27272a", background: "rgba(26,26,46,0.3)", textDecoration: "none", transition: "border-color 0.3s" }}
                  >
                    <div style={{ flexShrink: 0, padding: 10, borderRadius: 10, background: "rgba(0,212,255,0.1)" }}>
                      <Icon size={18} color="#00d4ff" />
                    </div>
                    <div>
                      <div style={{ fontSize: 12, color: "#a1a1aa" }}>{info.label}</div>
                      <div style={{ fontSize: 14, color: "#e4e4e7", fontWeight: 500 }}>{info.value}</div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, borderColor: "rgba(0,212,255,0.4)" }}
                    style={{ padding: 12, borderRadius: 12, border: "1px solid #27272a", background: "rgba(26,26,46,0.3)", color: "#a1a1aa", display: "flex", transition: "all 0.3s" }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, color: "#a1a1aa", marginBottom: 6 }}>Your Name</label>
                <input name="name" type="text" required placeholder="John Doe" style={inputStyle} onFocus={(e) => e.currentTarget.style.borderColor = "rgba(0,212,255,0.5)"} onBlur={(e) => e.currentTarget.style.borderColor = "#27272a"} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, color: "#a1a1aa", marginBottom: 6 }}>Your Email</label>
                <input name="email" type="email" required placeholder="john@example.com" style={inputStyle} onFocus={(e) => e.currentTarget.style.borderColor = "rgba(0,212,255,0.5)"} onBlur={(e) => e.currentTarget.style.borderColor = "#27272a"} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, color: "#a1a1aa", marginBottom: 6 }}>Message</label>
                <textarea name="message" required rows={5} placeholder="Tell me about your project..." style={{ ...inputStyle, resize: "none" as const }} onFocus={(e) => e.currentTarget.style.borderColor = "rgba(0,212,255,0.5)"} onBlur={(e) => e.currentTarget.style.borderColor = "#27272a"} />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(0,212,255,0.25)" }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: "100%",
                  padding: "14px 0",
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                  color: "white",
                  fontWeight: 600,
                  fontSize: 14,
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                {submitted ? "Message Sent!" : <><FaPaperPlane size={14} /> Send Message</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
