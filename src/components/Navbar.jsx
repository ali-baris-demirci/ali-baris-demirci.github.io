import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { navLinks, personalInfo } from '../data/portfolioData'
import { FaBars, FaTimes } from 'react-icons/fa'
import '../styles/Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="navbar__logo"
          onClick={closeMenu}
        >
          {'<'} {personalInfo.name.split(' ')[0]} {'/>'} 
        </Link>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="navbar__link--active"
                className="navbar__link"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="navbar__resume-mobile">
            <a
              href={personalInfo.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--sm"
              onClick={closeMenu}
            >
              Resume
            </a>
          </li>
        </ul>

        <a
          href={personalInfo.resumeFile}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary btn--sm navbar__resume-desktop"
        >
          Resume
        </a>

        <button className="navbar__toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar