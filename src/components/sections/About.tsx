import SectionTitle from "../ui/SectionTitle";
import { useScrollFadeIn } from "../../hooks/useScrollFadeIn";

const skills = [
  {
    category: "Language",
    items: ["JavaScript", "TypeScript", "Java", "Python"],
  },
  { category: "Frontend", items: ["React.js", "Next.js", "HTML5", "CSS3"] },
  { category: "Styling", items: ["Styled-component", "SCSS", "TailwindCSS"] },
  {
    category: "State Management",
    items: ["Recoil", "Zustand", "Tanstack Query"],
  },
  { category: "Backend", items: ["SpringBoot", "MySQL"] },
  { category: "Tools", items: ["Git & Github", "Figma", "VSCode"] },
];

export default function About() {
  const fadeRef = useScrollFadeIn();
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle number="01" title="About Me" />

        <div ref={fadeRef} className="mt-16 space-y-12">
          {/* 자기소개 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-slate-300 text-lg leading-relaxed">
                안녕하세요! 저는{" "}
                <span className="text-violet-400 font-medium">김소은</span>
                입니다. 디지털 우주를 탐험하며 사용자에게 새로운 경험을 선사하는
                프론트엔드 개발자입니다.
              </p>
              <p className="text-slate-400 leading-relaxed">
                새로운 기술은 저에게 미지의 행성과 같습니다. 두려움보다
                호기심으로 접근하고, 코드의 품질과 성능을 별자리처럼 촘촘히
                연결하는 것을 중요하게 생각합니다.
              </p>
              <p className="text-slate-400 leading-relaxed">
                팀과 함께 항해하는 것을 즐기며, UI/UX 디자인을 통해 사용자가
                길을 잃지 않는 인터페이스를 설계하는 것이 저의 목표입니다.
              </p>

              <div className="pt-4">
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 text-violet-400 border border-violet-600/40 rounded-lg px-5 py-2.5 hover:bg-violet-600/10 transition-all duration-200 text-sm"
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
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  이력서 다운로드
                </a>
              </div>
            </div>

            {/* 프로필 사진 */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-72 md:h-72">
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-violet-600/30 to-violet-900/10 border border-violet-600/30" />
                <img
                  src="/images/profile.png"
                  alt="김소은 프로필 사진"
                  className="relative w-full h-full object-cover object-top rounded-2xl"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling?.removeAttribute(
                      "hidden",
                    );
                  }}
                />
                <div
                  hidden
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-violet-700/50 rounded-2xl"
                >
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="text-xs tracking-widest">PHOTO</span>
                </div>
                {/* 배경 글로우 */}
                <div className="absolute -inset-4 rounded-3xl bg-violet-600/10 blur-2xl -z-10" />
              </div>
            </div>
          </div>

          {/* 기술 스택 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((group) => (
              <div
                key={group.category}
                className="bg-[#111118] border border-violet-900/30 rounded-xl p-5 hover:border-violet-600/50 transition-colors duration-300"
              >
                <h3 className="text-violet-400 text-xs font-semibold tracking-wider uppercase mb-3">
                  {group.category}
                </h3>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-slate-300 text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-violet-500 rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
