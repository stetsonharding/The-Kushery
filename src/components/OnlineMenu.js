import React from "react"

import "./Styles/OnlineMenu.css"

function OnlineMenu(props){

    return(
        <div>
          
  <div className="container">
              <div class="row">
                  <div class="col col-md-12 onlineMenu ">
                      <div >{props.storeMenu}</div>
                  </div>
              </div>
          </div>

        </div>
    )
}

export default OnlineMenu