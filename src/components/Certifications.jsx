import { certifications } from '../data/portfolioData'
import { FaExternalLinkAlt, FaAward, FaSpinner } from 'react-icons/fa'
import '../styles/Certifications.css'

const Certifications = () => {
  const isInProgress = (cert) => cert.year?.includes('In Progress')

  return (
    <section className="certs section--alt" id="certifications">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Continuous learning and professional development</p>
        </div>

        <div className="certs__grid">
          {certifications.map((cert, index) => {
            const CardTag = cert.link ? 'a' : 'div'
            const linkProps = cert.link
              ? { href: cert.link, target: '_blank', rel: 'noopener noreferrer' }
              : {}

            return (
              <CardTag
                {...linkProps}
                className={`certs__card ${isInProgress(cert) ? 'certs__card--in-progress' : ''}`}
                key={index}
              >
                <div className="certs__card-icon">
                  <FaAward />
                </div>
                <div className="certs__card-content">
                  <h3 className="certs__card-title">
                    {cert.name}
                    {isInProgress(cert) && (
                      <span className="certs__badge">
                        <FaSpinner className="certs__badge-icon" /> In Progress
                      </span>
                    )}
                  </h3>
                  <div className="certs__card-meta">
                    <span className="certs__card-provider">{cert.provider}</span>
                    <span className="certs__card-year">
                      {isInProgress(cert) ? new Date().getFullYear() : cert.year}
                    </span>
                  </div>
                </div>
                {cert.link && (
                  <div className="certs__card-link">
                    <FaExternalLinkAlt />
                  </div>
                )}
              </CardTag>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Certifications