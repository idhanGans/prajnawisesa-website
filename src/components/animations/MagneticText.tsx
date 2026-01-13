"use client";

import { useRef, useCallback } from "react";
import { gsap } from "gsap";
import styles from "./MagneticText.module.css";

interface MagneticTextProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export const MagneticText = ({
  children,
  className = "",
  strength = 0.3,
}: MagneticTextProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const element = elementRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      gsap.to(element, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
      });
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
    });
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${styles.magnetic} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};
