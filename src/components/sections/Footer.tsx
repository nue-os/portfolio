export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-violet-900/20">
      <p className="text-slate-600 text-sm">
        Designed & Built by{' '}
        <span className="text-violet-500">Kim Soeun</span>
        {' · '}
        <span>{new Date().getFullYear()}</span>
      </p>
    </footer>
  )
}
