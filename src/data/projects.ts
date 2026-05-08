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
          "사용자·관리자 인증 상태를 Zustand 스토어로 분리 관리, sessionStorage에서 토큰·ID를 초기 로드해 새로고침 후에도 로그인 상태 유지",
          "권한 목록을 별도 스토어로 관리해 권한에 따라 접근 가능한 페이지 분기 처리",
          "응답 코드별 에러 분기로 비로그인·권한 없음 상황마다 명확한 피드백 제공",
        ],
      },
      {
        title: "판매글 등록/수정",
        items: [
          "react-hook-form 필드별 독립 상태 관리로 불필요한 리렌더링 제거",
          "일반 판매·입찰 방식 선택에 따른 조건부 렌더링으로 유연한 폼 처리",
          "Zod 스키마로 이메일·비밀번호 형식, 데이터 단위(MB/GB)별 최솟값·입력 단위·보유량 초과 여부까지 검증해 서버 요청 전 클라이언트에서 차단",
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
        title: "공통 컴포넌트",
        items: [
          "Button — shape·size를 prop으로 제어, Framer Motion 클릭 애니메이션 적용",
          "Input — 세 가지 shape 지원, 비밀번호 토글·에러 메시지·floating label 처리",
          "Table — 제네릭으로 타입 안전성 확보, 컬럼·셀 렌더링·행 클릭 여부를 외부 주입받고 클릭된 행을 accordion으로 확장해 상세 테이블 표시",
          "Graph — Line·Bar 차트를 type prop 하나로 전환, 통신사별 색상 매핑과 모바일 대응 폰트 크기 처리",
          "그 외 다수의 공통 컴포넌트 구현",
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
    demo: "https://www.youtube.com/watch?v=Kzm0acL3VCY",
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
      "제주 월동 채소 재배 면적 온라인 신고 시스템 — 디지랩 챌린지 해커톤 대상 수상",
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
          "재배면적·출하량 신고를 3단계 폼으로 구성, FormTab 진행 표시기로 현재 단계 시각화",
          "Zustand로 단계별 입력 상태를 전역 관리해 페이지 이동 후에도 입력 내용 유지",
          "react-hook-form rules로 필드별 유효성 검사, 필수값·형식 오류를 단계 이동 전 차단",
        ],
      },
      {
        title: "데이터 시각화",
        items: [
          "Doughnut·HalfDoughnut·수평 막대 차트를 각 데이터 특성에 맞게 조합해 구현",
          "HalfDoughnut 차트에서 커버리지 비율에 따라 색상을 동적으로 변경",
          "SSR 환경에서 차트 라이브러리의 hydration 오류를 dynamic import로 방지",
        ],
      },
      {
        title: "관리자 기능",
        items: [
          "URL 변경 없이 Zustand 탭 상태로 PENDING·APPROVED·REJECTED 화면 전환",
          "탭 변경 시 useEffect로 해당 상태의 신고 목록을 재조회해 즉시 반영",
          "SSE로 신고 접수 이벤트를 실시간 수신하는 커스텀 훅 구현, 초기 알림 로드 후 EventSource로 신규 알림 추가",
        ],
      },
      {
        title: "공통 컴포넌트",
        items: [
          "Input·Dropdown·RadioGroup을 제네릭으로 설계해 react-hook-form useController와 통합",
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
    title: "AI 챗봇 통신사 요금제 추천 서비스",
    description: "AI 챗봇으로 통신사 요금제를 추천받고 비교할 수 있는 서비스",
    longDescription:
      "AI 챗봇을 통해 사용자의 데이터 사용 패턴과 예산에 맞는 통신사 요금제를 추천하는 웹 서비스입니다. 직관적인 챗봇 인터페이스와 요금제 비교 기능으로 복잡한 요금제 선택을 간편하게 도와줍니다.",
    learned:
      "캐러셀 자동 재생을 사용자가 클릭한 뒤 멈출지 계속할지, 스크롤이 20%를 넘었을 때 자동으로 스냅할지 말지처럼 작은 동작 하나하나가 실제 사용 경험을 꽤 다르게 만든다는 걸 느꼈습니다. 기능을 동작하게 만드는 것보다 어떻게 동작해야 자연스러운지 먼저 생각하는 습관이 이 프로젝트에서 생겼습니다. IntersectionObserver처럼 직접 DOM API를 다룰 때는 cleanup을 빠뜨리면 메모리 누수가 눈에 띄지 않게 쌓인다는 것도 직접 챙기면서 배웠습니다.",
    period: "2025.05 — 2025.06",
    team: "프론트엔드 4",
    role: "프론트엔드 개발",
    features: [
      {
        title: "메인 페이지",
        items: [
          "Swiper 캐러셀에 Autoplay·Pagination·Navigation 모듈 조합, 사용자 인터랙션 후에도 자동 재생이 유지되도록 disableOnInteraction 설정",
          "Framer Motion으로 슬라이드 전환 애니메이션과 스크롤 유도 화살표 floating 효과 구현",
          "IntersectionObserver로 챗봇 섹션 진입 여부 감지해 UI 요소 표시 제어, ref 캐싱 후 cleanup에서 observer 해제해 메모리 누수 방지",
          "useAutoScrollToSection 커스텀 훅으로 섹션을 20% 이상 스크롤 시 해당 섹션으로 자동 스냅, useIsMobile 훅으로 모바일·태블릿·데스크톱 반응형 처리",
        ],
      },
      {
        title: "챗봇 안내 페이지",
        items: [
          "소개·사용법·기능·FAQ·공지 5개 섹션으로 구성된 모듈형 가이드 페이지 구현",
          "사이드바 네비게이션으로 섹션 간 즉시 이동, 해시 기반 URL과 스크롤을 동기화해 새로고침 시에도 위치 복원",
          "반응형 레이아웃으로 데스크톱에서는 그리드, 모바일에서는 인라인 사이드바로 전환",
        ],
      },
    ],
    tech: [
      "React",
      "JavaScript",
      "Vite",
      "TailwindCSS",
      "Swiper",
      "Framer Motion",
    ],
    github: "https://github.com/nue-os/Ureca-Chatbot-Team3-Frontend",
    demo: "https://youtu.be/WNlEKSNukGk",
    image: "/images/yoplan/og.png",
    imagePosition: "center",
    screenshots: [
      "/images/yoplan/1.png",
      "/images/yoplan/2.png",
      "/images/yoplan/3.png",
      "/images/yoplan/4.png",
    ],
  },
  {
    title: "주식 정보 조회 서비스",
    description:
      "KIS Open API를 활용한 토스증권 클론 — 실시간 주식 시세·관심 종목·커뮤니티 제공",
    longDescription:
      "KIS Open API로 실시간 주식 데이터를 받아 토스증권 UI를 클론한 서비스입니다. 프론트엔드와 백엔드를 모두 구현했으며, SMS 인증 기반 로그인, 관심 종목 관리, 종목별 커뮤니티 기능을 제공합니다.",
    learned:
      "프론트엔드와 백엔드를 함께 맡으면서 양쪽 코드가 어떻게 맞물리는지 직접 확인하게 됐습니다. API 응답 구조를 내가 설계해야 하니 프론트에서 어떻게 쓸지를 먼저 생각하고 스키마를 잡게 됐고, 반대로 백엔드가 내보내는 데이터 형식이 달라지면 UI 전체가 흔들린다는 것도 몸으로 느꼈습니다. 풀스택으로 만들어보니 경계에서 생기는 문제들이 더 잘 보였습니다.",
    period: "2025.03",
    team: "개발자 2",
    role: "풀스택 개발",
    features: [
      {
        title: "주식 시세 조회",
        items: [
          "홈 화면에서 거래대금·급상승·급하락 탭별로 종목 목록을 조회, URL 파라미터로 탭 상태를 관리해 공유 가능한 링크 지원",
          "상세 페이지에서 종목명·현재가·등락폭·등락률을 색상으로 구분해 표시 (상승 빨강, 하락 파랑)",
          "백엔드에서 KIS OpenAPI 두 엔드포인트를 Mono로 비동기 병렬 호출해 종목 기본 정보와 시세를 합산 제공",
        ],
      },
      {
        title: "관심 종목",
        items: [
          "우측 고정 사이드바에서 관심 종목 목록 조회·추가·삭제, 슬라이드 인/아웃 애니메이션 적용",
          "useAuth 커스텀 훅에서 관심 종목 상태를 전역 관리, 홈·상세·사이드바 간 즉시 동기화",
          "백엔드에서 JWT 토큰으로 userId 추출 후 관심 종목 CRUD 처리, MyBatis로 DB 연동",
        ],
      },
      {
        title: "커뮤니티",
        items: [
          "종목 상세 페이지에 종목별 댓글 작성·조회 기능 구현, textarea 자동 높이 확장 적용",
          "백엔드에서 stock_code 기준으로 댓글을 저장·조회하는 API 구현, MyBatis 어노테이션(@Select·@Insert)으로 DB 연동",
        ],
      },
    ],
    tech: [
      "React",
      "JavaScript",
      "Vite",
      "Material-UI",
      "Spring Boot",
      "MyBatis",
      "MySQL",
      "JWT",
    ],
    github: "https://github.com/mini-project-team-5",
    demo: "https://www.youtube.com/watch?v=Gih8RhW0CKY",
    image: "/images/toss-securities/og.png",
    imagePosition: "center",
    screenshots: [
      "/images/toss-securities/1.png",
      "/images/toss-securities/2.png",
      "/images/toss-securities/3.png",
      "/images/toss-securities/4.png",
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
          "NextAuth Credentials로 이메일·비밀번호 검증, JWT 세션 전략으로 accessToken을 쿠키에서 추출해 세션에 저장",
          "미들웨어에서 인증 여부를 검사하고 callbackUrl을 보존해 로그인 후 원래 페이지로 복귀",
          "react-hook-form으로 실시간 유효성 검사 제공",
        ],
      },
      {
        title: "일정 관리",
        items: [
          "일정 제목·색상·날짜·시간·참석자·위치를 한 폼에서 관리, react-hook-form Controller로 필드별 상태 분리",
          "Zustand 스토어에서 시작·종료 시간 유효성(시작 < 종료)을 검증해 잘못된 일정 생성 방지",
          "외부 라이브러리 없이 날짜·시간 선택 UI를 직접 구현, suppressHydrationWarning으로 SSR 호환성 확보",
        ],
      },
      {
        title: "커뮤니티",
        items: [
          "자유게시판 목록 구현 — 지점별 필터링, 좋아요 수 기준 BEST 게시글 상단 표시",
          "게시글 상세·댓글 작성·수정·삭제 구현, Tanstack Query로 CRUD 후 목록 즉시 반영",
          "@use-gesture/react로 게시글 이미지에 드래그 스크롤 적용, 터치·마우스 환경 모두 지원",
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
        title: "얼굴형 분석",
        items: [
          "촬영 후 미리보기 단계를 거쳐 분석 요청하는 2단계 UI 구현",
          "react-webcam으로 웹캠 스트림 제어, 캡처 이미지를 dataURItoBlob으로 변환해 서버에 전송",
          "CSRF 토큰을 요청 헤더에 포함해 위조 요청 차단, ML 분석 결과를 받아 추천 안경 렌더링",
          "분석 대기 중 로딩 애니메이션으로 처리 상태 시각화, 결과 수신 후 Radar 차트로 5가지 얼굴형 수치 표현",
        ],
      },
      {
        title: "가상 피팅",
        items: [
          "안경을 선택하면 웹캠으로 실시간 착용 이미지를 생성, 서버에서 오버레이 처리된 Base64 이미지를 받아 렌더링",
          "미러 반전 토글로 셀카 방향 전환 지원, 얼굴 미감지 시 안내 메시지 표시",
        ],
      },
      {
        title: "제품 목록",
        items: [
          "얼굴형별 필터링과 이름·가격 기준 4가지 정렬 옵션 제공",
          "react-slick 캐러셀에 반응형 breakpoint를 설정해 화면 크기별로 표시 개수 조정",
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
    image: "/images/glassfit/og.png",
    imagePosition: "center",
    screenshots: [
      "/images/glassfit/1.png",
      "/images/glassfit/2.png",
      "/images/glassfit/3.png",
    ],
  },
];
