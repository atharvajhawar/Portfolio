"use client";

import { useState, useEffect } from "react";
import HireSplash from "./HireSplash";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    // Only show splash once ever (persists across reloads/sessions)
    const seen = localStorage.getItem("portfolio_splash_seen");
    if (!seen) {
      setShowSplash(true);
    }
    setHasChecked(true);
  }, []);

  const handleComplete = () => {
    localStorage.setItem("portfolio_splash_seen", "1");
    setShowSplash(false);
  };

  if (!hasChecked) return null;

  return (
    <>
      {showSplash && <HireSplash onComplete={handleComplete} />}
      <div style={{
        opacity: showSplash ? 0 : 1,
        pointerEvents: showSplash ? "none" : "auto",
        transition: "opacity 0.5s",
      }}>
        {children}
      </div>
    </>
  );
}
