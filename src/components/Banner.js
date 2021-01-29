import React from "react"

import "./Styles/Banner.css"

function Banner(props){
    return(
    
        <div>
        <div className="container-fluid banner">
            <div className="row">
                <div className="col banner-wrapper">
                    <h1 className="banner-title">{props.directory}</h1>
                    <h2 className="banner-description">{props.description}</h2>
                    <h3 className="banner-message">{props.welcome}</h3>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Banner;