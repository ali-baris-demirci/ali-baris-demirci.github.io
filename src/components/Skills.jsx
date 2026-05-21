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
          category: "Advanced Statistics",
          items: ["Feature Engineering", "A/B Testing", "Exploratory Data Analysis (EDA)"],
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
    <section className="mb-unit-16" id="001_skills">
      <div className="flex items-baseline gap-unit-4 mb-unit-8 border-b border-outline-variant pb-unit-2">
        <h2 className="font-label-mono text-label-mono text-on-surface-variant uppercase">Skills</h2>
        <div className="h-[1px] flex-grow bg-outline-variant opacity-30" style={{backgroundImage: "repeating-linear-gradient(to right, #c1c7ce 0, #c1c7ce 4px, transparent 4px, transparent 8px)"}}></div>
        <span className="font-label-mono text-label-mono text-outline">001</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter mb-unit-4">
        {categories.map((id) => {
          const cat = skillData[id]
          return (
            <div
              key={id}
              className={`category-card relative border border-outline-variant p-unit-6 hover:border-primary transition-all group cursor-pointer overflow-hidden ${activeTab === id ? "active" : ""}`}
              onClick={() => setActiveTab(id)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-5 grayscale group-hover:grayscale-0 group-hover:opacity-10 transition-all"
                style={{ backgroundImage: `url(${cat.bg})` }}
              ></div>
              <div className="relative z-10">
                <div className="mb-unit-2 flex items-center justify-between">
                  <span className="material-symbols-outlined text-primary">{cat.icon}</span>
                  <span className="font-label-mono text-[10px] text-outline">{cat.code}</span>
                </div>
                <h3 className="font-headline-md text-headline-md">{cat.title}</h3>
                <p className="font-label-mono text-[11px] text-on-surface-variant">{cat.subtitle}</p>
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
              <div className="border border-outline-variant p-unit-6 bg-surface-container-lowest">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-unit-6">
                  {cat.groups.map((group) => (
                    <div key={group.category}>
                      <h4 className="font-label-mono text-[11px] text-primary uppercase mb-unit-2 tracking-wider">{group.category}</h4>
                      <ul className="space-y-1">
                        {group.items.map((item, i) => (
                          <li key={i} className="px-2 py-0.5 border border-outline-variant font-label-mono text-[10px] hover:border-primary transition-colors inline-block mr-1 mb-1">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
