import SectionTitle from '../ui/SectionTitle'
import { useScrollFadeIn } from '../../hooks/useScrollFadeIn'
import { experiences } from '../../data/experiences'


export default function Experience() {
  const fadeRef = useScrollFadeIn()
  return (
    <section id="experience" className="py-32 px-6 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle number="03" title="Experience" />

        <div ref={fadeRef} className="mt-16 relative">
          {/* 타임라인 세로선 */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-violet-900/40 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative md:flex gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* 타임라인 점 */}
                <div className="hidden md:block absolute left-1/2 top-6 w-3 h-3 bg-violet-500 rounded-full -translate-x-1/2 shadow-[0_0_12px_rgba(124,58,237,0.8)]" />

                <div className="md:w-1/2" />

                <div
                  className={`md:w-1/2 bg-[#111118] border border-violet-900/30 rounded-2xl p-6 hover:border-violet-600/50 transition-all duration-300 hover:-translate-y-1 ${
                    i % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'
                  }`}
                >
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                      <p className="text-violet-400 text-sm">{exp.company}</p>
                    </div>
                    <span className="text-slate-500 text-xs font-mono bg-[#0a0a0f] px-3 py-1 rounded-full border border-violet-900/30">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {exp.description.map((d, j) => (
                      <li key={j} className="text-slate-400 text-sm flex items-start gap-2">
                        <span className="text-violet-500 mt-1">▸</span>
                        {d}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-violet-300 bg-violet-900/20 border border-violet-800/40 px-2.5 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
