import './Hero.css'

function Hero() {
  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <p className="hero-pill">● YOUR DIGITAL GROWTH PARTNER</p>
        <h1>We turn big ideas<br />into <span>digital reality.</span></h1>
        <p className="hero-text">We design beautiful websites, build powerful software, and create digital experiences that help businesses grow.</p>
        <div className="hero-buttons">
          <a href="#projects" onClick={(e) => { e.preventDefault(); goTo('projects') }} className="btn-white">Explore our work →</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); goTo('services') }} className="btn-dark">What we do</a>
        </div>
        <p className="hero-small">✦ Ideas meet innovation.</p>
      </div>

      <div className="hero-right">
        <div className="card-back card-back-1"></div>
        <div className="card-back card-back-2"></div>
        <div className="n-card">
          <div className="n-top"><span>✦ nexalabs</span><span>...</span></div>
          <div className="n-circle">N</div>
          <h3>Built for the future.</h3>
          <p>Creative thinking. Smart technology.</p>
          <div className="n-bottom"><span>✓ Digital solutions</span><span>100%</span></div>
        </div>
        <div className="float-card float-top">+ Creative ideas</div>
        <div className="float-card float-bottom">✓ Digital solutions</div>
      </div>
    </section>
  )
}
export default Hero