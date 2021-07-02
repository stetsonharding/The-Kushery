import React from "react";

import "./StoreTags.css";

export default function StoreTags(props) {
  return (
    <div
      key={props.id}
      className="col-xs-12 col-sm-12 col-md-6 col-lg-4 center storeTag__individual-tag-container"
    >
      <div className="storeTag__information-container">
        <i className={`${props.image} storeTag__image`} />
        <h3 className="storeTag__title">{props.title}</h3>
        <p className="storeTag__sub-title">{props.subTitle}</p>
        <i className={props.arrow} />
      </div>
    </div>
  );
}
