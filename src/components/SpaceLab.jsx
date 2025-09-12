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

  function say(text) {
    try {
      if (!("speechSynthesis" in window)) {
        alert("Speech synthesis isn’t supported in this browser.");
        return;
      }
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    } catch (e) {
      // no-op
    }
  }

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(
          "Kphw6cT72KUAJPpezfe3X19qBgmaeNIv9JBBzIkG"
        );
        if (!res.ok) throw new Error("APOD request failed");
        const data = await res.json();
        if (!cancelled) setApod(data);
      } catch (e) {
        if (!cancelled) setError("Could not load NASA APOD (rate limit or network).");
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="section" id="space">
      <h2 style={{ marginTop: 0 }}>Space Lab</h2>

      {/* 🔊 Speak button */}
      <button
        type="button"
        className="btn secondary"
        onClick={() => say("Zooming to Mars soon!")}
        style={{ marginBottom: 12 }}
      >
        🔊 Speak
      </button>

      {/* 3D Starfield */}
      <div
        style={{
          height: 320,
          borderRadius: 12,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,.06)",
        }}
      >
        <Canvas camera={{ position: [0, 0, 3] }}>
          <StarScene />
        </Canvas>
      </div>

      {/* NASA APOD */}
      <div className="grid" style={{ marginTop: 16 }}>
        <div className="card">
          <div className="badge">NASA APOD</div>
          {error && <p style={{ color: "tomato" }}>{error}</p>}
          {!apod && !error && (
            <p style={{ color: "var(--muted)" }}>Loading picture of the day…</p>
          )}
          {apod && (
            <>
              <h3 style={{ margin: "8px 0 6px" }}>{apod.title}</h3>
              {apod.media_type === "image" && (
                <img
                  src={apod.url}
                  alt={apod.title}
                  style={{ width: "100%", borderRadius: 10 }}
                />
              )}
              <p style={{ color: "var(--muted)" }}>
                {apod.explanation?.slice(0, 220)}…
              </p>
              <a
                className="btn"
                href={apod.hdurl || apod.url}
                target="_blank"
                rel="noreferrer"
              >
                Open HD
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
