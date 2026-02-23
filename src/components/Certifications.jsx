import { certifications } from '../data/portfolioData'
import { FaExternalLinkAlt, FaAward } from 'react-icons/fa'
import '../styles/Certifications.css'

const Certifications = () => {
  return (
    <section className="certs section--alt" id="certifications">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Continuous learning and professional development</p>
        </div>

        <div className="certs__grid">
          {certifications.map((cert, index) => (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certs__card"
              key={index}
            >
              <div className="certs__card-icon">
                <FaAward />
              </div>
              <div className="certs__card-content">
                <h3 className="certs__card-title">{cert.name}</h3>
                <div className="certs__card-meta">
                  <span className="certs__card-provider">{cert.provider}</span>
                  <span className="certs__card-year">{cert.year}</span>
                </div>
              </div>
              <div className="certs__card-link">
                <FaExternalLinkAlt />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications