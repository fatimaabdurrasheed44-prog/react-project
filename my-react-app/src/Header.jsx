import './Header.css'

function Header() {
  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="header">
      <div className="logo" onClick={() => goTo('home')}>nexa<span>.</span></div>
      <nav className="nav">
        <a href="#home" onClick={(e) => { e.preventDefault(); goTo('home') }}>Home</a>
        <a href="#services" onClick={(e) => { e.preventDefault(); goTo('services') }}>Services</a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); goTo('projects') }}>Projects</a>
      </nav>
      <a href="#contact" onClick={(e) => { e.preventDefault(); goTo('contact') }} className="talk-btn">Let's Talk ↗</a>
    </header>
  )
}
export default Header