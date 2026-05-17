"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { FaUsers, FaServer, FaCodeBranch, FaLayerGroup, FaBuilding, FaGraduationCap } from "react-icons/fa";

interface CounterData {
  icon: typeof FaUsers;
  value: number;
  suffix: string;
  label: string;
  subtitle: string;
  color: string;
  isDecimal?: boolean;
}

const counters: CounterData[] = [
  { icon: FaUsers, value: 1000000, suffix: "+", label: "Users Served", subtitle: "Across products", color: "#00d4ff" },
  { icon: FaServer, value: 50, suffix: "+", label: "APIs Built", subtitle: "RESTful & GraphQL", color: "#7c3aed" },
  { icon: FaCodeBranch, value: 500, suffix: "+", label: "Commits", subtitle: "Open source & private", color: "#14b8a6" },
  { icon: FaLayerGroup, value: 15, suffix: "+", label: "Technologies", subtitle: "Full-stack proficiency", color: "#f59e0b" },
  { icon: FaBuilding, value: 3, suffix: "", label: "Companies", subtitle: "Professional experience", color: "#f472b6" },
  { icon: FaGraduationCap, value: 7.99, suffix: "", label: "GPA", subtitle: "B.Tech IT", color: "#06b6d4", isDecimal: true },
];

function formatValue(val: number, target: number, suffix: string, isDecimal?: boolean): string {
  if (isDecimal) {
    return val.toFixed(2) + suffix;
  }
  if (target >= 1000000) {
    const m = val / 1000000;
    if (m >= 1) return Math.floor(m) + "M" + suffix;
    const k = val / 1000;
    return Math.floor(k) + "K" + suffix;
  }
  return Math.floor(val) + suffix;
}

function Counter({ data, isActive }: { data: CounterData; isActive: boolean }) {
  const [displayVal, setDisplayVal] = useState(0);
  const animRef = useRef<number>(0);

  const animate = useCallback(() => {
    const duration = 2000;
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * data.value;
      setDisplayVal(current);

      if (progress < 1) {
        animRef.current = requestAnimationFrame(step);
      }
    };

    animRef.current = requestAnimationFrame(step);
  }, [data.value]);

  useEffect(() => {
    if (isActive) {
      animate();
    }
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isActive, animate]);

  const Icon = data.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{
        padding: "28px 20px",
        borderRadius: 16,
        border: "1px solid #27272a",
        background: "rgba(26,26,46,0.2)",
        textAlign: "center",
        cursor: "default",
        transition: "border-color 0.3s",
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: `${data.color}15`,
          border: `1px solid ${data.color}30`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 16px",
        }}
      >
        <Icon size={20} color={data.color} />
      </div>

      <div
        style={{
          fontSize: "clamp(1.6rem, 3vw, 2rem)",
          fontWeight: 700,
          marginBottom: 6,
          background: `linear-gradient(135deg, ${data.color}, #7c3aed)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {formatValue(displayVal, data.value, data.suffix, data.isDecimal)}
      </div>

      <p style={{ fontSize: 14, fontWeight: 600, color: "#e4e4e7", marginBottom: 4 }}>{data.label}</p>
      <p style={{ fontSize: 12, color: "#71717a" }}>{data.subtitle}</p>
    </motion.div>
  );
}

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as [number, number, number, number] } },
};

export default function AnimatedCounters() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

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
              By The <span className="gradient-text">Numbers</span>
            </h2>
            <p style={{ color: "#a1a1aa", fontSize: 14 }}>A snapshot of my journey so far</p>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 16,
            }}
          >
            {counters.map((c, i) => (
              <motion.div key={c.label} variants={fadeUp}>
                <Counter data={c} isActive={isInView} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
