import React, { useState, useEffect } from "react";
import "./Desktop.css";
import Navbar from "../Components/Navbar";
import RenderingArrayOfObjects, {
  pages,
} from "../Components/RenderListDesktop";
import RenderingArrayOfObjectsMobile from "../Components/RenderListMobile";

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

const Desktop = () => {
  const { width } = useWindowDimensions();
  if ({ width }.width >= 840) {
    return (
      <div className="Desktop">
        <div className="navbar">
          <Navbar></Navbar>
        </div>
        <div className="desktopListContainer">
          <RenderingArrayOfObjects />
        </div>
        <div className="Footer">
          <div className="divSocial">
            <ul className="social-links">
              <li className="google">
                <svg viewBox="0 0 18.005 18.005">
                  <g transform="translate(-40 -40)">
                    <path
                      d="M57.83,47.239H57.1V47.2H49v3.6H54.09a5.406,5.406,0,1,1-1.5-5.834l2.546-2.546A8.993,8.993,0,1,0,58,49,9.059,9.059,0,0,0,57.83,47.239Z"
                      fill="#fff"
                    />
                    <path
                      d="M63.059,44.812l2.958,2.169a5.39,5.39,0,0,1,8.59-2.013l2.546-2.546a8.985,8.985,0,0,0-14.094,2.39Z"
                      transform="translate(-22.021)"
                      fill="#fff"
                    />
                    <path
                      d="M69.964,287.717A8.96,8.96,0,0,0,76,285.38l-2.786-2.358a5.387,5.387,0,0,1-8.328-2.483L61.949,282.8A9,9,0,0,0,69.964,287.717Z"
                      transform="translate(-20.961 -229.712)"
                      fill="#fff"
                    />
                    <path
                      d="M248.827,200.037H248.1V200H240v3.6h5.088a5.421,5.421,0,0,1-1.84,2.508h0l2.786,2.358A8.708,8.708,0,0,0,249,201.8,9.059,9.059,0,0,0,248.827,200.037Z"
                      transform="translate(-190.998 -152.798)"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </li>
              <li className="facebook">
                <svg viewBox="0 0 18 17.909">
                  <path
                    d="M9,0A8.995,8.995,0,0,0,7.655,17.889v-6.5H5.429V9.02H7.655V7.444c0-2.6,1.269-3.75,3.434-3.75a12.915,12.915,0,0,1,1.846.112V5.871H11.458c-.92,0-1.24.873-1.24,1.854v1.3h2.7l-.366,2.365H10.219v6.524A9,9,0,0,0,9,0Z"
                    fill="#fff"
                  />
                </svg>
              </li>
              <li className="twitter">
                <svg viewBox="0 0 18 14.499">
                  <g transform="translate(-59.969 -90)">
                    <path
                      d="M77.969,91.714a7.492,7.492,0,0,1-2.123.581,3.689,3.689,0,0,0,1.625-2.029,7.408,7.408,0,0,1-2.346.888,3.683,3.683,0,0,0-6.289,3.34,10.524,10.524,0,0,1-7.611-3.827,3.648,3.648,0,0,0,1.142,4.891,3.759,3.759,0,0,1-1.674-.457v.043a3.671,3.671,0,0,0,2.961,3.59,3.68,3.68,0,0,1-.97.131,3.91,3.91,0,0,1-.7-.068,3.7,3.7,0,0,0,3.449,2.543,7.463,7.463,0,0,1-4.587,1.567,7.267,7.267,0,0,1-.88-.052A10.554,10.554,0,0,0,65.63,104.5,10.388,10.388,0,0,0,76.138,94.083c0-.159,0-.317-.012-.472a7.267,7.267,0,0,0,1.843-1.9"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </li>
            </ul>
          </div>
          <div id="pageIndicator">
            <h5>
              <b>Page: {pages}</b>
            </h5>
          </div>
          <div className="pages">
            <button className="btnDown">Prev page</button>
            <button className="btnUp">Next page</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Desktop">
        <div className="navbar">
          <Navbar></Navbar>
        </div>
        <div className="desktopListContainer">
          <RenderingArrayOfObjectsMobile />
        </div>
        <div className="Footer">
          <div className="divSocial">
            <ul className="social-links">
              <li className="google">
                <svg viewBox="0 0 18.005 18.005">
                  <g transform="translate(-40 -40)">
                    <path
                      d="M57.83,47.239H57.1V47.2H49v3.6H54.09a5.406,5.406,0,1,1-1.5-5.834l2.546-2.546A8.993,8.993,0,1,0,58,49,9.059,9.059,0,0,0,57.83,47.239Z"
                      fill="#fff"
                    />
                    <path
                      d="M63.059,44.812l2.958,2.169a5.39,5.39,0,0,1,8.59-2.013l2.546-2.546a8.985,8.985,0,0,0-14.094,2.39Z"
                      transform="translate(-22.021)"
                      fill="#fff"
                    />
                    <path
                      d="M69.964,287.717A8.96,8.96,0,0,0,76,285.38l-2.786-2.358a5.387,5.387,0,0,1-8.328-2.483L61.949,282.8A9,9,0,0,0,69.964,287.717Z"
                      transform="translate(-20.961 -229.712)"
                      fill="#fff"
                    />
                    <path
                      d="M248.827,200.037H248.1V200H240v3.6h5.088a5.421,5.421,0,0,1-1.84,2.508h0l2.786,2.358A8.708,8.708,0,0,0,249,201.8,9.059,9.059,0,0,0,248.827,200.037Z"
                      transform="translate(-190.998 -152.798)"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </li>
              <li className="facebook">
                <svg viewBox="0 0 18 17.909">
                  <path
                    d="M9,0A8.995,8.995,0,0,0,7.655,17.889v-6.5H5.429V9.02H7.655V7.444c0-2.6,1.269-3.75,3.434-3.75a12.915,12.915,0,0,1,1.846.112V5.871H11.458c-.92,0-1.24.873-1.24,1.854v1.3h2.7l-.366,2.365H10.219v6.524A9,9,0,0,0,9,0Z"
                    fill="#fff"
                  />
                </svg>
              </li>
              <li className="twitter">
                <svg viewBox="0 0 18 14.499">
                  <g transform="translate(-59.969 -90)">
                    <path
                      d="M77.969,91.714a7.492,7.492,0,0,1-2.123.581,3.689,3.689,0,0,0,1.625-2.029,7.408,7.408,0,0,1-2.346.888,3.683,3.683,0,0,0-6.289,3.34,10.524,10.524,0,0,1-7.611-3.827,3.648,3.648,0,0,0,1.142,4.891,3.759,3.759,0,0,1-1.674-.457v.043a3.671,3.671,0,0,0,2.961,3.59,3.68,3.68,0,0,1-.97.131,3.91,3.91,0,0,1-.7-.068,3.7,3.7,0,0,0,3.449,2.543,7.463,7.463,0,0,1-4.587,1.567,7.267,7.267,0,0,1-.88-.052A10.554,10.554,0,0,0,65.63,104.5,10.388,10.388,0,0,0,76.138,94.083c0-.159,0-.317-.012-.472a7.267,7.267,0,0,0,1.843-1.9"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </li>
            </ul>
          </div>
          <div id="pageIndicator">
            <p>
              <b>Page: {pages}</b>
            </p>
          </div>
          <div className="pages">
            <button className="btnDown">Prev page</button>
            <button className="btnUp">Next page</button>
          </div>
        </div>
      </div>
    );
  }
};

export default Desktop;
