import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

import "./Jumbotron.css"

export default function Jumbotron(){

useEffect(() =>{
Aos.init({duration: 1500})
},[])

    return(
        <div className="container-fluid jumbotron__container">
        <div className="row">
          <div className="jumbotron__intro-container">
           
              <p id="jumbotron__intro-title" data-aos="fade-right">PERSONALIZED SERVICE, EXPERIENCED STAFF, COMPETITIVE PRICES. </p>
             
            <p className="jumbotron__intro">
        
              As the best recreational marijuana dispensary in Washington, we
              offer cannabis products with varying levels of THC. Whether you
              are looking for products with low THC or ones with high THC
              concentration, we've got something for you. The Kushery raises the
              bar by leading the retail dispensary experience in the State of
              Washington.
            </p>
            <div  className="jumbotron__button-container">
            <a href="/Location" className="jumbotron__button">View Locations</a>
          </div>
          </div>
        
        </div>
      </div>

    )
}
