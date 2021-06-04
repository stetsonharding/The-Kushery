import React, { useState } from "react";
import { carouselItems } from "../carousel/carouselData";

import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import "./MainCarousel.css";

export default function MainCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = carouselItems.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <img
        className="image"
          src={item.image}
          alt={item.alt}
          style={{ height: "1100px", width: "100%", objectFit: "cover" }}
        />
        <CarouselCaption
          style={{ visibility: "n" }}
     
          captionText={item.title}
          
         
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex}>
      <CarouselIndicators
        items={carouselItems}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
    </Carousel>
  );
}

