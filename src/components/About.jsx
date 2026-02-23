import { summary, personalInfo } from '../data/portfolioData'
import { FaMapMarkerAlt, FaEnvelope, FaBriefcase, FaGraduationCap } from 'react-icons/fa'
import '../styles/About.css'

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me and my journey</p>
        </div>

        <div className="about__content">
          <div className="about__text">
            <p className="about__summary">{summary}</p>
            <p className="about__extra">
              M.Sc. graduate with academic exposure to Python, machine learning, and feature 
              engineering, actively developing toward data science. Passionate about turning 
              raw data into meaningful stories that drive real business impact.
            </p>
          </div>

          <div className="about__details">
            <h3 className="about__details-title">Quick Facts</h3>
            <ul className="about__facts">
              <li className="about__fact">
                <span className="about__fact-icon"><FaMapMarkerAlt /></span>
                <div>
                  <strong>Location</strong>
                  <p>{personalInfo.location}</p>
                </div>
              </li>
              <li className="about__fact">
                <span className="about__fact-icon"><FaEnvelope /></span>
                <div>
                  <strong>Email</strong>
                  <p>{personalInfo.email}</p>
                </div>
              </li>
              <li className="about__fact">
                <span className="about__fact-icon"><FaBriefcase /></span>
                <div>
                  <strong>Experience</strong>
                  <p>6+ years in Data & BI</p>
                </div>
              </li>
              <li className="about__fact">
                <span className="about__fact-icon"><FaGraduationCap /></span>
                <div>
                  <strong>Education</strong>
                  <p>M.Sc. Data Analytics</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About