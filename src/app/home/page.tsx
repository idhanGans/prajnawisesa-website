"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FadeInUp,
  ScaleIn,
  TextReveal,
  AnimatedButton,
} from "@/components/animations";
import { RootLayout } from "@/components/layout/RootLayout";
import styles from "./page.module.css";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate grid lines
      gsap.fromTo(
        ".gridLine",
        { scaleY: 0 },
        { scaleY: 1, stagger: 0.1, duration: 1.5, delay: 0.5 }
      );

      // Scroll-based parallax
      gsap.to(titleRef.current, {
        y: 100,
        opacity: 0.3,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className={styles.hero}>
      <div className={styles.heroGrid}>
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`${styles.gridLine} gridLine`} />
        ))}
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroLabel}>
          <span className={styles.labelLine}></span>
          <span>Business Consulting Excellence</span>
        </div>

        <h1 ref={titleRef} className={styles.heroTitle}>
          <TextReveal>
            <span className={styles.titleLight}>Strategic</span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <span className={styles.titleBold}>Business</span>
          </TextReveal>
          <TextReveal delay={0.2}>
            <span className={styles.highlight}>Solutions</span>
          </TextReveal>
        </h1>

        <FadeInUp delay={0.6}>
          <p className={styles.heroSubtitle}>
            Transform your business with expert consulting services. We deliver
            innovative strategies that drive growth and success.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.8}>
          <div className={styles.heroButtons}>
            <AnimatedButton label="Get Started" href="#contact" />
            <AnimatedButton
              label="Our Services"
              href="#services"
              variant="outline"
            />
          </div>
        </FadeInUp>

        <div className={styles.scrollIndicator}>
          <span>Scroll</span>
          <div className={styles.scrollLine}>
            <div className={styles.scrollDot}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".aboutStat",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Expert Consultants" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" ref={sectionRef} className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutContent}>
            <div className={styles.sectionLabel}>
              <span>01</span>
              <span className={styles.labelText}>About Us</span>
            </div>

            <TextReveal>
              <h2 className={styles.aboutTitle}>
                We help businesses grow through strategic consulting
              </h2>
            </TextReveal>

            <FadeInUp delay={0.3}>
              <p className={styles.aboutDescription}>
                At Prajnawisesa Consultant, we combine deep industry expertise
                with innovative thinking to solve complex business challenges.
                Our team of seasoned professionals delivers tailored solutions
                that drive measurable results.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <p className={styles.aboutDescription}>
                From strategy development to operational excellence, we partner
                with organizations to unlock their full potential and achieve
                sustainable growth.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.7}>
              <AnimatedButton
                label="Learn More"
                href="#services"
                variant="outline"
              />
            </FadeInUp>
          </div>

          <div className={styles.aboutStats}>
            {stats.map((stat) => (
              <div key={stat.label} className={`${styles.statCard} aboutStat`}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      number: "01",
      title: "Strategy Consulting",
      description:
        "Develop comprehensive business strategies that align with your goals and market dynamics.",
      features: [
        "Market Analysis",
        "Growth Strategy",
        "Competitive Positioning",
      ],
    },
    {
      number: "02",
      title: "Operations Excellence",
      description:
        "Optimize your operations for maximum efficiency and sustainable performance.",
      features: ["Process Optimization", "Cost Reduction", "Supply Chain"],
    },
    {
      number: "03",
      title: "Digital Transformation",
      description:
        "Navigate the digital landscape with innovative technology solutions.",
      features: ["Tech Assessment", "Digital Strategy", "Implementation"],
    },
    {
      number: "04",
      title: "Financial Advisory",
      description:
        "Make informed financial decisions with expert guidance and analysis.",
      features: ["M&A Advisory", "Valuation", "Due Diligence"],
    },
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.servicesHeader}>
          <div className={styles.sectionLabel}>
            <span>02</span>
            <span className={styles.labelText}>Services</span>
          </div>

          <TextReveal>
            <h2 className={styles.servicesTitle}>
              Expertise that drives results
            </h2>
          </TextReveal>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <FadeInUp key={service.title} delay={index * 0.1}>
              <motion.div
                className={styles.serviceCard}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className={styles.serviceNumber}>{service.number}</span>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
                <ul className={styles.serviceFeatures}>
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
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
    {
      title: "Global Retail Transformation",
      category: "Strategy",
      description: "Complete digital transformation for a Fortune 500 retailer",
      result: "+45% Revenue Growth",
    },
    {
      title: "Manufacturing Excellence",
      category: "Operations",
      description: "Supply chain optimization across 12 countries",
      result: "-30% Operating Costs",
    },
    {
      title: "Tech Startup Scale-up",
      category: "Growth",
      description: "Strategic planning for Series B funding",
      result: "$50M Funding Secured",
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.projectsHeader}>
          <div className={styles.sectionLabel}>
            <span>03</span>
            <span className={styles.labelText}>Projects</span>
          </div>

          <TextReveal>
            <h2 className={styles.projectsTitle}>Featured case studies</h2>
          </TextReveal>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ScaleIn key={project.title} delay={index * 0.15}>
              <motion.div
                className={styles.projectCard}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={styles.projectImage}>
                  <span className={styles.projectIndex}>0{index + 1}</span>
                </div>
                <div className={styles.projectInfo}>
                  <span className={styles.projectCategory}>
                    {project.category}
                  </span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                  <span className={styles.projectResult}>{project.result}</span>
                </div>
              </motion.div>
            </ScaleIn>
          ))}
        </div>

        <FadeInUp delay={0.4}>
          <div className={styles.projectsCta}>
            <AnimatedButton
              label="View All Projects"
              href="#contact"
              variant="outline"
            />
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.contactGrid}>
          <div className={styles.contactContent}>
            <div className={styles.sectionLabel}>
              <span>04</span>
              <span className={styles.labelText}>Contact</span>
            </div>

            <TextReveal>
              <h2 className={styles.contactTitle}>
                Let&apos;s discuss your project
              </h2>
            </TextReveal>

            <FadeInUp delay={0.3}>
              <p className={styles.contactDescription}>
                Ready to take your business to the next level? Get in touch with
                our team of experts and discover how we can help you achieve
                your goals.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Email</span>
                  <a href="mailto:contact@prajnawisesa.com">
                    contact@prajnawisesa.com
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Phone</span>
                  <a href="tel:+6281234567890">+62 812 3456 7890</a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Location</span>
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>
            </FadeInUp>
          </div>

          <div className={styles.contactForm}>
            <FadeInUp delay={0.2}>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className={styles.formGroup}>
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className={styles.formGroup}>
                  <input type="text" placeholder="Company Name" />
                </div>
                <div className={styles.formGroup}>
                  <textarea
                    placeholder="Tell us about your project"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <AnimatedButton label="Send Message" />
              </form>
            </FadeInUp>
          </div>
        </div>
      </div>
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
      <ContactSection />
    </RootLayout>
  );
}
