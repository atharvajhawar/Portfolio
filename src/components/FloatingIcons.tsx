"use client";

import { motion } from "framer-motion";
import { SiReact, SiNodedotjs, SiPython, SiDocker, SiMongodb, SiSolana } from "react-icons/si";

const icons = [
  { Icon: SiReact, color: "#61DAFB", x: "8%", y: "15%", size: 28, delay: 0 },
  { Icon: SiNodedotjs, color: "#339933", x: "85%", y: "20%", size: 24, delay: 1 },
  { Icon: SiPython, color: "#3776AB", x: "12%", y: "70%", size: 22, delay: 2 },
  { Icon: SiDocker, color: "#2496ED", x: "90%", y: "65%", size: 26, delay: 0.5 },
  { Icon: SiMongodb, color: "#47A248", x: "75%", y: "85%", size: 20, delay: 1.5 },
  { Icon: SiSolana, color: "#9945FF", x: "20%", y: "88%", size: 22, delay: 2.5 },
  { Icon: SiReact, color: "#00d4ff", x: "50%", y: "8%", size: 18, delay: 3 },
  { Icon: SiPython, color: "#7c3aed", x: "65%", y: "92%", size: 16, delay: 1.8 },
];

export default function FloatingIcons() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
      {icons.map((item, i) => {
        const { Icon } = item;
        return (
          <motion.div
            key={i}
            animate={{
              y: [0, -15, 0, 10, 0],
              x: [0, 5, -5, 3, 0],
              rotate: [0, 5, -5, 3, 0],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: item.delay,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              left: item.x,
              top: item.y,
              opacity: 0.06,
            }}
          >
            <Icon size={item.size} color={item.color} />
          </motion.div>
        );
      })}
    </div>
  );
}
