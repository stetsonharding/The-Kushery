import React from "react"

import "./Styles/Banner.css"

function Banner(props){
    return(
    
        <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 banner">
                    <div className="banner-text">
                    <h1 className="banner-directory">{props.directory}</h1>
                    <h2 className="banner-description">{props.description}</h2>
                    <h3 className="banner-welcome">{props.welcome}</h3>
                    </div>
                </div>
            </div>
        </div>
        </div>
   
    )
}

export default Banner;