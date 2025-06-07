import { LuMenu, LuX } from "react-icons/lu"
import { useApp } from "../../useApp"
import Navbar from "./Navbar"
import { twMerge } from "tailwind-merge"
import { IoMoon, IoSunny } from "react-icons/io5"

const Header = () => {
  const { refs, menus, screen, isMenuShowing, handleMenu, views } = useApp()
  return (
    <div className="max-w-300 mx-auto w-full flex-row justify-between">
      <button className="h-15 px-2 text-2xl font-light hover:text-primary dark:text-zinc-300" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Dexter Yoon
      </button>
      {screen.width > 600 ? (
        <ul className="flex-row gap-2 items-center">
          <li>
            <ThemeButton />
          </li>
          {menus.map((item, i) => (
            <li key={item}>
              <button
                onClick={() => refs[i]!.current?.scrollIntoView({ behavior: "smooth" })}
                className={twMerge("hover:text-primary dark:text-zinc-300 px-2", views[i].inView && "text-primary dark:text-primary")}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex-row gap-2">
          <ThemeButton />
          <button className="text-2xl hover:text-primary w-10 flex justify-center items-center dark:text-zinc-300" onClick={handleMenu}>
            {isMenuShowing ? <LuX /> : <LuMenu />}
          </button>
          {isMenuShowing && <Navbar />}
        </div>
      )}
    </div>
  )
}

export default Header

function ThemeButton() {
  return (
    <button className="w-10 flex justify-center items-center hover:text-primary dark:text-zinc-300" onClick={() => document.body.classList.toggle("dark")}>
      {document.body.classList.contains("dark") ? <IoMoon /> : <IoSunny />}
    </button>
  )
}
