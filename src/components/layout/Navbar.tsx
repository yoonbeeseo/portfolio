import { useState } from "react"
import { useApp } from "../../useApp"
import { twMerge } from "tailwind-merge"

export default function Navbar() {
  const { menus } = useApp()
  return (
    <nav className="fixed top-[61px] right-0 border-l h-[calc(100vh-61px)] border-zinc-200 bg-white overflow-y-auto nav dark:bg-zinc-900 dark:border-zinc-700">
      <ul>
        {menus.map((menu, i) => (
          <Item key={menu} menu={menu} index={i} />
        ))}
      </ul>
    </nav>
  )
}

type Props = { menu: string; index: number }
function Item({ menu, index }: Props) {
  const { handleMenu, refs, views } = useApp()
  const [isHovering, setIsHovering] = useState(false)

  const { inView } = views[index]
  return (
    <li>
      <button
        onClick={() => {
          refs[index].current?.scrollIntoView({ behavior: "smooth" })
          handleMenu()
        }}
        className={twMerge("w-full text-left p-2 flex hover:text-primary dark:text-zinc-300", inView && "text-primary")}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="relative">
          {menu}
          <span className={twMerge("bg-primary h-[2px] w-0 block absolute -bottom-2 left-0 transition-all", isHovering && "w-full", inView && "w-full")} />
        </div>
      </button>
    </li>
  )
}
