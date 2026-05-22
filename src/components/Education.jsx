import { education, interests } from "../data/portfolioData"

export default function Education() {
  return (
    <section>
      <div id="003_education">
        <div className="flex items-baseline gap-unit-4 mb-unit-8 border-b border-outline-variant pb-unit-2">
          <h2 className="font-label-mono text-label-mono text-on-surface-variant uppercase">Education</h2>
          <span className="font-label-mono text-label-mono text-outline ml-auto">003</span>
        </div>
        <div className="space-y-unit-8 relative">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-unit-8 border-l border-outline-variant pb-unit-8">
              <div className={`absolute top-0 -left-[5px] w-2 h-2 ${index === 0 ? "bg-primary" : "bg-outline"}`}></div>
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-headline-md text-[20px] leading-tight">{edu.degree}</h4>
                <span className="font-label-mono text-label-mono text-on-surface-variant whitespace-nowrap ml-4">{edu.year}</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{edu.institution}</p>
              {edu.notes && <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{edu.notes}</p>}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-unit-12" id="004_beyond_work">
        <div className="flex items-baseline gap-unit-4 mb-unit-8 border-b border-outline-variant pb-unit-2">
          <h2 className="font-label-mono text-label-mono text-on-surface-variant uppercase">Beyond Work</h2>
          <span className="font-label-mono text-label-mono text-outline ml-auto">004</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {interests.map((item, index) => {
            const iconMap = {
              frisbee: "local_pizza",
              sports: "sports_basketball",
              chess: "chess",
              gaming: "sports_esports",
              boardgames: "directions_car",
              music: "music_note",
            }
            return (
              <div key={index} className="border border-outline-variant p-unit-4 hover:border-primary transition-all group flex items-center gap-4 bg-surface-container-lowest">
                <span className="material-symbols-outlined text-3xl text-primary/60 group-hover:text-primary transition-colors">{iconMap[item.icon] || "interests"}</span>
                <h4 className="font-headline-md text-[16px] leading-tight group-hover:text-primary transition-colors">{item.name}</h4>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
