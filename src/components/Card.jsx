import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, image, link }) => {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate(link)}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "5px 5px 10px rgba(0,0,0,0.2)",
        color: "#fff",
        textAlign: "center",
        height: "250px",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: "1rem",
      }}
    >
      {title}
    </div>
  );
};

export default Card;
