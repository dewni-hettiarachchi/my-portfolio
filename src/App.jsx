import "./App.css";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "PHP",
  "Laravel",
  "MySQL",
  "Bootstrap 5",
  "Git",
  "GitHub",
];


const projects = [
  {
    title: "Public Complaint Management System",
    type: "Academic Project",
    description:
      "A web application for submitting and tracking public complaints, with separate Citizen, Officer, and Admin roles. Developed using Laravel's MVC architecture.",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap 5"],
    github:
      "https://github.com/dewni-hettiarachchi/public-complaint-management-system",
  },
  {
    title: "Student Mark Prediction System",
    type: "Machine Learning Project",
    description:
      "A machine learning project exploring student marks data to predict pass or fail outcomes, including data preprocessing, analysis, model training, and evaluation.",
    technologies: ["Python", "Machine Learning", "Google Colab"],
    github:
      "https://github.com/dewni-hettiarachchi/student-mark-prediction",
  },
  {
    title: "Task Flow",
    type: "Personal React Project",
    description:
      "A task management application built with React. It uses React state to manage tasks and localStorage to keep task data available after a page refresh.",
    technologies: ["React", "JavaScript", "CSS", "Vite"],
    github:
      "https://github.com/dewni-hettiarachchi/task-flow",
  },
];


function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="logo" href="#home">
          Dewni Hettiarachchi
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-button" href="#contact">
          Let's Connect
        </a>
      </header>

      <main>
        
<section className="hero" id="home">
  <div className="hero-content">
    <p className="eyebrow">
      HNDIT STUDENT · ASPIRING FULL-STACK DEVELOPER
    </p>

    <h1>
      Building useful apps.
      <br />
      <span>Learning by creating.</span>
    </h1>

    <p className="hero-description">
      Hi, I'm Dewni, an HNDIT student passionate about web
      development. I have experience with Laravel, PHP,
      and MySQL, and I'm developing my frontend skills
      with React. I'm looking for an internship where I
      can learn, contribute, and grow as a developer.
    </p>

    <div className="hero-actions">
      <a className="primary-btn" href="#projects">
        Explore My Projects
      </a>

      <a className="secondary-btn" href="#contact">
        Contact Me
      </a>

      <a
        className="secondary-btn"
        href="/Dewni_Hettiarachchi_CV_v2.pdf"
        download="Dewni_Hettiarachchi_CV_v2.pdf"
      >
        Download CV ↓
      </a>


    </div>

    <p className="hero-note">
      ● Open to Full-Stack Developer Internship Opportunities
    </p>
  </div>

  <div className="hero-image">
    <div className="photo-glow"></div>
    <div className="photo-frame">
      <img
        src="/profile.png"
        alt="Dewni Hettiarachchi - Aspiring Full-Stack Developer"
      />
    </div>
    <div className="photo-caption">
      <span className="status-dot"></span>
      <div>
        <strong>Dewni Hettiarachchi</strong>
        <p>Aspiring Full-Stack Developer</p>
      </div>
    </div>
  </div>
</section>


        <section className="section" id="about">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2>About Me</h2>

          <p className="section-description">
            I'm an HNDIT student who enjoys building web applications
            and learning how software works. Through academic projects,
            I've gained experience with Laravel, PHP, MySQL, database
            management, and web technologies. I'm also learning React
            by building personal projects and improving my
            problem-solving skills.
          </p>
        </section>

        <section className="section" id="skills">
          <p className="eyebrow">MY TOOLKIT</p>
          <h2>Technical Skills</h2>

          <p className="section-description">
            Technologies I've studied and used across my academic
            and personal projects.
          </p>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <p className="eyebrow">WHAT I'VE BUILT</p>
          <h2>Featured Projects</h2>

          <p className="section-description">
            A selection of academic and personal projects that
            demonstrate my learning and practical work.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <p className="project-type">{project.type}</p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                {project.github && (
                  <a
                    className="project-link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>Let's connect.</h2>

          <p className="section-description">
            I'm interested in internship opportunities where I can
            learn from a development team, contribute to real projects,
            and grow my skills. I'd love to hear from you.
          </p>

          
            <a
              className="primary-btn"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hettiarachchidewni06@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email Me ↗
            </a>


          <div className="social-links">
            <a
              href="https://github.com/dewni-hettiarachchi"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/dewni-hettiarachchi-74116a436"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Dewni Hettiarachchi</p>
        <p>Built with React.</p>
      </footer>
    </div>
  );
}

export default App;