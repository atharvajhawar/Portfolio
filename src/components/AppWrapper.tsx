"use client";

import { useState, useEffect } from "react";
import HireSplash from "./HireSplash";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    // Only show splash once per session
    const seen = sessionStorage.getItem("splash_seen");
    if (seen) {
      setShowSplash(false);
    }
    setHasChecked(true);
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem("splash_seen", "1");
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
