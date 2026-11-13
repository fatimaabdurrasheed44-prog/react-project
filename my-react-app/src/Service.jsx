import './Service.css'

function Service() {
  return (
    <section className="service" id="services">
      <p className="service-label">WHAT WE DO</p>
      <div className="service-top">
        <h2>Good ideas deserve<br />great execution.</h2>
        <p>From concept to launch, we build digital products that work beautifully and perform flawlessly.</p>
      </div>
      <div className="service-grid">
        <div className="s-card">
          <div className="s-icon">🌐</div>
          <h3>Web Development</h3>
          <p>Fast, responsive websites built with modern technology and best practices.</p>
          <ul><li>✓ Responsive Design</li><li>✓ SEO Optimized</li><li>✓ Fast Performance</li></ul>
        </div>
        <div className="s-card">
          <div className="s-icon">💻</div>
          <h3>Software Solutions</h3>
          <p>Custom software and web applications tailored to your business needs.</p>
          <ul><li>✓ Custom Development</li><li>✓ Cloud Integration</li><li>✓ Scalable Architecture</li></ul>
        </div>
        <div className="s-card">
          <div className="s-icon">🎨</div>
          <h3>UI/UX Design</h3>
          <p>Beautiful, intuitive interfaces that users love and that drive results.</p>
          <ul><li>✓ User Research</li><li>✓ Wireframing</li><li>✓ Prototyping</li></ul>
        </div>
      </div>
    </section>
  )
}
export default Service