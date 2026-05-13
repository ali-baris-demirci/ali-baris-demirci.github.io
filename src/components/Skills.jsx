import { useState } from 'react'
import { skills } from '../data/portfolioData'
import { FaUsers, FaGlobe, FaProjectDiagram, FaChartBar, FaDatabase, FaBrain } from 'react-icons/fa'
import '../styles/Skills.css'

// ── Domain groupings ──────────────────────────────────────────────
const DOMAINS = [
  {
    key: 'analysis',
    label: 'Data Analysis',
    icon: <FaChartBar />,
    description: 'Turning raw data into decisions',
    technical: ['SQL', 'Statistical Analysis', 'Data Quality'],
    tools: ['BI & Visualization'],
  },
  {
    key: 'engineering',
    label: 'Data Engineering',
    icon: <FaDatabase />,
    description: 'Building the pipes that data flows through',
    technical: ['ETL/ELT', 'Data Modeling', 'Data Warehousing'],
    tools: ['Data Engineering', 'Big Data & Streaming', 'ERP', 'Development'],
  },
  {
    key: 'science',
    label: 'Data Science & BI',
    icon: <FaBrain />,
    description: 'Models, insights & executive dashboards',
    technical: ['Python', 'Statistical Analysis'],
    tools: ['ML & Data Science', 'BI & Visualization'],
  },
]

const Skills = () => {
  const [active, setActive] = useState('analysis')

  const domain = DOMAINS.find(d => d.key === active)

  const technicalCards = skills.technical.filter(s =>
    domain.technical.includes(s.category)
  )
  const toolCards = skills.tools.filter(s =>
    domain.tools.includes(s.category)
  )

  return (
    <section className="skills section--alt" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        {/* ── Tab Bar ── */}
        <div className="skills__tabs" role="tablist">
          {DOMAINS.map(d => (
            <button
              key={d.key}
              role="tab"
              aria-selected={active === d.key}
              className={`skills__tab ${active === d.key ? 'skills__tab--active' : ''}`}
              onClick={() => setActive(d.key)}
            >
              <span className="skills__tab-icon">{d.icon}</span>
              <span className="skills__tab-label">{d.label}</span>
            </button>
          ))}
        </div>

        {/* ── Domain Panel ── */}
        <div className="skills__panel" key={active}>
          <p className="skills__panel-desc">{domain.description}</p>

          <div className="skills__panel-columns">
            {/* Technical */}
            <div className="skills__column">
              <h4 className="skills__column-title">Core Skills</h4>
              <div className="skills__card-stack">
                {technicalCards.map((skill, i) => (
                  <div className="skills__card" key={i}>
                    <span className="skills__card-title">{skill.category}</span>
                    <div className="skills__tags">
                      {skill.items.map((item, j) => (
                        <span className="tag" key={j}>{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="skills__column">
              <h4 className="skills__column-title">Tools & Platforms</h4>
              <div className="skills__card-stack">
                {toolCards.map((skill, i) => (
                  <div className="skills__card" key={i}>
                    <span className="skills__card-title">{skill.category}</span>
                    <div className="skills__tags">
                      {skill.items.map((item, j) => (
                        <span className="tag" key={j}>{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Row: Soft / Methodologies / Languages ── */}
        <div className="skills__bottom-three">
          <div className="skills__group--third">
            <div className="skills__group-header">
              <FaUsers className="skills__group-icon" />
              <h3 className="skills__group-title">Soft Skills</h3>
            </div>
            <div className="skills__tags skills__tags--wrap">
              {skills.softSkills.map((s, i) => (
                <span className="tag" key={i}>{s}</span>
              ))}
            </div>
          </div>

          <div className="skills__group--third">
            <div className="skills__group-header">
              <FaProjectDiagram className="skills__group-icon" />
              <h3 className="skills__group-title">Methodologies</h3>
            </div>
            <div className="skills__tags skills__tags--wrap">
              {skills.methodologies.map((m, i) => (
                <span className="tag" key={i}>{m}</span>
              ))}
            </div>
          </div>

          <div className="skills__group--third">
            <div className="skills__group-header">
              <FaGlobe className="skills__group-icon" />
              <h3 className="skills__group-title">Languages</h3>
            </div>
            <div className="skills__languages">
              {skills.languages.map((lang, i) => (
                <div className="skills__language" key={i}>
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
