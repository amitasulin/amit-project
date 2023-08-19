import { createContext, useState } from "react";

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
