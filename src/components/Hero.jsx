import { personalInfo, summary } from "../data/portfolioData"

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-unit-12 mb-unit-20 items-center">
      <div className="md:col-span-8">

        <h1 className="font-headline-xl text-headline-xl text-primary leading-tight mb-unit-8">
          Ali Baris Demirci <span className="text-secondary">-</span> Analytics Engineer
        </h1>
        <div className="flex items-center gap-unit-4 mb-unit-6">
          <span className="inline-flex items-center gap-1.5 font-label-mono text-[12px] text-on-surface-variant">
            <span className="material-symbols-outlined text-[14px] text-secondary">location_on</span>
            {personalInfo.location}
          </span>
        </div>
        <p className="font-body-lg text-body-lg text-on-surface-variant w-full text-justify leading-relaxed">
          {summary}
        </p>
      </div>
      <div className="flex md:col-span-4 justify-center">
        <div className="relative group max-w-[340px] w-full">
          <div className="absolute -top-6 -left-6 w-20 h-20 border-t-4 border-l-4 border-secondary/30 rounded-tl-3xl transition-all group-hover:w-24 group-hover:h-24 group-hover:border-secondary"></div>
          <div className="absolute -bottom-6 -right-6 w-20 h-20 border-b-4 border-r-4 border-secondary/30 rounded-br-3xl transition-all group-hover:w-24 group-hover:h-24 group-hover:border-secondary"></div>
          <div className="p-3 bg-white shadow-2xl rounded-3xl overflow-hidden border border-surface-variant">
            <img alt={personalInfo.name} className="w-full block rounded-2xl" src={personalInfo.profilePhoto} />
          </div>
        </div>
      </div>
    </section>
  )
}
