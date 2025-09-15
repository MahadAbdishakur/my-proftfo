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
          <em><h3>An individual reliant on a higher power to fuel and produce works of art at his mercy</h3></em>
          <p>
            <Em>Scroll to About section for more information</Em>
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
            My name is Mahad Abdishakur. I'm a Muslim first, 
            <b></b>
            a man second, 
            <b></b>
            and a maker always. 
            <b></b>
            My curiosity ranges from space and AI to VR, electronics, and jewelry design. 
            I like turning sketches and half-ideas into working prototypes and sharing the process so others can build too. 
            This site is my hub: demos, write-ups, and experiments—all in one place.
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
