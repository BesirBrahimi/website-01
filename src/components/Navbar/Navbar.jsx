import React from "react";
import "./navbar.css";
import logo1 from "../../assets/navbar.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-items">
        <div className="logo">
          <img src={logo1} alt="css" />
        </div>
        <div className="navbar-links">
          <Link to="/">Courses</Link>
          <Link to="/Pricing">Pricing</Link>
          <Link to="/Slides">Slides</Link>
          <Link to="/Projects">Profiles </Link>
          <Link to="/SignUp">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
