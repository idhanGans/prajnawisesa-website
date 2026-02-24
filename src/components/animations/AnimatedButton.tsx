"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import styles from "./AnimatedButton.module.css";

interface AnimatedButtonProps {
  href?: string;
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "dark";
  target?: boolean;
  className?: string;
}

export const AnimatedButton = ({
  href,
  label,
  onClick,
  variant = "primary",
  target = false,
  className = "",
}: AnimatedButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const relsRef = useRef({ relX: 0, relY: 0 });

  const handleMouseEnter = useCallback((e: React.MouseEvent) => {
    const button = buttonRef.current;
    const span = spanRef.current;
    if (!button || !span) return;

    const { clientY } = e;
    const parentOffset = button.getBoundingClientRect();
    const isTop = clientY < parentOffset.top + parentOffset.height / 2;
    const relX = ((e.pageX - parentOffset.left) / parentOffset.width) * 100;
    const relY = isTop ? 0 : 100;

    relsRef.current = { relX, relY };

    gsap.set(span, { top: `${relY}%`, left: `${relX}%`, scale: 0 });
    gsap.to(span, { scale: 2.5, duration: 0.5 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    const span = spanRef.current;
    if (!span) return;

    const { relX, relY } = relsRef.current;
    gsap.to(span, {
      scale: 0,
      duration: 0.5,
      top: `${relY}%`,
      left: `${relX}%`,
    });
  }, []);

  const isHash = href?.startsWith("#");
  const isExternal = href?.startsWith("http") || target;

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
      return;
    }

    if (isHash && href) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [onClick, isHash, href]);

  const buttonElement = (
    <button
      ref={buttonRef}
      type="button"
      aria-label={label}
      className={`${styles.button} ${styles[variant]} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.arrow}>→</span>
      <span className={styles.hoverEffect} ref={spanRef} />
    </button>
  );

  if (isHash || !href) {
    return buttonElement;
  }

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={styles.link}
      >
        {buttonElement}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={label} className={styles.link}>
      {buttonElement}
    </Link>
  );
};
