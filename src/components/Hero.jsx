import { personalInfo, summary } from "../data/portfolioData"

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter mb-unit-16 items-center">
      <div className="md:col-span-8">
        <div className="flex items-center gap-2 mb-unit-4">
          <div className="w-2 h-2 bg-primary"></div>
        </div>
        <h1 className="font-headline-xl text-headline-xl text-primary leading-none mb-unit-6 pl-4">
          Ali Baris Demirci - Data Analyst
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant w-full text-justify border-l-2 border-outline-variant pl-unit-6 py-unit-2">
          {summary}
        </p>
      </div>
      <div className="flex md:col-span-4 justify-center">
        <div className="relative group max-w-[300px]">
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-primary"></div>
          <div className="p-2 border border-outline-variant bg-white">
            <img alt={personalInfo.name} className="w-full grayscale hover:grayscale-0 transition-all duration-500 block" src={personalInfo.profilePhoto} />
          </div>
        </div>
      </div>
    </section>
  )
}
