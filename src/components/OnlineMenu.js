import React from "react"

import "./Styles/OnlineMenu.css"

function OnlineMenu(props){

    return(
        <div>
          
  <div className="container">
              <div className="row">
                  <div className="col col-md-12 onlineMenu ">
                      <div >{props.storeMenu}</div>
                  </div>
              </div>
          </div>

        </div>
    )
}

export default OnlineMenu