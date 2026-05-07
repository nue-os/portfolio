import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "데이터 용량 거래 플랫폼",
    description:
      "남는 무선 데이터를 개인 간 자유롭게 사고팔 수 있는 데이터 용량 거래 플랫폼",
    longDescription:
      "전화번호·계좌번호 노출 없이 안전하게 데이터를 거래할 수 있는 P2P 플랫폼입니다. 거래 시세를 그래프로 제공해 합리적인 가격 결정을 돕고, 일반 판매와 입찰 방식 모두 지원해 수요·공급에 맞는 탄력적인 거래가 가능합니다.",
    learned:
      "인증 로직을 구현하며 레이스 컨디션처럼 특정 상황에서만 재현되는 문제를 직접 마주했습니다. '왜 가끔 이런 일이 생기지?'라는 질문을 파고들다 보니 비동기 흐름과 상태 공유 방식을 더 깊이 이해하게 됐고, 코드를 짤 때 정상 케이스뿐 아니라 타이밍이 어긋나거나 탭이 여러 개인 상황까지 함께 떠올리는 습관이 생겼습니다.",
    period: "2025.06 — 2025.08",
    team: "프론트엔드 3 · 백엔드 4",
    role: "프론트엔드 개발",
    features: [
      {
        title: "인증/인가",
        items: [
          "Zustand로 인증 상태를 전역 관리, 권한에 따라 접근 페이지 분기 처리",
          "응답 코드별 에러 분기로 비로그인·권한 없음 상황마다 명확한 피드백 제공",
        ],
      },
      {
        title: "판매글 등록/수정",
        items: [
          "react-hook-form 필드별 독립 상태 관리로 불필요한 리렌더링 제거",
          "일반 판매·입찰 방식 선택에 따른 조건부 렌더링으로 유연한 폼 처리",
          "Zod 스키마로 입력값을 타입·범위·형식 단위로 검증, 서버 요청 전 클라이언트 차단",
        ],
      },
      {
        title: "관리자 기능",
        items: [
          "회원·거래·신고·제재 내역을 조회할 수 있는 관리자 전용 대시보드 구현",
          "허위 거래·불법 판매글 차단을 위한 승인/거절 워크플로우 설계",
          "Tanstack Query로 서버 데이터를 캐싱·동기화해, 처리 즉시 UI에 반영",
        ],
      },
      {
        title: "실시간 알림",
        items: [
          "SSE로 거래·입찰 이벤트를 실시간 수신, 지수 백오프로 연결 끊김 시 자동 재연결",
          "BottomSheet에 터치 드래그 제스처를 직접 구현, 외부 라이브러리 없이 모바일 UX 확보",
        ],
      },
    ],
    troubleshooting: [
      {
        title: "토큰 갱신 레이스 컨디션",
        items: [
          "동시 API 요청 시 각 요청이 독립적으로 토큰을 갱신하려 해 중복 요청 발생",
          "isRefreshing 플래그와 Promise 공유로 갱신 요청을 1회로 수렴, 이후 요청은 결과를 기다리도록 처리",
        ],
      },
      {
        title: "다중 탭 세션 충돌",
        items: [
          "refreshToken이 쿠키에 저장되어 모든 탭이 공유되지만 accessToken은 탭별 sessionStorage에 저장되어 충돌 발생",
          "sessionStorage userId와 서버 검증을 조합해 불일치 시 자동 로그아웃 처리로 해결",
        ],
      },
      {
        title: "웹 알림 중복 발생",
        items: [
          "구독 로직 리팩토링으로 동일 이벤트가 여러 번 트리거되던 문제 제거",
        ],
      },
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "Zustand",
      "Tanstack Query",
    ],
    github: "https://github.com/nue-os/front-module",
    demo: "https://www.youtube.com/watch?v=Kzm0acL3VCY&t=9s",
    featured: true,
    image: "/images/datcha/og.png",
    imagePosition: "center",
    screenshots: [
      "/images/datcha/1.png",
      "/images/datcha/2.png",
      "/images/datcha/3.png",
      "/images/datcha/4.png",
    ],
  },
  {
    title: "월동 채소 재배 면적 신고 시스템",
    description:
      "제주 월동 채소 재배 면적 온라인 신고 시스템 — 디지랩 챌린지 대상 수상",
    longDescription:
      "오프라인으로만 받던 제주 월동작물 신고를 온라인으로 전환한 플랫폼입니다. 기존 2~3일 소요되던 현장 조사를 10분 이내로 단축했습니다. 재배 면적과 출하 현황을 차트로 시각화하고, 관리자가 허위 신고를 빠르게 처리할 수 있는 승인/거절 워크플로우를 설계했습니다.",
    learned:
      "처음 써보는 기술 스택으로 제한된 시간 안에 완성도 있는 결과물을 만들어야 했습니다. 라이브러리를 기본 설정 그대로 쓰면 빠르지만, 실제 요구사항에 맞게 커스텀하지 않으면 사용자 경험이 엉성해진다는 걸 직접 겪었습니다. 폼에서 예상치 못한 데이터가 섞여 전송되는 버그를 마주하고 나서는, 구현보다 데이터 흐름 설계가 먼저라는 걸 몸으로 배웠습니다.",
    period: "2024.11 — 2024.12",
    team: "기획 1 · 디자인 1 · 프론트엔드 1 · 백엔드 1",
    role: "프론트엔드 개발",
    features: [
      {
        title: "신고 워크플로우",
        items: [
          "Zustand로 단계별 입력 상태를 전역 관리해 페이지 이동 후에도 입력 내용 유지",
        ],
      },
      {
        title: "데이터 시각화",
        items: [
          "Chart.js·Recharts로 재배 면적·출하 현황 차트 구현",
          "SSR 환경에서 차트 라이브러리의 hydration 오류를 dynamic import로 방지",
        ],
      },
      {
        title: "관리자 기능",
        items: [
          "URL 변경 없이 Zustand로 화면 전환해 관리자 UX 개선",
          "Tanstack Query로 승인/거절 처리 결과를 즉시 UI에 반영, 수동 새로고침 불필요",
          "SSE로 신고 접수 이벤트를 실시간 수신해 대시보드 자동 갱신",
        ],
      },
    ],
    troubleshooting: [
      {
        title: "폼 데이터 오전송",
        items: [
          "여러 폼 중 선택한 폼 외 데이터가 함께 전송되는 버그 발생",
          "react-hook-form useController로 폼별 상태를 독립 관리해 해결",
        ],
      },
      {
        title: "차트 레이블 겹침",
        items: [
          "데이터가 많아질수록 레이블이 겹쳐 내용을 알아보기 어려운 문제 발생",
          "커스텀 마진·축약 텍스트 적용으로 가독성 개선",
        ],
      },
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "SCSS",
      "Zustand",
      "react-hook-form",
      "Chart.js",
      "Recharts",
    ],
    github: "https://github.com/nue-os/farmInfo-fe",
    demo: null,
    featured: true,
    image: "/images/farminfo/og.png",
    imagePosition: "top",
    screenshots: [
      "/images/farminfo/1.png",
      "/images/farminfo/2.png",
      "/images/farminfo/3.png",
      "/images/farminfo/4.png",
    ],
  },
  {
    title: "공유 오피스 예약 서비스",
    description:
      "공간 예약·일정·커뮤니티를 통합 제공하는 거점 공유 오피스 서비스",
    longDescription:
      "유연한 근무 형태를 지향하는 직장인을 위한 공유 오피스 플랫폼입니다. 모바일 앱을 통해 공간 예약, 일정 관리, 커뮤니티 기능을 한 곳에서 제공합니다.",
    learned:
      "외부 라이브러리 없이 타임 셀렉터를 직접 구현하면서, 평소에 당연하게 여겼던 기능 하나에도 처리해야 할 케이스가 생각보다 많다는 걸 실감했습니다. 한 자리 숫자 입력, 범위 초과, 빠른 연속 입력 등 직접 구현하지 않으면 눈에 잘 안 띄는 문제들이었습니다. 라이브러리가 대신 처리해주던 것들이 무엇인지 이해하게 된 계기였습니다.",
    period: "2024.04 — 2024.06",
    team: "PM 2 · 디자인 4 · 프론트엔드 3 · 백엔드 2",
    role: "프론트엔드 개발",
    features: [
      {
        title: "로그인",
        items: [
          "NextAuth로 서버 사이드 JWT 인증 처리, 세션을 암호화해 쿠키에 저장",
          "미들웨어에서 인증 여부를 검사하고 callbackUrl을 보존해 로그인 후 원래 페이지로 복귀",
          "react-hook-form으로 실시간 유효성 검사 제공",
        ],
      },
      {
        title: "커스텀 타임 셀렉터",
        items: [
          "외부 라이브러리 없이 시간 입력 컴포넌트를 직접 구현, 의존성 추가 없이 엣지 케이스 처리",
          "@use-gesture/react로 공간 목록에 드래그 스크롤을 구현해 터치·마우스 환경 모두 지원",
        ],
      },
      {
        title: "커뮤니티 기능",
        items: [
          "Tanstack Query로 서버 상태와 클라이언트 상태를 분리 관리",
          "게시물·댓글 작성·수정·삭제 후 목록 즉시 반영",
        ],
      },
    ],
    troubleshooting: [
      {
        title: "시간 입력 형식 오류",
        items: [
          "한 자리 숫자 입력 시 두 자리 형식으로 변환되지 않아 잘못된 값이 전달되는 문제 발생",
          "useEffect로 입력값 변경 시마다 상태를 업데이트하고, 정규 표현식으로 유효하지 않은 값을 즉시 차단",
        ],
      },
    ],
    tech: [
      "Next.js 14",
      "TypeScript",
      "TailwindCSS",
      "Tanstack Query",
      "NextAuth",
      "Zustand",
    ],
    github: "https://github.com/nue-os/fe_sharedoffice",
    demo: null,
    featured: false,
    image: "/images/mile/og.png",
    imagePosition: "top",
    screenshots: [
      "/images/mile/1.png",
      "/images/mile/2.png",
      "/images/mile/3.png",
    ],
  },
  {
    title: "가상 안경 피팅 서비스",
    description:
      "얼굴형 분석 기반 안경 추천 및 웹캠 가상 피팅 서비스 — 캡스톤 디자인",
    longDescription:
      "사용자의 얼굴형을 분석해 어울리는 안경테를 추천하고, 웹캠으로 실시간 가상 착용이 가능한 웹 서비스입니다.",
    learned:
      "웹캠처럼 브라우저 API를 직접 다루는 기능은 내 환경에서는 잘 돌아가도 다른 기기에서는 해상도·비율이 달라 결과가 어긋나는 경우가 생겼습니다. 코드가 맞더라도 실행 환경이 다르면 다른 결과가 나올 수 있다는 걸 처음으로 실감했고, 가정을 줄이고 다양한 환경에서 확인하는 습관을 갖게 된 프로젝트였습니다.",
    period: "2023.03 — 2023.05",
    team: "프론트엔드 1 · 백엔드 2",
    role: "프론트엔드 개발",
    features: [
      {
        title: "실시간 가상 피팅",
        items: [
          "react-webcam으로 웹캠 스트림 제어, 캡처 이미지를 dataURItoBlob으로 변환해 서버에 전송",
          "CSRF 토큰을 요청 헤더에 포함해 위조 요청 차단, ML 분석 결과를 받아 추천 안경 렌더링",
          "useCallback으로 이벤트 핸들러를 메모이제이션해 불필요한 리렌더링 방지",
        ],
      },
      {
        title: "얼굴형 분석 결과",
        items: [
          "Radar 차트로 분석 수치를 시각화해 사용자가 직관적으로 결과를 이해할 수 있도록 구현",
          "분석 대기 중 타이핑 애니메이션으로 로딩 상태를 시각적으로 표현",
        ],
      },
      {
        title: "찜 목록",
        items: [
          "Redux + Redux Persist로 찜한 상품을 전역 관리, 새로고침 후에도 목록이 유지되도록 구현",
        ],
      },
    ],
    troubleshooting: [
      {
        title: "웹캠 이미지 품질 불일치",
        items: [
          "기기마다 해상도·비율이 달라 캡처 이미지가 왜곡되는 문제 발생",
          "react-webcam 설정에서 해상도·비율을 직접 지정해 기기와 무관하게 일관된 품질 확보",
        ],
      },
    ],
    tech: ["React.js", "JavaScript", "CSS3", "Redux", "Axios"],
    github: "https://github.com/nue-os/capstone-2023-31",
    demo: "https://www.youtube.com/watch?v=NodPse4up2s",
    featured: false,
    image: "/images/glassfit/og.png",
    imagePosition: "center",
    screenshots: [
      "/images/glassfit/1.png",
      "/images/glassfit/2.png",
      "/images/glassfit/3.png",
      "/images/glassfit/4.png",
    ],
  },
];
