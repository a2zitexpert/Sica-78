import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <div
      className="home-container"
      style={{ padding: "40px", backgroundColor: "#D3C9B0" }}
    >
      <div
        className="card-grid"
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Card
          title="SICA SENIOR SECONDARY SCHOOL, SCHEME NO. 78"
          image="https://sicaschool78.org/wp-content/uploads/2025/03/senior-staff-photo-1.webp"
          link="/sica-senior-secondary"
        />
        <Card
          title="SICA SCHOOL SCHEME NO. 78, PRIMARY SECTION"
          image="https://sicaschool78.org/wp-content/uploads/2025/03/senior-staff-photo-1.webp"
          link="/primary-section-sica"
        />
        <Card
          title="SICA SCHOOL SCHEME NO. 78, New Arnaya"
          image="https://sicaschool78.org/wp-content/uploads/2025/03/senior-staff-photo-1.webp"
          link=""
        />
      </div>
    </div>
  );
};

export default Home;
