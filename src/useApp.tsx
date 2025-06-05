import { createContext, useContext } from "react";

type AppProps = {
  refs: Array<React.Ref<HTMLDivElement>>;
  menus: Array<string>;
};
const initialState: AppProps = {
  refs: [],
  menus: [],
};

export const AppContext = createContext(initialState);

export const useApp = () => useContext(AppContext);
