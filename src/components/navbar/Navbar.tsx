"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import styles from "./Navbar.module.css";

interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}

const navItems: NavItem[] = [
  { label: "Beranda", href: "#home", sectionId: "home" },
  { label: "Tentang", href: "#about", sectionId: "about" },
  { label: "Layanan", href: "#services", sectionId: "services" },
  { label: "Studi Kasus", href: "#projects", sectionId: "projects" },
  { label: "Kontak", href: "#contact", sectionId: "contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const overlayRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.sectionId);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(
      overlayRef.current,
      { opacity: 1, visibility: "visible", duration: 0.3 },
      0
    )
      .to(menuRef.current, { x: 0, duration: 0.5, ease: "power3.inOut" }, 0)
      .fromTo(
        menuItemsRef.current,
        { x: 80, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.06, duration: 0.4, ease: "power2.out" },
        0.2
      );

    timelineRef.current = tl;
    return () => { tl.kill(); };
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
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
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
        ref={headerRef}
        className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
          isMenuOpen ? styles.menuOpen : ""
        }`}
      >
        <div className={styles.container}>
          <Link
            href="#home"
            className={styles.logo}
            onClick={(e) => handleLinkClick(e, "#home")}
          >
            <span className={styles.logoText}>PRAJNAWISESA</span>
          </Link>

          <nav className={styles.desktopNav} aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`${styles.navLink} ${
                  activeSection === item.sectionId ? styles.active : ""
                }`}
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                <span className={styles.navLinkText}>{item.label}</span>
              </Link>
            ))}
          </nav>

          <button
            className={styles.ctaButton}
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Konsultasi Gratis
          </button>

          <button
            className={`${styles.menuButton} ${
              isMenuOpen ? styles.menuButtonActive : ""
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={styles.menuLine}></span>
            <span className={styles.menuLine}></span>
            <span className={styles.menuLine}></span>
          </button>
        </div>
      </header>

      <div
        ref={overlayRef}
        className={styles.overlay}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <div ref={menuRef} className={styles.slideMenu} role="dialog" aria-label="Navigation menu">
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

          <nav className={styles.menuNav} aria-label="Mobile navigation">
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
                  className={`${styles.menuLink} ${
                    activeSection === item.sectionId ? styles.menuLinkActive : ""
                  }`}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  <span className={styles.menuLinkNumber}>0{index + 1}</span>
                  <span className={styles.menuLinkTitle}>{item.label}</span>
                </Link>
              </div>
            ))}
          </nav>

          <div className={styles.menuFooter}>
            <p className={styles.menuFooterText}>
              Konsultan Bisnis Profesional &middot; Malang
            </p>
            <div className={styles.socialLinks}>
              <a
                href="mailto:contact@prajnawisesa.co"
                className={styles.socialLink}
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/company/prajnawisesa-konsultan"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/prajnawisesa"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
