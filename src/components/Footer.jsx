import { personalInfo } from "../data/portfolioData"
import Hourglass from "./Hourglass"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-row justify-between items-center py-unit-8 px-grid-margin border-b border-outline-variant border-dashed">
          <div className="font-label-mono text-label-mono font-bold tracking-tighter text-primary flex items-center">
            <Hourglass />
          </div>
          <div className="flex gap-unit-6">
            <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#top">Home</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#001_skills">Skills</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#002_experiences">Experiences</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#003_education">Education</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#005_projects">Projects</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#006_social">Contact</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href={personalInfo.resumeFile} target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center py-unit-6 px-grid-margin">
          <div className="font-label-mono text-[10px] text-outline flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
            &copy; {year} SYSTEM_ARCH_v4.0.1 // STATUS: OPTIMAL
          </div>
          <div className="flex gap-unit-4 items-center">
            <span className="text-[10px] font-label-mono text-outline uppercase">Latency: 14ms</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
