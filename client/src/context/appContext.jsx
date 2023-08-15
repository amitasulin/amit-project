import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import http from "../services/httpService";
import jwtDecode from "jwt-decode";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <AppContext.Provider
      value={{
        showMobileMenu,
        setShowMobileMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
