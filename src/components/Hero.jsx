import { personalInfo, summary } from "../data/portfolioData"

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter mb-unit-20 items-center">
      <div className="md:col-span-8">
        <div className="flex items-center gap-2 mb-unit-4">
          <div className="w-2 h-2 bg-primary"></div>
        </div>
        <h1 className="font-headline-xl text-headline-xl text-primary leading-none mb-unit-2 pl-4">
          Ali Baris Demirci - Data Analyst
        </h1>
        <div className="flex items-center gap-unit-4 pl-4 mb-unit-6">
          <span className="inline-flex items-center gap-1.5 font-label-mono text-[12px] text-on-surface-variant">
            <span className="material-symbols-outlined text-[14px] text-primary">location_on</span>
            {personalInfo.location}
          </span>
        </div>
        <p className="font-body-lg text-body-lg text-on-surface-variant w-full text-justify border-l-2 border-outline-variant pl-unit-6 py-unit-2">
          {summary}
        </p>
      </div>
      <div className="flex md:col-span-4 justify-center">
        <div className="relative group max-w-[300px]">
          <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-primary/60 group-hover:border-primary transition-colors"></div>
          <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-primary/60 group-hover:border-primary transition-colors"></div>
          <div className="p-1.5 blueprint-image bg-surface-container-lowest">
            <img alt={personalInfo.name} className="w-full block rounded-lg" src={personalInfo.profilePhoto} />
          </div>
        </div>
      </div>
    </section>
  )
}
