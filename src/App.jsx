import { useEffect, useState } from "react";
import project1Snapshot from "./assets/Project1.png";
import project2Snapshot from "./assets/Project2.png";
import project3Snapshot from "./assets/Project3.png";
import project4Snapshot from "./assets/Project4.png";
import profilePhoto from "./assets/Profile.png";

const navLinks = [
  { label: "About", target: "about" },
  { label: "Experience", target: "experience" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "GitHub", target: "github" },
  { label: "Education", target: "education" },
  { label: "Contact", target: "contact" }
];

const experiences = [
  {
    company: "PIMCO",
    title: "Lead Automation Engineer",
    period: "2015 - Present",
    location: "Newport Beach, California",
    details: [
      "Spearhead enterprise automation strategy across UFT, UI Path, and Bloomberg test ecosystems.",
      "Build AI-informed QA pipelines that combine Selenium, Robot Framework and SeeTest mobile automation.",
      "Drive end-to-end CI/CD delivery and mentor teams in automation architecture, BDD/Cucumber and test governance."
    ]
  },
  {
    company: "Capital Group",
    title: "Senior Automation Engineer",
    period: "2012 - 2015",
    location: "Irvine, California",
    details: [
      "Delivered scalable test automation for web, API, and desktop workflows using Python, Selenium and Pywinauto.",
      "Designed BDD/Cucumber automation flows, supporting quality release cycles and executive reporting.",
      "Enabled cross-functional teams with Bloomberg integrations, test orchestration, and continuous deployment."
    ]
  },
  {
    company: "Fifth Third Bank",
    title: "Software Engineer",
    period: "2011 - 2012",
    location: "Cincinnati, Ohio",
    details: [
      "Defined automation frameworks for critical financial applications using UFT, Python and desktop automation.",
      "Built robust regression suites and collaborated with QA to automate high-risk workflows.",
      "Delivered stable release readiness with CI/CD validation and comprehensive test coverage."
    ]
  }
];

const skills = [
  "Full Stack Development",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "Python",
  "REST APIs",
  "Database Design",
  "Cloud Deployment",
  "CI/CD Pipelines",
  "Testing & QA Automation",
  "Selenium",
  "Robot Framework",
  "UI Path",
  "Web Security",
  "Performance Optimization"
];

const projects = [
  {
    title: "AIQA Lab — End-to-End QA Automation Platform",
    description:
      "A full-stack MERN platform for managing QA automation initiatives, framework execution, user roles, and AI-assisted reporting workflows.",
    github: "https://github.com/PriyaWestCliff/project-3",
    liveDemo: "https://aiqa-lab-project3.onrender.com/",
    image: project1Snapshot,
    stack: "React, Node.js, Express.js, MongoDB, Mongoose, EJS, Bootstrap, SASS, PWA",
    highlights: [
      "Built a modular React application with reusable header, footer, authentication, project, report, and dashboard components.",
      "Created secure Express.js REST APIs with Mongoose for users, projects, admin workflows, and project lifecycle management.",
      "Implemented bcrypt password hashing, JWT auth, and httpOnly cookies for safe signup, login, and session handling.",
      "Added role-based authorization so project owners manage files while admins review all users and project records.",
      "Designed a validated automation project form with both frontend and backend checks for project configuration fields.",
      "Integrated MongoDB Atlas as cloud storage with separate User and Project schemas for scalable data management.",
      "Delivered responsive dashboard screens for AIQA Lab home, solutions, frameworks, platform, reports, resources, and search.",
      "Added content for Selenium WebDriver, PyWinAuto, Appium, AI defect analysis, automation coverage, and framework performance.",
      "Used Axios for JSON communication between React and Express, and configured Helmet, CORS, dotenv, and cookie-parser for security.",
      "Prepared the app for PWA deployment with service worker support, app manifest, and installable asset generation."
    ],
    projectStrengths: [
      "Built a component-first React dashboard with an Express REST API backend",
      "Secured authentication and RBAC access using bcrypt, JWT, and httpOnly cookies",
      "Optimized MongoDB workflows with indexing, pagination, and search filters",
      "Deployed to Render with MongoDB Atlas and production-ready environment controls"
    ],
    techTags: ["React", "Node.js", "Express.js", "MongoDB", "RBAC", "PWA"]
  },
  {
    title: "Velora Living — Product Catalog Web Application",
    description:
      "Backend-focused product catalog web application for Velora Living, a curated luxury lifestyle and smart technology product brand.",
    github: "https://github.com/PriyaWestCliff/Project2-ProductCatalog-WebApp",
    image: project2Snapshot,
    stack: "Node.js, Express.js, MongoDB, Mongoose, EJS, Bootstrap 4, SASS, Auth, PWA, Jest, Supertest",
    highlights: [
      "Built a full-stack product catalog web application using Node.js, Express.js, MongoDB, and Mongoose.",
      "Designed server-rendered pages with EJS layouts, reusable partials, Bootstrap 4, and custom SASS styling.",
      "Implemented session-based signup, login, logout, password hashing, cookies, and protected product routes.",
      "Created product catalog features including product listing, product detail pages, search, filtering, create, edit, and delete workflows.",
      "Added contact form submission handling with MongoDB persistence.",
      "Improved application security using Helmet, rate limiting, MongoDB sanitization, secure sessions, and environment variables.",
      "Added Progressive Web App support with a web manifest, service worker, and offline fallback page.",
      "Validated core functionality with Jest and Supertest route tests using mongodb-memory-server."
    ],
    projectStrengths: [
      "Express.js routing with server-rendered EJS views",
      "MongoDB and Mongoose models for users, products, and contact messages",
      "Session authentication with bcrypt, cookies, and protected CRUD routes",
      "PWA support with service worker, manifest, and offline fallback",
      "Automated route testing with Jest, Supertest, and mongodb-memory-server"
    ],
    techTags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Bootstrap",
      "SASS",
      "Auth",
      "PWA",
      "Jest",
      "Supertest"
    ]
  },
  {
    title: "Splashes Swim School Website",
    description:
      "Responsive static website for a swim school, completed as a three-member group project with pages divided equally across the team.",
    github: "https://github.com/NEEEMO-LIO/project1_nl_tk_pp-WC",
    image: project3Snapshot,
    stack: "HTML, CSS, Bootstrap, JavaScript",
    highlights: [
      "Collaborated in a three-member team, divided the website pages evenly, and submitted the completed project together.",
      "Built a multi-page front-end website with index.html, about.html, swimlessons.html, swimprograms.html, adultprograms.html, contactus.html, and signIn.html.",
      "Used Bootstrap for responsive layout and navigation.",
      "Styled the site with a custom style.css theme, hero images, and branded buttons.",
      "Added interactive behavior with JavaScript for location dropdowns and contact icon cards.",
      "Included image assets and custom fonts for polished presentation."
    ],
    projectStrengths: [
      "Static front-end architecture with no backend dependency",
      "Responsive navigation, hero sections, and mobile-friendly layout",
      "Dynamic contact card generation in btnicons.js",
      "Interactive locations dropdown in locations.js",
      "Uses CDN-hosted Bootstrap and Font Awesome for UI components"
    ],
    techTags: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Responsive Design",
      "Static Website"
    ]
  },
  {
    title: "Booklist CRUD App — Full-Stack MERN CRUD Platform",
    description:
      "A full-stack CRUD application for managing book records with a React frontend and Express/MongoDB backend.",
    github: "https://github.com/PriyaWestCliff/m6-w1-d3-lab-assignment",
    image: project4Snapshot,
    stack: "React, Node.js, Express.js, MongoDB, Mongoose, Bootstrap",
    highlights: [
      "Built a React frontend with reusable components for book creation, listing, update, and deletion.",
      "Created Express.js REST APIs for `GET /posts`, `POST /posts`, `PUT /posts/:id`, `DELETE /posts/:id`.",
      "Used Mongoose schemas and models to persist book data in MongoDB (`booklistdb`).",
      "Implemented frontend/backend integration with `fetch()` to manage live book list state.",
      "Styled the application using Bootstrap and delivered a responsive UI.",
      "Configured a local Node/Express server running on port `5000` and a React app on `3000`."
    ],
    projectStrengths: [
      "React frontend with reusable CRUD components",
      "Express.js REST APIs for book data management",
      "MongoDB persistence with Mongoose schemas and models",
      "Full frontend/backend integration with fetch",
      "Bootstrap responsive UI"
    ],
    techTags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Bootstrap",
      "REST APIs",
      "CRUD Operations"
    ]
  }
];

function App() {
  const [themeVisible, setThemeVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setThemeVisible(true);
  }, []);

  return (
    <div className={`page-shell ${themeVisible ? "visible" : ""}`}>
      <header className="topbar">
        <div className="brand">Priya Poojary</div>
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav id="primary-navigation" className={`site-nav ${menuOpen ? "open" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.target}>
                <a href={`#${link.target}`} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy fade-up">
            <p className="eyebrow">Full stack developer</p>
            <h1>Priya Poojary</h1>
            <div className="hero-meta">
              <span className="hero-meta-item hero-location">
                <span className="meta-icon">📍</span>
                Irvine, California
              </span>
              <a href="mailto:priya0309poojary@gmail.com" className="hero-meta-item hero-email">
                <span className="meta-icon">✉️</span>
                priya0309poojary@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/priya-poojary-34a416408"
                target="_blank"
                rel="noreferrer"
                className="hero-meta-item hero-linkedin"
              >
                <span className="meta-icon">🔗</span>
                LinkedIn
              </a>
            </div>
            <p className="hero-text">
              MBA graduate in Full Stack Web Development. I design and build enterprise-grade web applications with quality-first automation mindset for financial services, banking, and healthcare.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="button primary">Contact Me</a>
              <a href="#projects" className="button secondary">View Projects</a>
              <a
                href="https://drive.google.com/file/d/1qapNBV29VYJAVGED_fAbLnhL7G7dq_ik/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Resume"
                className="button secondary"
              >
                View Resume
              </a>
            </div>
          </div>
          <div className="hero-photo fade-up delay-1">
            <img src={profilePhoto} alt="Priya Poojary" />
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-header">
            <span>About</span>
            <h2>Professional Profile</h2>
          </div>
          <div className="grid-two">
            <div>
              <p>
                I am a full stack web developer with an MBA in Web Development and Design from Westcliff University (2026, GPA 3.86).
                My background in QA automation and enterprise testing gives me a unique advantage, I build robust, scalable applications with built-in quality, performance, and security from day one.
              </p>
              <p>
                Specialized in React, Node.js, MongoDB, and cloud deployment. My career spans enterprise financial systems, banking platforms, and healthcare applications where I've designed end-to-end solutions, mentored teams, and delivered mission-critical web applications.
              </p>
            </div>
            <div className="detail-list">
              <div>
                <strong>Title</strong>
                <span>Full Stack Developer</span>
              </div>
              <div>
                <strong>Company</strong>
                <span>PIMCO</span>
              </div>
              <div>
                <strong>Education</strong>
                <span>MBA - Web Dev & Design (3.86 GPA)</span>
              </div>
              <div>
                <strong>Location</strong>
                <span>Newport Beach, California</span>
              </div>
              <div>
                <strong>GitHub</strong>
                <a href="https://github.com/PriyaWestCliff" target="_blank" rel="noreferrer">
                  github.com/PriyaWestCliff
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section experience" id="experience">
          <div className="section-header">
            <span>Experience</span>
            <h2>Career Highlights</h2>
          </div>
          <div className="experience-list">
            {experiences.map((item) => (
              <article key={item.company} className="experience-card fade-up delay-1">
                <div className="experience-title">
                  <h3>{item.title}</h3>
                  <span>{item.company}</span>
                </div>
                <p className="experience-meta">{item.period} · {item.location}</p>
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills" id="skills">
          <div className="section-header">
            <span>Skills</span>
            <h2>Core Capabilities</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="section-header">
            <span>Projects</span>
            <h2>Featured Work</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <div key={project.title} className="project-card fade-up">
                <div className="project-snapshot">
                  <img src={project.image} alt={`${project.title} snapshot`} />
                </div>
                <div className="project-copy">
                  <div className="project-copy-header">
                    <div>
                      <h3>{project.title}</h3>
                      <p className="project-stack">{project.stack}</p>
                    </div>
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noreferrer" className="button secondary">
                        GitHub
                      </a>
                      {project.liveDemo && (
                        <a href={project.liveDemo} target="_blank" rel="noreferrer" className="button secondary">
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <ul>
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="project-highlights-card">
                    <div className="project-highlights-title">Project Strengths</div>
                    <ul>
                      {project.projectStrengths.map((strength) => (
                        <li key={strength}>{strength}</li>
                      ))}
                    </ul>
                    <div className="project-tags">
                      {project.techTags.map((tag) => (
                        <span key={tag} className="project-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section github" id="github">
          <div className="section-header">
            <span>GitHub</span>
            <h2>Featured Repositories</h2>
          </div>
          <div className="github-card fade-up">
            <div className="github-copy">
              <p>
                Explore my GitHub portfolio for full-stack projects, automation solutions, and web development work.
              </p>
              <a href="https://github.com/PriyaWestCliff" target="_blank" rel="noreferrer" className="button primary">
                View GitHub Profile
              </a>
            </div>
          </div>
        </section>

        <section className="section education" id="education">
          <div className="section-header">
            <span>Education</span>
            <h2>Academic Background</h2>
          </div>
          <div className="education-grid">
            <div className="education-card fade-up delay-1">
              <div className="education-badge">Masters</div>
              <h3>MBA — Web Development and Design</h3>
              <p className="education-school">Westcliff University</p>
              <p className="education-year">2026</p>
              <p className="education-highlight">GPA: 3.86</p>
            </div>
            <div className="education-card fade-up delay-1">
              <div className="education-badge">Bachelors</div>
              <h3>Bachelor of Computer Science</h3>
              <p className="education-school">Mangalore University</p>
              <p className="education-year">2011</p>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="section-header">
            <span>Contact</span>
            <h2>Ready to connect</h2>
          </div>
          <div className="contact-card fade-up delay-2">
            <p>
              I’m available for leadership roles in financial services, banking, healthcare automation, quality strategy, and digital transformation.
              Let’s talk about how I can help teams accelerate confident delivery.
            </p>
            <div className="hero-actions">
              <a href="mailto:priya0309poojary@gmail.com" className="button primary">Email Me</a>
              <a
                href="https://www.linkedin.com/in/priya-poojary-34a416408"
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Priya Poojary. Full stack developer, automation expert.</p>
      </footer>
    </div>
  );
}

export default App;
