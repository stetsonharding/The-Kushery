import React from "react";

import "./Banner.css";

function Banner(props) {
  return (
    <div>
      <div className="container-fluid banner">
        <div className="row">
          <div className="col banner__wrapper">
            <h1 className="banner__title">{props.directory}</h1>
            <h2 className="banner__description">{props.description}</h2>
            <h3 className="banner__message">{props.welcome}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
