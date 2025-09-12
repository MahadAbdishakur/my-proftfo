import "./Style.css";
import { Toaster, toast } from "react-hot-toast";
import { motion } from "framer-motion";
import SpaceLab from "./components/SpaceLab.jsx";
import Navbar from "./components/Navbar.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import { projects } from "./data/Projects.js";
import { inventions } from "./data/Inventions.js";

export default function App() {

  return (
    <>
      <Navbar />
      <main className="container">
        <Toaster position="top-right" />
        <section className="hero">
          <h1>Spiritual innovator<br></br></h1>
          <h4>(Noun):</h4>
          <em><h3>A person who focus on turning insight into action by the will of Allah</h3></em>
          <p>
            I make playful hardware + software: ESP32 sound-effect shoes, an AI assistant called
            <strong> Wizard</strong>, and lots of invention experiments.
          </p>
          <div style={{display:'flex', gap:12, marginTop:16}}>
           <motion.a className="btn" href="#projects" whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.03 }}>See Projects</motion.a>
          <motion.a className="btn secondary" href="#inventions" onClick={(e) => { toast('Zooming to inventions 🚀'); }} whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.03 }}>Invention List</motion.a>
          

          </div>
        </section>
        <section><SpaceLab /></section>
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
