"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaPlay } from "react-icons/fa";

function EqualizerBar({ delay, maxHeight }: { delay: number; maxHeight: number }) {
  return (
    <motion.div
      animate={{
        height: [maxHeight * 0.3, maxHeight, maxHeight * 0.5, maxHeight * 0.8, maxHeight * 0.3],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      style={{
        width: 4,
        borderRadius: 2,
        background: "linear-gradient(180deg, #00d4ff, #7c3aed)",
      }}
    />
  );
}

export default function MusicWidget() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ padding: "60px 0" }}>
      <div className="section-wrapper" style={{ display: "flex", justifyContent: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            width: "100%",
            maxWidth: 400,
            borderRadius: 20,
            border: "1px solid #27272a",
            background: "rgba(26,26,46,0.2)",
            padding: "28px 28px 24px",
          }}
        >
          {/* Header label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 1.5,
              color: "#52525b",
              marginBottom: 20,
            }}
          >
            Currently Vibing To
          </motion.p>

          {/* Player row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 20,
            }}
          >
            {/* Album art placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaPlay size={14} color="#fff" style={{ marginLeft: 2 }} />
            </motion.div>

            {/* Track info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#e4e4e7",
                  marginBottom: 3,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Lo-fi Coding Beats
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "#a1a1aa",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Chill Hop Music
              </div>
            </div>

            {/* Equalizer bars */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: 3,
                height: 24,
                flexShrink: 0,
              }}
            >
              <EqualizerBar delay={0} maxHeight={24} />
              <EqualizerBar delay={0.2} maxHeight={18} />
              <EqualizerBar delay={0.4} maxHeight={22} />
              <EqualizerBar delay={0.15} maxHeight={16} />
            </div>
          </div>

          {/* Progress bar */}
          <div
            style={{
              width: "100%",
              height: 4,
              borderRadius: 2,
              background: "#27272a",
              marginBottom: 16,
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "60%" } : {}}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              style={{
                height: "100%",
                borderRadius: 2,
                background: "linear-gradient(90deg, #00d4ff, #7c3aed)",
              }}
            />
          </div>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 13,
              color: "#52525b",
              textAlign: "center",
            }}
          >
            I code best with lo-fi beats 🎵
          </p>
        </motion.div>
      </div>
    </section>
  );
}
