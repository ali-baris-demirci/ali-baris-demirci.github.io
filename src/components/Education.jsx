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
                <span className="font-label-mono text-label-mono text-outline whitespace-nowrap ml-4">{edu.year}</span>
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
        <div className="space-y-4">
          {interests.map((item, index) => (
            <div key={index} className="relative pl-unit-8 border-l border-outline-variant pb-unit-4">
              <div className="absolute top-0 -left-[5px] w-2 h-2 bg-outline"></div>
              <h4 className="font-headline-md text-[18px] leading-tight">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
