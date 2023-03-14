import { createContext } from "react";

const AppContext = createContext({
  isMobileView: false,
});

export const AppProvider = AppContext.Provider;

export default AppContext;
