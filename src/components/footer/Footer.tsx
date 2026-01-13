"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const socialLinks = [
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "GitHub", href: "#" },
  ];

  const companyLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ];

  return (
    <motion.footer
      className={styles.footer}
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Company Info */}
          <motion.div className={styles.column} variants={itemVariants}>
            <h3 className={styles.heading}>Prajnawisesa</h3>
            <p className={styles.description}>
              Building digital excellence through innovative solutions and
              cutting-edge technology.
            </p>
          </motion.div>

          {/* Company Links */}
          <motion.div className={styles.column} variants={itemVariants}>
            <h4 className={styles.subHeading}>Company</h4>
            <ul className={styles.links}>
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div className={styles.column} variants={itemVariants}>
            <h4 className={styles.subHeading}>Legal</h4>
            <ul className={styles.links}>
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div className={styles.column} variants={itemVariants}>
            <h4 className={styles.subHeading}>Follow Us</h4>
            <ul className={styles.socialLinks}>
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Prajnawisesa. All rights reserved.
          </p>
          <p className={styles.credit}>
            Crafted with care for modern businesses.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};
