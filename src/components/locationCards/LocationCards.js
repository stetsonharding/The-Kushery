import React from "react";

import "./Locations.css";

function LocationCards(props) {
  return (
    <div className="card locations__card-container">
      <div className="row" key={props.id}>
        <div className="col-md-4">
          <img
            src={props.img}
            alt={props.alt}
            className="img-fluid  locations-image locations-image-hover"
          />
        </div>
        <div className="col-md-8">
          <h2 className="locations__title">{props.title}</h2>
          <a
            href={`tel:${props.phoneLink}`}
            className="card-text locations__phone"
          >
            {props.phone}
          </a>

          <p className="card-text locations__address">
            {props.address}
            <br />
            {props.stateAndZip}
          </p>
          <p className="card-text locations__hours" style={{ margin: "0 0" }}>
            {props.hours}
            <br />
            {props.hours2}
          </p>
          <div className="card-buttons locations__button-container">
            <a
              href={props.menu}
              target="_blank"
              rel="noopener noreferrer"
              className="locations__orderButton"
            >
              Order Online
            </a>
            <a
              href={props.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="locations__directionButton "
            >
              Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationCards;
