import React, { useEffect, useState } from "react";
import { getStrainById } from "../../services/strainService";
import "./productDetails.css";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import { useParams } from "react-router-dom";

export default function ProductDetails(props) {
  const { strainId } = useParams();

  const [strain, setStrain] = useState(null);

  useEffect(() => {
    const fetchStrain = async (strainId) => {
      try {
        const response = await getStrainById(strainId);
        const fetchedStrain = response.data.data;
        setStrain(fetchedStrain);
      } catch (error) {
        if (error.response) {
          console.log("We have an error:", error.response.data);
        } else {
          console.log("We have an error:", error.message);
        }
      }
    };
    fetchStrain(strainId);
  }, [strainId]);

  return (
    <ProtectedRoute allowedRoles={["user", "admin"]}>
      <div className="StrainDetails">
        {!strain ? (
          <div> Loading strain data, Please wait... </div>
        ) : (
          <React.Fragment>
            <img className="poster" src={strain.img_url} alt="strain poster" />
            <div className="details">
              <div>Name: {strain.name}</div>
              <div>Type: {strain.type}</div>
              <div>Thc Level: {strain.thcLevel}</div>
              <div>Price: {strain.price + "$"}</div>
              <div>ID: {strain._id}</div>
            </div>
          </React.Fragment>
        )}
      </div>
    </ProtectedRoute>
  );
}
