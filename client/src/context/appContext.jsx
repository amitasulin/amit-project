import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isAdult, setIsAdult] = useState(false);

  return (
    <AppContext.Provider
      value={{
        showMobileMenu,
        setShowMobileMenu,
        isAdult,
        setIsAdult,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
