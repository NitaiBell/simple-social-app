// src/pages/Carousel.jsx
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselPage = () => {
  return (
    <div className="carousel-page">
      <h2 className="headline-up">🚀 Featured Carousel</h2>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={6000}
        showDots={true}
        arrows={true}
      >
        <div className="carousel-card">Item 1</div>
        <div className="carousel-card">Item 2</div>
        <div className="carousel-card">Item 3</div>
        <div className="carousel-card">Item 4</div>
        <div className="carousel-card">Item 5</div>
      </Carousel>
    </div>
  );
};

export default CarouselPage;

  