import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Top Header */}
      <div className="top-header">
        <a href="/" className="">
          <img
            src="https://sicaschool78.org/wp-content/uploads/2022/02/SICA_LOGO__1_-3.jpg"
            alt="School Logo"
            className="logo"
          />
        </a>
        <div className="school-title">
          <h1>SICA Senior Secondary School, Indore</h1>
          <p>
            ( Aegis: SICA Educational Trust ) Affiliated to CBSE New Delhi, No
            1030040
          </p>
        </div>
      </div>

      {/* Navbar */}
      <nav className="menu-bar">
        {/* Hamburger button (only visible on mobile) */}
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mainMenu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Menu items */}
        <ul
          className={`menu ${open ? "open" : ""}`}
          id="mainMenu"
        >
          <li>HOME</li>
          <li className="dropdown">
            MESSAGE ▾
            <ul className="dropdown-menu">
              <li>Chairman’s Message</li>
              <li>Principal’s Message</li>
            </ul>
          </li>
          <li className="dropdown">
            ABOUT ▾
            <ul className="dropdown-menu">
              <li>About School</li>
              <li>Vision & Mission</li>
            </ul>
          </li>
          <li className="dropdown">
            ADMISSION ▾
            <ul className="dropdown-menu">
              <li>OVERVIEW</li>
              <li>FEES STRUCTURE</li>
              <li>PROCEDURE</li>
              <li>UNIFORM</li>
            </ul>
          </li>
          <li className="dropdown">
            ACTIVITIES ▾
            <ul className="dropdown-menu">
              <li>Primary Wing (Classes-I to V)</li>
              <li>Secondary Wing (Classes-I to V)</li>
              <li>PTA Committii</li>
            </ul>
          </li>
          <li>ACADEMICS ▾</li>
          <li>FACILITIES ▾</li>
          <li>EVENT’S ▾</li>
          <li>CAREER ▾</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
