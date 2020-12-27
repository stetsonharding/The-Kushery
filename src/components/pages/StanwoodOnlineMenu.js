import React from "react"

import OnlineMenu from "../../components/OnlineMenu"
import Banner from "../../components/Banner"


function StanwoodOnlineMenu(){
    return(
        <div>
          <Banner 
           directory="Stanwood Online Menu"
          />
          <OnlineMenu 
          storeMenu={"Menu Goes Here"}
          />
        </div>
    )
}

export default StanwoodOnlineMenu;