import React from "react";

import { useParams } from "react-router-dom";
import ProductDetails from "./productDetails/productDetails";

export default function StrainDetailsPage() {
  const { strainId } = useParams();

  return (
    <div className="StrainDetails Page">
      <div className="title">Strain Details Page</div>
      <ProductDetails strainId={strainId} />
    </div>
  );
}
