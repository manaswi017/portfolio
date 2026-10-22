import { useEffect, useState } from "react";
import {
  profile,
  stats,
  projects,
  skills,
  education,
  achievements,
} from "./data.js";

const NAV = [
  ["about", "About"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["education", "Education"],
  ["contact", "Contact"],
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <a href="#top" className="logo" onClick={() => setOpen(false)}>
        <span>M</span>anaswi
      </a>
      <button
        className="menu-btn"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav className={open ? "nav open" : "nav"}>
        {NAV.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="btn small" href={profile.resume} target="_blank" rel="noreferrer">
          Resume
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <p className="eyebrow">Hello, I'm</p>
      <h1>
        {profile.name}
        <span className="dot">.</span>
      </h1>
      <h2 className="role">{profile.role}</h2>
      <p className="lead">{profile.tagline}</p>
      <div className="cta">
        <a className="btn" href="#projects">
          View projects
        </a>
        <a className="btn ghost" href={profile.resume} download>
          Download resume
        </a>
      </div>
      <div className="socials">
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </div>
    </section>
  );
}

function Section({ id, title, kicker, children }) {
  return (
    <section id={id} className="section reveal">
      <div className="section-head">
        <span className="kicker">{kicker}</span>
        <h3>{title}</h3>
      </div>
      {children}
    </section>
  );
}

function About() {
  return (
    <Section id="about" kicker="01" title="About me">
      <div className="about">
        <div>
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="muted">📍 {profile.location}</p>
        </div>
        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" kicker="02" title="Selected projects">
      <div className="grid">
        {projects.map((p, i) => (
          <article className="card" key={p.title}>
            <span className="num">0{i + 1}</span>
            <h4>{p.title}</h4>
            <p className="sub">{p.subtitle}</p>
            <ul>
              {p.description.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <div className="chips">
              {p.stack.map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <div className="links">
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer">
                  Live demo ↗
                </a>
              )}
              <a href={p.github || profile.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" kicker="03" title="Skills & tools">
      <div className="skills">
        {skills.map((g) => (
          <div className="skill-row" key={g.group}>
            <span className="skill-group">{g.group}</span>
            <div className="chips">
              {g.items.map((i) => (
                <span className="chip" key={i}>
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" kicker="04" title="Education & achievements">
      <div className="two">
        <div className="timeline">
          {education.map((e) => (
            <div className="t-item" key={e.school}>
              <span className="period">{e.period}</span>
              <h4>{e.school}</h4>
              <p>{e.degree}</p>
              <p className="muted">{e.detail}</p>
            </div>
          ))}
        </div>
        <ul className="ach">
          {achievements.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" kicker="05" title="Let's work together">
      <p className="lead narrow">
        I'm looking for backend and full-stack opportunities. Reach out – I usually reply
        quickly.
      </p>
      <div className="cta">
        <a className="btn" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>
    </Section>
  );
}

export default function App() {
  useReveal();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} {profile.name} · Built with React
      </footer>
    </>
  );
}
