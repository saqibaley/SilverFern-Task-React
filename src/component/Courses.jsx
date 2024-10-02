import React from "react";
import carImage from "../images/carIcon.svg";
import vanImage from "../images/vanIcon.svg";
import busImage from "../images/busIcon.svg";
import lightImage from "../images/lightMachinery.svg";
import heavyImage from "../images/heavyMachinery.svg";
import bikeImage from "../images/bikeIcon.svg";
export default function Courses() {
  return (
    <section className="cardSection">
      <h3>Our Courses</h3>
      <div className="cards">
        <div className="card">
          <div className="icon">
            <img src={carImage} alt="Light Vehicle" />
          </div>
          <div className="label">Light Vehicle</div>
        </div>
        <div className="card">
          <div className="icon">
            <img src={vanImage} alt="Light Vehicle" />
          </div>
          <div className="label">Light Vehicle</div>
        </div>
        <div className="card">
          <div className="icon">
            <img src={busImage} alt="Light Vehicle" />
          </div>
          <div className="label">Light Vehicle</div>
        </div>
        <div className="card">
          <div className="icon">
            <img src={lightImage} alt="Light Vehicle" />
          </div>
          <div className="label">Light Vehicle</div>
        </div>
        <div className="card">
          <div className="icon">
            <img src={heavyImage} alt="Light Vehicle" />
          </div>
          <div className="label">Light Vehicle</div>
        </div>
        <div className="card">
          <div className="icon">
            <img src={bikeImage} alt="Light Vehicle" />
          </div>
          <div className="label">Light Vehicle</div>
        </div>
      </div>
    </section>
  );
}
