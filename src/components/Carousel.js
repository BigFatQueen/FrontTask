import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { photoGallary } from "../assets/data";
const CarouselDiv = () => {
  return (
    <Carousel>
      {photoGallary.map((item, index) => {
        return (
          <div key={index} style={{ width: "100%", height: "400px" }}>
            <img
              src={item}
              style={{
                minwidth: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "center",
              }}
              alt={item}
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselDiv;
