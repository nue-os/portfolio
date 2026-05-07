import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    title: '프로젝트 이름 1',
    description: '프로젝트에 대한 간단한 설명입니다. 어떤 문제를 해결했는지 요약해주세요.',
    longDescription:
      '이 프로젝트는 ... 문제를 해결하기 위해 시작했습니다. 사용자가 ... 할 수 있도록 ... 기능을 구현했습니다. 팀원 3명과 함께 약 3개월간 진행했으며, 프론트엔드 전반을 담당했습니다.',
    period: '2024.03 — 2024.06',
    role: '프론트엔드 개발 / 팀장',
    features: [
      '사용자 인증 및 JWT 기반 로그인 구현',
      '실시간 데이터 업데이트 (WebSocket 적용)',
      '반응형 UI 설계 및 크로스브라우저 대응',
      '성능 최적화 — Lighthouse 점수 90점 이상 달성',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  {
    title: '프로젝트 이름 2',
    description: '두 번째 프로젝트 설명입니다. 팀 프로젝트인 경우 본인의 역할을 강조하세요.',
    longDescription:
      '두 번째 프로젝트의 상세 설명입니다. 어떤 서비스인지, 어떤 기술적 도전이 있었는지, 어떻게 해결했는지 자유롭게 작성해주세요.',
    period: '2023.09 — 2023.12',
    role: '프론트엔드 개발',
    features: [
      'Firebase를 이용한 실시간 데이터베이스 연동',
      '컴포넌트 재사용성을 고려한 설계',
      '모바일 퍼스트 반응형 레이아웃 구현',
    ],
    tech: ['JavaScript', 'HTML/CSS', 'Firebase'],
    github: 'https://github.com',
    demo: null,
    featured: true,
  },
  {
    title: '프로젝트 이름 3',
    description: '세 번째 프로젝트 설명입니다.',
    longDescription: '세 번째 프로젝트의 상세 설명을 여기에 작성해주세요.',
    period: '2023.06 — 2023.08',
    role: '풀스택 개발',
    features: [
      'Redux를 이용한 전역 상태 관리',
      'REST API 연동 및 에러 핸들링',
    ],
    tech: ['React', 'Redux', 'API'],
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
  },
  {
    title: '프로젝트 이름 4',
    description: '네 번째 프로젝트 설명입니다.',
    longDescription: '네 번째 프로젝트의 상세 설명을 여기에 작성해주세요.',
    period: '2023.01 — 2023.03',
    role: '프론트엔드 개발',
    features: [
      'Vue.js Composition API 활용',
      'SCSS로 커스텀 디자인 시스템 구축',
    ],
    tech: ['Vue.js', 'SCSS'],
    github: 'https://github.com',
    demo: null,
    featured: false,
  },
]
