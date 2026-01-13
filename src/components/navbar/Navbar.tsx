"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import styles from "./Navbar.module.css";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Us", href: "#contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const overlayRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Setup GSAP timeline for menu animation
    const tl = gsap.timeline({ paused: true });

    tl.to(
      overlayRef.current,
      {
        opacity: 1,
        visibility: "visible",
        duration: 0.3,
      },
      0
    )
      .to(
        menuRef.current,
        {
          x: 0,
          duration: 0.5,
        },
        0
      )
      .fromTo(
        menuItemsRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.08, duration: 0.4 },
        0.2
      );

    timelineRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (timelineRef.current) {
      if (isMenuOpen) {
        document.body.style.overflow = "hidden";
        timelineRef.current.play();
      } else {
        document.body.style.overflow = "";
        timelineRef.current.reverse();
      }
    }
  }, [isMenuOpen]);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
      e.preventDefault();
      setActiveItem(label);
      setIsMenuOpen(false);

      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    },
    []
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
          isMenuOpen ? styles.menuOpen : ""
        }`}
      >
        <div className={styles.container}>
          <Link
            href="#home"
            className={styles.logo}
            onClick={(e) => handleLinkClick(e, "#home", "Home")}
          >
            <span className={styles.logoText}>PRAJNAWISESA</span>
          </Link>

          <nav className={styles.desktopNav}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`${styles.navLink} ${
                  activeItem === item.label ? styles.active : ""
                }`}
                onClick={(e) => handleLinkClick(e, item.href, item.label)}
              >
                <span className={styles.navLinkText}>{item.label}</span>
              </Link>
            ))}
          </nav>

          <button className={styles.ctaButton}>Get Started</button>

          <button
            className={`${styles.menuButton} ${
              isMenuOpen ? styles.menuButtonActive : ""
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.menuLine}></span>
            <span className={styles.menuLine}></span>
            <span className={styles.menuLine}></span>
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className={styles.overlay}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Slide-out Menu */}
      <div ref={menuRef} className={styles.slideMenu}>
        <div className={styles.slideMenuContent}>
          <div className={styles.menuHeader}>
            <span className={styles.menuTitle}>Navigation</span>
            <button
              className={styles.closeButton}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <nav className={styles.menuNav}>
            {navItems.map((item, index) => (
              <div
                key={item.label}
                ref={(el) => {
                  menuItemsRef.current[index] = el;
                }}
                className={styles.menuItem}
              >
                <Link
                  href={item.href}
                  className={styles.menuLink}
                  onClick={(e) => handleLinkClick(e, item.href, item.label)}
                >
                  <span className={styles.menuLinkNumber}>0{index + 1}</span>
                  <span className={styles.menuLinkTitle}>{item.label}</span>
                </Link>
              </div>
            ))}
          </nav>

          <div className={styles.menuFooter}>
            <p className={styles.menuFooterText}>
              Business Consulting Excellence
            </p>
            <div className={styles.socialLinks}>
              <a
                href="mailto:contact@prajnawisesa.com"
                className={styles.socialLink}
              >
                Email
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
