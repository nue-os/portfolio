import type { Experience } from '../types/experience'

export const experiences: Experience[] = [
  {
    company: '회사명',
    role: '프론트엔드 개발자',
    period: '2024.03 — 현재',
    description: [
      'React 기반 웹 애플리케이션 개발 및 유지보수',
      'UI/UX 개선으로 사용자 만족도 향상',
      'RESTful API 연동 및 상태 관리 구현',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    company: '인턴 / 프리랜서',
    role: '웹 개발',
    period: '2023.06 — 2024.02',
    description: [
      '반응형 웹 페이지 개발',
      '크로스브라우저 호환성 작업',
      '팀 협업을 통한 서비스 배포',
    ],
    tech: ['JavaScript', 'HTML/CSS', 'Git'],
  },
]
