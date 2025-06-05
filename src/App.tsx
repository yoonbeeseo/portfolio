import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type Ref,
} from "react";
import { AppContext } from "./useApp";
import { CgSpinner } from "react-icons/cg";
import { twMerge } from "tailwind-merge";

const Header = lazy(() => import("./components/layout/Header"));

const GenRef = () => {
  const ref = useRef<HTMLDivElement>(null);
  return ref;
};

const App = () => {
  const menus = useMemo(
    () => ["About", "Skills & Stacks", "Education", "Experiences"],
    []
  );

  const about = useRef<HTMLDivElement>(null);
  const skills = useRef<HTMLDivElement>(null);
  const edu = useRef<HTMLDivElement>(null);
  const ex = useRef<HTMLDivElement>(null);

  const refs = useMemo<Array<Ref<HTMLDivElement>>>(
    () => [about, skills, edu, ex],
    []
  );

  const Spinner = useCallback(() => {
    return (
      <div className="items-center p-2 rounded bg-whitesmoke">
        <CgSpinner className="animate-spin text-primary" />
      </div>
    );
  }, []);

  const [screen, setScreen] = useState({ width: 0, scroll: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getWidth = () =>
        setScreen((prev) => ({ ...prev, width: window.innerWidth }));
      const getScroll = () =>
        setScreen((prev) => ({ ...prev, scroll: window.scrollY }));

      getWidth();
      getScroll();
      window.addEventListener("resize", getWidth);
      window.addEventListener("scroll", getScroll);

      return () => {
        window.removeEventListener("resize", getWidth);
        window.removeEventListener("scroll", getScroll);
      };
    }
  }, []);

  return (
    <AppContext.Provider value={{ refs, menus }}>
      <title>[Dexter Yoon]: React_Developer</title>
      <h1 className="fixed bottom-0 right-0">{screen.scroll}</h1>
      <header
        className={twMerge(
          "w-full bg-white flex-row items-center px-2 border-b border-zinc-200",
          screen.scroll > 60 && "h-fixed"
        )}
      >
        <Suspense fallback={<Spinner />}>
          <Header />
        </Suspense>
      </header>
      <main className="h-[200vh]"></main>
    </AppContext.Provider>
  );
};

export default App;
