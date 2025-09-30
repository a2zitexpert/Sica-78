import React from "react";

const PrimarySection = () => {
  const links = [
    { text: "CIRCULER REGARDING NEW ADMISSIONS", url: "/circular" },
    { text: "PRIMARY MONTLY REPORT", url: "/monthly-report" },
    { text: "BULLETIN", url: "/bulletin" },
    { text: "PRIMARY WING PHOTO GALLERY", url: "/photo-gallery" },
    { text: "GROUP PHOTOGRAPH", url: "/group-photo" },
  ];

  return (
    <div className="primary-container">
      <div className="link-container">
        <a href="/admission-form" className="admission-btn">
          Admission Form
        </a>

        {links.map((item, index) => (
          <a key={index} href={item.url} className="link-btn">
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PrimarySection;
