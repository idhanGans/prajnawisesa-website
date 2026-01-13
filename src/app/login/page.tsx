"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GeometricBackground } from "@/components/layout/GeometricBackground";
import styles from "./page.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleEnter = () => {
    setIsAnimating(true);
    setTimeout(() => {
      router.push("/home");
    }, 1200);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.6 },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(212, 175, 55, 0.4)",
    },
    tap: {
      scale: 0.95,
    },
  };

  const exitVariants = {
    exit: {
      opacity: 0,
      scale: 1.2,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <>
      <GeometricBackground />
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit={isAnimating ? "exit" : "visible"}
      >
        {/* Content */}
        <div className={styles.content}>
          <motion.h1 className={styles.title} variants={titleVariants}>
            Prajnawisesa
          </motion.h1>

          <motion.p className={styles.subtitle} variants={subtitleVariants}>
            Welcome to Innovation & Excellence
          </motion.p>

          <motion.p className={styles.description} variants={subtitleVariants}>
            Transforming ideas into digital reality with cutting-edge solutions
          </motion.p>

          {/* Enter Button */}
          <motion.button
            className={styles.button}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={handleEnter}
            disabled={isAnimating}
          >
            <motion.span
              initial={{ opacity: 1 }}
              animate={
                isAnimating ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }
              }
              transition={{ duration: 0.3 }}
            >
              Enter Site
            </motion.span>
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className={styles.scrollIndicator}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>↓</span>
        </motion.div>
      </motion.div>
    </>
  );
}
