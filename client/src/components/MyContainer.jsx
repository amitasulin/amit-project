export const MyContainer = ({ children }) => (
  <div
    style={{
      display: "flex",
      backgroundColor: "rgba(255,255,255,0.8)",
      height: "100%",
      justifyContent: "center",
    }}
  >
    {children}
  </div>
);
