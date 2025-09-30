import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SeniorSecondary = () => {
  const [news, setNews] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // News & Events API
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => setNews(res.data))
      .catch((err) => console.error(err));

    // Blog Post API
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=12")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "ease-in-out",
    pauseOnHover: true,
  };

  const categories = [
    "Student Section",
    "Teacher’s Section",
    "Academic Section",
    "Exam Section",
    "Photo Gallery",
    "Parents Corner",
  ];

  return (
    <div>
      <section style={{ background: "black", padding: "0px 0" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <Slider {...sliderSettings}>
            <div>
              <img
                src="https://sicaschool78.org/wp-content/uploads/2025/03/senior-staff-photo-1.webp"
                alt="Event 1"
                style={{
                  width: "100%",
                  maxHeight: "500px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div>
              <img
                src="https://sicaschool78.org/wp-content/uploads/2025/03/senior-staff-photo-1.webp"
                alt="Event 2"
                style={{
                  width: "100%",
                  maxHeight: "500px",
                  objectFit: "cover",
                }}
              />
            </div>
          </Slider>
        </div>
      </section>

      <section
        style={{
          // display: "grid",
          // gridTemplateColumns: "1fr 1fr 1fr",
          padding: "40px 20px",
          // gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
          // alignItems: "start",
        }}
      >
        {/* Column 1: Welcome Text */}
        <div className="harish">
          <div>
            <h2 style={{ color: "red", fontSize: "15px" }}>
              Welcome To SICA Senior Secondary School
            </h2>
            <img
              src="https://sicaschool78.org/wp-content/uploads/2022/02/sica78.gif"
              alt="School"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </div>
          <div>
            <p>
              SICA S.S.School is a leading Co-Educational English Medium CBSE
              School, in Indore. Today over 6700 students are studying in SICA
              Institutions situated in 5 locations. Classes Nursery to XII is
              managed by a Trust formed in 1984 known as SICA EDUCATIONAL TRUST.
              The reputation of SICA Schools at Indore is very good and is being
              rated as one of the top schools at the most affordable fees under
              the CBSE Syllabus offering all important streams of education like
              Mathematics, Biology, Commerce, Computer Science , Informatics
              Practices, Music (Vocal and Instrumental), and Entrepreneurship
              with latest infrastructure and amenities.
            </p>
          </div>

          <div>
            <h3 style={{ color: "red", marginBottom: "15px" }}>
              News & Events
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {news.map((item) => (
                <li
                  key={item.id}
                  style={{
                    marginBottom: "10px",
                    borderBottom: "1px solid #ddd",
                    paddingBottom: "5px",
                    fontSize: "14px",
                  }}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 20px", background: "#f9f9f9" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            maxWidth: "1080px",
            margin: "0 auto",
          }}
        >
          {categories.map((cat, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #0C71C3",
                borderRadius: "8px",
                padding: "20px",
                background: "white",
                minHeight: "250px",
              }}
            >
              <h3
                style={{
                  marginBottom: "10px",
                  fontSize: "18px",
                  color: "#fc4f4fff",
                }}
              >
                {cat}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {blogs.slice(index * 2, index * 2 + 2).map((post) => (
                  <li
                    key={post.id}
                    style={{
                      marginBottom: "8px",
                      fontSize: "14px",
                      borderBottom: "1px dotted #ddd",
                      paddingBottom: "4px",
                    }}
                  >
                    {post.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SeniorSecondary;
