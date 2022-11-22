import React from "react";
import "./Navbar.css";
import SearchBar from "./searchBar";

function Navbar() {
  return (
    <div className="Navbar">
      {/*Navbar Logo*/}
      <div className="nav-logo"></div>
      {/*Navbar Search bar*/}
      <div className="nav-search">
        <SearchBar></SearchBar>
      </div>
    </div>
  );
}

export default Navbar;
