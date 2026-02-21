import React from "react";

function Card({ children }) {
  return (
    <div
      style={{
        width: "400px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        backgroundColor: "#ffffff",
      }}
    >
      {children}
    </div>
  );
}

export default Card;
