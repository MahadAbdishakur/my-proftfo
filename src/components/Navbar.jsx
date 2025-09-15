import { FaRocket, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="header container">
      <div style={{fontWeight:700, display:'flex', alignItems:'center', gap:8}}>
        <FaRocket /> Mahad Abdishakur
      </div>
      <nav className="nav">
        <a href="#projects">Projects</a>
        <a href="#inventions">Inventions</a>
        <a href="#space">Space</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#vr/ar">VR/AR</a>
        <a href="#donate">Donate</a>
        <a href="#shop">Shop</a>
        <a href="Blog">Blog</a>
        {/* optional external links */}
        <a href="https://github.com/yourhandle" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/your-handle" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      </nav>
    </header>
  );
}
