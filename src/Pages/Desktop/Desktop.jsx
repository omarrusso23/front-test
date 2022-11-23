import React, { useState, useEffect } from "react";
import "./Desktop.css";
import Navbar from "../../Components/Navbar/Navbar";
import RenderingArrayOfObjects from "../../Components/Cards/RenderListDesktop";
import RenderingArrayOfObjectsMobile from "../../Components/Cards/RenderListMobile";

//This functions are responsible for monotoring the width of the screen so we can now if we need to render de mobile version or the mobile version
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

//Render of the page
const Desktop = () => {
  const { width } = useWindowDimensions();
  //if the window dimensions are bigger than 840 we show the desktop version witch is between 2 and 4 columns
  if ({ width }.width >= 800) {
    return (
      <div className="Desktop">
        <div className="navbar">
          <Navbar></Navbar>
        </div>
        <div className="desktopListContainer">
          <RenderingArrayOfObjects />
        </div>
      </div>
    );
  }
  //if the window dimensions are smaller than 840 we show the desktop version witch has only one colum and the likes are display bellow
  else {
    return (
      <div className="Desktop">
        <div className="navbar">
          <Navbar></Navbar>
        </div>
        <div className="desktopListContainer">
          <RenderingArrayOfObjectsMobile />
        </div>
      </div>
    );
  }
};

export default Desktop;
