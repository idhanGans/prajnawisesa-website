"use client";

import { motion } from "framer-motion";
import styles from "./GeometricBackground.module.css";

export const GeometricBackground = () => {
  const shapes = Array.from({ length: 8 }, (_, i) => i);

  const floatingVariants = {
    animate: (i: number) => ({
      y: [0, -30, 0],
      rotate: [0, 360],
      transition: {
        duration: 8 + i * 0.5,
        repeat: Infinity,
      },
    }),
  };

  return (
    <div className={styles.background}>
      <svg
        className={styles.svg}
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#d4b896", stopOpacity: 0.15 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#c0c0c0", stopOpacity: 0.05 }}
            />
          </linearGradient>
        </defs>

        {/* Static Background Shapes */}
        <rect width="1000" height="1000" fill="#000000" />

        {/* Animated Geometric Shapes */}
        {shapes.map((i) => (
          <motion.g
            key={i}
            custom={i}
            animate="animate"
            variants={floatingVariants}
            style={{
              originX: "500px",
              originY: "500px",
            }}
          >
            {i % 3 === 0 && (
              <polygon
                points={`${200 + i * 80},${150 + i * 50} ${300 + i * 80},${
                  100 + i * 50
                } ${350 + i * 80},${200 + i * 50}`}
                fill="url(#grad1)"
                opacity={0.6 - i * 0.05}
              />
            )}
            {i % 3 === 1 && (
              <circle
                cx={250 + i * 70}
                cy={300 + i * 60}
                r={50 + i * 10}
                fill="url(#grad1)"
                opacity={0.5 - i * 0.04}
              />
            )}
            {i % 3 === 2 && (
              <rect
                x={150 + i * 90}
                y={200 + i * 70}
                width={80 + i * 15}
                height={80 + i * 15}
                fill="url(#grad1)"
                opacity={0.55 - i * 0.05}
                transform={`rotate(${45} ${200 + i * 90} ${250 + i * 70})`}
              />
            )}
          </motion.g>
        ))}

        {/* Grid Pattern */}
        <defs>
          <pattern
            id="grid"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="rgba(117, 138, 147, 0.05)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="1000" height="1000" fill="url(#grid)" />
      </svg>

      {/* Gradient Orbs */}
      <div className={styles.orb + " " + styles.orb1}></div>
      <div className={styles.orb + " " + styles.orb2}></div>
      <div className={styles.orb + " " + styles.orb3}></div>
    </div>
  );
};
