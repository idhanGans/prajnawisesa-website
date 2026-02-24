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

/* ───────── HERO ───────── */
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

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" ref={heroRef} className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>
            <span className={styles.labelLine}></span>
            <span>Konsultan Bisnis Profesional &middot; Malang</span>
          </div>

          <h1 ref={titleRef} className={styles.heroTitle}>
            <TextReveal>
              <span>Solusi Strategis untuk</span>
            </TextReveal>
            <TextReveal delay={0.1}>
              <span>Pertumbuhan Bisnis Berkelanjutan</span>
            </TextReveal>
          </h1>

          <FadeInUp delay={0.6}>
            <p className={styles.heroSubtitle}>
              Prajnawisesa Konsultan menghadirkan perspektif berbeda untuk
              membangun usaha yang tangguh, efisien, dan berkelanjutan melalui
              transformasi bisnis yang holistik.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.8}>
            <div className={styles.heroButtons}>
              <AnimatedButton
                label="Konsultasi Gratis"
                href="#contact"
                onClick={() => scrollTo("#contact")}
              />
              <AnimatedButton
                label="Layanan Kami"
                href="#services"
                onClick={() => scrollTo("#services")}
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

/* ───────── ABOUT ───────── */
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
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { number: 2, suffix: ".63B", label: "Pasar Konsultan Indonesia (USD)" },
    { number: 9, suffix: ".4%", label: "CAGR Segmen UKM" },
    { number: 6, suffix: "+", label: "Pilar Layanan" },
    { number: 98, suffix: "%", label: "Kepuasan Klien" },
  ];

  const credentials = [
    { abbr: "CA", title: "Chartered Accountant (IAI)" },
    { abbr: "CFE", title: "Certified Fraud Examiner (ACFE)" },
    { abbr: "Brevet A", title: "Sertifikasi Pajak (IKPI)" },
    { abbr: "CSA", title: "Balanced Scorecard Certified" },
    { abbr: "MM", title: "Master of Management" },
  ];

  return (
    <section id="about" ref={sectionRef} className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutContent}>
            <div className={styles.sectionLabel}>
              <span>01</span>
              <span className={styles.labelText}>Tentang Kami</span>
            </div>

            <TextReveal>
              <h2 className={styles.aboutTitle}>
                Perspektif Berbeda untuk Bisnis yang Berkelanjutan
              </h2>
            </TextReveal>

            <FadeInUp delay={0.3}>
              <p className={styles.aboutDescription}>
                Kami percaya bahwa solusi terbaik lahir dari kolaborasi. Bersama
                Anda, kami menata dan mengembangkan ekosistem bisnis agar siap
                menghadapi tantangan masa depan. Prajnawisesa Konsultan
                berproses bersama klien untuk menciptakan model bisnis yang
                tangguh dan terukur.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <p className={styles.aboutDescription}>
                Menghadirkan solusi berbasis data dan pendekatan personal untuk
                menyelesaikan masalah fundamental dalam operasional bisnis Anda
                — dari transformasi organisasi hingga kepatuhan finansial.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.6}>
              <div className={styles.founderCard}>
                <div className={styles.founderInfo}>
                  <h3 className={styles.founderName}>Desiree Muntu</h3>
                  <p className={styles.founderRole}>Managing Partner</p>
                  <p className={styles.founderBio}>
                    Berpengalaman di Deloitte dan sebagai dosen akuntansi
                    internasional di Universitas Katolik Widya Karya Malang.
                  </p>
                </div>
                <div className={styles.credentials}>
                  {credentials.map((c) => (
                    <span
                      key={c.abbr}
                      className={styles.credentialBadge}
                      title={c.title}
                    >
                      {c.abbr}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.7}>
              <AnimatedButton
                label="Lihat Layanan"
                href="#services"
                variant="dark"
              />
            </FadeInUp>
          </div>

          <div>
            <div className={styles.aboutImageWrapper}>
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                alt="Tim profesional Prajnawisesa Konsultan berkolaborasi di kantor Malang Trade Center"
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

/* ───────── CLIENTS ───────── */
const ClientsSection = () => {
  const clients = [
    "Enterprise",
    "UKM Growth",
    "Start-up",
    "Korporasi",
    "Family Business",
    "BUMN",
  ];

  return (
    <section className={styles.clients}>
      <div className={styles.container}>
        <FadeInUp>
          <p className={styles.clientsLabel}>
            Melayani Berbagai Segmen Bisnis di Jawa Timur
          </p>
        </FadeInUp>
        <div className={styles.clientsGrid}>
          {clients.map((client, index) => (
            <FadeInUp key={client} delay={index * 0.08}>
              <div className={styles.clientItem}>
                <span>{client}</span>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───────── SERVICES (6 Pillars) ───────── */
const ServicesSection = () => {
  const services = [
    {
      number: "01",
      title: "Business Transformation",
      description:
        "Pendampingan perubahan fundamental secara holistik — proses, SDM, sistem, teknologi, dan struktur organisasi — untuk menjamin keberlanjutan bisnis di era dinamis.",
      features: ["Change Management", "Business Communication", "Performance Management"],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      imageAlt: "Tim bisnis merencanakan strategi transformasi di ruang meeting",
    },
    {
      number: "02",
      title: "Financial Services",
      description:
        "Optimalkan likuiditas dan proyeksi finansial dengan analisa arus kas yang akurat. Layanan akuntansi profesional sebagai fondasi pengambilan keputusan bisnis.",
      features: ["Finance & Projection", "Accounting", "Tax Advisory", "AIS"],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      imageAlt: "Analisa keuangan profesional dengan grafik dan laporan di meja kerja",
    },
    {
      number: "03",
      title: "People Development",
      description:
        "Konsultasi SDM, training, dan coaching profesional untuk meningkatkan loyalitas dan kinerja karyawan demi mencapai tujuan perusahaan.",
      features: ["Assessment", "Training & Coaching", "Talent Management"],
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65b?w=400&h=300&fit=crop",
      imageAlt: "Sesi pelatihan dan pengembangan karyawan profesional",
    },
    {
      number: "04",
      title: "Organizational Learning",
      description:
        "Proses menciptakan, mempertahankan, dan mentransfer pengetahuan dalam organisasi untuk menghindari kesalahan berulang dan membangun budaya belajar.",
      features: ["Academy Planning", "Research", "Knowledge Transfer"],
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
      imageAlt: "Sistem pembelajaran organisasi dan manajemen pengetahuan",
    },
    {
      number: "05",
      title: "Business Administration",
      description:
        "Menerjemahkan visi menjadi rencana aksi yang terukur. Perancangan SOP, pengelolaan administrasi, dan sistem informasi manajemen profesional.",
      features: ["Business Plan", "Corporate Secretary", "MIS & SOP", "Reporting"],
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
      imageAlt: "Pengelolaan administrasi bisnis dan perencanaan strategis",
    },
    {
      number: "06",
      title: "Strategic Advisory",
      description:
        "Advisory sebagai tahap awal untuk meminimalkan dampak masalah internal dan eksternal. Arahan dan masukan strategis yang applicable untuk kondisi bisnis Anda.",
      features: ["Risk Assessment", "Strategic Direction", "Partnership"],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      imageAlt: "Konsultasi strategis dengan managing partner di kantor PWK",
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
            <span className={styles.labelText}>Layanan</span>
          </div>

          <TextReveal>
            <h2 className={styles.servicesTitle}>
              Enam Pilar Layanan Profesional
            </h2>
          </TextReveal>

          <FadeInUp delay={0.2}>
            <p className={styles.servicesSubtitle}>
              Solusi menyeluruh untuk setiap aspek bisnis Anda — dari
              transformasi organisasi hingga kepatuhan regulasi.
            </p>
          </FadeInUp>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <FadeInUp key={service.title} delay={index * 0.08}>
              <motion.div
                className={styles.serviceCard}
                whileHover={{ y: -8 }}
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
                  <span>Konsultasi</span>
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

/* ───────── CASE STUDIES ───────── */
const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Transformasi Retail Nasional",
      category: "Business Transformation",
      description:
        "Transformasi digital menyeluruh untuk perusahaan retail skala nasional",
      result: "+45% Pertumbuhan Pendapatan",
      details:
        "Kami bermitra dengan perusahaan retail terkemuka untuk merombak infrastruktur digital mereka, mengimplementasikan strategi omnichannel yang menyatukan pengalaman online dan offline. Proyek ini berlangsung selama 18 bulan, melibatkan restrukturisasi operasional rantai pasok, penerapan CRM baru, dan pelatihan 5.000+ karyawan.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      imageAlt: "Transformasi digital gerai retail modern",
    },
    {
      title: "Optimasi Manufaktur Jawa Timur",
      category: "Financial Services",
      description:
        "Optimasi keuangan dan rantai pasok di 12 lokasi manufaktur",
      result: "-30% Biaya Operasional",
      details:
        "Tim kami melakukan analisa komprehensif terhadap proses manufaktur di 12 lokasi, mengidentifikasi bottleneck dan mengimplementasikan metodologi lean. Kami mengoptimasi logistik, mengurangi waste 40%, dan membangun dashboard monitoring real-time untuk seluruh lini produksi.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
      imageAlt: "Fasilitas manufaktur yang telah dioptimasi operasionalnya",
    },
    {
      title: "Scale-up Startup Fintech",
      category: "Strategic Advisory",
      description:
        "Perencanaan strategis dan pendampingan pendanaan Series B",
      result: "Rp 750M Pendanaan Tercapai",
      details:
        "Kami membantu startup fintech yang berkembang pesat mempersiapkan pendanaan Series B dengan menyempurnakan model bisnis, membangun proyeksi keuangan komprehensif, dan menyusun narasi investor yang meyakinkan. Bimbingan strategis kami menghasilkan multiple term sheet dan pendanaan sukses.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      imageAlt: "Tim startup merayakan keberhasilan pendanaan",
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.projectsHeader}>
          <div className={styles.sectionLabel}>
            <span>03</span>
            <span className={styles.labelText}>Studi Kasus</span>
          </div>

          <TextReveal>
            <h2 className={styles.projectsTitle}>Portofolio Keberhasilan</h2>
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
                aria-label={`Lihat detail ${project.title}`}
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
                      {selectedProject === index ? "Tutup" : "Lihat Detail"}
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
              label="Diskusikan Proyek Anda"
              href="#contact"
              variant="outline"
            />
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

/* ───────── FAQ ───────── */
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Bagaimana proses awal konsultasi di Prajnawisesa Konsultan?",
      a: "Kami memulai dengan Advisory sebagai tahap awal untuk mengenali potensi masalah internal maupun eksternal. Kami kemudian memberikan masukan dan arahan strategis yang sesuai dengan kondisi bisnis Anda saat ini.",
    },
    {
      q: "Apakah layanan pajak PWK mencakup pendampingan pemeriksaan?",
      a: "Ya, kami mendampingi klien dalam tax planning, pelaporan, pengelolaan, hingga pendampingan untuk memberikan pemahaman pajak agar tidak menyalahi aturan yang berlaku.",
    },
    {
      q: "Apa yang membedakan Business Plan yang dibuat oleh PWK?",
      a: "Kami melakukan observasi mendalam terhadap bisnis Anda untuk menghasilkan strategi operasional dan keuangan yang tidak hanya indah di kertas, tetapi juga dapat dilaksanakan (executable) dan dievaluasi secara berkala.",
    },
    {
      q: "Mengapa sistem informasi akuntansi (AIS) sangat penting untuk UKM?",
      a: "Banyak pelaku usaha mengalami kendala pembukuan karena spesifikasi AIS yang tidak sesuai. Kami membantu mengenali potensi software Anda saat ini atau memberikan saran sistem yang tepat untuk laporan yang impresif.",
    },
    {
      q: "Berapa lama durasi program People Development?",
      a: "Durasi program bersifat fleksibel dan disesuaikan dengan hasil analisa kendala SDM perusahaan Anda. Fokus kami adalah menemukan solusi dan merancang perencanaan terorganisir hingga tujuan tercapai.",
    },
  ];

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.faqHeader}>
          <div className={styles.sectionLabel}>
            <span>04</span>
            <span className={styles.labelText}>FAQ</span>
          </div>

          <TextReveal>
            <h2 className={styles.faqTitle}>Pertanyaan yang Sering Diajukan</h2>
          </TextReveal>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <FadeInUp key={index} delay={index * 0.08}>
              <div
                className={`${styles.faqItem} ${
                  openIndex === index ? styles.faqItemOpen : ""
                }`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.q}</span>
                  <span
                    className={styles.faqIcon}
                    style={{
                      transform:
                        openIndex === index ? "rotate(45deg)" : "none",
                    }}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      className={styles.faqAnswer}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───────── CONTACT ───────── */
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
              <span>05</span>
              <span className={styles.labelText}>Kontak</span>
            </div>

            <TextReveal>
              <h2 className={styles.contactTitle}>
                Konsultasi Gratis Sekarang
              </h2>
            </TextReveal>

            <FadeInUp delay={0.3}>
              <p className={styles.contactDescription}>
                Siap membawa bisnis Anda ke level selanjutnya? Hubungi tim ahli
                kami dan temukan bagaimana kami dapat membantu Anda mencapai
                tujuan bisnis yang berkelanjutan.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <div className={styles.contactInfo}>
                <a
                  href="mailto:contact@prajnawisesa.co"
                  className={styles.contactItem}
                >
                  <span className={styles.contactLabel}>Email</span>
                  <span>contact@prajnawisesa.co</span>
                </a>
                <a href="tel:+623414359807" className={styles.contactItem}>
                  <span className={styles.contactLabel}>Telepon</span>
                  <span>+62 341 435 9807</span>
                </a>
                <a
                  href="https://maps.google.com/?q=Malang+Trade+Center+Blok+A-17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactItem}
                >
                  <span className={styles.contactLabel}>Lokasi</span>
                  <span>
                    Malang Trade Center Blok A-17, Jl. Raden Panji Suroso,
                    Malang 65125
                  </span>
                </a>
              </div>
            </FadeInUp>
          </div>

          <div className={styles.contactForm}>
            <FadeInUp delay={0.2}>
              <div className={styles.contactImageWrapper}>
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"
                  alt="Konsultasi bisnis profesional di kantor Prajnawisesa Konsultan Malang"
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
                    placeholder="Nama Lengkap"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    autoComplete="name"
                    aria-label="Nama lengkap Anda"
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    autoComplete="email"
                    aria-label="Alamat email Anda"
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="company"
                    placeholder="Nama Perusahaan"
                    value={formState.company}
                    onChange={handleChange}
                    autoComplete="organization"
                    aria-label="Nama perusahaan Anda"
                  />
                </div>
                <div className={styles.formGroup}>
                  <textarea
                    name="message"
                    placeholder="Ceritakan kebutuhan bisnis Anda"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    aria-label="Deskripsi kebutuhan bisnis"
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
                        Terima kasih! Kami akan menghubungi Anda dalam 24 jam.
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
                            ? "Mengirim..."
                            : "Kirim Pesan"}
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

/* ───────── WHATSAPP ───────── */
const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl =
    "https://wa.me/623414359807?text=Halo%20Prajnawisesa%20Konsultan%2C%20saya%20ingin%20konsultasi%20mengenai%20bisnis%20saya.";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappButton}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Chat via WhatsApp"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className={styles.whatsappTooltip}>Chat dengan kami</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

/* ───────── BACK TO TOP ───────── */
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={styles.backToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Kembali ke atas"
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

/* ───────── PAGE ───────── */
export default function Home() {
  return (
    <RootLayout>
      <main>
        <HeroSection />
        <AboutSection />
        <ClientsSection />
        <ServicesSection />
        <ProjectsSection />
        <FaqSection />
        <ContactSection />
        <WhatsAppButton />
        <BackToTop />
      </main>
    </RootLayout>
  );
}
