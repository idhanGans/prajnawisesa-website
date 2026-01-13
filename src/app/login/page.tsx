"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { GeometricBackground } from "@/components/layout/GeometricBackground";
import styles from "./page.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title letters
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll(".char");
        gsap.fromTo(
          chars,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.05, duration: 1, delay: 0.5 }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleEnter = () => {
    setIsAnimating(true);

    gsap.to(containerRef.current, {
      opacity: 0,
      scale: 1.1,
      duration: 1,
      onComplete: () => {
        router.push("/home");
      },
    });
  };

  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="char" style={{ display: "inline-block" }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <>
      <GeometricBackground />
      <div ref={containerRef} className={styles.container}>
        <div className={styles.content}>
          {/* Label */}
          <motion.div
            className={styles.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className={styles.labelLine}></span>
            <span>Business Consultant</span>
          </motion.div>

          {/* Title */}
          <h1 ref={titleRef} className={styles.title}>
            {splitText("PRAJNAWISESA")}
          </h1>

          {/* Subtitle */}
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Strategic Excellence • Business Transformation • Growth Partners
          </motion.p>

          {/* Description */}
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Empowering businesses with innovative strategies and expert
            consulting to navigate complex challenges and achieve sustainable
            success.
          </motion.p>

          {/* Enter Button */}
          <motion.button
            className={styles.button}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleEnter}
            disabled={isAnimating}
          >
            <span className={styles.buttonText}>Explore Our Services</span>
            <span className={styles.buttonArrow}>→</span>
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className={styles.scrollText}>Enter</span>
          <div className={styles.scrollLine}>
            <motion.div
              className={styles.scrollDot}
              animate={{ y: [0, 40, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Corner Elements */}
        <div className={styles.cornerTL}></div>
        <div className={styles.cornerBR}></div>
      </div>
    </>
  );
}
