import React from "react"
import {Link} from "react-router-dom"



function LocationCards(props){
    return(
    
            <div className="card text-center cards">
                <div class="overflow">
                    <img src={props.img} alt={props.alt} className="card-img-top card-img"/>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.phone}</p>
                    <p className="card-text ">{props.hours}</p>
                    <p className="card-text ">{props.address}</p>
                    <a href={props.directions} className="btn btn-success locationBtn">Directions</a>
                    <Link to={props.menu} className="btn btn-success locationBtn">Order Online</Link> 
                   
                </div>
          </div>
        
    )
}

export default LocationCards