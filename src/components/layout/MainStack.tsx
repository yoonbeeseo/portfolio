import { useState } from "react"
import { twMerge } from "tailwind-merge"

type StackSort = "framework" | "styling" | "basic" | "backend" | "database" | "design" | "all"
type Stack = {
  name: string
  sort: StackSort | ""
}

const sorts: StackSort[] = ["all", "framework", "styling", "basic", "backend", "database", "design"]
const stacks: Stack[] = [
  { name: "React JS", sort: "framework" },
  { name: "Next JS", sort: "framework" },
  { name: "React Native", sort: "framework" },
  { name: "HTML", sort: "basic" },
  { name: "CSS", sort: "basic" },
  { name: "Javascript", sort: "basic" },
  { name: "Typescript", sort: "basic" },
  { name: "node js", sort: "backend" },
  { name: "tailwindcss", sort: "styling" },
  { name: "vanilla-extract", sort: "styling" },
  { name: "stiches js", sort: "styling" },
  { name: "mongoDB", sort: "database" },
  { name: "firebase", sort: "database" },
  { name: "supabase", sort: "database" },
  { name: "Redis", sort: "database" },
  { name: "Adobe XD", sort: "design" },
  { name: "Figma", sort: "design" },
  { name: "Premiere Pro", sort: "design" },
]
export default function MainStack() {
  const [sort, setSort] = useState<StackSort>("all")

  return (
    <div className=" p-4 gap-4 min-h-[calc(100vh-61px)] lg:justify-center max">
      <h1 className="h1">Skillsets & Stacks</h1>
      <div className="flex-row items-start gap-2">
        <ul>
          {sorts.map((item, index) => (
            <li key={item} className={twMerge(index !== 0 && "border-t border-zinc-200 dark:border-zinc-700")}>
              <button className="p-1 w-full text-left hover:text-primary dark:text-zinc-300" onClick={() => setSort(item)}>
                <span className={twMerge("transition-all p-1 px-2 rounded text-sm", item === sort && "bg-primary/10 block text-lg text-primary")}>{item}</span>
              </button>
            </li>
          ))}
        </ul>
        <ul className="flex-row flex-wrap gap-2">
          {stacks.map((stack, i) => {
            if (sort === "all" || sort === stack.sort) {
              return (
                <li key={i} className="p-2 rounded-full dark:bg-zinc-800 dark:text-zinc-400 bg-zinc-100 hover:bg-primary transition hover:text-white">
                  {stack.name}
                </li>
              )
            }
            return null
          })}
        </ul>
      </div>
    </div>
  )
}
