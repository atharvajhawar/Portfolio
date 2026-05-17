"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { FaCode, FaBriefcase, FaGraduationCap, FaEnvelope } from "react-icons/fa";

const cards = [
  {
    icon: FaCode,
    title: "Tech Stack",
    desc: "15+ technologies including React, Node.js, Python, Solana & more.",
    href: "/skills",
    gradient: "from-[#00d4ff] to-[#0ea5e9]",
  },
  {
    icon: FaBriefcase,
    title: "Experience",
    desc: "2+ years across Turbo Chat, Hindustan Unilever & E-sutra.",
    href: "/experience",
    gradient: "from-[#7c3aed] to-[#a855f7]",
  },
  {
    icon: FaGraduationCap,
    title: "Projects",
    desc: "Blockchain bots, real-time chat apps & health prediction systems.",
    href: "/projects",
    gradient: "from-[#f472b6] to-[#ec4899]",
  },
  {
    icon: FaEnvelope,
    title: "Get In Touch",
    desc: "Open for opportunities. Let's build something great together.",
    href: "/contact",
    gradient: "from-[#14b8a6] to-[#06b6d4]",
  },
];

export default function Highlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl md:text-3xl font-bold mb-12"
        >
          Explore My <span className="gradient-text">Portfolio</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={card.href} className="block h-full">
                  <div className="h-full p-6 rounded-2xl border border-[#27272a] bg-[#1a1a2e]/30 backdrop-blur-sm card-hover group cursor-pointer">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${card.gradient} mb-4`}
                    >
                      <Icon size={22} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#e4e4e7] mb-2 group-hover:text-[#00d4ff] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[#a1a1aa] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
