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
  <h1>Spiritual innovator</h1>
  <h4>(Noun):</h4>
  <em>A person who focuses on turning insight into action by the will of Allah</em>
  <p>
    I make playful hardware + software: ESP32 sound-effect shoes, an AI assistant called
    <strong> Wizard</strong>, and lots of invention experiments.
  </p>
  <div style={{display:'flex', gap:12, marginTop:16}}>
    <motion.a className="btn" href="#projects" whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.03 }}>
      See Projects
    </motion.a>
    <motion.a
      className="btn secondary"
      href="#inventions"
      onClick={() => { toast('Zooming to inventions 🚀'); }}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.03 }}
    >
      Invention List
    </motion.a>
  </div>
</section>

{/* Don’t wrap SpaceLab in an extra <section> unless you want the extra border/padding */}
<SpaceLab />


        <div className="footer">© {new Date().getFullYear()} Mahad Abdishakur</div>
      </main>
    </>
  );
}
