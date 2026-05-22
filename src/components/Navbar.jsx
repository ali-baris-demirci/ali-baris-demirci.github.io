import { personalInfo } from "../data/portfolioData"
import Hourglass from "./Hourglass"

export default function Navbar() {
  return (
    <nav className="w-full top-0 sticky bg-surface border-b border-outline-variant z-50">
      <div className="flex justify-between items-center h-16 px-grid-margin max-w-[1440px] mx-auto">
        <a href="#top" className="font-label-mono text-label-mono font-bold tracking-tighter text-primary flex items-center">
          <Hourglass />
        </a>
        <div className="flex items-center gap-unit-6">
          <a href="#001_skills" className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md">Skills</a>
          <a href="#002_experiences" className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md">Experiences</a>
          <a href="#003_education" className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md">Education</a>
          <a href="#005_projects" className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md">Projects</a>
          <a href="#006_social" className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md">Contact</a>
        </div>
        <div className="flex items-center">
          <a href={personalInfo.resumeFile} target="_blank" rel="noopener noreferrer" className="font-label-mono text-label-mono border border-outline px-unit-4 py-unit-2 hover:bg-surface-container-low transition-all active:scale-95 uppercase inline-flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">download</span>
            RESUME
          </a>
        </div>
      </div>
    </nav>
  )
}
