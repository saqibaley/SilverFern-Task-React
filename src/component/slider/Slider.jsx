import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Styles.css";
import { Slider1, Slider2 } from "../../images/image";

const data = [
  { title: Slider1, content: "This is the first slide" },
  { title: Slider2, content: "This is the second slide" },
];

const Slider = () => {
  const [fullSize, setFullSize] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFullSize(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <div className={`carousel-container ${fullSize ? "full" : ""}`}>
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          showIndicators={false}
          swipeable={false}
          showArrows={false}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className={`carousel-slide ${fullSize ? "full" : ""}`}
            >
              <img src={item.title} alt="slider" className="image" />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="carousel-text">
        Welcome to The World of Infinite Vacations
      </div>
    </div>
  );
};

export default Slider;
