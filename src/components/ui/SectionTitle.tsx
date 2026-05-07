interface SectionTitleProps {
  number: string
  title: string
}

export default function SectionTitle({ number, title }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-violet-600/60 font-mono text-sm">{number}.</span>
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      <div className="flex-1 h-px bg-violet-900/40 max-w-xs ml-4" />
    </div>
  )
}
