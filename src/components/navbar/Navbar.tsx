"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HoverScale } from "@/components/animations";
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
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const handleNavClick = (label: string) => {
    setActiveItem(label);
    setIsOpen(false);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <span>Prajnawisesa</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <motion.ul
          className={styles.navMenu}
          variants={menuVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item) => (
            <motion.li key={item.label} variants={itemVariants}>
              <HoverScale scale={1.1}>
                <a
                  href={item.href}
                  className={`${styles.navLink} ${
                    activeItem === item.label ? styles.active : ""
                  }`}
                  onClick={() => handleNavClick(item.label)}
                >
                  {item.label}
                </a>
              </HoverScale>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA Button */}
        <HoverScale>
          <button className={styles.ctaButton}>Get Started</button>
        </HoverScale>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.ul
          className={styles.mobileMenu}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`${styles.mobileNavLink} ${
                  activeItem === item.label ? styles.active : ""
                }`}
                onClick={() => handleNavClick(item.label)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};
