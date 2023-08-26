import React, { useContext, useState } from "react";
import { StrainContext } from "../../context/strainContext";
import { Button } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { MyContainer } from "../../components/MyContainer";
import { Product } from "./Product";
import FilterModal from "./FilterModal";

export default function ProductList() {
  const navigate = useNavigate();
  const { strains, page, totalPages, fetchAllStrains } =
    useContext(StrainContext);

  const [showFilters, setShowFilters] = useState(false);
  const { userData } = useContext(UserContext);

  const isAdmin = userData?.role === "admin";
  const items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        onClick={() => fetchAllStrains({ search: "", page: number })}
        key={number}
        active={number === page}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <MyContainer>
      <div
        style={{ padding: "0px 40px" }}
        className="d-flex flex-column align-items-center"
      >
        <h1>All Strains</h1>
        <Button
          onClick={() => setShowFilters(!showFilters)}
          className="mh-auto mb-3"
        >
          {showFilters ? "Hide " : "Show "}Filters
        </Button>
        <FilterModal
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />

        {isAdmin ? (
          <Button
            onClick={() => navigate("/newStrain")}
            style={{ margin: "auto", borderRadius: "100px" }}
          >
            <i className="bi bi-file-earmark-plus"> Add new strain</i>
          </Button>
        ) : null}

        {strains.length ? (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "20px",
              }}
            >
              <Pagination>{items}</Pagination>
            </div>

            <div
              style={{ maxWidth: 1400 }}
              className="d-flex  flex-row flex-wrap"
            >
              {!strains
                ? "Loading strains, please wait..."
                : strains.map((strain) => (
                    <Product key={strain._id} product={strain} />
                  ))}
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Pagination>{items}</Pagination>
            </div>
          </div>
        ) : null}
      </div>
    </MyContainer>
  );
}
