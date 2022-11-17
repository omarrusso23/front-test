import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="nav-logo"></div>
      <div className="nav-search">
        <form className="search-box">
          <input type="text" placeholder="You're looking for something?" />
          <button type="reset"></button>
        </form>
      </div>
    </div>
  );
}

export default Navbar;
