import React from "react";
import { StoreTagsData } from "./StoreTagsData";
import "./StoreTags.css";

export default function StoreTags() {
  //creating store data elements
  const storeTags = StoreTagsData.map((storetag) => {
    return (
      <div
        key={storetag.id}
        className="col-xs-12 col-sm-12 col-md-6 col-lg-4 center align=center storeTag__individual-tag-container"
      >
        <div className="storeTag__information-container">
          <i className={`${storetag.image} storeTag__image`} />
          <h3 className="storeTag__title">{storetag.title}</h3>
          <p className="storeTag__sub-title">{storetag.subTitle}</p>
        </div>
      </div>
    );
  });
  //====

  return (
    <div className="container-fluid center storeTags__container">
      <div data-aos="flip-right" className="row text-center z">
        {storeTags}
      </div>
    </div>
  );
}
