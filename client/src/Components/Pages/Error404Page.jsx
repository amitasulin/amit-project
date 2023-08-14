import React from "react";
import Error404Image from "./Error404Image";

export default function Error404Page() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>

      <Error404Image
        imageUrl="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=600"
        altText="Error404Image"
      />
    </div>
  );
}
