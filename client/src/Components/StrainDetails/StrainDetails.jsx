import React, { useEffect, useState } from "react";
import { getStrainById } from "../../services/strainService";
import "./StrainDetails.css";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

export default function StrainDetails(props) {
  const { strainId } = props;

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
            <div>Name: {strain.name}</div>
            <div>Type: {strain.type}</div>
            <div>ID: {strain._id}</div>
          </React.Fragment>
        )}
      </div>
    </ProtectedRoute>
  );
}
