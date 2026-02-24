"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  FadeInUp,
  ScaleIn,
  TextReveal,
  AnimatedButton,
} from "@/components/animations";
import { RootLayout } from "@/components/layout/RootLayout";
import styles from "./page.module.css";

gsap.registerPlugin(ScrollTrigger);

const useCountUp = (
  end: number,
  duration: number = 2,
  triggerRef: React.RefObject<HTMLElement | null>
) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!triggerRef.current || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = (currentTime - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(triggerRef.current);
    return () => observer.disconnect();
  }, [end, duration, triggerRef]);

  return count;
};

const StatCard = ({
  number,
  suffix,
  label,
}: {
  number: number;
  suffix: string;
  label: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(number, 2, ref);

  return (
    <div ref={ref} className={`${styles.statCard} aboutStat`}>
      <span className={styles.statNumber}>
        {count}
        {suffix}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
};

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document
      .querySelector("#projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" ref={heroRef} className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>
            <span className={styles.labelLine}></span>
            <span>Business Consulting Excellence</span>
          </div>

          <h1 ref={titleRef} className={styles.heroTitle}>
            <TextReveal>
              <span>Strategic Excellence</span>
            </TextReveal>
            <TextReveal delay={0.1}>
              <span>in Business Consulting</span>
            </TextReveal>
          </h1>

          <FadeInUp delay={0.6}>
            <p className={styles.heroSubtitle}>
              Empowering businesses through innovative strategies and
              sustainable growth solutions
            </p>
          </FadeInUp>

          <FadeInUp delay={0.8}>
            <div className={styles.heroButtons}>
              <AnimatedButton
                label="Get Started"
                href="#contact"
                onClick={scrollToContact}
              />
              <AnimatedButton
                label="View Our Work"
                href="#projects"
                onClick={scrollToProjects}
                variant="outline"
              />
            </div>
          </FadeInUp>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollLine}>
          <div className={styles.scrollDot}></div>
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
    { number: 15, suffix: "+", label: "Years Experience" },
    { number: 200, suffix: "+", label: "Projects Completed" },
    { number: 50, suffix: "+", label: "Expert Consultants" },
    { number: 98, suffix: "%", label: "Client Satisfaction" },
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

          <div>
            <div className={styles.aboutImageWrapper}>
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                alt="Professional business team collaborating in a modern office setting"
                width={600}
                height={500}
                className={styles.aboutImage}
                loading="lazy"
              />
            </div>

            <div className={styles.aboutStats}>
              {stats.map((stat) => (
                <StatCard
                  key={stat.label}
                  number={stat.number}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
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
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      imageAlt:
        "Business strategy meeting with team analyzing market data and growth opportunities",
    },
    {
      number: "02",
      title: "Operations Excellence",
      description:
        "Optimize your operations for maximum efficiency and sustainable performance.",
      features: ["Process Optimization", "Cost Reduction", "Supply Chain"],
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65b?w=400&h=300&fit=crop",
      imageAlt:
        "Operations management dashboard showing efficiency metrics and supply chain data",
    },
    {
      number: "03",
      title: "Digital Transformation",
      description:
        "Navigate the digital landscape with innovative technology solutions.",
      features: ["Tech Assessment", "Digital Strategy", "Implementation"],
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
      imageAlt:
        "Digital transformation technology with code on modern laptop screen",
    },
    {
      number: "04",
      title: "Financial Advisory",
      description:
        "Make informed financial decisions with expert guidance and analysis.",
      features: ["M&A Advisory", "Valuation", "Due Diligence"],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      imageAlt:
        "Financial analysis with charts, graphs and business documents on desk",
    },
  ];

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

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
                role="button"
                tabIndex={0}
                onClick={scrollToContact}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") scrollToContact();
                }}
              >
                <div className={styles.serviceImageWrapper}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={400}
                    height={300}
                    className={styles.serviceImage}
                    loading="lazy"
                  />
                  <div className={styles.serviceImageOverlay}></div>
                </div>
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
                <div className={styles.serviceCardCta}>
                  <span>Learn More</span>
                  <span className={styles.serviceArrow}>→</span>
                </div>
              </motion.div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Global Retail Transformation",
      category: "Strategy",
      description: "Complete digital transformation for a Fortune 500 retailer",
      result: "+45% Revenue Growth",
      details:
        "We partnered with a leading global retailer to overhaul their digital infrastructure, implementing an omnichannel strategy that unified online and in-store experiences. The project spanned 18 months and involved restructuring supply chain operations, deploying new CRM systems, and training 5,000+ employees.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      imageAlt:
        "Modern retail store interior showcasing digital transformation results",
    },
    {
      title: "Manufacturing Excellence",
      category: "Operations",
      description: "Supply chain optimization across 12 countries",
      result: "-30% Operating Costs",
      details:
        "Our operations team conducted a comprehensive analysis of manufacturing processes across 12 countries, identifying bottlenecks and implementing lean methodologies. We streamlined logistics, reduced waste by 40%, and established real-time monitoring dashboards for all production lines.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
      imageAlt:
        "Industrial facility floor showing optimized manufacturing operations",
    },
    {
      title: "Tech Startup Scale-up",
      category: "Growth",
      description: "Strategic planning for Series B funding",
      result: "$50M Funding Secured",
      details:
        "We helped a fast-growing fintech startup prepare for Series B funding by refining their business model, building comprehensive financial projections, and crafting a compelling investor narrative. Our strategic guidance led to multiple term sheets and a successful $50M raise.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      imageAlt:
        "Startup team celebrating successful funding round in collaborative workspace",
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
              <motion.article
                className={styles.projectCard}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${project.title}`}
                onClick={() =>
                  setSelectedProject(
                    selectedProject === index ? null : index
                  )
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    setSelectedProject(
                      selectedProject === index ? null : index
                    );
                }}
              >
                <div className={styles.projectImage}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={600}
                    height={400}
                    className={styles.projectImageImg}
                    loading="lazy"
                  />
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
                  <div className={styles.projectViewMore}>
                    <span>
                      {selectedProject === index
                        ? "Close"
                        : "View Details"}
                    </span>
                    <span
                      className={styles.projectArrow}
                      style={{
                        transform:
                          selectedProject === index
                            ? "rotate(90deg)"
                            : "none",
                      }}
                    >
                      →
                    </span>
                  </div>
                </div>

                <AnimatePresence>
                  {selectedProject === index && (
                    <motion.div
                      className={styles.projectDetails}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{project.details}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
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
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (submitStatus === "submitting") return;

      setSubmitStatus("submitting");

      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus("success");
      setFormState({ name: "", email: "", company: "", message: "" });

      setTimeout(() => setSubmitStatus("idle"), 5000);
    },
    [submitStatus]
  );

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
                <a
                  href="mailto:contact@prajnawisesa.com"
                  className={styles.contactItem}
                >
                  <span className={styles.contactLabel}>Email</span>
                  <span>contact@prajnawisesa.com</span>
                </a>
                <a href="tel:+6281234567890" className={styles.contactItem}>
                  <span className={styles.contactLabel}>Phone</span>
                  <span>+62 812 3456 7890</span>
                </a>
                <a
                  href="https://maps.google.com/?q=Jakarta+Indonesia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactItem}
                >
                  <span className={styles.contactLabel}>Location</span>
                  <span>Jakarta, Indonesia</span>
                </a>
              </div>
            </FadeInUp>
          </div>

          <div className={styles.contactForm}>
            <FadeInUp delay={0.2}>
              <div className={styles.contactImageWrapper}>
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"
                  alt="Team collaboration and communication in professional consulting setting"
                  width={500}
                  height={500}
                  className={styles.contactImage}
                  loading="lazy"
                />
              </div>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    autoComplete="name"
                    aria-label="Your full name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    autoComplete="email"
                    aria-label="Your email address"
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formState.company}
                    onChange={handleChange}
                    autoComplete="organization"
                    aria-label="Your company name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    aria-label="Project description"
                  ></textarea>
                </div>

                <AnimatePresence mode="wait">
                  {submitStatus === "success" ? (
                    <motion.div
                      key="success"
                      className={styles.successMessage}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <span>
                        Thank you! We&apos;ll get back to you within 24 hours.
                      </span>
                    </motion.div>
                  ) : (
                    <motion.div key="button" exit={{ opacity: 0 }}>
                      <button
                        type="submit"
                        className={styles.submitButton}
                        disabled={submitStatus === "submitting"}
                      >
                        <span>
                          {submitStatus === "submitting"
                            ? "Sending..."
                            : "Send Message"}
                        </span>
                        {submitStatus === "submitting" ? (
                          <span className={styles.spinner} />
                        ) : (
                          <span className={styles.submitArrow}>→</span>
                        )}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
};

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={styles.backToTop}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default function Home() {
  return (
    <RootLayout>
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
        <BackToTop />
      </main>
    </RootLayout>
  );
}
