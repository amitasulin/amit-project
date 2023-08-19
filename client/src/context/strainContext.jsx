import { createContext, useState, useEffect } from "react";
import { getAllStrains } from "../services/strainService";

export const StrainContext = createContext();

export const StrainProvider = ({ children }) => {
  const [strains, setStrains] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchAllStrains = async (search = "", _page = 1) => {
    const response = await getAllStrains({ search, page: _page });
    const strainsArray = response.data.data;
    const page = response.data.page;
    const totalPages = response.data.totalPages;
    setStrains(strainsArray);
    setPage(page);
    setTotalPages(totalPages);
    console.log("Fetched strains...");
  };

  useEffect(() => {
    fetchAllStrains();
  }, []);

  return (
    <StrainContext.Provider
      value={{ strains, page, totalPages, fetchAllStrains }}
    >
      {children}
    </StrainContext.Provider>
  );
};
