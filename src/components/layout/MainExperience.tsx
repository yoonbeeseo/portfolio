type Props = {
  startedAt: string
  endedAt?: string
  name: string
  features: Array<string>
}

const data: Props[] = [
  {
    startedAt: "2020.10",
    endedAt: "2022.12",
    features: [
      "Front-end: React, React-Router, StichesJS(styling)",
      "Back-end: Nodejs, express, passportjs",
      "Database: MongoDB",
      "전역상태관리: Redux",
      "php-youngcart 에서 리액트 컴포넌트 기반의 MERN 스택으로 마이그레이션",
      "MAU 300~500명, 서비스 종료까지 누적 매출 8.2억원 달성",
      "기획/디자인/개발 총괄",
      "결제 API 연동",
    ],
    name: "LMS 인강 사이트",
  },
  {
    startedAt: "2023.01",
    features: [
      "Front-end: Next js, vanilla-extract",
      "Back-end: Next js app router, next-auth",
      "Database: MongoDB, firebase",
      "전역상태관리: Redux Toolkit, ReactConext Api",
      "학원 필수 서류 관리 프로그램 기획/디자인/개발 총괄",
      "ReactComponent to pdf, csv 기술 구현",
      "모바일, 테블릿, 데스크탑 등 모든 기기 반응형 구현",
    ],
    name: "학원 서류 관리 프로그램",
  },
  {
    startedAt: "2024.01",
    features: [
      "Front-end: Next js, vanilla-extract, React Native",
      "Back-end: Next js app router, firebase-auth",
      "Database: MongoDB, firebase",
      "전역상태관리: Redux Toolkit, ReactConext Api",
      "학원 업무 솔루션 윤비서 기획/디자인/개발 총괄",
      "웹 및 안드로이드/IOS에 대응하는 랜딩 페이지 + 크로스 플랫폼 앱 개발",
    ],
    name: "학원 관리 플랫폼: 윤비서",
  },
  {
    startedAt: "2024.11",
    endedAt: "2025.05",
    features: [
      "Front-end 전담 강사",
      "HTML 교육",
      "CSS 교육",
      "Javascript 교육",
      "React - vite 교육",
      "Next js 교육",
      "tailwind-css 교육",
      "vanilla-extract 교육",
      "firebase 교육",
      "localstorage 등 브라우저 내장 API 교육",
      "git/github + gh-pages + vercel 배포방법 등 다수 교육",
    ],
    name: "DW아카데미",
  },
  {
    name: "초급용 리액트 인강 제작",
    features: [
      "React in Typescript",
      "tailwindcss",
      "CRUD with React hooks",
      "Input controls with ref",
      "API 통신 + json-server",
      "page routing with React router",
      "상태관리 with React Context Api + Zustand",
    ],
    startedAt: "2025.04",
  },
]
export default function MainExperience() {
  return (
    <div className="min-h-[calc(100vh-61px)] gap-4 p-4 max lg:justify-center">
      <h1 className="h1">Experiences</h1>
      <ul className="gap-4 grid sm:grid-cols-2 lg:grid-cols-3">
        {data.map((project, i) => (
          <li key={i} className="border-2 p-4 rounded-xl border-zinc-200 dark:border-transparent dark:bg-zinc-800 hover:border-primary">
            <div>
              <p className="h1 text-lg">
                {project.name}
                <span className="ml-2 font-light text-sm text-zinc-500">
                  {project.startedAt} - {project.endedAt ?? "진행중"}
                </span>
              </p>
              <ul className="list-inside list-decimal">
                {project.features.map((feature, j) => (
                  <li key={j}>{feature}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
