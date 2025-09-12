import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

function StarScene() {
  return (
    <>
      <Stars radius={120} depth={60} count={8000} factor={4} fade />
      <OrbitControls enableZoom />
    </>
  );
}

export default function SpaceLab() {
  const [apod, setApod] = useState(null);
  const [error, setError] = useState("");
<button className="btn secondary" onClick={() => say("Zooming to Mars soon!")}>🔊 Speak</button>

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
        );
        const data = await res.json();
        setApod(data);
      } catch (e) {
        setError("Could not load NASA APOD.");
      }
    })();
  }, []);

  return (
    <div className="section" id="space">
      <h2 style={{marginTop:0}}>Space Lab</h2>

      {/* 3D Starfield */}
      <div style={{ height: 320, borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,.06)" }}>
        <Canvas camera={{ position: [0, 0, 3] }}>
          <StarScene />
        </Canvas>
      </div>

      {/* NASA APOD */}
      <div className="grid" style={{ marginTop: 16 }}>
        <div className="card">
          <div className="badge">NASA APOD</div>
          {error && <p style={{ color: "tomato" }}>{error}</p>}
          {!apod && !error && <p style={{ color: "var(--muted)" }}>Loading picture of the day…</p>}
          {apod && (
            <>
              <h3 style={{margin:'8px 0 6px'}}>{apod.title}</h3>
              {apod.media_type === "image" && (
                <img src={apod.url} alt={apod.title} style={{ width: "100%", borderRadius: 10 }} />
              )}
              <p style={{ color: "var(--muted)" }}>{apod.explanation?.slice(0, 220)}…</p>
              <a className="btn" href={apod.hdurl || apod.url} target="_blank" rel="noreferrer">Open HD</a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
