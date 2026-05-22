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
      <div className="flex items-baseline gap-unit-4 mb-unit-8 border-b border-outline-variant pb-unit-2">
        <h2 className="font-label-mono text-label-mono text-on-surface-variant uppercase">Projects</h2>
        <span className="font-label-mono text-label-mono text-outline ml-auto">005</span>
      </div>
      <div className="grid grid-cols-1 gap-0 border-t border-l border-outline-variant">
        {allProjects.map((project, index) => (
          <div key={index} className={`project-row group border-r border-b border-outline-variant bg-surface-container-lowest/50 hover:bg-surface-container-low transition-all duration-300 cursor-pointer ${activeIndex === index ? "active" : ""}`} onClick={() => toggleProject(index)}>
            <div className="grid grid-cols-12 items-center p-unit-4">
              <div className="col-span-1 font-label-mono text-[10px] text-outline">{String(index + 1).padStart(3, "0")}</div>
              <div className="col-span-5 md:col-span-7">
                <h5 className="font-headline-md text-body-lg group-hover:text-primary transition-colors">{project.name}</h5>
              </div>
              <div className="col-span-4 md:col-span-3 font-label-mono text-[10px] text-on-surface-variant group-hover:text-primary transition-colors">{project.type}</div>
              <div className="col-span-2 md:col-span-1 text-right">
                <span className="material-symbols-outlined text-outline group-hover:text-primary expand-arrow">arrow_forward</span>
              </div>
            </div>
            <div className="project-content bg-surface-container-lowest">
              <div className="p-unit-6 border-t border-outline-variant grid grid-cols-1 md:grid-cols-12 gap-unit-6">
                <div className="md:col-span-8">
                  <p className="font-body-sm text-on-surface-variant mb-unit-4">{project.description}</p>
                  <div className="grid grid-cols-2 gap-unit-4 font-label-mono text-[11px]">
                    {project.tech && project.tech.length > 0 && (
                      <div className="border-l-2 border-primary pl-2">
                        <span className="text-outline uppercase">Tools:</span>
                        <div className="text-primary">{project.tech.join(", ")}</div>
                      </div>
                    )}
                    {project.link && (
                      <div className="border-l-2 border-primary pl-2">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" onClick={(e) => e.stopPropagation()}>View Project &rarr;</a>
                      </div>
                    )}
                  </div>
                </div>
                <div className="md:col-span-4 bg-surface-container-low border border-outline-variant p-2">
                  <div className="w-full aspect-video blueprint-dot opacity-40 flex items-center justify-center">
                    <span className="material-symbols-outlined text-outline">description</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
