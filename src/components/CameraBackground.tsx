"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCamera, FaShieldAlt, FaCheckCircle, FaUserSecret } from "react-icons/fa";

export default function CameraBackground() {
  const [phase, setPhase] = useState<"idle" | "asking" | "scanning" | "result" | "done">("idle");
  const [showPrompt, setShowPrompt] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const funMessages = [
    "Hmm... you look like someone who hires great developers! 😎",
    "Face scan complete — you have excellent taste in portfolios! 🔥",
    "Analysis: 99.9% chance you'll want to hire Atharva! 🚀",
    "Scanning... detecting high intelligence... confirmed! 🧠",
    "Identity verified: A person with great vision! ⚡",
  ];
  const [resultMessage, setResultMessage] = useState("");

  useEffect(() => {
    const seen = localStorage.getItem("portfolio_camera_fun");
    if (seen) {
      setPhase("done");
    } else {
      const timer = setTimeout(() => setShowPrompt(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const startScan = useCallback(async () => {
    setPhase("asking");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 480 }, height: { ideal: 360 } },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setPhase("scanning");
      setShowPrompt(false);

      // Fake scan progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 15 + 5;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);

          // Capture a frame
          if (videoRef.current && canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            canvasRef.current.width = videoRef.current.videoWidth;
            canvasRef.current.height = videoRef.current.videoHeight;
            if (ctx) {
              ctx.drawImage(videoRef.current, 0, 0);
              setCapturedImage(canvasRef.current.toDataURL("image/jpeg", 0.6));
            }
          }

          // Stop camera
          if (streamRef.current) {
            streamRef.current.getTracks().forEach((t) => t.stop());
            streamRef.current = null;
          }

          setResultMessage(funMessages[Math.floor(Math.random() * funMessages.length)]);
          setPhase("result");

          // Auto dismiss after 4 seconds
          setTimeout(() => {
            setPhase("done");
            localStorage.setItem("portfolio_camera_fun", "1");
          }, 4500);
        }
        setScanProgress(Math.min(progress, 100));
      }, 200);
    } catch {
      setPhase("done");
      localStorage.setItem("portfolio_camera_fun", "1");
      setShowPrompt(false);
    }
  }, []);

  const handleSkip = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
    }
    setPhase("done");
    localStorage.setItem("portfolio_camera_fun", "1");
    setShowPrompt(false);
  };

  if (phase === "done") return null;

  return (
    <>
      {/* Hidden elements */}
      <video ref={videoRef} muted playsInline style={{ display: "none" }} />
      <canvas ref={canvasRef} style={{ display: "none" }} />

      {/* ===== PERMISSION PROMPT ===== */}
      <AnimatePresence>
        {showPrompt && phase === "idle" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed", inset: 0, zIndex: 9998,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)", padding: 20,
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              style={{
                maxWidth: 400, width: "100%", padding: 32, borderRadius: 24,
                background: "rgba(10,10,20,0.95)", border: "1px solid rgba(0,212,255,0.2)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,212,255,0.05)",
                textAlign: "center",
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  display: "inline-flex", padding: 20, borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(124,58,237,0.08))",
                  border: "1px solid rgba(0,212,255,0.2)", marginBottom: 20,
                }}
              >
                <FaUserSecret size={32} color="#00d4ff" />
              </motion.div>

              <h3 style={{ fontSize: 20, fontWeight: 700, color: "#e4e4e7", marginBottom: 10 }}>
                Quick Face Scan? 👀
              </h3>
              <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.7, marginBottom: 20 }}>
                Let me scan your face to see if you&apos;re the right person to hire me!
                <br />
                <span style={{ color: "#52525b", fontSize: 12 }}>(Just for fun — takes 3 seconds)</span>
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 14px", borderRadius: 10, background: "rgba(74,222,128,0.06)", border: "1px solid rgba(74,222,128,0.15)", marginBottom: 24 }}>
                <FaShieldAlt size={12} color="#4ade80" />
                <span style={{ fontSize: 11, color: "#4ade80" }}>
                  Camera turns off in 3 sec. Nothing saved or sent.
                </span>
              </div>

              <div style={{ display: "flex", gap: 12 }}>
                <motion.button
                  onClick={handleSkip}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    flex: 1, padding: "12px 0", borderRadius: 12, border: "1px solid #27272a",
                    background: "transparent", color: "#a1a1aa", fontSize: 14, cursor: "pointer",
                  }}
                >
                  Skip
                </motion.button>
                <motion.button
                  onClick={startScan}
                  whileHover={{ scale: 1.03, boxShadow: "0 4px 20px rgba(0,212,255,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    flex: 1, padding: "12px 0", borderRadius: 12, border: "none",
                    background: "linear-gradient(135deg, #00d4ff, #7c3aed)", color: "white",
                    fontSize: 14, fontWeight: 700, cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  }}
                >
                  <FaCamera size={14} /> Scan Me!
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== SCANNING OVERLAY ===== */}
      <AnimatePresence>
        {phase === "scanning" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed", inset: 0, zIndex: 9998,
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              background: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)",
            }}
          >
            {/* Live camera feed in circle */}
            <motion.div
              animate={{ boxShadow: ["0 0 20px rgba(0,212,255,0.3)", "0 0 40px rgba(0,212,255,0.6)", "0 0 20px rgba(0,212,255,0.3)"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{
                width: 220, height: 220, borderRadius: "50%", overflow: "hidden",
                border: "3px solid #00d4ff", marginBottom: 28, position: "relative",
              }}
            >
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scaleX(-1)" }}
              />

              {/* Scan line */}
              <motion.div
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute", left: 0, right: 0, height: 3,
                  background: "linear-gradient(90deg, transparent, #00d4ff, transparent)",
                  boxShadow: "0 0 15px #00d4ff, 0 0 30px rgba(0,212,255,0.3)",
                }}
              />

              {/* Corner brackets */}
              {[
                { top: 8, left: 8, borderTop: "2px solid #00d4ff", borderLeft: "2px solid #00d4ff" },
                { top: 8, right: 8, borderTop: "2px solid #00d4ff", borderRight: "2px solid #00d4ff" },
                { bottom: 8, left: 8, borderBottom: "2px solid #00d4ff", borderLeft: "2px solid #00d4ff" },
                { bottom: 8, right: 8, borderBottom: "2px solid #00d4ff", borderRight: "2px solid #00d4ff" },
              ].map((style, i) => (
                <div key={i} style={{ position: "absolute", width: 20, height: 20, ...style }} />
              ))}
            </motion.div>

            {/* Scanning text */}
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ fontSize: 18, fontWeight: 700, color: "#00d4ff", marginBottom: 16, letterSpacing: 2 }}
            >
              SCANNING FACE...
            </motion.p>

            {/* Progress bar */}
            <div style={{ width: 260, height: 6, borderRadius: 4, background: "#1a1a2e", overflow: "hidden", marginBottom: 12 }}>
              <motion.div
                style={{ height: "100%", borderRadius: 4, background: "linear-gradient(90deg, #00d4ff, #7c3aed)", width: `${scanProgress}%` }}
              />
            </div>
            <p style={{ fontSize: 13, color: "#a1a1aa" }}>{Math.round(scanProgress)}% complete</p>

            {/* Fake scan details */}
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
              {scanProgress > 20 && (
                <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} style={{ fontSize: 12, color: "#52525b" }}>
                  ✓ Face detected
                </motion.p>
              )}
              {scanProgress > 50 && (
                <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} style={{ fontSize: 12, color: "#52525b" }}>
                  ✓ Analyzing features...
                </motion.p>
              )}
              {scanProgress > 75 && (
                <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} style={{ fontSize: 12, color: "#52525b" }}>
                  ✓ Running personality check...
                </motion.p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== RESULT SCREEN ===== */}
      <AnimatePresence>
        {phase === "result" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed", inset: 0, zIndex: 9998,
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              background: "rgba(0,0,0,0.9)", backdropFilter: "blur(12px)",
            }}
          >
            {/* Captured photo */}
            {capturedImage && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{
                  width: 140, height: 140, borderRadius: "50%", overflow: "hidden",
                  border: "3px solid #4ade80", marginBottom: 24,
                  boxShadow: "0 0 30px rgba(74,222,128,0.3)",
                }}
              >
                <img src={capturedImage} alt="You" style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scaleX(-1)" }} />
              </motion.div>
            )}

            {/* Success badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <FaCheckCircle size={48} color="#4ade80" style={{ marginBottom: 20 }} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{ fontSize: 24, fontWeight: 800, color: "#4ade80", marginBottom: 12, textAlign: "center" }}
            >
              ACCESS GRANTED ✅
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              style={{ fontSize: 16, color: "#e4e4e7", textAlign: "center", maxWidth: 380, lineHeight: 1.7, marginBottom: 16 }}
            >
              {resultMessage}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              style={{ fontSize: 13, color: "#52525b", textAlign: "center" }}
            >
              Thanks for playing along! Entering portfolio... 🚀
            </motion.p>

            {/* Auto-closing progress */}
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 4, ease: "linear" }}
              style={{ height: 3, borderRadius: 2, background: "linear-gradient(90deg, #4ade80, #00d4ff)", marginTop: 24, maxWidth: 200 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
