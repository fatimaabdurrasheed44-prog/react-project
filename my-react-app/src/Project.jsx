import './Project.css'

function Project() {
  return (
    <section className="project" id="projects">
      <div className="project-top">
        <div>
          <p className="project-label">01 — BUILDING WHAT'S NEXT</p>
          <h2>Small details.<br />Big impact.</h2>
        </div>
        <p className="project-desc">A few recent projects showing how thoughtful design and technology can reshape a business.</p>
      </div>
      <div className="project-grid">
        <div className="p-card p-blue">
          <div className="p-head"><span>Finora Finance</span><span>↗</span></div>
          <div className="p-letter">F.</div>
          <p>A modern finance platform that simplifies banking with clean design and powerful features.</p>
          <div className="p-tags"><span>FinTech</span><span>Web App</span></div>
        </div>
        <div className="p-card p-teal">
          <div className="p-head"><span>Harvest Hub</span><span>↗</span></div>
          <div className="p-letter">H.</div>
          <p>Connecting farmers directly to buyers with a marketplace built for growth and trust.</p>
          <div className="p-tags"><span>AgriTech</span><span>Marketplace</span></div>
        </div>
      </div>
    </section>
  )
}
export default Project