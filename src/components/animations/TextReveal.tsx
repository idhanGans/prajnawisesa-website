"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./TextReveal.module.css";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const TextReveal = ({
  children,
  className = "",
  delay = 0,
}: TextRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) return;

    gsap.set(text, { yPercent: 100 });

    const animation = gsap.to(text, {
      yPercent: 0,
      duration: 1,
      delay,
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [delay]);

  return (
    <div ref={containerRef} className={`${styles.container} ${className}`}>
      <div ref={textRef} className={styles.text}>
        {children}
      </div>
    </div>
  );
};
