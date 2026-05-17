"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCamera, FaTimes, FaVideo, FaShieldAlt } from "react-icons/fa";

export default function CameraBackground() {
  const [status, setStatus] = useState<"idle" | "asking" | "granted" | "denied">("idle");
  const [showPrompt, setShowPrompt] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    // Check if user already made a choice
    const choice = localStorage.getItem("portfolio_camera");
    if (choice === "granted") {
      startCamera();
    } else if (choice === "denied") {
      setStatus("denied");
    } else {
      // First visit — show prompt after 2 seconds
      const timer = setTimeout(() => setShowPrompt(true), 2000);
      return () => clearTimeout(timer);
    }
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, []);

  const startCamera = useCallback(async () => {
    setStatus("asking");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 640 }, height: { ideal: 480 } },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setStatus("granted");
      localStorage.setItem("portfolio_camera", "granted");
      setShowPrompt(false);
    } catch {
      setStatus("denied");
      localStorage.setItem("portfolio_camera", "denied");
      setShowPrompt(false);
    }
  }, []);

  const handleDeny = () => {
    setStatus("denied");
    localStorage.setItem("portfolio_camera", "denied");
    setShowPrompt(false);
  };

  const handleStop = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    setStatus("denied");
    localStorage.setItem("portfolio_camera", "denied");
  };

  return (
    <>
      {/* Live camera background */}
      {status === "granted" && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: -1,
            overflow: "hidden",
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "blur(30px) brightness(0.15) saturate(1.5)",
              transform: "scale(1.1)",
            }}
          />
          {/* Color overlay to match theme */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(0,212,255,0.05), rgba(124,58,237,0.05), rgba(6,6,12,0.7))",
              mixBlendMode: "multiply",
            }}
          />

          {/* Stop camera button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={handleStop}
            whileHover={{ scale: 1.1 }}
            style={{
              position: "fixed",
              bottom: 20,
              left: 20,
              zIndex: 200,
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 14px",
              borderRadius: 999,
              background: "rgba(26,26,46,0.7)",
              backdropFilter: "blur(12px)",
              border: "1px solid #27272a",
              color: "#a1a1aa",
              fontSize: 11,
              cursor: "pointer",
            }}
          >
            <FaVideo size={10} /> Camera On · Click to stop
          </motion.button>
        </div>
      )}

      {/* Hidden video element for when starting from localStorage */}
      {status === "asking" && (
        <video ref={videoRef} autoPlay muted playsInline style={{ display: "none" }} />
      )}

      {/* Permission prompt modal */}
      <AnimatePresence>
        {showPrompt && status === "idle" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9998,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(8px)",
              padding: 20,
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              style={{
                maxWidth: 420,
                width: "100%",
                padding: 32,
                borderRadius: 24,
                background: "rgba(10,10,20,0.95)",
                border: "1px solid rgba(0,212,255,0.2)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,212,255,0.05)",
                textAlign: "center",
                position: "relative",
              }}
            >
              {/* Close button */}
              <button
                onClick={handleDeny}
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  background: "none",
                  border: "none",
                  color: "#52525b",
                  cursor: "pointer",
                  padding: 4,
                }}
              >
                <FaTimes size={16} />
              </button>

              {/* Camera icon with pulse */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  display: "inline-flex",
                  padding: 20,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(124,58,237,0.08))",
                  border: "1px solid rgba(0,212,255,0.2)",
                  marginBottom: 20,
                }}
              >
                <FaCamera size={32} color="#00d4ff" />
              </motion.div>

              <h3 style={{ fontSize: 20, fontWeight: 700, color: "#e4e4e7", marginBottom: 10 }}>
                Enable Camera Background?
              </h3>

              <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.7, marginBottom: 8 }}>
                Your live camera feed will appear as a{" "}
                <span style={{ color: "#00d4ff" }}>blurred background</span> behind the portfolio — creating a unique, personalized experience.
              </p>

              {/* Privacy note */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 14px",
                borderRadius: 10,
                background: "rgba(74,222,128,0.06)",
                border: "1px solid rgba(74,222,128,0.15)",
                marginBottom: 24,
              }}>
                <FaShieldAlt size={14} color="#4ade80" />
                <span style={{ fontSize: 12, color: "#4ade80" }}>
                  100% private — video stays on your device. Nothing is recorded or sent.
                </span>
              </div>

              {/* Buttons */}
              <div style={{ display: "flex", gap: 12 }}>
                <motion.button
                  onClick={handleDeny}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    flex: 1,
                    padding: "12px 0",
                    borderRadius: 12,
                    border: "1px solid #27272a",
                    background: "transparent",
                    color: "#a1a1aa",
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  No Thanks
                </motion.button>

                <motion.button
                  onClick={startCamera}
                  whileHover={{ scale: 1.03, boxShadow: "0 4px 20px rgba(0,212,255,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    flex: 1,
                    padding: "12px 0",
                    borderRadius: 12,
                    border: "none",
                    background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                    color: "white",
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <FaCamera size={14} /> Allow Camera
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
