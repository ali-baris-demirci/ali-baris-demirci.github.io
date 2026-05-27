import { education, interests } from "../data/portfolioData"

export default function Education() {
  return (
    <section>
      <div id="003_education">
        <div className="flex items-baseline gap-unit-4 mb-unit-12 border-b-2 border-primary/10 pb-unit-4">
          <h2 className="font-label-mono text-label-mono text-primary font-black uppercase tracking-widest">Education</h2>
          <span className="font-label-mono text-label-mono text-secondary font-black ml-auto">003</span>
        </div>
        <div className="space-y-unit-8 relative">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-unit-12 border-l-2 border-primary/20 pb-unit-12">
              <div className={`absolute top-0 -left-[9px] w-4 h-4 rounded-full border-4 border-white shadow-sm ${index === 0 ? "bg-primary" : "bg-outline"}`}></div>
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <h4 className="font-headline-md text-[22px] text-primary leading-tight font-black">{edu.degree}</h4>
                <span className={`font-label-mono text-label-mono font-bold whitespace-nowrap ${index === 0 ? "text-secondary" : "text-outline"}`}>{edu.year}</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{edu.institution}</p>
              {edu.notes && <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-1">{edu.notes}</p>}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-unit-16" id="004_beyond_work">
        <div className="flex items-baseline gap-unit-4 mb-unit-8 border-b-2 border-primary/10 pb-unit-4">
          <h2 className="font-label-mono text-label-mono text-primary font-black uppercase tracking-widest">Beyond Work</h2>
          <span className="font-label-mono text-label-mono text-secondary font-black ml-auto">004</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {interests.map((item, index) => {
            const emojiMap = {
              frisbee: "🥏",
              sports: "⚽",
              chess: "♟️",
              gaming: "🎮",
              boardgames: "🎲",
              music: "🎵",
            }
            return (
              <div key={index} className="border border-outline-variant rounded-2xl p-unit-6 hover:border-primary hover:shadow-md transition-all group flex items-center gap-4 bg-surface-container-lowest">
                <span className="text-[24px] leading-none flex-shrink-0">{emojiMap[item.icon] || "✨"}</span>
                <h4 className="font-headline-md text-[16px] text-primary font-bold group-hover:text-secondary transition-colors">{item.name}</h4>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
