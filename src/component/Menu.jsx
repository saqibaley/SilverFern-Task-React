import React from "react";
import arrow from "../images/arrowDown.svg";
export default function () {
  return (
    <div className="menu-popup">
      <div className="menu-popup-items">
        <a href="">Home</a>
        <a href="">Courses</a>
        <a href="">About</a>
        <a href="">For Investors</a>
      </div>
      <div className="menu-popup-items">
        <span className="remain">2.94 AED +0.00%</span>
        <button className="menu-btn">Register or Log in</button>
        <span className="remain">
          En <img src={arrow} />
        </span>
      </div>
    </div>
  );
}
