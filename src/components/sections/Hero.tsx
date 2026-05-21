import HeroScene from "../ui/HeroScene";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 3D 배경 씬 */}
      <HeroScene />

      {/* 텍스트 가독성을 위한 그라디언트 오버레이 */}
      <div className="absolute inset-0 z-1 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0a0a0f_100%)]" />

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-violet-400 text-sm tracking-[0.3em] uppercase mb-6 animate-fadeInUp">
          Turning ideas into interfaces
        </p>

        <h1
          className="text-6xl md:text-8xl font-bold text-white mb-4 animate-glow"
          style={{ animationDelay: "0.2s" }}
        >
          Kim Soeun
        </h1>

        <h2
          className="text-2xl md:text-3xl font-light text-slate-400 mb-8 animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="text-violet-400">Frontend</span> Developer
        </h2>

        <p
          className="text-slate-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto animate-fadeInUp"
          style={{ animationDelay: "0.6s" }}
        >
          작은 디테일이 사용자 경험을 바꾼다고 믿습니다.
          <br />그 고민을 즐기는 프론트엔드 개발자입니다.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:-translate-y-0.5"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-violet-600/50 hover:border-violet-400 text-violet-400 rounded-full font-medium transition-all duration-300 hover:bg-violet-600/10 hover:-translate-y-0.5"
          >
            연락하기
          </a>
        </div>
      </div>

      {/* 스크롤 유도 표시 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="flex flex-col items-center gap-2 text-slate-600">
          <span className="text-xs tracking-widest">SCROLL</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
