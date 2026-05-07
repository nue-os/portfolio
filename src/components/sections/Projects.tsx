import { useState } from 'react'
import SectionTitle from '../ui/SectionTitle'
import { useScrollFadeIn } from '../../hooks/useScrollFadeIn'
import ProjectModal from '../ui/ProjectModal'
import { GithubIcon, ExternalIcon, ChevronRightIcon } from '../icons/Icons'
import { projects } from '../../data/projects'
import type { Project } from '../../types/project'


interface FeaturedCardProps {
  project: Project
  onClick: () => void
}

function FeaturedCard({ project, onClick }: FeaturedCardProps) {
  return (
    <div
      className="relative bg-[#111118] border border-violet-900/30 rounded-2xl p-8 hover:border-violet-600/50 hover:shadow-[0_8px_40px_rgba(124,58,237,0.15)] transition-[border-color,box-shadow] duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
        <div>
          <p className="text-violet-500 text-xs tracking-widest uppercase mb-1">Featured Project</p>
          <h3 className="text-white text-2xl font-bold">{project.title}</h3>
        </div>
        <div className="flex items-center gap-3 text-slate-400">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <GithubIcon />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>
      <p className="text-slate-400 leading-relaxed mb-6">{project.description}</p>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs text-violet-300 font-mono bg-violet-900/20 border border-violet-800/40 px-3 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>
        <span className="text-xs text-slate-500 flex items-center gap-1.5 shrink-0">
          자세히 보기
          <ChevronRightIcon />
        </span>
      </div>
    </div>
  )
}

interface SmallCardProps {
  project: Project
  onClick: () => void
}

function SmallCard({ project, onClick }: SmallCardProps) {
  return (
    <div
      className="bg-[#111118] border border-violet-900/30 rounded-xl p-6 hover:border-violet-600/50 transition-[border-color,box-shadow] duration-300 hover:shadow-[0_4px_24px_rgba(124,58,237,0.12)] flex flex-col cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <svg className="w-8 h-8 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
        <div className="flex gap-3 text-slate-500">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <GithubIcon />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>
      <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="text-xs text-violet-400 font-mono">{t}</span>
          ))}
        </div>
        <span className="text-xs text-slate-600 flex items-center gap-1 shrink-0">
          더 보기
          <ChevronRightIcon className="w-3 h-3" />
        </span>
      </div>
    </div>
  )
}

export default function Projects() {
  const fadeRef = useScrollFadeIn()
  const [selected, setSelected] = useState<Project | null>(null)
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle number="02" title="Projects" />

        <div ref={fadeRef} className="mt-16 space-y-8">
          {featured.map((project, i) => (
            <FeaturedCard key={i} project={project} onClick={() => setSelected(project)} />
          ))}
        </div>

        {others.length > 0 && (
          <>
            <h3 className="text-slate-400 text-center mt-20 mb-8 text-sm tracking-widest uppercase">Other Projects</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {others.map((project, i) => (
                <SmallCard key={i} project={project} onClick={() => setSelected(project)} />
              ))}
            </div>
          </>
        )}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
