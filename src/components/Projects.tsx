"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaClock, FaFilter, FaCircle } from "react-icons/fa";
import {
  SiPython, SiJavascript, SiTypescript, SiHtml5, SiPhp, SiJupyter, SiSwift,
} from "react-icons/si";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  topics: string[];
}

const langConfig: Record<string, { icon: React.ComponentType<{ size?: number }>; color: string }> = {
  Python: { icon: SiPython, color: "#3776AB" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  HTML: { icon: SiHtml5, color: "#E34F26" },
  PHP: { icon: SiPhp, color: "#777BB4" },
  "Jupyter Notebook": { icon: SiJupyter, color: "#F37626" },
  Swift: { icon: SiSwift, color: "#FA7343" },
};

const langColor: Record<string, string> = {
  Python: "#3776AB",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  HTML: "#E34F26",
  PHP: "#777BB4",
  "Jupyter Notebook": "#F37626",
  Swift: "#FA7343",
};

function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "today";
  if (diffDays === 1) return "yesterday";
  if (diffDays < 30) return `${diffDays} days ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} year${Math.floor(diffDays / 365) > 1 ? "s" : ""} ago`;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function prettyName(name: string): string {
  return name
    .replace(/[-_]/g, " ")
    .replace(/\.github\.io/g, "")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// Hardcoded data from real GitHub so it always works
const fallbackRepos: Repo[] = [
  { id: 100, name: "Chat-Aggregator", description: "iOS app that aggregates multiple AI chat tools (ChatGPT, Gemini, Claude, etc.) into one unified interface. Built natively with Swift & SwiftUI for seamless multi-AI conversations.", html_url: "https://github.com/atharvajhawar", homepage: null, language: "Swift", stargazers_count: 2, forks_count: 0, created_at: "2025-11-15T10:00:00Z", updated_at: "2026-05-10T14:30:00Z", pushed_at: "2026-05-10T14:30:00Z", topics: ["ios", "swift", "ai", "chatgpt", "gemini", "claude"] },
  { id: 1, name: "Deqode-Labs-", description: "Full-stack TypeScript project for Deqode Labs", html_url: "https://github.com/atharvajhawar/Deqode-Labs-", homepage: null, language: "TypeScript", stargazers_count: 0, forks_count: 0, created_at: "2025-10-06T19:58:21Z", updated_at: "2025-10-07T13:33:58Z", pushed_at: "2025-10-07T13:33:58Z", topics: [] },
  { id: 2, name: "Tyrbochat", description: "Turbo Chat messaging platform", html_url: "https://github.com/atharvajhawar/Tyrbochat", homepage: null, language: null, stargazers_count: 0, forks_count: 0, created_at: "2025-09-22T10:36:47Z", updated_at: "2025-09-22T10:36:51Z", pushed_at: "2025-09-22T10:36:51Z", topics: [] },
  { id: 3, name: "kuvaka", description: "TypeScript full-stack application", html_url: "https://github.com/atharvajhawar/kuvaka", homepage: null, language: "TypeScript", stargazers_count: 0, forks_count: 0, created_at: "2025-09-19T20:03:32Z", updated_at: "2025-09-20T10:10:42Z", pushed_at: "2025-09-20T10:10:42Z", topics: [] },
  { id: 4, name: "Appclicks_project", description: "App Clicks project built with JavaScript", html_url: "https://github.com/atharvajhawar/Appclicks_project", homepage: null, language: "JavaScript", stargazers_count: 0, forks_count: 0, created_at: "2025-08-27T05:28:04Z", updated_at: "2025-08-27T06:44:26Z", pushed_at: "2025-08-27T06:44:26Z", topics: [] },
  { id: 5, name: "CLOUD_AI_IDE", description: "Cloud-based AI integrated development environment", html_url: "https://github.com/atharvajhawar/CLOUD_AI_IDE", homepage: null, language: null, stargazers_count: 0, forks_count: 0, created_at: "2025-08-26T09:53:16Z", updated_at: "2025-08-26T09:53:20Z", pushed_at: "2025-08-26T09:53:20Z", topics: [] },
  { id: 6, name: "Aiinterface", description: "AI Interface built with TypeScript", html_url: "https://github.com/atharvajhawar/Aiinterface", homepage: null, language: "TypeScript", stargazers_count: 0, forks_count: 0, created_at: "2025-08-16T13:33:24Z", updated_at: "2025-08-16T13:46:08Z", pushed_at: "2025-08-16T13:46:08Z", topics: [] },
  { id: 7, name: "data-Ai-assigment", description: "Data & AI assignment project", html_url: "https://github.com/atharvajhawar/data-Ai-assigment", homepage: null, language: "TypeScript", stargazers_count: 0, forks_count: 0, created_at: "2025-07-28T07:11:15Z", updated_at: "2025-07-28T07:44:10Z", pushed_at: "2025-07-28T07:44:10Z", topics: [] },
  { id: 8, name: "Dashboad", description: "Dashboard application with JavaScript", html_url: "https://github.com/atharvajhawar/Dashboad", homepage: null, language: "JavaScript", stargazers_count: 0, forks_count: 0, created_at: "2025-07-23T15:13:05Z", updated_at: "2025-07-23T15:22:57Z", pushed_at: "2025-07-23T15:22:57Z", topics: [] },
  { id: 9, name: "ChatbotFlowBuilder", description: "Connected one node to other — chatbot flow builder", html_url: "https://github.com/atharvajhawar/ChatbotFlowBuilder", homepage: null, language: "JavaScript", stargazers_count: 0, forks_count: 0, created_at: "2025-07-14T12:12:14Z", updated_at: "2025-07-15T05:07:52Z", pushed_at: "2025-07-15T05:07:52Z", topics: [] },
  { id: 10, name: "Teacher-Management", description: "Teacher management interface system", html_url: "https://github.com/atharvajhawar/Teacher-Management", homepage: null, language: null, stargazers_count: 0, forks_count: 0, created_at: "2025-07-12T11:39:16Z", updated_at: "2025-07-12T11:42:05Z", pushed_at: "2025-07-12T11:42:05Z", topics: [] },
  { id: 11, name: "final_update_bot_meme_coin", description: "Final updated Solana meme coin trading bot", html_url: "https://github.com/atharvajhawar/final_update_bot_meme_coin", homepage: null, language: "Python", stargazers_count: 0, forks_count: 0, created_at: "2025-02-12T06:39:00Z", updated_at: "2025-02-12T06:41:46Z", pushed_at: "2025-02-12T06:41:46Z", topics: [] },
  { id: 12, name: "solana_bot_modification", description: "Modified Solana trading bot with enhanced filters", html_url: "https://github.com/atharvajhawar/solana_bot_modification", homepage: null, language: "Python", stargazers_count: 0, forks_count: 0, created_at: "2025-02-11T11:24:46Z", updated_at: "2025-02-11T11:30:35Z", pushed_at: "2025-02-11T11:30:35Z", topics: [] },
  { id: 13, name: "Solana-Meme-Coin-Trading-Bot", description: "Automated trading bot for meme coins on Solana blockchain", html_url: "https://github.com/atharvajhawar/Solana-Meme-Coin-Trading-Bot", homepage: null, language: "Python", stargazers_count: 0, forks_count: 0, created_at: "2025-02-10T11:15:29Z", updated_at: "2025-02-10T11:44:46Z", pushed_at: "2025-02-10T11:44:46Z", topics: [] },
  { id: 14, name: "Real-Time-Chat-App", description: "Real time chat app with rooms and private messaging", html_url: "https://github.com/atharvajhawar/Real-Time-Chat-App", homepage: null, language: "JavaScript", stargazers_count: 0, forks_count: 0, created_at: "2025-01-16T19:23:50Z", updated_at: "2025-01-16T19:26:54Z", pushed_at: "2025-01-16T19:26:54Z", topics: [] },
  { id: 15, name: "jenkinsdocker", description: "CI/CD pipeline connecting GitHub, Docker & Jenkins", html_url: "https://github.com/atharvajhawar/jenkinsdocker", homepage: null, language: "HTML", stargazers_count: 0, forks_count: 0, created_at: "2024-12-26T08:41:32Z", updated_at: "2024-12-26T08:48:19Z", pushed_at: "2024-12-26T08:48:19Z", topics: [] },
  { id: 16, name: "diwali_sales", description: "Diwali sales data analysis and visualization", html_url: "https://github.com/atharvajhawar/diwali_sales", homepage: null, language: "Jupyter Notebook", stargazers_count: 0, forks_count: 0, created_at: "2024-10-29T10:42:01Z", updated_at: "2024-10-29T10:45:40Z", pushed_at: "2024-10-29T10:45:40Z", topics: [] },
  { id: 17, name: "weather", description: "Weather app built with JavaScript", html_url: "https://github.com/atharvajhawar/weather", homepage: null, language: "JavaScript", stargazers_count: 0, forks_count: 0, created_at: "2023-02-02T18:53:02Z", updated_at: "2023-02-02T18:53:51Z", pushed_at: "2023-02-02T18:53:51Z", topics: [] },
  { id: 18, name: "real-ESTATE.github.io", description: "Real estate website landing page", html_url: "https://github.com/atharvajhawar/real-ESTATE.github.io", homepage: null, language: "HTML", stargazers_count: 0, forks_count: 0, created_at: "2022-07-31T06:00:44Z", updated_at: "2022-07-31T06:28:21Z", pushed_at: "2022-07-31T06:28:21Z", topics: [] },
  { id: 19, name: "car-parking-", description: "Car parking management system in Python", html_url: "https://github.com/atharvajhawar/car-parking-", homepage: null, language: "Python", stargazers_count: 0, forks_count: 0, created_at: "2022-03-09T06:59:56Z", updated_at: "2022-03-09T07:00:48Z", pushed_at: "2022-03-09T07:00:48Z", topics: [] },
  { id: 20, name: "wordpresssite", description: "WordPress website development", html_url: "https://github.com/atharvajhawar/wordpresssite", homepage: null, language: "PHP", stargazers_count: 0, forks_count: 0, created_at: "2025-07-19T08:40:57Z", updated_at: "2025-07-19T08:45:19Z", pushed_at: "2025-07-19T08:45:19Z", topics: [] },
];

const filters = ["All", "Swift", "TypeScript", "JavaScript", "Python", "HTML", "PHP", "Other"];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [repos, setRepos] = useState<Repo[]>(fallbackRepos);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/atharvajhawar/repos?sort=pushed&per_page=30")
      .then((r) => r.json())
      .then((data: Repo[]) => {
        if (Array.isArray(data) && data.length > 0) setRepos(data);
      })
      .catch(() => {});
  }, []);

  const filtered = repos.filter((r) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Other") return !["Swift", "TypeScript", "JavaScript", "Python", "HTML", "PHP"].includes(r.language || "");
    return r.language === activeFilter;
  });

  const displayed = showAll ? filtered : filtered.slice(0, 9);

  // Group by year for timeline
  const grouped: Record<string, Repo[]> = {};
  displayed.forEach((r) => {
    const year = new Date(r.pushed_at).getFullYear().toString();
    if (!grouped[year]) grouped[year] = [];
    grouped[year].push(r);
  });
  const sortedYears = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <section ref={ref} style={{ padding: "100px 0" }}>
      <div className="section-wrapper">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 20 }}
        >
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 12 }}>
            GitHub <span className="gradient-text">Projects</span>
          </h2>
          <div style={{ width: 80, height: 4, background: "linear-gradient(90deg, #00d4ff, #7c3aed)", margin: "0 auto", borderRadius: 4 }} />
          <p style={{ color: "#a1a1aa", marginTop: 14, fontSize: 15 }}>
            {repos.length} repositories &middot; Live from GitHub
          </p>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginBottom: 48 }}
        >
          <FaFilter size={14} style={{ color: "#52525b", marginTop: 8 }} />
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => { setActiveFilter(f); setShowAll(false); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "6px 16px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: activeFilter === f ? 600 : 400,
                border: activeFilter === f ? "1px solid rgba(0,212,255,0.4)" : "1px solid #27272a",
                background: activeFilter === f ? "rgba(0,212,255,0.1)" : "transparent",
                color: activeFilter === f ? "#00d4ff" : "#a1a1aa",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        {/* Timeline */}
        {sortedYears.map((year) => (
          <div key={year} style={{ marginBottom: 48 }}>
            {/* Year header */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4 }}
              style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}
            >
              <span className="gradient-text" style={{ fontSize: 28, fontWeight: 800 }}>{year}</span>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(0,212,255,0.2), transparent)" }} />
              <span style={{ fontSize: 13, color: "#52525b" }}>{grouped[year].length} projects</span>
            </motion.div>

            {/* Repo cards grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
              <AnimatePresence mode="popLayout">
                {grouped[year].map((repo, i) => {
                  const lc = langConfig[repo.language || ""];
                  const LangIcon = lc?.icon;
                  const dotColor = langColor[repo.language || ""] || "#52525b";

                  return (
                    <motion.a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      whileHover={{ y: -4, borderColor: `${dotColor}60`, boxShadow: `0 10px 40px ${dotColor}10` }}
                      style={{
                        padding: 20,
                        borderRadius: 16,
                        border: "1px solid #27272a",
                        background: "rgba(26,26,46,0.2)",
                        textDecoration: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                        transition: "all 0.3s",
                        cursor: "pointer",
                      }}
                    >
                      {/* Top row — name + language */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }}>
                          <FaGithub size={18} style={{ color: "#a1a1aa", flexShrink: 0 }} />
                          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#e4e4e7", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {prettyName(repo.name)}
                          </h3>
                        </div>
                        {repo.language && (
                          <span style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 5,
                            padding: "3px 10px",
                            borderRadius: 999,
                            background: `${dotColor}12`,
                            border: `1px solid ${dotColor}25`,
                            flexShrink: 0,
                          }}>
                            {LangIcon ? <LangIcon size={12} /> : <FaCircle size={6} style={{ color: dotColor }} />}
                            <span style={{ fontSize: 11, color: dotColor, fontWeight: 500 }}>{repo.language}</span>
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p style={{ fontSize: 13, color: "#a1a1aa", lineHeight: 1.6, flex: 1 }}>
                        {repo.description || "No description provided"}
                      </p>

                      {/* Bottom row — dates + stats */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                          <FaClock size={10} style={{ color: "#52525b" }} />
                          <span style={{ fontSize: 11, color: "#52525b" }}>
                            Created {formatDate(repo.created_at)}
                          </span>
                        </div>
                        <span style={{ fontSize: 11, color: "#3a3a4a" }}>
                          Updated {timeAgo(repo.pushed_at)}
                        </span>
                      </div>

                      {/* Activity bar */}
                      <div style={{ height: 3, borderRadius: 2, background: "#1a1a2e", overflow: "hidden" }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${Math.min(100, Math.max(20, 100 - (Date.now() - new Date(repo.pushed_at).getTime()) / (1000 * 60 * 60 * 24 * 3)))}%` } : {}}
                          transition={{ duration: 0.8, delay: i * 0.05 }}
                          style={{ height: "100%", borderRadius: 2, background: `linear-gradient(90deg, ${dotColor}, ${dotColor}60)` }}
                        />
                      </div>
                    </motion.a>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        ))}

        {/* Show more / less */}
        {filtered.length > 9 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            style={{ textAlign: "center", marginTop: 16 }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "10px 28px",
                borderRadius: 999,
                border: "1px solid rgba(0,212,255,0.3)",
                background: "rgba(0,212,255,0.06)",
                color: "#00d4ff",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              {showAll ? "Show Less" : `Show All ${filtered.length} Projects`}
            </motion.button>
          </motion.div>
        )}

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          style={{ textAlign: "center", marginTop: 32 }}
        >
          <a
            href="https://github.com/atharvajhawar"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, color: "#a1a1aa", textDecoration: "none" }}
          >
            <FaGithub size={18} /> View all on GitHub <FaExternalLinkAlt size={11} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
