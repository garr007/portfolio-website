"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Send,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import {
  certificateProviders,
  certifications,
  type Certification,
} from "@/data/certifications";
import { projects } from "@/data/projects";
import {
  skillCategories,
  skills,
  type Skill,
  type SkillCategory,
} from "@/data/skills";

const githubUrl = "https://github.com/garr007";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const navItems = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Journey", "#experience"],
  ["Certificates", "#certifications"],
  ["Contact", "#contact"],
];

const journey = [
  {
    year: "Nov 2025 - Mei 2026",
    role: "Data Analyst & AI Engineer Intern",
    place: "PT. Mitra Graha Integrasi (MIGRASI)",
    location: "Bogor, Indonesia",
    details: [
      "Engineered a semantic Vector Search system using BERT embeddings and a FAISS vector database, achieving 80% search accuracy.",
      "Refactored prompt architectures to accelerate system response times, cutting inference latency by 50% across production workflows.",
      "Optimized LLM prompt architecture and token utilization, reducing API latency by 50% and decreasing prompt character overhead by 79%.",
      "Designed and deployed an autonomous AI chatbot workflow using n8n, integrating LLM APIs into the company's production platform to automate real-time customer support inquiries.",
    ],
    highlight: "80% search accuracy / 50% lower latency",
    logo: {
      src: "/assets/journey/migrasi-cropped.png",
      alt: "PT. Mitra Graha Integrasi logo",
      width: 450,
      height: 165,
      shape: "migrasi",
    },
  },
  {
    year: "Feb 2024 - Jul 2024",
    role: "Computer Vision Research Intern",
    place: "Badan Riset dan Inovasi Nasional (BRIN)",
    location: "Bandung, Indonesia",
    details: [
      "Engineered a custom YOLOv8 object detection model for real-time Mouse Movement Detection, achieving 99% accuracy; documented methodologies and co-authored a scientific paper on the research findings.",
      "Developed and optimized a YOLOv8 instance segmentation model for Tuna Fish Classification to automate quality assessment, achieving 80% accuracy.",
      "Curated, annotated, and pre-processed a computer vision dataset of 1,500+ images using Roboflow, implementing custom augmentation pipelines to reduce model overfitting.",
    ],
    highlight: "99% detection / 80% segmentation accuracy",
    logo: {
      src: "/assets/journey/brin.png",
      alt: "BRIN logo",
      width: 1328,
      height: 512,
      shape: "wide",
    },
  },
  {
    year: "Aug 2023 - Dec 2023",
    role: "Algorithm and Data Structure Laboratory Assistant",
    place: "Faculty of Computer Science (FILKOM), Universitas Brawijaya",
    location: "Malang, Indonesia",
    details: [
      "Mentored 42 students in core computer science concepts, delivering technical code walkthroughs on advanced data structures, sorting algorithms, and time-complexity optimization.",
      "Evaluated and code-reviewed student programming assignments, providing constructive debugging feedback and grading implementations based on efficiency and algorithmic correctness.",
    ],
    highlight: "Mentored 42 computer science students",
    logo: {
      src: "/assets/journey/brawijaya-clean.png",
      alt: "Universitas Brawijaya logo",
      width: 224,
      height: 225,
      shape: "mark",
    },
  },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
};

const projectSlideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 56 : -56,
    scale: 0.985,
  }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -36 : 36,
    scale: 0.985,
  }),
};

function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
}: {
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <motion.div className="section-heading" {...reveal}>
      <div className="section-kicker">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-title-wrap">
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </motion.div>
  );
}

function SkillModal({
  skill,
  onClose,
}: {
  skill: Skill | null;
  onClose: () => void;
}) {
  // The interaction token restarts this timeout after manual carousel activity.
  useEffect(() => {
    if (!skill) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [skill, onClose]);

  return (
    <AnimatePresence>
      {skill && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.div
            className="skill-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${skill.name} details`}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="icon-button modal-close" onClick={onClose} aria-label="Close">
              <X size={20} />
            </button>
            <span className="modal-eyebrow">{skill.category} / {skill.score}.0</span>
            <h3>{skill.name}</h3>
            <div className="modal-detail">
              <span>Used for</span>
              <p>{skill.usedFor}</p>
            </div>
            <div className="modal-detail">
              <span>Evidence</span>
              <p>{skill.evidence}</p>
            </div>
            {skill.extras && (
              <div className="tag-list">
                {skill.extras.map((extra) => <span key={extra}>{extra}</span>)}
              </div>
            )}
            {skill.projectId && (
              <a className="text-link" href={`#${skill.projectId}`} onClick={onClose}>
                See related project <ArrowDownRight size={17} />
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CertificateModal({
  certificate,
  onClose,
}: {
  certificate: Certification | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!certificate) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [certificate, onClose]);

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.div
            className="certificate-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${certificate.title} certificate`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="certificate-modal-head">
              <div>
                <div className="certificate-modal-provider">
                  {certificate.logo && (
                    <Image
                      src={`${basePath}${certificate.logo}`}
                      alt=""
                      width={38}
                      height={38}
                    />
                  )}
                  <span>{certificate.provider}</span>
                </div>
                <h3>{certificate.title}</h3>
              </div>
              <button className="icon-button" onClick={onClose} aria-label="Close">
                <X size={20} />
              </button>
            </div>
            <div className="pdf-frame">
              <iframe
                src={`${basePath}${certificate.file}`}
                title={certificate.title}
              />
              <div className="pdf-fallback">
                <FileText size={32} />
                <p>PDF preview uses the matching file in <code>public/certifications</code>.</p>
                <a
                  href={`${basePath}${certificate.file}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open PDF directly
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [skillFilter, setSkillFilter] = useState<(typeof skillCategories)[number]>("All");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [provider, setProvider] = useState("All");
  const [selectedCertificate, setSelectedCertificate] = useState<Certification | null>(null);
  const [certificateExpanded, setCertificateExpanded] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");
  const [activeProject, setActiveProject] = useState(0);
  const [projectDirection, setProjectDirection] = useState(1);
  const [projectInteraction, setProjectInteraction] = useState(0);
  const [projectCarouselPaused, setProjectCarouselPaused] = useState(false);

  const filteredSkills = useMemo(
    () => skillFilter === "All" ? skills : skills.filter((skill) => skill.category === skillFilter as SkillCategory),
    [skillFilter],
  );

  const filteredCertificates = useMemo(() => {
    const list = provider === "All"
      ? certifications
      : certifications.filter((item) => item.provider === provider);
    return certificateExpanded ? list : list.slice(0, 8);
  }, [provider, certificateExpanded]);

  const showProject = useCallback((index: number, direction: number) => {
    const nextIndex = (index + projects.length) % projects.length;
    setProjectDirection(direction);
    setActiveProject(nextIndex);
  }, []);

  useEffect(() => {
    if (projects.length < 2 || projectCarouselPaused) return;

    const timer = window.setTimeout(() => {
      showProject(activeProject + 1, 1);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [activeProject, projectCarouselPaused, projectInteraction, showProject]);

  const registerProjectInteraction = useCallback(() => {
    setProjectInteraction((value) => value + 1);
  }, []);

  const activeProjectData = projects[activeProject];

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !emailPattern.test(email) || message.length < 10) {
      setFormStatus("error");
      setFormError("Please add your name, a valid email, and a message of at least 10 characters.");
      return;
    }

    setFormStatus("loading");
    setFormError("");
    window.setTimeout(() => {
      setFormStatus("success");
      event.currentTarget?.reset();
    }, 1100);
  }

  return (
    <main>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Tegar home">MTA<span>.</span></a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
        <a className="header-cta" href="mailto:muhammadtegarabhiram@gmail.com">
          Let&apos;s talk <ArrowUpRight size={16} />
        </a>
        <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <motion.div className="availability" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
            <span className="status-dot" /> Available for AI &amp; Data roles
          </motion.div>
          <motion.p className="hero-eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            Hi, I am Tegar
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
            Data Science<br />&amp; <em>AI Engineer</em>
          </motion.h1>
          <motion.div className="hero-bottom" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <p>Building intelligent systems from raw data to thoughtful, production-ready products.</p>
            <a className="round-link" href="#projects" aria-label="Explore selected work">
              <ArrowDownRight />
            </a>
          </motion.div>
        </div>
        <motion.div className="hero-portrait" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="portrait-grid">
            <Image
              className="portrait-image"
              src={`${basePath}/assets/profile/tegar.png`}
              alt="Muhammad Tegar Abhiram"
              width={500}
              height={500}
              priority
            />
            <span className="portrait-caption">Data to deployment<br />Bogor, Indonesia</span>
          </div>
          <div className="role-chips">
            <span>Computer Vision</span>
            <span>Machine Learning</span>
            <span>Data Products</span>
          </div>
        </motion.div>
        <div className="hero-meta">
          <span><MapPin size={15} /> Bogor, Indonesia</span>
          <span>Scroll to discover</span>
        </div>
      </section>

      <section className="stats-strip" aria-label="Career statistics">
        {[["8", "Projects"], ["99%", "Max accuracy"], ["41+", "Certificates"]].map(([number, label]) => (
          <div key={label}><strong>{number}</strong><span>{label}</span></div>
        ))}
        <p>Information Technology graduate fusing state-of-the-art computer vision and NLP search systems into production-ready data products.</p>
      </section>

      <section id="about" className="section about-section">
        <SectionHeading index="01" eyebrow="About me" title="A technical builder with a product point of view." />
        <motion.div className="about-grid" {...reveal}>
          <p className="about-lead">
            I turn complex machine learning ideas into <em>clear, useful systems</em> that people can understand and use.
          </p>
          <div className="about-body">
            <p>
              I am an Information Technology graduate from Universitas Brawijaya with a 3.8/4.0 GPA, working across data analysis, computer vision, NLP, and web-based AI products.
            </p>
            <p>
              At PT. Mitra Graha Integrasi, I work as a Data Analyst &amp; AI Engineer Intern, connecting technical experimentation with real product and business needs.
            </p>
            <a className="text-link" href="#experience">Read my journey <ArrowDownRight size={17} /></a>
          </div>
        </motion.div>
      </section>

      <section id="skills" className="section sand-section">
        <SectionHeading
          index="02"
          eyebrow="Technical skills"
          title="A practical toolkit for intelligent products."
          intro="Filter the matrix, then select a skill to see where it has been applied."
        />
        <div className="filter-row" role="tablist" aria-label="Skill categories">
          {skillCategories.map((category) => (
            <button
              key={category}
              className={skillFilter === category ? "active" : ""}
              onClick={() => setSkillFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={skillFilter}
            className="skills-grid"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            {filteredSkills.map((skill, index) => (
              <motion.button
                className={skill.score === 5 ? "skill-card expert" : "skill-card"}
                key={skill.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.24,
                  delay: Math.min(index * 0.018, 0.12),
                  ease: "easeOut",
                }}
                onClick={() => setSelectedSkill(skill)}
              >
                <span className="skill-index">{String(skills.indexOf(skill) + 1).padStart(2, "0")}</span>
                <h3>{skill.name}</h3>
                <div className="skill-score">
                  <span>{skill.category}</span>
                  <strong>{skill.score}<small>/5</small></strong>
                </div>
                <div className="score-line"><i style={{ width: `${skill.score * 20}%` }} /></div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <section id="projects" className="section projects-section">
        <SectionHeading
          index="03"
          eyebrow="Featured projects"
          title="Selected work, measured by outcomes."
          intro="A collection spanning semantic search, computer vision, predictive modeling, and business intelligence."
        />
        <div className="project-carousel-toolbar">
          <p aria-live="polite">
            <span>{String(activeProject + 1).padStart(2, "0")}</span>
            {" / "}
            {String(projects.length).padStart(2, "0")}
          </p>
          <div className="project-carousel-actions">
            <button
              type="button"
              onClick={() => {
                registerProjectInteraction();
                showProject(activeProject - 1, -1);
              }}
              aria-label="Show previous project"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => {
                registerProjectInteraction();
                showProject(activeProject + 1, 1);
              }}
              aria-label="Show next project"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div
          className="projects-list"
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured projects"
          tabIndex={0}
          onMouseEnter={() => {
            registerProjectInteraction();
            setProjectCarouselPaused(true);
          }}
          onMouseLeave={() => {
            registerProjectInteraction();
            setProjectCarouselPaused(false);
          }}
          onFocus={() => setProjectCarouselPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              registerProjectInteraction();
              setProjectCarouselPaused(false);
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              registerProjectInteraction();
              showProject(activeProject - 1, -1);
            }
            if (event.key === "ArrowRight") {
              event.preventDefault();
              registerProjectInteraction();
              showProject(activeProject + 1, 1);
            }
          }}
        >
          <AnimatePresence initial={false} mode="popLayout" custom={projectDirection}>
            <motion.article
              id={activeProjectData.id}
              className={`project-card project-${activeProjectData.accent}${activeProject % 2 === 1 ? " project-card-reverse" : ""}`}
              key={activeProjectData.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${activeProject + 1} of ${projects.length}: ${activeProjectData.title}`}
              custom={projectDirection}
              variants={projectSlideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragStart={() => setProjectCarouselPaused(true)}
              onDragEnd={(_, info) => {
                registerProjectInteraction();
                setProjectCarouselPaused(false);

                if (info.offset.x < -60 || info.velocity.x < -450) {
                  showProject(activeProject + 1, 1);
                } else if (info.offset.x > 60 || info.velocity.x > 450) {
                  showProject(activeProject - 1, -1);
                }
              }}
            >
              <motion.div
                className="project-visual"
                initial={{ opacity: 0, x: projectDirection * 32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="project-number">0{activeProject + 1}</span>
                <div className="project-media">
                  <Image
                    src={`${basePath}${activeProjectData.media.src}`}
                    alt={activeProjectData.media.alt}
                    fill
                    sizes="(max-width: 820px) 90vw, 48vw"
                    priority
                  />
                </div>
                <span className="project-track">{activeProjectData.track}</span>
              </motion.div>
              <motion.div
                className="project-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <motion.span className="project-role" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>
                  {activeProjectData.role}
                </motion.span>
                <motion.h3 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.17 }}>
                  {activeProjectData.title}
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}>
                  {activeProjectData.summary}
                </motion.p>
                <div className="metric-grid">
                  {activeProjectData.metrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.27 + index * 0.035 }}
                    >
                      <strong>{metric.value}</strong><span>{metric.label}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div className="project-footer" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }}>
                  <div className="tag-list">{activeProjectData.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a
                    href={activeProjectData.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${activeProjectData.actionLabel}: ${activeProjectData.title}`}
                  >
                    {activeProjectData.actionLabel} <ArrowUpRight size={18} />
                  </a>
                </motion.div>
              </motion.div>
            </motion.article>
          </AnimatePresence>
        </div>
        <div className={`project-autoplay-progress${projectCarouselPaused ? " paused" : ""}`} aria-hidden="true">
          <span key={`${activeProject}-${projectInteraction}`} />
        </div>
        <div className="project-carousel-dots" aria-label="Choose a project">
          {projects.map((project, index) => (
            <button
              type="button"
              key={project.id}
              className={activeProject === index ? "active" : ""}
              onClick={() => {
                registerProjectInteraction();
                showProject(index, index >= activeProject ? 1 : -1);
              }}
              aria-label={`Show project ${index + 1}: ${project.title}`}
              aria-current={activeProject === index ? "true" : undefined}
            />
          ))}
        </div>
      </section>

      <section id="experience" className="section charcoal-section">
        <SectionHeading
          index="04"
          eyebrow="Professional journey"
          title="Learning in public. Building with intent."
          intro="Applied AI experience spanning semantic search, LLM automation, computer vision research, and production-focused delivery."
        />
        <div className="timeline">
          {journey.map((item, index) => (
            <motion.article key={item.role} className="timeline-item" {...reveal}>
              <span className="timeline-index">0{index + 1}</span>
              <div className="timeline-brand">
                <div className={`timeline-logo timeline-logo-${item.logo.shape}`}>
                  <Image
                    src={`${basePath}${item.logo.src}`}
                    alt={item.logo.alt}
                    width={item.logo.width}
                    height={item.logo.height}
                  />
                </div>
                <span className="timeline-year">{item.year}</span>
              </div>
              <div className="timeline-main">
                <h3>{item.role}</h3>
                <div className="timeline-meta">
                  <span>{item.place}</span>
                  <span>{item.location}</span>
                </div>
                <ul className="timeline-details">
                  {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </div>
              <div className="timeline-highlight">
                <span>Highlight</span>
                <strong>{item.highlight}</strong>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="certifications" className="section certificates-section">
        <SectionHeading
          index="05"
          eyebrow="Certifications"
          title="A growing registry of continuous learning."
          intro="41 certificates across nine providers, covering data, AI, software engineering, and cloud foundations."
        />
        <div className="provider-row">
          {certificateProviders.map((item) => (
            <button
              key={item}
              className={provider === item ? "active" : ""}
              onClick={() => { setProvider(item); setCertificateExpanded(false); }}
            >
              {item}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${provider}-${certificateExpanded}`}
            className="certificate-grid"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            {filteredCertificates.map((certificate, index) => (
              <motion.button
                key={certificate.id}
                className="certificate-card"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.24,
                  delay: Math.min(index * 0.018, 0.12),
                  ease: "easeOut",
                }}
                onClick={() => setSelectedCertificate(certificate)}
              >
                <span className="certificate-logo" aria-hidden="true">
                  {certificate.logo ? (
                    <Image
                      src={`${basePath}${certificate.logo}`}
                      alt=""
                      width={52}
                      height={52}
                    />
                  ) : (
                    <FileText size={19} />
                  )}
                </span>
                <span className="certificate-provider">{certificate.provider}</span>
                <h3>{certificate.title}</h3>
                <span className="certificate-action">Preview certificate <ChevronRight size={16} /></span>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
        {(provider === "All" ? certifications.length : certifications.filter((item) => item.provider === provider).length) > 8 && (
          <button className="outline-button certificates-more" onClick={() => setCertificateExpanded((value) => !value)}>
            {certificateExpanded ? "Show fewer" : "View full registry"}
          </button>
        )}
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-intro">
          <span className="section-kicker"><span>06</span><span>Let&apos;s connect</span></span>
          <motion.h2 {...reveal}>Have an ambitious data problem?</motion.h2>
          <p>Let&apos;s turn it into a clear, intelligent product.</p>
          <div className="contact-links">
            <a href="mailto:muhammadtegarabhiram@gmail.com"><Mail /> Email <ArrowUpRight /></a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp <ArrowUpRight /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn <ArrowUpRight /></a>
            <a href={githubUrl} target="_blank" rel="noreferrer"><Github /> GitHub <ArrowUpRight /></a>
          </div>
        </div>
        <motion.form className="contact-form" onSubmit={submitContact} {...reveal} noValidate>
          <div className="field">
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" type="text" placeholder="How should I address you?" />
          </div>
          <div className="field">
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" placeholder="you@company.com" />
          </div>
          <div className="field">
            <label htmlFor="message">Tell me about the opportunity</label>
            <textarea id="message" name="message" rows={5} placeholder="A role, project, or research idea..." />
          </div>
          {formStatus === "error" && <p className="form-message error">{formError}</p>}
          {formStatus === "success" && <p className="form-message success"><Check size={17} /> Message validated. The backend connection is the next step.</p>}
          <button className="submit-button" type="submit" disabled={formStatus === "loading"}>
            {formStatus === "loading" ? "Sending..." : <>Send message <Send size={17} /></>}
          </button>
        </motion.form>
      </section>

      <footer>
        <a href="#home" className="brand">MTA<span>.</span></a>
        <p>Data Science &amp; AI Engineer<br />Bogor, Indonesia</p>
        <span>© {new Date().getFullYear()} Muhammad Tegar Abhiram</span>
      </footer>

      <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
      <CertificateModal certificate={selectedCertificate} onClose={() => setSelectedCertificate(null)} />
    </main>
  );
}
