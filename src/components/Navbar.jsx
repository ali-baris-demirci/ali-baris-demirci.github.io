import { personalInfo } from "../data/portfolioData"
import Hourglass from "./Hourglass"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="w-full top-0 sticky bg-white/80 backdrop-blur-md border-b border-outline-variant z-50">
      <div className="flex justify-between items-center h-20 px-grid-margin max-w-[1440px] mx-auto">
        <a href="#top" className="font-label-mono text-label-mono font-bold tracking-tighter text-primary">
          <Hourglass />
        </a>
        <div className="hidden md:flex items-center gap-unit-8">
          <a href="#001_skills" className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md font-medium">Skills</a>
          <a href="#002_experiences" className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md font-medium">Experiences</a>
          <a href="#003_education" className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md font-medium">Education</a>
          <a href="#005_projects" className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md font-medium">Projects</a>
          <a href="#006_social" className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md font-medium">Contact</a>
        </div>
        <div className="flex items-center gap-unit-4 -ml-4 md:-ml-16">
          <div className="hidden sm:flex items-center gap-unit-2">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-xl transition-all" title="LinkedIn">
              <FaLinkedin className="text-lg" />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-xl transition-all" title="GitHub">
              <FaGithub className="text-lg" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="p-2.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-xl transition-all" title="Email">
              <FaEnvelope className="text-lg" />
            </a>
            <div className="w-px h-6 bg-outline-variant mx-unit-2"></div>
          </div>
          <a href={personalInfo.resumeFile} target="_blank" rel="noopener noreferrer" className="font-label-mono text-label-mono bg-secondary text-white px-unit-6 py-unit-2 rounded-full hover:shadow-lg hover:brightness-110 transition-all active:scale-95 uppercase font-bold tracking-wider inline-flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">download</span>
            RESUME
          </a>
        </div>
      </div>
    </nav>
  )
}
