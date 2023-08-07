import { createContext, useState, useEffect } from "react";
import { getAllStrains } from "../services/strainService";

export const StrainContext = createContext();

export const StrainProvider = ({ children }) => {
  const [strains, setStrains] = useState([]);

  useEffect(() => {
    const fetchAllStrains = async () => {
      const response = await getAllStrains();
      const strainsArray = response.data.data;
      setStrains(strainsArray);
    };
    console.log("Provider has strains");
    fetchAllStrains();
  }, []);

  return (
    <StrainContext.Provider value={{ strains }}>
      {children}
    </StrainContext.Provider>
  );
};
