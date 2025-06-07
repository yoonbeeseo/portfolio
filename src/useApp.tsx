import { createContext, useContext, type RefObject } from "react"
import type { InViewHookResponse } from "react-intersection-observer"

type AppProps = {
  refs: Array<RefObject<HTMLDivElement | null>>
  menus: Array<string>
  screen: {
    width: number
    scroll: number
  }
  isMenuShowing: boolean
  handleMenu: Func
  views: Array<InViewHookResponse>
}

const initialState: AppProps = {
  refs: [],
  menus: [],
  screen: {
    width: 0,
    scroll: 0,
  },
  isMenuShowing: false,
  handleMenu: () => {},
  views: [],
}

export const AppContext = createContext(initialState)

export const useApp = () => useContext(AppContext)
