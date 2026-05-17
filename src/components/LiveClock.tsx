"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function getIST() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utc + 5.5 * 3600000);
}

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function LiveClock() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(getIST());
    const interval = setInterval(() => setTime(getIST()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  const hours = time.getHours();
  const isOnline = hours >= 9 && hours <= 22;
  const h = hours % 12 || 12;
  const ampm = hours >= 12 ? "PM" : "AM";
  const mins = time.getMinutes().toString().padStart(2, "0");
  const secs = time.getSeconds().toString().padStart(2, "0");
  const day = DAYS[time.getDay()];
  const date = `${time.getDate()} ${MONTHS[time.getMonth()]} ${time.getFullYear()}`;

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
            My <span className="gradient-text">Timezone</span>
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: 14 }}>Indian Standard Time (IST / UTC+5:30)</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            maxWidth: 420,
            margin: "0 auto",
            padding: "36px 32px",
            borderRadius: 20,
            border: "1px solid #27272a",
            background: "rgba(26,26,46,0.2)",
            textAlign: "center",
          }}
        >
          {/* Time */}
          <div style={{ marginBottom: 8 }}>
            <span
              style={{
                fontSize: "clamp(2.8rem, 6vw, 3.6rem)",
                fontWeight: 700,
                fontFamily: "'SF Mono', 'Fira Code', monospace",
                color: "#e4e4e7",
                letterSpacing: 2,
              }}
            >
              {h}:{mins}
            </span>
            <span
              style={{
                fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
                fontWeight: 700,
                fontFamily: "'SF Mono', 'Fira Code', monospace",
                color: "#a1a1aa",
                letterSpacing: 2,
              }}
            >
              :{secs}
            </span>
            <span
              style={{
                fontSize: 14,
                color: "#a1a1aa",
                marginLeft: 8,
                fontWeight: 500,
              }}
            >
              {ampm}
            </span>
          </div>

          {/* Day & Date */}
          <p style={{ fontSize: 14, color: "#71717a", marginBottom: 20 }}>
            {day}, {date}
          </p>

          {/* Status */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 18px",
              borderRadius: 999,
              background: isOnline ? "rgba(0,212,255,0.08)" : "rgba(239,68,68,0.08)",
              border: `1px solid ${isOnline ? "rgba(0,212,255,0.2)" : "rgba(239,68,68,0.2)"}`,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: isOnline ? "#22c55e" : "#ef4444",
                display: "inline-block",
                boxShadow: isOnline
                  ? "0 0 8px rgba(34,197,94,0.6)"
                  : "0 0 8px rgba(239,68,68,0.4)",
                animation: isOnline ? "pulse-dot 2s infinite" : "none",
              }}
            />
            <span style={{ fontSize: 13, fontWeight: 500, color: isOnline ? "#22c55e" : "#ef4444" }}>
              {isOnline ? "Available Now" : "Offline"}
            </span>
          </div>

          <style>{`
            @keyframes pulse-dot {
              0%, 100% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.6; transform: scale(1.3); }
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}
