import { twMerge } from "tailwind-merge"

type PropsStatus = "졸업" | "휴학" | "재학중"

type Props = {
  name: string
  startedAt: string
  graduatedAt?: string
  status: PropsStatus
  major?: string
}

const data: Props[] = [
  { graduatedAt: "2008.10", startedAt: "2006.09", name: "중국제일실험중학교", status: "졸업" },
  { startedAt: "2010.01", graduatedAt: "2010.12", name: "Taylors College", status: "졸업", major: "Foundation Course" },
  { startedAt: "2011.03", name: "University of Auckland", status: "휴학", major: "Bachelor of Accounting & Bachelor of Economy" },
  { startedAt: "2012.03", graduatedAt: "2014.09", name: "Alphacrucis College", status: "졸업", major: "Diploma of Ministry" },
]

export default function MainEducation() {
  return (
    <div className="p-4 gap-4 lg:justify-center min-h-[calc(100vh-61px)] max">
      <h1 className="h1">Education</h1>
      <ul className="gap-2 grid sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, i) => (
          <li
            key={i}
            className={twMerge(
              "border-2 dark:border-transparent dark:bg-zinc-800 border-zinc-200 rounded p-4 efb hover:border-primary",
              i === 1 ? "d3" : i === 2 && "d6"
            )}
          >
            <div>
              <p className="font-black text-primary flex-1">
                {item.name}
                <span className="mx-2 text-zinc-500 text-xs">
                  {item.startedAt}
                  {item?.graduatedAt && ` ~ ${item.graduatedAt}`}
                </span>
                {item.status === "휴학" && <span className="bg-zinc-100 p-1 text-xs text-zinc-500 rounded dark:bg-zinc-700">{item.status}</span>}
              </p>
              {item?.major && <p className="truncate">{item.major}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
