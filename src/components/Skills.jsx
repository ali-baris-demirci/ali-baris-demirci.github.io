import { useState } from "react"

export default function Skills() {
  const [activeTab, setActiveTab] = useState("foundation")

  const skillData = {
    foundation: {
      title: "The Foundation",
      subtitle: "data engineering",
      icon: "foundation",
      code: "CR-01",
      bg: "/images/the_foundation.png",
      groups: [
        {
          category: "Data Engineering",
          items: ["ETL/ELT Pipelines", "dbt", "Spark", "Kafka", "Orchestration"],
        },
        {
          category: "Data Modeling",
          items: ["Star & Snowflake Schemas", "Optimization", "Data Warehousing"],
        },
        {
          category: "SQL Mastery",
          items: ["Oracle (PL/SQL)", "MSSQL (T-SQL)", "PostgreSQL", "Snowflake", "Azure SQL"],
        },
        {
          category: "Platforms",
          items: ["Azure Data Factory", "Oracle Data Integrator", "Acumatica (ERP)"],
        },
      ],
    },
    insight: {
      title: "The Insight",
      subtitle: "data science",
      icon: "query_stats",
      code: "CR-02",
      bg: "/images/the_insight.png",
      groups: [
        {
          category: "Programming",
          items: ["Python (Pandas, Numpy)", "Jupyter", "GitHub", "VS Code"],
        },
        {
          category: "Machine Learning",
          items: ["scikit-learn", "Keras", "PyTorch", "OpenCV", "YOLO"],
        },
        {
          category: "Statistics",
          items: ["Feature Engineering", "A/B Testing", "Exploratory Data Analysis"],
        },
        {
          category: "Validation",
          items: ["Data Quality Rules", "Error Reduction", "Accuracy Controls"],
        },
      ],
    },
    impact: {
      title: "The Impact",
      subtitle: "business intelligence",
      icon: "vitals",
      code: "CR-03",
      bg: "/images/the_impact.png",
      groups: [
        {
          category: "Visualization",
          items: ["PowerBI", "Tableau", "Qlik (Sense/View/NPrinting)"],
        },
        {
          category: "Strategic Delivery",
          items: ["Data Storytelling", "Executive Presentations", "Stakeholder Management"],
        },
        {
          category: "Operational Excellence",
          items: ["Agile/Scrum", "Requirements Gathering", "Data Quality Principles"],
        },
        {
          category: "Leadership",
          items: ["Mentoring", "Data Culture Advocacy", "Cross-functional Collaboration"],
        },
      ],
    },
  }

  const categories = ["foundation", "insight", "impact"]

  return (
    <section className="mb-unit-20" id="001_skills">
      <div className="flex items-baseline justify-between mb-unit-12 border-b-2 border-primary/10 pb-unit-4">
        <h2 className="font-label-mono text-label-mono text-primary font-black uppercase tracking-widest">Skills</h2>
        <span className="font-label-mono text-label-mono text-secondary font-black">001</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter mb-unit-8">
        {categories.map((id) => {
          const cat = skillData[id]
          return (
            <div
              key={id}
              className={`category-card relative border border-outline-variant rounded-3xl p-unit-8 hover:border-primary transition-all group cursor-pointer overflow-hidden ${activeTab === id ? "active" : ""}`}
              onClick={() => setActiveTab(id)}
            >
              <div className="relative z-10 flex items-start gap-4">
                <div className="p-3 bg-surface-container rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
                  <span className="material-symbols-outlined text-3xl">{cat.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-headline-md text-headline-md text-primary">{cat.title}</h3>
                    <span className="font-label-mono text-[11px] text-tertiary font-bold tracking-widest ml-2">{cat.code}</span>
                  </div>
                  <p className="font-label-mono text-[12px] text-on-surface-variant uppercase font-bold tracking-tighter">{cat.subtitle}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="relative overflow-hidden">
        {categories.map((id) => {
          const cat = skillData[id]
          return (
            <div key={id} className={`skill-detail-pane ${activeTab === id ? "active" : ""}`} id={`pane-${id}`}>
              <div className="border border-outline-variant rounded-3xl p-unit-8 bg-surface-container-lowest relative overflow-hidden">
                <div className="absolute inset-0 skill-detail-bg" style={{ backgroundImage: `url(${cat.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-8">
                  {cat.groups.map((group) => (
                    <div key={group.category}>
                      <h4 className="font-label-mono text-[11px] text-primary uppercase mb-unit-2 tracking-wider">{group.category}</h4>
                      <ul className="space-y-1">
                        {group.items.map((item, i) => (
                          <li key={i} className="px-3 py-1 rounded-full border border-primary/20 text-primary bg-primary/5 font-label-mono text-[11px] font-bold hover:bg-primary hover:text-white transition-all inline-block mr-1 mb-1 uppercase">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          )
        })}
      </div>
    </section>
  )
}
