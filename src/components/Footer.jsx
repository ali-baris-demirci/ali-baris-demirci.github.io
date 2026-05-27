import { personalInfo } from "../data/portfolioData"
import Hourglass from "./Hourglass"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-primary text-white rounded-t-[3rem] mt-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center py-unit-12 px-grid-margin border-b border-white/10 gap-8">
          <div className="font-label-mono text-label-mono font-black tracking-tighter">
            <Hourglass />
          </div>
          <div className="flex gap-unit-6">
            <a className="text-white/70 hover:text-white transition-colors font-body-md text-body-md font-medium" href="#top">Home</a>
            <a className="text-white/70 hover:text-white transition-colors font-body-md text-body-md font-medium" href="#001_skills">Skills</a>
            <a className="text-white/70 hover:text-white transition-colors font-body-md text-body-md font-medium" href="#002_experiences">Experiences</a>
            <a className="text-white/70 hover:text-white transition-colors font-body-md text-body-md font-medium" href="#003_education">Education</a>
            <a className="text-white/70 hover:text-white transition-colors font-body-md text-body-md font-medium" href="#005_projects">Projects</a>
            <a className="text-white/70 hover:text-white transition-colors font-body-md text-body-md font-medium" href="#006_social">Contact</a>
            <a className="text-white/70 hover:text-white transition-colors font-body-md text-body-md font-medium" href={personalInfo.resumeFile} target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center py-unit-8 px-grid-margin gap-4">
          <div className="font-label-mono text-[11px] text-white/50 flex items-center gap-3">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse shadow-[0_0_10px_#cc4400]"></span>
            {year} BILLAHARE_HC_v4.2.0 // STATUS: OPEN_TO_RELOCATION
          </div>
          <div className="flex gap-unit-6 items-center">
            <span className="text-[10px] font-label-mono text-white/40 uppercase tracking-widest font-bold">Network Latency: 8ms</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
