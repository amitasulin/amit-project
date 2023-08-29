import React from "react";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div style={{ flex: 1 }}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        className="background-image-container"
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
