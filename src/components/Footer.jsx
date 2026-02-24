import { personalInfo } from '../data/portfolioData'
import { FaGithub, FaLinkedin, FaEnvelope, FaHourglassStart } from 'react-icons/fa'
import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">
              <FaHourglassStart className="footer__logo-icon" />
            </span>
            <p className="footer__tagline">
              Turning data into decisions, one dashboard at a time.
            </p>
          </div>

          <div className="footer__socials">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Ali Baris Demirci. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer