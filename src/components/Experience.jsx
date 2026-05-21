import { experience } from "../data/portfolioData"

export default function Experience() {
  return (
    <section id="002_experiences">
      <div className="flex items-baseline gap-unit-4 mb-unit-8 border-b border-outline-variant pb-unit-2">
        <h2 className="font-label-mono text-label-mono text-on-surface-variant uppercase">Experiences</h2>
        <span className="font-label-mono text-label-mono text-outline ml-auto">002</span>
      </div>
      <div className="space-y-unit-8 relative">
        {experience.main.map((exp, index) => (
          <div key={exp.id} className="relative pl-unit-8 border-l border-outline-variant pb-unit-8 group">
            <div className={`absolute top-0 -left-[5px] w-2 h-2 ${index === 0 ? "bg-primary" : "bg-outline"}`}></div>
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-headline-md text-[20px] leading-tight">{exp.role}</h4>
              <span className="font-label-mono text-label-mono text-outline whitespace-nowrap ml-4">{exp.duration}</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">{exp.company}</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-unit-4">{exp.context || exp.responsibilities.slice(0, 2).join(" · ")}</p>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag, i) => (
                <span key={i} className="px-2 py-0.5 border border-outline-variant font-label-mono text-[10px] hover:border-primary transition-colors">{tag.toUpperCase().replace(/\s+/g, "_")}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
