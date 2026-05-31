import { useState } from "react"
import { projects } from "../data/portfolioData"

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)

  const allProjects = [
    ...projects.professional.map((p) => ({ ...p, type: "PROFESSIONAL" })),
    ...projects.academic.map((p) => ({ ...p, type: "ACADEMIC" })),
  ]

  const toggleProject = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  return (
    <section className="mb-unit-20" id="005_projects">
      <div className="flex items-baseline gap-unit-4 mb-unit-12 border-b-2 border-primary/10 pb-unit-4">
        <h2 className="font-label-mono text-label-mono text-primary font-black uppercase tracking-widest">Projects</h2>
        <span className="font-label-mono text-label-mono text-secondary font-black ml-auto">005</span>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {allProjects.map((project, index) => (
          <div key={index} className={`project-row group border border-outline-variant rounded-3xl bg-white hover:bg-surface-container-low transition-all duration-300 cursor-pointer shadow-sm ${activeIndex === index ? "active" : ""}`} onClick={() => toggleProject(index)}>
            <div className="grid grid-cols-12 items-center p-unit-6">
              <div className="col-span-1 font-label-mono text-[12px] text-secondary font-black">{String(index + 1).padStart(3, "0")}</div>
              <div className="col-span-6 md:col-span-7">
                <h5 className="font-headline-md text-body-lg text-primary font-black group-hover:pl-4 transition-all">{project.name}</h5>
              </div>
              <div className="col-span-4 md:col-span-3 font-label-mono text-[11px] text-on-surface-variant group-hover:text-primary transition-colors font-bold uppercase tracking-tight">{project.type}</div>
              <div className="col-span-1 text-right">
                <span className="material-symbols-outlined text-outline group-hover:text-secondary expand-arrow text-2xl">arrow_forward_ios</span>
              </div>
            </div>
            <div className="project-content bg-surface-container-lowest rounded-b-3xl">
              <div className="p-unit-8 border-t border-outline-variant/30 grid grid-cols-1 md:grid-cols-12 gap-unit-8">
                <div className="md:col-span-8">
                  <p className="font-body-sm text-on-surface-variant mb-unit-6 leading-relaxed">{project.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-unit-6 font-label-mono text-[12px]">
                    {project.tech && project.tech.length > 0 && (
                      <div className="bg-surface-container-low p-4 rounded-2xl border-l-4 border-primary">
                        <span className="text-outline uppercase font-bold text-[10px]">Tools:</span>
                        <div className="text-primary font-black mt-1">{project.tech.join(", ")}</div>
                      </div>
                    )}
                    {project.link && (
                      <div className="bg-surface-container-low p-4 rounded-2xl border-l-4 border-secondary">
                        <br />
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-secondary font-black hover:underline" onClick={(e) => e.stopPropagation()}>View Project &rarr;</a>
                      </div>
                    )}
                  </div>
                </div>
                <div className="md:col-span-4 bg-primary/5 border border-primary/10 rounded-2xl overflow-hidden">
                  {project.image ? (
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover aspect-video" />
                  ) : (
                    <div className="w-full aspect-video blueprint-dot opacity-40 flex items-center justify-center p-4">
                      <span className="material-symbols-outlined text-primary text-5xl">description</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
