"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useMemo } from "react";

const WEEKS = 20;
const DAYS = 7;
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];
const COLORS = ["#1a1a2e", "#0e4429", "#006d32", "#26a641", "#39d353"];

function generateData() {
  const data: number[][] = [];
  for (let w = 0; w < WEEKS; w++) {
    const week: number[] = [];
    for (let d = 0; d < DAYS; d++) {
      const rand = Math.random();
      if (rand < 0.3) week.push(0);
      else if (rand < 0.55) week.push(1);
      else if (rand < 0.75) week.push(2);
      else if (rand < 0.9) week.push(3);
      else week.push(4);
    }
    data.push(week);
  }
  return data;
}

function getMonthLabels(weeks: number): { label: string; col: number }[] {
  const today = new Date();
  const labels: { label: string; col: number }[] = [];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let lastMonth = -1;

  for (let w = 0; w < weeks; w++) {
    const d = new Date(today);
    d.setDate(d.getDate() - (weeks - 1 - w) * 7);
    const m = d.getMonth();
    if (m !== lastMonth) {
      labels.push({ label: months[m], col: w });
      lastMonth = m;
    }
  }
  return labels;
}

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.02, delayChildren: 0.15 } },
};

const cellVariant: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function GitHubHeatmap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const data = useMemo(() => generateData(), []);
  const monthLabels = useMemo(() => getMonthLabels(WEEKS), []);
  const totalContributions = useMemo(
    () => data.reduce((sum, week) => sum + week.reduce((s, d) => s + d, 0), 0),
    [data]
  );

  const CELL = 14;
  const GAP = 3;

  return (
    <section ref={ref} style={{ padding: "80px 0" }}>
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 700, marginBottom: 10 }}>
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: 14 }}>
            {totalContributions} contributions in the last {WEEKS} weeks
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            background: "rgba(26,26,46,0.2)",
            border: "1px solid #27272a",
            borderRadius: 16,
            padding: "32px 28px",
            overflowX: "auto",
          }}
        >
          {/* Month labels */}
          <div
            style={{
              display: "flex",
              marginLeft: 36,
              marginBottom: 6,
              gap: 0,
              position: "relative",
              height: 16,
            }}
          >
            {monthLabels.map((m) => (
              <span
                key={`${m.label}-${m.col}`}
                style={{
                  position: "absolute",
                  left: m.col * (CELL + GAP),
                  fontSize: 11,
                  color: "#a1a1aa",
                  whiteSpace: "nowrap",
                }}
              >
                {m.label}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: "flex", gap: 0 }}>
            {/* Day labels */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: GAP,
                marginRight: 8,
                justifyContent: "flex-start",
              }}
            >
              {DAY_LABELS.map((label, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 11,
                    color: "#a1a1aa",
                    height: CELL,
                    display: "flex",
                    alignItems: "center",
                    width: 28,
                    justifyContent: "flex-end",
                  }}
                >
                  {label}
                </span>
              ))}
            </div>

            {/* Cells */}
            <motion.div
              variants={container}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              style={{ display: "flex", gap: GAP }}
            >
              {data.map((week, wi) => (
                <div key={wi} style={{ display: "flex", flexDirection: "column", gap: GAP }}>
                  {week.map((level, di) => (
                    <motion.div
                      key={`${wi}-${di}`}
                      variants={cellVariant}
                      whileHover={{ scale: 1.4, zIndex: 10 }}
                      style={{
                        width: CELL,
                        height: CELL,
                        borderRadius: 3,
                        background: COLORS[level],
                        cursor: "pointer",
                        transition: "background 0.2s",
                      }}
                      title={`${level} contribution${level !== 1 ? "s" : ""}`}
                    />
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Legend */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 6,
              marginTop: 16,
            }}
          >
            <span style={{ fontSize: 11, color: "#a1a1aa", marginRight: 4 }}>Less</span>
            {COLORS.map((c, i) => (
              <div
                key={i}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 2,
                  background: c,
                }}
              />
            ))}
            <span style={{ fontSize: 11, color: "#a1a1aa", marginLeft: 4 }}>More</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
