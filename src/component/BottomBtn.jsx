import React from "react";
import joinBtnArrow from "../images/joinBtnArrow.svg";

const ButtonComponent = () => {
  return (
    <div className="button-container">
      <span className="bold-text">At infinia vacation,</span> we redefine the
      concept of vacation ownership.
      <button
        className="join-button"
        style={{ backgroundColor: "rgba(237, 220, 202, 1)" }}
      >
        JOIN US
        <img src={joinBtnArrow} alt="Right Arrow" className="arrow-icon" />
      </button>
    </div>
  );
};

export default ButtonComponent;
