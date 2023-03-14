import React, { useContext } from "react";
import { AppProvider } from "../context/AppContext";
import useMediaQuery from "../hooks/useMediaQuery";

export default ({ children }) => {
  const isMobileView = useMediaQuery("(max-width: 1450px)");
  return <AppProvider value={{ isMobileView }}>{children}</AppProvider>;
};
