import { experience } from "../data/portfolioData"

export default function Experience() {
  return (
    <section id="002_experiences">
      <div className="flex items-baseline gap-unit-4 mb-unit-12 border-b-2 border-primary/10 pb-unit-4">
        <h2 className="font-label-mono text-label-mono text-primary font-black uppercase tracking-widest">Experiences</h2>
        <span className="font-label-mono text-label-mono text-secondary font-black ml-auto">002</span>
      </div>
      <div className="space-y-unit-8 relative">
        {experience.main.map((exp, index) => (
          <div key={exp.id} className="relative pl-unit-12 border-l-2 border-primary/20 pb-unit-12 group">
            <div className={`absolute top-0 -left-[9px] w-4 h-4 rounded-full border-4 border-white shadow-sm ${index === 0 ? "bg-primary" : "bg-outline"}`}></div>
            <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
              <h4 className="font-headline-md text-[22px] text-primary leading-tight font-black">{exp.role}</h4>
              <span className={`font-label-mono text-label-mono font-bold whitespace-nowrap ${index === 0 ? "text-secondary" : "text-outline"}`}>{exp.duration}</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">{exp.company}</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-unit-6 leading-relaxed">{exp.context || exp.responsibilities.slice(0, 2).join(" · ")}</p>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag, i) => (
                <span key={i} className="px-4 py-1.5 rounded-full border border-primary/20 text-primary bg-primary/5 font-label-mono text-[11px] font-bold hover:bg-primary hover:text-white transition-all uppercase">{tag.toUpperCase().replace(/\s+/g, "_")}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
