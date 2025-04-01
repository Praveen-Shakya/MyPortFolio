import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo-group">
      <img src={assets.logo} alt="Logo" className="logo" />
      <h2 className="logo-title">PORTFOLIO</h2>
      </div>
      <div
        className="dekstopMenu"
      >
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="dekstopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about-me-section"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="dekstopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="skills-container"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="dekstopMenuListItem"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="projects-container"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="dekstopMenuListItem"
        >
          Projects
        </Link>
      </div>
      <button
        className="dekstopMenuBtn"
        onClick={() => {
          document
            .getElementById("contactPage")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={assets.contact} alt="" className="dekstopMenuImg" />
        Contact Me
      </button>
      <img src={assets.menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)}/>
      <div className="navMenu"  style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          PortFolio
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Clients
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
