"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function HireSplash({ onComplete }: { onComplete: () => void }) {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [runCount, setRunCount] = useState(0);
  const [showMessage, setShowMessage] = useState("");
  const [phase, setPhase] = useState<"idle" | "powerup" | "flash" | "done">("idle");
  const containerRef = useRef<HTMLDivElement>(null);

  const funnyMessages = [
    "Haha! Can't catch me! 😜",
    "Too slow! Try again! 🏃",
    "Nope! Not today! 😂",
    "You really don't want to hire me? 🥺",
    "I'm running away! 💨",
    "Almost got me! But no! 😎",
    "Why would you even try? 😤",
    "I'm faster than your cursor! ⚡",
    "Just click Hire Me already! 🙄",
    "You'll never catch me! 🐇",
  ];

  const runAway = useCallback(() => {
    if (!containerRef.current || phase !== "idle") return;
    const rect = containerRef.current.getBoundingClientRect();
    const newX = 20 + Math.random() * (rect.width - 180);
    const newY = 20 + Math.random() * (rect.height - 70);
    setNoPos({ x: newX, y: newY });
    setRunCount((prev) => prev + 1);
    setShowMessage(funnyMessages[Math.floor(Math.random() * funnyMessages.length)]);
    setTimeout(() => setShowMessage(""), 1500);
  }, [phase]);

  const handleHire = () => {
    if (phase !== "idle") return;
    // Phase 1: Power up (button glows, shakes, energy gathers)
    setPhase("powerup");
    // Phase 2: Flash + burst after 1.2s
    setTimeout(() => setPhase("flash"), 1200);
    // Phase 3: Done, reveal portfolio after 2s
    setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 2200);
  };

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setNoPos({ x: rect.width / 2 + 100, y: rect.height / 2 - 25 });
    }
  }, []);

  // Speed lines data
  const speedLines = Array.from({ length: 40 }).map((_, i) => ({
    angle: (i * 9) + Math.random() * 5,
    length: 150 + Math.random() * 300,
    width: 1 + Math.random() * 2,
    delay: Math.random() * 0.3,
    color: ["#00d4ff", "#7c3aed", "#f472b6", "#14b8a6", "#f59e0b", "#ffffff"][i % 6],
  }));

  // Energy particles
  const burstParticles = Array.from({ length: 30 }).map((_, i) => ({
    angle: (i * 12) + Math.random() * 10,
    distance: 200 + Math.random() * 400,
    size: 4 + Math.random() * 8,
    color: ["#00d4ff", "#7c3aed", "#f472b6", "#ffffff"][i % 4],
    delay: Math.random() * 0.2,
  }));

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            overflow: "hidden", cursor: "default",
            background: "radial-gradient(ellipse at center, #0d0d1a 0%, #060610 100%)",
          }}
        >
          {/* Background particles */}
          {phase === "idle" && Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`bg-${i}`}
              animate={{ y: [0, -600], x: [0, (Math.random() - 0.5) * 100], opacity: [0, 0.4, 0] }}
              transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
              style={{
                position: "absolute", bottom: -10, left: `${Math.random() * 100}%`,
                width: 3 + Math.random() * 4, height: 3 + Math.random() * 4, borderRadius: "50%",
                background: ["#00d4ff", "#7c3aed", "#f472b6", "#14b8a6", "#f59e0b"][i % 5],
                pointerEvents: "none",
              }}
            />
          ))}

          {/* Glowing orbs */}
          <div style={{ position: "absolute", top: "20%", left: "20%", width: 300, height: 300, background: "rgba(0,212,255,0.04)", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "20%", right: "20%", width: 300, height: 300, background: "rgba(124,58,237,0.04)", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none" }} />

          {/* ===== POWER UP: Energy rings gathering ===== */}
          <AnimatePresence>
            {(phase === "powerup" || phase === "flash") && (
              <>
                {/* Shockwave rings */}
                {[0, 1, 2].map((ring) => (
                  <motion.div
                    key={`ring-${ring}`}
                    initial={{ scale: 0, opacity: 0.8 }}
                    animate={phase === "flash"
                      ? { scale: 8, opacity: 0 }
                      : { scale: [0.5, 1.5, 0.5], opacity: [0.3, 0.6, 0.3] }
                    }
                    transition={phase === "flash"
                      ? { duration: 0.8, delay: ring * 0.1 }
                      : { duration: 1, repeat: Infinity, delay: ring * 0.3 }
                    }
                    style={{
                      position: "absolute", top: "50%", left: "50%",
                      width: 120, height: 120, marginLeft: -60, marginTop: -60,
                      borderRadius: "50%",
                      border: `2px solid ${["#00d4ff", "#7c3aed", "#f472b6"][ring]}`,
                      boxShadow: `0 0 20px ${["#00d4ff", "#7c3aed", "#f472b6"][ring]}40`,
                      pointerEvents: "none",
                    }}
                  />
                ))}

                {/* Energy gathering particles (inward) */}
                {phase === "powerup" && Array.from({ length: 24 }).map((_, i) => {
                  const angle = (i * 15) * (Math.PI / 180);
                  const startX = Math.cos(angle) * 400;
                  const startY = Math.sin(angle) * 400;
                  return (
                    <motion.div
                      key={`gather-${i}`}
                      initial={{ x: startX, y: startY, opacity: 0, scale: 1 }}
                      animate={{ x: 0, y: 0, opacity: [0, 1, 0], scale: [1, 0.3, 0] }}
                      transition={{ duration: 1, delay: i * 0.04, repeat: 1 }}
                      style={{
                        position: "absolute", top: "50%", left: "50%",
                        width: 6, height: 6, borderRadius: "50%",
                        background: ["#00d4ff", "#7c3aed", "#f472b6", "#f59e0b"][i % 4],
                        boxShadow: `0 0 10px ${["#00d4ff", "#7c3aed", "#f472b6", "#f59e0b"][i % 4]}`,
                        pointerEvents: "none",
                      }}
                    />
                  );
                })}

                {/* Screen shake via container */}
                {phase === "powerup" && (
                  <motion.div
                    animate={{ x: [0, -3, 3, -2, 2, 0], y: [0, 2, -2, 1, -1, 0] }}
                    transition={{ duration: 0.15, repeat: Infinity }}
                    style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
                  />
                )}
              </>
            )}
          </AnimatePresence>

          {/* ===== FLASH: Speed lines + burst ===== */}
          <AnimatePresence>
            {phase === "flash" && (
              <>
                {/* White flash */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0.8, 0] }}
                  transition={{ duration: 0.8 }}
                  style={{
                    position: "absolute", inset: 0, zIndex: 20,
                    background: "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(0,212,255,0.3) 50%, transparent 80%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Speed lines from center */}
                {speedLines.map((line, i) => {
                  const rad = line.angle * (Math.PI / 180);
                  return (
                    <motion.div
                      key={`speed-${i}`}
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: [0, 1, 0] }}
                      transition={{ duration: 0.6, delay: line.delay }}
                      style={{
                        position: "absolute",
                        top: "50%", left: "50%",
                        width: line.length, height: line.width,
                        background: `linear-gradient(90deg, ${line.color}, transparent)`,
                        transformOrigin: "left center",
                        transform: `rotate(${line.angle}deg)`,
                        borderRadius: 2,
                        zIndex: 15,
                        pointerEvents: "none",
                        boxShadow: `0 0 6px ${line.color}60`,
                      }}
                    />
                  );
                })}

                {/* Burst particles outward */}
                {burstParticles.map((p, i) => {
                  const rad = p.angle * (Math.PI / 180);
                  const endX = Math.cos(rad) * p.distance;
                  const endY = Math.sin(rad) * p.distance;
                  return (
                    <motion.div
                      key={`burst-${i}`}
                      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                      animate={{ x: endX, y: endY, opacity: 0, scale: 0.3 }}
                      transition={{ duration: 0.8, delay: p.delay, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
                      style={{
                        position: "absolute", top: "50%", left: "50%",
                        width: p.size, height: p.size, borderRadius: "50%",
                        background: p.color,
                        boxShadow: `0 0 12px ${p.color}`,
                        zIndex: 18,
                        pointerEvents: "none",
                      }}
                    />
                  );
                })}

                {/* "HIRED!" text flash */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.5, 1.2], opacity: [0, 1, 0] }}
                  transition={{ duration: 1, delay: 0.2 }}
                  style={{
                    position: "absolute", top: "50%", left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "clamp(3rem, 10vw, 6rem)",
                    fontWeight: 900,
                    background: "linear-gradient(135deg, #00d4ff, #7c3aed, #f472b6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    zIndex: 25,
                    pointerEvents: "none",
                    filter: "drop-shadow(0 0 30px rgba(0,212,255,0.8))",
                    letterSpacing: 8,
                    whiteSpace: "nowrap",
                  }}
                >
                  HIRED! ⚡
                </motion.div>

                {/* Zoom tunnel effect — rings zooming out */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={`tunnel-${i}`}
                    initial={{ scale: 0, opacity: 0.6 }}
                    animate={{ scale: 15, opacity: 0 }}
                    transition={{ duration: 1.2, delay: 0.1 + i * 0.08 }}
                    style={{
                      position: "absolute", top: "50%", left: "50%",
                      width: 60, height: 60, marginLeft: -30, marginTop: -30,
                      borderRadius: "50%",
                      border: `1px solid rgba(0,212,255,${0.4 - i * 0.04})`,
                      pointerEvents: "none", zIndex: 12,
                    }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>

          {/* ===== MAIN CONTENT (visible during idle & powerup) ===== */}
          <motion.div
            animate={
              phase === "powerup"
                ? { scale: [1, 1.02, 0.98, 1.01, 1], filter: "brightness(1.3)" }
                : phase === "flash"
                  ? { scale: 0.5, opacity: 0, filter: "brightness(3)" }
                  : { scale: 1, opacity: 1 }
            }
            transition={
              phase === "powerup"
                ? { duration: 0.3, repeat: Infinity }
                : { duration: 0.4 }
            }
            style={{ textAlign: "center", position: "relative", zIndex: 2 }}
          >
            <motion.div
              animate={phase === "powerup" ? { rotate: [0, 10, -10, 5, 0], scale: [1, 1.1, 1] } : { rotate: [0, 5, -5, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: phase === "powerup" ? 0 : 3 }}
              style={{ marginBottom: 24, display: "flex", justifyContent: "center" }}
            >
              {phase === "powerup" ? (
                <span style={{ fontSize: 64 }}>⚡</span>
              ) : (
                <Image src={process.env.NODE_ENV === "production" ? "/Portfolio/logo.png" : "/logo.png"} alt="AJ Logo" width={100} height={100} style={{ borderRadius: 16, objectFit: "contain", filter: "drop-shadow(0 0 20px rgba(0,212,255,0.3))" }} />
              )}
            </motion.div>

            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, marginBottom: 12, color: "#e4e4e7", lineHeight: 1.2 }}>
              Welcome to my{" "}
              <span style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed, #f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Portfolio
              </span>
            </h1>

            <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "#a1a1aa", maxWidth: 450, margin: "0 auto 48px", lineHeight: 1.6 }}>
              I&apos;m Atharva Jhawar, a Software Developer.<br />
              So, the big question is...
            </p>

            <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 2rem)", fontWeight: 700, marginBottom: 40, color: "#e4e4e7" }}>
              Would you like to <span style={{ color: "#00d4ff" }}>hire me</span>?
            </h2>

            {/* Hire Me Button */}
            <motion.button
              onClick={handleHire}
              whileHover={phase === "idle" ? { scale: 1.08, boxShadow: "0 0 40px rgba(0,212,255,0.4), 0 0 80px rgba(0,212,255,0.15)" } : {}}
              whileTap={phase === "idle" ? { scale: 0.95 } : {}}
              animate={
                phase === "powerup"
                  ? { boxShadow: ["0 0 20px rgba(0,212,255,0.3)", "0 0 60px rgba(0,212,255,0.8)", "0 0 20px rgba(0,212,255,0.3)"] }
                  : {}
              }
              transition={phase === "powerup" ? { duration: 0.4, repeat: Infinity } : {}}
              style={{
                padding: "16px 48px", fontSize: 18, fontWeight: 700, borderRadius: 16,
                border: "none", background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                color: "white", cursor: phase === "idle" ? "pointer" : "default",
                boxShadow: "0 4px 24px rgba(0,212,255,0.25), 0 0 60px rgba(0,212,255,0.08)",
                position: "relative", overflow: "hidden",
              }}
            >
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                style={{
                  position: "absolute", top: 0, left: 0, width: "40%", height: "100%",
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                  pointerEvents: "none",
                }}
              />
              {phase === "powerup" ? "Powering Up... ⚡" : "Hire Me! 🚀"}
            </motion.button>
          </motion.div>

          {/* "Don't Hire" button — RUNS AWAY (hidden during power up) */}
          {phase === "idle" && (
            <motion.button
              onMouseEnter={runAway}
              onTouchStart={runAway}
              onClick={runAway}
              animate={{ x: noPos.x, y: noPos.y }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
              style={{
                position: "absolute", top: 0, left: 0,
                padding: "14px 36px", fontSize: 16, fontWeight: 600,
                borderRadius: 14, border: "1px solid #3a3a4a",
                background: "rgba(26,26,46,0.6)", backdropFilter: "blur(8px)",
                color: "#a1a1aa", cursor: "pointer", whiteSpace: "nowrap", zIndex: 3,
                boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
              }}
            >
              Don&apos;t Hire 😅
            </motion.button>
          )}

          {/* Funny message */}
          <AnimatePresence>
            {showMessage && phase === "idle" && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                style={{
                  position: "fixed", bottom: 40, left: "50%", transform: "translateX(-50%)",
                  padding: "12px 28px", borderRadius: 999,
                  background: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.1))",
                  border: "1px solid rgba(0,212,255,0.25)", backdropFilter: "blur(12px)",
                  color: "#e4e4e7", fontSize: 15, fontWeight: 600, zIndex: 10,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.4)", whiteSpace: "nowrap",
                }}
              >
                {showMessage}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Run counter */}
          {runCount > 0 && phase === "idle" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              style={{ position: "fixed", top: 20, right: 24, padding: "8px 16px", borderRadius: 999, background: "rgba(26,26,46,0.5)", border: "1px solid #27272a", fontSize: 13, color: "#52525b", zIndex: 10 }}>
              Escape attempts: <span style={{ color: "#f472b6", fontWeight: 700 }}>{runCount}</span>
            </motion.div>
          )}

          {/* Skip */}
          {phase === "idle" && (
            <motion.button onClick={handleHire} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
              style={{ position: "fixed", bottom: 16, right: 24, background: "none", border: "none", color: "#3a3a4a", fontSize: 12, cursor: "pointer", zIndex: 10, textDecoration: "underline" }}>
              Skip intro →
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
