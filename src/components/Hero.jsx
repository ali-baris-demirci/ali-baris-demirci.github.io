import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import { personalInfo, highlights } from '../data/portfolioData'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <section className="hero section--dark" id="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <div className="hero__text">
            <p className="hero__greeting">Hello, I'm</p>
            <h1 className="hero__name">{personalInfo.name}</h1>
            <h2 className="hero__title">{personalInfo.title}</h2>
            <p className="hero__location">📍 {personalInfo.location}</p>

            <div className="hero__cta">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="btn btn--primary"
              >
                <FaEnvelope /> Get In Touch
              </Link>
              <a
                href={personalInfo.resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline-light"
              >
                <FaDownload /> Download CV
              </a>
            </div>

            <div className="hero__socials">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="hero__image">
            <div className="hero__image-wrapper">
              <img src={personalInfo.profilePhoto} alt={personalInfo.name} />
            </div>
          </div>
        </div>

        <div className="hero__highlights">
          {highlights.map((item, index) => (
            <div className="hero__highlight" key={index}>
              <span className="hero__highlight-value">{item.value}</span>
              <span className="hero__highlight-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero