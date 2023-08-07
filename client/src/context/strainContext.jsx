import { createContext, useState, useEffect } from "react";
import { getAllStrains } from "../services/strainService";

export const StrainContext = createContext();

export const StrainProvider = ({ children }) => {
  const [strains, setStrains] = useState([]);

  const fetchAllStrains = async (search = "") => {
    console.log("Fetching strains...");
    const response = await getAllStrains({ search });
    const strainsArray = response.data.data;
    setStrains(strainsArray);
    console.log("Fetched strains...");
  };

  useEffect(() => {
    fetchAllStrains();
  }, []);

  return (
    <StrainContext.Provider value={{ strains, fetchAllStrains }}>
      {children}
    </StrainContext.Provider>
  );
};
