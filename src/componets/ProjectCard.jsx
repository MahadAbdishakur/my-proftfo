export default function ProjectCard({ item }) {
  return (
    <article className="card">
      <div className="badge">{item.date}</div>
      <h3 style={{margin:'8px 0 6px'}}>{item.title}</h3>
      <p style={{color:'var(--muted)'}}>{item.description}</p>
      <div className="tags">
        {item.tags.map((t) => <span key={t} className="badge">{t}</span>)}
      </div>
      {(item.links?.demo || item.links?.code || item.links?.writeup) && (
        <div style={{display:'flex', gap:8, marginTop:12}}>
          {item.links.demo && <a className="btn" href={item.links.demo} target="_blank">Demo</a>}
          {item.links.code && <a className="btn secondary" href={item.links.code} target="_blank">Code</a>}
          {item.links.writeup && <a className="btn secondary" href={item.links.writeup} target="_blank">Write-up</a>}
        </div>
      )}
    </article>
  );
}
