"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Are you available for freelance work?",
    answer:
      "Yes, I'm open to freelance projects, especially those involving full-stack development, blockchain, or AI integrations. Feel free to reach out to discuss your project.",
  },
  {
    question: "What is your hourly rate?",
    answer:
      "My rates depend on the project scope, complexity, and timeline. I offer competitive pricing and am happy to discuss a fair rate after understanding your requirements.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "React, Node.js, Python, AWS, Solana, Next.js, TypeScript, and more. I'm always expanding my stack and love picking up new technologies when projects demand it.",
  },
  {
    question: "Do you work remotely?",
    answer:
      "Yes, I'm remote-first and have worked with distributed teams across different time zones. I'm comfortable with async communication and standard collaboration tools.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Depends on scope, typically 2-8 weeks for most projects. I always provide a clear timeline estimate before starting and keep you updated throughout the process.",
  },
  {
    question: "Can you work with existing codebases?",
    answer:
      "Absolutely, I have experience diving into large existing codebases, refactoring legacy code, and integrating new features without disrupting existing functionality.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0, 0, 0.2, 1] as [number, number, number, number] } },
};

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section ref={ref} style={{ padding: "80px 0" }}>
      <div className="section-wrapper">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Heading */}
          <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 700, marginBottom: 10 }}>
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p style={{ color: "#a1a1aa", fontSize: 14 }}>Quick answers to common questions</p>
          </motion.div>

          {/* FAQ Items */}
          <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    borderRadius: 14,
                    border: `1px solid ${isOpen ? "#00d4ff30" : "#27272a"}`,
                    background: "rgba(26,26,46,0.2)",
                    overflow: "hidden",
                    transition: "border-color 0.3s",
                  }}
                >
                  <button
                    onClick={() => toggle(i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "18px 22px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      color: isOpen ? "#00d4ff" : "#e4e4e7",
                      fontSize: 15,
                      fontWeight: 500,
                      transition: "color 0.3s",
                    }}
                  >
                    <span>{faq.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ flexShrink: 0, marginLeft: 12, display: "flex" }}
                    >
                      <FaChevronDown size={14} color={isOpen ? "#00d4ff" : "#71717a"} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div style={{ padding: "0 22px 18px 22px" }}>
                          <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.7 }}>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
