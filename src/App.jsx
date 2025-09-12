import "./Style.css";
import { motion } from "framer-motion";
import Navbar from "./componets/Navbar.jsx";
import ProjectCard from "./componets/ProjectCard.jsx";
import { projects } from "./data/Projects.js";
import { inventions } from "./data/Inventions.js";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <section className="hero">
          <h1>Spiritual innovator<br></br><h2>(Noun  </h2><em>A person who focus on turning insight into action by the will of Allah</em></h1>
          <p>
            I make playful hardware + software: ESP32 sound-effect shoes, an AI assistant called
            <strong> Wizard</strong>, and lots of invention experiments.
          </p>
          <div style={{display:'flex', gap:12, marginTop:16}}>
           <motion.a className="btn" href="#projects" whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.03 }}>See Projects</motion.a>
           <motion.a className="btn secondary" href="#inventions" whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.03 }}>Invention List</motion.a>
          </div>
        </section>

        <section id="projects" className="section">
          <h2 style={{marginTop:0}}>Projects</h2>
          <div className="grid">
            {projects.map((item) => <ProjectCard key={item.title} item={item} />)}
          </div>
        </section>

        <section id="inventions" className="section">
          <h2>Inventions & Ideas</h2>
          <div className="grid">
            {inventions.map((idea) => (
              <div key={idea} className="card">{idea}</div>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <h2>About</h2>
          <p style={{color:'var(--muted)'}}>
            I’m Mahad, exploring AI, AR/VR, electronics, and 3D printing. I like turning scrappy ideas into
            working demos and sharing the process.
          </p>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p className="muted">DMs open. Business inquiries via email or LinkedIn.</p>
          <div style={{display:'flex', gap:12, marginTop:8}}>
            <a className="btn" href="mailto:your@email">
              Email
            </a>
            <a className="btn secondary" href="https://www.linkedin.com/in/your-profile" target="_blank">
              LinkedIn
            </a>
          </div>
        </section>

        <div className="footer">© {new Date().getFullYear()} Mahad Abdishakur</div>
      </main>
    </>
  );
}
