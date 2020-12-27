import React from "react"

import OnlineMenu from "../../components/OnlineMenu"
import Banner from "../../components/Banner"


function ClearviewOnlineMenu(){
    return(
        <div>
          <Banner 
           directory="Clearview Online Menu"
          />
          <OnlineMenu 
          storeMenu={"Menu Goes Here"}
          />
        </div>
    )
}

export default ClearviewOnlineMenu;