
import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Code2,
  GraduationCap,
  MapPin,
  Sun,
  Moon,
  Menu,
  X,
  ExternalLink,
  Star,
  GitFork,
  Terminal,
  Sparkles,
  FolderGit2,
  LoaderCircle,
} from "lucide-react";
import "./styles.css";

const GITHUB_USERNAME = "iswearidontcode";

const PROFILE = {
  name: "Randulf Marcus P. Cabrera",
  university: "Jose Rizal University",
  course: "Bachelor of Science in Information Technology",
  email: "randulfmarcusc@gmail.com",
  github: "https://github.com/iswearidontcode",
  linkedin:
      "https://www.linkedin.com/in/randulf-marcus-cabrera-674a42406/",
};

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [projectError, setProjectError] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
        "data-theme",
        darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?type=owner&sort=updated&per_page=100`
        );

        if (!response.ok) {
          throw new Error("Unable to load repositories");
        }

        const data = await response.json();

        const ownedProjects = data
            .filter((repo) => !repo.fork && !repo.archived)
            .sort(
                (a, b) =>
                    new Date(b.pushed_at) - new Date(a.pushed_at)
            );

        setProjects(ownedProjects);
      } catch (error) {
        console.error("GitHub repositories could not be loaded:", error);
        setProjectError(true);
      } finally {
        setLoadingProjects(false);
      }
    }

    loadProjects();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
      <div className="app">
        {/* NAVIGATION */}
        <header className="navbar">
          <a href="#home" className="nav-logo" onClick={closeMenu}>
            <span className="logo-mark">R.</span>
            <span>RAN<span className="logo-accent">DULF</span></span>
          </a>

          <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <div className="nav-actions">
            <button
                className="theme-toggle"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="nav-github"
            >
              <Github size={17} />
              <span>GitHub</span>
            </a>

            <button
                className="mobile-menu"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </header>

        <main>
          {/* HERO */}
          <section className="hero section-container" id="home">
            <div className="hero-content">
              <div className="availability">
                <span className="status-dot"></span>
                IT Student · Aspiring Developer
              </div>

              <p className="eyebrow">HELLO, I'M</p>

              <h1>
                Randulf Marcus
                <br />
                <span className="gradient-text">P. Cabrera.</span>
              </h1>

              <p className="hero-description">
                An Information Technology student interested in
                software development, programming, and building
                practical digital experiences.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="button button-primary">
                  Explore my work <ArrowUpRight size={18} />
                </a>

                <a href="#contact" className="button button-secondary">
                  Get in touch
                </a>
              </div>

              <div className="hero-socials">
                <a href={PROFILE.github} target="_blank" rel="noreferrer"
                   aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"
                   aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href={`mailto:${PROFILE.email}`} aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-glow"></div>

              <div className="profile-card">
                <div className="profile-card-top">
                  <span className="card-dot"></span>
                  <span className="card-dot"></span>
                  <span className="card-dot"></span>
                  <span className="card-label">PROFILE.EXE</span>
                </div>

                <div className="profile-avatar">
                  <img src="/profile.jpg" alt="Randulf Marcus P. Cabrera" />
                </div>

                <h2>Randulf Marcus P. Cabrera</h2>
                <p className="profile-role">Information Technology Student</p>

                <div className="profile-divider"></div>

                <div className="profile-detail">
                  <GraduationCap size={17} />
                  <span>{PROFILE.university}</span>
                </div>

                <div className="profile-detail">
                  <MapPin size={17} />
                  <span>Philippines</span>
                </div>

                <div className="profile-detail">
                  <Terminal size={17} />
                  <span>Learning · Building · Improving</span>
                </div>

                <div className="profile-card-footer">
                  <span>STATUS: LEARNING</span>
                  <span className="footer-indicator"></span>
                </div>
              </div>

              <div className="floating-tag tag-one">
                <Code2 size={16} /> Developer
              </div>

              <div className="floating-tag tag-two">
                <Sparkles size={16} /> Always learning
              </div>
            </div>

            <a href="#about" className="scroll-indicator">
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown size={15} />
            </a>
          </section>

          {/* ABOUT */}
          <section className="section-container section" id="about">
            <div className="section-heading">
              <p className="eyebrow">01 / ABOUT ME</p>
              <h2>
                A little about <span className="gradient-text">myself.</span>
              </h2>
              <p className="section-subtitle">
                Getting to know the person behind the code.
              </p>
            </div>

            <div className="about-grid">
              <div className="about-main">
                <div className="about-icon">
                  <GraduationCap size={25} />
                </div>

                <h3>Learning through building.</h3>

                <p>
                  I'm Randulf Marcus P. Cabrera, an Information Technology
                  student at Jose Rizal University. I'm currently developing
                  my skills in programming and software development through
                  academic work and personal projects.
                </p>

                <p>
                  I enjoy exploring how technology works, experimenting
                  with different tools, and turning ideas into functional
                  applications. My goal is to keep improving as a developer
                  and eventually work on meaningful software.
                </p>
              </div>

              <div className="about-side">
                <div className="info-card">
                  <span className="info-label">EDUCATION</span>
                  <GraduationCap size={21} />
                  <h3>Jose Rizal University</h3>
                  <p>{PROFILE.course}</p>
                </div>

                <div className="info-card">
                  <span className="info-label">CURRENT FOCUS</span>
                  <Code2 size={21} />
                  <h3>Software Development</h3>
                  <p>Programming, problem-solving, and building projects.</p>
                </div>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section className="section-container section" id="skills">
            <div className="section-heading">
              <p className="eyebrow">02 / WHAT I WORK WITH</p>
              <h2>
                Tools & <span className="gradient-text">technologies.</span>
              </h2>
              <p className="section-subtitle">
                Technologies I've explored through coursework and projects.
              </p>
            </div>

            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-icon"><Code2 size={22} /></div>
                <h3>Programming</h3>
                <p>Writing code and developing problem-solving skills.</p>
                <div className="skill-tags">
                  <span>Python</span>
                  <span>Java</span>
                  <span>TypeScript</span>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon"><Terminal size={22} /></div>
                <h3>Development</h3>
                <p>Building applications and exploring development tools.</p>
                <div className="skill-tags">
                  <span>React</span>
                  <span>HTML</span>
                  <span>CSS</span>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon"><FolderGit2 size={22} /></div>
                <h3>Tools & Workflow</h3>
                <p>Organizing projects, managing code, and experimenting.</p>
                <div className="skill-tags">
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>VS Code</span>
                </div>
              </div>
            </div>
            <p className="skills-note">
              This list reflects technologies I've worked with or explored;
              it is not a proficiency ranking.
            </p>
          </section>

          {/* PROJECTS */}
          <section className="section-container section" id="projects">
            <div className="section-heading projects-heading">
              <div>
                <p className="eyebrow">03 / SELECTED WORK</p>
                <h2>
                  My <span className="gradient-text">projects.</span>
                </h2>
                <p className="section-subtitle">
                  A collection of my public GitHub repositories.
                </p>
              </div>

              <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
              >
                View GitHub profile <ArrowUpRight size={17} />
              </a>
            </div>

            {loadingProjects ? (
                <div className="project-state">
                  <LoaderCircle className="loading-icon" size={25} />
                  <p>Loading repositories from GitHub...</p>
                </div>
            ) : projectError ? (
                <div className="project-state">
                  <Github size={28} />
                  <p>Couldn't load repositories right now.</p>
                  <a href={PROFILE.github} target="_blank" rel="noreferrer">
                    Browse my GitHub instead <ExternalLink size={15} />
                  </a>
                </div>
            ) : projects.length === 0 ? (
                <div className="project-state">
                  <FolderGit2 size={28} />
                  <p>No public projects found yet.</p>
                  <a href={PROFILE.github} target="_blank" rel="noreferrer">
                    Visit my GitHub <ExternalLink size={15} />
                  </a>
                </div>
            ) : (
                <>
                  <div className="projects-grid">
                    {projects.map((project) => (
                        <article className="project-card" key={project.id}>
                          <div className="project-card-top">
                            <div className="project-folder">
                              <FolderGit2 size={23} />
                            </div>

                            <a
                                href={project.html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="project-external"
                                aria-label={`Open ${project.name} on GitHub`}
                            >
                              <ArrowUpRight size={20} />
                            </a>
                          </div>

                          <p className="project-owner">
                            {GITHUB_USERNAME} / PUBLIC REPOSITORY
                          </p>

                          <h3>{project.name}</h3>

                          <p className="project-description">
                            {project.description ||
                                "A public project from my GitHub repository."}
                          </p>

                          <div className="project-meta">
                      <span>
                        <i className="language-dot"></i>
                        {project.language || "Code"}
                      </span>

                            <span><Star size={14} /> {project.stargazers_count}</span>
                            <span><GitFork size={14} /> {project.forks_count}</span>
                          </div>

                          <a
                              className="project-link"
                              href={project.html_url}
                              target="_blank"
                              rel="noreferrer"
                          >
                            View repository <ExternalLink size={15} />
                          </a>
                        </article>
                    ))}
                  </div>

                  <p className="github-note">
                    Showing public repositories owned by{" "}
                    <a href={PROFILE.github} target="_blank" rel="noreferrer">
                      @{GITHUB_USERNAME}
                    </a>
                    . Forked and archived repositories are excluded.
                  </p>
                </>
            )}
          </section>

          {/* CONTACT */}
          <section className="section-container section contact-section" id="contact">
            <div className="contact-panel">
              <div className="contact-decoration">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <p className="eyebrow">04 / GET IN TOUCH</p>

              <h2>
                Let's create something
                <br />
                <span className="gradient-text">meaningful.</span>
              </h2>

              <p className="contact-description">
                Have a question, an opportunity, or simply want to connect?
                Feel free to reach out. I'd be glad to hear from you.
              </p>

              <a
                  href={`mailto:${PROFILE.email}`}
                  className="button button-primary contact-button"
              >
                <Mail size={18} /> Send me an email <ArrowUpRight size={18} />
              </a>

              <div className="contact-socials">
                <a href={PROFILE.github} target="_blank" rel="noreferrer">
                  <Github size={18} /> GitHub
                </a>

                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={18} /> LinkedIn
                </a>

                <a href={`mailto:${PROFILE.email}`}>
                  <Mail size={18} /> Email
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-inner">
            <a href="#home" className="nav-logo">
              <span className="logo-mark">R.</span>
              <span>RAN<span className="logo-accent">DULF</span></span>
            </a>

            <p>
              © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
            </p>

            <a href="#home" className="back-to-top">
              Back to top ↑
            </a>
          </div>
        </footer>
      </div>
  );
}

export default App;