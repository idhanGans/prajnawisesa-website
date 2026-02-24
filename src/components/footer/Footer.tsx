"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Footer.module.css";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        brandRef.current,
        { opacity: 0.3 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );

      if (linksRef.current) {
        const linkItems = linksRef.current.querySelectorAll("a, p");
        gsap.fromTo(
          linkItems,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.04,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/prajnawisesa" },
    { name: "Twitter", href: "https://twitter.com/prajnawisesa" },
    { name: "Instagram", href: "https://instagram.com/prajnawisesa" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer ref={footerRef} className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.topSection} ref={linksRef}>
          <div className={styles.brandColumn}>
            <h3 className={styles.brandName}>PRAJNAWISESA</h3>
            <p className={styles.brandTagline}>
              Strategic business consulting that drives growth and transforms
              organizations.
            </p>
            <div className={styles.contactEmail}>
              <span>Get in touch</span>
              <a href="mailto:contact@prajnawisesa.com">
                contact@prajnawisesa.com
              </a>
            </div>
          </div>

          <div className={styles.linksColumn}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Navigation</h4>
              <ul className={styles.linkList}>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Connect</h4>
              <ul className={styles.linkList}>
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="tel:+6281234567890">+62 812 3456 7890</a>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Location</h4>
              <div className={styles.locationInfo}>
                <p>Jakarta, Indonesia</p>
                <p>Available Worldwide</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            &copy; {currentYear} Prajnawisesa Consultant. All rights reserved.
          </p>
          <p className={styles.credits}>Designed &amp; Built with Excellence</p>
        </div>

        <div ref={brandRef} className={styles.largeBrand} aria-hidden="true">
          PRAJNAWISESA
        </div>
      </div>
    </footer>
  );
};
