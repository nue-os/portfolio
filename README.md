# Kim Soeun — Portfolio

프론트엔드 개발자 김소은의 포트폴리오 사이트입니다.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — 빌드 도구
- **Tailwind CSS v4** — 스타일링
- **React Three Fiber / drei** — 3D Hero 씬 (Three.js)

## 주요 기능 및 구현

**3D Hero 씬**

- `@react-three/fiber` Canvas 위에 `drei`의 `Stars`(배경 별)와 커스텀 `FloatingOrb`(회전 와이어프레임 정이십면체), `FloatingParticles`(부유 파티클)를 렌더링
- `useFrame`으로 매 프레임 rotation · position 업데이트, `MeshDistortMaterial`로 표면 distort 효과 적용

**스크롤 fade-in**

- `useScrollFadeIn` 커스텀 훅에서 `IntersectionObserver`로 뷰포트 진입을 감지, opacity · translateY를 CSS transition으로 전환

**3D tilt 카드**

- `useTilt` 커스텀 훅에서 `onMouseMove` 이벤트의 커서 좌표를 카드 중심 기준 비율로 변환해 `perspective` + `rotateX/Y` transform 적용

**프로젝트 모달**

- 카드 클릭 시 `useState`로 선택된 프로젝트를 관리, `ProjectModal`에서 `useEffect`로 body 스크롤 잠금 및 ESC 키 이벤트 등록

- 반응형 레이아웃 + 모바일 햄버거 메뉴

## 폴더 구조

```
src/
├── components/
│   ├── sections/     # 페이지 섹션 컴포넌트
│   ├── ui/           # 재사용 UI (SectionTitle, ProjectModal, HeroScene)
│   ├── icons/        # SVG 아이콘
│   └── Navbar.tsx
├── data/             # 정적 데이터 (프로젝트, 경력, 자격증)
├── hooks/            # 커스텀 훅 (useTilt, useScrollFadeIn)
└── types/            # TypeScript 인터페이스
```

## 시작하기

```bash
npm install
npm run dev
```
