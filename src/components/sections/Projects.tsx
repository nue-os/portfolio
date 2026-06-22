import { useState } from 'react'
import SectionTitle from '../ui/SectionTitle'
import { useScrollFadeIn } from '../../hooks/useScrollFadeIn'
import ProjectModal from '../ui/ProjectModal'
import { GithubIcon, ExternalIcon, ChevronRightIcon } from '../icons/Icons'
import { projects } from '../../data/projects'
import type { Project } from '../../types/project'

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      className="bg-[#111118] border border-violet-900/30 rounded-2xl overflow-hidden hover:border-violet-600/50 transition-[border-color,box-shadow] duration-300 hover:shadow-[0_8px_30px_rgba(124,58,237,0.12)] flex flex-col cursor-pointer"
      onClick={onClick}
    >
      {/* 대표 이미지 */}
      <div className="relative h-48 bg-linear-to-br from-violet-900/40 via-[#1a1a2e] to-[#0a0a0f] flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.title} className={`w-full h-full object-cover ${project.imagePosition === 'top' ? 'object-top' : project.imagePosition === 'bottom' ? 'object-bottom' : 'object-center'}`} />
        ) : (
          <svg className="w-12 h-12 text-violet-800/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.04)_1px,transparent_1px)] bg-size-[32px_32px]" />
        <div className="absolute top-3 right-3 flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-slate-400 hover:text-violet-400 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-slate-400 hover:text-violet-400 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* 카드 본문 */}
      <div className="p-6 flex flex-col flex-1">
        <span className="text-xs text-violet-500 font-mono mb-2">{project.period}</span>
        <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>

        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 3).map((t) => (
              <span key={t} className="text-xs text-violet-300 font-mono bg-violet-900/20 border border-violet-800/40 px-2.5 py-1 rounded-full">
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-xs text-slate-500 bg-slate-800/50 border border-slate-700/40 px-2.5 py-1 rounded-full">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
          <span className="text-xs text-slate-600 flex items-center gap-1 shrink-0">
            자세히 보기
            <ChevronRightIcon className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const fadeRef = useScrollFadeIn()
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle number="02" title="Projects" />

        <div ref={fadeRef} className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} onClick={() => setSelected(project)} />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
