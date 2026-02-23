import { education, achievements } from '../data/portfolioData'
import { FaGraduationCap, FaTrophy } from 'react-icons/fa'
import '../styles/Education.css'

const Education = () => {
  return (
    <section className="education section" id="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic background and achievements</p>
        </div>

        <div className="education__layout">
          {/* Degrees */}
          <div className="education__degrees">
            {education.map((edu, index) => (
              <div className="education__card" key={index}>
                <div className="education__card-icon">
                  <FaGraduationCap />
                </div>
                <div className="education__card-content">
                  <div className="education__card-header">
                    <h3 className="education__degree">{edu.degree}</h3>
                    <span className="education__year">{edu.year}</span>
                  </div>
                  <p className="education__institution">{edu.institution}</p>
                  {edu.notes && (
                    <p className="education__notes">{edu.notes}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="education__achievements">
            <div className="education__achievements-card">
              <div className="education__achievements-header">
                <FaTrophy className="education__achievements-icon" />
                <h3>Achievements</h3>
              </div>
              <ul className="education__achievements-list">
                {achievements.map((achievement, index) => (
                  <li key={index} className="education__achievement-item">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education