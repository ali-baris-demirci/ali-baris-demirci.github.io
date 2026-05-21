import { personalInfo } from "../data/portfolioData"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

export default function Contact() {
  return (
    <section className="mb-unit-16 max-w-[1440px] mx-auto px-grid-margin" id="006_social">
      <div className="flex items-baseline gap-unit-4 mb-unit-8 border-b border-outline-variant pb-unit-2">
        <h2 className="font-label-mono text-label-mono text-on-surface-variant uppercase">CONTACT</h2>
        <span className="font-label-mono text-label-mono text-outline ml-auto">006</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter mb-unit-4">
        <a className="border border-outline-variant p-unit-6 bg-white hover:border-primary transition-all group flex flex-col justify-between h-40" href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
          <div>
            <span className="font-label-mono text-[10px] text-outline block mb-1">PROFESSIONAL HUB</span>
            <h3 className="font-headline-md text-headline-md">LinkedIn</h3>
          </div>
          <div className="flex justify-between items-end">
            <FaLinkedin className="text-primary text-3xl" />
            <span className="material-symbols-outlined text-outline group-hover:text-primary transition-transform group-hover:translate-x-1">arrow_forward</span>
          </div>
        </a>
        <a className="border border-outline-variant p-unit-6 bg-white hover:border-primary transition-all group flex flex-col justify-between h-40" href={personalInfo.github} target="_blank" rel="noopener noreferrer">
          <div>
            <span className="font-label-mono text-[10px] text-outline block mb-1">SOURCE CONTROL</span>
            <h3 className="font-headline-md text-headline-md">GitHub</h3>
          </div>
          <div className="flex justify-between items-end">
            <FaGithub className="text-primary text-3xl" />
            <span className="material-symbols-outlined text-outline group-hover:text-primary transition-transform group-hover:translate-x-1">arrow_forward</span>
          </div>
        </a>
        <a className="border border-outline-variant p-unit-6 bg-white hover:border-primary transition-all group flex flex-col justify-between h-40" href={`mailto:${personalInfo.email}`}>
          <div>
            <span className="font-label-mono text-[10px] text-outline block mb-1">DIRECT COMMUNICATION</span>
            <h3 className="font-headline-md text-headline-md">Email</h3>
          </div>
          <div className="flex justify-between items-end">
            <FaEnvelope className="text-primary text-3xl" />
            <span className="material-symbols-outlined text-outline group-hover:text-primary transition-transform group-hover:translate-x-1">arrow_forward</span>
          </div>
        </a>
      </div>
      <div className="mt-unit-8 flex items-center justify-center border border-outline-variant border-dashed p-unit-4 bg-surface-container-low">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "#4caf50" }}></span>
            <span className="relative inline-flex rounded-full h-3 w-3 animate-pulse" style={{ backgroundColor: "#4caf50" }}></span>
          </span>
          <span className="font-label-mono text-label-mono text-primary">Status: Active / Open for Collaboration</span>
        </div>
      </div>
    </section>
  )
}
