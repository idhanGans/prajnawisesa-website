"use client";

import { motion } from "framer-motion";
import { FadeInUp, ScaleIn } from "@/components/animations";
import { RootLayout } from "@/components/layout/RootLayout";
import styles from "./page.module.css";

const HeroSection = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <FadeInUp delay={0.2}>
          <motion.h1 className={styles.heroTitle}>
            Welcome to <span className={styles.highlight}>Prajnawisesa</span>
          </motion.h1>
        </FadeInUp>

        <FadeInUp delay={0.4}>
          <p className={styles.heroSubtitle}>
            Digital Solutions for Tomorrow&apos;s Challenges
          </p>
        </FadeInUp>

        <FadeInUp delay={0.6}>
          <motion.button
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
          </motion.button>
        </FadeInUp>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <FadeInUp>
          <h2 className={styles.sectionTitle}>About Us</h2>
        </FadeInUp>

        <div className={styles.aboutGrid}>
          {["Innovation", "Excellence", "Trust"].map((item, index) => (
            <ScaleIn key={item} delay={index * 0.2}>
              <div className={styles.aboutCard}>
                <div className={styles.cardIcon}>
                  <span>{String.fromCharCode(9733)}</span>
                </div>
                <h3>{item}</h3>
                <p>
                  {item === "Innovation"
                    ? "We push boundaries with cutting-edge solutions"
                    : item === "Excellence"
                    ? "Quality is at the core of everything we do"
                    : "Your success is our commitment"}
                </p>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Web Design",
      description: "Beautiful and responsive digital experiences",
    },
    { title: "Development", description: "Robust and scalable applications" },
    { title: "Strategy", description: "Data-driven business solutions" },
    {
      title: "Consulting",
      description: "Expert guidance for digital transformation",
    },
  ];

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <FadeInUp>
          <h2 className={styles.sectionTitle}>Our Services</h2>
        </FadeInUp>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <FadeInUp key={service.title} delay={index * 0.1}>
              <motion.div
                className={styles.serviceCard}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(212, 175, 55, 0.2)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    { title: "Project Alpha", category: "Web Design" },
    { title: "Project Beta", category: "Development" },
    { title: "Project Gamma", category: "Strategy" },
  ];

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <FadeInUp>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
        </FadeInUp>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ScaleIn key={project.title} delay={index * 0.15}>
              <motion.div
                className={styles.projectCard}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={styles.projectImage}></div>
                <h3>{project.title}</h3>
                <span className={styles.category}>{project.category}</span>
              </motion.div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className={styles.ctaSection}>
      <FadeInUp>
        <h2>Ready to Transform Your Business?</h2>
        <p>Let&apos;s create something extraordinary together.</p>
        <motion.button
          className={styles.largeCtaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.button>
      </FadeInUp>
    </section>
  );
};

export default function HomePage() {
  return (
    <RootLayout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <CTASection />
    </RootLayout>
  );
}
