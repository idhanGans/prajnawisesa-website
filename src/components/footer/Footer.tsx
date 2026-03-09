"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Footer.module.css";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const LOGO_SRC = "/logo.png";
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
        },
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
          },
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Studi Kasus", href: "#projects" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontak", href: "#contact" },
  ];

  const serviceLinks = [
    { name: "Business Transformation", href: "#services" },
    { name: "Financial Services", href: "#services" },
    { name: "People Development", href: "#services" },
    { name: "Business Administration", href: "#services" },
    { name: "Strategic Advisory", href: "#services" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/prajnawisesa-konsultan",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/prajnawisesa",
    },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
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
            <div className={styles.brandLogo}>
              <Image
                src={LOGO_SRC}
                alt="Prajnawisesa Konsultan"
                width={320}
                height={66}
                className={styles.brandLogoImage}
              />
              <span className={styles.brandLogoText}>
                Prajnawisesa Konsultan
              </span>
            </div>
            <p className={styles.brandTagline}>
              Konsultan bisnis profesional yang menghadirkan perspektif berbeda
              untuk membangun usaha yang berkelanjutan di Malang dan Jawa Timur.
            </p>
            <div className={styles.contactEmail}>
              <span>Hubungi Kami</span>
              <a href="mailto:contact@prajnawisesa.co">
                contact@prajnawisesa.co
              </a>
            </div>
            <div className={styles.contactEmail}>
              <span>Telepon</span>
              <a href="tel:+623414359807">+62 341 435 9807</a>
            </div>
          </div>

          <div className={styles.linksColumn}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Navigasi</h4>
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
              <h4 className={styles.linkTitle}>Layanan</h4>
              <ul className={styles.linkList}>
                {serviceLinks.map((link) => (
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
              <h4 className={styles.linkTitle}>Lokasi & Sosial</h4>
              <div className={styles.locationInfo}>
                <p>
                  Malang Trade Center Blok A-17
                  <br />
                  Jl. Raden Panji Suroso
                  <br />
                  Malang, Jawa Timur 65125
                </p>
              </div>
              <ul className={styles.linkList} style={{ marginTop: "1rem" }}>
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
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            &copy; {currentYear} Prajnawisesa Konsultan. All rights reserved.
          </p>
          <p className={styles.credits}>
            Konsultan Bisnis Profesional &middot; Malang, Jawa Timur
          </p>
        </div>

        <div ref={brandRef} className={styles.largeBrand} aria-hidden="true">
          PRAJNAWISESA
        </div>
      </div>
    </footer>
  );
};
