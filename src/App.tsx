import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState, type RefObject } from "react"
import { AppContext } from "./useApp"
import { CgSpinner } from "react-icons/cg"
import { twMerge } from "tailwind-merge"
import MainComponent from "./components/layout/MainComponent"
import { useInView, type InViewHookResponse } from "react-intersection-observer"
import { isBrowser } from "react-device-detect"

const Header = lazy(() => import("./components/layout/Header"))

const App = () => {
  const [isMenuShowing, setIsMenuShowing] = useState(false)
  const handleMenu = useCallback(() => setIsMenuShowing((prev) => !prev), [])
  const menus = useMemo(() => ["About", "Skillsets", "Education", "Experiences"], [])

  const about = useRef<HTMLDivElement>(null)
  const skills = useRef<HTMLDivElement>(null)
  const edu = useRef<HTMLDivElement>(null)
  const ex = useRef<HTMLDivElement>(null)
  const aboutView = useInView({ threshold: 0.5 })
  const skillView = useInView({ threshold: 0.5 })
  const eduView = useInView({ threshold: 0.5 })
  const exView = useInView({ threshold: 0.5 })

  const refs = useMemo<Array<RefObject<HTMLDivElement | null>>>(() => [about, skills, edu, ex], [])
  const views = useMemo<Array<InViewHookResponse>>(() => [aboutView, skillView, eduView, exView], [aboutView, skillView, eduView, exView])

  const Spinner = useCallback(() => {
    return (
      <div className="items-center py-5 rounded bg-whitesmoke w-full">
        <CgSpinner className="animate-spin text-primary" />
      </div>
    )
  }, [])

  const [screen, setScreen] = useState({ width: 0, scroll: 0 })
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getWidth = () => setScreen((prev) => ({ ...prev, width: window.innerWidth }))
      const getScroll = () => setScreen((prev) => ({ ...prev, scroll: window.scrollY }))

      getWidth()
      getScroll()
      window.addEventListener("resize", getWidth)
      window.addEventListener("scroll", getScroll)

      const fn = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY })
      }
      isBrowser && window.addEventListener("mousemove", fn)

      return () => {
        window.removeEventListener("resize", getWidth)
        window.removeEventListener("scroll", getScroll)
        isBrowser && window.removeEventListener("mousemove", fn)
      }
    }
  }, [])

  return (
    <AppContext.Provider value={{ refs, menus, screen, isMenuShowing, handleMenu, views }}>
      <title>[Dexter Yoon]: React_Developer</title>
      <span className="fixed block size-10 rounded-full bg-primary/50 transition-all z-50" style={{ top: position.y, left: position.x }} />
      <header
        className={twMerge(
          "w-full bg-white flex-row items-center px-2 border-b border-zinc-200 relative z-10 dark:bg-zinc-900 dark:text-zinc-300 dark:border-zinc-700",
          screen.scroll > 100 && "fixed top-0 left-0 backdrop-blur-xl opacity-90"
        )}
      >
        <Suspense fallback={<Spinner />}>
          <Header />
        </Suspense>
      </header>
      <main className={twMerge("h-[calc(100vh-61px)] overflow-y-auto snap-y", screen.scroll > 100 && "h-screen")}>
        <MainComponent />
      </main>
    </AppContext.Provider>
  )
}

export default App
