import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "./Jumbotron.css";

export default function Jumbotron(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container-fluid jumbotron__container">
      <div className="row">
        <div className="jumbotron__intro-container">
          <h3 id="jumbotron__intro-title" data-aos="fade-right">
            {props.title}
          </h3>

          <p className="jumbotron__intro">{props.intro}</p>
          <div className="jumbotron__button-container">
            <a href={props.link} className="jumbotron__button">
              {props.button}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
