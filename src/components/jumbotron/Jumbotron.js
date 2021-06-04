import React from 'react'

import "./Jumbotron.css"

export default function Jumbotron(){
    return(
        <div className="container-fluid jumbotron__container">
        <div className="row">
          <div className="jumbotron__intro-container">
              <p id="jumbotron__intro-title">PERSONALIZED SERVICE, EXPERIENCED STAFF, COMPETITIVE PRICES. </p>
            <p className="jumbotron__intro">
              As the best recreational marijuana dispensary in Washington, we
              offer cannabis products with varying levels of THC. Whether you
              are looking for products with low THC or ones with high THC
              concentration, we've got something for you. The Kushery raises the
              bar by leading the retail dispensary experience in the State of
              Washington.
            </p>
            <div  className="jumbotron__button-container">
            <a href="/Location" className="jumbotron__button">
              Locations
            </a>
          </div>
          </div>
        
        </div>
      </div>

    )
}