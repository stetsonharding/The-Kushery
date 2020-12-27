import React from "react"

import "./Styles/Banner.css"

function Banner(props){
    return(
    
        <div>
        <div className="container-fluid">
            <div classname="row">
                <div className="col-md-12 banner">
                    <div className="banner-text">
                    <h1 class="banner-directory">{props.directory}</h1>
                    <h2 class="banner-description">{props.description}</h2>
                    <h3 class="banner-welcome">{props.welcome}</h3>
                    </div>
                </div>
            </div>
        </div>
        </div>
   
    )
}

export default Banner;