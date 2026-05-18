import { useState } from 'react'
import { skills } from '../data/portfolioData'
import { FaUsers, FaGlobe, FaProjectDiagram, FaLayerGroup, FaFlask, FaChartPie } from 'react-icons/fa'
import '../styles/Skills.css'

const DOMAINS = [
  {
    key: 'foundation',
    label: 'The Foundation',
    sublabel: 'Engineering & Infrastructure',
    icon: <FaLayerGroup />,
    tagline: 'The data layer. Without this, nothing works.',
    accent: 'sky',
    columns: [
      {
        title: 'Core Skills',
        items: [
          { label: 'Data Engineering', detail: 'ETL/ELT Pipelines · dbt · Spark · Kafka · Orchestration' },
          { label: 'Data Modeling', detail: 'Star & Snowflake Schemas · Optimization · Data Warehousing' },
          { label: 'SQL Mastery', detail: 'Oracle (PL/SQL) · MSSQL (T-SQL) · PostgreSQL · Snowflake · Azure SQL' },
        ],
      },
      {
        title: 'Tools & Platforms',
        items: [
          { label: 'Platforms', detail: 'Azure Data Factory · Oracle Data Integrator · Acumatica ERP' },
        ],
      },
    ],
  },
  {
    key: 'insight',
    label: 'The Insight',
    sublabel: 'Science & Advanced Analytics',
    icon: <FaFlask />,
    tagline: 'Turning data into patterns. Patterns into predictions.',
    accent: 'indigo',
    columns: [
      {
        title: 'Core Skills',
        items: [
          { label: 'Programming', detail: 'Python (Pandas, NumPy) · Jupyter · GitHub · VS Code' },
          { label: 'Machine Learning', detail: 'scikit-learn · Keras · PyTorch · OpenCV · YOLO' },
          { label: 'Advanced Statistics', detail: 'Feature Engineering · A/B Testing · Exploratory Data Analysis (EDA)' },
          { label: 'Validation', detail: 'Data Quality Rules · Error Reduction · Accuracy Controls' },
        ],
      },
      {
        title: 'Tools & Platforms',
        items: [
          { label: 'ML Toolchain', detail: 'Jupyter Notebook · GitHub · VS Code · scikit-learn · PyTorch' },
        ],
      },
    ],
  },
  {
    key: 'impact',
    label: 'The Impact',
    sublabel: 'Business Intelligence & Leadership',
    icon: <FaChartPie />,
    tagline: 'Where data meets decisions. This is what stakeholders see.',
    accent: 'teal',
    columns: [
      {
        title: 'Core Skills',
        items: [
          { label: 'Visualization', detail: 'Power BI · Tableau · Qlik (Sense / View / NPrinting)' },
          { label: 'Strategic Delivery', detail: 'Data Storytelling · Executive Presentations · Stakeholder Management' },
          { label: 'Operational Excellence', detail: 'Agile/Scrum · Requirements Gathering · Data Quality Principles' },
          { label: 'Leadership', detail: 'Mentoring · Data Culture Advocacy · Cross-functional Collaboration' },
        ],
      },
      {
        title: 'Tools & Platforms',
        items: [
          { label: 'BI Platforms', detail: 'Power BI · Tableau · QlikView · Qlik Sense · NPrinting' },
        ],
      },
    ],
  },
]

const Skills = () => {
  const [active, setActive] = useState('foundation')
  const domain = DOMAINS.find(d => d.key === active)

  return (
    <section className="skills section--alt" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        {/* Tab Bar */}
        <div className="skills__tabs" role="tablist">
          {DOMAINS.map(d => (
            <button
              key={d.key}
              role="tab"
              aria-selected={active === d.key}
              className={`skills__tab ${active === d.key ? `skills__tab--active skills__tab--${d.accent}` : ''}`}
              onClick={() => setActive(d.key)}
            >
              <span className="skills__tab-icon" aria-hidden="true">{d.icon}</span>
              <span className="skills__tab-body">
                <span className="skills__tab-label">{d.label}</span>
                <span className="skills__tab-sub">{d.sublabel}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Domain Panel */}
        <div className={`skills__panel skills__panel--${domain.accent}`} key={active}>
          <p className="skills__panel-tagline">{domain.tagline}</p>
          <div className="skills__panel-columns">
            {domain.columns.map((col, ci) => (
              <div className="skills__column" key={ci}>
                <h4 className="skills__column-title">{col.title}</h4>
                <div className="skills__card-stack">
                  {col.items.map((item, ii) => (
                    <div className={`skills__card skills__card--${domain.accent}`} key={ii}>
                      <span className="skills__card-label">{item.label}</span>
                      <span className="skills__card-detail">{item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="skills__bottom-three">
          <div className="skills__group--third">
            <div className="skills__group-header">
              <FaUsers className="skills__group-icon" aria-hidden="true" />
              <h3 className="skills__group-title">Soft Skills</h3>
            </div>
            <div className="skills__tags">
              {skills.softSkills.map((s, i) => (
                <span className="tag" key={i}>{s}</span>
              ))}
            </div>
          </div>

          <div className="skills__group--third">
            <div className="skills__group-header">
              <FaProjectDiagram className="skills__group-icon" aria-hidden="true" />
              <h3 className="skills__group-title">Methodologies</h3>
            </div>
            <div className="skills__tags">
              {skills.methodologies.map((m, i) => (
                <span className="tag" key={i}>{m}</span>
              ))}
            </div>
          </div>

          <div className="skills__group--third">
            <div className="skills__group-header">
              <FaGlobe className="skills__group-icon" aria-hidden="true" />
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