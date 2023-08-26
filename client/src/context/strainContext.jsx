import { createContext, useState, useEffect } from "react";
import { getAllStrains } from "../services/strainService";

export const StrainContext = createContext();

export const StrainProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [strains, setStrains] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchAllStrains = async ({ search = "", page = 1, filters }) => {
    console.log(filters);

    const response = await getAllStrains({ search, page, filters });
    const strainsArray = response.data.data;
    const totalPages = response.data.totalPages;
    setStrains(strainsArray);
    setPage(page);
    setTotalPages(totalPages);
  };

  useEffect(() => {
    fetchAllStrains({ search: "", _page: 1 });
  }, []);

  return (
    <StrainContext.Provider
      value={{ strains, page, totalPages, fetchAllStrains, search, setSearch }}
    >
      {children}
    </StrainContext.Provider>
  );
};
