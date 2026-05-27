import { personalInfo } from "../data/portfolioData"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

export default function Contact() {
  return (
    <section className="mb-unit-16 max-w-[1440px] mx-auto px-grid-margin" id="006_social">
      <div className="flex items-baseline gap-unit-4 mb-unit-12 border-b-2 border-primary/10 pb-unit-4">
        <h2 className="font-label-mono text-label-mono text-primary font-black uppercase tracking-widest">CONTACT</h2>
        <span className="font-label-mono text-label-mono text-secondary font-black ml-auto">006</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-unit-6 mb-unit-8">
        <a className="border border-outline-variant p-unit-6 bg-white rounded-2xl hover:border-primary hover:shadow-xl transition-all group flex items-center justify-between" href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-surface-container rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
              <FaLinkedin className="text-xl" />
            </div>
            <div>
              <span className="font-label-mono text-[9px] text-tertiary font-black uppercase tracking-widest block">PROFESSIONAL HUB</span>
              <h3 className="font-headline-md text-[16px] text-primary font-black leading-tight">LinkedIn</h3>
            </div>
          </div>
          <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-all group-hover:translate-x-1 text-lg">arrow_forward</span>
        </a>
        <a className="border border-outline-variant p-unit-6 bg-white rounded-2xl hover:border-primary hover:shadow-xl transition-all group flex items-center justify-between" href={personalInfo.github} target="_blank" rel="noopener noreferrer">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-surface-container rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
              <FaGithub className="text-xl" />
            </div>
            <div>
              <span className="font-label-mono text-[9px] text-tertiary font-black uppercase tracking-widest block">SOURCE CONTROL</span>
              <h3 className="font-headline-md text-[16px] text-primary font-black leading-tight">GitHub</h3>
            </div>
          </div>
          <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-all group-hover:translate-x-1 text-lg">arrow_forward</span>
        </a>
        <a className="border border-outline-variant p-unit-6 bg-white rounded-2xl hover:border-primary hover:shadow-xl transition-all group flex items-center justify-between" href={`mailto:${personalInfo.email}`}>
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-surface-container rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
              <FaEnvelope className="text-xl" />
            </div>
            <div>
              <span className="font-label-mono text-[9px] text-tertiary font-black uppercase tracking-widest block">DIRECT COMMS</span>
              <h3 className="font-headline-md text-[16px] text-primary font-black leading-tight">Email</h3>
            </div>
          </div>
          <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-all group-hover:translate-x-1 text-lg">arrow_forward</span>
        </a>
      </div>
    </section>
  )
}
