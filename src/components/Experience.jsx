import { experience } from '../data/portfolioData'
import { FaBriefcase, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { useState } from 'react'
import '../styles/Experience.css'

const ExperienceCard = ({ job, isMain = true }) => {
  const [expanded, setExpanded] = useState(false)

  if (!isMain) {
    return (
      <div className="exp__earlier-card">
        <div className="exp__earlier-dot" />
        <div className="exp__earlier-content">
          <div className="exp__earlier-header">
            <h4 className="exp__earlier-role">{job.role}</h4>
            <span className="exp__earlier-duration">{job.duration}</span>
          </div>
          <p className="exp__earlier-company">
            {job.company} · {job.location}
          </p>
          <p className="exp__earlier-desc">{job.description}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="exp__card">
      <div className="exp__timeline-dot" />
      <div className="exp__card-content">
        <div className="exp__card-header">
          <div>
            <h3 className="exp__role">{job.role}</h3>
            <p className="exp__company">
              <FaBriefcase /> {job.company}
              <span className="exp__separator">·</span>
              <FaMapMarkerAlt /> {job.location}
            </p>
          </div>
          <span className="exp__duration">{job.duration}</span>
        </div>

        <p className="exp__context">{job.context}</p>

        <div className="exp__tags">
          {job.tags.map((tag, i) => (
            <span className="tag" key={i}>{tag}</span>
          ))}
        </div>

        <button
          className="exp__toggle"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Hide Details' : 'Show Details'}
          {expanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {expanded && (
          <div className="exp__details">
            <div className="exp__detail-section">
              <h4>Responsibilities</h4>
              <ul>
                {job.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="exp__detail-section">
              <h4>Key Achievements</h4>
              <ul className="exp__achievements">
                {job.achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey across industries</p>
        </div>

        {/* Main Timeline */}
        <div className="exp__timeline">
          {experience.main.map((job) => (
            <ExperienceCard key={job.id} job={job} isMain={true} />
          ))}
        </div>

        {/* Earlier Experience */}
        <div className="exp__earlier">
          <h3 className="exp__earlier-title">Earlier Experience</h3>
          <div className="exp__earlier-list">
            {experience.earlier.map((job, index) => (
              <ExperienceCard key={index} job={job} isMain={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience