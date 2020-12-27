import React from "react"

import OnlineMenu from "../../components/OnlineMenu"
import Banner from "../../components/Banner"


function LakeForestParkOnlineMenu(){
    return(
        <div>
          <Banner 
           directory="Lake Forest Park Online Menu"
          />
          <OnlineMenu 
          storeMenu={"Menu Goes Here"}
          />
        </div>
    )
}

export default LakeForestParkOnlineMenu;