import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
    padding: "0",
    overflow: "hidden",
    margin: "2%",
    color: "green",
    fontSize: "20px",
    width: "70%",
    border: "solid thin white",
    borderRadius: "8px",
    backgroundColor: "white",
    textAlign: "center",
    overflow: "hidden",
  };
  return (
    <div className="nav">
      <ul className="nav-ul">
        <Link style={linkStyle} to="/Todo">
          <li id="li-link">TODO</li>
        </Link>
        <li>Dishes</li>
        <li>Washing Machine</li>
        <li>Other</li>
        <li>Random</li>
      </ul>
    </div>
  );
};

export default Nav;
