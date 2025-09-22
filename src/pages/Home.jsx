import React from "react";
import Card from "../components/Card";


const Home = () => {
  return (
    <div className="home-container" style={{ padding: "40px", backgroundColor: "#D3C9B0" }}>
      <h1 style={{ textAlign: "center", color: "#2E517A", marginBottom: "40px" }}>
        SICA SCHOOL 78
      </h1>

      <div className="card-grid" style={{ display: "flex", gap: "30px", justifyContent: "center", flexWrap: "wrap" }}>
        <Card
          title="SICA SENIOR SECONDARY SCHOOL, SCHEME NO. 78"
          image="/images/homepage-card1.jpg"
          link="/sica-senior-secondary"
        />
        <Card
          title="SICA SCHOOL SCHEME NO. 78, PRIMARY SECTION"
          image="/images/homepage-card2.jpg"
          link="/primary-section-sica"
        />
      </div>
    </div>
  );
};

export default Home;
