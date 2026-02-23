import { skills } from '../data/portfolioData'
import { FaCode, FaTools, FaUsers, FaGlobe, FaProjectDiagram } from 'react-icons/fa'
import '../styles/Skills.css'

const Skills = () => {
  return (
    <section className="skills section--alt" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        {/* Technical Skills */}
        <div className="skills__group">
          <div className="skills__group-header">
            <FaCode className="skills__group-icon" />
            <h3 className="skills__group-title">Technical Skills</h3>
          </div>
          <div className="skills__grid">
            {skills.technical.map((skill, index) => (
              <div className="skills__card" key={index}>
                <h4 className="skills__card-title">{skill.category}</h4>
                <div className="skills__tags">
                  {skill.items.map((item, i) => (
                    <span className="tag" key={i}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="skills__group">
          <div className="skills__group-header">
            <FaTools className="skills__group-icon" />
            <h3 className="skills__group-title">Tools & Platforms</h3>
          </div>
          <div className="skills__grid">
            {skills.tools.map((skill, index) => (
              <div className="skills__card" key={index}>
                <h4 className="skills__card-title">{skill.category}</h4>
                <div className="skills__tags">
                  {skill.items.map((item, i) => (
                    <span className="tag" key={i}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="skills__bottom-three">
          {/* Soft Skills */}
          <div className="skills__group skills__group--third">
            <div className="skills__group-header">
              <FaUsers className="skills__group-icon" />
              <h3 className="skills__group-title">Soft Skills</h3>
            </div>
            <div className="skills__tags skills__tags--wrap">
              {skills.softSkills.map((skill, index) => (
                <span className="tag" key={index}>{skill}</span>
              ))}
            </div>
          </div>

          {/* Methodologies */}
          <div className="skills__group skills__group--third">
            <div className="skills__group-header">
              <FaProjectDiagram className="skills__group-icon" />
              <h3 className="skills__group-title">Methodologies</h3>
            </div>
            <div className="skills__tags skills__tags--wrap">
              {skills.methodologies.map((method, index) => (
                <span className="tag" key={index}>{method}</span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="skills__group skills__group--third">
            <div className="skills__group-header">
              <FaGlobe className="skills__group-icon" />
              <h3 className="skills__group-title">Languages</h3>
            </div>
            <div className="skills__languages">
              {skills.languages.map((lang, index) => (
                <div className="skills__language" key={index}>
                  <span className="skills__language-name">{lang.language}</span>
                  <span className="skills__language-level">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills