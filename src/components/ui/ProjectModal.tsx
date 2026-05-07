import { useEffect } from "react";
import type { Project } from "../../types/project";
import { GithubIcon, ExternalIcon } from "../icons/Icons";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ animation: "fadeIn 0.2s ease" }}
    >
      {/* 배경 오버레이 */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* 모달 패널 */}
      <div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#111118] border border-violet-800/40 rounded-3xl shadow-[0_24px_80px_rgba(124,58,237,0.2)]"
        style={{ animation: "slideUp 0.25s ease" }}
      >
        {/* 이미지 / 헤더 영역 */}
        <div className="relative h-48 bg-linear-to-br from-violet-900/60 via-[#1a1a2e] to-[#0a0a0f] rounded-t-3xl overflow-hidden flex items-center justify-center">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover opacity-60 ${project.imagePosition === 'top' ? 'object-top' : project.imagePosition === 'bottom' ? 'object-bottom' : 'object-center'}`}
            />
          ) : (
            <div className="flex flex-col items-center gap-3 text-violet-700/60">
              <svg
                className="w-16 h-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-xs tracking-widest uppercase">Preview</span>
            </div>
          )}
          {/* 그리드 오버레이 */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.05)_1px,transparent_1px)] bg-size-[40px_40px]" />

          {/* 닫기 버튼 */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-slate-400 hover:text-white hover:bg-black/60 transition-colors"
            aria-label="닫기"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* 본문 */}
        <div className="p-8">
          {/* 제목 + 메타 정보 */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h2 className="text-white text-2xl font-bold mb-2">
                {project.title}
              </h2>
              <dl className="mt-2 space-y-1.5">
                <div className="flex items-center gap-3">
                  <dt className="text-xs text-slate-500 w-16 shrink-0">기간</dt>
                  <dd className="text-xs text-slate-300 font-mono">
                    {project.period}
                  </dd>
                </div>
                <div className="flex items-center gap-3">
                  <dt className="text-xs text-slate-500 w-16 shrink-0">역할</dt>
                  <dd className="text-xs text-slate-300">{project.role}</dd>
                </div>
                {project.team && (
                  <div className="flex items-center gap-3">
                    <dt className="text-xs text-slate-500 w-16 shrink-0">
                      팀 구성
                    </dt>
                    <dd className="text-xs text-slate-300">{project.team}</dd>
                  </div>
                )}
              </dl>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-violet-300 font-mono bg-violet-900/20 border border-violet-800/40 px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* 액션 버튼 */}
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg text-sm transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-sm transition-colors"
                >
                  <ExternalIcon className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          <hr className="border-violet-900/30 mb-6" />

          {/* 설명 */}
          <div className="mb-10">
            <h3 className="text-violet-400 font-semibold tracking-widest uppercase mb-3">
              Overview
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* 주요 기능 */}
          {project.features.length > 0 && (
            <div className="mb-10 space-y-5">
              <h3 className="text-violet-400 font-semibold tracking-widest uppercase">
                주요 기능
              </h3>
              {project.features.map((group, i) => (
                <div key={i}>
                  <p className="text-slate-200 text-sm font-semibold mb-2">
                    {group.title}
                  </p>
                  <ul className="space-y-1.5">
                    {group.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-slate-400 text-sm"
                      >
                        <span className="text-violet-500 mt-0.5 shrink-0">
                          ▸
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* 트러블슈팅 */}
          {project.troubleshooting && project.troubleshooting.length > 0 && (
            <div className="mb-6 space-y-5">
              <h3 className="text-violet-400 font-semibold tracking-widest uppercase">
                트러블슈팅
              </h3>
              {project.troubleshooting.map((group, i) => (
                <div key={i}>
                  <p className="text-slate-200 text-sm font-semibold mb-2">
                    {group.title}
                  </p>
                  <ul className="space-y-1.5">
                    {group.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-slate-400 text-sm"
                      >
                        <span className="text-violet-500 mt-0.5 shrink-0">
                          ▸
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* 배운점 */}
          {project.learned && (
            <div className="mb-6">
              <h3 className="text-violet-400 font-semibold tracking-widest uppercase mb-3">
                배운점
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                {project.learned}
              </p>
            </div>
          )}

          {/* 스크린샷 */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div>
              <h3 className="text-violet-400 font-semibold tracking-widest uppercase mb-3">
                Screenshots
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {project.screenshots.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${project.title} 스크린샷 ${i + 1}`}
                    className="w-full rounded-xl border border-violet-900/30 object-cover"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
