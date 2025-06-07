import { lazy, Suspense, useMemo, type PropsWithChildren } from "react"
import { useApp } from "../../useApp"
import Profile from "./Profile"
import { twMerge } from "tailwind-merge"

const MainAbout = lazy(() => import("./MainAbout"))
const MainStack = lazy(() => import("./MainStack"))
const MainEducation = lazy(() => import("./MainEducation"))
const MainExperience = lazy(() => import("./MainExperience"))

export default function MainComponent() {
  const { menus } = useApp()
  const items = useMemo(() => [<MainAbout />, <MainStack />, <MainEducation />, <MainExperience />], [])
  return (
    <>
      {menus.map((menu, index) => (
        <Suspense fallback={index === 0 ? <Profile /> : <>Fallback</>} key={index}>
          <Item menu={menu} index={index}>
            {items[index]}
          </Item>
        </Suspense>
      ))}
    </>
  )
}

type Props = {
  menu: string
  index: number
} & PropsWithChildren
function Item({ index, children }: Props) {
  const { refs, views } = useApp()
  return (
    <div className={twMerge("min-h-full snap-start", views[index].inView ? "efb opacity-100" : "opacity-0")} ref={views[index].ref}>
      <div ref={refs[index]}>{children}</div>
    </div>
  )
}
