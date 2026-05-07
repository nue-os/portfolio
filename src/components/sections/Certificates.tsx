import SectionTitle from '../ui/SectionTitle'
import { useTilt } from '../../hooks/useTilt'
import { useScrollFadeIn } from '../../hooks/useScrollFadeIn'
import { certificates } from '../../data/certificates'


import type { Certificate } from '../../types/certificate'

interface CertCardProps {
  cert: Certificate
}

function CertCard({ cert }: CertCardProps) {
  const tilt = useTilt(10)
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      onMouseEnter={tilt.onMouseEnter}
      style={{ willChange: 'transform' }}
      className="bg-[#111118] border border-violet-900/30 rounded-2xl p-6 text-center hover:border-violet-600/50 hover:shadow-[0_8px_30px_rgba(124,58,237,0.12)] transition-[border-color,box-shadow] duration-300 group"
    >
      <div className="text-4xl mb-4 group-hover:animate-float inline-block">{cert.icon}</div>
      <h3 className="text-white font-semibold text-base mb-1">{cert.name}</h3>
      <p className="text-slate-500 text-sm mb-2">{cert.issuer}</p>
      <span className="text-violet-400 text-xs font-mono bg-violet-900/20 px-3 py-1 rounded-full">
        {cert.date}
      </span>
    </div>
  )
}

export default function Certificates() {
  const fadeRef = useScrollFadeIn()
  return (
    <section id="certificates" className="py-32 px-6 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle number="04" title="Certificates" />

        <div ref={fadeRef} className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificates.map((cert, i) => (
            <CertCard key={i} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  )
}
