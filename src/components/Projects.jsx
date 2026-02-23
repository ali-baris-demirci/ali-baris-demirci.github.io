import { projects } from '../data/portfolioData'
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa'
import { useState } from 'react'
import '../styles/Projects.css'

const Projects = () => {
  const [activeTab, setActiveTab] = useState('academic')

  return (
    <section className="projects section--alt" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Academic research and professional implementations</p>
        </div>

        {/* Tabs */}
        <div className="projects__tabs">
          <button
            className={`projects__tab ${activeTab === 'academic' ? 'projects__tab--active' : ''}`}
            onClick={() => setActiveTab('academic')}
          >
            🎓 Academic
          </button>
          <button
            className={`projects__tab ${activeTab === 'professional' ? 'projects__tab--active' : ''}`}
            onClick={() => setActiveTab('professional')}
          >
            💼 Professional
          </button>
        </div>

        {/* Academic Projects */}
        {activeTab === 'academic' && (
          <div className="projects__grid">
            {projects.academic.map((project, index) => (
              <div className="projects__card" key={index}>
                <div className="projects__card-top">
                  <div className="projects__card-icon">📂</div>
                  <div className="projects__card-links">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__card-link"
                        aria-label="View on GitHub"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="projects__card-title">{project.name}</h3>
                <p className="projects__card-desc">{project.description}</p>
                <div className="projects__card-tech">
                  {project.tech.map((tech, i) => (
                    <span className="tag" key={i}>{tech}</span>
                  ))}
                </div>
                {!project.link && (
                  <span className="projects__card-status">
                    🔜 Coming to GitHub soon
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Professional Projects */}
        {activeTab === 'professional' && (
        <div className="projects__grid">
            {projects.professional.map((project, index) => (
            <div className="projects__card projects__card--pro" key={index}>
                <div className="projects__card-top">
                <div className="projects__card-icon">🏢</div>
                <div className="projects__card-links">
                    {project.link ? (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__card-link"
                        aria-label="View on GitHub"
                    >
                        <FaGithub />
                    </a>
                    ) : (
                    <span className="projects__card-badge">
                        <FaLock /> Internal
                    </span>
                    )}
                </div>
                </div>
                <h3 className="projects__card-title">{project.name}</h3>
                <p className="projects__card-desc">{project.description}</p>
                <div className="projects__card-tech">
                {project.tech.map((tech, i) => (
                    <span className="tag" key={i}>{tech}</span>
                ))}
                </div>
            </div>
            ))}
        </div>
        )}
      </div>
    </section>
  )
}

export default Projects